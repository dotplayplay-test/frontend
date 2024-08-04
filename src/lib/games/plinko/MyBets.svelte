<script context="module">
  import { connect } from "svelte-mobx";
</script>

<script>
  const { autorun } = connect();
  import useFormatter from "$lib/hook/formatter";
  const { removeTrailingZeros, getSuffix } = useFormatter();
  import PlinkoInfoDialog from "./dialogs/GameInfoDialog.svelte";
  import { plinkoGame } from "./store";
  $: myBets = [];
  let game = null;
  $: {
    const _game = $plinkoGame;
    if (!game && _game) {
      game = _game;
      autorun(() => {
        myBets = game.myBets;
      });
    }
  }

  $: dialogData = null;
</script>

{#if Boolean(dialogData)}
  <PlinkoInfoDialog
    launchConf={dialogData}
    on:close={() => (dialogData = null)}
  />
{/if}
<div class="sc-eZhRLC iycaRo">
  {#if Boolean(myBets.length)}
    <table class="sc-gWXbKe iUeetX table is-hover">
      <thead
        ><tr
          ><th class="num">Bet ID</th><th class="time">Time</th><th class="bet"
            >Bet</th
          ><th class="payout">Payout</th><th class="profit">Profit</th></tr
        ></thead
      ><tbody>
        {#each myBets as bet, index (`${index}_${bet.betId}`)}
          <tr
            on:click={() => {
              dialogData = {
                startScreen: "Details",
                betID: bet.betId,
              };
            }}
            ><td
              ><a
                href="/"
                on:click={(e) => {
                  e.preventDefault();
                }}
                class="hash ellipsis">{bet.betId}</a
              ></td
            ><td>{new Date(bet.betTime).toLocaleTimeString()}</td><td
              class="bet"
              ><div class="sc-Galmp erPQzq coin notranslate monospace">
                <img alt="" class="coin-icon" src={bet.currencyImage} />
                <div class="amount">
                  <span class="amount-str"
                    >{removeTrailingZeros(bet.betAmount.toFixed(4))}
                    <span style="margin-left: -3px;" class="suffix"
                      >{getSuffix(bet.betAmount.toFixed(4))}</span
                    ></span
                  >
                </div>
              </div></td
            ><td class="payout"
              >{bet.odds.toFixed(2)}x</td
            ><td class="profitline {bet.won ? 'is-win' : 'is-lose'}"
              ><div class="sc-Galmp erPQzq coin notranslate monospace has-sign">
                <img alt="" class="coin-icon" src={bet.currencyImage} />
                <div class="amount">
                  <span class="amount-str"
                    >{bet.won ? "+" : ""}{removeTrailingZeros(
                      (bet.won
                          ? bet.betAmount * bet.payout - bet.betAmount
                          : bet.betAmount * bet.payout
                        ).toFixed(4)
                    )}<span class="suffix"
                      >{getSuffix(
                        (bet.won
                          ? bet.betAmount * bet.payout - bet.betAmount
                          : bet.betAmount * bet.payout
                        ).toFixed(4)
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
</div>

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
  .iycaRo tr {
    cursor: pointer;
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
  .iUeetX td:first-child {
    border-radius: 0.625rem 0px 0px 0.625rem;
  }
  .iUeetX td {
    border: 1px solid transparent;
    color: rgb(153, 164, 176);
  }
  .iUeetX.is-hover tbody tr:hover td {
    background: rgb(45, 48, 53);
  }
  .iycaRo a {
    color: inherit;
  }

  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
  .iycaRo .coin .amount {
    color: rgb(245, 246, 247);
  }
  .erPQzq .amount-str {
    width: 7em;
    display: inline-block;
  }
  .erPQzq .suffix {
    opacity: 0.5;
  }
  .iUeetX td:last-child {
    border-radius: 0px 0.625rem 0.625rem 0px;
  }
  .iycaRo .is-win .amount {
    color: rgb(67, 179, 9);
  }
  .iycaRo .is-lose .amount {
    color: rgb(237, 99, 0);
  }
</style>
