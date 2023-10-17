<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCopy from "svelte-icons-pack/io/IoCopy";
import Selectcoin from '$lib/wallet/selectcoin.svelte';
import { onMount } from 'svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import { UserProfileEl } from "$lib/index";
const { handleDefaultwallet, handleUSDTwallet, handlePPLwallet,handlePPFwallet, handlePPDwallet } = UserProfileEl()
// import { updateCoins } from "$lib/profilecomponent/main/updateCoin"
// const { useCoinUpdate } = updateCoins()

import { default_Wallet, usdt_Wallet } from "$lib/store/coins"


let isSelectCoin = false
const handlecoinSelect = (() => {
    if (isSelectCoin) {
        isSelectCoin = false
    } else {
        isSelectCoin = true
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
let erc = true
let trc = false
let bep = false

const handleNetwork = ((e)=>{
    if(e === 1){
        erc = true
        trc = false
        bep = false
    }else if(e === 2){
        erc = false
        trc = false
        bep = true
    }else{
        erc = false
        trc = true
        bep = false
    }
})


const handleCoins = ((e) => {
    default_Wallet.set(e.detail)
    handlecoinSelect()
})
</script>

<div class="sc-gLEhor lhZODp" id="deposit">
    {#if isSelectCoin}
    <Selectcoin on:handleCoinSelect={handleCoins}/>
    {/if}
        <div class="sc-ezbkAF kDuLvp input ">
            <div class="input-label">
                <div style="flex: 1 1 0%;">Deposit Currency</div>
                <a href="/transactions/deposit/DOGE">Record</a>
            </div>
            <button on:click={handlecoinSelect} class="sc-kszsFN evIEvq input-control">
                <div class="sc-cBIieI wvKye">
                    <div class="wrap">
                        <img class="coin-icon" alt="" src={$default_Wallet.coin_image}>
                        <span class="currency">{$default_Wallet.coin_name}</span>
                        <span class="svg">
                            <Icon src={RiSystemArrowRightSLine}  size="18"  color="rgb(255, 255, 255)" className="custom-icon" title="arror" />
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
        <div class="sc-zjkyB cpVBtC">
            <div class="sc-czvZiG exgnid bcd-label">
                <p>First Deposit Bonus</p>
                <span>More</span>
            </div>
            <div class="sc-dXNJws kyYKJa">
                <div class="bg-light light-ani">
                    <div class="sc-jFkwbb bNDdwa bcd-left">
                        <p class="one">$30<span>(or above to get bonus)</span>
                        </p>
                        <p class="two">≈ 30 USDT</p>
                    </div>
                    <div class="sc-bOtlzW gCfefU bcd-right">
                        <div class="wrap">
                            <div class="sc-bQFuvY dftgop sun-flower">
                                <img class="img-bg" src="https://static.nanogames.io/assets/sf_w.adddd7aa.png" alt="sf">
                                <img class="img-bonus" src="https://static.nanogames.io/assets/bonus.8a408dd9.png" alt="bonus">
                            </div>
                            <div class="info">
                                <p class="one">
                                    <b>+80%</b>
                                    <span>Bonus</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="sc-dpAhYB emReoO">
            <div class="sc-fSDTwv hgHrvG">
                <div class="label">Choose Network</div>
                <div class="btn-wrap">
                    <div class="scroll-box">
                        <div class="btn-space">
                            <button on:click={()=>handleNetwork(1)} class={erc ? `active` : ""} disabled={erc}>ERC20</button>
                        </div>
                        <div class="btn-space">
                            <button on:click={()=>handleNetwork(2)} class={bep ? `active` : ""} disabled={bep}>BEP20</button>
                        </div>
                        <div class="btn-space">
                            <button on:click={()=>handleNetwork(3)} class={trc ? `active` : ""} disabled={trc}>TRC20</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sc-wkwDy blotCy">
                <div class="label">
                    <div>Deposit Address&nbsp;( Note: Only <span class="cl-primary"> {$usdt_Wallet.coin_name} Coin </span> )</div>
                    {#if erc}
                        <div class="notranslate">{$usdt_Wallet.erc.substring(0, 7).concat('.......')}</div> 
                        {:else if trc}
                        <div class="notranslate">{$usdt_Wallet.trc.substring(0, 7).concat('.......')}</div> 
                        {:else if bep}
                        <div class="notranslate">{$usdt_Wallet.bep.substring(0, 7).concat('.......')}</div> 
                    {/if}
                </div>
                <div class="box">
                    <div class="cont">
                        {#if erc}
                        <input class="address" readonly="" value={$usdt_Wallet.erc}>
                        {:else if trc}
                        <input class="address" readonly="" value={$usdt_Wallet.trc}>
                        {:else if bep}
                        <input class="address" readonly="" value={$usdt_Wallet.bep}>
                    {/if}

                        <button class="sc-iqseJM cBmlor button button-normal copy-button">
                            <div class="button-inner">
                                <Icon src={IoCopy}  size="18"  color="rgb(255, 255, 255)" className="custom-icon" title="arror" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div class="sc-gDGHff jeroAP">
                {#if erc}
                 <img src={$usdt_Wallet.qr_code} alt="qr.png">
                 {:else if trc}
                 <img src={$usdt_Wallet.qr_code} alt="qr.png">
                 {:else if bep}
                 <img src={$usdt_Wallet.qr_code} alt="qr.png">
                {/if}
            </div>
            <div class="sc-ywFzA egWBux">
                <p><span class="cl-primary">NOTICE:</span> Send only USDT to this address. Coins will be deposited after 6 network confirmations.</p>
            </div>
        </div>
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
