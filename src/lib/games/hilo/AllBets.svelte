<script>
  import { initializing, recentBets } from "$lib/games/hilo/store";
  import Loader from "$lib/components/loader.svelte";
  import HiloDialog from "./dialogs/HiloDialog.svelte";
  import useFormatter from "$lib/hook/formatter";
  const { removeTrailingZeros, getSuffix } = useFormatter();
  $: hiloDialogData = null;
</script>

{#if $initializing}
  <div style="height: 400px;"><Loader /></div>
{:else if Boolean($recentBets.length)}
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
        {#each $recentBets as bet, index (`${bet.bet_id}_${index}`)}
          <tr on:click={() => (hiloDialogData = { tab: 1, betID: bet.bet_id })}
            ><td><a href="/hilo" class="hash ellipsis">{bet.bet_id}</a></td><td
              ><a
                class="sc-jUosCB iTDswZ user-info"
                href="/user/profile/{bet.user_id}"
                ><div class="name">
                  {#if bet.user.hidden}
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
                    {bet.user.username}
                  {/if}
                </div></a
              ></td
            ><td>{new Date(bet.time).toLocaleTimeString()}</td><td class="bet"
              ><div class="sc-Galmp erPQzq coin notranslate monospace">
                <img alt="" class="coin-icon" src={bet.token_img} />
                <div class="amount">
                  <span class="amount-str"
                    >{removeTrailingZeros(bet.bet_amount.toFixed(6))}<span
                      class="suffix"
                      >{getSuffix(bet.bet_amount.toFixed(6))}</span
                    ></span
                  >
                </div>
              </div></td
            ><td class="payout">{bet.payout.toFixed(2)}×</td><td
              class="profitline {!bet.won ? 'is-lose' : 'is-win'}"
              ><div class="sc-Galmp erPQzq coin notranslate monospace has-sign">
                <img alt="" class="coin-icon" src={bet.token_img} />
                <div class="amount">
                  <span class="amount-str"
                    >{bet.won ? "+" : ""}{removeTrailingZeros(
                      (bet.won
                        ? bet.bet_amount * bet.payout - bet.bet_amount
                        : bet.bet_amount
                      ).toFixed(6)
                    )}<span class="suffix"
                      >{getSuffix(
                        (bet.won
                          ? bet.bet_amount * bet.payout - bet.bet_amount
                          : bet.bet_amount
                        ).toFixed(6)
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

{#if Boolean(hiloDialogData)}
  <HiloDialog launchConf={hiloDialogData} on:close={() => hiloDialogData = null} />
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
  .iycaRo .is-lose .amount {
    color: rgb(237, 99, 0);
  }
  .iycaRo .is-win .amount {
    color: rgb(67, 179, 9);
  }
  .iUeetX.is-hover tbody tr:hover td {
    background: rgb(45, 48, 53);
  }
</style>
