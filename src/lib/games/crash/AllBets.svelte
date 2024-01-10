<script context="module">
  import { connect } from "svelte-mobx";
</script>

<script>
  import { fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import { crashGame } from "./store";
  import Decimal from "decimal.js";
  import CrashInfoDialog from "./dialogs/GameInfoDialog.svelte";
  import { onMount } from "svelte";
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

  let canvasRef = null;
  let chart = null;
  function createChart(ctx) {
    const gradient = ctx.createLinearGradient(140, 50, 140, 210);
    gradient.addColorStop(0, "#40e248");
    gradient.addColorStop(0.5, "#c8963c");
    gradient.addColorStop(1, "#ee2b44");

    return new Chart(ctx, {
      type: "line",
      data: {
        labels: [0],
        datasets: [
          {
            data: [0],
            borderColor: gradient,
            fill: false,
            borderWidth: 3,
            backgroundColor: gradient,
            pointBorderColor: gradient,
            pointBackgroundColor: gradient,
            pointBorderWidth: 1,
            pointRadius: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        legend: { display: false },
        elements: { line: { tension: 1e-6 } },
        animation: {
          easing: "linear",
          onComplete: (animation) => {
            const chart = animation.chart;
            const ctx = chart.ctx;
            const meta = chart.getDatasetMeta(0).data;
            const config = chart.config.data.datasets[0].data;

            ctx.font = "12px Arial";
            ctx.textAlign = "center";
            ctx.textBaseline = "bottom";

            meta.forEach((item, index) => {
              let x = item.x;
              let y = item.y;

              ctx.fillStyle =
                config[index].value >= threshold ? "#5da000" : "#ed6300";

              // Draw custom shape
              drawCustomShape(ctx, x - 30, y - 10, 60, 20, 10);

              ctx.fill();
              ctx.fillStyle = "#fff";
              ctx.fillText(`${config[index].value.toFixed(2)}x`, x, y + 7);
            });
          },
        },
        layout: { padding: { top: 20 } },
        tooltips: { enabled: false },
        scales: {
          x: {
            gridLines: { color: darkenColor("#31343c", "#cccfd9", 0.6) },
            ticks: { fontColor: darkenColor("#99a4b0", "#5f6975", 0.8) },
          },
          y: {
            gridLines: { color: darkenColor("#31343c", "#cccfd9", 0.6) },
            ticks: { fontColor: darkenColor("#99a4b0", "#5f6975", 0.8) },
          },
        },
      },
    });
  }

  function drawCustomShape(ctx, x, y, width, height, radius) {
    if (width < 2 * radius) radius = width / 2;
    if (height < 2 * radius) radius = height / 2;

    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
  }

  function darkenColor(lightColor, darkColor, amount) {
    return darkColor;
  }

  function pageHistory(_page, history) {
    const size = history.length;
    const offset = Math.min(size, 20 * (_page - 1));
    const end = offset + 20;
    return [...history].reverse().slice(offset, end);
  }

  const { autorun } = connect();
  $: threshold = 2;
  $: currentTab = 1;
  $: rows = [];
  $: history = [];
  $: currentPage = 1;
  $: pageHistoryList = [];
  $: pageBoundaries = [];
  $: totalPages = 1;

  function updateChart() {
    if (!canvasRef) return;
    if (!chart) {
      const ctx = canvasRef.getContext("2d");
      chart = createChart(ctx);
    }
    chart.data.labels = ["", `[1, ${threshold})`, `[${threshold}, ∞)`, ""];
    chart.data.datasets = [
      {
        data: pageHistoryList.map((item) => ({
          x: item.odds >= threshold ? `[${threshold}, ∞)` : `[1, ${threshold})`,
          y: item.gameId,
          value: item.odds,
        })),
        borderWidth: 2,
        borderColor: "#5da000",
        pointBorderColor: "#5da000",
        backgroundColor: "transparent",
        pointRadius: 2,
      },
    ];
    chart.update();
  }
  let game = null;
  const updatePageList = () => {
    pageHistoryList = pageHistory(currentPage, history);
    totalPages = Math.ceil(history.length / 20);
    pageBoundaries = (function calculateBoundaries(current, total, bound) {
      let boundaries = [current];
      for (let i = 1; i < bound + 1; i++) {
        if (current - i >= 1) boundaries.unshift(current - i);
        if (current + i <= total) boundaries.push(current + i);
      }
      return boundaries;
    })(currentPage, totalPages, 2);
  };
  $: {
    if (currentTab === 1) {
      if (chart) chart.destroy();
      chart = null;
    }
    const _game = $crashGame;
    if (!game && _game) {
      game = _game;
      history = game.history;
      autorun(() => {
        history = game.history;
        updatePageList();
        handleAnaylize();
        updateChart();
      });
    }
    if (canvasRef) {
      updateChart();
    }
  }

  onMount(() => {
    updateChart();
    handleAnaylize();
  });

  let onChangePage = (page) => {
    currentPage = page;
    updatePageList();
    if (currentTab === 2) {
      updateChart();
    }
  };

  const handleAnaylize = () => {
    let analysisData = [
      {
        label: `[1, ${threshold})`,
        continuityCounts: 0,
        continuityMax: 0,
        counts: 0,
      },
      {
        label: `[${threshold}, ∞)`,
        continuityCounts: 0,
        continuityMax: 0,
        counts: 0,
      },
    ];
    let previousOdds = -1;

    history.forEach((entry) => {
      const category = entry.odds < threshold ? 0 : 1;
      analysisData.forEach((data, index) => {
        const isMatchingCategory = category === index;
        const isContinuation = isMatchingCategory && category === previousOdds;
        if (isMatchingCategory) {
          data.counts++;
          if (isContinuation) {
            data.continuityCounts++;
            data.continuityMax = Math.max(
              data.continuityCounts,
              data.continuityMax
            );
          } else {
            data.continuityCounts = 0;
          }
        }
      });
      previousOdds = category;
    });

    rows = analysisData.map((data) => ({
      label: data.label,
      percentage: ((100 * data.counts) / history.length).toFixed(2) + "%",
      counts: data.counts,
      continuityMax: data.continuityMax,
    }));
  };
  $: dialogData = null;
  $: isFocused = false;
</script>

{#if Boolean(dialogData)}
  <CrashInfoDialog
    launchConf={dialogData}
    on:close={() => (dialogData = null)}
  />
{/if}
<div class="sc-ljMRFG ewHNmT">
  <div class="sc-iwjdpV ikWSlH radio history-tab">
    <button
      on:click={() => (currentTab = 1)}
      class={currentTab === 1 ? "is-active" : ""}
      ><svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="sc-gsDKAQ hxODWG icon"
        ><use xlink:href="#icon_Statistics"></use></svg
      ></button
    ><button
      on:click={() => (currentTab = 2)}
      class={currentTab === 2 ? "is-active" : ""}
      ><svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Data"></use></svg
      ></button
    >
  </div>
  {#if currentTab === 1}
    <div
      in:fly={{ y: -80, duration: 150, easing: cubicOut, opacity: 0.9 }}
      out:fly={{ y: -80, duration: 150, easing: cubicOut, opacity: 0.9 }}
      class="sc-gFSQbh iovqrr"
    >
      <table class="sc-gWXbKe iUeetX table is-hover">
        <thead
          ><tr
            ><th style="width: 24%;">Game ID</th><th style="width: 20%;"
              >Result</th
            ><th>Hash</th></tr
          ></thead
        ><tbody>
          {#each pageHistoryList as game (game.gameId)}
            <tr
              on:click={() => {
                dialogData = {
                  startScreen: "All Players",
                  gameID: game.gameId,
                };
              }}
              ><td
                ><div class="game-link">
                  <div
                    class="dot type-{game.odds >= 10
                      ? 3
                      : game.odds >= 2
                        ? 2
                        : 1}"
                  ></div>
                  {game.gameId}
                </div></td
              ><td>{game.odds}x</td><td
                ><div class="flex-center">
                  <input type="text" readonly="" value={game.hash} /><a
                    target="_blank"
                    href="https://nanogamesio.github.io/verify/crash.html?hash={game.hash}"
                    >Verify</a
                  >
                </div></td
              ></tr
            >
          {/each}</tbody
        >
      </table>
      <div class="sc-cCcXHH dXTFyi pagination">
        <div class="sc-cidDSM dmcoXZ">Total {totalPages}</div>
        <div class="sc-jcFjpl sc-iAKWXU dORpLZ bnBwbM pages-wrap">
          {#each pageBoundaries as page}
            <button
              class:active={page === currentPage}
              on:click={() => onChangePage(page)}
              disabled={page === currentPage}>{page}</button
            >
          {/each}
        </div>
        <div class="sc-jcFjpl sc-iAKWXU dORpLZ bnBwbM page-pn">
          <button
            disabled={currentPage === 1}
            class:disabled={currentPage === 1}
            on:click={() => onChangePage(currentPage - 1)}
            class="previous-btn"
            ><svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="sc-gsDKAQ hxODWG icon prev"
              ><use xlink:href="#icon_Arrow"></use></svg
            ></button
          ><button
            disabled={currentPage >= totalPages}
            class:disabled={currentPage >= totalPages}
            on:click={() => onChangePage(currentPage + 1)}
            class="next-page"
            ><svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="sc-gsDKAQ hxODWG icon next"
              ><use xlink:href="#icon_Arrow"></use></svg
            ></button
          >
        </div>
      </div>
    </div>
  {:else}
    <div
      in:fly={{ y: -130, duration: 150, easing: cubicOut, opacity: 0.9 }}
      out:fly={{ y: -80, duration: 150, easing: cubicOut, opacity: 0.9 }}
      class="sc-jwQYvw kJYcMw"
    >
      <div class="fix-layer">
        <div>last 2000 issue, payout &lt;</div>
        <div class="sc-ezbkAF kDuLvp input">
          <div class="input-control {isFocused ? "is-focus" : ""}">
            <input
              on:blur={() => isFocused = false}
              on:focus={() => isFocused = true}
              type="number"
              on:change={(e) => (threshold = Decimal(e.currentTarget.value))}
              value={threshold}
            />
          </div>
        </div>
        <button
          on:click={handleAnaylize}
          class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal"
          ><div class="button-inner">Analysis</div></button
        >
      </div>
      <table>
        <tbody
          ><tr
            ><td>multiple</td><td>Chance</td><td>Number of occurrences</td><td
              >Longest Combo</td
            ></tr
          >
          {#each rows as row}
            <tr>
              <td>{row.label}</td>
              <td>{row.percentage}</td>
              <td>{row.counts}</td>
              <td>{row.continuityMax}</td>
            </tr>
          {/each}</tbody
        >
      </table>
      <div class="chart-wrap">
        <div class="chartjs-size-monitor">
          <div class="chartjs-size-monitor-expand"><div class=""></div></div>
          <div class="chartjs-size-monitor-shrink"><div class=""></div></div>
        </div>
        <canvas
          bind:this={canvasRef}
          width="800"
          height="800"
          style="display: block; width: 800px; height: 800px;"
          class="chartjs-render-monitor"
        ></canvas>
      </div>
      <div class="sc-cCcXHH dXTFyi pagination">
        <div class="sc-cidDSM dmcoXZ">Total {totalPages}</div>
        <div class="sc-jcFjpl sc-iAKWXU dORpLZ bnBwbM pages-wrap">
          {#each pageBoundaries as page}
            <button
              class:active={page === currentPage}
              on:click={() => onChangePage(page)}
              disabled={page === currentPage}>{page}</button
            >
          {/each}
        </div>
        <div class="sc-jcFjpl sc-iAKWXU dORpLZ bnBwbM page-pn">
          <button
            disabled={currentPage === 1}
            class:disabled={currentPage === 1}
            on:click={() => onChangePage(currentPage - 1)}
            class="previous-btn"
            ><svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="sc-gsDKAQ hxODWG icon prev"
              ><use xlink:href="#icon_Arrow"></use></svg
            ></button
          ><button
            disabled={currentPage >= totalPages}
            class:disabled={currentPage >= totalPages}
            on:click={() => onChangePage(currentPage + 1)}
            class="next-page"
            ><svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="sc-gsDKAQ hxODWG icon next"
              ><use xlink:href="#icon_Arrow"></use></svg
            ></button
          >
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .ewHNmT {
    position: relative;
    overflow: hidden;
  }
  .ewHNmT .history-tab {
    height: 3.5rem;
    border-bottom: 1px solid rgba(49, 52, 60, 0.6);
    padding: 0px 1.25rem;
  }

  .ikWSlH {
    display: flex;
    opacity: 1;
  }
  .ewHNmT .history-tab button {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
  }
  .ewHNmT .history-tab .is-active .icon {
    fill: rgb(67, 179, 9);
  }

  .ewHNmT .history-tab .icon {
    width: 1.25rem;
    height: 1.25rem;
  }
  .iovqrr {
    max-width: 50rem;
    margin: 0px auto 1.25rem;
    padding: 0.5rem;
  }
  .iovqrr table {
    margin: 1.25rem auto;
  }
  .iUeetX {
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0px;
  }
  .iUeetX th:last-child,
  .iUeetX td:last-child {
    text-align: right;
  }

  .iUeetX th,
  .iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
  }

  .iUeetX th {
    font-weight: normal;
    color: rgba(153, 164, 176, 0.6);
  }
  .iUeetX.is-hover tbody tr:hover td {
    background: rgb(45, 48, 53);
  }
  .iUeetX.is-hover tbody tr:hover td {
    background: rgb(45, 48, 53);
  }

  .iUeetX td:first-child {
    border-radius: 0.625rem 0px 0px 0.625rem;
  }

  .iUeetX th:first-child,
  .iUeetX td:first-child {
    text-align: left;
  }
  .kJYcMw td {
    border: 1px solid rgba(49, 52, 60, 0.6);
    padding: 0.625rem;
    text-align: center;
  }

  .kJYcMw table {
    margin: 1.25rem 0px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }
  .iUeetX td {
    border: 1px solid transparent;
    color: rgb(153, 164, 176);
  }
  .iovqrr .game-link {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
  }
  .iovqrr .dot.type-3 {
    background-color: rgb(246, 199, 34);
  }
  .iovqrr .dot.type-2 {
    background-color: rgb(67, 179, 9);
  }

  .iovqrr .dot.type-1 {
    background-color: rgb(237, 99, 0);
  }

  .iovqrr .dot {
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 50%;
    margin-right: 0.375rem;
  }
  .iUeetX td:last-child {
    border-radius: 0px 0.625rem 0.625rem 0px;
  }

  .iUeetX th:last-child,
  .iUeetX td:last-child {
    text-align: right;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iovqrr input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-right: 0.3125rem;
    flex: 1 1 0%;
  }
  .dXTFyi {
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
  }
  .dmcoXZ {
    height: 2rem;
    line-height: 2rem;
    margin: 0px 0.5rem 0px 24px;
    font-size: 0.75rem;
    color: rgba(153, 164, 176, 0.6);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .dORpLZ.pages-wrap {
    background-color: rgba(24, 25, 29, 0.6);
    padding: 0px 1.125rem;
  }

  .dORpLZ {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 2rem;
    border-radius: 2rem;
    overflow: hidden;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
  }
  .ewHNmT .pagination .pages-wrap button {
    background-color: transparent;
  }

  .dORpLZ.pages-wrap .active {
    color: rgb(245, 246, 247);
    font-weight: 600;
  }

  .ewHNmT .pagination button {
    background-color: rgba(45, 48, 53, 0.6);
  }

  .dORpLZ.pages-wrap button {
    font-size: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.75rem;
    margin: 0px;
  }
  .ewHNmT .pagination .pages-wrap button {
    background-color: transparent;
  }

  .ewHNmT .pagination button {
    background-color: rgba(45, 48, 53, 0.6);
  }

  .dORpLZ.pages-wrap button {
    font-size: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.75rem;
    margin: 0px;
  }
  .ewHNmT .pagination .pages-wrap button {
    background-color: transparent;
  }

  .ewHNmT .pagination button {
    background-color: rgba(45, 48, 53, 0.6);
  }

  .dORpLZ.pages-wrap button {
    font-size: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.75rem;
    margin: 0px;
  }
  .dORpLZ.page-pn {
    margin-left: 0.75rem;
  }

  .dORpLZ {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 2rem;
    border-radius: 2rem;
    overflow: hidden;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
  }
  .ewHNmT .pagination button.disabled {
    background-color: rgba(45, 48, 53, 0.4);
  }

  .bnBwbM.page-pn button.disabled {
    background-color: rgb(30, 32, 36);
  }

  .dORpLZ.page-pn .previous-btn {
    margin: 0px 1px 0px 0px;
  }

  .dORpLZ.page-pn .disabled {
    cursor: not-allowed;
  }

  .ewHNmT .pagination button {
    background-color: rgba(45, 48, 53, 0.6);
  }

  .bnBwbM.page-pn button {
    background-color: rgb(30, 32, 36);
  }

  .dORpLZ.page-pn button {
    width: 2.125rem;
    height: 2rem;
    margin: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .dORpLZ.page-pn .previous-btn .icon {
    transform: rotate(180deg);
  }

  .bnBwbM.page-pn button.disabled svg {
    fill: rgba(153, 164, 176, 0.2);
  }

  .bnBwbM.page-pn button svg {
    fill: rgba(153, 164, 176, 0.6);
  }

  .dORpLZ .icon {
    width: 1rem;
    height: 1rem;
  }

  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }

  /* Graph History css  */
  .kJYcMw {
    max-width: 50rem;
    margin: 0px auto 1.25rem;
  }
  .kJYcMw .fix-layer {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: absolute;
    top: 0.5625rem;
    right: 1.25rem;
  }
  .kJYcMw .fix-layer .input {
    margin: 0px 0.3125rem;
    width: 3.75rem;
  }

  .kDuLvp {
    margin-top: 1rem;
  }
  .kJYcMw .fix-layer .input-control {
    height: 2.375rem;
    padding: 0px 0.625rem;
    background-color: rgba(49, 52, 60, 0.3);
  }


  .kDuLvp .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 1.25rem;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    height: 3.5rem;
    padding: 0px 1.25rem;
    opacity: 1;
  }
  .kJYcMw .fix-layer input {
    text-align: center;
  }

  .kDuLvp .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
  }
  .input-control.is-focus {
    border-color: rgb(67, 179, 9);
  }
  .kJYcMw .fix-layer .button {
    width: auto;
    padding: 0px 1.25rem;
    height: 2.375rem;
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
  .kJYcMw table {
    margin: 1.25rem 0px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }
  .kJYcMw .chart-wrap {
    margin: 1.25rem auto;
    height: 50rem;
    pointer-events: none;
  }
  .chartjs-size-monitor,
  .chartjs-size-monitor-expand,
  .chartjs-size-monitor-shrink {
    position: absolute;
    direction: ltr;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    pointer-events: none;
    visibility: hidden;
    z-index: -1;
  }
  .chartjs-size-monitor-expand > div {
    position: absolute;
    width: 1000000px;
    height: 1000000px;
    left: 0;
    top: 0;
  }
  .chartjs-render-monitor {
    animation: chartjs-render-animation 0.001s;
  }

  canvas {
    user-select: none;
  }
</style>
