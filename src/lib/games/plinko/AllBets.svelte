<script context="module">
  import { connect } from 'svelte-mobx';
</script>

<script>
  import { plinkoGame } from './store';
  const { autorun } = connect();
  import useFormatter from '$lib/hook/formatter';
  import PlinkoInfoDialog from './dialogs/GameInfoDialog.svelte';
  const { removeTrailingZeros, getSuffix } = useFormatter();

  $: recentBets = [];
  let game = null;
  $: {
    const _game = $plinkoGame;
    if (!game && _game) {
      game = _game;
      autorun(() => {
        recentBets = game.allBets;
      });
    }
  }
  $: dialogData = null;
</script>

{#if Boolean(recentBets.length)}
  <div class="sc-eZhRLC iycaRo">
    <table class="sc-gWXbKe iUeetX table is-hover">
      <thead
        ><tr
          ><th class="num">Bet ID</th><th class="user">Player</th><th
            class="time">Time</th
          ><th class="bet">Bet</th><th class="payout">Payout</th><th
            class="profit">Profit</th
          ></tr
        ></thead
      ><tbody>
        {#each recentBets as bet, index (`${bet.betId}_${index}`)}
          <tr
            on:click={() => {
              dialogData = { startScreen: 'Details', betID: bet.betId }
            }}
            ><td><a href="/plinko" class="hash ellipsis">{bet.betId}</a></td><td
              ><a
                class="sc-jUosCB iTDswZ user-info"
                href="/user/profile/{bet.userId}"
                ><div class="name">
                  {#if bet.hidden}
                    <span
                      style="display: inline-flex; gap: 2px;justify-content: center;"
                      class="hidden-name"
                      ><svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                        ><use xlink:href="#icon_Hidden"></use></svg
                      >Hidden</span
                    >
                  {:else}
                    {bet.name}
                  {/if}
                </div></a
              ></td
            ><td>{new Date(bet.betTime).toLocaleTimeString()}</td><td class="bet"
              ><div class="sc-Galmp erPQzq coin notranslate monospace">
                <img alt="" class="coin-icon" src={bet.currencyImage} />
                <div class="amount">
                  <span class="amount-str"
                    >{removeTrailingZeros(bet.betAmount.toFixed(4))}<span
                      class="suffix"
                      >{getSuffix(bet.betAmount.toFixed(4))}</span
                    ></span
                  >
                </div>
              </div></td
            ><td class="payout">{bet.payout.toFixed(2)}×</td><td
              class="profitline {!bet.won ? 'is-lose' : 'is-win'}"
              ><div class="sc-Galmp erPQzq coin notranslate monospace has-sign">
                <img alt="" class="coin-icon" src={bet.currencyImage} />
                <div class="amount">
                  <span class="amount-str"
                    >{bet.won ? '+' : ''}{removeTrailingZeros(
                      (bet.won
                        ? bet.betAmount * bet.payout - bet.betAmount
                        : bet.betAmount * bet.payout
                      ).toFixed(4),
                    )}<span class="suffix"
                      >{getSuffix(
                        (bet.won
                          ? bet.betAmount * bet.payout - bet.betAmount
                          : bet.betAmount * bet.payout
                        ).toFixed(4),
                      )}</span
                    ></span
                  >
                </div>
              </div></td
            ></tr
          >
        {/each}
      </tbody>
    </table>
  </div>
{:else}
  <div class="sc-epFoly etYRmD">
    <div class="sc-eCImPb biQums cuPxwd empty">
      <img
        alt="No data"
        src="https://static.nanogames.io/assets/empty.acd1f5fe.png"
      />
      <div class="msg">Oops! There is no data yet!</div>
    </div>
  </div>
{/if}

{#if Boolean(dialogData)}
  <PlinkoInfoDialog
    launchConf={dialogData}
    on:close={() => (dialogData = null)}
  />
{/if}

<style>
  .iycaRo {
    min-height: 30rem;
    padding: 0.5rem;
  }
  .iUeetX {
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0px;
  }
  .iUeetX th:first-child,
  .iUeetX td:first-child {
    text-align: left;
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
  .iUeetX th:last-child,
  .iUeetX td:last-child {
    text-align: right;
  }
  .iycaRo tr {
    cursor: pointer;
  }
  .iUeetX td:first-child {
    border-radius: 0.625rem 0px 0px 0.625rem;
  }
  .iUeetX td:last-child {
    border-radius: 0px 0.625rem 0.625rem 0px;
  }
  .iycaRo a {
    color: inherit;
  }
  .iTDswZ.user-info {
    color: rgb(245, 246, 247);
    font-weight: bold;
  }

  .iycaRo a {
    color: inherit;
  }

  .iTDswZ {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .iycaRo .coin {
    font-weight: bold;
  }

  .table .sc-Galmp {
    font-family: Monmono;
  }
  .erPQzq {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
  }
  .erPQzq .coin-icon {
    width: 1.4em;
    height: 1.4em;
    margin-right: 0.25em;
  }
  .coin .amount {
    color: rgb(245, 246, 247);
  }
  .amount-str {
    width: 7em;
    display: inline-block;
  }
  .erPQzq .suffix {
    opacity: 0.5;
  }
  .is-lose .amount {
    color: rgb(237, 99, 0);
  }
  .is-win .amount {
    color: rgb(67, 179, 9);
  }
  .iUeetX.is-hover tbody tr:hover td {
    background: rgb(45, 48, 53);
  }
</style>
