<div class="sc-dkPtRN jScFby scroll-view sc-jCHUfY cruphB">
  <div class="item">
    <h2>Game Scripts</h2>
    <div class="help-content">
      <p>
        Any script must have a<code>config</code>UI configuration and a<code
          >main</code
        >function to run.
      </p>
      <div class="sc-dPiLbb jQVFAL code-area">
        <pre>
   {`
var config = {}
function main () {}
   `}
    </pre>
      </div>
    </div>
    <h2>The UI Config</h2>
    <div class="help-content">
      <p>
        The key feature of the scripting system is that the script developer can
        customize the user input interface, allowing the script to read
        user-defined variables and make the script run according to different
        user configurations.
      </p>
      <p>At the top of each script, you must define the UI configuration</p>
      <p>
        Defines a normal<code>text</code>input control that prints the user's
        input at run time
      </p>
      <div class="sc-dPiLbb jQVFAL code-area">
        <pre>
        {`
var config = {
    name: { value: 'jack', type: 'text', label: 'Name' }
}

function main () {
    log.info(config.name.value)
}
        `}
        </pre>
      </div>
      <p>
        Define a<code>number</code>input control and print the user's input at
        run time
      </p>
      <div class="sc-dPiLbb jQVFAL code-area">
        <pre>{`
var config = {
    bet: { value: 'wager', type: 'number', label: 'Wager' }
}
function main () {
    log.info(config.bet.value)
}
          `}
    
    </pre>
      </div>
      <p>
        Defines a<code>radio</code>radio control to print user input while
        running
      </p>
      <div class="sc-dPiLbb jQVFAL code-area">
        <pre>{`
var config = {
    colors: {
        value: 'red', type: 'radio', label: 'Chose color',
        options: [
            { value: 'red', label: 'Red' },
            { value: 'blue', label: 'Blue' }
        ]
    }
}

function main () {
    log.info(config.colors.value)
}`}</pre>
      </div>
      <p>
        The script system parses the<code>config</code>configuration into the
        corresponding form interface. Users can provide input, and your script
        can access these variables at run time.
      </p>
      <p>The UI Config</p>
      <ul>
        <li><code>label</code>: the field name</li>
        <li><code>value</code>: default</li>
        <li>
          <code>type</code>: type，<code>text</code>, <code>number</code>,
          <code>radio</code>, <code>title</code>
        </li>
        <li>
          <div>
            <code>options</code>: Option value, only<code>radio</code>type can
            be set
          </div>
          <ul>
            <li><code>label</code>: Option of</li>
            <li><code>value</code>: The option value</li>
          </ul>
        </li>
      </ul>
    </div>
    <h2>Interacting with games</h2>
    <div class="help-cont">
      <p>
        All of your program logic should be implemented inside the<code
          >main</code
        >function, which runs after the user clicks on Run Script, providing you
        with objects that you can use to interact with the game
      </p>
      <h3>API</h3>
      <div class="sc-dPiLbb jQVFAL code-area">
        <pre>{`
var config = {}

function main () {
    game.onBet = function () {
        log.info('a game is starting')
    }
}
    `}</pre>
      </div>
      <p>Events:</p>
      <ul>
        <li>
          <code>GAME_STARTING</code>the game is ready to start, you can only
          guess at this time
        </li>
        <li><code>GAME_ENDED</code>game over</li>
      </ul>
      <p>Methods:</p>
      <ul>
        <li>
          <code
            >game.bet(wager: number, payout?: number): Promise&lt;number&gt;</code
          >: return payout&nbsp;
        </li>
        <li><code>game.stop()</code>: stop the script run</li>
      </ul>
      <h3>Logging API</h3>
      <div class="sc-dPiLbb jQVFAL code-area">
        <pre>log.info('hello world!')</pre>
      </div>
      <p>Methods:</p>
      <ul>
        <li><code>log.info()</code>: keep a general journal</li>
        <li><code>log.error()</code>: error log</li>
        <li><code>log.success()</code>: record a success log</li>
      </ul>
      <h3>Currency information API</h3>
      <p>
        The currency cannot be changed once the script starts running, and the
        script must be stopped for the change
      </p>
      <div class="sc-dPiLbb jQVFAL code-area">
        <pre>log.info('currency is '+currency.amount+currency.currencyName)</pre>
      </div>
      <p>Property:</p>
      <ul>
        <li><code>currencyName</code>: current currencyName</li>
        <li><code>amount</code>: current currency balance</li>
        <li>
          <code>maxAmount</code>: maximum betting limit for current currency
        </li>
        <li>
          <code>minAmount</code>: the minimum bet limit for the current currency
        </li>
      </ul>
    </div>
  </div>
</div>

<style>
  .cruphB {
    line-height: normal;
    user-select: text;
    color: rgba(153, 164, 176, 0.8);
    padding-bottom: 1.5rem !important;
  }

  .jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
  }
  .cruphB .item {
    margin-bottom: 2.75rem;
  }
  .cruphB .item .help-content {
    margin-bottom: 2.75rem;
  }
  .cruphB .item .help-content p {
    margin: 0.75rem 0px;
    word-break: break-word;
  }
  code {
    display: inline-block;
    line-height: 1.4;
    padding: 0 0.375rem;
    color: var(--primary-color);
    border-radius: 0.625rem;
  }
  .jQVFAL {
    padding: 1.25rem;
    border-radius: 1.25rem;
    color: rgb(245, 246, 247);
    background-color: rgba(45, 48, 53, 0.5);
    border: 1px solid rgb(45, 48, 53);
  }
  .jQVFAL pre {
    margin: 0px;
    padding: 0px;
    overflow-x: auto;
  }
  .cruphB .item h2 {
    font-size: 0.875rem;
    margin: 0px 0px 0.5rem;
    font-weight: 600;
    color: rgb(153, 164, 176);
  }
  .cruphB .item .help-content {
    margin-bottom: 2.75rem;
  }
  .cruphB .item .help-content p {
    margin: 0.75rem 0px;
    word-break: break-word;
  }
  .cruphB .item .help-content p {
    margin: 0.75rem 0px;
    word-break: break-word;
  }
  code {
    display: inline-block;
    line-height: 1.4;
    padding: 0 0.375rem;
    color: var(--primary-color);
    border-radius: 0.625rem;
  }
  
  .cruphB .item ul {
    padding-left: 1.2em;
    margin: 0px;
  }
  .cruphB .item ol li,
  .cruphB .item ul li {
    margin: 0px 0px 1rem;
  }
</style>
