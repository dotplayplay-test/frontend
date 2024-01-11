<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import { handleAuthToken } from "$lib/store/routes";
  import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
  import { ServerURl } from "$lib/backendUrl";

  let swaps = [];
  let isLoading = false;
  const URL = ServerURl();

  function formatTime(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }

  const fetchData = async () => {
    try {
      isLoading = true;

      const response = await axios.get(`${URL}/api/transaction-history/swap`, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${$handleAuthToken}`,
        },
      });

      isLoading = false;

      return response.data;
    } catch (err) {
      isLoading = false;
      console.log(err);
    }
  };

  onMount(async () => {
    swaps = await fetchData();
  });
</script>

<div>
  {#if swaps.length > 0}
    <div class="transaction-list">
      <table class="ui-table">
        <thead>
          <th>From</th>
          <th>To</th>
          <th>Amount</th>
          <th>Time</th>
        </thead>
        <tbody>
          {#each swaps as item}
            <tr>
              <td class="cl-light align-center">
                {item.senderCoin}
              </td>
              <td class={`amount-change`}>
                {item.receiverCoin}
              </td>
              <td class={`amount-change`}>
                {item.amountSwapped}
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
      <!-- <div class="ui-pagination m-fixbot">
        <div class="ui-select">
          <div class="select-trigger">
            10
            <div class="arrow top">
              <Icon
                src={RiSystemArrowRightSLine}
                size="23"
                color="rgba(153, 164, 176, 0.6)"
                className="custom-icon"
                title="arror"
              />
            </div>
          </div>
        </div>
        <div class="total">Total 1</div>
        <div class="pages-box pages-wrap">
          <button class="active" disabled="">1</button>
        </div>
        <div class="pages-box page-pn pageConic">
          <button disabled="" class="disabled previous-btn">
            <svg class="s1ff97qc icon prev">
                        <use xlink:href="/assets/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                    </svg>
          </button>
          <button disabled="" class="disabled next-page">
            <svg class="s1ff97qc icon next">
                        <use xlink:href="/assets/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                    </svg>
          </button>
        </div>
      </div> -->
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
</style>
