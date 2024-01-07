<script context="module">
  import { connect } from "svelte-mobx";
</script>

<script>
  const { autorun } = connect();
  import useFormatter from "./hooks/formatter";
  const { removeTrailingZeros, getSuffix } = useFormatter();
  import CrashInfoDialog from "./dialogs/GameInfoDialog.svelte";
  import { crashGame } from "./store";
  $: myBets = [];
  $: {
    const game = $crashGame;
    if (game) {
      autorun(() => {
        myBets = game.myBets;

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
<div class="sc-eZhRLC iycaRo">
  <table class="sc-gWXbKe iUeetX table is-hover">
    <thead
      ><tr
        ><th class="num">Bet ID</th><th class="time">Time</th><th class="bet"
          >Bet</th
        ><th class="payout">Payout</th><th class="profit">Profit</th></tr
      ></thead
    ><tbody>
      {#each myBets as bet, index (`${bet.game_id}_${index}_${bet.betID}`)}
        <tr
          on:click={() => {
            dialogData = {
              startScreen: "Details",
              betID: bet.betID,
            };
          }}
          ><td
            ><a
              href="/"
              on:click={(e) => {
                e.preventDefault();
              }}
              class="hash ellipsis">{bet.betID}</a
            ></td
          ><td>{new Date(bet.betTime).toTimeString()}</td><td class="bet"
            ><div class="sc-Galmp erPQzq coin notranslate monospace">
              <img alt="" class="coin-icon" src={bet.currencyImage} />
              <div class="amount">
                <span class="amount-str"
                  >{removeTrailingZeros(bet.betAmount.toFixed(8))}
                  <span class="suffix">{getSuffix(bet.betAmount.toFixed(8))}</span></span
                >
              </div>
            </div></td
          ><td class="payout">{bet.odds}x</td><td
            class="profitline {bet.won ? 'is-win' : 'is-lose'}"
            ><div class="sc-Galmp erPQzq coin notranslate monospace has-sign">
              <img alt="" class="coin-icon" src={bet.currencyImage} />
              <div class="amount">
                <span class="amount-str"
                  >{bet.won ? "+" : ""}{removeTrailingZeros(
                    bet.won ? bet.profitAmount.toFixed(8) : bet.betAmount.toFixed(8)
                  )}<span class="suffix"
                    >{getSuffix(
                      bet.won ? bet.profitAmount.toFixed(8) : bet.betAmount.toFixed(8)
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
