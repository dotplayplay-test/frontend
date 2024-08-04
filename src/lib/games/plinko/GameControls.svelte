<script context="module">
  import { connect } from 'svelte-mobx';
</script>

<script>
  const { autorun } = connect();
  import { screen } from "$lib/store/screen";
  import { browser } from '$app/environment';
  import Decimal from 'decimal.js';
  import { viewInFiat } from '$lib/store/currency';
  import WalletManager from '$lib/logics/WalletManager';
  import { plinkoGame } from './store';
  import SelectionView from '$lib/components/selectionView.svelte';
  import { onDestroy, onMount } from 'svelte';
  $: currentTab = 1;
  $: currentAmount = '1.00000000';
  $: betting = false;
  $: canBet = false;
  $: inputDisabled = false;
  $: autoBetting = false;
  let autoBet = null;
  $: autoBetInfo = {
    numberOfBets: 0,
  };
  $: coinImage =
    'https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png';
  $: coinName = 'PPF';
  $: riskValue = 'Low';
  $: rowValue = 8;
  $: plinkoRunning = false;
  let game = null;
  let plinko = null;
  $: {
    const _game = $plinkoGame;
    if (!game && _game) {
      game = _game;
      autoBet = game.autoBet;
      currentTab = game.controlIdx;
      currentAmount = game.amount.toFixed(4);
      autoBetInfo = {
        numberOfBets: autoBet.times,
      };
      autorun(() => {
        currentAmount = game.amount.toFixed(4);
        betting = game.isBetting;
        currentTab = game.controlIdx;
        coinImage = WalletManager.getInstance().current.currencyImage;
        coinName = WalletManager.getInstance().current.currencyName;
        canBet = game.canBet && (coinName === 'USDT' || coinName === 'PPF');
        autoBetting = autoBet.isRunning;
        inputDisabled = coinName !== 'USDT' && coinName !== 'PPF';
        rowValue = game.rows;
        riskValue =
          game.riskOptions.find((v) => v.value === game.risk)?.label || 'Low';

        if (game.plinko && !plinko) {
          plinko = game.plinko;
          const handleRunningChange = (running) => {
            plinkoRunning = running;
          };
          plinko.on('running', handleRunningChange);
          onDestroy(() => {
            plinko.off('running', handleRunningChange);
          });
        }
      });
    }
  }
  $: canViewInFiat = $viewInFiat && coinName !== 'PPF';
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
      if (game && !betting) {
        if (opr === '=')
          game.setAmount(
            new Decimal(
              canViewInFiat
                ? WalletManager.getInstance().fiatToAmount(
                    parseFloat(e.currentTarget.value || '0'),
                  )
                : e.currentTarget.value,
            ) || 1,
          );
        else if (opr === '/') game.setAmount(game.amount.div(2));
        else if (opr === '*') game.setAmount(game.amount.mul(2));
        else if (opr === 'min')
          game.setAmount(
            new Decimal(WalletManager.getInstance().dict[coinName].minAmount),
          );
        else if (opr === 'max')
          game.setAmount(
            new Decimal(WalletManager.getInstance().dict[coinName].maxAmount),
          );
        currentAmount = game.amount.toFixed(4);
      }
    };
  };

  const handleAutoBet = () => {
    game && game.toggleAutoBet();
  };
  const updateAutoBetInfo = (field, value) => {
    autoBetInfo = { ...autoBetInfo, [field]: value };
  };
  const handleRiskChange = ({detail}) => {
    if (game) {
      game.setRisk(
        game.riskOptions.find((r) => r.label === detail)?.value || 1,
      );
    }
  };
  const handleRowChange = ({detail}) => {
    if (game) {
      game.setRow(Number(detail));
    }
  };
  const handleBet = () => {
    if (canBet && game) {
      game
        .handleBet()
        .catch((err) => {
          console.log('Bett error', err);
        });
    }
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
            100,
        ),
      );
      const amount =
        (sliderPercentage / 100) *
          (WalletManager.getInstance().dict[coinName].maxAmount -
            WalletManager.getInstance().dict[coinName].minAmount) +
        WalletManager.getInstance().dict[coinName].minAmount;
      handleSetAmount('=')({ currentTarget: { value: amount } });
    }
  };

  onMount(() => {
    browser && document.body.addEventListener('click', sliderClose);
    browser && document.body.addEventListener('pointerup', handlePointUp);
    browser && document.body.addEventListener('pointermove', handleSliderMove);
    return () => {
      document.body.removeEventListener('click', sliderClose);
      document.body.removeEventListener('pointerup', handlePointUp);
      document.body.removeEventListener('pointermove', handleSliderMove);
    };
  });
</script>

<div id="Plinko-control-0" class="sc-hLVXRe cYiOHZ game-control style0 {$screen <= 900
  ? 'mobile-view'
  : ''}">
  <div
    class="sc-iwjdpV {betting || autoBetting
      ? 'eLa-Dxl'
      : 'ikWSlH'}  radio game-control-switch"
  >
    <button
      on:click={() => !(betting || autoBetting) && game.setControlIdx(1)}
      class={currentTab === 1 ? 'is-active' : ''}
      ><div class="label">Manual</div></button
    >
    <button
      on:click={() => !(betting || autoBetting) && game.setControlIdx(2)}
      class={currentTab === 2 ? 'is-active' : ''}
      ><div class="label">Auto</div></button
    >
  </div>
  <div class="game-control-panel">
    {#if currentTab === 1}
      <div class="sc-gFSQbh krvdBS bet-control-manual">
        <div
          class="sc-ezbkAF gcQjQT input sc-fvxzrP gOLODp sc-gsFzgR fCSgTW game-coininput {betting ||
          inputDisabled
            ? 'disabled'
            : ''}"
        >
          <div class="input-label">
            <div class="sc-hmvnCu efWjNZ label">
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
                      <span class="locale hidden">$</span><span
                        class="amount-str"
                        >5000.<span class="suffix">00000</span></span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="label-amount">
              {#if canViewInFiat}
                {currentAmount} {coinName}
              {:else}
                {WalletManager.getInstance().amountToFiatString(currentAmount)}
              {/if}
            </div>
          </div>
          <div class="input-control">
            <input
              on:focus={() => (isFocused = { ...isFocused, bet: true })}
              on:blur={() => (isFocused = { ...isFocused, bet: false })}
              on:input={inputValidate}
              disabled={betting || inputDisabled}
              on:change={handleSetAmount('=')}
              type="text"
              value={canViewInFiat
                ? WalletManager.getInstance()
                    .amountToFiat(currentAmount)
                    .toFixed(4)
                : currentAmount}
            /><img
              alt=""
              class="coin-icon"
              src={canViewInFiat ? '/coin/USD.black.png' : coinImage}
            />
            <div class="sc-kDTinF bswIvI button-group">
              <button
                disabled={betting || inputDisabled}
                on:click={handleSetAmount('/')}>/2</button
              >
              <button
                disabled={betting || inputDisabled}
                on:click={handleSetAmount('*')}>x2</button
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
                    on:click={handleSetAmount('min')}
                    class={currentAmount <=
                    WalletManager.getInstance().dict[coinName].minAmount
                      ? 'active'
                      : ''}>Min</button
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
                    on:click={handleSetAmount('max')}
                    class={currentAmount ===
                    WalletManager.getInstance().dict[coinName].maxAmount
                      ? 'active'
                      : ''}>Max</button
                  >
                </div>
              {/if}
              <button
                disabled={betting || inputDisabled}
                class="sc-cAhXWc cMPLfC"
                on:click={(e) => {
                  e.stopPropagation();
                  if (betting || inputDisabled) return;
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
          {#if !(coinName === 'PPF' || coinName === 'USDT')}
            <span
              style="display: block; padding: 10px; color: #fd4d4d; font-size: 0.8rem;"
              >Select PPF or USDT</span
            >
          {/if}
        </div>
        <div
          class="sc-ezbkAF gcQjQT input {betting || inputDisabled
            ? 'disabled'
            : ''}"
        >
          <div class="input-label">Risk</div>
          <div class="input-control">
            <SelectionView
              items={$plinkoGame?.riskOptions.map(v => v.label)}
              embeded={true}
              openOnHover={false}
              disabled={betting || inputDisabled}
              value={riskValue}
              on:onSelectionChanged={handleRiskChange}
            />
          </div>
        </div>
        <div
          class="sc-ezbkAF gcQjQT input {betting || inputDisabled
            ? 'disabled'
            : ''}"
        >
          <div class="input-label">Row</div>
          <div class="input-control">
            <SelectionView
              embeded={true}
              openOnHover={false}
              items={$plinkoGame?.rowsOptions.map(v => v.value)}
              disabled={betting || inputDisabled}
              value={rowValue}
              on:onSelectionChanged={handleRowChange}
            />
          </div>
        </div>
        <button
          on:click={handleBet}
          class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big bet-button"
          ><div class="button-inner">Bet</div></button
        >
      </div>
    {:else}
      <div class="sc-juEPzu kLnLIW bet-control-auto">
        <div
          class="sc-ezbkAF gcQjQT input sc-fvxzrP gOLODp sc-gsFzgR fCSgTW game-coininput {autoBetting ||
          inputDisabled
            ? 'disabled'
            : ''}"
        >
          <div class="input-label">
            <div class="sc-hmvnCu efWjNZ label">
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
                      <span class="locale hidden">$</span><span
                        class="amount-str"
                        >5000.<span class="suffix">00000</span></span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="label-amount">
              {#if canViewInFiat}
                {currentAmount} {coinName}
              {:else}
                {WalletManager.getInstance().amountToFiatString(currentAmount)}
              {/if}
            </div>
          </div>
          <div class="input-control">
            <input
              on:focus={() => (isFocused = { ...isFocused, bet: true })}
              on:blur={() => (isFocused = { ...isFocused, bet: false })}
              on:input={inputValidate}
              disabled={autoBetting || inputDisabled}
              on:change={handleSetAmount('=')}
              type="text"
              value={canViewInFiat
                ? WalletManager.getInstance()
                    .amountToFiat(currentAmount)
                    .toFixed(4)
                : currentAmount}
            /><img
              alt=""
              class="coin-icon"
              src={canViewInFiat ? '/coin/USD.black.png' : coinImage}
            />
            <div class="sc-kDTinF bswIvI button-group">
              <button
                disabled={autoBetting || inputDisabled}
                on:click={handleSetAmount('/')}>/2</button
              >
              <button
                disabled={autoBetting || inputDisabled}
                on:click={handleSetAmount('*')}>x2</button
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
                    on:click={handleSetAmount('min')}
                    class={currentAmount <=
                    WalletManager.getInstance().dict[coinName].minAmount
                      ? 'active'
                      : ''}>Min</button
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
                    on:click={handleSetAmount('max')}
                    class={currentAmount ===
                    WalletManager.getInstance().dict[coinName].maxAmount
                      ? 'active'
                      : ''}>Max</button
                  >
                </div>
              {/if}
              <button
                disabled={autoBetting || inputDisabled}
                class="sc-cAhXWc cMPLfC"
                on:click={(e) => {
                  e.stopPropagation();
                  if (autoBetting || inputDisabled) return;
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
          class="sc-ezbkAF gcQjQT hzTJOu input {autoBetting || inputDisabled
            ? 'disabled'
            : ''}"
        >
          <div class="input-label">Number of Bets</div>
          <div class="input-control">
            <input
              on:focus={() => (isFocused = { ...isFocused, bets: true })}
              on:blur={() => (isFocused = { ...isFocused, bets: false })}
              on:input={inputValidate}
              on:change={(e) => {
                autoBet &&
                  autoBet.setTimes(
                    new Decimal(e.currentTarget.value).toNumber() || 0,
                  );
                updateAutoBetInfo(
                  'numberOfBets',
                  parseInt(e.currentTarget.value) || 0,
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
                  updateAutoBetInfo('numberOfBets', 0);
                }}>∞</button
              >
              <button
                disabled={autoBetting}
                on:click={() => {
                  autoBet && autoBet.setTimes(10);
                  updateAutoBetInfo('numberOfBets', 10);
                }}>10</button
              >
              <button
                disabled={autoBetting}
                on:click={() => {
                  autoBet && autoBet.setTimes(100);
                  updateAutoBetInfo('numberOfBets', 100);
                }}>100</button
              >
            </div>
          </div>
        </div>
        <div
          class="sc-ezbkAF gcQjQT input {autoBetting || inputDisabled
            ? 'disabled'
            : ''}"
        >
          <div class="input-label">Risk</div>
          <div class="input-control">
            <SelectionView
              embeded={true}
              openOnHover={false}
              disabled={autoBetting || inputDisabled}
              value={riskValue}
              items={$plinkoGame?.riskOptions.map(v => v.label)}
              on:onSelectionChanged={handleRiskChange}
            />
          </div>
        </div>
        <div
          class="sc-ezbkAF gcQjQT input {autoBetting || inputDisabled
            ? 'disabled'
            : ''}"
        >
          <div class="input-label">Row</div>
          <div class="input-control">
            <SelectionView
            openOnHover={false}
              embeded={true}
              disabled={autoBetting || inputDisabled}
              value={rowValue}
              items={$plinkoGame?.rowsOptions.map(v => v.value)}
              on:onSelectionChanged={handleRowChange}
            />
          </div>
        </div>
        <div class="sc-gfXuXe kNGYYA script-tips">
          <svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="sc-gsDKAQ hxODWG icon"
            ><use xlink:href="#icon_Help"></use></svg
          >
          <div class="tip-msg">
            <span
              >Use of script is optional and players must take full
              responsibility for any attendant risks. We will not be held liable
              in this regard.</span
            >
          </div>
        </div>
        <button
          on:click={handleAutoBet}
          disabled={!autoBetting && plinkoRunning}
          class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big bet-button"
          ><div class="button-inner">
            {autoBetting ? 'Stop Auto Bet' : 'Start Auto Bet'}
          </div></button
        >
      </div>
    {/if}
  </div>
</div>

<style>
  .cYiOHZ.style0:not(.mobile-view) {
    position: absolute;
    left: 0px;
    top: 0px;
    display: flex;
    flex-direction: column;
    padding: 0.625rem;
    bottom: 0px;
    width: 330px;
    border-right: 1px solid rgba(49, 52, 60, 0.5);
  }
  .cYiOHZ.style0.mobile-view {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0.625rem;
    order: 2;
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
  @media screen and (max-width: 621px) {
    .bet-control-auto,
    .bet-control-manual {
      display: flex;
      flex-direction: column;
    }
    .bet-button {
      order: -3;
    }
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
  .fix-layer > button:hover,
  .fix-layer > button.active {
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
  .fix-layer .slider-handler {
    background: none !important;
  }
  .fix-layer .slider-before,
  .fix-layer .slider-after {
    height: 0.5rem !important;
    margin-top: -0.25rem !important;
    border-radius: 0.25rem !important;
    background-color: rgb(23, 24, 27) !important;
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
  .cYiOHZ.style0 .game-control-switch > button.is-active {
    background-color: rgba(49, 52, 60, 0.4);
  }

  .cYiOHZ.style0 .game-control-switch > button {
    height: 2.75rem;
    line-height: 2.75rem;
    text-align: center;
    border-radius: 1.375rem;
  }

  .cYiOHZ .game-control-switch > button.is-active {
    color: rgb(245, 246, 247);
    font-weight: bold;
  }

  .cYiOHZ .game-control-switch > button {
    flex: 1 1 0%;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
  }
  .game-control-panel {
    height: 1%;
  }

  .cYiOHZ .game-control-panel {
    flex: 1 1 0%;
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
  .efWjNZ .tip {
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

  .efWjNZ .tit {
    color: rgb(128, 143, 158);
  }
  .erPQzq {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
  }
  .erPQzq .hidden {
    visibility: hidden;
  }
  .erPQzq .locale {
    display: inline-block;
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

  .cYiOHZ .input-control input {
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

  .bswIvI > button:hover {
    background: rgb(60, 64, 74);
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
  .disabled .input-control {
    opacity: 0.5 !important;
    pointer-events: none;
  }
  .ewilmB {
    flex: 1 1 0%;
    height: 100%;
    margin: 0px -1.375rem;
  }

  .gOHquD {
    position: relative;
    height: 2.5rem;
    opacity: 1;
  }

  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }
  .bet-button {
    margin-top: 1.875rem;
    font-weight: 600;
  }

  .krvdBS .bet-button {
    margin-top: 1.875rem;
    margin-bottom: auto;
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
  .cMPLfC {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
  }
  .cBmlor.button-big {
    height: 3.625rem;
  }
  .cMPLfC .icon:first-of-type {
    transform: rotate(-90deg);
    margin-bottom: 0.125rem;
  }
  .cMPLfC .icon:last-of-type {
    transform: rotate(90deg);
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
</style>
