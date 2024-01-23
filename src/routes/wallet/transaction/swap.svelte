<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import { handleAuthToken } from "$lib/store/routes";
  import { ServerURl } from "$lib/backendUrl";
  import { activeRouteAsset } from "./store";
  import Table from "./table.svelte";

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
  <Table
    fields={[
      { label: "From", id: "from" },
      { label: "To", id: "to" },
      { label: "Amount Swapped", id: "amount" },
      { label: "Time", id: "time" },
    ]}
    data={swaps}
    emptyText="No swaps found"
    let:row
    let:col
  >
    {#if col.id === "from"}
      <div class="icon-box row">
        <img
          class="icon"
          src={row.senderCoin === "PPL"
            ? "https://res.cloudinary.com/dxwhz3r81/image/upload/v1697827828/ppl_logo_mxiaot.png"
            : row.senderCoinIcon}
          alt="Sender Coin Icon"
        />
        <span>
          {row.senderCoin}
        </span>
      </div>
    {/if}

    {#if col.id === "to"}
      <div class="icon-box align-center row">
        <img
          class="icon"
          src={row.receiverCoin === "PPL"
            ? "https://res.cloudinary.com/dxwhz3r81/image/upload/v1697827828/ppl_logo_mxiaot.png"
            : row.receiverCoinIcon}
          alt="Receiver coin icon"
        />
        <span>
          {row.receiverCoin}
        </span>
      </div>
    {/if}

    {#if col.id === "amount"}
      <span class="row amount">
        {parseFloat(row.amountSwapped).toFixed(2)}
      </span>
    {/if}

    {#if col.id === "time"}
      <div class="row">
        {new Date(row?.createdAt).getFullYear()}/{new Date(
          row?.createdAt
        ).getMonth()}/{new Date(row?.createdAt).getDate()}
        {formatTime(row?.createdAt)}
      </div>
    {/if}
  </Table>
</div>

<style>
  .align-center {
    display: flex;
    justify-content: center;
  }
  .icon-box {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .icon {
    width: 30px;
  }
  .row {
    font-weight: 600;
    color: #cdcdcdcc;
  }
  .amount {
    color: #3bc117;
  }
</style>
