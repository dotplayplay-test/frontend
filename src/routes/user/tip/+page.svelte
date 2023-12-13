<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import "../../../styles/users/rain/index.css"
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import RiSystemArrowLeftSLine from "svelte-icons-pack/ri/RiSystemArrowLeftSLine";
import {onMount} from "svelte"
import { UserProfileEl } from "$lib/index";
import { ppdWallet, pplWallet, usdt_Wallet, default_Wallet} from "$lib/store/coins"
import {  usePublicMessages } from "$lib/chat-room/componets/index"
const { sendMessage } = usePublicMessages()
import { profileStore } from '$lib/store/profile';
import {tipped_user } from "$lib/store/tipUser"
const { handleDefaultwallet, handleUSDTwallet, handlePPFwallet, handlePPLwallet, handlePPDwallet } = UserProfileEl()

$:{
    onMount(async()=>{
        handleDefaultwallet()
        handleUSDTwallet()
        handlePPFwallet()
        handlePPLwallet()
        handlePPDwallet()
    })
}

let coins = [{
        id: 1,
        coin_name: $usdt_Wallet.coin_name,
        coin_fname: $usdt_Wallet.coin_fname,
        coin_image: $usdt_Wallet.coin_image,
        balance: $usdt_Wallet.balance,
        select: ($usdt_Wallet.coin_name === $default_Wallet.coin_name)
    },
    {
        id: 2,
        coin_name: $ppdWallet.coin_name,
        coin_fname: $ppdWallet.coin_fname,
        coin_image: $ppdWallet.coin_image,
        balance: $ppdWallet.balance,
        select: ($ppdWallet.coin_name === $default_Wallet.coin_name)
    },
    {
        id: 4,
        coin_name: $pplWallet.coin_name,
        coin_fname: $pplWallet.coin_fname,
        coin_image: $pplWallet.coin_image,
        balance: $pplWallet.balance,
        suffix: $pplWallet.suffix,
        select: ($pplWallet.coin_name === $default_Wallet.coin_name)
    }
]

let tipValue = 10
let tip_user = $tipped_user
let isSelectCoin = false
const handleSelectCoins = (() => {
    if (isSelectCoin) {
        isSelectCoin = false
    } else {
        isSelectCoin = true
    }
})
let count = 0
let displayComment = ""
const handleCommets = ((e)=>{
    if(e.length <= 50){
        count = e.length 
        displayComment = e
    }else{
        displayComment += ""
    }
})

const handleSelectCoin = ((e) => {
    default_Wallet.set(e)
    handleSelectCoins()
})

const handleSubmit = (()=>{
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let newformat = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let time = (hours + ':' + minutes + ' ' + newformat);
    let data = {
        email: $profileStore.email,
        type: "tip",
        text: "",
        sent_at: time,
        profle_img: $profileStore.profile_image,
        sender_username: $profileStore.username,
        gif: "",

        coin_drop_amount: 0,
        coin_drop_comment: "",
        coin_drop_num:0,
        coin_drop_token: "",

        coin_rain_amount: 0 ,
        coin_rain_comment: '',
        coin_rain_num:0,
        coin_rain_token:  0,

        tipped_user: $tipped_user,
        tipped_amount: tipValue,
        tipped_comment: displayComment,
        tipped_coin_image:$default_Wallet.coin_image,
        tip_Token: $default_Wallet.coin_name,

        vip_level: $profileStore.vip_level
    }
    sendMessage(data)
    history.back(-1)
})

</script>

<div class="sc-bkkeKt kBjSXI">
    <div class="dialog" style="opacity: 1; width: 464px; height: 581px; margin-top: -290.5px; margin-left: -232px; transform: scale(1) translateZ(0px);">
        {#if isSelectCoin}
        <button on:click={()=> handleSelectCoins()} class="dialog-back" style="opacity: 1; transform: none;">
            <Icon src={RiSystemArrowLeftSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
        </button>
        {/if}
        <div class={`dialog-head ${isSelectCoin ? "has-back" : "has-close"}`}>
            <div class="dialog-title">Tip</div>
        </div>
        <button on:click={()=> history.back()}  class="sc-ieecCq fLASqZ close-icon dialog-close">
            <Icon src={IoCloseSharp}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
        </button>

        <div class="dialog-body default-style " style="z-index: 2; transform: none;">

            {#if !isSelectCoin}
            <div class="sc-fDMmqs hyeTsL">
                <div class="sc-ezbkAF kDuLvp input sc-bTfYFJ dETeez amount-input">
                    <div class="input-label">
                        <div class="amount-label">
                            <p>Amount</p><p>Balance: <span>{$default_Wallet.balance + " " +  $default_Wallet.coin_name}</span></p>
                        </div>
                    </div>
                    <div class="input-control">
                        <input type="number" bind:value={tipValue} >
                        <button on:click={()=> handleSelectCoins()} class="sc-kHOZwM lkOmCH">
                            <img class="coin-icon" alt="" src={$default_Wallet.coin_image}>
                            <span class="currency">{$default_Wallet.coin_name}</span>
                            <Icon src={RiSystemArrowRightSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
                        </button>
                    </div>
                    <div class="input-after">Min: {#if $default_Wallet.coin_name === "PPL" }
                        2
                        {:else}
                        1
                        {/if} {$default_Wallet.coin_name}</div>
                </div>
                <div class="sc-ezbkAF kDuLvp input people-input">
                    <div class="input-label"></div>
                    <div class="input-control">
                        <input type="text" disabled value={tip_user}>
                        <div class="dialog-gray">tipped</div>
                    </div>
                </div>
                <div class="sc-ezbkAF kDuLvp input sc-ikJyIC iowset rain-textarea">
                    <div class="input-label">Message (Optional)</div>
                    <div class="input-control">
                        <textarea on:keyup={(e)=> handleCommets(e.target.value)} value={displayComment} ></textarea>
                        <div class="rain-len">{count}/50</div>
                    </div>
                </div>
                <button on:click={handleSubmit} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                    <div class="button-inner">Pour rain </div>
                </button>
            </div>
            {:else}
            <div class="sc-eLwHnm eCfWZW">
                <div class="sc-dkPtRN jScFby scroll-view sc-dvQaRk bVVgo currency-list">
                    {#each coins as coin (coin.id)}
                    <button on:click={()=> handleSelectCoin(coin)}  class={`sc-TBWPX kjMlDW currency-item notranslate ${coin.select ? "active" : "normal" }  `}>
                        <div class="sc-ZOtfp sc-jOxtWs sc-hmjpVf bAQFCP lkOITC jNFKIW">
                            <div class="coin-wrap">
                                <img class="coin-icon" alt="" src={coin.coin_image} ></div>
                            <div class="name-wrap">
                                <div class="currency-name">{coin.coin_name}</div>
                            </div>
                            <div class="amount-wrap">
                                <div class="sc-Galmp erPQzq coin notranslate monospace">
                                    <div class="amount">
                                        <span class="amount-str">{coin.balance}<span class="suffix">00</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                    {/each}
                </div>
            </div>
            {/if}
        </div>
    </div>
</div>

<style>
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

.default-style>div {
    border-radius: 20px;
    background-color: rgb(30, 32, 36);
    padding: 1.25rem 1.25rem 0px;
}

.dialog-body>div {
    flex: 1 1 0%;
}

.eCfWZW {
    display: flex;
    flex-direction: column;
    align-self: stretch;
}

.eCfWZW .currency-list {
    margin-top: 0.8125rem;
    margin-bottom: 0.9375rem;
}

.jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
}

.kjMlDW {
    padding: 0.4375rem 0.625rem;
    font-size: 0.875rem;
    border-radius: 1.25rem;
    margin: 0.25rem 0px;
    width: 100%;
    border: 1px solid transparent;
    min-height: 2.0625rem;
}

.bAQFCP {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}

.jNFKIW .coin-wrap {
    position: relative;
}

.bAQFCP .coin-icon {
    width: 1.875rem;
    height: 1.875rem;
    margin-right: 0.9375rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 8px;
    border-radius: 0.9375rem;
}

.lkOITC .coin-wrap {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
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

.monospace {
    font-family: Monmono;
}

.erPQzq .amount-str {
    width: 7em;
    display: inline-block;
}

.erPQzq .suffix {
    opacity: 0.5;
}

.kjMlDW.active {
    border-color: rgb(67, 179, 9);
}
</style>
