<script>
import RiSystemSearchLine from "svelte-icons-pack/ri/RiSystemSearchLine";
import Icon from 'svelte-icons-pack/Icon.svelte';
import { createEventDispatcher , onMount} from 'svelte'
const dispatch = createEventDispatcher()
import { updateCoins } from "./updateCoin"
import { UserProfileEl } from "../../index";
const { handleUSDTwallet, handlePPFwallet,  handlePPLwallet, handlePPDwallet } = UserProfileEl()
const { useCoinUpdate } = updateCoins()
import { ppdWallet, ppfWallet, pplWallet, usdt_Wallet, default_Wallet } from "$lib/store/coins"
import { browser } from '$app/environment'

onMount(async()=>{
    handleUSDTwallet()
    handlePPFwallet()
    handlePPLwallet()
    handlePPDwallet()
})

let show_currencyName

$:{
    show_currencyName = browser && JSON.parse(localStorage.getItem('show-full-curency'))
}

let coins
$:{
    coins = [
    {
        id: 1,
        coin_name: $usdt_Wallet.coin_name,
        coin_fname: $usdt_Wallet.coin_fname,
        coin_image: $usdt_Wallet.coin_image,
        balance: $usdt_Wallet.balance,
        select: ($usdt_Wallet.coin_name === $default_Wallet.coin_name)
    },
    {
        id: 2,
        coin_name: $ppdWallet && $ppdWallet.coin_name,
        coin_fname:  $ppdWallet.coin_fname,
        coin_image: $ppdWallet.coin_image,
        balance: $ppdWallet.balance,
        select: ($ppdWallet.coin_name === $default_Wallet.coin_name)
    },
    {
        id: 4,
        coin_name: $pplWallet.coin_name,
        coin_fname:  $pplWallet.coin_fname,
        coin_image:  $pplWallet.coin_image,
        balance:  $pplWallet.balance,
        select: ($pplWallet.coin_name === $default_Wallet.coin_name)
    },
    {
        id: 5,
        coin_name: $ppfWallet.coin_name,
        coin_fname:  $ppfWallet.coin_fname,
        coin_image: $ppfWallet.coin_image,
        balance:  $ppfWallet.balance,
        select: ($ppfWallet.coin_name == $default_Wallet.coin_name)
    },
]
}

const handleSelectCoin = ((e) => {
    dispatch(`coinDefault`, e)
    useCoinUpdate(e)
})

</script>

<div class="sc-gyElHZ eqDSYn" style="opacity: 1; transform: none;">
    <div class="sc-dUbtfd bkvHTY balance-select">
        <div class="sc-ezbkAF kDuLvp input sc-fWCJzd eAGpdQ search-input">
            <div class="input-control">
                <input type="text" value="">
                <span class="sc-gsDKAQ hxODWG icon search">
                    <Icon src={RiSystemSearchLine}  size="18"  color="rgb(255, 255, 255)"  title="arror" />
                </span>
            </div>
        </div>
        <div class="sc-dkPtRN jScFby scroll-view sc-dvQaRk bVVgo currency-list">
            {#each coins as coin}
            {#if coin.coin_image !== undefined}
                <button on:click={()=> handleSelectCoin(coin)} class={`sc-TBWPX kjMlDW currency-item notranslate ${coin.select ? "active" : "normal"}  `}>
                    <div class="sc-ZOtfp sc-jOxtWs sc-hmjpVf bAQFCP lkOITC jNFKIW">
                        <div class="coin-wrap">
                            <img class="coin-icon" alt="" src={coin.coin_image}>
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
                                    <span class="amount-str">{(coin.balance).toFixed(4)}<span class="suffix">00</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
            {:else}
            <div class="center">
                <div class="wave"></div>
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
            {/if}
       
            {/each}
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
    background-color: rgb(23, 24, 27);
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
    color: rgb(245, 246, 247);
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
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
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
</style>
