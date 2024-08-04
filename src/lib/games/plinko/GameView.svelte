<script context="module">
  import { connect } from 'svelte-mobx';
</script>

<script>
  const { autorun } = connect();
  import { browser } from '$app/environment';
  import { plinkoGame } from './store';
  import GameInfoDialog from './dialogs/GameInfoDialog.svelte';
  import Plinko from './logics/Plinko';
  import { onMount } from 'svelte';

  $: gameHistory = [];
  $: dialogData = null;
  $: canvasContainer = null;
  $: betsContainer = null;
  $: plinko = null;
  let game = null;
  let scrollTimeout = null;
  $: {
    const _game = $plinkoGame;
    if (!game && _game) {
      game = _game;
      autorun(() => {
        gameHistory = [...game.myBets].reverse().slice(-9);

        if (betsContainer) {
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            if (betsContainer) {
              const { scrollLeft, scrollWidth } = betsContainer;
              if (scrollLeft === 0 || scrollLeft > 350) {
                betsContainer.scrollTo(scrollWidth, 0);
              }
            }
          }, 100);
        }
      });
    }
    if (browser) {
      if (_game && !plinko) {
        _game.setPlinko(
          new Plinko(
            _game,
            _game.rows,
            _game.risk,
            _game.payouts,
            _game.settings.data.fastEnable || false,
            /*(function () {
              const t = window.innerHeight,
                e = window.innerWidth;
              return e < 612 ? 0.8 * e : Math.min(500, t - 360);
            })()*/320,320,
          ),
        );
        plinko = _game.plinko;
      }
    }
    if (game && canvasContainer && !canvasContainer.children.length && plinko) {
      canvasContainer.appendChild(_game.plinko.app.view);
    }
  }

</script>

{#if Boolean(dialogData)}
  <GameInfoDialog
    launchConf={dialogData}
    on:close={() => (dialogData = null)}
  />
{/if}
<div class="game-view">
  <div class="sc-hoHwyw fIoiVG game-recent">
    <div bind:this={betsContainer} class="recent-list-wrap">
      <div
        class="recent-list"
        style="width: 900px; transform: translate(0%, 0px);"
      >
        {#each gameHistory as game, index (`${index}_${game.betId}`)}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div
            on:click={() => {
              dialogData = {
                startScreen: 'Details',
                betID: game.betId,
              };
            }}
            class="recent-item"
            style="width: 11.1111%;"
          >
            <div class="item-wrap {game.payout >= 1 ? 'is-win' : 'is-lose'}">
              {game.odds.toFixed(2)}x
            </div>
          </div>
        {/each}

        {#if !Boolean(gameHistory.length)}
          <div class="empty-item">
            <p>Game results will be displayed here.</p>
          </div>
        {/if}
      </div>
    </div>
  </div>
  <div class="sc-hcupDf dqwCNK game-box sc-jwQYvw eRdxAb">
    <div bind:this={canvasContainer} class="sc-ljMRFG kIRDZR"></div>
    <div class="sc-gLDmcm gnjHQb"><span>House Edge 1%</span></div>
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
  .fIoiVG .empty-item {
    display: flex;
    width: 90%;
    height: 100%;
    color: var(--text-6);
    background-color: rgba(122, 128, 140, 0.15);
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 1.375rem;
  }

  .fIoiVG .empty-item > p {
    margin: 0px;
    padding: 0px 0.75rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .game-view {
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
  }
  .fIoiVG {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 2.75rem;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
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
    -webkit-box-pack: end;
    justify-content: flex-end;
  }
  .fIoiVG .recent-item {
    padding: 0px 0.25rem;
    cursor: pointer;
  }
  .fIoiVG .is-win {
    color: rgb(245, 246, 247);
    background-color: rgb(67, 179, 9);
  }
  .fIoiVG .is-lose {
    color: rgba(153, 164, 176, 0.6);
    background-color: rgba(122, 128, 140, 0.15);
  }

  .fIoiVG .item-wrap {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 0%;
    height: 100%;
    border-radius: 1.375rem;
    font-weight: bold;
  }
  .game-box {
    flex: 1 1 0%;
    background-color: rgb(23, 24, 27);
    background-size: auto 100%;
    background-position: center center;
  }

  .dqwCNK {
    position: relative;
  }
  .kIRDZR {
    text-align: center;
    padding-top: 1.875rem;
  }
  .kIRDZR canvas {
    margin: 0px auto;
  }

  .kIRDZR canvas {
    user-select: none;
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
  .dqwCNK .box-bg {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: -1px;
    width: 100%;
  }
</style>
