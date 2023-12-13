<script>
  import { default_Wallet } from "$lib/store/coins";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import RiSystemArrowUpSLine from "svelte-icons-pack/ri/RiSystemArrowUpSLine";
  import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
  import BsExclamationCircle from "svelte-icons-pack/bs/BsExclamationCircle";
  import {
    payout,
    isbetLoadingBtn,
    betPosition,
    rollunder,
    Handles_Loading,
  } from "./store";
  import { profileStore, handleisLoggin } from "$lib/store/profile";
  import { dice_history } from "../ClassicDice/store/index";
  import { error_msg } from "./store/index";
  import { ServerURl } from "$lib/backendUrl";
  import { onMount } from "svelte";
  import { handleCountdown } from "../ClassicDice/socket/index";
  const { handleDicebet } = handleCountdown();
  import { DiceEncription } from "$lib/games/ClassicDice/store/index";
  const URL = ServerURl();
  import { soundHandler } from "../../games/ClassicDice/store/index";
  import cr from "./audio/click.wav";
  import win from "./audio/mixkit-achievement-bell-600.wav";

  let max_profit_tips = false;
  let Handlemax_profit_tips = (e) => {
    if (e === 1) {
      max_profit_tips = true;
    } else {
      max_profit_tips = false;
    }
  };

  let wining_amount = "";
  let bet_amount;
  onMount(() => {
    if ($default_Wallet.coin_name === "USDT") {
      bet_amount = (0.2).toFixed(4);
    } else {
      bet_amount = (100).toFixed(4);
    }
  });

  $: {
    wining_amount = (bet_amount * $payout).toFixed(4);
  }

  const dive = () => {
    bet_amount = (bet_amount / 2).toFixed(4);
  };

  const mult = () => {
    bet_amount = (bet_amount * 2).toFixed(4);
  };

  function playSound(e) {
    if (e === 1) {
      const audio = new Audio(cr);
      audio.volume = 0.05;
      audio.play();
    } else {
      const audio = new Audio(win);
      audio.volume = 0.05;
      audio.play();
    }
  }
  let history;
  $: {
    history = [...$dice_history];
  }

  let non = 0;
  const handleRollSubmit = async () => {
    // if(browser && window.navigator.onLine){
    $soundHandler && playSound(1);
    Handles_Loading.set(true);
    if ($handleisLoggin) {
      if (parseFloat(bet_amount) > parseFloat($default_Wallet.balance)) {
        error_msg.set("Insufficient balance");
        Handles_Loading.set(false);
        setTimeout(() => {
          error_msg.set("");
        }, 4000);
      } else if (
        parseFloat(bet_amount) > 5000 &&
        $default_Wallet.coin_name === "USDT"
      ) {
        error_msg.set("Maximum bet amount for USDT is 5,000");
        Handles_Loading.set(false);
        setTimeout(() => {
          error_msg.set("");
        }, 4000);
      } else if (
        parseFloat(bet_amount) > 10000 &&
        $default_Wallet.coin_name === "PPF"
      ) {
        error_msg.set("Maximum bet amount for PPF is 10,000");
        Handles_Loading.set(false);
        setTimeout(() => {
          error_msg.set("");
        }, 4000);
      } else if (
        parseFloat(bet_amount) < 100 &&
        $default_Wallet.coin_name === "PPF"
      ) {
        error_msg.set("Minimum bet amount for PPF is 100");

        Handles_Loading.set(false);
        setTimeout(() => {
          error_msg.set("");
        }, 4000);
      } else if (
        parseFloat(bet_amount) < 0.2 &&
        $default_Wallet.coin_name === "USDT"
      ) {
        error_msg.set("Minimum bet amount for USDT is 0.20");
        Handles_Loading.set(false);
        setTimeout(() => {
          error_msg.set("");
        }, 4000);
      } else {
        let data = {
          user_id: $profileStore.user_id,
          server_seed: $DiceEncription.server_seed,
          client_seed: $DiceEncription.client_seed,
          hash_seed: $DiceEncription.hash_seed,
          nonce: $DiceEncription.nonce + non,
          username: $profileStore.username,
          hidden_from_public: false,
          profile_img: $profileStore.profile_image,
          prev_bal: parseFloat($default_Wallet.balance),
          bet_amount: parseFloat(bet_amount),
          token_img: $default_Wallet.coin_image,
          token: $default_Wallet.coin_name,
          chance: $rollunder
            ? parseFloat($betPosition).toFixed(2)
            : 100 - parseFloat($betPosition).toFixed(2),
          payout: parseFloat($payout),
          time: new Date(),
          is_roll_under: $rollunder,
          wining_amount: parseFloat(wining_amount) - parseFloat(bet_amount),
        };
        isbetLoadingBtn.set(true);
        non += 1;
        handleDicebet(data);
        setTimeout(() => {
          Handles_Loading.set(false);
        }, 500);
      }
    } else {
      error_msg.set("You are not Logged in");
      Handles_Loading.set(false);
      setTimeout(() => {
        error_msg.set("");
      }, 4000);
    }
    // }else{
    //     error_msg.set('Error in network connection')
    //          Handles_Loading.set(false)
    //         setTimeout(()=>{
    //             error_msg.set('')
    //     },4000)
    // }
  };

  let is_min_max = false;
  const handleMinMax = () => {
    is_min_max = !is_min_max;
  };

  let walletRange = 0;
  const handleRangeSTlop = (eui) => {
    bet_amount = (parseFloat($default_Wallet.balance) * (eui / 100)).toFixed(4);
    if ($default_Wallet.coin_name === "USDT") {
      if (bet_amount < 0.1) {
        bet_amount = (0.1).toFixed(4);
      } else if (bet_amount > 2000) {
        bet_amount = (2000).toFixed(4);
      }
    } else {
      if (bet_amount < 100) {
        bet_amount = (100).toFixed(4);
      } else if (bet_amount > 5000) {
        bet_amount = (5000).toFixed(4);
      }
    }
  };

  const handlesjen = (e) => {
    bet_amount = (parseFloat($default_Wallet.balance) * (e / 100)).toFixed(4);
    walletRange = e;
    if ($default_Wallet.coin_name === "USDT") {
      if (bet_amount < 0.1) {
        bet_amount = (0.1).toFixed(4);
      } else if (bet_amount > 2000) {
        bet_amount = (2000).toFixed(4);
      }
    } else {
      if (bet_amount < 100) {
        bet_amount = (100).toFixed(4);
      } else if (bet_amount > 5000) {
        bet_amount = (5000).toFixed(4);
      }
    }
  };
</script>

<div class="game-control-panel">
  {#if $error_msg}
    <div style="background-color:crimson;" class="error-message">
      <div class="hTTvsjh">
        <div>{$error_msg}</div>
      </div>
    </div>
  {/if}
  <div class="sc-juEPzu lgTgT">
    <div
      class="sc-ezbkAF gcQjQT input sc-fvxzrP gOLODp sc-gsFzgR fCSgTW game-coininput"
    >
      <div class="input-label">
        <div class="sc-hmvnCu efWjNZ label">
          <div>Amount</div>
          <div class="max-profit">
            <button
              on:mouseleave={() => Handlemax_profit_tips(2)}
              on:mouseenter={() => Handlemax_profit_tips(1)}
              class="sc-gsDKAQ hxODWG icon"
            >
              <Icon
                src={BsExclamationCircle}
                size="15"
                color="rgb(67, 179, 9)"
                title=""
              />
            </button>
            {#if max_profit_tips}
              <div class="tip">
                <span class="tit">Max Profit:&nbsp;</span>
                <div class="sc-Galmp erPQzq coin notranslate">
                  <div class="amount">
                    <span class="amount-str"
                      >5000.<span class="suffix">00</span>
                    </span>
                  </div>
                </div>
              </div>
            {/if}
          </div>
        </div>
        <!-- <div class="label-amount">0 USD</div> -->
      </div>
      <div class="input-control">
        <input type="number" bind:value={bet_amount} />
        {#if $handleisLoggin}
          <img class="coin-icon" alt="" src={$default_Wallet.coin_image} />
        {:else}
          <img
            class="coin-icon"
            alt=""
            src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png"
          />
        {/if}
        <div class="sc-kDTinF bswIvI button-group">
          <button on:click={() => dive()}>/2</button>
          <button on:click={() => mult()}>x2</button>
          {#if is_min_max}
            <div class="fix-layer" style="opacity: 1; transform: none;">
              <button
                on:click={() => handlesjen(0)}
                style={`${walletRange === 0 ? `color:#ffff;` : ""}`}
                class="">Min</button
              >
              <div class="sc-kLwhqv eOA-dmL slider">
                <div
                  class="slider-after"
                  style="transform: scaleX(100.001001);"
                ></div>
                <input
                  type="range"
                  class="drag-block"
                  on:input={(e) => handleRangeSTlop(e.target.value)}
                  bind:value={walletRange}
                />
                <div
                  class="slider-before"
                  style="transform: scaleX(100.998999);"
                ></div>
              </div>
              <button
                on:click={() => handlesjen(100)}
                style={`${walletRange === 100 ? `color:#ffff;` : ""}`}
                class="">Max</button
              >
            </div>
          {/if}
          <button on:click={handleMinMax} class="sc-cAhXWc cMPLfC">
            <Icon
              src={RiSystemArrowUpSLine}
              size="80"
              color="rgba(153, 164, 176, 0.6)"
            />
            <Icon
              src={RiSystemArrowDownSLine}
              size="80"
              color="rgba(153, 164, 176, 0.6)"
            />
          </button>
        </div>
      </div>
    </div>
    <div class="sc-ezbkAF gWrsXy input sc-fvxzrP gOLODp" disabled="">
      <div class="input-label">
        Win Amount
        <!-- <div class="label-amount">0 USD</div> -->
      </div>
      <div class="input-control">
        <input type="number" disabled bind:value={wining_amount} />
        {#if $handleisLoggin}
          <img class="coin-icon" alt="" src={$default_Wallet.coin_image} />
        {:else}
          <img
            class="coin-icon"
            alt=""
            src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png"
          />
        {/if}
      </div>
    </div>
    <button
      disabled={$Handles_Loading}
      on:click={handleRollSubmit}
      class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big bet-button"
    >
      {#if $Handles_Loading}
        <div class="button-inner">Loading....</div>
      {:else}
        <div class="button-inner">Roll Now</div>
      {/if}
    </button>
  </div>
</div>

<style>
  .input-control:focus-within {
    border: 1px solid var(--primary-color);
  }

  .fCSgTW .fix-layer {
    position: absolute;
    right: 0px;
    top: 2.875rem;
    z-index: 2;
    touch-action: pan-x;
    width: 200px;
    height: 2.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 0.625rem;
    background-color: rgb(33, 35, 40);
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.15) 1px 0px 7px 0px;
  }

  .fCSgTW .fix-layer > button {
    height: 100%;
    width: 2.5rem;
    flex: 0 0 auto;
    font-size: 0.75rem;
    background-color: rgba(60, 64, 74, 0.5);
  }
  .fCSgTW .fix-layer .slider {
    flex: 1 1 0%;
    height: 100%;
  }

  .drag-block {
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
    -webkit-appearance: none;
  }
  .drag-block::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: 0px;
    /* Centers thumb on the track */
    background-color: #feffff;
    height: 1.5rem;
    width: 1rem;
    border-radius: 10px;
    cursor: grabbing;
  }
  .eOA-dmL {
    position: relative;
    display: flex;
    height: 0.875rem;
    overflow: hidden;
    box-sizing: content-box;
    padding: 0px 0.8125rem;
    cursor: pointer;
  }
  .fCSgTW .fix-layer .slider-after {
    width: 86%;
    left: 7%;
    height: 0.5rem;
    margin-top: -0.25rem;
    border-radius: 0.25rem;
    background-color: rgb(23, 24, 27);
    transform: scaleX(1) !important;
  }
  .eOA-dmL .slider-after {
    height: 2px;
    width: 98%;
    position: absolute;
    left: 1%;
    top: 50%;
    margin-top: -1px;
  }
  .eOA-dmL .slider-after {
    background-color: rgba(216, 222, 227, 0.4);
    transform-origin: left center;
  }

  .fCSgTW .fix-layer .slider-before,
  .fCSgTW .fix-layer .slider-after {
    width: 86%;
    left: 7%;
    height: 0.5rem;
    margin-top: -0.25rem;
    border-radius: 0.25rem;
    background-color: rgb(23, 24, 27);
    transform: scaleX(1) !important;
  }
  .eOA-dmL .slider-before {
    background-color: rgba(216, 222, 227, 0.4);
    transform-origin: right center;
  }
  .eOA-dmL .slider-before,
  .eOA-dmL .slider-after {
    height: 2px;
    width: 98%;
    position: absolute;
    left: 1%;
    top: 50%;
    margin-top: -1px;
  }
</style>
