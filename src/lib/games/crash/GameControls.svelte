<script context="module">
  import { connect } from "svelte-mobx";
</script>

<script>
  import { browser } from "$app/environment";
  import WalletManager from "./logics/WalletManager";
  import CrashInfoDialog from "./dialogs/GameInfoDialog.svelte";
  import { onMount } from "svelte";
  import { crashGameType, crashGame } from "./store";
  import { onDestroy } from "svelte";
  import Decimal from "decimal.js";
  const { autorun } = connect();
  let trendBets = [
    { type: -200, label: "Red", payout: "1.96x" },
    { type: 200, label: "Green", payout: "2x" },
    { type: 1000, label: "Moon", payout: "10x" },
  ];

  $: nextBetInfo = null;
  $: nextXBetInfo = {};
  $: canEscape = false;
  $: canBet = false;
  $: canXbet = {
    [-200]: true,
    [200]: true,
    [1000]: true,
  };
  $: currentGamePayout = 0;
  $: scriptRunning = false;
  $: percentChance = 0.99;
  $: gameStatus = 1;
  $: betInfo = null;
  $: xBetInfo = null;
  $: betRate = 1;
  $: currentAmount = "1.00000000";
  $: currentXAmount = "1.00000000";
  $: currentMaxRate = 100;
  $: xBetting = false;
  $: betting = false;
  $: autoBetting = false;
  $: autoBet = null;
  $: autoBetType = -1;

  $: placingBet = false;
  $: placingXBet = {};

  $: autoBetInfo = {
    numberOfBets: 0,
    increaseOnWin: false,
    increaseOnWinBy: 0,
    increaseOnLose: false,
    increaseOnLoseBy: 0,
    stopOnWin: 0,
    stopOnLose: 0,
  };

  $: xBet = null;
  $: coinImage =
    "https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png";
  $: coinName = "PPF";

  let game = null;
  let betScript = null;
  $: scriptList = [];
  $: scriptLogs = [];
  $: scriptConfig = null;
  $: {
    const _game = $crashGame;

    if (!game && _game) {
      game = _game;
      betScript = game.script;
      xBet = game.xbet;
      autoBet = xBet.autoBet;
      currentMaxRate = game.maxRate;
      currentAmount = game.amount.toFixed(4);
      currentXAmount = xBet.amount.toFixed(4);
      autoBetInfo = {
        numberOfBets: autoBet.times,
        stopOnLose: new Decimal(autoBet.stopOnLose).toDP(8),
        stopOnWin: new Decimal(autoBet.stopOnWin).toDP(8).toNumber(),
        increaseOnWin: !autoBet.onWin.reset,
        increaseOnWinBy: autoBet.onWin.reset
          ? 0
          : new Decimal(autoBet.onWin.value).toNumber(),
        increaseOnLose: !autoBet.onLose.reset,
        increaseOnLoseBy: autoBet.onLose.reset
          ? 0
          : new Decimal(autoBet.onWin.value).toNumber(),
      };
      autorun(() => {
        betting = !!game.betInfo && game.betInfo.rate === 0;
        betInfo = game.betInfo;
        betRate = game.rate;
        scriptList = game.script.scriptList;
        scriptLogs = game.script.logs;
        scriptConfig = game.script.config;
        coinImage = WalletManager.getInstance().current.currencyImage;
        coinName = WalletManager.getInstance().current.currencyName;
        nextBetInfo = game.nextBetInfo;
        canEscape = game.canEscape;
        canBet = game.canBet;
        gameStatus = game.status;
        scriptRunning = game.script.isRunning;
        percentChance = new Decimal(99 / game.maxRate).toDP(2).toNumber();

        xBetting = xBet.isBetting;
        autoBetType = xBet.autoBetType;
        autoBetting = xBet.autoBet.isRunning;
        const xbets = xBet.myBets;
        const nxtBets = xBet.nextBets;

        (xBetInfo = {
          [-200]: xbets[0],
          [200]: xbets[1],
          [1000]: xbets[2],
        }),
          (nextXBetInfo = {
            [-200]: nxtBets[0],
            [200]: nxtBets[1],
            [1000]: nxtBets[2],
          });
        canXbet = {
          [-200]: !xbets[0] && !xBet.autoBet.isRunning && 1 == game.status,
          [200]: !xbets[1] && !xBet.autoBet.isRunning && 1 == game.status,
          [1000]: !xbets[2] && !xBet.autoBet.isRunning && 1 == game.status,
        };
      });

      function handleXBetWin(bet) {}
      xBet.on("win", handleXBetWin);
      function handlePayoutChange(payout) {
        currentGamePayout = payout;
      }
      game.graph.on("payoutChange", handlePayoutChange);
      onDestroy(() => {
        game.graph.off("payoutChange", handlePayoutChange);
        xBet.off("handle", handleXBetWin);
      });
    }
  }

  const inputValidate = (e) => {
    function validateInput(input) {
      if (!isNaN(Number(input))) {
        if ((input.match(/\./g) || []).length <= 1) {
          return true;
        }
      }
      return false;
    }
    let currentValue = e.currentTarget.value;
    if (!validateInput(currentValue)) {
      e.currentTarget.value = currentValue.slice(0, -1);
    }
  };

  const handleSetAmount = (opr) => {
    return (e) => {
      const game = $crashGame;
      if (game && !betting) {
        if (opr === "=")
          game.setAmount(new Decimal(e.currentTarget.value) || 1);
        else if (opr === "/") game.setAmount(game.amount.div(2));
        else if (opr === "*") game.setAmount(game.amount.mul(2));
        else if (opr === "min") game.setAmount(new Decimal(WalletManager.getInstance().dict[coinName].minAmount));
        else if (opr === "max") game.setAmount(new Decimal(WalletManager.getInstance().dict[coinName].maxAmount));
        currentAmount = game.amount.toFixed(4);
      }
    };
  };

  const handleSetXAmount = (opr) => {
    return (e) => {
      if (xBet && !xBetting) {
        if (opr === "=")
          xBet.setAmount(new Decimal(e.currentTarget.value) || 1);
        else if (opr === "/") xBet.setAmount(xBet.amount.div(2));
        else if (opr === "*") xBet.setAmount(xBet.amount.mul(2));
        else if (opr === "min") xBet.setAmount(new Decimal(WalletManager.getInstance().dict[coinName].minAmount));
        else if (opr === "max") xBet.setAmount(new Decimal(WalletManager.getInstance().dict[coinName].maxAmount));
        currentXAmount = xBet.amount.toFixed(4);
      }
    };
  };

  const handleAutoBet = (type) => {
    return (e) => {
      if (autoBetting) {
        autoBet && autoBetType === type && autoBet.stop();
      } else {
        console.log("StartAuto Betting");
        xBet && xBet.setAutoBetType(type);
      }
    };
  };

  const handleEscape = () => {
    if (canEscape) {
      $crashGame.handleEscape();
    }
  };

  const handleNextBet = (cancel) => {
    return (e) => {
      $crashGame.handleNext(cancel);
    };
  };

  const handleBetCrash = () => {
    if (canBet) {
      if (placingBet) return;
      placingBet = true;
      $crashGame
        .handleBetCrash()
        .catch((err) => {
          console.log("Bett error", err);
        })
        .finally(() => (placingBet = false));
    }
  };

  const handleXNextBet = (cancel, type) => {
    return (e) => {
      if (xBet) {
        if (cancel) {
          xBet.handleCancelNext(type);
        } else {
          xBet.handleBetNext(type);
        }
      }
    };
  };

  const handleXBetCrash = (type) => {
    return (e) => {
      console.log("Handling crash bet");
      if (xBet) {
        if (canXbet[type]) {
          if (placingXBet[type]) return;
          placingXBet[type] = true;
          xBet
            .handleBetByType(type)
            .catch((err) => {
              console.log("Trend Bet Error", err);
            })
            .finally(() => (placingXBet[type] = false));
        } else {
          console.log("Cannot bet");
        }
      } else {
        console.log("Xbet Not initialized");
      }
    };
  };

  const handleChangeMaxRateChange = (e) => {
    $crashGame.setMaxRate(
      new Decimal(e.currentTarget.value).toDP(2).toNumber()
    );
    currentMaxRate = $crashGame.maxRate.toFixed(2);
  };
  const updateAutoBetInfo = (field, value) => {
    autoBetInfo = { ...autoBetInfo, [field]: value };
  };
  $: activePanel = 1;

  const setActivePanel = (panel) => {
    return (_) => {
      if (autoBetting && $crashGameType === 2) return;
      if (scriptRunning && $crashGameType === 1) return;
      activePanel = panel;
      if (panel === 2 && $crashGameType === 1 && betScript) {
        betScript.initScript();
      }
    };
  };

  $: isFocused = {};
  $: sliderOpened = {};
  $: slider = null;
  const sliderClose = () => {
    if (isGrabbing) return;
    sliderOpened = {};
  };
  const handlePointUp = () => {
    isGrabbing = false;
  };
  $: isGrabbing = false;
  $: sliderPercentage = 0;
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
      const amount =
        (sliderPercentage / 100) *
          (WalletManager.getInstance().dict[coinName].maxAmount -
            WalletManager.getInstance().dict[coinName].minAmount) +
        WalletManager.getInstance().dict[coinName].minAmount;
      if (sliderOpened.classic) {
        handleSetAmount("=")({ currentTarget: { value: amount }});
      } else if (sliderOpened.trend || sliderOpened.autoBet) {
        handleSetXAmount("=")({ currentTarget: { value: amount } });
      }
    }
  };
  onMount(() => {
    browser && document.body.addEventListener("click", sliderClose);
    browser && document.body.addEventListener("pointerup", handlePointUp);
    browser && document.body.addEventListener("pointermove", handleSliderMove);
    crashGameType.subscribe((_type) => {
      activePanel = _type === 2 && autoBetting ? 2 : 1;
    });
    return () => {
      document.body.removeEventListener("click", sliderClose);
      document.body.removeEventListener("pointerup", handlePointUp);
      document.body.removeEventListener("pointermove", handleSliderMove);
    };
  });
  $: dialogData = null;
</script>

{#if Boolean(dialogData)}
  <CrashInfoDialog
    launchConf={dialogData}
    on:close={() => (dialogData = null)}
  />
{/if}
<div id="crash-control-1" class="sc-hLVXRe cYiOHZ game-control style1">
  <div
    class="sc-iwjdpV {autoBetting && $crashGameType === 2
      ? 'eLa-Dxl'
      : 'ikWSlH'} radio game-control-switch"
    disabled={autoBetting && $crashGameType === 2}
  >
    <button
      disabled={autoBetting && $crashGameType === 2}
      on:click={setActivePanel(1)}
      class={activePanel === 1 ? "is-active" : ""}
      ><div class="label">Manual</div></button
    ><button
      disabled={autoBetting && $crashGameType === 2}
      on:click={setActivePanel(2)}
      class={activePanel === 2 ? "is-active" : ""}
      ><div class="label">
        {$crashGameType === 2 ? "Auto" : "Advance"}
      </div></button
    >
  </div>
  <div class="game-control-panel">
    {#if activePanel === 1}
      <!-- Classic OR Trend -->
      {#if $crashGameType === 1}
        <div class="sc-eqUgKp iuHOYP">
          {#if gameStatus === 1}
            <!-- Check for bet info -->
            {#if betInfo}
              <button
                disabled={scriptRunning}
                class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big sc-ywFzA qPdve"
                ><div class="button-inner"><div>Loading</div></div></button
              >
            {:else}
              <button
                disabled={scriptRunning}
                on:click={handleBetCrash}
                class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big sc-ywFzA qPdve"
                ><div class="button-inner"><div>Bet</div></div></button
              >
            {/if}
          {:else if gameStatus === 2 && betInfo && betInfo.rate === 0}
            <button
              on:click={handleEscape}
              class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big sc-ywFzA qPdve"
              ><div class="button-inner" style="width: 100%;">
                <div class="monospace" style="width: 100%">
                  {`${parseFloat(currentGamePayout).toFixed(8)} ${
                    betInfo.currencyName
                  }`}
                </div>
                <div class="sub-text">(Cash out)</div>
              </div></button
            >
          {:else}
            <!-- Betting and canceling betting -->
            <div></div>
            {#if nextBetInfo}
              <button
                disabled={scriptRunning}
                on:click={handleNextBet(true)}
                class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big sc-ywFzA qPdve"
                ><div class="button-inner">
                  <div>loading...</div>
                  <div class="sub-text">(Cancel)</div>
                </div></button
              >
            {:else}
              <button
                disabled={scriptRunning}
                on:click={handleNextBet()}
                class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big sc-ywFzA qPdve"
                ><div class="button-inner">
                  <div class="monospace">Bet</div>
                  <div class="sub-text">(Next Round)</div>
                </div></button
              >
            {/if}
          {/if}

          <div class="forms">
            <div
              class="sc-ezbkAF gcQjQT input sc-fvxzrP gOLODp sc-cAhXWc lnBinR game-coininput {betting
                ? 'disabled'
                : ''}"
            >
              <div class="input-label">
                <div class="sc-gsFzgR bxrMFn label">
                  <div>Amount</div>
                  <div class="max-profit">
                    <svg
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      class="sc-gsDKAQ hxODWG icon"
                      ><use xlink:href="#icon_Inform"></use></svg
                    >
                    <div class="tip">
                      <span class="tit">Max Profit:&nbsp;</span>
                      <div class="sc-Galmp erPQzq coin notranslate">
                        <div class="amount">
                          <span class="amount-str">34580.5665</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="label-amount">
                  {WalletManager.getInstance()
                    .amountToLocale(currentAmount, coinName)
                    .toFixed(2)} USD
                </div>
              </div>
              <div class="input-control {isFocused.bet ? "is-focus" : ""}">
                <input
                  on:focus={() => isFocused = {...isFocused, bet: true}}
                  on:blur={() => isFocused = {...isFocused, bet: false}}
                  on:input={inputValidate}
                  disabled={betting}
                  on:change={handleSetAmount("=")}
                  type="text"
                  value={currentAmount}
                /><img alt="" class="coin-icon" src={coinImage} />
                <div class="sc-kDTinF bswIvI button-group">
                  <button disabled={betting} on:click={handleSetAmount("/")}
                    >/2</button
                  >
                  <button disabled={betting} on:click={handleSetAmount("*")}
                    >x2</button
                  >
                  {#if sliderOpened.classic}
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
                        on:click={handleSetAmount("min")}
                        class={currentAmount <=
                        WalletManager.getInstance().dict[coinName].minAmount
                          ? "active"
                          : ""}>Min</button
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
                        on:click={handleSetAmount("max")}
                        class={currentAmount ===
                        WalletManager.getInstance().dict[coinName].maxAmount
                          ? "active"
                          : ""}>Max</button
                      >
                    </div>
                  {/if}
                  <button
                    disabled={betting}
                    class="sc-gqtqkP gfnHxc"
                    on:click={(e) => {
                      e.stopPropagation();
                      if (betting) return;
                      sliderOpened = { classic: true };
                    }}
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
            <div
              class="sc-ezbkAF hzTJOu input sc-gLDmcm fKDjWC {betting
                ? 'disabled'
                : ''}"
            >
              <div class="input-label">
                <div class="chance-title">
                  <div class="auto-title">Auto cash out&nbsp;</div>
                  <div>
                    Chance&nbsp;<span class="chance-num">{percentChance}%</span>
                  </div>
                </div>
              </div>
              <div class="input-control {isFocused.maxRate ? "is-focus" : ""}">
                <input
                  on:focus={() => isFocused = {...isFocused, maxRate: true}}
                  on:blur={() => isFocused = {...isFocused, maxRate: false}}
                  on:input={inputValidate}
                  on:input={handleChangeMaxRateChange}
                  type="number"
                  value={currentMaxRate}
                />
                <div class="payout-txt">×</div>
              </div>
            </div>
          </div>
        </div>
      {:else}
        <div class="sc-kMyqmI jDBJMt manual-control">
          <div
            class="sc-ezbkAF gcQjQT input sc-fvxzrP gOLODp sc-cAhXWc lnBinR game-coininput {xBetting
              ? 'disabled'
              : ''}"
          >
            <div class="input-label">
              <div class="sc-gsFzgR bxrMFn label"><div>Amount</div></div>
              <div class="label-amount">
                {WalletManager.getInstance()
                  .amountToLocale(currentXAmount, coinName)
                  .toFixed(2)} USD
              </div>
            </div>
            <div class="input-control {isFocused.trend ? "is-focus" : ""}">
              <input
                on:focus={() => isFocused = {...isFocused, trend: true}}
                on:blur={() => isFocused = {...isFocused, trend: false}}
                on:input={inputValidate}
                disabled={xBetting}
                on:change={handleSetXAmount("=")}
                type="text"
                value={currentXAmount}
              /><img alt="" class="coin-icon" src={coinImage} />
              <div class="sc-kDTinF bswIvI button-group">
                <button disabled={xBetting} on:click={handleSetXAmount("/")}
                  >/2</button
                >
                <button disabled={xBetting} on:click={handleSetXAmount("*")}
                  >x2</button
                >
                {#if sliderOpened.trend}
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
                      on:click={handleSetXAmount("min")}
                      class={currentXAmount <=
                      WalletManager.getInstance().dict[coinName].minAmount
                        ? "active"
                        : ""}>Min</button
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
                      on:click={handleSetXAmount("max")}
                      class={currentXAmount ===
                      WalletManager.getInstance().dict[coinName].maxAmount
                        ? "active"
                        : ""}>Max</button
                    >
                  </div>
                {/if}
                <button
                  disabled={xBetting}
                  class="sc-gqtqkP gfnHxc"
                  on:click={(e) => {
                    e.stopPropagation();
                    if (xBetting) return;
                    sliderOpened = { trend: true };
                  }}
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
          {#each trendBets as trend (trend.label)}
            <div class="sc-ezbkAF kDuLvp input sc-dpAhYB dqoGMw bet-item">
              <div class="input-label">
                <div>Payout</div>
                <div class="bet-payout">{trend.payout}</div>
              </div>
              {#if gameStatus === 1}
                <button
                  disabled={autoBetting}
                  on:click={!!xBetInfo[trend.type]
                    ? () => {}
                    : handleXBetCrash(trend.type)}
                  class="sc-iqseJM sc-crHmcD {!!xBetInfo[trend.type]
                    ? 'is-active'
                    : ''} cBmlor gEBngo button button-normal bet-button type{trend.type}"
                  ><div class="button-inner">
                    <div>
                      {!!xBetInfo[trend.type]
                        ? "Betting"
                        : `Bet ${trend.label}`}
                    </div>
                    <!-- <div class="sub-txt">({xBetInfo[trend.type] ? "Cancel" : "Next round"})</div> -->
                  </div></button
                >
              {:else}
                <!--  -->
                <button
                  disabled={autoBetting}
                  on:click={xBetInfo[trend.type] &&
                  xBetInfo[trend.type].status === 0
                    ? () => {}
                    : handleXNextBet(nextXBetInfo[trend.type], trend.type)}
                  class="sc-iqseJM sc-crHmcD {!!nextXBetInfo[trend.type] ||
                  (xBetInfo[trend.type] && xBetInfo[trend.type].status === 0)
                    ? 'is-active'
                    : ''} cBmlor gEBngo button button-normal bet-button type{trend.type}"
                  ><div class="button-inner">
                    <div>
                      {nextXBetInfo[trend.type]
                        ? "Loading"
                        : xBetInfo[trend.type] &&
                            xBetInfo[trend.type].status === 0
                          ? "Betting"
                          : `Bet ${trend.label}`}
                    </div>
                    {#if !xBetInfo[trend.type] || xBetInfo[trend.type].status !== 0}
                      <div class="sub-txt">
                        ({nextXBetInfo[trend.type] ? "Cancel" : "Next Round"})
                      </div>
                    {/if}
                  </div></button
                >
              {/if}
            </div>
          {/each}
        </div>
      {/if}
    {:else}
      <!-- Panel 2 -->
      {#if $crashGameType === 1}
        <div class="sc-fvpsdx gkwtXR game-script sc-ywFzA eOSgwM">
          <div>
            <button
              class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big sc-eqUgKp fOeGco"
              disabled=""
              ><div class="button-inner"><div>Cash Out</div></div></button
            >
          </div>
          {#if scriptConfig}
            <div class="sc-cqJhZP dDAoYq scripts-inputs">
              <div class="currency">
                <span>Currency</span><span class="currency-name">CUB</span>
              </div>
              <div class="logs"></div>
              <div class="forms">
                <div class="line">Checker</div>
                <div class="sc-ezbkAF gcQjQT input">
                  <div class="input-label">Chose color</div>
                  <div class="input-control radio-control">
                    <div class="sc-iwjdpV ikWSlH radio">
                      <div class="radio-item is-active">
                        <div class="circle"></div>
                        <div>Red</div>
                      </div>
                      <div class="radio-item">
                        <div class="circle"></div>
                        <div>Blue</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sc-ezbkAF gcQjQT input">
                  <div class="input-label">bet</div>
                  <div class="input-control">
                    <input type="text" value="1.2" />
                  </div>
                </div>
                <div class="sc-ezbkAF gcQjQT input">
                  <div class="input-label">payout</div>
                  <div class="input-control">
                    <input type="text" value="2" />
                  </div>
                </div>
              </div>
              <div class="actions">
                <button
                  class="sc-iqseJM sc-bqiRlB cBmlor eWZHfu button button-normal"
                  ><div class="button-inner">Run Script</div></button
                ><button
                  on:click={() => {}}
                  class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal action-close"
                  ><div class="button-inner">Close</div></button
                >
              </div>
            </div>
          {:else}
            <div class="sc-eySxxw ecRzBN script-list">
              {#each scriptList as script (script.id)}
                <div
                  class="script-item {script.userId === '0'
                    ? 'script-system'
                    : 'script-user'}"
                >
                  <div class="script-name">{script.name}</div>
                  {#if script.userId === "0"}
                    <button
                      on:click={() => {
                        dialogData = {
                          startScreen: "Preview the script",
                          params: script,
                        };
                      }}
                      class="script-view"
                      ><svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                        ><use xlink:href="#icon_View"></use></svg
                      ></button
                    >
                  {:else}
                    <button
                      on:click={() => {
                        betScript && betScript.delScript(script);
                      }}
                      class="script-del"
                      ><svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                        ><use xlink:href="#icon_Delete"></use></svg
                      ></button
                    ><button
                      on:click={() => {
                        dialogData = {
                          startScreen: "Preview the script",
                          params: script,
                        };
                      }}
                      class="script-edit"
                      ><svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                        ><use xlink:href="#icon_Edit"></use></svg
                      ></button
                    >
                  {/if}
                  <button
                    on:click={() => {
                      betScript && betScript.regist(script);
                    }}
                    class="script-run">Run</button
                  >
                </div>
              {/each}
              <button
                on:click={() => {
                  dialogData = {
                    startScreen: "Preview the script",
                    params: { name: "Script Name", content: "" },
                  };
                }}
                class="sc-iqseJM sc-bqiRlB cBmlor eWZHfu button button-normal script-add"
                ><div class="button-inner">Add a script</div></button
              >
            </div>
          {/if}

          <div class="sc-gfXuXe kNGYYA script-tips">
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="sc-gsDKAQ hxODWG icon"
              ><use xlink:href="#icon_Help"></use></svg
            >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="tip-msg">
              <span
                >Use of script is optional and players must take full
                responsibility for any attendant risks. We will not be held
                liable in this regard.</span
              ><span
                on:click={() => {
                  dialogData = {
                    startScreen: "Script Help",
                  };
                }}
                class="tip-help">Help?</span
              >
            </div>
          </div>
        </div>
      {:else}
        <div class="sc-kMyqmI TTTlv auto-control">
          <div
            class="sc-ezbkAF gcQjQT input sc-fvxzrP gOLODp sc-gsFzgR fCSgTW game-coininput {autoBetting
              ? 'disabled'
              : ''}"
          >
            <div class="input-label">
              <div class="sc-hmvnCu efWjNZ label"><div>Amount</div></div>
              <div class="label-amount">
                {WalletManager.getInstance()
                  .amountToLocale(currentXAmount, coinName)
                  .toFixed(2)} USD
              </div>
            </div>
            <div class="input-control {isFocused.autoBet ? "is-focus" : ""}">
              <input
                on:focus={() => isFocused = {...isFocused, autoBet: true}}
                on:blur={() => isFocused = {...isFocused, autoBet: false}}
                on:input={inputValidate}
                on:change={handleSetXAmount("=")}
                disabled={autoBetting}
                type="text"
                value={currentXAmount}
              /><img alt="" class="coin-icon" src={coinImage} />
              <div class="sc-kDTinF bswIvI button-group">
                <button disabled={autoBetting} on:click={handleSetXAmount("/")}
                  >/2</button
                >
                <button disabled={autoBetting} on:click={handleSetXAmount("*")}
                  >x2</button
                >
                {#if sliderOpened.autoBet}
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
                      on:click={handleSetXAmount("min")}
                      class={currentAmount <=
                      WalletManager.getInstance().dict[coinName].minAmount
                        ? "active"
                        : ""}>Min</button
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
                      on:click={handleSetXAmount("max")}
                      class={currentAmount ===
                      WalletManager.getInstance().dict[coinName].maxAmount
                        ? "active"
                        : ""}>Max</button
                    >
                  </div>
                {/if}
                <button
                  disabled={autoBetting}
                  class="sc-cAhXWc cMPLfC"
                  on:click={(e) => {
                    e.stopPropagation();
                    if (autoBetting) return;
                    sliderOpened = { autoBet: true };
                  }}
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
          <div class="sc-ezbkAF hzTJOu input {autoBetting ? 'disabled' : ''}">
            <div class="input-label">Number of Bets</div>
            <div class="input-control {isFocused.bets ? "is-focus" : ""}">
              <input
                on:focus={() => isFocused = {...isFocused, bets: true}}
                on:blur={() => isFocused = {...isFocused, bets: false}}
                on:input={inputValidate}
                on:change={(e) => {
                  autoBet &&
                    autoBet.setTimes(
                      new Decimal(e.currentTarget.value).toNumber() || 0
                    );
                  updateAutoBetInfo(
                    "numberOfBets",
                    parseInt(e.currentTarget.value) || 0
                  );
                }}
                disabled={autoBetting}
                type="text"
                value={autoBetInfo.numberOfBets}
              />
              <div class="sc-kDTinF bswIvI button-group">
                <button
                  disabled={autoBetting}
                  on:click={() => {
                    autoBet && autoBet.setTimes(0);
                    updateAutoBetInfo("numberOfBets", 0);
                  }}>∞</button
                >
                <button
                  disabled={autoBetting}
                  on:click={() => {
                    autoBet && autoBet.setTimes(10);
                    updateAutoBetInfo("numberOfBets", 10);
                  }}>10</button
                >
                <button
                  disabled={autoBetting}
                  on:click={() => {
                    autoBet && autoBet.setTimes(100);
                    updateAutoBetInfo("numberOfBets", 100);
                  }}>100</button
                >
              </div>
            </div>
          </div>
          <div
            class="sc-ezbkAF hzTJOu input sc-gqtqkP cTKsPy {autoBetting
              ? 'disabled'
              : ''}"
          >
            <div class="input-label">On win</div>
            <div class="input-control {isFocused.onWin ? "is-focus" : ""}">
              <input
                on:focus={() => isFocused = {...isFocused, onWin: true}}
                on:blur={() => isFocused = {...isFocused, onWin: false}}
                on:input={inputValidate}
                on:change={(e) => {
                  autoBet &&
                    autoBet.onWin.setValue(
                      parseFloat(e.currentTarget.value) || 0
                    );
                  updateAutoBetInfo(
                    "increaseOnWinBy",
                    (parseFloat(e.currentTarget.value) || 0).toFixed(2)
                  );
                }}
                disabled={autoBetting}
                type="text"
                readonly={!autoBetInfo.increaseOnWin}
                value={autoBetInfo.increaseOnWinBy}
              />
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <div
                on:click={() => {
                  if (autoBetting) return;
                  autoBet && autoBet.onWin.setReset(!autoBet.onWin.reset);
                  updateAutoBetInfo("increaseOnWin", !autoBet.onWin.reset);
                }}
                class="sc-cxVPaa {autoBetInfo.increaseOnWin
                  ? 'kvRMBr'
                  : 'eIHoct'} increase-switch"
              >
                <div class="dot-wrap"><div class="dot"></div></div>
                <div class="reset text">Reset</div>
                <div class="increse text">Increase by</div>
              </div>
              <div class="percent">%</div>
            </div>
          </div>
          <div
            class="sc-ezbkAF hzTJOu input sc-gqtqkP cTKsPy {autoBetting
              ? 'disabled'
              : ''}"
          >
            <div class="input-label">On lose</div>
            <div class="input-control {isFocused.onLose ? "is-focus" : ""}">
              <input
                on:focus={() => isFocused = {...isFocused, onLose: true}}
                on:blur={() => isFocused = {...isFocused, onLose: false}}
                type="text"
                on:input={inputValidate}
                on:change={(e) => {
                  autoBet &&
                    autoBet.onLose.setValue(
                      parseFloat(e.currentTarget.value) || 0
                    );
                  updateAutoBetInfo(
                    "increaseOnLoseBy",
                    (parseFloat(e.currentTarget.value) || 0).toFixed(2)
                  );
                }}
                disabled={autoBetting}
                readonly={!autoBetInfo.increaseOnLose}
                value={autoBetInfo.increaseOnLoseBy}
              />
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <div
                on:click={() => {
                  if (autoBetting) return;
                  autoBet && autoBet.onLose.setReset(!autoBet.onLose.reset);
                  updateAutoBetInfo("increaseOnLose", !autoBet.onLose.reset);
                }}
                class="sc-cxVPaa {autoBetInfo.increaseOnLose
                  ? 'kvRMBr'
                  : 'eIHoct'} increase-switch"
              >
                <div class="dot-wrap"><div class="dot"></div></div>
                <div class="reset text">Reset</div>
                <div class="increse text">Increase by</div>
              </div>
              <div class="percent">%</div>
            </div>
          </div>
          <div
            class="sc-ezbkAF hzTJOu input sc-fvxzrP gOLODp {autoBetting
              ? 'disabled'
              : ''}"
          >
            <div class="input-label">
              Stop on win
              <div class="label-amount">
                {WalletManager.getInstance()
                  .amountToLocale(autoBetInfo.stopOnWin, coinName)
                  .toFixed(2)} USD
              </div>
            </div>
            <div class="input-control {isFocused.sOnWin ? "is-focus" : ""}">
              <input
                on:focus={() => isFocused = {...isFocused, sOnWin: true}}
                on:blur={() => isFocused = {...isFocused, sOnWin: false}}
                on:input={inputValidate}
                on:change={(e) => {
                  autoBet &&
                    autoBet.setStopOnWin(
                      new Decimal(e.currentTarget.value).toDP(8).toNumber()
                    );
                  updateAutoBetInfo(
                    "stopOnWin",
                    (parseFloat(e.currentTarget.value) || 0).toFixed(2)
                  );
                }}
                disabled={autoBetting}
                type="text"
                value={autoBetInfo.stopOnWin.toFixed(4)}
              /><img alt="" class="coin-icon" src={coinImage} />
            </div>
          </div>
          <div
            class="sc-ezbkAF hzTJOu input sc-fvxzrP gOLODp {autoBetting
              ? 'disabled'
              : ''}"
          >
            <div class="input-label">
              Stop on lose
              <div class="label-amount">
                {WalletManager.getInstance()
                  .amountToLocale(autoBetInfo.stopOnLose, coinName)
                  .toFixed(2)} USD
              </div>
            </div>
            <div class="input-control {isFocused.sOnLose ? "is-focus" : ""}">
              <input
                on:focus={() => isFocused = {...isFocused, ...isFocused, sOnLose: true}}
                on:blur={() => isFocused = {...isFocused, ...isFocused, sOnLose: false}}
                on:input={inputValidate}
                on:change={(e) => {
                  autoBet &&
                    autoBet.setStopOnLose(
                      new Decimal(e.currentTarget.value).toDP(8).toNumber()
                    );
                  updateAutoBetInfo(
                    "stopOnLose",
                    (parseFloat(e.currentTarget.value) || 0).toFixed(2)
                  );
                }}
                disabled={autoBetting}
                type="text"
                value={autoBetInfo.stopOnLose.toFixed(4)}
              /><img alt="" class="coin-icon" src={coinImage} />
            </div>
          </div>
          <div class="buttons">
            {#each trendBets as trend (trend.label)}
              <div class="sc-ezbkAF kDuLvp input sc-wkwDy ifiUVY bet-item">
                <div class="input-label">
                  <div>Payout</div>
                  <div class="bet-payout">{trend.payout}</div>
                </div>
                <button
                  disabled={autoBetting && autoBetType !== trend.type}
                  on:click={!autoBetting || autoBetType === trend.type
                    ? handleAutoBet(trend.type)
                    : () => {}}
                  class="sc-iqseJM {autoBetting && autoBetType === trend.type
                    ? 'is-active'
                    : ''} sc-crHmcD cBmlor gEBngo button button-normal bet-button type{trend.type}"
                  ><div class="button-inner">
                    <div>
                      {autoBetType === trend.type
                        ? "Stop Auto Bet"
                        : `Bet ${trend.label}`}
                    </div>
                  </div></button
                >
              </div>
            {/each}
          </div>
        </div>
      {/if}
    {/if}
  </div>
</div>

<style>
  .cYiOHZ.style1 {
    order: 2;
    min-height: 230px;
    margin-top: 1px;
  }

  .cYiOHZ {
    display: flex;
  }
  .cYiOHZ.style1 .game-control-switch {
    width: 3rem;
    flex-direction: column;
    position: relative;
  }

  .cYiOHZ .game-control-switch {
    display: flex;
    flex: 0 0 auto;
  }

  .ikWSlH {
    display: flex;
    opacity: 1;
  }
  .eLa-Dxl {
    display: flex;
    opacity: 0.5;
  }
  .cYiOHZ.style1 .game-control-switch > button {
    position: relative;
  }

  .cYiOHZ .game-control-switch > button {
    flex: 1 1 0%;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
  }
  .cYiOHZ.style1 .game-control-switch .label {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);
    white-space: nowrap;
  }
  .cYiOHZ .game-control-switch > button.is-active {
    color: rgb(245, 246, 247);
    font-weight: bold;
  }
  .cYiOHZ.style1 .game-control-switch > button.is-active {
    border-right: 2px solid rgb(67, 179, 9);
    background-image: linear-gradient(
      to left,
      rgba(91, 174, 28, 0.176),
      rgba(0, 0, 0, 0) 50%
    );
  }
  .cYiOHZ.style1 .game-control-switch::after {
    content: "";
    position: absolute;
    right: 0px;
    top: 0px;
    bottom: 0px;
    width: 1px;
    background-color: rgba(49, 52, 60, 0.5);
  }

  .cYiOHZ.style1 .game-control-panel {
    padding: 1.25rem 1.375rem;
  }
  .fix-layer .slider-handler {
    background: none!important;
  }
   .fix-layer .slider-before,.fix-layer .slider-after {
    height: 0.5rem!important;
    margin-top: -0.25rem!important;
    border-radius: 0.25rem!important;
    background-color: rgb(23, 24, 27)!important;
    transform: scaleX(1) !important;
}
  .fix-layer .slider-handler::after {
    content: "";
    position: absolute;
    top: 20%;
    bottom: 20%;
    left: 0.3125rem;
    width: 0.75rem;
    border-radius: 0.375rem;
    background-color: rgb(204, 207, 217);
}
  .cYiOHZ .game-control-panel {
    flex: 1 1 0%;
  }
  @media screen and (min-width: 621px) {
    .gkwtXR {
      margin: 0px -0.625rem;
      padding: 0px 0.625rem;
    }
  }

  .gkwtXR {
    height: 100%;
    overflow: auto;
    margin-top: 1.25rem;
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

  .fOeGco {
    width: 90%;
    max-width: 19.75rem;
    margin: 3.5rem auto;
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
  .fOeGco .button-inner {
    flex-direction: column;
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
  @media screen and (min-width: 621px) {
    .script-list {
      display: flex;
      flex-wrap: wrap;
      -webkit-box-pack: justify;
      justify-content: space-between;
    }
  }

  @media screen and (min-width: 621px) {
    .ikZPEu .script-list .script-item,
    .ikZPEu .script-list .script-add {
      width: 48%;
      flex: 0 0 auto;
    }
  }

  .ecRzBN .script-add {
    margin-top: 0.75rem;
    flex: 1 1 0%;
  }
  .ecRzBN {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
  }
  @media screen and (min-width: 621px) {
    .ikZPEu .script-list .script-item,
    .ikZPEu .script-list .script-add {
      width: 48%;
      flex: 0 0 auto;
    }
  }

  .ecRzBN .script-item {
    height: 2.75rem;
    border-radius: 1.375rem;
    background: rgba(49, 52, 60, 0.4);
    margin-top: 0.75rem;
    padding-left: 1.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    box-sizing: border-box;
  }

  .ecRzBN .script-name {
    flex: 1 1 0%;
    overflow: hidden;
  }
  .ecRzBN .script-view,
  .ecRzBN .script-edit,
  .ecRzBN .script-del {
    background: transparent;
    height: 1.875rem;
    padding: 0px 0.625rem;
  }

  .ecRzBN .script-view .icon,
  .ecRzBN .script-edit .icon,
  .ecRzBN .script-del .icon {
    width: 1.25rem;
    height: 1.25rem;
  }

  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }
  .ecRzBN .script-run {
    height: 2.25rem;
    border-radius: 1.125rem;
    color: rgb(245, 246, 247);
    padding: 0px 1.125rem;
    margin-right: 0.25rem;
    background-color: rgb(49, 52, 60);
  }
  .gkwtXR .script-tips {
    margin-top: 0px;
  }

  .kNGYYA {
    display: flex;
    margin-top: 0.75rem;
    font-size: 12px;
    color: rgb(153, 164, 176);
    opacity: 0.6;
  }
  .kNGYYA > svg {
    fill: rgb(67, 179, 9);
    width: 1.125rem;
    height: 1.125rem;
    vertical-align: bottom;
    margin-right: 0.25rem;
  }
  .kNGYYA .tip-msg {
    flex: 1 1 0%;
  }
  .gkwtXR .tip-help {
    color: rgb(67, 179, 9);
    cursor: pointer;
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

  .qPdve {
    width: 90%;
    max-width: 19.75rem;
    margin: 3.5rem auto;
  }
  .qPdve .button-inner {
    flex-direction: column;
  }
  .iuHOYP .forms {
    margin-bottom: 1.875rem;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  .iuHOYP .forms .input {
    width: 47%;
  }

  .gcQjQT {
    margin-top: 1rem;
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
  .bxrMFn {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 1rem;
  }
  .bxrMFn .max-profit {
    position: relative;
    margin-left: 0.1875rem;
    width: 1rem;
    height: 1rem;
  }
  .bxrMFn .icon {
    fill: rgb(67, 179, 9);
    width: 1rem;
    height: 1rem;
    vertical-align: top;
    transform: rotate(180deg);
    cursor: pointer;
  }
  .bxrMFn .tip {
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
  .bxrMFn .tit {
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
  .gOLODp .label-amount {
    margin-left: auto;
  }
  .disabled .input-control {
    opacity: 0.5 !important;
    pointer-events: none;
  }
  .input-control.is-focus {
    border-color: rgb(67, 179, 9);
  }
  /* .gJxbeS .input-control {
    border-color: transparent;
  }

  .eQfpOS .input-control {
    background-color: rgba(49, 52, 60, 0.4);
  } */

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
  .lnBinR .input-control input {
    font-weight: bold;
  }

  .eQfpOS .input-control input {
    color: rgb(245, 246, 247);
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
  .gOLODp .coin-icon {
    order: -1;
    margin-right: 0.3125rem;
    margin-left: -0.625rem;
    width: 1.25rem;
    height: 1.25rem;
  }
  .eQfpOS .input-control .button-group {
    margin-right: -1.125rem;
  }

  .lnBinR .button-group {
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

  .bswIvI > button {
    height: 2.25rem;
    width: 2.75rem;
    padding: 0px;
    color: rgb(153, 164, 176);
    background: rgb(49, 52, 60);
    margin-left: 1px;
  }
  .bswIvI > button:last-child {
    padding-right: 0.125rem;
    border-top-right-radius: 1.125rem;
    border-bottom-right-radius: 1.125rem;
  }
  .bswIvI > button:hover {
    background: rgb(60, 64, 74);
  }

  .gfnHxc {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
  }
  .gfnHxc .icon:first-of-type {
    transform: rotate(-90deg);
    margin-bottom: 0.125rem;
  }

  .gfnHxc .icon {
    width: 0.75rem;
    height: 0.75rem;
  }

  .gfnHxc .icon:last-of-type {
    transform: rotate(90deg);
  }
  .iuHOYP .forms .input {
    width: 47%;
  }

  .hzTJOu {
    margin-top: 1rem;
  }
  .hzTJOu .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 1.125rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
  }
  .iuHOYP .chance-title {
    display: flex;
    flex: 1 1 0%;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  .iuHOYP .auto-title {
    margin-right: auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .iuHOYP .chance-title .chance-num {
    color: rgb(67, 179, 9);
  }

  .hzTJOu .input-control {
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
  .eQfpOS .input-control input {
    color: rgb(245, 246, 247);
  }

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
  .fKDjWC .payout-txt {
    color: rgb(67, 179, 9);
    margin-right: -0.3125rem;
    font-size: 1.625rem;
  }

  .jDBJMt {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 2.5rem 0px 3.5rem;
  }
  .jDBJMt > div:first-child {
    width: 100%;
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
  .lnBinR .input-control input {
    font-weight: bold;
  }

  .eQfpOS .input-control input {
    color: rgb(245, 246, 247);
  }

  .eQfpOS .input-control .button-group {
    margin-right: -1.125rem;
  }

  .lnBinR .button-group {
    width: 8.375rem;
    position: relative;
  }

  .gfnHxc {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
  }

  .gfnHxc .icon:first-of-type {
    transform: rotate(-90deg);
    margin-bottom: 0.125rem;
  }

  .gfnHxc .icon {
    width: 0.75rem;
    height: 0.75rem;
  }
  .gfnHxc .icon:last-of-type {
    transform: rotate(90deg);
  }
  .dqoGMw {
    flex-basis: 30%;
    -webkit-box-flex: 1;
    flex-grow: 1;
    margin-top: 1.5rem;
    margin-right: 0.625rem;
    position: relative;
  }

  .kDuLvp {
    margin-top: 1rem;
  }
  .kDuLvp .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 0.75rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
  }
  .dqoGMw .bet-payout,
  .ifiUVY .bet-payout {
    margin-left: 0.625rem;
    color: rgb(245, 246, 247);
  }
  .dqoGMw .is-active.bet-button::before,
  .ifiUVY .is-active.bet-button::before,
  .is-active.bet-button:before {
    border-width: 0px;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
  }
  .dqoGMw .bet-button,
  .ifiUVY .bet-button {
    height: 3rem;
    overflow: hidden;
    position: relative;
  }

  .gEBngo.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(107, 113, 128);
  }
  .dqoGMw .bet-button.type-200::before,
  .ifiUVY .bet-button.type-200::before {
    background-color: rgb(237, 99, 0);
  }
  .dqoGMw .bet-button::before,
  .ifiUVY .bet-button::before {
    content: "";
    position: absolute;
    left: 0.9375rem;
    top: 0.75rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.75rem;
    border: 2px solid rgba(50, 57, 63, 0.5);
    transition: all 0.2s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
    background-color: rgb(67, 179, 9);
  }
  .cBmlor:disabled.sc-iqseJM:not(.is-loading) {
    opacity: 0.5;
    cursor: default;
  }
  .cBmlor:active.sc-iqseJM:not(:disabled) {
    transform: scale(0.95);
  }
  .dqoGMw .bet-button .button-inner,
  .ifiUVY .bet-button .button-inner {
    flex-direction: column;
  }

  .dqoGMw .bet-button > div,
  .ifiUVY .bet-button > div {
    position: relative;
    z-index: 2;
  }
  .dqoGMw:last-child,
  .ifiUVY:last-child {
    margin-right: 0px;
  }
  .dqoGMw .bet-button.type1000::before,
  .ifiUVY .bet-button.type1000::before {
    background-color: rgb(226, 180, 11);
  }

  .TTTlv {
    display: flex;
    flex-wrap: wrap;
  }
  .TTTlv .buttons {
    display: flex;
    flex: 1 1 0%;
  }
  .TTTlv > .input {
    flex: 1 0 40%;
    -webkit-box-flex: 1;
    margin-right: 0.625rem;
  }

  .TTTlv > .input:nth-of-type(2n) {
    margin-right: 0px;
  }

  .efWjNZ {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 1rem;
  }

  .cYiOHZ .input-control {
    background-color: rgba(49, 52, 60, 0.4);
  }
  .fCSgTW .input-control input {
    font-weight: bold;
  }

  .cYiOHZ .input-control input {
    color: rgb(245, 246, 247);
  }
  .cYiOHZ .input-control .button-group {
    margin-right: -1.125rem;
  }

  .fCSgTW .button-group {
    width: 8.375rem;
    position: relative;
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

  .cMPLfC .icon {
    width: 0.75rem;
    height: 0.75rem;
  }
  .cMPLfC .icon:last-of-type {
    transform: rotate(90deg);
  }
  .kvRMBr,
  .eIHoct {
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
  .kvRMBr .dot-wrap,
  .eIHoct .dot-wrap {
    position: absolute;
    width: 1rem;
    height: 1.75rem;
    border-radius: 0.46875rem;
    background: rgb(67, 179, 9);
    left: 0.875rem;
    top: 0.25rem;
  }
  .dot-wrap .dot {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    position: absolute;
    left: 0px;
    transition: top 0.1s ease-in-out 0s;
  }
  .kvRMBr .dot-wrap .dot {
    top: 0.875rem;
  }
  .eIHoct .dot-wrap .dot {
    top: -0.0625rem;
  }
  .eIHoct .reset,
  .kvRMBr .increse {
    font-weight: bold;
    color: rgb(255, 255, 255);
  }
  .eIHoct .text,
  .kvRMBr .text {
    padding: 0px 0.25rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 0.75rem;
    line-height: 0.875rem;
    height: 0.875rem;
  }

  .cTKsPy .percent {
    margin-right: -0.375rem;
    color: rgb(67, 179, 9);
  }
  .ifiUVY {
    flex-basis: 30%;
    -webkit-box-flex: 1;
    flex-grow: 1;
    margin-top: 1.5rem;
    margin-right: 0.625rem;
    position: relative;
  }
  input:read-only {
    opacity: 0.5;
  }
  .dDAoYq {
    position: relative;
    margin-bottom: 1.25rem;
  }

  @media screen and (min-width: 621px) {
    .scripts-inputs {
      position: relative;
      padding-top: 3.125rem;
      padding-right: 46%;
    }
  }
  @media screen and (min-width: 621px) {
    .fCozZD .scripts-inputs .currency {
      width: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
    }
  }
  .dDAoYq .currency .currency-name {
    margin-left: 1em;
    color: rgb(67, 179, 9);
  }
  .dDAoYq .currency {
    border-bottom: 1px solid rgba(49, 52, 60, 0.5);
    padding: 0.9375rem 0px;
    margin-bottom: 1em;
  }
  @media screen and (min-width: 621px) {
    .fCozZD .scripts-inputs .logs {
      width: 44%;
      height: auto;
      position: absolute;
      right: 0px;
      top: 3.125rem;
      bottom: 0px;
    }
  }
  .dDAoYq .line {
    margin: 1rem 0.75rem 0px;
    color: rgb(67, 179, 9);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
  }
  .dDAoYq .logs {
    height: 10.625rem;
    margin-top: 0.625rem;
    overflow: auto;
    border: 1px solid rgb(67, 179, 9);
    background-color: rgba(49, 52, 60, 0.4);
    box-sizing: border-box;
    border-radius: 0.375rem;
    padding: 0.3125rem;
  }
  .dDAoYq .line::after {
    content: "";
    height: 1px;
    background-color: rgba(49, 52, 60, 0.5);
    flex: 1 1 0%;
    margin-left: 0.5em;
  }
  .dDAoYq .radio-control {
    height: auto;
    min-height: 2.75rem;
    line-height: 1.5rem;
  }
  .dDAoYq .radio {
    flex-wrap: wrap;
  }

  .ikWSlH {
    display: flex;
    opacity: 1;
  }
  .dDAoYq .radio-item {
    margin-right: 0.625rem;
    padding: 0.75rem 0px;
  }
  /* .dDAoYq .radio-item:last-child {
    padding-top: 0px;
} */

  .ikWSlH .radio-item {
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .ikWSlH .radio-item .circle {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 0 0 auto;
    width: 1rem;
    height: 1rem;
    border-radius: 0.5em;
    margin-right: 0.3em;
    border: 1px solid rgb(45, 48, 53);
    box-sizing: border-box;
    background-color: rgba(45, 48, 53, 0.5);
  }
  .ikWSlH .radio-item.is-active .circle::after {
    display: block;
  }

  .ikWSlH .radio-item .circle::after {
    content: "";
    display: none;
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 0.3125rem;
    background-color: rgb(67, 179, 9);
  }
  .dDAoYq .actions {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 1rem;
  }
  .eWZHfu.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(88, 26, 196);
    background-image: conic-gradient(
      from 1turn,
      rgb(88, 26, 196),
      rgb(119, 60, 253)
    );
  }
  .dDAoYq .action-close {
    margin-left: 1.25rem;
  }

  .gEBngo.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(107, 113, 128);
  }
  .fCSgTW .fix-layer > button:hover,
  .fCSgTW .fix-layer > button.active {
    color: rgb(245, 246, 247);
    font-weight: 600;
    background-color: rgb(60, 64, 74);
  }
  .fix-layer {
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
  .fix-layer > button {
    height: 100%;
    width: 2.5rem;
    flex: 0 0 auto;
    font-size: 0.75rem;
    background-color: rgba(60, 64, 74, 0.5);
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
  .fix-layer .slider {
    flex: 1 1 0%;
    height: 100%;
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
</style>
