<script>
  import { fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import { createEventDispatcher } from "svelte";
  $: currentTab = 1;
  const dispatch = createEventDispatcher();
</script>

<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
  <div
    class="dialog"
    style="opacity: 1; width: 464px; height: 582px; margin-top: -291px; margin-left: -232px; transform: scale(1) translateZ(0px);"
  >
    {#if currentTab !== 1}
      <button
        in:fly={{ x: -80, duration: 150, easing: cubicOut }}
        out:fly={{ x: -80, duration: 150, easing: cubicOut }}
        on:click={() => (currentTab = 1)}
        class="dialog-back"
        style="opacity: 1; transform: none;"
        ><svg
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="sc-gsDKAQ hxODWG icon"
          ><use xlink:href="#icon_Arrow"></use></svg
        ></button
      >
    {/if}
    <div class="dialog-head has-close {currentTab !== 1 ? 'has-back' : ''}">
      <div class="dialog-title">Help</div>
    </div>
    <button
      on:click={() => dispatch("close")}
      class="sc-ieecCq fLASqZ close-icon dialog-close"
      ><svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Close"></use></svg
      ></button
    >
    {#if currentTab === 1}
      <div
        in:fly={{ x: -80, duration: 150, easing: cubicOut }}
        out:fly={{ x: -80, duration: 150, easing: cubicOut }}
        class="dialog-body default-style"
        style="z-index: 2; transform: none;"
      >
        <div class="sc-dkPtRN jScFby scroll-view sc-cfJLRR cTaiTH">
          <div class="help-list">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div on:click={() => (currentTab = 2)}>
              <span>What Game Is This?</span><svg
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="sc-gsDKAQ hxODWG icon"
                ><use xlink:href="#icon_Arrow"></use></svg
              >
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div on:click={() => (currentTab = 3)}>
              <span>Fairness</span><svg
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="sc-gsDKAQ hxODWG icon"
                ><use xlink:href="#icon_Arrow"></use></svg
              >
            </div>
          </div>
        </div>
      </div>
    {:else if currentTab === 2}
      <div
        in:fly={{ x: 80, duration: 150, easing: cubicOut }}
        out:fly={{ x: 80, duration: 150, easing: cubicOut }}
        class="dialog-body default-style"
        style="z-index: 3; transform: none;"
      >
        <div class="sc-dkPtRN jScFby scroll-view sc-jCHUfY cruphB">
          <div class="item">
            <h2>What Is Hi-lo?</h2>
            <div class="content">
              <p>
                Hi-lo is an online single player guessing game in which you
                guess the card point is higher (hi) or lower (lo) compared to
                the previous one.
              </p>
            </div>
            <h2>How To Play It?</h2>
            <div class="content">
              <p>The game is not timed.</p>
              <p>Click "Bet" to start betting and get the first card.</p>
              <p>
                At this point you can guess the next card is "higher or same" or
                "lower or same" or “skip”.
              </p>
              <p>
                If you guess right, you will get the corresponding payout. You
                can choose to claim the win and stop this round or continue
                guessing the next card.
              </p>
              <p>The more cards you guess, the bigger payout you get.</p>
              <p>There is no max payout, only bet and profit limits.</p>
              <p>
                Ace is the lowest card, king is the highest card. The value
                order is K,Q,J,10,9,8,7,6,5,4,3,2,A.
              </p>
            </div>
            <h2>What Is the Return Rate of Hi-lo?</h2>
            <div class="content"><p>1% House Edge.</p></div>
          </div>
        </div>
      </div>
    {:else if currentTab === 3}
      <div
        in:fly={{ x: 80, duration: 150, easing: cubicOut }}
        out:fly={{ x: 80, duration: 150, easing: cubicOut }}
        class="dialog-body default-style"
        style="z-index: 4; transform: none;"
      >
        <div class="sc-dkPtRN jScFby scroll-view sc-jCHUfY cruphB">
          <div class="item">
            <h2>How Are the Results Calculated?</h2>
            <div class="content">
              <p>
                We calculate the hash value of the combination with HMAC_SHA256.
                This gives us a 64-character hexadecimal string: hash =
                HMAC_SHA256 (clientSeed:nonce:round, serverSeed).
              </p>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  .kBjSXI {
    position: fixed;
    z-index: 1000;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.7);
    filter: none !important;
  }
  .dialog {
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 50%;
    top: 50%;
    width: 464px;
    height: 720px;
    margin: -375px 0px 0px -280px;
    transition-property: width, height, margin-left, margin-top;
    transition-duration: 0.5s;
    border-radius: 1.25rem;
    overflow: hidden;
    background-color: rgb(23, 24, 27);
  }
  .dialog-head.has-close {
    margin-right: 3.75rem;
  }

  .dialog-head {
    position: relative;
    z-index: 10;
    flex: 0 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 3.75rem;
    margin-left: 1.125rem;
    transition: all 0.5s ease 0s;
  }
  .dialog-back svg {
    transform: rotate(180deg);
    width: 16px;
    height: 16px;
  }
  .dialog-head .dialog-title {
    font-size: 1rem;
    margin: 0px;
    font-weight: bold;
    flex: 1 1 0%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(245, 246, 247);
  }
  .fLASqZ {
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 11;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3.75rem;
    height: 3.75rem;
  }
  .fLASqZ svg {
    transition: transform 0.5s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
    cursor: pointer;
    font-size: 0.75rem;
  }

  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }
  .fLASqZ:hover svg {
    transform: rotate(-90deg);
    fill: rgb(245, 246, 247);
  }
  .default-style {
    padding-top: 3.75rem;
    background-color: rgb(23, 24, 27);
  }

  .dialog-body {
    position: absolute;
    inset: 0px;
    display: flex;
    overflow: hidden;
  }
  .default-style > div {
    border-radius: 20px;
    background-color: rgb(30, 32, 36);
    padding: 1.25rem 1.25rem 0px;
  }

  .dialog-body > div {
    flex: 1 1 0%;
  }
  .jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
  }
  .cTaiTH .help-list > div {
    background-color: rgb(23, 24, 27);
    border-radius: 1.25rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 3.5rem;
    padding: 0px 1.25rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
  }
  .cTaiTH .help-list > div:hover {
    color: rgb(245, 246, 247);
  }
  .cTaiTH .help-list > div > svg {
    width: 0.75rem;
    height: 0.75rem;
    fill: rgba(95, 105, 117, 0.36);
  }
  .cruphB .item {
    margin-bottom: 2.75rem;
  }
  .cruphB .item h2:first-of-type {
    margin-top: 0.5rem;
  }

  .cruphB .item h2 {
    font-size: 0.875rem;
    margin: 0px 0px 0.5rem;
    font-weight: 600;
    color: rgb(153, 164, 176);
  }
  .dialog-head.has-back {
    margin-left: 3.125rem;
  }
  .dialog-back {
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 11;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3.75rem;
    height: 3.75rem;
  }
</style>
