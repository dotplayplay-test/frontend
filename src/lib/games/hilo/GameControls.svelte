<script>
  import { browser } from "$app/environment";
  import { onMount, createEventDispatcher } from "svelte";
  import { default_Wallet } from "$lib/store/coins";
  import { goto } from "$app/navigation";
  import { handleisLoggin } from "$lib/store/profile";
  import Tooltip from "$lib/components/tooltip.svelte";
  import {
    hilo_game,
    processingRequest,
    hotkeysEnabled,
  } from "$lib/games/hilo/store";
  import Loader from "$lib/components/loader.svelte";
  import useDeck from "./hooks/deck";
  const { getCardRank, ranks } = useDeck();
  const dispatch = createEventDispatcher();
  $: isFocused = false;
  $: sliderOpened = false;

  $: bet_amount = 0;
  $: usd = 0;
  $: betRange = { min: 100, max: 1000 };

  $: slider = null;

  $: coin_image =
    $hilo_game?.token_img ||
    $default_Wallet.coin_image ||
    "/coin/BTC.black.png";
  $: isLoading = $processingRequest || !$hilo_game;
  $: currentRound = null;
  $: canGoNext = !isLoading && !!$hilo_game?.bet_id && !$hilo_game?.has_ended;
  $: canSkip =
    !isLoading &&
    !!$hilo_game?.bet_id &&
    !$hilo_game?.round <= 51 &&
    !$hilo_game?.has_ended;

  $: canBet =
    !!bet_amount &&
    $default_Wallet.balance >= bet_amount &&
    (!$hilo_game?.bet_id || $hilo_game?.has_ended || $hilo_game?.new_game);
  $: canCashOut =
    !!$hilo_game?.bet_id && !$hilo_game?.has_ended && !!$hilo_game?.profit;

  const updateUSD = () => {
    if ($default_Wallet.coin_name === "PPF") {
      usd = 0;
      return;
    }
    let calculatedUsd = (bet_amount * (betRange.rate || 1)).toFixed(6);
    usd = calculatedUsd.includes(".000000")
      ? parseInt(calculatedUsd)
      : calculatedUsd;
  };
  default_Wallet.subscribe((v) => {
    if (!$hilo_game?.bet_id) {
      const rate = v.coin_name === "PPL" ? 0.1 : 1;
      if (v.coin_name !== "PPF") {
        betRange = {
          min: 0.0001 / rate,
          max: 140 / rate,
          rate,
        };
      } else {
        betRange = {
          min: 100,
          max: 200,
          rate,
        };
      }
      bet_amount = betRange.min;
      updateUSD();
    }
  });

  $: controlStats = {
    profit: "0.00000000",
    payout: "0.9900",
    hiProfit: "0.00000000",
    loProfit: "0.00000000",
    hiMultiplier: "",
    loMultiplier: "",
    hiChance: "92.31",
    loChance: "7.69",
    hiGuess: 3,
    loGuess: 4,
  };

  hilo_game.subscribe((game) => {
    if (game?.bet_id) {
      bet_amount = game.bet_amount;
      currentRound = game.rounds.map((r) => ({
        rank: getCardRank(r.card),
      }))[game.rounds.length - 1];
      const { hi_chance, lo_chance } = game;
      const _bet_amount = game.bet_amount + game.profit;

      const probability_higher = hi_chance / 100;
      const probability_lower = lo_chance / 100;

      // House edge
      const house_edge = 1 / 100;

      // Calculate no-edge multipliers
      const multiplier_higher = 1 / probability_higher;
      const multiplier_lower = 1 / probability_lower;

      // Adjust multipliers for house edge
      const hiMultiplier = multiplier_higher * (1 - house_edge);
      const loMultiplier = multiplier_lower * (1 - house_edge);

      // Calculating profits
      const hiProfit = (_bet_amount * hiMultiplier - _bet_amount).toFixed(5);
      const loProfit = (_bet_amount * loMultiplier - _bet_amount).toFixed(5);

      controlStats = {
        profit: game.profit.toFixed(6),
        payout: game.payout.toFixed(4),
        hiProfit,
        loProfit,
        hiMultiplier: hiMultiplier.toFixed(4),
        loMultiplier: loMultiplier.toFixed(4),
        hiChance: hi_chance.toFixed(2),
        loChance: lo_chance.toFixed(2),
        hiGuess:
          currentRound.rank === ranks[0]
            ? 3
            : currentRound.rank === ranks[ranks.length - 1]
              ? 4
              : 5,
        loGuess:
          currentRound.rank === ranks[0]
            ? 4
            : currentRound.rank === ranks[ranks.length - 1]
              ? 2
              : 6,
      };
    }
  });

  const sliderClose = () => {
    if (isGrabbing) return;
    sliderOpened = false;
  };
  const handlePointUp = () => {
    isGrabbing = false;
  };
  $: isGrabbing = false;
  $: sliderPercentage = 0;

  $: inputDisabled =
    !$handleisLoggin ||
    (!!$hilo_game && $hilo_game.bet_id && !$hilo_game.has_ended) ||
    $default_Wallet.coin_name === "PPL";

  const handleSliderMove = (e) => {
    if (isGrabbing) {
      const offsetX = slider?.getBoundingClientRect()?.left || 0;
      sliderPercentage = Math.max(
        0,
        Math.min(
          100,
          ((e.clientX - offsetX) /
            (slider?.getBoundingClientRect()?.width || 100)) *
            100
        )
      );
      bet_amount =
        (sliderPercentage / 100) * (betRange.max - betRange.min) + betRange.min;
      updateUSD();
    }
  };

  const handleAdjustBet = (operator) => {
    return (e) => {
      if (inputDisabled) return;
      if (operator === "/") {
        bet_amount = Math.max(betRange.min, bet_amount / 2);
      } else if (operator === "*") {
        bet_amount = Math.min(betRange.max, bet_amount * 2);
      } else if (operator === "min") {
        bet_amount = betRange.min;
      } else if (operator === "max") {
        bet_amount = betRange.max;
      } else {
        bet_amount = Math.max(
          betRange.min,
          Math.min(betRange.max, parseFloat(e.currentTarget.value || "0"))
        );
      }
      sliderPercentage =
        ((bet_amount - betRange.min) / (betRange.max - betRange.min)) * 100;
      updateUSD();
    };
  };

  const handleGoNextRound = (isHi) => {
    return (e) => {
      if (!canGoNext || isLoading) return;
      dispatch("hiloNextRound", {
        hi: isHi,
        lo: !isHi,
        skip: false,
      });
    };
  };

  const handleSkip = () => {
    if (!canSkip || isLoading) return;
    dispatch("hiloNextRound", {
      hi: false,
      lo: false,
      skip: true,
    });
  };

  const handleBetOrCashout = () => {
    if (!$handleisLoggin) {
      goto("/login");
      return;
    }
    if ((!canBet && !canCashOut) || isLoading) return;
    if ($hilo_game?.bet_id && !$hilo_game.has_ended) {
      dispatch("hiloCashout", {});
    } else {
      dispatch("hiloBet", {
        token: $default_Wallet.coin_name,
        token_img: $default_Wallet.coin_image,
        bet_amount,
      });
    }
  };

  onMount(() => {
    browser && document.body.addEventListener("click", sliderClose);
    browser && document.body.addEventListener("pointerup", handlePointUp);
    browser && document.body.addEventListener("pointermove", handleSliderMove);
    const handleKeyDown = (event) => {
      if (!$hotkeysEnabled) return;
      switch (event.key.toUpperCase()) {
        case "A":
          handleAdjustBet("/")();
          break;
        case "S":
          handleAdjustBet("*")();
          break;
        case " ":
          handleBetOrCashout();
          break;
        case "Q":
          handleGoNextRound(true);
          break;
        case "W":
          handleGoNextRound(false);
          break;
        case "E":
          handleSkip();
          break;
        case "R":
          handleBetOrCashout();
          break;
      }
    };

    browser && window.addEventListener("keydown", handleKeyDown);

    return () => {
      // Cleanup when component is unmounted
      window.removeEventListener("keydown", handleKeyDown);
      document.body.removeEventListener("click", sliderClose);
      document.body.removeEventListener("pointerup", handlePointUp);
      document.body.removeEventListener("pointermove", handleSliderMove);
    };
  });
</script>

<div id="Hilo-control-0" class="sc-hLVXRe cYiOHZ game-control style0">
  <div class="game-control-panel">
    <div class="sc-fSDTwv kqpylJ">
      <div class="sc-fUQcsx kqrzPs betting">
        <div
          class="sc-ezbkAF gWrsXy input sc-fvxzrP gOLODp sc-gsFzgR gcQjQT fCSgTW game-coininput"
          disabled={inputDisabled}
        >
          <div class="input-label">
            <div class="sc-hmvnCu efWjNZ label">
              <div>Amount</div>
              <div class="max-profit">
                <Tooltip text="Max Profit:&nbsp; 5000.00000">
                  <svg
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    class="sc-gsDKAQ hxODWG icon"
                    ><use xlink:href="#icon_Inform"></use></svg
                  >
                </Tooltip>
              </div>
            </div>
            <div class="label-amount">{usd} USD</div>
          </div>
          <div class="input-control {isFocused ? 'is-focus' : ''}">
            <input
              on:change={handleAdjustBet("set")}
              on:blur={() => (isFocused = false)}
              on:focus={() => (isFocused = true)}
              type="text"
              value={bet_amount.toFixed(6)}
              disabled={inputDisabled}
            /><img alt="" class="coin-icon" src={coin_image} />
            <div class="sc-kDTinF bswIvI button-group">
              <button disabled={inputDisabled} on:click={handleAdjustBet("/")}
                >/2</button
              ><button disabled={inputDisabled} on:click={handleAdjustBet("*")}
                >x2</button
              >
              {#if sliderOpened}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div
                  on:click={(e) => {
                    e.stopPropagation();
                  }}
                  class="fix-layer"
                  style="opacity: 1; transform: none;"
                >
                  <button
                    on:click={handleAdjustBet("min")}
                    class={bet_amount <= betRange.min ? "active" : ""}
                    >Min</button
                  >
                  <div bind:this={slider} class="sc-kLwhqv eOA-dmL slider">
                    <div
                      class="slider-after"
                      style="transform: scaleX(2.27273e-06);"
                    ></div>
                    <div
                      on:pointerdown={() => (isGrabbing = true)}
                      class="slider-handler-wrap"
                      style="transform: translateX({sliderPercentage}%);"
                    >
                      <button class="slider-handler"></button>
                    </div>
                    <div
                      class="slider-before"
                      style="transform: scaleX(0.999998);"
                    ></div>
                  </div>
                  <button
                    on:click={handleAdjustBet("max")}
                    class={bet_amount === betRange.max ? "active" : ""}
                    >Max</button
                  >
                </div>
              {/if}
              <button
                disabled={inputDisabled}
                on:click={(e) => {
                  e.stopPropagation();
                  if (inputDisabled) return;
                  sliderOpened = true;
                }}
                class="sc-cAhXWc cMPLfC"
                ><svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  class="sc-gsDKAQ hxODWG icon"
                  ><use xlink:href="#icon_Arrow"></use></svg
                ><svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  class="sc-gsDKAQ hxODWG icon"
                  ><use xlink:href="#icon_Arrow"></use></svg
                ></button
              >
            </div>
          </div>
        </div>
        <div class="sc-ezbkAF gcQjQT input">
          <div class="input-label">Total Profit ({controlStats.payout}x)</div>
          <div class="input-control">
            <input readonly value={controlStats.profit} /><img
              alt=""
              class="amount-ico"
              src={coin_image}
            />
          </div>
        </div>
        <div class="sc-ezbkAF gcQjQT input">
          <div class="input-label">
            Profit Higher {controlStats.hiMultiplier
              ? `(${controlStats.hiMultiplier}x)`
              : ""}
          </div>
          <div class="input-control">
            <svg class="hi_lo hi" viewBox="0 0 32 32"
              ><path
                d="M16 3l10.833 12.588-4.815-0 0.001 13.413h-12.037l-0-13.413-4.814 0 10.833-12.588z"
              ></path></svg
            ><input readonly value={controlStats.hiProfit} /><img
              alt=""
              class="amount-ico"
              src={coin_image}
            />
          </div>
        </div>
        <div class="sc-ezbkAF gcQjQT input">
          <div class="input-label">
            Profit Lower {controlStats.loMultiplier
              ? `(${controlStats.loMultiplier}x)`
              : ""}
          </div>
          <div class="input-control">
            <svg class="hi_lo lo" viewBox="0 0 32 32"
              ><path
                d="M16 29.153l10.756-13.018-4.781 0 0.001-13.289h-11.951l-0 13.289-4.78-0 10.756 13.018z"
              ></path></svg
            ><input readonly value={controlStats.loProfit} /><img
              alt=""
              class="amount-ico"
              src={coin_image}
            />
          </div>
        </div>
      </div>
      <div class="inline-btns">
        <button
          on:click={handleGoNextRound(true)}
          disabled={!canGoNext}
          class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal sc-iJCbQK ggpSWG hilo-guess-btn"
          ><div class="button-inner">
            <svg class="hi" viewBox="0 0 32 32">
              {#if controlStats.hiGuess === 4}
                <path
                  d="M29.222 18.833v5.667h-26.444v-5.667h26.444zM29.222 7.5v5.667h-26.444v-5.667h26.444z"
                ></path>
              {:else}
                <path
                  d="M16 3l10.833 12.588-4.815-0 0.001 13.413h-12.037l-0-13.413-4.814 0 10.833-12.588z"
                ></path>
              {/if}</svg
            >
            <div class="flex-1">
              <div class="text hi">
                {controlStats.hiGuess === 4
                  ? "Same"
                  : currentRound?.rank === ranks[0]
                    ? "Higher"
                    : "Higher or Same"}
              </div>
              <div class="chance">{controlStats.hiChance}%</div>
            </div>
          </div></button
        ><button
          on:click={handleGoNextRound(false)}
          disabled={!canGoNext}
          class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal sc-iJCbQK ggpSWG hilo-guess-btn"
          ><div class="button-inner">
            <svg class="lo" viewBox="0 0 32 32">
              {#if controlStats.loGuess === 4}
                <path
                  d="M29.222 18.833v5.667h-26.444v-5.667h26.444zM29.222 7.5v5.667h-26.444v-5.667h26.444z"
                ></path>
              {:else}
                <path
                  d="M16 29.153l10.756-13.018-4.781 0 0.001-13.289h-11.951l-0 13.289-4.78-0 10.756 13.018z"
                ></path>
              {/if}
            </svg>
            <div class="flex-1">
              <div class="text lo">
                {controlStats.loGuess === 4
                  ? "Same"
                  : currentRound?.rank === ranks[ranks.length - 1]
                    ? "Lower"
                    : "Lower or Same"}
              </div>
              <div class="chance">{controlStats.loChance}%</div>
            </div>
          </div></button
        >
      </div>
      <button
        on:click={handleSkip}
        disabled={!canSkip}
        class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal skip-btn flex-btn"
        ><div class="button-inner">
          <span>Skip</span><svg viewBox="0 0 32 32" class="skip-ico"
            ><path
              d="M18.356 4.39l11.505 11.548-11.505 11.671-2.89-2.782 8.15-8.889-8.15-8.49 2.89-3.059zM5.029 4.39l11.505 11.548-11.505 11.671-2.89-2.782 8.15-8.889-8.15-8.49 2.89-3.059z"
            ></path></svg
          >
        </div></button
      ><button
        disabled={(!!currentRound && !$hilo_game.has_ended
          ? !canCashOut
          : !canBet) || isLoading}
        on:click={handleBetOrCashout}
        class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big bet-button cashout-btn"
      >
        {#if isLoading}
          <Loader />
        {:else}
          <div class="button-inner">
            {!!currentRound && !$hilo_game.has_ended ? "Cashout" : "Bet"}
          </div>
        {/if}
      </button>
    </div>
  </div>
  <svg
    aria-hidden="true"
    style="position: absolute; width: 0; height: 0; overflow: hidden;"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <symbol id="icon_Inform" viewBox="0 0 32 32">
        <path
          d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14c-7.732 0-14-6.268-14-14s6.268-14 14-14zM16 5c-6.075 0-11 4.925-11 11s4.925 11 11 11c6.075 0 11-4.925 11-11s-4.925-11-11-11zM16 20c1.105 0 2 0.895 2 2s-0.895 2-2 2c-1.105 0-2-0.895-2-2s0.895-2 2-2zM16 7.404c0.918 0 1.671 0.707 1.744 1.606l0.006 0.144v8.138c0 0.966-0.784 1.75-1.75 1.75-0.918 0-1.671-0.707-1.744-1.606l-0.006-0.144v-8.138c0-0.966 0.784-1.75 1.75-1.75z"
        ></path>
      </symbol>
      <symbol id="icon_Arrow" viewBox="0 0 32 32">
        <path
          d="M9.714 27.889c-0.803-0.771-0.845-1.995-0.127-2.814l0.127-0.132 8.549-8.207c0.391-0.375 0.421-0.966 0.090-1.375l-0.090-0.098-8.549-8.207c-0.847-0.814-0.847-2.133 0-2.946 0.803-0.771 2.079-0.811 2.931-0.122l0.138 0.122 8.549 8.207c2.054 1.972 2.117 5.133 0.187 7.177l-0.187 0.188-8.549 8.207c-0.847 0.814-2.221 0.814-3.069 0z"
        ></path>
      </symbol>
    </defs>
  </svg>
</div>

<style>
  .fCSgTW .fix-layer > button:hover,
  .fCSgTW .fix-layer > button.active {
    color: rgb(245, 246, 247);
    font-weight: 600;
    background-color: rgb(60, 64, 74);
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

  .eOA-dmL {
    position: relative;
    display: flex;
    height: 0.875rem;
    overflow: hidden;
    box-sizing: content-box;
    padding: 0px 0.8125rem;
    cursor: pointer;
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

  .eOA-dmL .slider-before,
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
  .eOA-dmL .slider-handler-wrap {
    flex: 1 1 0%;
    position: relative;
    z-index: 2;
  }
  .fCSgTW .fix-layer .slider-handler {
    height: 100%;
    position: relative;
    background: none;
  }
  .eOA-dmL .slider-handler:active {
    cursor: grabbing;
  }
  .eOA-dmL .slider-handler {
    display: block;
    width: 1.5rem;
    height: 100%;
    border-radius: 0.4375rem;
    transform: translate(-50%, 0px);
    background-color: rgb(216, 216, 216);
    touch-action: pan-y;
  }
  .fCSgTW .fix-layer .slider-handler::after {
    content: "";
    position: absolute;
    top: 20%;
    bottom: 20%;
    left: 0.3125rem;
    width: 0.75rem;
    border-radius: 0.375rem;
    background-color: rgb(204, 207, 217);
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

  .eOA-dmL .slider-before,
  .eOA-dmL .slider-after {
    height: 2px;
    width: 98%;
    position: absolute;
    left: 1%;
    top: 50%;
    margin-top: -1px;
  }
  .eOA-dmL .slider-before {
    background-color: rgba(216, 222, 227, 0.4);
    transform-origin: right center;
  }
  .fCSgTW .fix-layer > button {
    height: 100%;
    width: 2.5rem;
    flex: 0 0 auto;
    font-size: 0.75rem;
    background-color: rgba(60, 64, 74, 0.5);
  }
  .game-control {
    padding-top: 1.875rem;
  }
  .bswIvI > button:hover {
    background: rgb(60, 64, 74);
  }
  .kqpylJ .cashout-btn,
  .kqpylJ .bet-button {
    margin-top: 1.875rem;
    font-weight: 600;
  }
  .gcQjQT .input-control.is-focus {
    border-color: rgb(67, 179, 9);
  }
  .kqpylJ .skip-ico {
    width: 1em;
    height: 1em;
    fill: rgb(184, 194, 204);
    margin-left: 0.625rem;
  }
  .cYiOHZ.style0 {
    position: absolute;
    left: 0px;
    top: 0px;
    bottom: 0px;
    width: 330px;
    display: flex;
    flex-direction: column;
    padding: 0.625rem;
    border-right: 1px solid rgba(49, 52, 60, 0.5);
  }

  .cYiOHZ {
    display: flex;
  }

  .cYiOHZ .game-control-panel {
    flex: 1 1 0%;
  }
  .kqpylJ {
    margin-bottom: 1.25rem;
  }
  .gcQjQT .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 1.125rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
  }
  .efWjNZ {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 1rem;
  }
  .efWjNZ .max-profit {
    position: relative;
    margin-left: 0.1875rem;
    width: 1rem;
    height: 1rem;
  }
  .efWjNZ .icon {
    fill: rgb(67, 179, 9);
    width: 1rem;
    height: 1rem;
    vertical-align: top;
    transform: rotate(180deg);
    cursor: pointer;
  }
 
  .gOLODp .label-amount {
    margin-left: auto;
  }

  .cYiOHZ .input-control {
    background-color: rgba(49, 52, 60, 0.4);
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
  .fCSgTW .input-control input {
    font-weight: bold;
  }

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

  .kqpylJ input {
    font-weight: bold;
  }
  .gOLODp .coin-icon {
    order: -1;
    margin-right: 0.3125rem;
    margin-left: -0.625rem;
    width: 1.25rem;
    height: 1.25rem;
  }
  .cYiOHZ .input-control .button-group {
    margin-right: -1.125rem;
  }

  .fCSgTW .button-group {
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

  .cMPLfC {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
  }
  .cMPLfC .icon:first-of-type {
    transform: rotate(-90deg);
    margin-bottom: 0.125rem;
  }

  .cMPLfC .icon:last-of-type {
    transform: rotate(90deg);
  }

  .cMPLfC .icon {
    width: 0.75rem;
    height: 0.75rem;
  }

  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }
  .gcQjQT .input-control {
    border-color: transparent;
  }

  .kqrzPs .amount-ico {
    width: 1.5rem;
    height: 1.5rem;
  }
  .gcQjQT {
    margin-top: 1rem;
  }
  .kqrzPs .hi {
    fill: rgb(248, 217, 39);
  }

  .kqrzPs .hi_lo {
    width: 1.25rem;
    height: 1.25rem;
    margin-left: -0.5rem;
    margin-right: 1rem;
  }

  .gcQjQT .input-control input[readonly] {
    opacity: 0.5;
  }

  .cYiOHZ .input-control input {
    color: rgb(245, 246, 247);
  }

  .kqrzPs .lo {
    fill: rgb(22, 180, 230);
  }

  .kqpylJ .inline-btns {
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  .kqpylJ .flex-btn,
  .kqpylJ .inline-btns {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 1.25rem;
  }
  .cBmlor:disabled.sc-iqseJM:not(.is-loading) {
    opacity: 0.5;
    cursor: default;
  }

  .ggpSWG.hilo-guess-btn {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 0.875rem;
  }

  .gEBngo.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(107, 113, 128);
  }

  .ggpSWG {
    flex: 0 0 49%;
    font-size: 0.75rem;
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
  .ggpSWG .hi {
    fill: rgb(248, 217, 39);
  }

  .ggpSWG .flex-1 {
    flex: 1 1 0%;
  }

  .ggpSWG .text {
    width: auto !important;
    height: auto !important;
    white-space: nowrap;
    margin-bottom: 0.125rem;
  }
  .ggpSWG .lo {
    fill: rgb(22, 180, 230);
  }

  .ggpSWG .hi,
  .ggpSWG .lo {
    width: 1.25rem;
    height: 1.25rem;
  }
</style>
