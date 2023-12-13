<script>
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher()
import { ppdWallet, ppfWallet, pplWallet, usdt_Wallet, default_Wallet } from "$lib/store/coins"

let coins = [{
    id: 1,
    coin_name: $usdt_Wallet.coin_name,
    coin_fname: $usdt_Wallet.coin_fname,
    coin_image: $usdt_Wallet.coin_image,
    balance: $usdt_Wallet.balance,
    select:  $usdt_Wallet.coin_name === $default_Wallet.coin_name,
    networks: {
        erc: {
            qr_code:  $usdt_Wallet.qr_code,
            address: $usdt_Wallet.erc,
        },
        bep: {
            qr_code:  $usdt_Wallet.qr_code,
            address: $usdt_Wallet.bep,
        },
        trc: {
            qr_code:  $usdt_Wallet.qr_code,
            address: $usdt_Wallet.trc,
        }
    },
},
{
    id: 2,
    coin_name: $ppdWallet.coin_name,
    coin_fname: $ppdWallet.coin_fname,
    coin_image: $ppdWallet.coin_image,
    balance: $ppdWallet.balance, 
     select:  $ppdWallet.coin_name === $default_Wallet.coin_name,
    address: $ppdWallet.address,
},
    {
        id: 4,
        coin_name: $pplWallet.coin_name,
        coin_fname: $pplWallet.coin_fname,
        coin_image: $pplWallet.coin_image,
        balance: $pplWallet.balance,
      select:  $pplWallet.coin_name === $default_Wallet.coin_name,
        address: $pplWallet.address,
    },
    {
        id: 5,
        coin_name: $ppfWallet.coin_name,
        coin_fname: $ppfWallet.coin_fname,
        coin_image: $ppfWallet.coin_image,
        balance: $ppfWallet.balance,
      select: $ppfWallet.coin_name === $default_Wallet.coin_name,
        address: $ppfWallet.address,
    },
]


const handleCoinSelect = ((e)=>{
    dispatch("handleCoinSelect", e)
})

</script>

<div class="sc-bkkeKt kBjSXI">
        <div class="dialog-body default-style sc-cbTzjv ijNHle balance-wrap" style="z-index: 2; transform: none;">
            <div class="balance-list">
                <div class="sc-dkPtRN jScFby scroll-view sc-dvQaRk bVVgo currency-list">
                    {#each coins as coin (coin.id)}
                        <button on:click={()=>handleCoinSelect(coin)} class={`sc-TBWPX kjMlDW currency-item notranslate ${coin.select ? "active" : "normal"}`}>
                            <div class="sc-ZOtfp sc-jOxtWs sc-hmjpVf bAQFCP lkOITC jNFKIW">
                                <div class="coin-wrap">
                                    <img alt="" class="coin-icon" src={coin.coin_image}>
                                </div>
                                <div class="name-wrap">
                                    <div class="currency-name">{coin.coin_name}</div>
                                </div>
                                <div class="amount-wrap">
                                    <div class="sc-Galmp erPQzq coin notranslate monospace">
                                        <div class="amount">
                                            <span class="amount-str">{coin.balance}<span class="suffix"></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    {/each}
                </div>
            </div>
        </div>
</div>

<style>
.kjMlDW.active {
    border-color: rgb(67, 179, 9);
}
.ijNHle.balance-wrap {
    background-color: wheat;
    transition: all 0.5s ease;
}
.kBjSXI {
    position: fixed;
    z-index: 1000;
    inset: 0px;
    z-index: 12;
    background-color: rgb(23, 24, 27);
    filter: none !important;
    transition: all 0.5s ease;
}
.dialog {
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    margin: 0px;
    border-radius: 0px;
}
.dialog {
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 50%;
    top: 50%;
    width: 464px;
    height: 720px;
    margin: -375px 0px 0px -280px;
    transition-property: width, height, margin-left, margin-top;
    transition-duration: 0.5s;
    border-radius: 1.25rem;
    overflow: hidden;
    background-color: rgb(23, 24, 27);
}
.dialog-back {
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 11;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3.75rem;
    height: 3.75rem;
}
.dialog-head.has-back {
    margin-left: 3.125rem;
}
.dialog-head.has-close {
    margin-right: 3.75rem;
}
.dialog-head {
    position: relative;
    z-index: 10;
    flex: 0 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 3.75rem;
    margin-left: 1.125rem;
    transition: all 0.5s ease 0s;
}
.gcaECY {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 0.625rem;
}
.fLASqZ {
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 11;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3.75rem;
    height: 3.75rem;
}
.dialog-body {
    position: absolute;
    inset: 0px;
    display: flex;
    overflow: hidden;
}
.default-style {
    padding-top: 3.75rem;
    background-color: rgb(23, 24, 27);
}
.ijNHle.balance-wrap {
    background-color: rgb(23, 24, 27);
}
.ijNHle .balance-list {
    padding: 0px;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    transition: all 0.5s ease;
}
.default-style > div {
    border-radius: 1.25rem 1.25rem 0rem 0rem;
    background-color: rgb(30, 32, 36);
    padding: 1.25rem 1.25rem 0px;
}
.ijNHle .search-input {
    padding: 1.25rem;
}
.eAGpdQ {
    margin-top: 0px;
    width: 100%;
}

.jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
}
.ijNHle .balance-list .currency-item {
    margin-left: 1.25rem;
    margin-right: 1.25rem;
}
.kjMlDW {
    padding: 0.4375rem 0.625rem;
    font-size: 0.875rem;
    border-radius: 1.25rem;
    margin: 0.25rem 0px;
    border: 1px solid transparent;
    min-height: 2.0625rem;
    width: 87%;
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
.jNFKIW .amount-wrap {
    flex-direction: column;
    align-items: flex-end;
}
.lkOITC .amount-wrap {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-left: auto;
}
.jNFKIW .amount-wrap .coin {
    text-align: right;
}
.jNFKIW .monospace {
    color: rgb(255, 255, 255);
    font-weight: 800;
    height: 1.375rem;
    line-height: 1.375rem;
}
.erPQzq {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
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
</style>
