<script>
  import Icon from "svelte-icons-pack/Icon.svelte";
  import AiOutlineSwap from "svelte-icons-pack/ai/AiOutlineSwap";
  import axios from "axios";
  import { onMount } from "svelte";
  import { handleAuthToken } from "$lib/store/routes";
  import { ServerURl } from "$lib/backendUrl";
  import { coin_list } from "$lib/store/coins";

  import SwapField from "./components/SwapField.svelte";
  import SwapFooter from "./components/SwapFooter.svelte";

  const url = ServerURl();

  const getUsableCoins = () =>
    $coin_list.filter((element) => element.coin_name !== "PPF");

  let ispo_loading = false;

  let amount = 10;
  let isLoading = false;

  const handleSubmit = async () => {
    try {
      const data = {
        senderCoin: from.coin.coin_name,
        receiverCoin: to.coin.coin_name,
        amount,
      };

      isLoading = true;
      const res = await axios.post(`${url}/api/transaction/swap`, data, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${$handleAuthToken}`,
        },
      });
      isLoading = false;
      // close modal...
      console.log({ res });
    } catch (err) {
      isLoading = false;
      console.log(err);
    }
  };

  onMount(() => {
    from.coin = getUsableCoins()[0];
    to.coin = getUsableCoins()[1];
  });

  function computeSwap() {
    const conversionRates = {
      USDT: 1, // 1 USDT = $1
      PPD: 1, // 1 PPD = $1
      PPL: 0.1, // 1 PPL = $0.1
    };

    const amount = from.amount;
    const fromCurrency = from.coin.coin_name;
    const toCurrency = to.coin.coin_name;

    // Check if the currencies are valid
    if (!conversionRates[fromCurrency] || !conversionRates[toCurrency]) {
      throw new Error("Invalid currency");
    }

    // Perform the conversion
    const convertedAmount =
      (amount / conversionRates[fromCurrency]) * conversionRates[toCurrency];

    to.amount = convertedAmount;
  }

  const handleOnClickMax = () => {
    from.amount = 900;
  };

  const switchFields = () => {
    const oldFrom = from;

    from = to;
    to = oldFrom;
  };

  let from = { amount: 0, coin: null };
  let to = { amount: 0, coin: null };
</script>

<div class="ui-scrollview">
  <div class="s4kezgj limit-width" id="deposit">
    <div class="swm8knq">
      <div class="label-box">
        <div class="label">You get Approximately</div>
        <div class="label">
          Min: {from?.amount || 0}
          {from?.coin?.coin_name}
        </div>
      </div>
    </div>
    {#if !ispo_loading}
      <div class="sbaeww">
        <div class="button-box">
          <div class="sq07zth">
            <SwapField
              onClick={() => computeSwap()}
              activeCoin={from.coin}
              onClickMax={handleOnClickMax}
              bind:amount={from.amount}
              showMax={true}
              handleOnChange={computeSwap}
            />
          </div>
          <div class="to-item">
            <SwapField
              onClick={() => computeSwap()}
              disabled={true}
              activeCoin={to.coin}
              bind:amount={to.amount}
            />
          </div>
          <button on:click={switchFields} class="switch-btn">
            <Icon src={AiOutlineSwap} /></button
          >
        </div>

        <div class="page-margin">
          <SwapFooter {from} {to} />
        </div>

        <div class="page-margin">
          <button
            on:click={handleSubmit}
            class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal"
          >
            <div class="button-inner">
              {isLoading ? "Loading..." : `Submit`}
            </div>
          </button>
        </div>
      </div>
    {:else}
      <div style="height: 100px;">
        <div class="center" style="height: 300px;">
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  .label-box {
    display: flex;
    justify-content: space-between;
  }
  .ui-scrollview {
    padding: 0.25rem 2rem 1.25rem;
  }
  .button-box {
    position: relative;
  }
  .switch-btn {
    --1rv42qm: #fff;
    --1hr07om: rgba(153, 164, 176, 0.6);
    --prlp66: #26282c;
    --cn5q3p: #3d4049;
    --he6tl4: #2d3035;
    --p4qis: #3d4049;
    --qos9gx: #484d57;

    width: 35px;
    height: 35px;
    fill: white;
    margin-top: 0.1875rem;

    position: absolute;
    right: 50%;
    top: 30%;

    text-align: center;
    z-index: 1;
    border: solid 3px var(--he6tl4);
    background-color: var(--p4qis);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .ui-scrollview {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    -webkit-flex: 1 1 1px;
    -ms-flex: 1 1 1px;
    flex: 1 1 1px;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-y;
    overscroll-behavior: contain;
  }
  .swm8knq {
    --18w92jy: #fff;
    --1cq0e1f: #f6f7fa;
    --9ty6bq: rgba(218, 221, 230, 0.5);
    margin-top: 1rem;
  }
  .swm8knq .label {
    margin-bottom: 0.75rem;
    line-height: 0.875rem;
    font-size: 0.875rem;
  }
  .s4kezgj .fast-btns .ui-button .button-inner {
    font-weight: 400;
  }
  .page-margin {
    margin-top: 1rem;
  }
  .ui-scrollview {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    -webkit-flex: 1 1 1px;
    -ms-flex: 1 1 1px;
    flex: 1 1 1px;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-y;
    overscroll-behavior: contain;
  }
  .button-box {
    background-color: rgba(48, 43, 43, 0.523);
    padding: 6px;
    border-radius: 6px;
  }
  .to-item {
    margin-top: 5px;
  }
</style>
