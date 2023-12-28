<script>
  import Recharge from "./components/recharge.svelte";
  import Weekly from "./components/weekly.svelte";
  import Monthly from "./components/monthly.svelte";
  import { allcashback, error_msg } from "./store/index";
  import Levelup from "./components/level_up.svelte";
  import Flashdrop from "./components/flashdrop.svelte";
  import Unlockppd from "./components/unlockppd.svelte";
  import SpinBar from "./components/spin-bar.svelte";
  import RollCompetition from "./components/roll-competition.svelte";
  import MasterMedal from "./components/master-medal.svelte";
  import Rain from "./components/rain.svelte";
  import Coindrop from "./components/coindrop.svelte";
  import CoinTip from "./components/Coin-tip.svelte";
  import HitBingo from "./components/hit-bingo.svelte";
  import { handleAuthToken } from "$lib/store/routes";
  import axios from "axios";
  import { ServerURl } from "$lib/backendUrl";
  import { onMount } from "svelte";
  let url = ServerURl();

  // $: console.log($allcashback)
  const handleAllcashbacks = async () => {
    const { data } = await axios.get(`${url}/api/cashback`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${$handleAuthToken}`,
      },
    });
    allcashback.set(data);
  };
  onMount(async () => {
    await handleAllcashbacks();
  });
</script>

<div class="b1jlld01 page-bonus-wrap page-max-width-wrap">
  {#if $error_msg}
    <div class="error-message">
      <div class="hTTvsjh">
        <div>{$error_msg}</div>
      </div>
    </div>
  {/if}

  <div class="b1vu4hmp">
    <div class="b1w3idi2">
      <div class="dashboard-left">
        <img alt="img" src="https://bc.game/assets/money.7fa4e398.png" />
        <div class="left-text-wrap">
          <div class="total-text"><p>Total Bonus Claimed</p></div>
          <p class="usd-cs-amount n">
            <span class="cs-t">$ </span>
            {#if $allcashback.total_bonus_claimed}
              <span class="at">{$allcashback.total_bonus_claimed}</span>
            {:else}
              <span class="at">0.00</span>
            {/if}
          </p>
        </div>
      </div>
      <div class="center-item">
        <p class="c-t">Total VIP Bonus</p>
        <p class="usd-cs-amount c-n">
          <span class="cs-t">$ </span>
          {#if $allcashback.total_level_bonus}
            <span class="at">{$allcashback.total_level_bonus}</span>
          {:else}
            <span class="at">0.00</span>
          {/if}
        </p>
      </div>
      <div class="center-item">
        <p class="c-t">Total General Bonus</p>
        <p class="usd-cs-amount c-n">
          <span class="cs-t">$ </span>
          <span class="at">0.00</span>
        </p>
      </div>
      <div class="center-item">
        <p class="c-t">Total Special Bonus</p>
        <p class="usd-cs-amount c-n">
          <span class="cs-t">$ </span>
          <span class="at">0.00</span>
        </p>
      </div>
      <button class="ui-button button-normal c-btn">
        <div class="button-inner">Details</div>
      </button>
    </div>
  </div>

  <div class="bonus-num-title">
    <p class="g-t last">
      <span>VIP</span>
      Bonus
    </p>
  </div>
  <div class="page-bonus-list midden">
    <Levelup />
    <Recharge />
    <Weekly />
    <Monthly />
  </div>

  <div class="bonus-num-title">
    <p class="g-t last">
      <span>Special</span>
      Bonus
    </p>
  </div>
  <div class="page-bonus-list midden">
    <Flashdrop />
    <Rain />
    <CoinTip />
    <Coindrop />
    <HitBingo />
  </div>

  <div style="padding: 70px 0">
    <div class="bonus-num-title">
      <p class="g-t last">
        <span>General Bonus</span>
        Bonus
      </p>
    </div>
    <div class="page-bonus-list midden">
      <MasterMedal />
      <SpinBar />
      <RollCompetition />
      <Unlockppd />
    </div>
  </div>
</div>

<style>
  .page-max-width-wrap {
    width: 100%;
    margin: 0 auto;
    padding: 30px 40px;
    max-width: 1430px;
  }
  .b1vu4hmp {
    --ge4i3v: #1c1e22;
    --pl3af1: #2c3036;
  }

  .b1vu4hmp .top .code-reeem-wrap .ui-button {
    width: 12.5rem;
    background-color: var(--primary-color);
    color: #fff;
    font-weight: 600;
    border-radius: 0 30px 30px 0;
  }

  .b1w3idi2 {
    background: linear-gradient(0deg, #ffffff, #ffffff),
      linear-gradient(0deg, #3b3e47, #3b3e47), rgba(44, 48, 54, 0.6);
    color: #f6f7fa;
    margin-top: 1.5rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 1.25rem 1.5rem;
    background: var(--30h9sj);
    -webkit-backdrop-filter: blur(7px);
    backdrop-filter: blur(7px);
    border-radius: var(--border-radius);
  }

  .b1w3idi2 {
    background: linear-gradient(0deg, #1c1e22, #1c1e22),
      linear-gradient(0deg, #3b3e47, #3b3e47), rgba(44, 48, 54, 0.6);
    /* color: #2D3035; */
  }

  .b1w3idi2 .dashboard-left {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-right: 5%;
    border-right: 1px solid rgba(70, 71, 74, 0.4);
  }
  .b1w3idi2 .dashboard-left img {
    width: 5.875rem;
    height: auto;
  }
  .b1w3idi2 .dashboard-left .left-text-wrap .total-text {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    line-height: 1.25rem;
  }
  .b1jlld01 p {
    margin: 0;
  }
  .b1w3idi2 .dashboard-left .left-text-wrap {
    margin-left: 0.5rem;
  }
  .b1w3idi2 .dashboard-left .left-text-wrap .n {
    color: var(--primary-color);
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem;
    -webkit-letter-spacing: -1px;
    -moz-letter-spacing: -1px;
    -ms-letter-spacing: -1px;
    letter-spacing: -1px;
    white-space: nowrap;
  }
  .b1w3idi2 .dashboard-left {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-right: 5%;
    border-right: 1px solid rgba(70, 71, 74, 0.4);
  }
  .b1w3idi2 .center-item .c-t {
    line-height: 1.25rem;
    color: #6b7180;
  }
  .b1w3idi2 .c-btn {
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
    height: 2.75rem;
    width: auto;
    padding: 1.5rem;
    background-color: #6b718038;
    font-weight: 600;
    border-radius: 12px;
  }

  .bonus-num-title {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 0.75rem;
  }

  .g-t {
    line-height: 1.125rem;
    font-weight: 600;
    font-size: 1.125rem;
    color: #f6f7fa;
  }

  .g-t span {
    color: #ffbf39;
  }

  .bonus-num-title {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 1.75rem;
  }
  .page-bonus-list {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 1.25rem;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
</style>
