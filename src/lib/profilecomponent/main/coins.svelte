<script>
  import RiSystemSearchLine from "svelte-icons-pack/ri/RiSystemSearchLine";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import WalletManager from "$lib/logics/WalletManager";
  import { createEventDispatcher, onMount } from "svelte";
  const dispatch = createEventDispatcher();
  import { UserProfileEl } from "../../index";
  import { updateCoins } from "./updateCoin";
  const { useCoinUpdate } = updateCoins();
  import {
    profileStore,
    handleisLoading,
    handleisLoggin,
    app_Loading,
  } from "$lib/store/profile";
  import { default_Wallet, coin_list } from "$lib/store/coins";
  import {
    preferredCurrency,
    viewInFiat,
    currencyRates,
  } from "$lib/store/currency";
  import useFormatter from "$lib/hook/formatter";

  const { removeTrailingZeros, getSuffix } = useFormatter();
  import { browser } from "$app/environment";
  import { ServerURl } from "$lib/backendUrl";
  const URL = ServerURl();
  let show_currencyName;
  const {
    handlePPDwallet,
    handleUSDTwallet,
    handlePPFwallet,
    handlePPLwallet,
  } = UserProfileEl();

  $: {
    show_currencyName =
      browser && JSON.parse(localStorage.getItem("show-full-curency"));
  }
  onMount(async () => {
    let usdt = await handleUSDTwallet();
    let ppd = await handlePPDwallet();
    let ppl = await handlePPLwallet();
    let ppf = await handlePPFwallet();
    coin_list.set([usdt, ppd, ppl, ppf].map((coin) => ({
      ...coin,
      fiat: WalletManager.getInstance().amountToFiat(
        coin.balance,
        coin.coin_name,
        $preferredCurrency,
        $currencyRates
      ),
    })));
    preferredCurrency.subscribe((pref) => {
      coin_list.update((coins) =>
        coins.map((coin) => ({
          ...coin,
          fiat: WalletManager.getInstance().amountToFiat(
            coin.balance,
            coin.coin_name,
            pref,
            $currencyRates
          ),
        }))
      );
    });
  });

  const handleSelectCoin = (e) => {
    dispatch(`coinDefault`, e);
    $coin_list.forEach((element) => {
      if (element.coin_name === e.coin_name) {
        element.is_active = true;
      } else {
        element.is_active = false;
      }
    });
    useCoinUpdate(e);
  };

  const handleCurrencySettings = () => {
    viewInFiat.update((v) => {
      localStorage.setItem("view-in-fiat", !v);
      return !v;
    });
  };
</script>

<div class="sc-gyElHZ eqDSYn" style="opacity: 1; transform: none;">
  <div class="sc-dUbtfd bkvHTY balance-select">
    <div class="sc-ezbkAF kDuLvp input sc-fWCJzd eAGpdQ search-input">
      <div class="input-control">
        <input type="text" value="" />
        <span class="sc-gsDKAQ hxODWG icon search">
          <Icon
            src={RiSystemSearchLine}
            size="18"
            color="rgb(255, 255, 255)"
            title="arror"
          />
        </span>
      </div>
    </div>
    <div class="sc-dkPtRN jScFby scroll-view sc-dvQaRk bVVgo currency-list">
      {#each $coin_list as coin}
        {#if coin.coin_image !== undefined}
          <button
            on:click={() => handleSelectCoin(coin)}
            class={`sc-TBWPX kjMlDW currency-item notranslate ${
              coin.is_active ? "active" : "normal"
            }  `}
          >
            <div class="sc-ZOtfp sc-jOxtWs sc-hmjpVf bAQFCP lkOITC jNFKIW">
              <div class="coin-wrap">
                <img class="coin-icon" alt="" src={coin.coin_image} />
              </div>
              <div class="name-wrap">
                <div class="currency-name">{coin.coin_name}</div>
                {#if show_currencyName}
                  <div class="full-name">{coin.coin_fname}</div>
                {/if}
              </div>
              <div class="amount-wrap">
                <div class="sc-Galmp erPQzq coin notranslate monospace">
                  <div class="amount">
                    <span class="amount-str"
                      >{coin.balance.toFixed(4)}<span class="suffix">00</span
                      ></span
                    >
                  </div>
                </div>
                {#if $viewInFiat && coin.fiat !== undefined}
                  <div
                    class="sc-Galmp erPQzq coin notranslate weaken monospace"
                  >
                    <div class="amount">
                      <span class="amount-str"
                        >{removeTrailingZeros(coin.fiat.toFixed(6))}<span
                          class="suffix">{getSuffix(coin.fiat.toFixed(6))}</span
                        ></span
                      >
                    </div>
                  </div>
                {/if}
              </div>
            </div>
          </button>
        {:else}
          <div style="text-align: center; padding:20px">Loading...</div>
        {/if}
      {/each}
    </div>
    <div class="sc-lkgTHX bxHqSs">
      <div></div>
      <div class="cont">
        <div>
          {$default_Wallet.coin_name} Price:
          <span class="icon-usd">$</span><span
            >{ WalletManager.getInstance().amountToFiat(
                $default_Wallet.balance,
                $default_Wallet.coin_name,
                $preferredCurrency
              )
              .toFixed(6)}</span
          >
        </div>
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="wrap">
          View in <span>{$preferredCurrency}</span>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            on:click={handleCurrencySettings}
            class="sc-giYglK hRMjrF switch {$viewInFiat ? 'open' : ''}"
          >
            <div class="dot"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .kjMlDW.active {
    border-color: rgb(67, 179, 9);
  }
  .eqDSYn {
    height: 24.75rem;
    width: 26.25rem;
    position: absolute;
    right: 0px;
    top: 100%;
    padding-top: 0.5rem;
    z-index: 99;
  }

  .eqDSYn .balance-select {
    height: 100%;
    border-radius: 1.25rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 5px 8px 0px;
  }

  .bkvHTY.balance-select {
    display: flex;
    flex-direction: column;
    background: var(--affiliate-bg);
  }

  .bkvHTY .search-input {
    padding: 1.25rem 1.5rem;
  }

  .eAGpdQ {
    margin-top: 0px;
    width: 100%;
  }

  .eAGpdQ .input-control {
    height: 2.75rem;
    border-radius: 0.9375rem;
    padding: 0px 0.625rem;
  }

  .kDuLvp .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: var(--text-5);
  }

  .eAGpdQ .search {
    margin-right: 0.625rem;
  }

  .kDuLvp .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 1.25rem;
    border: 1px solid var(--border-1);
    background-color: var(--sidebar-card-bg);
    height: 3.5rem;
    padding: 0px 1.25rem;
    opacity: 1;
  }

  .jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
  }

  .bkvHTY.balance-select .currency-item {
    margin-left: 1.25rem;
    margin-right: 1.25rem;
  }

  .kjMlDW {
    padding: 0.4375rem 0.625rem;
    font-size: 0.875rem;
    width: 87%;
    border-radius: 1.25rem;
    margin: 0.25rem 0px;
    border: 1px solid transparent;
    min-height: 2.0625rem;
  }

  .kjMlDW:hover {
    background: rgba(0, 0, 0, 0.151);
  }

  .bAQFCP {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .jNFKIW .coin-wrap {
    position: relative;
  }

  .lkOITC .coin-wrap {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .bAQFCP .coin-icon {
    width: 1.875rem;
    height: 1.875rem;
    margin-right: 0.9375rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 8px;
    border-radius: 0.9375rem;
  }

  .bAQFCP .currency-name {
    color: rgb(255, 255, 255);
    font-weight: 800;
    height: 1.25rem;
    line-height: 1.25rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
  }

  .lkOITC .amount-wrap {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-left: auto;
  }

  .jNFKIW .amount-wrap {
    flex-direction: column;
    align-items: flex-end;
  }

  .jNFKIW .amount-wrap .coin {
    text-align: right;
  }

  .erPQzq .amount-str {
    width: 7em;
    display: inline-block;
  }
  .jNFKIW .weaken {
    height: 1.125rem;
    line-height: 1.125rem;
  }
  .jNFKIW .weaken .amount {
    color: rgba(153, 164, 176, 0.5);
    font-weight: 400;
    font-size: 0.75rem;
  }
  .erPQzq .suffix {
    opacity: 0.5;
  }

  .jNFKIW .monospace {
    color: rgb(255, 255, 255);
    font-weight: 800;
    height: 1.375rem;
    line-height: 1.375rem;
  }

  @media screen and (max-width: 650px) {
    .eqDSYn {
      height: 21.75rem;
      width: 26.2rem;
      position: absolute;
      right: 0px;
      top: 100%;
      padding-top: 0.5rem;
      z-index: 99;
    }

    .eqDSYn {
      width: 137%;
      left: -80px;
      z-index: 10;
      padding-top: 0px;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 6px 16px 0px;
    }

    .eqDSYn .balance-select {
      border-radius: 0px 0px 1.25rem 1.25rem;
    }
  }
  .bxHqSs {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    border-top: 1px solid rgba(51, 57, 64, 0.5);
    padding: 16px 0px;
    flex: 0 0 auto;
  }
  .bkvHTY .manage-list {
    margin-left: 1rem;
  }

  .eWZHfu.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(88, 26, 196);
    background-image: conic-gradient(
      from 1turn,
      rgb(88, 26, 196),
      rgb(119, 60, 253)
    );
  }
  .bxHqSs button {
    width: 10.125rem;
    font-size: 0.875rem;
    font-weight: 800;
    height: 3.5rem;
  }
  .cBmlor {
    display: block;
    width: 100%;
    border-radius: 6.25rem;
    height: 3rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
  }
  .bxHqSs .cont {
    min-height: 3rem;
    line-height: 0.9375rem;
    padding: 0.5625rem 1rem 0.5625rem 0px;
    text-align: center;
    font-size: 0.75rem;
  }
  .bxHqSs .cont .icon-usd {
    color: rgb(93, 160, 0);
  }

  .bxHqSs span {
    color: rgb(255, 255, 255);
    margin: 0px 0px 0px 2px;
    font-weight: 800;
  }
  .bxHqSs .wrap {
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    margin-top: 0.3125rem;
  }
  .bxHqSs .wrap .switch {
    margin-left: 0.3125rem;
  }

  .hRMjrF.open {
    background-color: rgba(93, 160, 0, 0.2);
  }
  .hRMjrF {
    width: 1.75rem;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: rgb(49, 52, 60);
    position: relative;
    cursor: pointer;
  }
  .hRMjrF.open .dot {
    left: 0.75rem;
    background-color: rgb(67, 179, 9);
  }

  .hRMjrF .dot {
    transition: all 0.2s ease 0s;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: rgba(153, 164, 176, 0.6);
  }
</style>
