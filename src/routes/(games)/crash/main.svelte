<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowUpSLine from "svelte-icons-pack/ri/RiSystemArrowUpSLine";
import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
import AiOutlineQuestionCircle from "svelte-icons-pack/ai/AiOutlineQuestionCircle";
import RiMapGuideFill from "svelte-icons-pack/ri/RiMapGuideFill";
import Hotkeys from './hotkeys.svelte';
import BiSolidKeyboard from "svelte-icons-pack/bi/BiSolidKeyboard";
import axios from "axios"
import { onMount  } from "svelte";
import Livestat from './livestat.svelte';
import Help from './help.svelte';
import Crashview from './crashview.svelte';
import Trend from '$lib/crashgame/components/trends/index.svelte';
import { loadingCrash,handleHasbet,game_id,crashRunning, crashIsAlive, hasCrashed } from "$lib/crashgame/store"
import {default_Wallet} from "$lib/store/coins";
import { handleAuthToken } from "$lib/store/routes";
import { profileStore,handleisLoggin } from "$lib/store/profile";
import {handleCountdown} from "$lib/games/ClassicDice/socket/index"
import {HandleCrashSocket} from "$lib/crashgame/socket"
HandleCrashSocket()
const {handleCrashActiveBet} = handleCountdown()
import { ServerURl } from "$lib/backendUrl"
const URL = ServerURl()
export let isClassic
import { error_msg  } from "$lib/crashgame/store";
import { browser } from '$app/environment'
import Trendball from "$lib/crashgame/components/trendball/Trendball.svelte";
const id = browser && JSON.parse(localStorage.getItem('user'))
let getBet_amount;

let ishotKey = false
const handleHotkeyEnable = (()=>{
    if(ishotKey){
        ishotKey = false
    }else{
        ishotKey = true
    }
})
let walletRange = 0

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
if($default_Wallet.coin_name === "USDT"){
    bet_amount = (0.10).toFixed(4)
}else{
    bet_amount = (100).toFixed(4)
}

const handleRangeSTlop = ((eui)=>{
    bet_amount = (parseFloat($default_Wallet.balance)  * (walletRange / 100 )).toFixed(4)
})

const handleHalf = ((e)=>{
    if(bet_amount > 0){
        if(e === 1){
        bet_amount = (bet_amount / 2).toFixed(2)
        }else{
            bet_amount = (bet_amount * 2).toFixed(2)
        }
    }
})

onMount(()=>{
    if($default_Wallet.coin_name === "USDT"){
        bet_amount = (0.20).toFixed(4)
    }else{
        bet_amount = (100).toFixed(4)
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
            chance: "0",
            game_type: "Classic"
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
        // handleCrashActiveBet(result)  
         let wllet = {
          coin_name: result.token,
          coin_image:  result.token_img,
          balance:  result.current_amount
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
        },4000)
        is_loading = false
    }
})

let isLoadBet = false
let loop;
const handleLoadBet = (()=>{
    if($handleisLoggin){
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
    }else{
        error_msg.set('You are not Logged in')
        setTimeout(()=>{
            error_msg.set('')
        },2000)
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

let is_min_max = false
const handleMinMax = (()=>{
   is_min_max = !is_min_max
})

const handlesjen = ((e)=>{
    bet_amount = (parseFloat($default_Wallet.balance)  * (e / 100 )).toFixed(4)
    walletRange = e
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
    <div style="background-color:crimson;" class="error-message">
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
                {#if !$handleHasbet && $crashIsAlive}
                    <button on:click={handleLoadBet} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big sc-cdJjGe jfUTnA">
                        <div class="button-inner">
                            <div>{isLoadBet ? "Loading..." : "Bet" }</div>
                            <div class="sub-text">{isLoadBet ? "Cancel" : "(Next round)"}</div>
                        </div>
                    </button>
                {/if}
                {#if $handleHasbet && $crashIsAlive}
                    <button on:click={handleCashout} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big sc-cdJjGe jfUTnA">
                        <div class="button-inner">
                            <div>{($crashRunning * bet_amountEl).toFixed(2)}</div>
                            <div class="sub-text">cashout</div>
                        </div>
                    </button>
                {/if}

                {#if $loadingCrash}
                    <button disabled={is_loading} on:click={handleCrashBet} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big sc-cdJjGe jfUTnA">
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
                                <input type="number" bind:value={bet_amount}>
                                <img class="coin-icon" alt="" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png">
                                <div class="sc-kDTinF bswIvI button-group">
                                    <button  on:click={()=>handleHalf(1)}>/2</button>
                                    <button  on:click={()=>handleHalf(2)}>x2</button>
                                    <button on:click={handleMinMax} class="sc-ywFzA dxoLcn">
                                        <Icon src={RiSystemArrowUpSLine}  size="80"  color="rgba(153, 164, 176, 0.6)"  />
                                        <Icon src={RiSystemArrowDownSLine}  size="80"  color="rgba(153, 164, 176, 0.6)"  />
                                    </button>
                                </div>
                            </div>
                            {:else}
                            <div class="input-control">
                                <input type="number" bind:value={bet_amount} placeholder="10">
                                <img class="coin-icon" alt="" src={$default_Wallet.coin_image}>
                                <div class="sc-kDTinF bswIvI button-group">
                                    <button on:click={()=>handleHalf(1)}>/2</button>
                                    <button  on:click={()=>handleHalf(2)}>x2</button>
                                    {#if is_min_max }
                                    <div class="fix-layer" style="opacity: 1; transform: none;">
                                       <button on:click={()=>  handlesjen(0) } style={`${walletRange === 0 ? `color:#ffff;` : ""}`} class="">Min</button>
                                       <div class="sc-kLwhqv eOA-dmL slider">
                                          <div class="slider-after" style="transform: scaleX(100.001001);"></div>
                                            <input type="range" class="drag-block" on:input={(e)=> handleRangeSTlop(e.target.value)} bind:value={walletRange}>
                                          <div class="slider-before" style="transform: scaleX(100.998999);"></div>
                                       </div>
                                       <button on:click={()=> handlesjen(100)} style={`${walletRange === 100 ? `color:#ffff;` : ""}`} class="">Max</button>
                                    </div>
                                   {/if}
                                    <button on:click={handleMinMax} class="sc-ywFzA dxoLcn">
                                        <Icon src={RiSystemArrowUpSLine}  size="80"  color="rgba(153, 164, 176, 0.6)"  />
                                        <Icon src={RiSystemArrowDownSLine}  size="80"  color="rgba(153, 164, 176, 0.6)"  />
                                    </button>
                                </div>
                            </div>
                        {/if}
                    </div>
                    <div class="sc-ezbkAF hzTJOu input sc-kMyqmI gcFpfw">
                        <div class="input-label">
                            <div class="chance-title">
                                <div class="auto-title">Auto cash out</div>
                                <div>Chance&nbsp;&nbsp;<span class="chance-num">{chance}%</span>
                                </div>
                            </div>
                        </div>
                        <div class="input-control">
                            <input type="text" bind:value={auto_bet}>
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
            <Icon src={BiSolidKeyboard}  size="25"  color="rgb(153, 164, 176)" className="custom-icon" />
        </button>
        <button on:click={handleStatistics} class="action-item  ">
            <Icon src={RiMapGuideFill}  size="18"  color="rgb(153, 164, 176)" className="custom-icon" />
        </button>
        <button on:click={handleHelp} class="action-item  ">
            <Icon src={AiOutlineQuestionCircle}  size="18"  color="rgb(153, 164, 176)" className="custom-icon" />
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
.gOLODp .fix-layer .slider {
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

.gOLODp .fix-layer .slider-after {
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

.gOLODp .fix-layer {
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
.gOLODp .fix-layer > button {
    height: 100%;
    width: 2.5rem;
    flex: 0 0 auto;
    font-size: 0.75rem;
    background-color: rgba(60, 64, 74, 0.5);
}
.gOLODp .fix-layer .slider {
    flex: 1 1 0%;
    height: 100%;
}
.gOLODp .fix-layer > button {
    height: 100%;
    width: 2.5rem;
    flex: 0 0 auto;
    font-size: 0.75rem;
    background-color: rgba(60, 64, 74, 0.5);
}
.gOLODp .fix-layer .slider {
    flex: 1 1 0%;
    height: 100%;
}
.eOA-dmL .slider-after {
    height: 2px;
    width: 98%;
    position: absolute;
    left: 1%;
    top: 50%;
    margin-top: -1px;
}
.eOA-dmL .slider-after {
    background-color: rgba(216, 222, 227, 0.4);
    transform-origin: left center;
}

.gOLODp .fix-layer .slider-before, .gOLODp .fix-layer .slider-after {
    width: 86%;
    left: 7%;
    height: 0.5rem;
    margin-top: -0.25rem;
    border-radius: 0.25rem;
    background-color: rgb(23, 24, 27);
    transform: scaleX(1) !important;
}
.eOA-dmL .slider-before {
    background-color: rgba(216, 222, 227, 0.4);
    transform-origin: right center;
}
.eOA-dmL .slider-before, .eOA-dmL .slider-after {
    height: 2px;
    width: 98%;
    position: absolute;
    left: 1%;
    top: 50%;
    margin-top: -1px;
}
.drag-block::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: 0px;
    /* Centers thumb on the track */
    background-color: #feffff;
    height: 1.5rem;
    width: 1rem;
    border-radius: 10px;
    cursor: grabbing;
}
.drag-block {
    position: absolute;
    z-index: 100;
    top: 0px;
    left: 0px;
    bottom: 0px;
    background-color: transparent;
    border-radius: 10px;
    appearance: none;
    width: 100%;
    margin: 0px;
    height: 100%;
    cursor: grab;
    -webkit-appearance: none;
}
</style>
