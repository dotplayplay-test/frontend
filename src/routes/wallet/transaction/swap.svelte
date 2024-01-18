<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import { handleAuthToken } from "$lib/store/routes";
  import { ServerURl } from "$lib/backendUrl";
  import { activeRouteAsset } from "./store";

  let swaps = [];
  const URL = ServerURl();
  let isLoading = false;

  function formatTime(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }

  $: $activeRouteAsset, fetchData($activeRouteAsset?.tabName);

  const fetchData = async (asset) => {
    try {
      isLoading = true;
      let url = `${URL}/api/transaction-history/swap`;

      if (asset && asset.length < 5) {
        url = `${URL}/api/transaction-history/swap?asset=${asset}`;
      }

      const response = await axios.get(url, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${$handleAuthToken}`,
        },
      });

      isLoading = false;

      swaps = response.data;
    } catch (err) {
      isLoading = false;
      console.log(err);
    }
  };

  onMount(async () => {
    await fetchData();
  });
</script>

<div>
  {#if swaps.length > 0}
    <div class="transaction-list">
      <table class="ui-table">
        <thead>
          <th>From</th>
          <th>To</th>
          <th>Time</th>
        </thead>
        <tbody>
          {#each swaps as item}
            <tr>
              <td class="cl-light align-center">
                <div class="icon-box">
                  <img
                    class="icon"
                    src={item.senderCoinIcon}
                    alt="Sender Coin Icon"
                  />
                  <span>
                    {parseFloat(item.amountSwapped)}
                    {item.senderCoin}
                  </span>
                </div>
              </td>
              <td class="amount-change">
                <div class="icon-box">
                  <img
                    class="icon"
                    src={item.receiverCoinIcon}
                    alt="Receiver coin icon"
                  />
                  <span>
                    {Math.abs(
                      parseFloat(item.receiverCoin_new_balance) -
                        parseFloat(item.receiverCoin_previous_balance)
                    )}
                    {item.receiverCoin}
                  </span>
                </div>
              </td>
              <td
                >{new Date(item.createdAt).getFullYear()}/{new Date(
                  item.createdAt
                ).getMonth()}/{new Date(item.createdAt).getDate()}
                {formatTime(item.createdAt)}</td
              >
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {:else}
    <div class="transaction-list">
      <div class="sc-lhMiDA">
        <div class="sc-eCImPb cuPxwd full-abs">
          <img
            src="https://static.nanogames.io/assets/empty.acd1f5fe.png"
            alt=""
          />
          <div class="msg">No swaps yet!</div>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .transaction-list {
    width: 100%;
    background-color: var(--1n7ksai);
    border-radius: var(--border-radius);
  }
  .ui-table {
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0;
  }
  .ui-table th:first-child,
  .ui-table td:first-child {
    text-align: left;
  }

  .ui-table th,
  .ui-table td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.5rem;
  }
  .ui-table th {
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ui-table th,
  .ui-table td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.5rem;
    font-size: 14px;
  }
  .ui-table th {
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ui-table th:last-child,
  .ui-table td:last-child {
    text-align: right;
  }

  .ui-table td:first-child {
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }
  .ui-table th:first-child,
  .ui-table td:first-child {
    text-align: left;
  }
  .icon-box {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .amount-change {
    justify-content: center;
  }
  .icon {
    width: 30px;
  }
</style>
