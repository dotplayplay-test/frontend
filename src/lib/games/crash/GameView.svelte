<script context="module">
  import { connect } from "svelte-mobx";
</script>

<script>
  import TrendDialog from "./dialogs/trends/index.svelte";
  import CrashInfoDialog from "./dialogs/GameInfoDialog.svelte";
  import { onMount, onDestroy } from "svelte";
  const { autorun } = connect();
  import Decimal from "decimal.js";
  import pkg from 'lodash';
const { debounce } = pkg;
  import { crashGame } from "./store";
  function observeElementSizeChange(callback, delay = 0) {
    let isComponentMounted = false;
    let elementData = { width: 0, height: 0, el: null, fn: callback };
    elementData.fn =
      delay > 0
        ? debounce((size) => !isComponentMounted && callback(size), delay)
        : callback;

    function handleSizeChange({ width, height }) {
      if (height === elementData.height && width === elementData.width) return;
      Object.assign(elementData, { width, height });
      if (!isComponentMounted) elementData.fn({ width, height });
    }

    let observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        handleSizeChange(entry.contentRect);
      }
    });

    function observeElement(element) {
      if (elementData.el) observer.unobserve(elementData.el);
      if (element) {
        elementData.el = element;
        handleSizeChange({
          width: element.clientWidth,
          height: element.clientHeight,
        });
        observer.observe(element);
      } else {
        elementData.el = null;
      }
    }

    onMount(() => {
      isComponentMounted = true;
    });

    onDestroy(() => {
      observer.disconnect();
    });

    return observeElement;
  }
  $: betsContainer = null;
  $: viewContainer = null;
  $: canvas = null;

  $: winData = null;
  $: gameHistory = [];
  $: showTrends = false;
  $: isMoon = false;
  let scrollTimeout;
  $: {
    const game = $crashGame;
    if (game) {
      autorun(() => {
        gameHistory = game.history.slice(0, 10).reverse();

        if (betsContainer) {
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            const { scrollLeft, scrollWidth } = betsContainer;
            if (scrollLeft === 0 || scrollLeft > 350) {
              betsContainer.scrollTo(scrollWidth, 0);
            }
          }, 100);
        }
      });

      if (canvas) {
        game.graph.mountEffect(canvas);
      }
      if (viewContainer) {
        const observer = observeElementSizeChange(() => {
          game.graph.resize();
        }, 300);
        observer(viewContainer);
      }

      const handleEscapeSuccess = ({ amount, odds, currencyName }) => {
        if (odds > 1) {
          winData = {
            profitAmount: new Decimal(amount).times(odds).toNumber(),
            currencyName: currencyName,
            odds: odds,
          };
          setTimeout(() => {
            winData = null;
          }, 3000);
        }
      };

      game.on("escapeSuccess", handleEscapeSuccess);

      onDestroy(() => {
        game.off("escapeSuccess", handleEscapeSuccess);
      });
    }
  }
  $: dialogData = null;
</script>
{#if Boolean(dialogData)}
  <CrashInfoDialog
    launchConf={dialogData}
    on:close={() => (dialogData = null)}
  />
{/if}
{#if showTrends}
  <TrendDialog on:close={() => (showTrends = false)} />
{/if}
<div class="game-view">
  <div class="sc-hoHwyw fIoiVG game-recent sc-bjztik kQtbd">
    <!-- <div class="sc-lheXJl lhEJig jackpot-enter">
      <div class="title"><span class="tit">Bankroll</span><span>CUB</span></div>
      <div class="sc-Galmp erPQzq coin notranslate">
        <img a class="coin-icon" src="/coin/BTC.black.png" />
        <div class="amount"><span class="amount-str">4610093.31</span></div>
      </div>
    </div> -->
    <div bind:this={betsContainer} class="recent-list-wrap">
      <div class="recent-list" style="transform: translate(0%, 0px);">
        {#each gameHistory as bet, index (`${index}_${bet.gameId}`)}
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <!-- svelte-ignore missing-declaration -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            on:click={() => {
              
              dialogData = {
                startScreen: "All Players",
                gameID: bet.gameId,
              };
            }}
            class="game-item {bet.odds >= 10
              ? 'is-moon'
              : bet.odds >= 2
                ? 'is-double'
                : ''}"
            style=""
          >
            <div class="issus">{bet.gameId}</div>
            <div>{bet.odds}x</div>
          </div>
        {/each}
      </div>
    </div>
    <button
      on:click={() => showTrends = !showTrends}
      class="sc-iLOkMM kCvsnZ flex-center"
      ><svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Trends"></use></svg
      >
      <div>Trends</div></button
    >
  </div>
  <div class="sc-hcupDf dqwCNK game-box sc-eZKLwX gcZuwC">
    <div class="sc-gLDmcm gnjHQb house-edge"><span>House Edge 1%</span></div>
    <div bind:this={viewContainer} class="sc-eTwdGJ dgiRGq">
      {#if winData}
        <div class="Le">
          <div class="msg">
            <span>Won</span>
            <span class="amount">{winData.profitAmount}</span>
          </div>
          <img
            alt=""
            src="https://static.nanogames.io/assets/win.b353e909.png"
          />
        </div>
      {/if}
      {#if isMoon}
        <div
          class="sc-eTwdGJ eSrhSC"
          style="background-position-y: -186px;"
        ></div>
      {/if}
      <canvas bind:this={canvas} class="" width="1054" height="422"></canvas>
    </div>
    <svg class="box-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 996 46"
      ><defs
        ><linearGradient id="gcardBg" x1="50%" x2="50%" y1="0%" y2="100%"
          ><stop offset="0%" stop-color="#31343C"></stop><stop
            offset="100%"
            stop-color="#1E2024"
            stop-opacity="0"
          ></stop></linearGradient
        ></defs
      ><g opacity=".899"
        ><path
          fill="url(#gcardBg)"
          fill-rule="evenodd"
          d="M0 0h996L892 46H96z"
          opacity=".598"
          transform="rotate(-180 498 23)"
        ></path></g
      ></svg
    >
  </div>
</div>


<style>
  .Le {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 320px;
    height: 200px;
    margin: -100px 0 0 -160px;
  }
  .Le .msg {
    font-size: 24px;
    line-height: 1;
    color: #faaf00;
    white-space: nowrap;
  }
  .Le .amount {
    margin-left: 5px;
    color: #ffffff;
  }
  .Le img {
    width: 270px;
    height: 153px;
  }

  .fIoiVG {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 2.75rem;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
  }
  .fIoiVG .jackpot-enter {
    margin-left: 1.5rem;
  }

  .lhEJig {
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
  .lhEJig .title {
    font-weight: bold;
    height: 1.25rem;
  }
  .lhEJig .coin {
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
  .lhEJig .coin .coin-icon {
    width: 1rem;
    height: 1rem;
  }
  .lhEJig .title .tit {
    margin-right: 0.25rem;
    color: rgb(67, 179, 9);
  }
  .erPQzq .coin-icon {
    width: 1.4em;
    height: 1.4em;
    margin-right: 0.25em;
  }
  .lhEJig .coin .amount {
    color: rgb(245, 246, 247);
    font-weight: bold;
  }
  .lhEJig .coin .amount .amount-str {
    width: auto;
  }
  .erPQzq .amount-str {
    width: 7em;
    display: inline-block;
  }
  .kQtbd .recent-list-wrap {
    background-color: rgba(49, 52, 60, 0.4);
    border-radius: 1.375rem;
    padding: 0px 0.625rem;
    margin: 0px 0.625rem;
  }
  .fIoiVG .recent-list-wrap {
    flex: 1 1 auto;
    height: 100%;
    margin: 0px 1.5rem;
    overflow: hidden;
    position: relative;
    border-radius: 1.375rem;
  }
  .fIoiVG .recent-list {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    gap: 5px;
    padding: 0 20px;
    -webkit-box-pack: end;
    justify-content: flex-end;
  }
  .kQtbd .game-item.is-double {
    color: rgb(67, 179, 9);
  }
  .kQtbd .game-item.is-double::before {
    background-color: rgb(67, 179, 9) !important;
  }
  .kQtbd .game-item.is-moon::before {
    background-color: rgb(246, 199, 34) !important;
  }
  .kQtbd .game-item.is-moon {
    color: rgb(246, 199, 34);
  }
  .kQtbd .game-item {
    display: flex;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    line-height: 0.875rem;
    background-color: transparent;
    position: relative;
    padding-left: 1.4375rem;
    color: rgb(237, 99, 0);
    text-align: left;
    align-items: flex-start;
    height: 100%;
  }
  .kQtbd .game-item::before {
    content: "";
    position: absolute;
    left: 0.125rem;
    top: 50%;
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    transform: translateY(-50%);
    background-color: rgb(237, 99, 0);
  }
  .kQtbd .game-item .issus {
    font-size: 1rem;
    font-weight: normal;
    transform: scale(0.7);
    width: 70px;
    transform-origin: left center;
    margin-bottom: 0.125rem;
    color: rgba(153, 164, 176, 0.5);
  }
  .kCvsnZ {
    margin-right: 1.5rem;
    color: rgba(153, 164, 176, 0.6);
    min-height: 1.875rem;
    font-size: 1rem;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .kCvsnZ .icon {
    margin-right: 0.375rem;
  }

  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }
  .gcZuwC {
    position: relative;
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    padding: 0px 1.875rem 1.875rem;
  }
  .dqwCNK {
    position: relative;
  }
  .gnjHQb {
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
  .dgiRGq {
    position: relative;
    margin-top: 1.875rem;
    margin-bottom: 1.25rem;
    min-height: 300px;
    height: 100%;
  }
  .dgiRGq > canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    transition: opacity 0.5s ease 0s;
  }
  canvas {
    user-select: none;
  }
  .dqwCNK .box-bg {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: -1px;
    width: 100%;
  }
</style>
