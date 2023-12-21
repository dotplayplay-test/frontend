<script>
import { browser } from '$app/environment';
import { goto } from "$app/navigation";
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowUpSLine from "svelte-icons-pack/ri/RiSystemArrowUpSLine";
import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
import { default_Wallet } from '../../store/coins';
import { profileStore,handleisLoggin } from "$lib/store/profile"
import { handleAuthToken } from "$lib/store/routes"
import { payout, isbetLoadingBtn, betPosition } from "./store";
import {DiceEncription} from '$lib/games/ClassicDice/store/index'
import { error_msg, handlediceAutoInput,Handles_alive, onWin,winning_track,losing_track,Autopre_bal, handleStopOnLose,handleOnLose, HandleDicePoint,handleStopOnwin, handleOnwin, rollunder ,dice_history, HandleHas_won } from "../ClassicDice/store/index"
import {ServerURl} from "$lib/backendUrl"
const URL = ServerURl()
import cr from "./audio/click-button-140881.mp3"
import win from "./audio/mixkit-achievement-bell-600.wav"
import axios from "axios"
import { onMount  } from "svelte";
import { handleCountdown } from "../ClassicDice/socket/index";
const { handleDicebet } = handleCountdown()

let is_min_max = false
const handleMinMax = (()=>{
   is_min_max = !is_min_max
})

let uiocd = 4
let wining_amount = '' ;
let walletRange = 0

onMount(()=>{
    if($default_Wallet.coin_name === "USDT"){
            handlediceAutoInput.set((0.20).toFixed(4))
    }else{
        handlediceAutoInput.set((100).toFixed(4))
    }
})

if($default_Wallet.coin_name === "USDT"){
    uiocd = (0.20).toFixed(4)
}else{
    uiocd = (100).toFixed(4)
}


$:{
    wining_amount = (uiocd * $payout).toFixed(4)
}


// $:{
//     uiocd = $handlediceAutoInput
// }

let bet_number = 0
let on_win = false
let onWinEl = 0

let on_lose = false
let onLoseEl = 0

let stopOnwin = 0
let stopOnlose = 0

let is_Looping = false
let yu 
let turbo = 1000

function playSound(e) {
    if(e === 1){
        const audio = new Audio(cr);
        audio.volume = 0.5;
        audio.play();
    }else{
        const audio = new Audio(win);
        audio.volume = 0.1;
        audio.play();
    }
}


const handleRangeSTlop = ((eui)=>{
    handlediceAutoInput.set((parseFloat($default_Wallet.balance)  * (walletRange / 100 )).toFixed(4))
    if($default_Wallet.coin_name === "USDT"){
        if($handlediceAutoInput < 0.1){
            handlediceAutoInput.set((0.1).toFixed(4))
        }
        else if($handlediceAutoInput > 2000){
            handlediceAutoInput.set((2000).toFixed(4))
        }
    }else{
        if($handlediceAutoInput < 100){
            handlediceAutoInput.set((100).toFixed(4))
        }
        else if($handlediceAutoInput > 5000){
            handlediceAutoInput.set((5000).toFixed(4))
        }
    }
})

const dive = (()=>{
    handlediceAutoInput.set(($handlediceAutoInput / 2).toFixed(4))
})

const mult = (()=>{
    handlediceAutoInput.set(($handlediceAutoInput * 2).toFixed(4))
})

let prev_bal;
const handlePreBetamout = ((event)=>{
   return prev_bal
})

let lose_track = 0

let bet_num_count = 0
const handleAutoStart = (()=>{
    if(!is_Looping){
        prev_bal = $handlediceAutoInput
        Autopre_bal.set(prev_bal)
        is_Looping = true
        yu = setInterval(()=>{
            if(bet_number){
                if(bet_number < bet_num_count){
                    is_Looping = false
                    clearInterval(yu)
                    bet_num_count = 1
                }
                else{
                    handleRollSubmit()
                    bet_num_count += 1
                }
            } 
           else if($handleStopOnwin){
                if($winning_track >= $handleStopOnwin ){
                    is_Looping = false
                    clearInterval(yu)   
                    winning_track.set(0)
                    handleStopOnwin.set(0)
                }else{
                    handleRollSubmit()
                }
            }
            else if($handleStopOnLose){
                if($losing_track >= $handleStopOnLose ){
                    is_Looping = false
                    clearInterval(yu)   
                    losing_track.set(0)
                    handleStopOnLose.set(0)
                }else{
                    handleRollSubmit()
                }
            }
            else{
                handleRollSubmit()
            }
        }, turbo)
    }else{
        is_Looping = false
        clearInterval(yu)
        let s = handlePreBetamout()
        Handles_alive.set(false)
        handlediceAutoInput.set((parseFloat(s)).toFixed(5))
    }
})

let history 
$:{
    history  = [...$dice_history]
}
let non = 1
const handleRollSubmit = (async()=>{
    // if(browser && window.navigator.onLine){
    if($handleisLoggin){
        if(parseFloat($default_Wallet.balance) <= 0){
            error_msg.set("insufficient balance")
            is_Looping = false
            clearInterval(yu)
            setTimeout(()=>{
                error_msg.set("")
            },4000)
        }
        if(parseFloat($handlediceAutoInput) > parseFloat($default_Wallet.balance)){
            error_msg.set("insufficient balance")
            is_Looping = false
            clearInterval(yu)
            setTimeout(()=>{
                error_msg.set("")
            },4000)
        }
        else if( parseFloat($handlediceAutoInput) > 5000 && $default_Wallet.coin_name === "USDT"){
            error_msg.set("Maximum bet amount for USDT is 5,000")
              is_Looping = false
            clearInterval(yu)
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
        else if( parseFloat($handlediceAutoInput) > 10000 && $default_Wallet.coin_name === "PPF"){
            error_msg.set("Maximum bet amount for PPF is 10,000")
              is_Looping = false
            clearInterval(yu)
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
        else if( parseFloat($handlediceAutoInput) < 100 && $default_Wallet.coin_name === "PPF"){
            error_msg.set("Minimum bet amount for PPF is 100")
             is_Looping = false
            clearInterval(yu)
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
        else if( parseFloat($handlediceAutoInput) < 0.20 && $default_Wallet.coin_name === "USDT"){
            error_msg.set("Minimum bet amount for USDT is 0.20")
             is_Looping = false
            clearInterval(yu)
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
        else{
            let data = {
                user_id: $profileStore.user_id, 
                server_seed: $DiceEncription.server_seed,
                client_seed: $DiceEncription.client_seed,
                hash_seed: $DiceEncription.hash_seed,
                nonce:$DiceEncription.nonce + non,
                username: $profileStore.username,
                hidden_from_public: false,
                profile_img: $profileStore.profile_image,
                bet_amount:  parseFloat($handlediceAutoInput),
                prev_bal: parseFloat($default_Wallet.balance),
                token_img: $default_Wallet.coin_image, 
                token: $default_Wallet.coin_name ,
                chance: $rollunder ? parseFloat($betPosition).toFixed(2) : 100 - parseFloat($betPosition).toFixed(2) ,
                payout: parseFloat($payout),
                time: new Date(),
                is_roll_under:$rollunder,
                wining_amount: parseFloat(wining_amount) - parseFloat($handlediceAutoInput)
            }
            Handles_alive.set(true)
            non += 1
            setTimeout(()=>{
            handleDicebet(data)
            },1000)
        }
    }else{
        error_msg.set("You are not Logged in")
        clearInterval(yu)
        is_Looping = false
        setTimeout(()=>{
            goto("/login")
            error_msg.set("")
        },4000)
    }
// }else{
//     error_msg.set('Error in network connection')
//     is_Looping = false
//     clearInterval(yu)
//     setTimeout(()=>{
//         error_msg.set('')
//      },4000)
// }
})


const handlesjen = ((e)=>{
    handlediceAutoInput.set((parseFloat($default_Wallet.balance)  * (e / 100 )).toFixed(4))
    walletRange = e
    if($default_Wallet.coin_name === "USDT"){
        if($handlediceAutoInput < 0.1){
            handlediceAutoInput.set((0.1).toFixed(4))
        }
        else if($handlediceAutoInput > 2000){
            handlediceAutoInput.set((2000).toFixed(4))
        }
    }else{
        if($handlediceAutoInput < 100){
            handlediceAutoInput.set((100).toFixed(4))
        }
        else if($handlediceAutoInput > 5000){
            handlediceAutoInput.set((5000).toFixed(4))
        }
    }
})


</script>

<div class="game-control-panel">

    {#if $error_msg}
    <div style="background-color:crimson;" class="error-message">
        <div class="hTTvsjh"> 
            <div>{$error_msg}</div>
        </div>
    </div>
   {/if}

    <div class="sc-gFSQbh hRGEiw">
        <button on:click={handleAutoStart} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big bet-button">
            <div class="button-inner"> {is_Looping ? "Stop" : "Start"} Auto Bet</div>
        </button>
        
        <div class="sc-ezbkAF gcQjQT input sc-fvxzrP gOLODp sc-gsFzgR fCSgTW game-coininput">
            <div class="input-label">
                <div class="sc-hmvnCu efWjNZ label">
                    <div>Amount</div>
                    <div class="max-profit">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_Inform"></use>
                        </svg>
                        <div class="tip">
                            <span class="tit">Max Profit:&nbsp;</span>
                            <div class="sc-Galmp erPQzq coin notranslate">
                                <div class="amount">
                                    <span class="amount-str">0.11<span class="suffix">000000</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="label-amount">0.00138705 USD</div>
            </div>
            <div class="input-control">
                <input type="number" disabled={$Handles_alive} bind:value={$handlediceAutoInput}>
                {#if $handleisLoggin}
                   <img class="coin-icon" alt="" src={$default_Wallet.coin_image}>
                {/if}
                <div class="sc-kDTinF bswIvI button-group">
                    <button on:click={()=> dive() }>/2</button>
                    <button on:click={()=> mult() }>x2</button>
                    {#if is_min_max }
                    <div class="fix-layer" style="opacity: 1; transform: none;">
                       <button disabled={$Handles_alive} on:click={()=>  handlesjen(0) } style={`${walletRange === 0 ? `color:#ffff;` : ""}`} class="">Min</button>
                       <div class="sc-kLwhqv eOA-dmL slider">
                          <div class="slider-after" style="transform: scaleX(100.001001);"></div>
                            <input disabled={$Handles_alive} type="range" class="drag-block" on:input={(e)=> handleRangeSTlop(e.target.value)} bind:value={walletRange}>
                          <div class="slider-before" style="transform: scaleX(100.998999);"></div>
                       </div>
                       <button disabled={$Handles_alive} on:click={()=> handlesjen(100)} style={`${walletRange === 100 ? `color:#ffff;` : ""}`} class="">Max</button>
                    </div>
                   {/if}
                <button on:click={handleMinMax} class="sc-cAhXWc cMPLfC">
                    <Icon src={RiSystemArrowUpSLine}  size="80"  color="rgba(153, 164, 176, 0.6)"  title="min" />
                    <Icon src={RiSystemArrowDownSLine}  size="80"  color="rgba(153, 164, 176, 0.6)"  title="max" />
                </button>
                </div>
            </div>
        </div>
        <div class="sc-ezbkAF hzTJOu input ">
            <div class="input-label">Number of Bets</div>
            <div class="input-control">
                <input type="number" disabled={$Handles_alive} bind:value={bet_number}>
                <div class="sc-kDTinF bswIvI button-group">
                    <button on:click={()=> bet_number = 0}>∞</button>
                    <button on:click={()=> bet_number = 10}>10</button>
                    <button on:click={()=> bet_number = 100}>100</button>
                </div>
            </div>
        </div>
        <div class="sc-ezbkAF hzTJOu input sc-gqtqkP cTKsPy">
            <div class="input-label">On win</div>
            <div class="input-control">
                <input type="number" disabled={$Handles_alive} readonly={!on_win} bind:value={$handleOnwin}>
                <div class={`sc-cxVPaa ${on_win ? "kvRMBr"  : "eIHoct"}  increase-switch`}>
                    <button disabled={$Handles_alive} on:click={()=> on_win = !on_win} class="dot-wrap">
                        <div  class="dot"></div>
                    </button>
                    <div class="reset text">Reset</div>
                    <div class="increse text">Increase by</div>
                </div>
                <div class="percent">%</div>
            </div>
        </div>
        <div class="sc-ezbkAF hzTJOu input sc-fvxzrP gOLODp">
            <div class="input-label">
                Stop on win<div class="label-amount">0 USD</div>
            </div>
            <div class="input-control">
                <input type="number" bind:value={stopOnwin}>
            {#if $handleisLoggin}
                <img class="coin-icon" alt="" src={$default_Wallet.coin_image}>
             {/if}
            </div>
        </div>
        <div class="sc-ezbkAF hzTJOu input sc-gqtqkP cTKsPy">
            <div class="input-label">On lose</div>
            <div class="input-control">
                <input type="number" readonly={!on_lose} bind:value={onLoseEl}>
                <div class={`sc-cxVPaa ${on_lose ? "kvRMBr"  : "eIHoct"}  increase-switch`}>
                    <button on:click={()=> on_lose = !on_lose}  class="dot-wrap">
                        <div class="dot"></div>
                    </button>
                    <div class="reset text">Reset</div>
                    <div class="increse text">Increase by</div>
                </div>
                <div class="percent">%</div>
            </div>
        </div>
        <div class="sc-ezbkAF hzTJOu input sc-fvxzrP gOLODp">
            <div class="input-label">Stop on lose<div class="label-amount">0 USD</div>
        </div>
        <div class="input-control">
            <input type="number" disabled={$Handles_alive} bind:value={$handleStopOnLose}>
            {#if $handleisLoggin}
               <img class="coin-icon" alt="" src={$default_Wallet.coin_image}>
            {/if}
        </div>
        </div>
        <div class="sc-gfXuXe kNGYYA script-tips">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                <use xlink:href="#icon_Help"></use>
            </svg>
            <div class="tip-msg">
                <span>Use of script is optional and players must take full responsibility for any attendant risks. We will not be held liable in this regard.</span>
            </div>
        </div>
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
.fix-layer .slider {
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
.fCSgTW .fix-layer > button {
    height: 100%;
    width: 2.5rem;
    flex: 0 0 auto;
    font-size: 0.75rem;
    background-color: rgba(60, 64, 74, 0.5);
}
 .fix-layer .slider {
    flex: 1 1 0%;
    height: 100%;
}
.fix-layer .slider-after {
    width: 86%;
    left: 7%;
    height: 0.5rem;
    margin-top: -0.25rem;
    border-radius: 0.25rem;
    background-color: rgb(23, 24, 27);
    transform: scaleX(1) !important;
}
.eOA-dmL .slider-after {
    background-color: rgba(216, 222, 227, 0.4);
    transform-origin: left center;
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
 .fix-layer .slider-before,  .fix-layer .slider-after {
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
    width: 98%;
    position: absolute;
    left: 1%;
    top: 50%;
}
.cYiOHZ {
    display: flex;
}
.cYiOHZ.style-mobile {
    flex-direction: column;
}
/* .cYiOHZ .game-control-panel {
    flex: 1 1 0%;
} */
 .game-control-panel {
    padding: 0px 1.125rem;
}
.hRGEiw .bet-button {
    margin: 1.25rem 0px;
}
.cBmlor.button-big {
    height: 3.625rem;
}
.gcQjQT {
    margin-top: 1rem;
}
.gcQjQT .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    font-size: 13px;
    height: 1.25rem;
    margin: 0px 1.125rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
}
.efWjNZ {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 1rem;
}
.efWjNZ .max-profit {
    position: relative;
    margin-left: 0.1875rem;
    width: 1rem;
    height: 1rem;
}
.efWjNZ .tip {
    display: none;
    box-sizing: border-box;
    position: absolute;
    left: -0.75rem;
    top: -2.625rem;
    height: 2.25rem;
    line-height: 1.25rem;
    padding: 0.3125rem 0.625rem;
    white-space: nowrap;
    color: rgba(153, 164, 176, 0.8);
    background-color: rgb(37, 39, 43);
    box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 8px;
    border-radius: 1.125rem;
}
.gOLODp .label-amount {
    margin-left: auto;
}

.gcQjQT .input-control {
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
.cYiOHZ .input-control input {
    color: rgb(245, 246, 247);
}
.fCSgTW .input-control input {
    font-weight: bold;
}
.cYiOHZ .input-control .button-group {
    margin-right: -1.125rem;
}
.fCSgTW .button-group {
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
.cMPLfC {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
}
.cBmlor.button-big {
    height: 3.625rem;
}
/* .cYiOHZ.style-mobile .game-control-panel {
    padding: 0px 1.125rem;
} */
.hzTJOu {
    margin-top: 1rem;
}
.hzTJOu .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    font-size: 13px;
    height: 1.25rem;
    margin: 0px 1.125rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
}
/* .glMLZr .input-control {
    border-color: transparent;
} */
.input-control {
    background-color: rgba(49, 52, 60, 0.4);
}
.hzTJOu .input-control {
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
.hzTJOu .input-control input {
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
.kvRMBr {
    order: -1;
    position: relative;
    margin-left: -1rem;
    padding-left: 2.25rem;
    margin-right: 2rem;
    width: 8.125rem;
    height: 2.25rem;
    border-radius: 1.125rem;
    background: rgb(49, 52, 60);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
}
.kvRMBr .dot-wrap {
    position: absolute;
    width: 1rem;
    height: 1.75rem;
    border-radius: 0.46875rem;
    background: rgb(67, 179, 9);
    left: 0.875rem;
    top: 0.25rem;
}
.kvRMBr .dot-wrap .dot {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    position: absolute;
    left: 0px;
    transition: top 0.1s ease-in-out 0s;
    top: 0rem;
}
.kvRMBr .reset {
    color: rgb(153, 164, 176);
}
.kvRMBr .text {
    padding: 0px 0.25rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 0.75rem;
    line-height: 0.875rem;
    height: 0.875rem;
}
.kvRMBr .increse {
    font-weight: bold;
    color: rgb(255, 255, 255);
}

.eIHoct .dot-wrap {
    position: absolute;
    width: 1rem;
    height: 1.75rem;
    border-radius: 0.46875rem;
    background: rgb(67, 179, 9);
    left: 0.875rem;
    top: 0.25rem;
}
.eIHoct .dot-wrap .dot {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    position: absolute;
    left: 0px;
    transition: top 0.1s ease-in-out 0s;
    top: 0.875rem;
}
.eIHoct .reset {
    color: rgb(153, 164, 176);
}
.eIHoct .text {
    padding: 0px 0.25rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 0.75rem;
    line-height: 0.875rem;
    height: 0.875rem;
}
.eIHoct .increse {
    font-weight: bold;
    color: rgb(255, 255, 255);
}
.cTKsPy .percent {
    margin-right: -0.375rem;
    color: rgb(67, 179, 9);
}
.eIHoct {
    order: -1;
    position: relative;
    margin-left: -1rem;
    padding-left: 2.25rem;
    margin-right: 2rem;
    width: 8.125rem;
    height: 2.25rem;
    border-radius: 1.125rem;
    background: rgb(49, 52, 60);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
}
/* .glMLZr .input-control {
    border-color: transparent;
}
.cYiOHZ .input-control {
    background-color: rgba(49, 52, 60, 0.4);
} */
.kNGYYA .tip-msg {
    flex: 1 1 0%;
}
.kNGYYA {
    display: flex;
    margin-top: 0.75rem;
    font-size: 12px;
    color: rgb(153, 164, 176);
    opacity: 0.6;
}
.kNGYYA {
    margin: 0.6rem 0px;
}
.input-control input[readonly] {
    opacity: 0.5;
}
</style>
