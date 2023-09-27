<script>
import { goto } from "$app/navigation";
import Icon from 'svelte-icons-pack/Icon.svelte';
import FaSolidKeyboard from "svelte-icons-pack/fa/FaSolidKeyboard";
import BiStats from "svelte-icons-pack/bi/BiStats";
import RiSystemArrowUpSLine from "svelte-icons-pack/ri/RiSystemArrowUpSLine";
import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
import AiFillQuestionCircle from "svelte-icons-pack/ai/AiFillQuestionCircle";
import Hotkeys from './hotkeys.svelte';
import Livestat from './livestat.svelte';
import Help from './help.svelte';
import Crashview from './crashview.svelte';
import Trend from '$lib/crashgame/components/trends/index.svelte';
import { loadingCrash,handleHasbet,game_id,  crashIsAlive, hasCrashed, crashRunning,winningEl, handleHasbet_amount} from "$lib/crashgame/store"
import {default_Wallet } from "$lib/store/coins"
import { useCrashBet,useCrashCashout } from "$lib/crashgame/crashHook";
import { profileStore,handleisLoggin } from "$lib/store/profile"
const { crashBet, isLoading } = useCrashBet()
const { cashout } = useCrashCashout()
export let isClassic
import { error_msg  } from "$lib/crashgame/store"

import {
    browser
} from '$app/environment'
    import Trendball from "$lib/crashgame/components/trendball/Trendball.svelte";
const id = browser && JSON.parse(localStorage.getItem('user'))
let getBet_amount;


$:{
    getBet_amount = browser && JSON.parse(localStorage.getItem('user_bet_amount')) 
    if(getBet_amount){
        handleHasbet_amount.set(getBet_amount.bet_amount)
        handleHasbet.set(true)
    }
}

let ishotKey = false
const handleHotkeyEnable = (()=>{
    if(ishotKey){
        ishotKey = false
    }else{
        ishotKey = true
    }
})

let isAdvance = false
const handleAdvancebg = ((q)=>{
    if(q === 1){
        isAdvance = false
    }else{
        isAdvance = true
    }
})

let isStat = false
const handleStatistics = (()=>{
    if(isStat){
        isStat = false
    }else{
        isStat = true
    }
})

let isHelp = false
const handleHelp = ()=>{
    if(isHelp){
        isHelp = false
    }else{
        isHelp = true
    }
}


let isTrend = false
const handleTrends = (()=>{
    if(isTrend){
        isTrend = false
    }else{
        isTrend = true
    }
})

let bet_amount = 10

const handleHalf = ((e)=>{
    if(bet_amount > 0){
        if(e === 1){
        bet_amount = (bet_amount / 2).toFixed(2)
        }else{
            bet_amount = (bet_amount * 2).toFixed(2)
        }
    }
})

let isRange = false
const ranging = (()=>{
    if(isRange){
        isRange = false
    }else{
        isRange = true
    }
})

const handleCrashBet = (()=>{
    if($handleisLoggin){
        if(parseInt(bet_amount) > parseInt($default_Wallet.balance)){
            error_msg.set("insufficient balance")
         setTimeout(()=>{
            error_msg.set('')
        },4000)
        }else{
            const data = {
            username: $profileStore.username,
            user_img: $profileStore.profile_image,
            game_id: $game_id,
            bet_amount, bet_token_img: $default_Wallet.coin_image, 
            bet_token_name: $default_Wallet.coin_name ,
            chance: 0
        }
            crashBet(data)
        }
    }else{
        error_msg.set('You are not Logged in')
        setTimeout(()=>{
            error_msg.set('')
        },4000)
    }
})

const handleCashout = (()=>{
    if($handleisLoggin){
        let data = {
        cashout_at:($crashRunning * $handleHasbet_amount).toFixed(2),
        username: $profileStore.username,
        user_img: $profileStore.profile_image,
        game_id: $game_id,
        profit: (($crashRunning * $handleHasbet_amount).toFixed(2) - bet_amount).toFixed(2),
        bet_token_img: $default_Wallet.coin_image, 
        bet_token_name: $default_Wallet.coin_name,
        crash: $crashRunning,
    }
    let win = ($crashRunning * $handleHasbet_amount).toFixed(2) - bet_amount
    winningEl.set(win)
    cashout(data)
    }else{
        error_msg.set('You are not Logged in')
        setTimeout(()=>{
            error_msg.set('')
        },4000)
    }
})

</script>

<div class="game-main">
    {#if ishotKey }
        <Hotkeys on:close={handleHotkeyEnable} />
    {/if}
    {#if isStat}
        <Livestat on:close={handleStatistics} />
    {/if}
    {#if isHelp}
        <Help on:close={handleHelp} />
    {/if}

    {#if isTrend}
        <Trend on:close={handleTrends} />
    {/if}


 {#if $error_msg}
    <div class="error-message">
        <div class="hTTvsjh"> 
            <div>{$error_msg}</div>
        </div>
    </div>
 {/if}   


    <div id="crash-control-0" class="sc-jNHqnW bqxYHQ game-control style1">

        <div class="sc-iwjdpV ikWSlH radio game-control-switch">
            <button on:click={()=>handleAdvancebg(1)} class={`${!isAdvance &&  "is-active"}`} >
                <div class="label">Manual</div>
            </button>
            <button on:click={()=>handleAdvancebg(2)} class={`${isAdvance && "is-active"}`} >
                <div class="label">Advanced</div>
            </button>
        </div>

        {#if isClassic}
        <div class="game-control-panel">
            <div class="sc-lVTEl hjMJHh">
                {#if $crashIsAlive && !$handleHasbet}
                    <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big sc-cdJjGe jfUTnA">
                        <div class="button-inner">
                            <div>Bet</div>
                            <div class="sub-text">(Next round)</div>
                        </div>
                    </button>
                {/if}
                {#if $crashIsAlive && $handleHasbet}
                <button on:click={handleCashout} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big sc-cdJjGe jfUTnA">
                    <div class="button-inner">
                        <div>{($crashRunning * $handleHasbet_amount).toFixed(2)}</div>
                        <div class="sub-text">cashout</div>
                    </div>
                </button>
            {/if}
            {#if $loadingCrash && !id}
                <button on:click={()=> handleCrashBet()} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big sc-cdJjGe jfUTnA">
                    <div class="button-inner">
                        <div>Bet</div>
                    </div>
                </button>
                {/if}
                {#if $loadingCrash && id}
                    <button disabled={$handleHasbet} on:click={handleCrashBet} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big sc-cdJjGe jfUTnA">
                        {#if isLoading}
                            <div class="button-inner">
                                <div>Loading...</div>
                            </div>
                            {:else if $handleHasbet}
                            <div class="button-inner">
                                <div>Game Loading...</div>
                            </div>
                        {:else}
                            <div class="button-inner">
                                <div>Bet</div>
                            </div>
                        {/if}
                    </button>
                {/if}
                {#if $hasCrashed}
                    <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big sc-cdJjGe jfUTnA">
                        <div class="button-inner">
                            <div>Bet</div>
                            <div class="sub-text">(Next round)</div>
                        </div>
                    </button>
                {/if}
 
                <div class="forms">
                    <div class="sc-ezbkAF gcQjQT input sc-fvxzrP gOLODp sc-eqUgKp hLcsYm game-coininput">
                        <div class="input-label">
                            <div class="sc-bhnkmi ICvMh label">
                                <div>Amount</div>
                                <div class="max-profit">
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                        <use xlink:href="#icon_Inform"></use>
                                    </svg>
                                    <div class="tip">
                                        <span class="tit">Max Profit:&nbsp;</span>
                                        <div class="sc-Galmp erPQzq coin notranslate">
                                            <div class="amount">
                                                <span class="amount-str">0.20600898</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="label-amount">1 USD</div>
                        </div>
                        {#if !id}
                            <div class="input-control">
                                <input type="text" bind:value={bet_amount}>
                                <img class="coin-icon" alt="" src="https://www.linkpicture.com/q/ppf_logo.png">
                                <div class="sc-kDTinF bswIvI button-group">
                                    <button  on:click={()=>handleHalf(1)}>/2</button>
                                    <button  on:click={()=>handleHalf(2)}>x2</button>
                                    <button class="sc-ywFzA dxoLcn">
                                        <Icon src={RiSystemArrowUpSLine}  size="80"  color="rgba(153, 164, 176, 0.6)"  title="arror" />
                                        <Icon src={RiSystemArrowDownSLine}  size="80"  color="rgba(153, 164, 176, 0.6)"  title="arror" />
                                    </button>
                                </div>
                            </div>
                            {:else}
                            <div class="input-control">
                                <input type="text" bind:value={bet_amount} placeholder="10">
                                <img class="coin-icon" alt="" src={$default_Wallet.coin_image}>
                                <div class="sc-kDTinF bswIvI button-group">
                                    <button on:click={()=>handleHalf(1)}>/2</button>
                                    <button  on:click={()=>handleHalf(2)}>x2</button>
                                    {#if isRange}
                                        <div class="fix-layer" style="opacity: 1; transform: none;">
                                            <button class="">Min</button>
                                            <div class="sc-kLwhqv eOA-dmL slider">
                                                <div class="slider-after" style="transform: scaleX(0);"></div>
                                                <div class="slider-handler-wrap" style="transform: translateX(0%);">
                                                    <button class="slider-handler"></button>
                                                </div>
                                                <div class="slider-before" style="transform: scaleX(1);"></div>
                                            </div>
                                            <button class="active">Max</button>
                                        </div>
                                    {/if}
                                    <button on:click={ranging} class="sc-ywFzA dxoLcn">
                                        <Icon src={RiSystemArrowUpSLine}  size="80"  color="rgba(153, 164, 176, 0.6)"  title="arror" />
                                        <Icon src={RiSystemArrowDownSLine}  size="80"  color="rgba(153, 164, 176, 0.6)"  title="arror" />
                                    </button>
                                </div>
                            </div>
                        {/if}

                    </div>
                    <div class="sc-ezbkAF hzTJOu input sc-kMyqmI gcFpfw">
                        <div class="input-label">
                            <div class="chance-title">
                                <div class="auto-title">Auto cash out</div>
                                <div>Chance&nbsp;&nbsp;<span class="chance-num">0.99%</span>
                                </div>
                            </div>
                        </div>
                        <div class="input-control">
                            <input type="text" value="100.00">
                            <div class="payout-txt">×</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {:else}
       <Trendball />
        {/if}

    </div>

    <Crashview on:closeTrend={handleTrends}  />

    <div class="game-actions">
        <button on:click={handleHotkeyEnable} class="action-item  ">
            <Icon src={FaSolidKeyboard}  size="18"  color="rgb(153, 164, 176)" className="custom-icon" title="arror" />
        </button>
        <button on:click={handleStatistics} class="action-item  ">
            <Icon src={BiStats}  size="18"  color="rgb(153, 164, 176)" className="custom-icon" title="arror" />
        </button>
        <button on:click={handleHelp} class="action-item  ">
            <Icon src={AiFillQuestionCircle}  size="18"  color="rgb(153, 164, 176)" className="custom-icon" title="arror" />
        </button>
    </div>
</div>

<style>
 
 .fix-layer {
    position: absolute;
    right: 0px;
    top: 2.875rem;
    z-index: 2;
    touch-action: pan-x;
    width: 200px;
    height: 2.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 0.625rem;
    background-color: rgb(33, 35, 40);
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.15) 1px 0px 7px 0px;
}
 .fix-layer > button {
    height: 100%;
    width: 2.5rem;
    flex: 0 0 auto;
    font-size: 0.75rem;
    background-color: rgba(60, 64, 74, 0.5);
}
.eOA-dmL .slider-after {
    background-color: rgba(216, 222, 227, 0.4);
    transform-origin: left center;
}
.fCSgTW .fix-layer .slider {
    flex: 1 1 0%;
    height: 100%;
}
.eOA-dmL {
    position: relative;
    display: flex;
    height: 0.875rem;
    overflow: hidden;
    box-sizing: content-box;
    padding: 0px 0.8125rem;
    cursor: pointer;
}
.fix-layer > button.active {
    color: rgb(245, 246, 247);
    font-weight: 600;
    background-color: rgb(60, 64, 74);
}
 .fix-layer > button {
    height: 100%;
    width: 2.5rem;
    flex: 0 0 auto;
    font-size: 0.75rem;
    background-color: rgba(60, 64, 74, 0.5);
}
.fCSgTW .fix-layer .slider-after {
    width: 86%;
    left: 7%;
    height: 0.5rem;
    margin-top: -0.25rem;
    border-radius: 0.25rem;
    background-color: rgb(23, 24, 27);
    transform: scaleX(1) !important;
}
.eOA-dmL .slider-after {
    height: 2px;
    width: 98%;
    position: absolute;
    left: 1%;
    top: 50%;
    margin-top: -1px;
}
.eOA-dmL .slider-handler-wrap {
    flex: 1 1 0%;
    position: relative;
    z-index: 2;
}
.fCSgTW .fix-layer .slider-handler {
    height: 100%;
    position: relative;
    background: none;
}
.eOA-dmL .slider-handler {
    display: block;
    width: 1.5rem;
    height: 100%;
    border-radius: 0.4375rem;
    transform: translate(-50%, 0px);
    background-color: rgb(216, 216, 216);
    touch-action: pan-y;
}
.fCSgTW .fix-layer .slider-handler::after {
    content: "";
    position: absolute;
    top: 20%;
    bottom: 20%;
    left: 0.3125rem;
    width: 0.75rem;
    border-radius: 0.375rem;
    background-color: rgb(204, 207, 217);
}

</style>
