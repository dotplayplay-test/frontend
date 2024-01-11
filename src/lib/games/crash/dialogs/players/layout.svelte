<script>
  import Loader from "$lib/components/loader.svelte";
  import useFormatter from "$lib/hook/formatter";
  import Decimal from "decimal.js";
  const { removeTrailingZeros, getSuffix } = useFormatter();
  import { UseFetchData } from "$lib/hook/useFetchData";
  import { handleAuthToken } from "$lib/store/routes";
  import { error_msg } from "../../store";
  import { createEventDispatcher, onMount } from "svelte";
  const dispatch = createEventDispatcher();
  export let gameID = "";
  $: players = null;
  onMount(async () => {
    try {
      const { data } = await UseFetchData($handleAuthToken).fetch(
        `/user/crash-game/players/${gameID}`
      );
      players = data.players;
    } catch (error) {
      error_msg.set(error.message);
    }
  });
</script>

{#if Boolean(players)}
  <div class="sc-dkPtRN jScFby scroll-view sc-eZhRLC jpLpkO">
    {#if Boolean(players.length)}
      <table class="table">
        <thead
          ><tr
            ><th class="num">Bet ID</th><th class="user">Player</th><th
              class="payout">Payout</th
            ><th class="profit">Profit</th></tr
          ></thead
        ><tbody>
          {#each players as player, index (`${player.userID}_${index}`)}
            <tr
              ><td
                ><a
                  href="/"
                  on:click={(e) => {
                    e.preventDefault();
                    dispatch("gameDetail", player.betID);
                  }}
                  class="betid">{player.betID}</a
                ></td
              ><td
                ><a
                  class="sc-jUosCB iTDswZ user-info username"
                  href="/user/profile/{player.userID}"
                >
                  {#if player.hidden}
                    <span class="hidden-name"
                      ><svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                        ><use xlink:href="#icon_Hidden"></use></svg
                      >Hidden</span
                    >
                  {:else}
                    <div class="name">{player.name}</div>
                  {/if}
                </a>
              </td><td class="payout"
                >{new Decimal(player.payout).toDP(2).toNumber()}×</td
              ><td class="ellipsis {player.won ? 'is-win' : 'is-lose'}"
                ><div
                  class="sc-Galmp erPQzq coin notranslate {player.won
                    ? 'has-sign'
                    : ''}"
                >
                  <img alt="" class="coin-icon" src={player.currencyImage} />
                  <div class="amount">
                    <span class="amount-str"
                      >{player.won ? "+" : ""}{removeTrailingZeros(
                        player.amount.toFixed(8)
                      )}<span class="suffix"
                        >{getSuffix(player.amount.toFixed(8))}</span
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
{:else}
  <div style="height: 500px;">
    <Loader />
  </div>
{/if}

<style>
  .jpLpkO {
    font-size: 0.875rem;
    padding: 1.25rem 0.625rem !important;
  }

  .jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
  }
  .jpLpkO .table {
    width: 100%;
    border-collapse: collapse;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }
  .jpLpkO th:first-of-type,
  .jpLpkO td:first-of-type {
    padding-left: 1.25rem;
    text-align: left;
  }

  .jpLpkO th {
    font-weight: 500;
    color: rgba(153, 164, 176, 0.6);
    padding-bottom: 0.875rem;
  }

  .jpLpkO th,
  .jpLpkO td {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    padding: 0px 0.25rem;
  }
  .jpLpkO th:last-of-type,
  .jpLpkO td:last-of-type {
    padding-right: 1.25rem;
    text-align: right;
  }
  .jpLpkO tbody {
    color: rgba(153, 164, 176, 0.8);
  }
  .jpLpkO tbody tr {
    height: 3.5rem;
  }

  .jpLpkO tbody tr:nth-child(2n-1) td:first-child {
    border-radius: 1.25rem 0px 0px 1.25rem;
  }
  .jpLpkO tbody tr:nth-child(2n-1) td:last-child {
    border-radius: 0px 1.25rem 1.25rem 0px;
  }
  .jpLpkO tbody tr:nth-child(2n-1) td {
    background-color: rgb(23, 24, 27);
  }

  .jpLpkO th:first-of-type,
  .jpLpkO td:first-of-type {
    padding-left: 1.25rem;
    text-align: left;
  }

  .jpLpkO th,
  .jpLpkO td {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    padding: 0px 0.25rem;
  }
  .jpLpkO .betid {
    width: 5rem;
    color: inherit;
  }

  .jpLpkO .betid,
  .jpLpkO .username .name {
    width: 5.625rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }
  a {
    text-decoration: none;
  }
  .iTDswZ.user-info {
    color: rgb(245, 246, 247);
    font-weight: bold;
  }

  .iTDswZ {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .jpLpkO .username .name {
    font-weight: 600;
    color: rgb(245, 246, 247);
  }

  .jpLpkO .betid,
  .jpLpkO .username .name {
    width: 5.625rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }

  .iTDswZ .name {
    flex: 1 1 0%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .jpLpkO th:last-of-type,
  .jpLpkO td:last-of-type {
    padding-right: 1.25rem;
    text-align: right;
  }
  .jpLpkO .coin {
    font-weight: 600;
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
  .jpLpkO .is-win .amount {
    color: rgb(93, 160, 0);
  }
  .jpLpkO .is-lose .amount {
    color: rgb(237, 99, 0);
  }
  .erPQzq.has-sign .amount-str {
    width: 7.2em;
  }

  .erPQzq .amount-str {
    width: 7em;
    display: inline-block;
  }
  .erPQzq .suffix {
    opacity: 0.5;
  }
  .jpLpkO .is-lose .amount {
    color: rgb(237, 99, 0);
  }
  .iTDswZ.user-info .hidden-name {
    color: rgb(153, 164, 176);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .iTDswZ.user-info .hidden-name .icon {
    width: 1em;
    height: 1em;
    margin-right: 0.125rem;
    fill: rgb(153, 164, 176);
  }
</style>
