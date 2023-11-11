<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import Selectcoin from '$lib/wallet/selectcoin.svelte';
import { onMount } from 'svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import { UserProfileEl } from "$lib/index";
const { handleDefaultwallet, handleUSDTwallet, handlePPLwallet,handlePPFwallet, handlePPDwallet } = UserProfileEl()
import { default_Wallet } from "$lib/store/coins";
import { checkIsOpen } from "$lib/store/swaps/index";
import { showcoins } from "$lib/store/deposit"
import RequestAddress from './request-address.svelte';
import AddressDisplay from './address-display.svelte';

import { handleAuthToken } from "$lib/store/routes";
import { is_loading, deposit_info } from "$lib/store/deposit"
import axios from "axios"
import {ServerURl} from "$lib/backendUrl"
const url = ServerURl()

const handlecoinSelec = ((e) => {
    if ($showcoins) {
        default_Wallet.set(e.detail)
        showcoins.set(false)
        checkIsOpen.set(false)
    } else {
        showcoins.set(true)
    checkIsOpen.set(true)
    }
})

$:{
    onMount(()=>{
        handleDefaultwallet()
        handleUSDTwallet()
        handlePPLwallet()
        handlePPFwallet()
        handlePPDwallet()
    })
}

const handlecoinSelectEl = (()=>{
    checkIsOpen.set(true)
    handlecoinSelec()
})
 
let is_requested = false
const handleSubmit = (async(e)=>{
    is_requested = true
})

const handleFetchPendingOrder = (async()=>{
    await axios.get(`${url}/api/deposit/pending-order`, {
        headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${$handleAuthToken}`
        }
    })
    .then((res)=>{
        deposit_info.set(res.data[0])
    })
    .catch((err)=>{
        is_loading.set(false)
    })
})

handleFetchPendingOrder()

</script>

<div class="sc-gLEhor lhZODp" id="deposit">
    {#if $showcoins}
        <Selectcoin on:handleCoinSelect={handlecoinSelec}/>
    {/if}
        <div class="sc-ezbkAF kDuLvp input ">
            <div class="input-label">
                <div style="flex: 1 1 0%;">Deposit Currency</div>
                <a href="/transactions/deposit">Record</a>
            </div>
            <button on:click={handlecoinSelectEl} class="sc-kszsFN evIEvq input-control">
                <div class="sc-cBIieI wvKye">
                    <div class="wrap">
                        <img class="coin-icon" alt="" src={$default_Wallet.coin_image}>
                        <span class="currency">{$default_Wallet.coin_name}</span>
                        <span class="svg">
                            <Icon src={RiSystemArrowRightSLine}  size="18"  color="rgb(255, 255, 255)" />
                        </span>
                    </div>
                </div>
                <div class="sc-kqnjJL kdWfvE">
                    <div class="wrap">
                        <div class="tit">Balance : </div>
                        <div class="amount">{$default_Wallet.balance}</div>
                    </div>
                </div>
            </button>
        </div>

        {#if $default_Wallet.coin_name === "USDT"}
            {#if $deposit_info }
                <AddressDisplay />   
            {:else}
            <RequestAddress on:display={handleSubmit} />
        {/if}
        {:else}
        <div class="sc-gRtYjc fIolUb">
            <div class="oval">
                <img alt="" src="https://static.nanogames.io/assets/bcdcoin.141c7b8c.png" class="bcd-left">
                <img alt="" src="https://static.nanogames.io/assets/bcdcoin.141c7b8c.png" class="bcd-center">
                <img alt="" src="https://static.nanogames.io/assets/bcdcoin.141c7b8c.png" class="bcd-right">
            </div>
            <div class="bcd-usd">
                <img alt="bcd-usd" src="https://static.nanogames.io/assets/bcd_usd.ae5190d3.png">
            </div>
            <p><span class="word">{$default_Wallet.coin_name}</span> (DPP Dollar) is a crypto launched by DOTPLAYPLAY. You can play games, tip, coindrop, rain with it.</p>
            <p><span class="word">1 {$default_Wallet.coin_name} = 1 USD</span> , You can <a class="hover" href="/wallet/swap">DPPSwap</a> DPP into any other currencies at any time and withdraw it to your wallet.</p>
            <p>Deposit {$default_Wallet.coin_name} into Vault, Enjoy up to <span class="word">10%</span> Annual Percentage Rate return.</p>
            <p><span class="hover">Deposit</span> to claim your {$default_Wallet.coin_name} bonus now.</p>
            <button class="more-about">
                <span>More about {$default_Wallet.coin_name}</span>
                <Icon src={RiSystemArrowRightSLine}  size="18"  color="rgb(255, 255, 255)" className="custom-icon" title="arror" />
            </button>
        </div>
        {/if}
    </div>

<style>
 
</style>
