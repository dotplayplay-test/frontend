<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
import { UseTransaction } from "$lib/hook/useTransaction"
import {onMount} from "svelte"
import { UserProfileEl } from "$lib/index";
const { Swap } = UseTransaction()
import {
    ppdWallet,
    pplWallet,
    usdt_Wallet,
    default_Wallet
} from "$lib/store/coins"
import {
    checkIsOpen,
    storeReceiver,
    storeSender,
    IsSender
} from "$lib/store/swaps/index"

const { handleDefaultwallet, handleUSDTwallet, handlePPFwallet, 
    handlePPLwallet, handlePPDwallet } = UserProfileEl()



$:{
    storeSender.set($default_Wallet)
    storeReceiver.set($pplWallet)
    onMount(async()=>{
        handleDefaultwallet()
        handleUSDTwallet()
        handlePPFwallet()
        handlePPLwallet()
        handlePPDwallet()
    })
}

$:{
    if ($storeSender.coin_name === "USDT") {
        storeReceiver.set($pplWallet)
    } else if ($storeSender.coin_name === "PPL") {
        storeReceiver.set($ppdWallet)
    } else if ($storeSender.coin_name === "PPE") {
        storeReceiver.set($usdt_Wallet)
    } else if ($storeSender.coin_name === "PPD") {
        storeReceiver.set($usdt_Wallet)
    }
} 

let coins

$:{
    coins =[{
        id: 1,
        coin_name: $usdt_Wallet.coin_name,
        coin_fname: $usdt_Wallet.coin_fname,
        coin_image: $usdt_Wallet.coin_image,
        balance: $usdt_Wallet.balance,
        select: $IsSender ? ($usdt_Wallet.coin_name === $storeSender.coin_name) : ($usdt_Wallet.coin_name === $storeReceiver.coin_name)
    },
    {
        id: 2,
        coin_name: $ppdWallet.coin_name,
        coin_fname: $ppdWallet.coin_fname,
        coin_image: $ppdWallet.coin_image,
        balance: $ppdWallet.balance,       
         select: $IsSender ? ($ppdWallet.coin_name === $storeSender.coin_name) : ($ppdWallet.coin_name === $storeReceiver.coin_name)
    },
    {
        id: 4,
        coin_name: $pplWallet.coin_name,
        coin_fname: $pplWallet.coin_fname,
        coin_image: $pplWallet.coin_image,
        balance: $pplWallet.balance,        
        select: $IsSender ? ($pplWallet.coin_name === $storeSender.coin_name) : ($pplWallet.coin_name === $storeReceiver.coin_name)
    }
]
}


const handleSender = ((e) => {
    if ($checkIsOpen) {
        checkIsOpen.set(false)
    } else {
        if (e === 1) {
            IsSender.set(true)
        } else {
            IsSender.set(false)
        }
        checkIsOpen.set(true)
    }
})

const handleSelectCoin = ((e) => {
    if ($IsSender) {
        storeSender.set(e)
    } else {
        storeReceiver.set(e)
    }
    handleSender()
})

let senderValue = 0
let receiverVAlue = 0
let swappingfee = 0.00001
let SwapLogic

$:{ if(senderValue && $storeSender.coin_name === "PPD" && $storeReceiver.coin_name === "USDT" && senderValue < $storeSender.balance){
    SwapLogic = 1
    receiverVAlue = (senderValue * SwapLogic - swappingfee).toFixed(4)
}
else if(senderValue && $storeSender.coin_name === "USDT" && $storeReceiver.coin_name === "PPD"  && senderValue < $storeSender.balance){
    SwapLogic = 1
    receiverVAlue = (senderValue * 1 - swappingfee).toFixed(4)
}
else if(senderValue && $storeSender.coin_name === "USDT" && $storeReceiver.coin_name === "PPL"  && senderValue < $storeSender.balance){
    SwapLogic = 10
    receiverVAlue = (senderValue *  SwapLogic - swappingfee.toFixed(4))
}
else if(senderValue && $storeSender.coin_name === "PPD" && $storeReceiver.coin_name === "PPL"  && senderValue < $storeSender.balance){
    SwapLogic = 10
    receiverVAlue = (senderValue *  SwapLogic - swappingfee).toFixed(4)
}
else if(senderValue && $storeSender.coin_name === "PPL" && $storeReceiver.coin_name === "USDT"  && senderValue < $storeSender.balance){
    SwapLogic = 0.1
    receiverVAlue = (senderValue *  SwapLogic - swappingfee).toFixed(4)
}
else if(senderValue && $storeSender.coin_name === "PPL" && $storeReceiver.coin_name === "PPD"  && senderValue < $storeSender.balance){
    SwapLogic = 0.1
    receiverVAlue = (senderValue *  SwapLogic - swappingfee).toFixed(4)
}
}

const handleSubmit = (()=>{
    let data = {sentAmount: senderValue, receivedAmount: receiverVAlue, 
        senderCoin: $storeSender.coin_name, receivedCoin: $storeReceiver.coin_name}
        if(senderValue < 10){
            alert("OOPS!!! your input is below the minimum swapping amount")
        }else{
            Swap(data)
        }
})


</script>

<div id="swap" class="sc-kQoPux iSaUST">
    <div class="sc-dkPtRN jScFby scroll-view sc-fbWUsZ eDKSkl" id="swap">
        {#if !$checkIsOpen}
        <div class="sc-bjztik jvmCui">
            <div class="sc-ezbkAF kDuLvp input sc-bTfYFJ dETeez">
                <div class="input-label">
                    <div class="sc-gLEhor dWDgrK label-pre">You Send</div>
                    <div class="label-suf">
                        <button class="min">Min: <span>{$storeSender.coin_name === "PPL" ? 20 : 10 }</span></button>
                        <div class="max  ">Balance: <span>{$storeSender.balance}</span></div>
                    </div>
                </div>
                <div class="input-control">
                    <input type="number" bind:value={senderValue} placeholder="0">
                    <button on:click={()=> senderValue = $storeSender.balance } >Max</button>
                    <button on:click={()=>handleSender(1)} style="background: none; display:flex; margin:5px" class="sc-kHOZwM lkOmCH">
                        <img class="coin-icon" alt="" src={$storeSender.coin_image}>
                        <span style="padding:5px;" class="currency">{$storeSender.coin_name}</span>
                        <span style="padding:7px;">
                            <Icon src={RiSystemArrowRightSLine}  size="18"  color="rgb(255, 255, 255)" className="custom-icon" title="arror" />
                        </span>
                    </button>
                </div>
            </div>

            {#if $default_Wallet.coin_name !== "PPF"}
            <div class="sc-eZKLwX jJQdnO">1 USDT ≈ 1 PPD</div>
            <div class="icon-exchange"><button>
                <Icon src={RiSystemArrowDownSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
            </button>
            </div>
            <div class="sc-ezbkAF kDuLvp input sc-bTfYFJ dETeez">
                <div class="input-label">
                    <div class="sc-gLEhor dWDgrK label-pre">You get Approximately</div>
                    <a href="/transactions/bill/BCD/Swap">Record</a>
                </div>
                <div class="input-control">
                    <input type="number" bind:value={receiverVAlue} placeholder="0" >
                    <button on:click={()=>handleSender(2)} style="background: none; display:flex; margin:5px" class="sc-kHOZwM lkOmCH">
                        <img class="coin-icon" alt="" src={$storeReceiver.coin_image}>
                        <span style="padding:5px;" class="currency">{$storeReceiver.coin_name}</span>
                        <span style="padding:7px;">
                            <Icon src={RiSystemArrowRightSLine}  size="18"  color="rgb(255, 255, 255)" className="custom-icon" title="arror" />
                        </span>
                    </button>
                </div>
            </div>
            <div class="tips">
                <div class="item">Estimated Time* <span> 0.65554Seconds</span></div>
                <div class="item">Swap fee: <span>{swappingfee}</span> USDT</div>
            </div>
            <button on:click={handleSubmit} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal sub-btn">
                <div class="button-inner">Swap Now</div>
            </button>
            {/if}
        </div>
        {:else}
        <div class="sc-eLwHnm eCfWZW">
            <div class="sc-dkPtRN jScFby scroll-view sc-dvQaRk bVVgo currency-list">
                {#each coins as coin (coin.id)}
                {#if (!$IsSender  && $storeSender.coin_name === "USDT" && coin.coin_name !== "USDT") }
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
                                    <span class="amount-str">{coin.balance}.<span class="suffix">0000</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
                {:else if (!$IsSender && $storeSender.coin_name === "PPD" && coin.coin_name !== "PPE")}
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
                                    <span class="amount-str">{coin.balance}.<span class="suffix">0000</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
                {:else if (!$IsSender && $storeSender.coin_name === "PPL" && coin.coin_name !== "PPL")}
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
                                    <span class="amount-str">{coin.balance}.<span class="suffix">0000</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
                {:else if ($IsSender)}
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
                                    <span class="amount-str">{coin.balance}.<span class="suffix">0000</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
                {:else if (!$IsSender && $storeSender.coin_name === "PPE"  && coin.coin_name !== "PPL" && coin.coin_name !== "PPD" )}
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
                                    <span class="amount-str">{coin.balance}.<span class="suffix">0000</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
                {/if}
                {/each}
            </div>
        </div>
        {/if}
    </div>
</div>

<style>
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

@media screen and (min-width: 650px) {
    #swap {
        border-radius: 20px;
        background-color: rgb(30, 32, 36);
        box-sizing: border-box;
        margin: 0 0 20px 0;
        overflow-y: auto;
        touch-action: pan-y;
        overscroll-behavior: contain;
    }
}

.iSaUST #swap {
    padding: 0px;
}

.eDKSkl {
    flex: 1 1 auto;
    padding: 0.625rem 0.625rem 1.875rem;
    position: relative;
}

.eDKSkl {
    flex: 1 1 auto;
    padding: 0.625rem 0.625rem 1.875rem;
    position: relative;
}

.dETeez {
    cursor: pointer;
}

.kDuLvp {
    margin-top: 1rem;
}

.kDuLvp .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 0.75rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
}

.jvmCui .label-pre {
    flex: 1 1 auto;
}

.jvmCui .label-suf {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}

.jvmCui .label-suf .min {
    margin-right: 0.625rem;
}

.jvmCui .label-suf button {
    font-size: 0.75rem;
}

.jvmCui .label-suf .min span {
    color: rgb(255, 255, 255);
}

.jvmCui .label-suf .max span {
    color: rgb(255, 255, 255);
}

.input-control {
    min-height: 3.5rem;
}

.dETeez .input-control {
    height: 4.5rem;
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

.dETeez .input-control input {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0px;
    font-size: 0.9375rem;
}

.kDuLvp .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    outline: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
}

.dETeez .input-control button {
    border-radius: 1rem;
    padding: 0.5rem 1.125rem;
    background-color: rgb(60, 64, 75);
    margin-right: 0.625rem;
}

.dETeez .input-control button {
    border-radius: 1rem;
    padding: 0.5rem 1.125rem;
    background-color: rgb(60, 64, 75);
    margin-right: 0.625rem;
}

.dETeez .coin-icon {
    width: 1.875rem;
    height: 1.875rem;
    display: inline-block;
    vertical-align: top;
}

.dETeez .currency {
    flex: 1 1 auto;
    margin-left: 0.9375rem;
    font-size: 1rem;
    font-weight: 800;
    color: rgb(245, 246, 247);
}

.jJQdnO {
    margin: 0px 1rem 0.375rem;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
}

.jvmCui .icon-exchange {
    text-align: center;
    margin: 0px auto -0.75rem;
}

.kDuLvp {
    margin-top: 1rem;
}

.dETeez {
    cursor: pointer;
}

.kDuLvp .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 0.75rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
    font-size: 12px;
}

.jvmCui .label-pre {
    flex: 1 1 auto;
}

.jvmCui .tips {
    margin: 1.25rem 0px 0.625rem;
    padding: 0.5rem 1.25rem;
    border-radius: 1.25rem;
    border: 1px solid rgba(45, 48, 53, 0.5);
    font-size: 12px;
}

.jvmCui .tips span {
    color: rgb(255, 255, 255);
}

.jvmCui .tips span {
    color: rgb(255, 255, 255);
}
</style>
