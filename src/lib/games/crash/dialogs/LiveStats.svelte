<script>
   import {crashGame } from "../store";
  import { browser } from "$app/environment";
  import { createEventDispatcher, onDestroy, onMount } from "svelte";
  import useFormatter from "../hooks/formatter";
  import useLiveStats from "../hooks/livestats";
  import { liveStats } from "../store";
  import {
    Chart,
    CategoryScale,
    LinearScale,
    LineController,
    LineElement,
    PointElement,
    Filler,
  } from "chart.js";
  Chart.register(
    CategoryScale,
    LinearScale,
    LineController,
    LineElement,
    PointElement,
    Filler
  );
  $: chartContainer = null;
  const { removeTrailingZeros, getSuffix } = useFormatter();
  const { getStats, resetStats, recordGame } = useLiveStats();
  $: draggableContainer = null;
  $: stats = $liveStats || getStats();
  let chartInstance = null;
  let init = false;
  $: {
    const game = $crashGame;
    if (game && !init) {
      init = true;
      function handleBetResult({bets}) {
        bets.forEach(bet => {
          recordGame(bet.won, bet.wager, bet.profit)
        });
      }
      game.on("user_bet_result", handleBetResult)
      onDestroy(() => {
        game.off("user_bet_result", handleBetResult)
      });
    }
    if (chartContainer && stats) {
      const ctx = chartContainer.getContext("2d");
      if (chartInstance) {
        chartInstance.destroy(); // destroy the previous chart instance if it exists
      }
      chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: Array.from({ length: stats.points.length }, (_, i) => `${i}`),
          datasets: [
            {
              data: stats.points.map((p) => (p > 0 ? p : 0)),
              fill: true,
              backgroundColor: "rgba(93, 160, 0, 0.8)",
              borderColor: "#5da000",
              pointRadius: 0,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#FFFFFF",
              borderWidth: 3,
              tension: 0.3,
            },
            {
              data: stats.points.map((p) => (p < 0 ? p : 0)),
              fill: true,
              backgroundColor: "rgba(237, 99, 0, 0.8)",
              borderColor: "#ed6300",
              pointRadius: 0,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#FFFFFF",
              borderWidth: 3,
              tension: 0.3,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: true,
              mode: "nearest",
              intersect: false,
              callbacks: {
                label: function (context) {
                  return !!context.parsed.y ? parseFloat(context.parsed.y).toFixed(4) : "";
                },
              },
            },
          },
          scales: {
            x: {
              display: false,
              stacked: true,
            },
            y: {
              display: false,
              stacked: true,
            },
          },
        },
      });
    }

    if (chartInstance && stats) {
      chartInstance.data.labels = Array.from(
        { length: stats.points.length },
        (_, i) => `${i}`
      );
      chartInstance.data.datasets[0].data = stats.points.map((p) =>
        p > 0 ? p : 0
      );
      chartInstance.data.datasets[1].data = stats.points.map((p) =>
        p < 0 ? p : 0
      );
      chartInstance.update();
    }
  }
  const handleResetStats = () => {
    resetStats(stats.token_img);
  };
  let initialX;

  let initialY;
  let x = window.innerWidth / 2 - 150;
  let y = window.innerHeight / 2 - 227;
  let maxX;
  let maxY;
  const dispatch = createEventDispatcher();
  $: dragging = false;
  const handlePointDown = (e) => {
    dragging = true;
    initialX = e.clientX - x;
    initialY = e.clientY - y;
    maxX = window.innerWidth - draggableContainer.clientWidth;
    maxY = window.innerHeight - draggableContainer.clientHeight;
  };
  const handlePointerMove = (e) => {
    if (dragging) {
      x = Math.min(Math.max(e.clientX - initialX, 0), maxX);
      y = Math.min(Math.max(e.clientY - initialY, 0), maxY);
    }
  };
  onMount(() => {
    const stopDragging = () => {
      dragging = false;
    };
    if (browser) {
      document.addEventListener("pointerup", stopDragging);
    }
    return () => {
      document.removeEventListener("pointerup", stopDragging);
    };
  });
</script>

<div
  bind:this={draggableContainer}
  on:pointermove={handlePointerMove}
  class="sc-dJjYzT JLcsN dragpop"
  style="left: {x}px; top: {y}px"
>
  <div
    on:pointerdown={handlePointDown}
    class="dragpop-title {dragging ? 'grabbing' : ''}"
  >
    Live Stats
  </div>
  <button on:click={() => dispatch("close")} class="dragpop-close hover"
    ><svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Close"></use></svg
    ></button
  >
  <div class="dragpop-content">
    <div class="sc-dkPtRN jScFby scroll-view sc-eBTqsU eLzuEc">
      <div class="sc-zjkyB jElDBn">
        <div class="trigger flex-center m-item fold">
          <div class="current">Bet</div>
          <svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="sc-gsDKAQ hxODWG icon"
            ><use xlink:href="#icon_Arrow"></use></svg
          >
        </div>
      </div>
      <div class="sc-jHwEXd dQxvCn m-item">
        <div class="title flex-center">
          <span>Bet</span><button on:click={handleResetStats} class="title-btn"
            ><svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="sc-gsDKAQ hxODWG icon"
              ><use xlink:href="#icon_Clear"></use></svg
            ></button
          >
        </div>
        <div class="chart-cont">
          <div class="item-wrap wagered">
            <div class="item-label">Wagered</div>
            <div class="sc-Galmp erPQzq coin notranslate">
              <img alt="" class="coin-icon" src={stats.token_img} />
              <div class="amount">
                <span class="amount-str"
                  >{removeTrailingZeros(stats.wagered.toFixed(6))}<span
                    class="suffix">{getSuffix(stats.wagered.toFixed(6))}</span
                  ></span
                >
              </div>
            </div>
          </div>
          <div class="item-wrap profit">
            <div class="item-label">Profit</div>
            <div
              class="sc-Galmp erPQzq coin notranslate {stats.profit > 0
                ? 'cl-success'
                : 'cl-require'}"
            >
              <img alt="" class="coin-icon" src={stats.token_img} />
              <div class="amount">
                <span class="amount-str"
                  >{removeTrailingZeros(Math.abs(stats.profit).toFixed(6))}<span
                    class="suffix"
                    >{getSuffix(Math.abs(stats.profit).toFixed(6))}</span
                  ></span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="chart-wrap">
          <canvas bind:this={chartContainer}></canvas>
        </div>
        <div class="bet-wrap">
          <div class="bet-item win">
            <span class="txt ttc">win</span><span class="num cl-success"
              >{stats.wins}</span
            >
          </div>
          <div class="bet-item lose">
            <span class="txt ttc">lose</span><span class="num false"
              >{stats.loses}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .dQxvCn .chart-cont {
    display: flex;
  }
  .JLcsN {
    position: fixed;
    z-index: 999999999;
    left: 0px;
    top: 0px;
    min-width: 12.5rem;
    min-height: 12.5rem;
    border-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0.25rem 0.5rem 0px;
  }
  .JLcsN .dragpop-title {
    flex: 1 1 0%;
    height: 3.125rem;
    line-height: 3.125rem;
    font-weight: bold;
    font-size: 1rem;
    color: rgb(245, 246, 247);
    text-align: center;
    touch-action: none;
    user-select: none;
    cursor: grab;
  }
  .JLcsN .dragpop-title.grabbing {
    cursor: grabbing;
  }
  .JLcsN .dragpop-close {
    position: absolute;
    right: 0px;
    top: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3.125rem;
    height: 3.125rem;
  }
  .JLcsN .dragpop-close .icon {
    width: 0.875rem;
    height: 0.875rem;
  }
  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }
  .eLzuEc {
    font-size: 0.75rem;
    min-width: 300px;
    max-height: 70vh;
    margin-bottom: 1.125rem;
  }

  .jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
  }
  .jElDBn {
    position: relative;
  }
  .jElDBn .trigger {
    height: 2.5rem;
    -webkit-box-pack: justify;
    justify-content: space-between;
    color: rgb(245, 246, 247);
    cursor: pointer;
  }

  .eLzuEc .m-item {
    border-radius: 1.25rem;
    background: rgb(30, 32, 36);
    margin: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .jElDBn .trigger .icon {
    fill: rgba(245, 246, 247, 0.6);
    transform: rotate(0deg);
    transition: transform 200ms ease-in-out 0s;
  }

  .dQxvCn {
    width: 260px;
    height: 301.6px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    box-sizing: content-box;
    color: rgba(153, 164, 176, 0.6);
    padding-bottom: 1.25rem;
  }
  .eLzuEc .m-item > .title {
    height: 2.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-weight: 600;
    color: rgb(245, 246, 247);
  }
  .dQxvCn > .title {
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  .dQxvCn .chart-cont .item-wrap.wagered {
    flex: 1 1 0%;
  }
  .dQxvCn .chart-cont .item-wrap.wagered {
    flex: 1 1 0%;
  }
  .hover:hover svg {
    transform: rotate(-90deg);
    fill: rgb(245, 246, 247);
  }
  .erPQzq {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
  }
  .dQxvCn .chart-cont .item-wrap .coin-icon {
    width: 0.875rem;
    height: 0.875rem;
    margin-right: 0.3125rem;
  }
  .dQxvCn .chart-cont .item-wrap.wagered .amount {
    color: rgb(245, 246, 247);
  }

  .dQxvCn .chart-cont .item-wrap .amount {
    font-weight: 600;
  }
  .erPQzq .amount-str {
    width: 7em;
    display: inline-block;
  }
  .erPQzq .suffix {
    opacity: 0.5;
  }
  .dQxvCn .chart-cont .item-wrap .cl-require .amount {
    color: rgb(237, 99, 0) !important;
  }

  .dQxvCn .chart-cont .item-wrap .cl-success .amount {
    color: rgb(67, 179, 9);
  }

  .dQxvCn .chart-cont .item-wrap.profit .amount {
    color: rgb(67, 179, 9);
  }
  .dQxvCn .chart-wrap {
    position: relative;
    width: 16.25rem;
    height: 10.9375rem;
  }
  .dQxvCn .bet-wrap {
    display: flex;
  }
  .dQxvCn .bet-wrap .win {
    flex: 1 1 0%;
  }
  .dQxvCn .bet-wrap .bet-item {
    display: flex;
  }
  .ttc {
    text-transform: capitalize;
  }
  .dQxvCn .bet-wrap .win .num {
    color: rgb(67, 179, 9);
  }

  .dQxvCn .bet-wrap .num {
    margin-left: 0.75rem;
    font-weight: 600;
  }
  .dQxvCn .bet-wrap .lose .num {
    color: rgb(237, 99, 0);
  }
 
</style>
