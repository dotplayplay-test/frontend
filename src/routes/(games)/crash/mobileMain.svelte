<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowUpSLine from "svelte-icons-pack/ri/RiSystemArrowUpSLine";
import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import AiFillQuestionCircle from "svelte-icons-pack/ai/AiFillQuestionCircle";
import BiStats from "svelte-icons-pack/bi/BiStats";
import Layout from '$lib/crashgame/components/history/layout.svelte';
import { crash_historyEl } from "$lib/crashgame/store"
import Crashlayout from '$lib/crashgame/screens/Crashlayout.svelte';
import Trend from '$lib/crashgame/components/trends/index.svelte';
import Allplayers from '$lib/crashgame/components/allPlayers/allplayers.svelte';
import { useAllplayer } from "$lib/crashgame/fetchallPlayers"
import MobileAllbet from './mobile-allbet.svelte';
import MobileMybet from './mobile-mybet.svelte';
import axios from "axios"
import { goto } from "$app/navigation";
import { loadingCrash,handleHasbet,game_id,  crashIsAlive, hasCrashed, crashRunning,winningEl, handleHasbet_amount} from "$lib/crashgame/store"
import {default_Wallet } from "$lib/store/coins";
import { handleAuthToken } from "$lib/store/routes";
import { error_msg  } from "$lib/crashgame/store";
import { browser } from '$app/environment'
import { profileStore,handleisLoggin } from "$lib/store/profile";
const id = browser && JSON.parse(localStorage.getItem('user'))
import { ServerURl } from "$lib/backendUrl"
import MobileTrenballs from '$lib/crashgame/components/trendball/mobileTrenballs.svelte';
const URL = ServerURl()

import Livestat from './livestat.svelte';
import Help from './help.svelte';

export let isClassic
const { getAllPlayers } = useAllplayer()
export let hide_trends 
let isAdvance = false
const handleAdvancebg = ((q)=>{
    if(q === 1){
        isAdvance = false
    }else{
        isAdvance = true
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


let isStat = false
const handleStatistics = (()=>{
    isStat = !isStat
})

let allbet = false

const handleAllbet = ((e)=>{
    if(allbet){
        allbet = false
    }else{
        allbet = true
        getAllPlayers(e)
    }
})


let isBet = false
let isHistory = false
let isContent = false
let is_all_bet = true
const handleRoute = ((w)=>{
    if(w === 1){
        isBet = true
        isHistory = false
        isContent = false
        is_all_bet = false
    }
    else if(w === 2){
        isBet = false
        isHistory = true
        isContent = false
        is_all_bet = false
    }
    else if(w === 3){
        isBet = false
        isHistory = false
        isContent = true 
        is_all_bet = false
    }
    else{
        isBet = false
        isHistory = false
        isContent = false 
        is_all_bet = true
    }
})

let classic = false
let ishotKey = false
const handleHotkeyEnable = (()=>{
    if(ishotKey){
        ishotKey = false
    }else{
        ishotKey = true
    }
})


let isAdvancer = false
const handleAdvancebgr = ((q)=>{
    if(q === 1){
        isAdvance = false
    }else{
        isAdvance = true
    }
})

let isStaet = false
const handleStatistices = (()=>{
    if(isStat){
        isStat = false
    }else{
        isStat = true
    }
})

let isHelpe = false
const handleHelep = ()=>{
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
if($default_Wallet.coin_name === "USDT"){
    bet_amount = (0.10).toFixed(4)
}else{
    bet_amount = (100).toFixed(4)
}

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

let is_loading = false
$:{
    if(!$handleHasbet){
        is_loading = false
    }
}

let auto_bet = (100).toFixed(2)
let bet_amountEl =  0

let chance;
let x;
let l;
$:{
    if(auto_bet < 1){
        auto_bet = 1.01
    }
    x = 100 / auto_bet
    l = x / 100
    chance =(x - l).toFixed(2)
    if(chance < 0){
       chance = (0.01).toFixed(2)
    }
}

let bet_price;
$: bet_price = ($crashRunning * parseFloat(bet_amountEl)).toFixed(2)
const handleCrashBet = (async()=>{
    bet_amountEl = parseFloat(bet_amount) 
    is_loading = true
    if($handleisLoggin){
        if(parseFloat(bet_amountEl) > parseFloat($default_Wallet.balance)){
            error_msg.set("insufficient balance")
            is_loading = false
         setTimeout(()=>{
            error_msg.set('')
        },4000)
        }
        else if( parseFloat(bet_amountEl) > 5000 && $default_Wallet.coin_name === "USDT"){
            error_msg.set("Maximum bet amount for USDT is 5,000")
            is_loading = false
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
        else if( parseFloat(bet_amountEl) > 10000 && $default_Wallet.coin_name === "PPF"){
            error_msg.set("Maximum bet amount for PPF is 10,000")
            is_loading = false
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
        else if( parseFloat(bet_amountEl) < 100 && $default_Wallet.coin_name === "PPF"){
            error_msg.set("Minimum bet amount for PPF is 100")
            is_loading = false
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
        else if( parseFloat(bet_amountEl) < 0.10 && $default_Wallet.coin_name === "USDT"){
            error_msg.set("Minimum bet amount for USDT is 0.20")
            is_loading = false
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
        else{
            const data = {
            username: $profileStore.username,
            user_img: $profileStore.profile_image,
            game_id: $game_id,
            bet_amount : parseFloat(parseFloat(bet_amountEl)),
            auto_cashout: auto_bet,
            time: new Date(),
            bet_token_img: $default_Wallet.coin_image, 
            bet_token_name: $default_Wallet.coin_name ,
            chance: "0"
        }
        axios.post(`${URL}/api/user/crash-game/bet`, {
            data
        },{
            headers: {
            "Content-type": "application/json",
            'Authorization': `Bearer ${$handleAuthToken}`
          }
        })
        .then((response)=>{
        let result = response.data
         let wllet = {
          coin_name: result.bet_token_name,
          coin_image:  result.bet_token_img,
          balance:  result.current_amount,
        }
        default_Wallet.set(wllet)
         handleHasbet.set(true)
        })
        .catch((error)=>{
            is_loading = false
            console.log(error)
        })
    }
    }else{
        error_msg.set('You are not Logged in')
        setTimeout(()=>{
            error_msg.set('')
            goto("/login")
        },4000)
        is_loading = false
    }
})

let isLoadBet = false
let loop;
const handleLoadBet = (()=>{
    if(!isLoadBet){
        loop = setInterval(()=>{
        if($loadingCrash){
            setTimeout(()=>{
                handleCrashBet()
            },100)
            clearInterval(loop)
            isLoadBet = false
        }else{
            isLoadBet = true
        }
    },10)
    }else if (isLoadBet){
        isLoadBet = false
        clearInterval(loop)
    }
})

const handleCashout = (()=>{
    if($handleisLoggin){
    let houseEgde =  (1 / 100) * (  parseFloat(bet_price)  / 1)
    let winning_amount = parseFloat(bet_price) - houseEgde
    let data = {
        cashout_at : winning_amount,
        username: $profileStore.username,
        user_img: $profileStore.profile_image,
        game_id: $game_id,
        profit:  parseFloat(winning_amount) - parseFloat(bet_amountEl),
        bet_token_img: $default_Wallet.coin_image, 
        bet_token_name: $default_Wallet.coin_name,
        crash: $crashRunning
    }
    axios.post(`${URL}/api/user/crash-game/cashout`, {
        data
    },{
        headers: {
        "Content-type": "application/json",
        'Authorization': `Bearer ${$handleAuthToken}`
    }
    })
    .then((response)=>{
    let result = response.data
     let wllet = {
        coin_name: result.bet_token_name,
        coin_image:  result.bet_token_img,
        balance:  parseFloat(result.balance).toFixed(4)
    }
    default_Wallet.set(wllet)
     handleHasbet.set(false)
})
    }else{
        error_msg.set('You are not Logged in')
        setTimeout(()=>{
            error_msg.set('')
        },2000)
    }
})


</script>

{#if allbet}
    <Allplayers  on:close={handleAllbet} />
{/if}

{#if isStat}
    <Livestat on:close={handleStatistics} />
{/if}
{#if isHelp}
    <Help on:close={handleHelp} />
{/if}


{#if $error_msg}
<div style="background-color:crimson;" class="error-message">
    <div class="hTTvsjh"> 
        <div>{$error_msg}</div>
    </div>
</div>
{/if}

<div class="game-area">
    <div class="game-main">
        <div class="game-view">
            <div class="sc-eBhrFy jrzKwG game-recent sc-jLuXOi gfnnAw">
                <div class="recent-list-wrap">
                    <div class="recent-list" style="transform: translate(0%, 0px);">
                        {#if $crash_historyEl.length !== 0}
                        {#each $crash_historyEl as his}
                            <button on:click={()=> handleAllbet(his)} class={`game-item ${his.crash_point >= 10 && "is-moon"} ${his.crash_point > 2 && his.crash_point < 10 && "is-doubble"} `} style="width: 30%;">
                                <div class="issus">{his.game_id}</div>
                                <div>{(parseFloat(his.crash_point)).toFixed(2)}x</div>
                            </button>
                        {/each}
                        {:else}
                            <div class="empty-item">
                                <p>Game results will be displayed here.</p>
                            </div>
                        {/if}
                    </div>
                </div>
            </div>
            {#if hide_trends}
                <Trend />
            {/if}

            <div class="sc-faIbUi faJsUu game-box sc-fDZUdJ jvaryA">
                <div class="sc-kexyCK gUytcA house-edge">
                    <span>House Edge 1%</span>
                </div>
                <div class="sc-jNHgKk deLgbW">
                    <Crashlayout />
                </div>
                <svg class="box-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 996 46"><defs>
                    <linearGradient id="gcardBg" x1="50%" x2="50%" y1="0%" y2="100%">
                        <stop offset="0%" stop-color="#31343C"></stop><stop offset="100%" stop-color="#1E2024" stop-opacity="0"></stop>
                    </linearGradient>
                </defs>
                <g opacity=".899">
                    <path fill="url(#gcardBg)" fill-rule="evenodd" d="M0 0h996L892 46H96z" opacity=".598" transform="rotate(-180 498 23)"></path>
                </g>
            </div>
        </div>
        <div id="crash-control-0" class="sc-hCwLRM jcwJKv game-control style-mobile">
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
                <div class="sc-jcEtbA eRjsxw">
                    {#if $crashIsAlive && !$handleHasbet}
                    <button on:click={handleLoadBet} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big sc-fBNLhH dtXZTz">
                        <div class="button-inner">
                            <div>{isLoadBet ? "Loading..." : "Bet" }</div>
                            <div class="sub-text">{isLoadBet ? "Cancel" : "(Next round)"}</div>
                        </div>
                    </button>
                    {/if}
                    {#if $crashIsAlive && $handleHasbet}
                    <button on:click={handleCashout} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big sc-fBNLhH dtXZTz">
                        <div class="button-inner">
                            <div>{($crashRunning * bet_amountEl).toFixed(2)}</div>
                            <div class="sub-text">cashout</div>
                        </div>
                    </button>
                    {/if}
                {#if $loadingCrash && !$handleisLoggin}
                    <button  on:click={()=> handleCrashBet()} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big sc-fBNLhH dtXZTz">
                        <div class="button-inner">
                            <div>Bet</div>
                        </div>
                    </button>
                {/if}
                {#if $loadingCrash && $handleisLoggin}
                <button disabled={is_loading} on:click={handleCrashBet} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big sc-fBNLhH dtXZTz">
                     {#if $handleHasbet}
                        <div class="button-inner">
                            <div>Betting...</div>
                        </div>
                    {:else}
                        <div class="button-inner">
                            <div>{is_loading ? "Loading..." : "Bet"}</div>
                        </div>
                    {/if}
                </button>
            {/if}
            {#if $hasCrashed}
                <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big sc-fBNLhH dtXZTz">
                    <div class="button-inner">
                        <div>Bet</div>
                        <div class="sub-text">(Next round)</div>
                    </div>
                </button>
            {/if}
                    <div class="forms">
                        <div class="sc-ezbkAF gcQjQT input sc-fvxzrP gOLODp sc-hDzdEj dcPZTa game-coininput">
                            <div class="input-label">
                                <div class="sc-lepLyc gqMxJF label">
                                    <div>Amount</div>
                                    <div class="max-profit">
                                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                            <use xlink:href="#icon_Inform"></use>
                                        </svg>
                                        <!-- <div class="tip">
                                            <span class="tit">Max Profit:&nbsp;</span>
                                            <div class="sc-Galmp erPQzq coin notranslate">
                                                <div class="amount">
                                                    <span class="amount-str">32659.7964</span>
                                                </div>
                                            </div>
                                        </div> -->
                                    </div>
                                </div>
                                <div class="label-amount">0 USD</div>
                            </div>
                            <div class="input-control">
                                <input type="number" bind:value={bet_amount}>
                                <img class="coin-icon" alt="" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png">
                                <div class="sc-kDTinF bswIvI button-group">
                                    <button on:click={()=>handleHalf(1)}>/2</button>
                                    <button on:click={()=>handleHalf(2)}>x2</button>
                                    <button class="sc-lcdCCa xtnse">
                                        <Icon src={RiSystemArrowUpSLine}  size="17"  color="rgba(153, 164, 176, 0.6)"  />
                                        <Icon src={RiSystemArrowDownSLine}  size="17"  color="rgba(153, 164, 176, 0.6)"  />
                                    </button>
                                </div>
                            </div>
                        </div>
                    {#if !id}
                    <div class="sc-ezbkAF hzTJOu input sc-iKMXQg gShYvD">
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
                    {:else}
                        <div class="sc-ezbkAF hzTJOu input sc-eBHJIF MycAI">
                            <div class="input-label">
                                <div class="chance-title">
                                    <div class="auto-title">Auto cash out</div>
                                    <div>Chance&nbsp;&nbsp;
                                        <span class="chance-num">{chance}%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="input-control">
                                <input type="text"  bind:value={auto_bet}>
                                <div class="payout-txt">×</div>
                            </div>
                        </div>
                    {/if}
                    </div>
                </div>
            </div>
        {:else}
            <MobileTrenballs />
        {/if}
 
        </div>
        <div class="game-actions">
            <button on:click={handleStatistics} class="action-item  ">
                <Icon src={BiStats}  size="18"  color="rgb(153, 164, 176)" className="custom-icon" title="arror" />
            </button>
            <button on:click={handleHelp} class="action-item  ">
                <Icon src={AiFillQuestionCircle}  size="18"  color="rgb(153, 164, 176)" className="custom-icon" title="arror" />
            </button>
        </div>
    </div>
</div>
<div class="sc-cxpSdN kQfmQV tabs game-tabs len-4">
    <div class="tabs-navs">
        <button on:click={()=>handleRoute(5)} class={`tabs-nav ${is_all_bet ? "is-active" : ""} `}>All Bets</button>
        <button on:click={()=>handleRoute(1)} class={`tabs-nav ${isBet ? "is-active" : ""} `}>My Bets</button>
        <button on:click={()=>handleRoute(2)} class={`tabs-nav ${isHistory ? "is-active" : ""} `}>History</button>
        <button on:click={()=>handleRoute(3)} class={`tabs-nav ${isContent ? "is-active" : ""} `}>Contest</button>
        {#if is_all_bet}
            <div class="bg is-reverse" style={`${"left: 0%; right: 75%;"}`}></div>
            {:else if isBet}
            <div class="bg is-reverse" style={`${"left: 25%; right: 50%;"}`}></div>
            {:else if isHistory}
            <div class="bg is-reverse" style={`${"left: 50%; right: 25%;"}`}></div>
            {:else if isContent}
            <div class="bg is-reverse" style={`${"left: 75%; right: 0%;"}`}></div>
        {/if}
    </div>
{#if is_all_bet}
<MobileAllbet />
{:else if isBet}
<MobileMybet />
{:else if isHistory}
<Layout />
{/if}

<div class="sc-knKHOI cFxmZX">
    <div class="intro-title">
        <p>Crash</p>
        <div class="intro-tags">
            <p>Multiplayer</p>
            <p>Our Best Games</p>
            <p>BC Originals</p>
        </div>
    </div>
    <div class="description">CRASH is an online multiplayer blockchain guessing game that made as an increasing curve that may crash at any time.</div>
    <button class="intro-detail">
        Details
        <Icon src={RiSystemArrowRightSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
    </button>
</div>

</div>

<style>
 .gAiddS {
    flex-basis: 30%;
    -webkit-box-flex: 1;
    flex-grow: 1;
    margin-top: 1.5rem;
    margin-right: 0.625rem;
    position: relative;
}
.gAiddS {
    flex-basis: 100%;
    margin-top: 1rem;
    margin-right: 0px;
}

.gAiddS {
    flex-basis: 30%;
    -webkit-box-flex: 1;
    flex-grow: 1;
    margin-top: 1.5rem;
    margin-right: 0.625rem;
    position: relative;
    font-size: 13px;
}

.cFxmZX {
    width: 100%;
    border-radius: 1.25rem;
    background-color: rgb(30, 32, 36);
    padding: 1.5rem 1.5rem 2rem;
    margin-top: 2rem;
}

.cFxmZX {
    margin: 1.25rem 0px 0px;
    width: auto;
    padding: 1rem 0.75rem 1.5rem;
}
.cFxmZX .intro-title {
    flex-wrap: wrap;
    height: auto;
}
.cFxmZX .intro-title {
    min-height: 5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.cFxmZX .intro-title > p {
    width: 100%;
    margin: 0px 0px 1rem;
    line-height: 1.25rem;
    padding: 0px 0.625rem;
}
.cFxmZX .intro-title > p {
    font-size: 1rem;
    color: rgb(245, 246, 247);
    font-weight: 600;
    margin: 0px;
    white-space: nowrap;
}
.cFxmZX .intro-title .intro-tags {
    margin-left: 0px;
    flex-wrap: wrap;
}
.cFxmZX .intro-title .intro-tags > p {
    margin: 0px 0.3125rem 0.3125rem 0px;
    white-space: nowrap;
    padding: 0.375rem 0.875rem;
    line-height: 1.25rem;
    height: 2rem;
}
.cFxmZX .intro-title .intro-tags > p {
    margin:  0px 3px;
    padding: 5px 10px;
    border-radius: 1.125rem;
    background-color: rgb(43, 47, 54);
}
.cFxmZX .intro-title .intro-tags {
    margin-left: 0px;
    flex-wrap: wrap;
}
.cFxmZX .intro-title .intro-tags {
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
}

.cFxmZX .description {
    margin-top: 0.625rem;
    line-height: 1.25rem;
    font-size: 13px;
    padding-left: 0.25rem;
}

.cFxmZX .intro-detail {
    height: 2rem;
    margin-top: 1.125rem;
    color: rgb(208, 208, 208);
}
.cFxmZX .intro-detail {
    width: 6.75rem;
    height: 2.5rem;
    margin-top: 2rem;
    border-radius: 1.25rem;
    background-color: rgba(49, 52, 60, 0.6);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}

.kQfmQV .tabs-navs {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 2.25rem;
    position: relative;
    border-radius: 1.125rem;
    background-color: rgba(49, 52, 60, 0.7);
}
.game-tabs .tabs-navs {
    margin-bottom: 0.75rem;
    margin-left: 0.625rem;
    display: inline-flex;
}
.game-tabs {
    margin-top: 2.5rem;
}
.game-tabs {
    position: relative;
    padding-top: 3rem;
}
.game-tabs .tabs-navs {
    position: absolute;
    left: 50%;
    top: 0px;
    transform: translateX(-50%);
    margin: 0px;
}
.game-tabs .tabs-navs .tabs-nav {
    width: 5.625rem;
}
.kQfmQV .tabs-nav.is-active {
    color: rgb(245, 246, 247);
    font-weight: bold;
}
.kQfmQV .tabs-nav {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 0%;
    height: 100%;
    cursor: pointer;
    white-space: nowrap;
    width: 100%;
    z-index: 1;
}

.game-main.game-main {
    min-height: auto;
}
.game-main {
    position: relative;
    border-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
}
.game-view {
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
}
.jrzKwG {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 2.75rem;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
}

.gfnnAw .recent-list-wrap {
    background-color: rgba(49, 52, 60, 0.4);
    border-radius: 1.375rem;
    padding: 0px 0.625rem;
    margin: 0px 0.625rem;
}
.jrzKwG .recent-list-wrap {
    margin: 0px 0.625rem;
}
.jrzKwG .recent-list-wrap {
    flex: 1 1 auto;
    height: 100%;
    margin: 0px 1.5rem;
    overflow: hidden;
    position: relative;
    border-radius: 1.375rem;
}
.jrzKwG .recent-list {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
}
.gfnnAw .game-item.is-doubble {
    color: rgb(67, 179, 9);
}
.gfnnAw .game-item.is-doubble {
    color: rgb(67, 179, 9);
}
.gfnnAw .game-item {
    display: flex;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    line-height: 0.875rem;
    background-color: transparent;
    position: relative;
    padding-left: 1.4375rem;
    color: rgb(237, 99, 0);
    text-align: left;
    align-items: flex-start;
    height: 100%;
}

.gfnnAw .game-item {
    display: flex;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    line-height: 0.875rem;
    background-color: transparent;
    position: relative;
    padding-left: 1.4375rem;
    color: rgb(237, 99, 0);
    text-align: left;
    align-items: flex-start;
    height: 100%;
}
.gfnnAw .game-item.is-doubble {
    color: rgb(67, 179, 9);
}
.gfnnAw .game-item.is-moon {
    color: rgb(246, 199, 34);
}

.gfnnAw .game-item::before {
    content: "";
    position: absolute;
    left: 0.125rem;
    top: 50%;
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    transform: translateY(-50%);
    background-color: rgb(237, 99, 0);
}
.gfnnAw .game-item.is-doubble {
    color: rgb(67, 179, 9);
}

.gfnnAw .game-item.is-doubble::before {
    background-color: rgb(67, 179, 9) !important;
}
.gfnnAw .game-item::before {
    width: 0.75rem;
    height: 0.75rem;
}
.gfnnAw .game-item .issus {
    font-size: 1rem;
    font-weight: normal;
    transform: scale(0.7);
    width: 3.125rem;
    transform-origin: left center;
    margin-bottom: 0.125rem;
    color: rgba(153, 164, 176, 0.5);
}
.jvaryA {
    position: relative;
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    padding: 0px 0.625rem 1.875rem;
}
.gUytcA {
    position: absolute;
    z-index: 2;
    right: 1.5rem;
    bottom: 1.25rem;
    font-weight: 500;
    min-width: 8.75rem;
    padding: 0px 1.125rem;
    border-radius: 1.125rem;
    height: 2.25rem;
    line-height: 2.25rem;
    color: rgba(153, 164, 176, 0.6);
    background-color: rgba(49, 52, 60, 0.4);
}
.gUytcA {
    min-width: 6.25rem;
    text-align: center;
    right: 0.875rem;
    bottom: 1rem;
    height: 2.25rem;
    line-height: 2.25rem;
    padding: 0px 0.75rem;
}
.gUytcA span {
    font-size: 0.75rem;
    transform: scale(0.83);
}
.deLgbW::after {
    content: "";
    display: block;
}
.deLgbW {
    position: relative;
    margin-top: 1.875rem;
    margin-bottom: 1.25rem;
}
.faJsUu .box-bg {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: -1px;
    width: 100%;
}
.faJsUu {
    position: relative;
}
.gUytcA {
    min-width: 6.25rem;
    text-align: center;
    right: 0.875rem;
    bottom: 1rem;
    height: 2.25rem;
    line-height: 2.25rem;
    padding: 0px 0.75rem;
}
.jcwJKv.style-mobile {
    flex-direction: column;
}
.jcwJKv {
    display: flex;
}
.jcwJKv.style-mobile .game-control-panel {
    padding: 0px 1.125rem;
}
.jcwJKv .game-control-panel {
    flex: 1 1 0%;
}
.jcwJKv.style-mobile {
    flex-direction: column;
}
.jcwJKv {
    display: flex;
}
.jcwJKv.style-mobile .game-control-switch {
    order: 2;
    margin-top: 1.25rem;
    position: relative;
}
.jcwJKv.style-mobile .game-control-switch::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    height: 1px;
    opacity: 0.3;
    background-color: rgb(49, 52, 60);
}
.jcwJKv.style-mobile .game-control-switch > button.is-active {
    border-bottom-color: rgb(67, 179, 9);
    background-image: linear-gradient(to top, rgba(123, 197, 20, 0.3), rgba(123, 197, 20, 0) 50%);
}
.jcwJKv.style-mobile .game-control-switch > button {
    height: 3rem;
    border-bottom: 2px solid transparent;
}
.jcwJKv.style-mobile .game-control-switch {
    order: 2;
    margin-top: 1.25rem;
    position: relative;
}
.jcwJKv .game-control-switch {
    display: flex;
    flex: 0 0 auto;
}
.jcwJKv.style-mobile .game-control-switch::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    height: 1px;
    opacity: 0.3;
    background-color: rgb(49, 52, 60);
}
.jcwJKv.style-mobile .game-control-switch > button.is-active {
    border-bottom-color: rgb(67, 179, 9);
    background-image: linear-gradient(to top, rgba(123, 197, 20, 0.3), rgba(123, 197, 20, 0) 50%);
}
.jcwJKv.style-mobile .game-control-switch > button {
    height: 3rem;
    border-bottom: 2px solid transparent;
}
.jcwJKv .game-control-switch > button.is-active {
    color: rgb(245, 246, 247);
    font-weight: bold;
}
.jcwJKv .game-control-switch > button {
    flex: 1 1 0%;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
}
.jcwJKv .game-control-switch > button {
    flex: 1 1 0%;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
}
.jcwJKv.style-mobile .game-control-panel {
    padding: 0px 1.125rem;
}
.jcwJKv .game-control-panel {
    flex: 1 1 0%;
}
.jcwJKv.style-mobile .game-control-panel {
    padding: 0px 1.125rem;
}
.eRjsxw .forms {
    margin-bottom: 0px;
}
.eRjsxw .forms .input {
    width: auto;
}
.hzTJOu {
    margin-top: 1rem;
}
.hzTJOu .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 1.125rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
}
.eRjsxw .chance-title {
    display: flex;
    flex: 1 1 0%;
    font-size: 13px;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.eRjsxw .auto-title {
    margin-right: auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.eRjsxw .chance-title .chance-num {
    color: rgb(67, 179, 9);
}
.gcQjQT {
    margin-top: 1rem;
}
.eRjsxw .forms .input {
    width: auto;
}
.gcQjQT .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 1.125rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
}
.gqMxJF {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 1rem;
}
.input-control {
    border-color: transparent;
}
.jcwJKv .input-control {
    background-color: rgba(49, 52, 60, 0.4);
}
.jcwJKv .input-control {
    background-color: rgba(49, 52, 60, 0.4);
}
.gcQjQT .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
}
 .coin-icon {
    order: -1;
    margin-right: 0.3125rem;
    margin-left: -0.625rem;
    width: 1.25rem;
    height: 1.25rem;
}
.input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    opacity: 0.5;
    height: 2.75rem;
    border-radius: 1.5rem;
    padding: 0px 1.375rem;
}
.jcwJKv .input-control .button-group {
    margin-right: -1.125rem;
}
.input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
}
.dcPZTa .button-group {
    width: 8.375rem;
    position: relative;
}
.bswIvI {
    display: flex;
}
.bswIvI > button:first-child {
    margin-left: 0px;
    padding-left: 0.125rem;
    border-top-left-radius: 1.125rem;
    border-bottom-left-radius: 1.125rem;
}
.bswIvI > button {
    height: 2.25rem;
    width: 2.75rem;
    padding: 0px;
    color: rgb(153, 164, 176);
    background: rgb(49, 52, 60);
    margin-left: 1px;
}
.bswIvI > button:last-child {
    padding-right: 0.125rem;
    border-top-right-radius: 1.125rem;
    border-bottom-right-radius: 1.125rem;
}
.bswIvI > button {
    height: 2.25rem;
    width: 2.75rem;
    padding: 0px;
    color: rgb(153, 164, 176);
    background: rgb(49, 52, 60);
    margin-left: 1px;
}

.dtXZTz {
    width: 90%;
    max-width: 19.75rem;
    margin: 1rem auto;
}
.gcQjQT .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 1.125rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
}
.gqMxJF .max-profit {
    position: relative;
    margin-left: 0.1875rem;
    width: 1rem;
    height: 1rem;
}
.xtnse {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
}
.game-actions {
    display: flex;
    order: 10;
    -webkit-box-align: center;
    align-items: center;
    height: 4rem;
    position: relative;
}
.game-actions::before {
    content: "";
    flex: 1 1 0%;
}
.action-item {
    cursor: pointer;
    margin-right: 0.5rem;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
.kQfmQV .tabs-navs .bg {
    border-radius: 1.125rem;
    background-image: linear-gradient(to left, rgb(85, 89, 102), rgb(85, 89, 102), rgb(88, 174, 20));
    opacity: 0.4;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    transition: right 0.2s ease-out 0s, left 0.3s ease-out 0s;
    transform: translateZ(0px);
    box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 0.3125rem;
}
.gOLODp .coin-icon {
    order: -1;
    margin-right: 0.3125rem;
    margin-left: -0.625rem;
    width: 1.25rem;
    height: 1.25rem;
}
@media only screen and (max-width: 650px){
    .button-inner{
        display: flex;
        flex-direction: column;
    }
    .input-label {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        line-height: 1em;
        font-size: 13px;
        height: 1.25rem;
        margin: 0px 1.125rem 0.375rem;
        color: rgba(153, 164, 176, 0.6);
    }
    .chance-title {
        display: flex;
        flex: 1 1 0%;
        -webkit-box-pack: justify;
        justify-content: space-between;
    }
     .auto-title {
        margin-right: auto;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .chance-title .chance-num {
        color: rgb(67, 179, 9);
    }
    .input-control {
        position: relative;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        border: 1px solid rgb(45, 48, 53);
        background-color: rgba(45, 48, 53, 0.5);
        opacity: 1;
        height: 2.75rem;
        border-radius: 1.5rem;
        padding: 0px 1.375rem;
    }
    .input-control {
        border-color: transparent;
    }
    .input-control input {
        color: rgb(245, 246, 247);
    }
    .input-control input {
        flex: 1 1 0%;
        width: 100%;
        height: 100%;
        min-width: 1rem;
        padding: 0px;
        border: none;
        background-color: transparent;
        color: rgb(245, 246, 247);
        font-weight: bold;
    }
    .payout-txt {
        color: rgb(67, 179, 9);
        margin-right: -0.3125rem;
        font-size: 1.625rem;
    }
}
.empty-item{
    text-align: center;
    display: flex;
    padding: 7px 120px 0 9px;
    justify-content: center;
}
</style>
