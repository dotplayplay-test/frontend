<script>
  import { handleAuthToken } from "$lib/store/routes";
  import { handleisLoggin } from "$lib/store/profile";
  import Loader from "$lib/components/loader.svelte";
  import { UseFetchData } from "$lib/hook/useFetchData";
  import { onMount, createEventDispatcher } from "svelte";
  $: loading = true;
  $: tickets = [];
  onMount(async () => {
    if ($handleisLoggin) {
      try {
        const { data, error } =
          await UseFetchData($handleAuthToken).fetch("/lottery/winnings");
        tickets = data.tickets;
      } catch (error) {
        console.log(error);
      } finally {
        loading = false;
      }
    } else loading = false;
  });
</script>

{#if !loading}
  {#if Boolean(tickets.length)}
    <table class="sc-gWXbKe iUeetX table">
      <thead
        ><tr>
          <th>Game ID</th>
          <th class="hnums">Numbers</th><th>Matches</th>
          <th>Prize</th>
        </tr></thead
      ><tbody>
        {#each tickets as ticket (ticket.ticket_id)}
          <tr>
            <td>{ticket.game_id}</td>
            <td
              ><div class="nums-wrap">
                <div class="nums-inner">
                  <div class="sc-iseIHH gHuzXM draw">
                    {#each ticket.numbers.slice(0,5) as number, index (`${number}_${index}`)}
                      <div
                        class="ball {ticket.matches.includes(number)
                          ? 'active'
                          : ''}"
                      >
                        <div>{number}</div>
                      </div>
                    {/each}
                    <div
                      class="ball jackpot-ball {ticket.jackpotNumber ===
                      ticket.numbers[5]
                        ? 'active'
                        : ''}"
                    >
                      <div>{ticket.numbers[5]}</div>
                    </div>
                  </div>
                  <p class="quantity">
                    x {ticket.amount}
                  </p>
                </div>
              </div></td
            ><td class="res">{ticket.matched}</td><td class="el"
              ><span class="green-word">$ {ticket.prize}</span></td
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
{:else}
  <div style="height: 200px;">
    <Loader />
  </div>
{/if}

<style>
  .iUeetX {
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0px;
  }
  .iUeetX .nums-inner {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }
  @media screen and (min-width: 800px) {
    .iUeetX.table thead tr th:first-child,
    .iUeetX.table tbody tr td:first-child {
      width: 10%;
    }
  }

  .iUeetX th:first-child,
  .iUeetX td:first-child {
    text-align: left;
  }

  .bcoOmv table thead tr th {
    color: var(--text-color);
    white-space: nowrap;
    padding-bottom: 0.5625rem;
  }

  .iUeetX th,
  .iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
  }

  .iUeetX th {
    font-weight: normal;
color: var(--text-6);  }
  .bcoOmv table thead tr th {
    color: var(--original-text);
    white-space: nowrap;
    padding-bottom: 0.5625rem;
  }

  .iUeetX th,
  .iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
  }

  .iUeetX th {
    font-weight: normal;
color: var(--text-6);  }

  .iUeetX td:first-child {
    border-radius: 0.625rem 0px 0px 0.625rem;
  }

  .iUeetX th:first-child,
  .iUeetX td:first-child {
    text-align: left;
  }

  .bcoOmv table tbody td {
    color: rgb(255, 255, 255);
    padding: 0.5625rem 0.75rem;
  }

  .iUeetX table td {
    width: 25%;
  }

  .iUeetX td {
    border: 1px solid transparent;
    color: var(--text-4);
  }

  .iUeetX th,
  .iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
  }
  .gHuzXM {
    width: 14.6875rem;
    height: 2.6875rem;
    background-image: url(https://static.nanogames.io/assets/ball_bg.10eb599f.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 0px 0.25rem;
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .gHuzXM .ball.active {
    opacity: 1;
  }
  .gHuzXM .ball {
    width: 1.75rem;
    height: 1.75rem;
    vertical-align: top;
    margin: 0px 0.25rem;
    border-radius: 50%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 0.75rem;
    background-image: url(https://static.nanogames.io/assets/ball.161fa8af.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: rgb(0, 0, 0);
    opacity: 0.6;
    font-weight: 800;
    flex: 0 0 auto;
  }
  .gHuzXM .jackpot-ball {
    flex: 0 0 auto;
    margin-left: 0.875rem;
    background-image: url(https://static.nanogames.io/assets/jackpot_ball.23b29c5d.png);
  }

  .gHuzXM .ball {
    width: 1.75rem;
    height: 1.75rem;
    vertical-align: top;
    margin: 0px 0.25rem;
    border-radius: 50%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 0.75rem;
    background-image: url(https://static.nanogames.io/assets/ball.161fa8af.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: rgb(0, 0, 0);
    opacity: 0.6;
    font-weight: 800;
    flex: 0 0 auto;
  }
  .iUeetX .nums-wrap .quantity {
    flex: 0 0 auto;
    margin-left: 0.5rem;
    color: rgb(255, 255, 255);
    width: 1.25rem;
    white-space: nowrap;
  }
  @media screen and (min-width: 800px) {
    .iUeetX.table thead tr th:nth-child(3),
    .iUeetX.table tbody tr td:nth-child(3) {
      width: 24%;
    }
  }

  .bcoOmv table tbody td {
    color: rgb(255, 255, 255);
    padding: 0.5625rem 0.75rem;
  }

  .iUeetX.table td {
    width: 25%;
  }

  .iUeetX td {
    border: 1px solid transparent;
    color: var(--text-4);
  }

  .iUeetX th,
  .iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
  }
  @media screen and (min-width: 800px) {
    .iUeetX.table thead tr th:nth-child(4),
    .iUeetX.table tbody tr td:nth-child(4) {
      width: 12%;
    }
  }

  .iUeetX td:last-child {
    border-radius: 0px 0.625rem 0.625rem 0px;
  }

  .iUeetX th:last-child,
  .iUeetX td:last-child {
    text-align: right;
  }

  .bcoOmv table tbody td {
    color: rgb(255, 255, 255);
    padding: 0.5625rem 0.75rem;
  }

  .iUeetX table td {
    width: 25%;
  }

  .iUeetX td {
    border: 1px solid transparent;
    color: var(--text-4);
  }

  .iUeetX th,
  .iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
  }
  .iUeetX.table tbody td .green-word {
    color: rgb(67, 179, 9);
  }
</style>
