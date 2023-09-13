<script>
  import { onMount } from "svelte";

  let sliderValue = 50;
  let slideWinColor = "green";
  let slideLoseColor = "orange";
  let isAutoBetting = false;
  let autoBetInterval;

  const handleSliderInput = (event) => {
    sliderValue = +event.target.value;
    const maxSliderValue = 98;
    const winColorStop = (sliderValue / maxSliderValue) * 100;
    const loseColorStop = 100 - winColorStop;

    slideWinColor = `linear-gradient(90deg, green ${winColorStop}%, transparent ${winColorStop}%)`;
    slideLoseColor = `linear-gradient(90deg, transparent ${loseColorStop}%, orange ${loseColorStop}%)`;
  };

  let isHovered = false;

  const handleSliderMouseEnter = () => {
    isHovered = true;
  };

  const handleSliderMouseLeave = () => {
    isHovered = false;
  };

  $: stepDisplayStyle = `
  position: absolute;
  top: -43px;
  background-color: #23262B;
  border-radius: 6px;
  padding: 6px 10px;
  left: ${sliderValue}%`;

  let randomStep = 50;
  let randomSteps = JSON.parse(localStorage.getItem("randomSteps")) || [];

  function playSound(soundId, color) {
    const sound = document.getElementById(soundId);
    sound.play();
    document.querySelector(".dice_num").style.color = color;
  }

  const rollDice = () => {
    const min = 2;
    const max = 98;
    randomStep = Math.floor(Math.random() * (max - min + 1)) + min;

    if (randomStep > sliderValue) {
      playSound("failureSound", "orange");
    } else {
      playSound("successSound", "green");
    }

    randomSteps = [...randomSteps, randomStep];
    localStorage.setItem("randomSteps", JSON.stringify(randomSteps));
  };

  function toggleAutoBet() {
    isAutoBetting = !isAutoBetting;

    if (isAutoBetting) {
      startAutoBet();
    } else {
      stopAutoBet();
    }
  }

  function startAutoBet() {
    autoBetInterval = setInterval(() => {
      const min = 2;
      const max = 98;
      randomStep = Math.floor(Math.random() * (max - min + 1)) + min;

      if (randomStep > sliderValue) {
        playSound("failureSound", "orange");
      } else {
        playSound("successSound", "green");
      }

      randomSteps = [...randomSteps, randomStep];
      localStorage.setItem("randomSteps", JSON.stringify(randomSteps));
    }, 1000);
  }

  function stopAutoBet() {
    clearInterval(autoBetInterval);
  }

  // sound on component mount
  onMount(() => {
    const sliderSound = new Audio("dice_rolling_sound.mp3");
    sliderSound.play();
  });

  let showManual = true;
  let showAuto = false;

  function toggleManual() {
    showManual = true;
    showAuto = false;
  }

  function toggleAuto() {
    showAuto = true;
    showManual = false;
  }
</script>

<div class="classic-di">
  <audio id="failureSound" controls src="wah_wah_failure_sound.wav" />
  <audio id="successSound" src="dice_success_sound.wav" />
  <div class="game-area" bis_skin_checked="1">
    <div class="game-main" bis_skin_checked="1">
      <div
        id="ClassicDice-control-0"
        class="sc-jFkwbb iDTkQI game-control style0"
        bis_skin_checked="1"
      >
        <div
          class="sc-iwjdpV ikWSlH radio game-control-switch"
          bis_skin_checked="1"
        >
          <button on:click={toggleManual} class:active={showManual}
            ><div class="label" bis_skin_checked="1">Manual</div></button
          >
          <button on:click={toggleAuto} class:active={showAuto}
            ><div class="label" bis_skin_checked="1">Auto</div></button
          >
        </div>
        <div class="game-control-panel" bis_skin_checked="1">
          {#if showManual}
            <div class="sc-lnDqNf kBNUDl" bis_skin_checked="1">
              <div
                class="sc-ezbkAF gcQjQT input sc-fvxzrP gOLODp sc-gwNDlS icApxq game-coininput"
                bis_skin_checked="1"
              >
                <div class="input-label" bis_skin_checked="1">
                  <div class="sc-gLEhor iYmVqV label" bis_skin_checked="1">
                    <div bis_skin_checked="1">Amount</div>
                    <div class="max-profit" bis_skin_checked="1">
                      <svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                        ><use xlink:href="#icon_Inform" /></svg
                      >
                      <div class="tip" bis_skin_checked="1">
                        <span class="tit">Max Profit:&nbsp;</span>
                        <div
                          class="sc-Galmp erPQzq coin notranslate"
                          bis_skin_checked="1"
                        >
                          <div class="amount" bis_skin_checked="1">
                            <span class="amount-str"
                              >5000.<span class="suffix">00000</span></span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="label-amount" bis_skin_checked="1">0 USD</div>
                </div>
                <div class="input-control" bis_skin_checked="1">
                  <input type="text" value="15302.880859375" />
                  <img class="coin-icon" src="/coin/CUB.black.png" alt="" />
                  <div
                    class="sc-kDTinF bswIvI button-group"
                    bis_skin_checked="1"
                  >
                    <button>/2</button><button>x2</button><button
                      class="sc-cOLXoO jmMcg"
                      ><svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                        ><use xlink:href="#icon_Arrow" /></svg
                      ><svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                        ><use xlink:href="#icon_Arrow" /></svg
                      ></button
                    >
                  </div>
                </div>
              </div>
              <div
                class="sc-ezbkAF gWrsXy input sc-fvxzrP gOLODp"
                disabled=""
                bis_skin_checked="1"
              >
                <div class="input-label win_amount" bis_skin_checked="1">
                  Win Amount
                  <div class="label-amount" bis_skin_checked="1">0 USD</div>
                </div>
                <div class="input-control" bis_skin_checked="1">
                  <input type="text" disabled="" value="30299.704101563" />
                  <img class="coin-icon" src="/coin/CUB.black.png" alt="" />
                </div>
              </div>
              <button
                class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big bet-button"
                on:click={rollDice}
                ><div class="button-inner" bis_skin_checked="1">
                  Roll Now
                </div></button
              >
            </div>
          {/if}

          {#if showAuto}
            <div class="sc-hDzdEj knbVrE" bis_skin_checked="1">
              <div
                class="sc-ezbkAF gcQjQT input sc-fvxzrP gOLODp sc-dWbSDx IUvXt game-coininput"
                bis_skin_checked="1"
              >
                <div class="input-label" bis_skin_checked="1">
                  <div class="sc-jnSlpE dJJJKk label" bis_skin_checked="1">
                    <div bis_skin_checked="1">Amount</div>
                    <div class="max-profit" bis_skin_checked="1">
                      <svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                        ><use xlink:href="#icon_Inform" /></svg
                      >
                      <div class="tip" bis_skin_checked="1">
                        <span class="tit">Max Profit:&nbsp;</span>
                        <div
                          class="sc-Galmp erPQzq coin notranslate"
                          bis_skin_checked="1"
                        >
                          <div class="amount" bis_skin_checked="1">
                            <span class="amount-str"
                              >5000.<span class="suffix">00000</span></span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="label-amount" bis_skin_checked="1">0 USD</div>
                </div>
                <div class="input-control" bis_skin_checked="1">
                  <input type="text" value="100.000000000" /><img
                    alt="coin"
                    class="coin-icon"
                    src="/coin/CUB.black.png"
                  />
                  <div
                    class="sc-kDTinF bswIvI button-group"
                    bis_skin_checked="1"
                  >
                    <button>/2</button><button>x2</button><button
                      class="sc-fpyFWH AZvYO"
                      ><svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                        ><use xlink:href="#icon_Arrow" /></svg
                      ><svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                        ><use xlink:href="#icon_Arrow" /></svg
                      ></button
                    >
                  </div>
                </div>
              </div>
              <div class="sc-ezbkAF hzTJOu input" bis_skin_checked="1">
                <div class="input-label" bis_skin_checked="1">
                  Number of Bets
                </div>
                <div class="input-control" bis_skin_checked="1">
                  <input type="text" value="0" />
                  <div
                    class="sc-kDTinF bswIvI button-group"
                    bis_skin_checked="1"
                  >
                    <button>∞</button><button>10</button><button>100</button>
                  </div>
                </div>
              </div>
              <div
                class="sc-ezbkAF hzTJOu input sc-faIbUi bGuvOe"
                bis_skin_checked="1"
              >
                <div class="input-label" bis_skin_checked="1">On win</div>
                <div class="input-control" bis_skin_checked="1">
                  <input type="text" value="0" />
                  <div
                    class="sc-hRnpUl iQoJxX increase-switch"
                    bis_skin_checked="1"
                  >
                    <div class="dot-wrap" bis_skin_checked="1">
                      <div class="dot" bis_skin_checked="1" />
                    </div>
                    <div class="reset text" bis_skin_checked="1">Reset</div>
                    <div class="increse text" bis_skin_checked="1">
                      Increase by
                    </div>
                  </div>
                  <div class="percent" bis_skin_checked="1">%</div>
                </div>
              </div>
              <div
                class="sc-ezbkAF hzTJOu input sc-fvxzrP gOLODp"
                bis_skin_checked="1"
              >
                <div class="input-label" bis_skin_checked="1">
                  Stop on win
                  <div class="label-amount" bis_skin_checked="1">0 USD</div>
                </div>
                <div class="input-control" bis_skin_checked="1">
                  <input type="text" value="0.000000000" /><img
                    alt="coin"
                    class="coin-icon"
                    src="/coin/CUB.black.png"
                  />
                </div>
              </div>
              <div
                class="sc-ezbkAF hzTJOu input sc-faIbUi bGuvOe"
                bis_skin_checked="1"
              >
                <div class="input-label" bis_skin_checked="1">On lose</div>
                <div class="input-control" bis_skin_checked="1">
                  <input type="text" value="2" />
                  <div
                    class="sc-hRnpUl iQoJxX increase-switch"
                    bis_skin_checked="1"
                  >
                    <div class="dot-wrap" bis_skin_checked="1">
                      <div class="dot" bis_skin_checked="1" />
                    </div>
                    <div class="reset text" bis_skin_checked="1">Reset</div>
                    <div class="increse text" bis_skin_checked="1">
                      Increase by
                    </div>
                  </div>
                  <div class="percent" bis_skin_checked="1">%</div>
                </div>
              </div>
              <div
                class="sc-ezbkAF hzTJOu input sc-fvxzrP gOLODp"
                bis_skin_checked="1"
              >
                <div class="input-label" bis_skin_checked="1">
                  Stop on lose
                  <div class="label-amount" bis_skin_checked="1">0 USD</div>
                </div>
                <div class="input-control" bis_skin_checked="1">
                  <input type="text" value="0.000000000" /><img
                    alt="coin"
                    class="coin-icon"
                    src="/coin/CUB.black.png"
                  />
                </div>
              </div>
              <div class="sc-bhnkmi dszfkG script-tips" bis_skin_checked="1">
                <svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  class="sc-gsDKAQ hxODWG icon"
                  ><use xlink:href="#icon_Help" /></svg
                >
                <div class="tip-msg" bis_skin_checked="1">
                  <span
                    >Use of script is optional and players must take full
                    responsibility for any attendant risks. We will not be held
                    liable in this regard.</span
                  >
                </div>
              </div>
              <button
                class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big bet-button"
                on:click={toggleAutoBet}
                ><div class="button-inner" bis_skin_checked="1">
                  {#if isAutoBetting}
                    Stop Auto Bet
                  {:else}
                    Start Auto Bet
                  {/if}
                </div></button
              >
            </div>
          {/if}
        </div>
      </div>
      <div>
        <div class="game-view" bis_skin_checked="1">
          <div class="sc-hgkClB jmWHaJ game-recent" bis_skin_checked="1">
            <div class="sc-epFoly hXMuAy jackpot-enter" bis_skin_checked="1">
              <div class="title" bis_skin_checked="1">
                <span class="tit">Bankroll</span><span>CUB</span>
              </div>
              <div
                class="sc-Galmp erPQzq coin notranslate"
                bis_skin_checked="1"
              >
                <img class="coin-icon" src="/coin/CUB.black.png" alt="" />
                <div class="amount" bis_skin_checked="1">
                  <span class="amount-str">347359321</span>
                </div>
              </div>
            </div>
            <div class="recent-list-wrap" bis_skin_checked="1">
              {#if randomSteps.length > 0}
                {#each randomSteps as step, index}
                  <div
                    class="recent-list"
                    style=" transform: translate(0%, 0px);"
                    bis_skin_checked="1"
                    key={index}
                  >
                    <div class="recent-item" bis_skin_checked="1">
                      <div class="item-wrap is-win" bis_skin_checked="1">
                        {step}.00
                      </div>
                    </div>
                  </div>
                {/each}
              {:else}
                <div class="empty-item" bis_skin_checked="1">
                  <p>Game results will be displayed here.</p>
                </div>
              {/if}
            </div>
          </div>
          <div
            class="sc-jHwEXd gplguG game-box sc-lcDUFh dVoJHT"
            bis_skin_checked="1"
          >
            <div class="sc-iboAsT zLkpl" bis_skin_checked="1">
              <span>House Edge 1%</span>
            </div>
            <div class="game-slider" bis_skin_checked="1">
              <div class="slider-wrapper" bis_skin_checked="1">
                <div class="slider-handles" bis_skin_checked="1">
                  <input
                    type="range"
                    min="2"
                    max="98"
                    step="1"
                    class="drag-block"
                    bind:value={sliderValue}
                    on:input={handleSliderInput}
                    on:mouseenter={handleSliderMouseEnter}
                    on:mouseleave={handleSliderMouseLeave}
                  />
                  {#if isHovered}
                    <span class="step-display" style={stepDisplayStyle}
                      >{sliderValue}</span
                    >
                  {/if}
                  <div
                    class="slider-track"
                    style="transform: translate({randomStep}%, 0px);"
                    bis_skin_checked="1"
                  >
                    <div class="dice_num" bis_skin_checked="1">
                      {randomStep}.00
                    </div>
                    <div class="dice_png" bis_skin_checked="1">
                      <img
                        alt="dice.png"
                        src="https://static.nanogames.io/assets/dice.1007262a.png"
                      />
                    </div>
                  </div>
                  <div class="slider-line" bis_skin_checked="1">
                    <div
                      class="slide-win"
                      style="background: {slideWinColor}"
                      bis_skin_checked="1"
                    />
                    <div
                      class="slide-lose"
                      style="background: {slideLoseColor}"
                      bis_skin_checked="1"
                    />
                    <div
                      class="slider-sign"
                      style="transform: translate({randomStep}%, 0px);"
                      bis_skin_checked="1"
                    >
                      <div class="sign" bis_skin_checked="1" />
                    </div>
                  </div>
                </div>
                <div class="slider-mark" bis_skin_checked="1">
                  <span class="mark">0</span><span class="mark">25</span><span
                    class="mark">50</span
                  ><span class="mark">75</span><span class="mark">100</span>
                </div>
              </div>
              <div class="sc-feYDSs cLMexC" bis_skin_checked="1">
                <div class="sc-ezbkAF gcQjQT input" bis_skin_checked="1">
                  <div class="input-label" bis_skin_checked="1">Payout</div>
                  <div class="input-control" bis_skin_checked="1">
                    <input type="text" value="1.9800" /><span class="right-info"
                      >x</span
                    >
                  </div>
                </div>
                <div
                  class="sc-ezbkAF gcQjQT input roll-switch"
                  bis_skin_checked="1"
                >
                  <div class="input-label" bis_skin_checked="1">Roll Under</div>
                  <div class="input-control" bis_skin_checked="1">
                    <input
                      type="text"
                      readonly=""
                      bind:value={sliderValue}
                    /><span class="right-info"
                      ><svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                        ><use xlink:href="#icon_Exchange" /></svg
                      ></span
                    >
                  </div>
                </div>
                <div
                  class="sc-ezbkAF gcQjQT input win-change"
                  bis_skin_checked="1"
                >
                  <div class="input-label" bis_skin_checked="1">Win Chance</div>
                  <div class="input-control" bis_skin_checked="1">
                    <input type="text" bind:value={sliderValue} />
                    <div class="right-info" bis_skin_checked="1">
                      <span class="right-percent">%</span><button
                        class="amount-scale">Min</button
                      ><button class="amount-scale">-5</button><button
                        class="amount-scale">+5</button
                      ><button class="amount-scale">Max</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg
              class="box-bg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 996 46"
              ><defs
                ><linearGradient
                  id="gcardBg"
                  x1="50%"
                  x2="50%"
                  y1="0%"
                  y2="100%"
                  ><stop offset="0%" stop-color="#31343C" /><stop
                    offset="100%"
                    stop-color="#1E2024"
                    stop-opacity="0"
                  /></linearGradient
                ></defs
              ><g opacity=".899"
                ><path
                  fill="url(#gcardBg)"
                  fill-rule="evenodd"
                  d="M0 0h996L892 46H96z"
                  opacity=".598"
                  transform="rotate(-180 498 23)"
                /></g
              ></svg
            >
          </div>
        </div>
        <div class="game-actions" bis_skin_checked="1">
          <button class="action-item active"
            ><svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="sc-gsDKAQ hxODWG icon"
              ><use xlink:href="#icon_SoundOn" /></svg
            ></button
          ><button class="action-item"
            ><svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="sc-gsDKAQ hxODWG icon"
              ><use xlink:href="#icon_TurboBet" /></svg
            ></button
          ><button class="action-item"
            ><svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="sc-gsDKAQ hxODWG icon"
              ><use xlink:href="#icon_HotKeys" /></svg
            ></button
          ><button class="action-item"
            ><svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="sc-gsDKAQ hxODWG icon"
              ><use xlink:href="#icon_LiveStats" /></svg
            ></button
          ><button class="action-item" id="set_seed"
            ><svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Seed" /></svg
            ></button
          ><button class="action-item"
            ><svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Help" /></svg
            ></button
          >
        </div>
      </div>
    </div>
  </div>
  <div class="tabs-navs" bis_skin_checked="1">
    <button class="tabs-nav is-active">All Bets</button><button class="tabs-nav"
      >My Bets</button
    ><button class="tabs-nav">Contest</button>
    <div class="bg" style="left: 0%; right: 66.6667%;" bis_skin_checked="1" />
  </div>
  <div class="tabs-view" style="transform: none;" bis_skin_checked="1">
    <div class="sc-jTycuM khrXGS" bis_skin_checked="1">
      <table class="sc-gWXbKe iUeetX table is-hover">
        <thead
          ><tr
            ><th class="num">Bet ID</th><th class="user">Player</th><th
              class="time">Time</th
            ><th class="bet">Bet</th><th class="payout">Payout</th><th
              class="profit">Profit</th
            ></tr
          ></thead
        ><tbody
          ><tr
            ><td><a href="/" class="hash ellipsis">5965116868686830</a></td><td
              ><a class="sc-jUosCB iTDswZ user-info" href="/user/profile/340113"
                ><div class="name" bis_skin_checked="1">Iqrafarooq❤️✨</div></a
              ></td
            ><td>00:00:39</td><td class="bet"
              ><div
                class="sc-Galmp erPQzq coin notranslate monospace"
                bis_skin_checked="1"
              >
                <img class="coin-icon" alt="" src="/coin/TRX.black.png" />
                <div class="amount" bis_skin_checked="1">
                  <span class="amount-str"
                    >1.<span class="suffix">00000000</span></span
                  >
                </div>
              </div></td
            ><td class="payout">0.00×</td><td class="profitline is-lose"
              ><div
                class="sc-Galmp erPQzq coin notranslate monospace has-sign"
                bis_skin_checked="1"
              >
                <img class="coin-icon" alt="" src="/coin/TRX.black.png" />
                <div class="amount" bis_skin_checked="1">
                  <span class="amount-str"
                    >1.<span class="suffix">00000000</span></span
                  >
                </div>
              </div></td
            ></tr
          ><tr
            ><td><a href="/" class="hash ellipsis">5965116868686821</a></td><td
              ><a class="sc-jUosCB iTDswZ user-info" href="/user/profile/340113"
                ><div class="name" bis_skin_checked="1">Iqrafarooq❤️✨</div></a
              ></td
            ><td>00:00:34</td><td class="bet"
              ><div
                class="sc-Galmp erPQzq coin notranslate monospace"
                bis_skin_checked="1"
              >
                <img class="coin-icon" src="/coin/TRX.black.png" alt="" />
                <div class="amount" bis_skin_checked="1">
                  <span class="amount-str"
                    >2.<span class="suffix">00000000</span></span
                  >
                </div>
              </div></td
            ><td class="payout">0.00×</td><td class="profitline is-lose"
              ><div
                class="sc-Galmp erPQzq coin notranslate monospace has-sign"
                bis_skin_checked="1"
              >
                <img class="coin-icon" alt="" src="/coin/TRX.black.png" />
                <div class="amount" bis_skin_checked="1">
                  <span class="amount-str"
                    >2.<span class="suffix">00000000</span></span
                  >
                </div>
              </div></td
            ></tr
          ><tr
            ><td><a href="/" class="hash ellipsis">6828766073136137</a></td><td
              ><a class="sc-jUosCB iTDswZ user-info" href="/classic-dice"
                ><div class="name" bis_skin_checked="1">
                  <span class="hidden-name"
                    ><svg
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      class="sc-gsDKAQ hxODWG icon"
                      ><use xlink:href="#icon_Hidden" /></svg
                    >Hidden</span
                  >
                </div></a
              ></td
            ><td>00:00:34</td><td class="bet"
              ><div
                class="sc-Galmp erPQzq coin notranslate monospace"
                bis_skin_checked="1"
              >
                <img class="coin-icon" alt="" src="/coin/DOGE.black.png" />
                <div class="amount" bis_skin_checked="1">
                  <span class="amount-str"
                    >0.0002<span class="suffix">0000</span></span
                  >
                </div>
              </div></td
            ><td class="payout">1.20×</td><td class="profitline is-win"
              ><div
                class="sc-Galmp erPQzq coin notranslate monospace has-sign"
                bis_skin_checked="1"
              >
                <img class="coin-icon" alt="" src="/coin/DOGE.black.png" />
                <div class="amount" bis_skin_checked="1">
                  <span class="amount-str"
                    >+0.00004<span class="suffix">000</span></span
                  >
                </div>
              </div></td
            ></tr
          >
        </tbody>
      </table>
    </div>
  </div>
  <div class="sc-zjkyB hzLhFr" bis_skin_checked="1">
    <div class="intro-title" bis_skin_checked="1">
      <p>Classic Dice</p>
      <div class="intro-tags" bis_skin_checked="1">
        <p>Our Best Games</p>
        <p>BC Originals</p>
        <p>Recommended Games</p>
        <p>Dice</p>
      </div>
    </div>
    <div class="description" bis_skin_checked="1">
      Classic Dice, a probability game established by blockchain hash value
      calculation and algorithm, provides more fun with bet and prediction, in
      which the closer the number rolled by players to the random number, the
      higher the probability winning.
    </div>
    <button class="intro-detail"
      >Details<svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Arrow" /></svg
      ></button
    >
  </div>
  <div class="sc-bxDdli dIbEXE sc-dXNJws eMYuCe" bis_skin_checked="1">
    <div class="swrap-header" bis_skin_checked="1">
      <div class="tit" bis_skin_checked="1">
        Recommended<span class="total">22</span>
      </div>
      <div class="sc-brSvTw kpCklu navigation-btns-wrap" bis_skin_checked="1">
        <button
          class="prev navigation-prev-recommend swiper-button-disabled"
          disabled=""
        >
          <svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="sc-gsDKAQ hxODWG icon"
          >
            <use xlink:href="#icon_Arrow" />
          </svg>
        </button>
        <button class="navigation-next-recommend">
          <svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="sc-gsDKAQ hxODWG icon"
          >
            <use xlink:href="#icon_Arrow" />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="swiper swiper-initialized swiper-horizontal swiper-pointer-events grid-list"
      bis_skin_checked="1"
    >
      <div
        class="swiper-wrapper"
        style="transform: translate3d(0px, 0px, 0px);"
        bis_skin_checked="1"
      >
        <div
          class="swiper-slide swiper-slide-active"
          style="width: 985px;"
          bis_skin_checked="1"
        >
          <div class="sc-bjeSbO kOlboS gird-list" bis_skin_checked="1">
            <div
              class="sc-gfqkcP epfPPG bot-view game-ClassicDice"
              bis_skin_checked="1"
            >
              <a class="sc-hKTqa dbJiKC game-item-wrap" href="/classic-dice">
                <div class="lazy-img img" bis_skin_checked="1">
                  <img
                    src="https://img2.nanogames.io/game/image/455dda9f-80eb-438c-958c-45c355c3c659.png"
                    alt=""
                  />
                </div>
                <div class="hover-mask" bis_skin_checked="1">
                  <div class="house-edge" bis_skin_checked="1">
                    House Edge 1%
                  </div>
                  <svg
                    class="play-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 63 63"
                  >
                    <defs /><g fill="none" fill-rule="evenodd">
                      <circle
                        cx="31.3"
                        cy="31.3"
                        r="30.3"
                        fill="#000"
                        fill-opacity=".2"
                        stroke="#E5E7EE"
                        stroke-width="2"
                      />
                      <path
                        fill="#F5F6F7"
                        d="M39.5 34.3l-11.3 7.5a2 2 0 01-3-1.6v-15a2 2 0 013-1.7L39.5 31a2 2 0 010 3.3z"
                      />
                    </g></svg
                  >
                </div>
              </a>
              <div class="sc-fivaXQ gVplre bot-view" bis_skin_checked="1">
                <div class="wrap" bis_skin_checked="1">
                  <a class="item" href="/classic-dice">Classic Dice</a>
                  <div class="help-btn-wrap" bis_skin_checked="1">
                    <button
                      ><svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                      >
                        <use xlink:href="#icon_Help" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="sc-gfqkcP epfPPG bot-view game-Mines"
              bis_skin_checked="1"
            >
              <a class="sc-hKTqa dbJiKC game-item-wrap" href="/mines">
                <div class="lazy-img img" bis_skin_checked="1">
                  <img
                    src="https://img2.nanogames.io/game/image/0aa3d807-0380-4f8e-b65e-3179d4af2234.png"
                    alt=""
                  />
                </div>
                <div class="hover-mask" bis_skin_checked="1">
                  <div class="house-edge" bis_skin_checked="1">
                    House Edge 1%
                  </div>
                  <svg
                    class="play-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 63 63"
                  >
                    <defs /><g fill="none" fill-rule="evenodd">
                      <circle
                        cx="31.3"
                        cy="31.3"
                        r="30.3"
                        fill="#000"
                        fill-opacity=".2"
                        stroke="#E5E7EE"
                        stroke-width="2"
                      />
                      <path
                        fill="#F5F6F7"
                        d="M39.5 34.3l-11.3 7.5a2 2 0 01-3-1.6v-15a2 2 0 013-1.7L39.5 31a2 2 0 010 3.3z"
                      />
                    </g>
                  </svg>
                </div>
              </a>
              <div class="sc-fivaXQ gVplre bot-view" bis_skin_checked="1">
                <div class="wrap" bis_skin_checked="1">
                  <a class="item" href="/mines">Mines</a>
                  <div class="help-btn-wrap" bis_skin_checked="1">
                    <button>
                      <svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                      >
                        <use xlink:href="#icon_Help" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="sc-gfqkcP epfPPG bot-view game-SlotsOrientalBeauties"
              bis_skin_checked="1"
            >
              <a
                class="sc-hKTqa dbJiKC game-item-wrap"
                href="/oriental-beauties"
              >
                <div class="lazy-img img" bis_skin_checked="1">
                  <img
                    src="https://img2.nanogames.io/game/image/7f1f471d-0768-42f1-9d92-e70ce0e10235.png"
                    alt=""
                  />
                </div>
                <div class="hover-mask" bis_skin_checked="1">
                  <div class="house-edge" bis_skin_checked="1">
                    House Edge 2.1%
                  </div>
                  <svg
                    class="play-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 63 63"
                    ><defs />
                    <g fill="none" fill-rule="evenodd">
                      <circle
                        cx="31.3"
                        cy="31.3"
                        r="30.3"
                        fill="#000"
                        fill-opacity=".2"
                        stroke="#E5E7EE"
                        stroke-width="2"
                      />
                      <path
                        fill="#F5F6F7"
                        d="M39.5 34.3l-11.3 7.5a2 2 0 01-3-1.6v-15a2 2 0 013-1.7L39.5 31a2 2 0 010 3.3z"
                      />
                    </g>
                  </svg>
                </div>
              </a>
              <div class="sc-fivaXQ gVplre bot-view" bis_skin_checked="1">
                <div class="wrap" bis_skin_checked="1">
                  <a class="item" href="/oriental-beauties">Beauties</a>
                  <div class="help-btn-wrap" bis_skin_checked="1">
                    <button>
                      <svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                      >
                        <use xlink:href="#icon_Help" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="sc-gfqkcP epfPPG bot-view game-HashDice"
              bis_skin_checked="1"
            >
              <a class="sc-hKTqa dbJiKC game-item-wrap" href="/hash-dice">
                <div class="lazy-img img" bis_skin_checked="1" />
                <div class="hover-mask" bis_skin_checked="1">
                  <div class="house-edge" bis_skin_checked="1">
                    House Edge 1%
                  </div>
                  <svg
                    class="play-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 63 63"
                  >
                    <defs /><g fill="none" fill-rule="evenodd">
                      <circle
                        cx="31.3"
                        cy="31.3"
                        r="30.3"
                        fill="#000"
                        fill-opacity=".2"
                        stroke="#E5E7EE"
                        stroke-width="2"
                      />
                      <path
                        fill="#F5F6F7"
                        d="M39.5 34.3l-11.3 7.5a2 2 0 01-3-1.6v-15a2 2 0 013-1.7L39.5 31a2 2 0 010 3.3z"
                      />
                    </g>
                  </svg>
                </div>
              </a>
              <div class="sc-fivaXQ gVplre bot-view" bis_skin_checked="1">
                <div class="wrap" bis_skin_checked="1">
                  <a class="item" href="/hash-dice">Hash Dice</a>
                  <div class="help-btn-wrap" bis_skin_checked="1">
                    <button>
                      <svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                      >
                        <use xlink:href="#icon_Help" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .classic-di {
    padding: 0px 10px;
  }

  .game-area {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
  }

  .game-main {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 10px 20px;
    width: 100%;
    border-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
  }

  @media screen and (max-width: 900px) {
    .game-main {
      display: flex;
      flex-direction: column-reverse;
      border-radius: 1.25rem;
      width: 100%;
      background-color: rgb(23, 24, 27);
    }
  }

  .game-control {
    width: 330px;
    padding: 0.625rem;
    border-right: 1px solid rgba(49, 52, 60, 0.5);
  }

  .game-control-switch {
    display: flex;
    gap: 1.5rem;
  }

  .iDTkQI.style0 .game-control-switch > button {
    text-align: center;
    border-radius: 1.375rem;
    cursor: pointer;
    color: rgb(245, 246, 247);
    font-weight: bold;
    width: 100%;
    padding: 10px;
  }

  .gcQjQT {
    margin-top: 1rem;
  }

  .gcQjQT .input-label,
  .hzTJOu .input-label,
  .hzTJOu .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 1.125rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
  }

  .dJJJKk {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 1rem;
  }

  .iYmVqV {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 1rem;
  }

  .iYmVqV .max-profit,
  .dJJJKk .max-profit {
    position: relative;
    margin-left: 0.1875rem;
    width: 1rem;
    height: 1rem;
  }

  .iYmVqV .icon {
    fill: rgb(67, 179, 9);
    width: 1rem;
    height: 1rem;
    vertical-align: top;
    transform: rotate(180deg);
    cursor: pointer;
  }

  .iYmVqV .tip,
  .dJJJKk .tip {
    display: none;
    box-sizing: border-box;
    position: absolute;
    left: -0.75rem;
    top: -2.625rem;
    height: 2.25rem;
    line-height: 1.25rem;
    padding: 0.3125rem 0.625rem;
    white-space: nowrap;
    color: rgba(153, 164, 176, 0.8);
    background-color: rgb(37, 39, 43);
    box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 8px;
    border-radius: 1.125rem;
  }

  .iYmVqV .tip::after {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    left: 1rem;
    bottom: -0.25rem;
    background-color: rgb(37, 39, 43);
    transform: rotate(45deg);
  }

  .iYmVqV .tit,
  .dJJJKk .tit {
    color: rgb(128, 143, 158);
  }

  .erPQzq {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
  }

  .erPQzq .amount-str {
    width: 7em;
    display: inline-block;
  }

  .erPQzq .suffix {
    opacity: 0.5;
  }

  .gOLODp .label-amount {
    margin-left: auto;
  }

  .input-control {
    border-color: transparent;
  }

  .iDTkQI .input-control,
  .hzTJOu .input-control {
    background-color: rgba(49, 52, 60, 0.4);
  }

  .gcQjQT .input-control,
  .hzTJOu .input-control,
  .hzTJOu .input-control,
  .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    opacity: 1;
    height: 2.75rem;
    border-radius: 1.5rem;
    padding: 0px 1.375rem;
  }

  .IUvXt .input-control input {
    font-weight: bold;
  }

  .kMAYer .input-control input {
    color: rgb(245, 246, 247);
  }

  .gcQjQT .input-control,
  .gcQjQT .input-control input,
  .hzTJOu .input-control,
  .hzTJOu .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
    font-weight: bold;
  }

  .iQoJxX {
    order: -1;
    position: relative;
    margin-left: -1rem;
    padding-left: 2.25rem;
    margin-right: 2rem;
    width: 8.125rem;
    height: 2.25rem;
    border-radius: 1.125rem;
    background: rgb(49, 52, 60);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
  }

  .iQoJxX .dot-wrap {
    position: absolute;
    width: 1rem;
    height: 1.75rem;
    border-radius: 0.46875rem;
    background: rgb(67, 179, 9);
    left: 0.875rem;
    top: 0.25rem;
  }

  .iQoJxX .dot-wrap .dot {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    position: absolute;
    left: 0px;
    transition: top 0.1s ease-in-out 0s;
    top: 0.875rem;
  }

  .iQoJxX .reset {
    color: rgb(153, 164, 176);
  }

  .iQoJxX .increse {
    font-weight: bold;
    color: rgb(255, 255, 255);
  }

  .iQoJxX .text {
    padding: 0px 0.25rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 0.75rem;
    line-height: 0.875rem;
    height: 0.875rem;
  }

  .bGuvOe .percent {
    margin-right: -0.375rem;
    color: rgb(67, 179, 9);
  }

  .gOLODp .coin-icon {
    order: -1;
    margin-right: 0.3125rem;
    margin-left: -0.625rem;
    width: 1.25rem;
    height: 1.25rem;
  }

  .iDTkQI .input-control .button-group,
  .kMAYer .input-control .button-group {
    margin-right: -1.125rem;
  }

  .icApxq .button-group,
  .IUvXt .button-group {
    width: 8.375rem;
    position: relative;
  }

  .bswIvI {
    display: flex;
  }

  .bswIvI > button:first-child {
    margin-left: 0px;
    padding-left: 0.125rem;
    border-top-left-radius: 1.125rem;
    border-bottom-left-radius: 1.125rem;
  }

  .bswIvI > button:last-child {
    padding-right: 0.125rem;
    border-top-right-radius: 1.125rem;
    border-bottom-right-radius: 1.125rem;
  }

  .bswIvI > button {
    height: 2.25rem;
    width: 2.75rem;
    padding: 0px;
    color: rgb(153, 164, 176);
    background: rgb(49, 52, 60);
    margin-left: 1px;
  }

  .jmMcg {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
  }

  .gWrsXy,
  .hzTJOu {
    margin-top: 1rem;
  }

  .gOLODp .label-amount {
    margin-left: auto;
  }

  .input-control {
    border-color: transparent;
  }

  .iDTkQI .input-control {
    background-color: rgba(49, 52, 60, 0.4);
  }

  .gWrsXy .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    opacity: 0.5;
    height: 2.75rem;
    border-radius: 1.5rem;
    padding: 0px 1.375rem;
  }

  .iDTkQI .input-control input {
    color: rgb(245, 246, 247);
  }

  .gWrsXy,
  .input-control,
  textarea,
  .gWrsXy .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
  }

  .kBNUDl input {
    font-weight: bold;
  }

  .gOLODp .coin-icon {
    order: -1;
    margin-right: 0.3125rem;
    margin-left: -0.625rem;
    width: 1.25rem;
    height: 1.25rem;
  }

  .gWrsXy .input-control::after {
    position: absolute;
    z-index: 10;
    inset: 0px;
    content: "";
  }

  .kBNUDl .bet-button,
  .bet-button {
    margin-top: 1.875rem;
  }

  .fnKcEH.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(67, 179, 9);
    background-image: conic-gradient(
      from 1turn,
      rgb(67, 179, 9),
      rgb(93, 219, 28)
    );
  }

  .cBmlor.button-big {
    height: 3.625rem;
  }

  .cBmlor {
    display: block;
    width: 100%;
    border-radius: 6.25rem;
    height: 3rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
  }

  .cBmlor > .button-inner {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .game-view {
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
  }

  .jmWHaJ {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 2.75rem;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
  }

  .jmWHaJ .jackpot-enter {
    margin-left: 1.5rem;
  }

  .hXMuAy {
    width: 10.125rem;
    height: 100%;
    line-height: 1.25rem;
    border-radius: 1.375rem;
    position: relative;
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(49, 52, 60, 0.4);
  }

  .hXMuAy .title {
    font-weight: bold;
    height: 1.25rem;
  }

  .hXMuAy .title .tit {
    margin-right: 0.25rem;
    color: rgb(67, 179, 9);
  }

  .hXMuAy .coin {
    vertical-align: top;
    height: 1.25rem;
    margin-top: -0.25rem;
  }

  .erPQzq {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
  }

  .hXMuAy .coin .coin-icon {
    width: 1rem;
    height: 1rem;
  }

  .erPQzq .coin-icon {
    width: 1.4em;
    height: 1.4em;
    margin-right: 0.25em;
  }

  .hXMuAy .coin .amount {
    color: rgb(245, 246, 247);
    font-weight: bold;
  }

  .hXMuAy .coin .amount .amount-str {
    width: auto;
  }

  .erPQzq .amount-str {
    width: 7em;
    display: inline-block;
  }

  .jmWHaJ .recent-list-wrap {
    display: flex;
    gap: 1rem;
    flex: 1 1 auto;
    margin: 0px 1.5rem;
    width: 300px;
    overflow: hidden;
    border-radius: 1.375rem;
  }

  .win_amount {
    display: flex;
    margin-bottom: 10px;
    color: #47484d;
  }

  .recent-list {
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
  }

  .recent-item {
    padding: 0px 0.25rem;
    cursor: pointer;
  }

  .is-win {
    color: rgb(245, 246, 247);
    background-color: rgb(67, 179, 9);
  }

  .item-wrap {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 0%;
    height: 100%;
    border-radius: 1.75rem;
    padding: 8px;
    font-weight: bold;
  }

  .jmWHaJ .empty-item {
    display: flex;
    width: 100%;
    height: 100%;
    color: rgba(153, 164, 176, 0.6);
    background-color: rgba(122, 128, 140, 0.15);
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 1.375rem;
  }

  .jmWHaJ .empty-item > p {
    margin: 0px;
    padding: 0px 0.75rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .dVoJHT {
    display: flex;
    -webkit-box-flex: 1;
    flex-grow: 1;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    place-content: center;
    position: relative;
    padding: 0px 10%;
    min-height: 37.5rem;
  }

  .zLkpl {
    position: absolute;
    z-index: 2;
    right: 1.5rem;
    bottom: 1.25rem;
    font-weight: 500;
    min-width: 8.75rem;
    padding: 0px 1.125rem;
    border-radius: 1.125rem;
    height: 2.25rem;
    line-height: 2.25rem;
    color: rgba(153, 164, 176, 0.6);
    background-color: rgba(49, 52, 60, 0.4);
  }

  .dVoJHT .game-slider {
    position: relative;
    text-align: left;
  }

  .dVoJHT .game-slider .slider-wrapper {
    position: relative;
    height: 2.5rem;
    margin-bottom: 5rem;
    margin-top: 10rem;
  }

  .dVoJHT .game-slider .slider-wrapper .slider-handles {
    height: 2.5rem;
    position: absolute;
    inset: 0px 1.125rem;
    transition: opacity 0.3s ease 0s;
  }

  .dVoJHT .game-slider {
    text-align: left;
  }

  .dVoJHT .game-slider .slider-wrapper .slider-handles .drag-block {
    position: absolute;
    z-index: 100;
    top: 0px;
    left: 0px;
    bottom: 0px;
    background-color: transparent;
    border-radius: 10px;
    appearance: none;
    width: 100%;
    margin: 0px;
    height: 100%;
    cursor: grab;
  }

  .dVoJHT .game-slider .slider-wrapper .slider-handles .slider-track {
    position: absolute;
    left: 0%;
    bottom: 3rem;
    transition: transform 400ms ease 0s;
    z-index: 99;
    width: 100%;
    height: 8.875rem;
    margin-left: -4.4375rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .dVoJHT .game-slider .slider-wrapper .slider-handles .slider-track .dice_num {
    font-size: 1.875rem;
    font-weight: bold;
    pointer-events: none;
    color: rgb(255, 255, 255);
    width: 9.25rem;
    height: 4.125rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    left: -0.1875rem;
    top: -3rem;
    position: absolute;
    border-radius: 0.5rem;
    border: 0.3125rem solid rgb(49, 52, 60);
    background-color: rgb(35, 38, 43);
  }

  .dVoJHT .game-slider .slider-wrapper .slider-handles .slider-track .dice_png {
    width: 8.875rem;
    height: 100%;
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    transition: all 400ms ease 0s;
  }

  .dVoJHT
    .game-slider
    .slider-wrapper
    .slider-handles
    .slider-track
    .dice_png
    img {
    width: 4.125rem;
    margin-left: -0.25rem;
  }

  .dVoJHT .game-slider .slider-wrapper .slider-handles .slider-line {
    position: absolute;
    height: 0.625rem;
    width: 100%;
    right: 0px;
    top: 1rem;
    border-radius: 100px;
    overflow: hidden;
    display: flex;
    box-shadow: rgba(49, 52, 60, 0.4) 0px 0px 0px 1.5rem;
  }

  .dVoJHT .game-slider .slider-wrapper .slider-handles .slider-line .slide-win {
    border-radius: 0.625rem 0px 0px 0.625rem;
    height: 100%;
    background: #43b309;
  }

  .dVoJHT
    .game-slider
    .slider-wrapper
    .slider-handles
    .slider-line
    .slide-lose {
    border-radius: 0px 0.625rem 0.625rem 0px;
    height: 100%;
    background: #ed6300;
  }

  .dVoJHT
    .game-slider
    .slider-wrapper
    .slider-handles
    .slider-line
    .slider-sign {
    display: block;
    transition: transform 400ms ease 0s;
    content: "";
    position: absolute;
    bottom: 0px;
    top: 0px;
    margin-left: -0.125rem;
    width: 100%;
  }

  .dVoJHT
    .game-slider
    .slider-wrapper
    .slider-handles
    .slider-line
    .slider-sign
    .sign {
    width: 0.25rem;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
  }

  .dVoJHT .game-slider .slider-wrapper .slider-mark {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: absolute;
    top: 3.75rem;
    left: 0px;
    right: 0px;
  }

  .dVoJHT .game-slider .slider-wrapper .slider-mark .mark {
    width: 1.875rem;
    text-align: center;
    color: rgb(245, 246, 247);
  }

  .cLMexC {
    background-color: rgba(49, 52, 60, 0.4);
    position: relative;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: wrap;
    min-height: 7.375rem;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 1.25rem;
    padding: 1rem 0px 1rem 1.5rem;
  }

  .cLMexC .input {
    flex: 1 1 0%;
    margin-top: 0px;
    min-width: 7.5rem;
    margin-right: 1.5rem;
  }

  .cLMexC .input-control {
    display: flex;
    background-color: rgba(49, 52, 60, 0.5);
  }

  .input-control {
    border-color: transparent;
  }

  .gcQjQT .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    opacity: 1;
    height: 2.75rem;
    border-radius: 1.5rem;
    padding: 0px 1.375rem;
  }

  .cLMexC .input input {
    font-weight: bold;
  }

  .gcQjQT,
  .input-control textarea,
  .gcQjQT .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
  }

  .cLMexC .input-control .right-info {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(67, 179, 9);
    line-height: 1;
    box-sizing: border-box;
  }

  .gcQjQT,
  .input-control textarea[readonly],
  .gcQjQT .input-control input[readonly] {
    opacity: 0.5;
  }

  .cLMexC .roll-switch input {
    user-select: none;
    cursor: pointer;
  }

  .gcQjQT,
  .input-control textarea,
  .gcQjQT .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
  }

  .cLMexC .input-control .right-info {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(67, 179, 9);
    line-height: 1;
    box-sizing: border-box;
  }

  .cLMexC .input:last-child {
    width: 45%;
  }

  .cLMexC .win-change {
    flex: 2 1 0%;
    min-width: 15rem;
  }

  .cLMexC .input {
    flex: 1 1 0%;
    margin-top: 0px;
    min-width: 7.5rem;
    margin-right: 1.5rem;
  }

  .gcQjQT {
    margin-top: 1rem;
  }

  .cLMexC .input-control {
    display: flex;
    background-color: rgba(49, 52, 60, 0.5);
  }

  .input-control {
    border-color: transparent;
  }

  .gcQjQT .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    opacity: 1;
    height: 2.75rem;
    border-radius: 1.5rem;
    padding: 0px 1.375rem;
  }

  .cLMexC .input input {
    font-weight: bold;
  }

  .gcQjQT,
  .input-control textarea,
  .gcQjQT .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
  }

  .cLMexC .win-change .right-info {
    margin-right: -1.125rem;
  }

  .cLMexC .input-control .right-info {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(67, 179, 9);
    line-height: 1;
    box-sizing: border-box;
  }

  .cLMexC .input-control .right-info .right-percent {
    margin-right: 0.625rem;
  }

  .cLMexC .win-change .right-info button:first-of-type {
    padding-left: 0.125rem;
    border-top-left-radius: 1.125rem;
    border-bottom-left-radius: 1.125rem;
  }

  .cLMexC .win-change .right-info button {
    width: 100%;
    height: 2.25rem;
    line-height: 2.25rem;
    font-size: 0.75rem;
    color: rgb(153, 164, 176);
    background: rgb(49, 52, 60);
    margin-left: 1px;
    border-radius: 0px;
    padding: 0px;
    text-align: center;
  }

  .gplguG .box-bg {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: -1px;
    width: 100%;
  }

  .game-actions {
    display: flex;
    order: 10;
    -webkit-box-align: center;
    align-items: center;
    height: 4rem;
    position: relative;
  }

  .game-actions::before {
    content: "";
    flex: 1 1 0%;
  }

  .action-item {
    cursor: pointer;
    margin-right: 0.5rem;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }

  .game-actions::after {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    height: 1px;
    opacity: 0.3;
    background-color: rgb(49, 52, 60);
  }

  .tabs-navs {
    margin-bottom: 0.75rem;
    margin-left: 0.625rem;
    display: inline-flex;
  }

  .tabs-navs {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 2.25rem;
    position: relative;
    border-radius: 1.125rem;
    background-color: rgba(49, 52, 60, 0.7);
  }

  .eraqQx .game-tabs .tabs-navs .tabs-nav {
    width: 5.625rem;
  }

  .tabs-nav.is-active {
    color: rgb(245, 246, 247);
    font-weight: bold;
  }

  .tabs-nav {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 0%;
    height: 100%;
    cursor: pointer;
    white-space: nowrap;
    width: 100%;
    z-index: 1;
  }

  .eraqQx .game-tabs .tabs-view {
    background-color: rgb(30, 32, 36);
    border-radius: 1.25rem;
    padding: 1px 0px;
  }

  .kQfmQV .tabs-view {
    position: relative;
  }

  .khrXGS {
    padding: 0.5rem;
  }

  .iUeetX {
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0px;
  }

  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }

  .khrXGS tr {
    cursor: pointer;
  }

  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }

  .iUeetX th:first-child,
  .iUeetX td:first-child {
    text-align: left;
  }

  .iUeetX th {
    font-weight: normal;
    color: rgba(153, 164, 176, 0.6);
  }

  .iUeetX th,
  .iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
  }

  .iUeetX td:first-child {
    border-radius: 0.625rem 0px 0px 0.625rem;
  }

  .iUeetX th:first-child,
  .iUeetX td:first-child {
    text-align: left;
  }

  .iUeetX td {
    border: 1px solid transparent;
    color: rgb(153, 164, 176);
  }

  .iUeetX th,
  .iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
  }

  .khrXGS a {
    color: inherit;
  }

  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  a {
    text-decoration: none;
  }

  .hzLhFr {
    width: 100%;
    border-radius: 1.25rem;
    background-color: rgb(30, 32, 36);
    padding: 1.5rem 1.5rem 2rem;
    margin-top: 2rem;
  }

  .hzLhFr .intro-title {
    min-height: 5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .hzLhFr .intro-title > p {
    font-size: 1rem;
    color: rgb(245, 246, 247);
    font-weight: 600;
    margin: 0px;
    white-space: nowrap;
  }

  .hzLhFr .intro-title .intro-tags {
    margin-left: 2.5rem;
    display: flex;
    flex-wrap: wrap;
  }

  .hzLhFr .intro-title .intro-tags > p {
    margin: 0px 1.125rem 0.3125rem 0px;
    padding: 0.5rem 1.25rem;
    border-radius: 1.125rem;
    background-color: rgb(43, 47, 54);
  }

  .hzLhFr .description {
    margin-top: 0.75rem;
    line-height: 1.25rem;
  }

  .hzLhFr .intro-detail {
    width: 6.75rem;
    height: 2.5rem;
    margin-top: 2rem;
    border-radius: 1.25rem;
    background-color: rgba(49, 52, 60, 0.6);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }

  .hzLhFr .intro-detail > svg {
    font-size: 0.5625rem;
    margin-left: 1.125rem;
  }

  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }

  .eMYuCe {
    margin-top: 2rem;
  }

  .eMYuCe .swrap-header {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 0.625rem;
    margin-bottom: 0.625rem;
  }

  .eMYuCe .swrap-header .tit {
    margin-right: auto;
    display: flex;
  }

  .eMYuCe .swrap-header .total {
    margin-left: 0.625rem;
    color: rgb(67, 179, 9);
  }

  .kpCklu {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .kpCklu > button:first-child {
    margin-right: 4px;
  }

  .kpCklu button {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.25);
  }

  .swiper-pointer-events {
    touch-action: pan-y;
  }

  .swiper {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
  }

  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
  }

  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
  }

  .kOlboS {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-flow: dense;
    gap: 1.5rem 0.9375rem;
  }

  @media screen and (max-width: 768px) {
    .kOlboS {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }

  @media screen and (max-width: 480px) {
    .kOlboS {
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }
  }

  .epfPPG {
    flex: 1 1 0%;
    position: relative;
    user-select: none;
  }

  .dbJiKC {
    width: 100%;
    padding-top: 100%;
    position: relative;
    display: block;
    border-radius: 1.25rem;
    overflow: hidden;
    transform: translateZ(0px);
  }

  a {
    text-decoration: none;
  }

  .dbJiKC .img {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease 0s;
    background: rgb(49, 52, 60);
  }

  .dbJiKC .img img {
    width: 100%;
    height: 100%;
  }

  .dbJiKC .hover-mask {
    position: absolute;
    transition: all 0.3s linear 0s;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    font-size: 0.75rem;
    opacity: 0;
  }

  .dbJiKC .hover-mask .house-edge {
    color: rgb(245, 246, 247);
    text-align: right;
    padding: 0.625rem 0.875rem 0px 0px;
  }

  .dbJiKC .play-icon {
    fill: rgba(245, 246, 247, 0.9);
    width: 3rem;
    height: 3rem;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -1.5rem;
    margin-top: -1.5rem;
    transform: scale(1.3);
    transition: transform 0.3s ease 0s;
  }

  .gVplre {
    position: relative;
    color: rgb(255, 255, 255);
    height: 1.5625rem;
    line-height: 1.5625rem;
    font-size: 0.75rem;
  }

  .gVplre .wrap {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    padding: 0.3125rem 1.875rem 0px 0.875rem;
    box-sizing: border-box;
  }

  .gVplre .item {
    height: 1.25rem;
    line-height: 1.25rem;
    color: rgb(152, 167, 181);
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  a {
    text-decoration: none;
  }

  .gVplre .help-btn-wrap button {
    position: absolute;
    width: 2.125rem;
    height: 2.125rem;
    right: 0.125rem;
    top: -0.1875rem;
    padding: 0.5rem;
    opacity: 0.6;
  }

  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }
</style>
