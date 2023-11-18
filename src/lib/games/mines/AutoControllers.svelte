<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowUpSLine from "svelte-icons-pack/ri/RiSystemArrowUpSLine";
import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
import { default_Wallet } from '../../store/coins';
import { profileStore,handleisLoggin } from "$lib/store/profile"
import { handleAuthToken } from "$lib/store/routes"
import { payout, isbetLoadingBtn } from "./store";
import { error_msg, handlediceAutoInput, onWin, HandleDicePoint, soundHandler ,dice_history, HandleHas_won } from "../ClassicDice/store/index"

import cr from "./audio/click-button-140881.mp3"
import win from "./audio/mixkit-achievement-bell-600.wav"
import axios from "axios"

let is_min_max = false
const handleMinMax = (()=>{
   is_min_max = !is_min_max
})
let uiocd;
$:{
    uiocd = $handlediceAutoInput
}

let bet_number = 0
let on_win = false
let onWinEl = 0

let on_lose = false
let onLoseEl = 0

let stopOnwin = 0
let stopOnlose = 0

let is_Looping = false
let yu 
let turbo = 1300

function playSound(e) {
    if(e === 1){
        const audio = new Audio(cr);
        audio.volume = 0.5;
        audio.play();
    }else{
        const audio = new Audio(win);
        audio.volume = 0.5;
        audio.play();
    }
}

const dive = (()=>{
    uiocd = (uiocd / 2).toFixed(4)
    handlediceAutoInput.set(uiocd)
})

const mult = (()=>{
    uiocd = (uiocd * 2).toFixed(4)
    handlediceAutoInput.set(uiocd)
})


let winning_track = 0
let lose_track = 0

let bet_num_count = 0
const handleAutoStart = (()=>{
    if(!is_Looping){
        is_Looping = true
        yu = setInterval(()=>{
            if(bet_number){
                if(bet_num_count === bet_number){
                    is_Looping = false
                    clearInterval(yu)
                    bet_num_count = 0
                }
                else{
                    handleRollSubmit()
                    bet_num_count += 1
                }
            } else if(stopOnwin){
                if(winning_track > stopOnwin ){
                    is_Looping = false
                    clearInterval(yu)   
                    stopOnwin = 0
                }else{
                    handleRollSubmit()
                }
            }
            else if(stopOnlose){
                if(lose_track > stopOnlose ){
                    is_Looping = false
                    clearInterval(yu)   
                    stopOnlose = 0
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
    }
})


const handleRollSubmit = (async()=>{
    if($handleisLoggin){
        if(parseFloat(uiocd) > parseFloat($default_Wallet.balance)){
            error_msg.set("insufficient balance")
            is_Looping = false
            clearInterval(yu)
            setTimeout(()=>{
                error_msg.set("")
            },4000)
        }

        else if( parseFloat(bet_amount) > 5000 && $default_Wallet.coin_name === "USDT"){
            error_msg.set("Maximum bet amount for USDT is 5,000")
              is_Looping = false
            clearInterval(yu)
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
        else if( parseFloat(bet_amount) > 10000 && $default_Wallet.coin_name === "PPF"){
            error_msg.set("Maximum bet amount for PPF is 10,000")
              is_Looping = false
            clearInterval(yu)
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
        else if( parseFloat(bet_amount) < 100 && $default_Wallet.coin_name === "PPF"){
            error_msg.set("Minimum bet amount for PPF is 100")
             is_Looping = false
            clearInterval(yu)
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
        else if( parseFloat(bet_amount) < 0.20 && $default_Wallet.coin_name === "USDT"){
            error_msg.set("Minimum bet amount for USDT is 0.20")
             is_Looping = false
            clearInterval(yu)
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
        else{
            const data = {
                username: $profileStore.username,
                user_img: $profileStore.profile_image,
                bet_amount: parseFloat(uiocd),
                bet_token_img: $default_Wallet.coin_image, 
                bet_token_name: $default_Wallet.coin_name ,
                payout: $payout,
                wining_amount: parseFloat(uiocd * $payout) - parseFloat(uiocd)
            }
            await axios.post('http://localhost:8000/api/user/dice-game/bet', {
                sent_data: data
            },{
                headers:{
                    Authorization: `Bearer ${$handleAuthToken}`
                }
            })
            .then(res =>{
                isbetLoadingBtn.set(false)
                dice_history.set(res.data.history)
                default_Wallet.set(res.data.wallet)
                HandleDicePoint.set(res.data.point)
                let prev = res.data.history[res.data.history.length - 1]

                if(prev.has_won){
                  winning_track += parseFloat(uiocd * $payout) - parseFloat(uiocd)
                  $soundHandler &&  playSound(2)
                  HandleHas_won.set(true)
                  if(onWinEl){
                        let to = ((onWinEl/100) * parseFloat(uiocd)/1)
                        let from = (to + parseFloat(uiocd)).toFixed(4)
                        handlediceAutoInput.set(from)
                    }
                }
                else{
                    lose_track += parseFloat(uiocd)
                    HandleHas_won.set(false)
                    if(onLoseEl){
                        let to = ((onLoseEl/100) * parseFloat(uiocd)/1)
                        let from = (to + parseFloat(uiocd)).toFixed(4)
                        handlediceAutoInput.set(from)
                    }
                }
            })
            .catch((err)=>{
                console.log(err)
            })
            onWin.set(onWinEl)
        }
    }else{
        error_msg.set("You are not Logged in")
        clearInterval(yu)
        is_Looping = false
        setTimeout(()=>{
            error_msg.set("")
        },4000)
    }
})



</script>

<div class="game-control-panel">

{#if $error_msg}
    <div class="error-message">
        <div class="hTTvsjh"> 
            <div>{$error_msg}</div>
        </div>
    </div>
{/if}

    <div class="sc-gFSQbh hRGEiw">
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
                                    <span class="amount-str">5000.
                                        <span class="suffix">00000</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="label-amount">0 USD</div>
            </div>
            <div class="input-control">
                <input type="number" bind:value={uiocd}>
                {#if $handleisLoggin}
                   <img class="coin-icon" alt="" src={$default_Wallet.coin_image}>
                {/if}
                <div class="sc-kDTinF bswIvI button-group">
                    <button on:click={()=> dive() }>/2</button>
                    <button on:click={()=> mult() }>x2</button>
                    {#if is_min_max }
                     <div class="fix-layer" style="opacity: 1; transform: none;">
                        <button  class="">Min</button>
                        <div class="sc-kLwhqv eOA-dmL slider">
                           <div class="slider-after" style="transform: scaleX(10.001001);"></div>
                           <div class="slider-handler-wrap" style="transform: translateX(0.1001%);">
                              <button class="slider-handler"></button>
                           </div>
                           <div class="slider-before" style="transform: scaleX(10.998999);"></div>
                        </div>
                        <button class="">Max</button>
                     </div>
                    {/if }

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
                <input type="number" bind:value={bet_number}>
                <div class={`sc-kDTinF bswIvI button-group`}>
                    <button on:click={()=> bet_number = 0}>∞</button>
                    <button on:click={()=> bet_number = 10}>10</button>
                    <button on:click={()=> bet_number = 100}>100</button>
                </div>
            </div>
        </div>

        <div class="sc-ezbkAF hzTJOu input sc-gqtqkP cTKsPy">
            <div class="input-label">On win</div>
            <div class="input-control">
                <input type="number" readonly={!on_win} bind:value={onWinEl}>
                <div class={`sc-cxVPaa ${on_win ? "kvRMBr"  : "eIHoct"}  increase-switch`}>
                    <button on:click={()=> on_win = !on_win} class="dot-wrap">
                        <div  class="dot"></div>
                    </button>
                    <div class="reset text">Reset</div>
                    <div class="increse text">Increase by</div>
                </div>
                <div class="percent">%</div>
            </div>
        </div>

        <div class="sc-ezbkAF hzTJOu input sc-fvxzrP gOLODp">
            <div class="input-label">Stop on win<div class="label-amount">0 USD</div>
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
                <input type="number" bind:value={stopOnlose}>
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

        <button on:click={handleAutoStart} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big bet-button">
            <div class="button-inner"> {is_Looping ? "Stop" : "Start"} Auto Bet</div>
        </button>

    </div>
</div>



<style>

.fCSgTW .fix-layer {
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

.fCSgTW .fix-layer > button {
    height: 100%;
    width: 2.5rem;
    flex: 0 0 auto;
    font-size: 0.75rem;
    background-color: rgba(60, 64, 74, 0.5);
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
.fCSgTW .fix-layer > button {
    height: 100%;
    width: 2.5rem;
    flex: 0 0 auto;
    font-size: 0.75rem;
    background-color: rgba(60, 64, 74, 0.5);
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
.fCSgTW .fix-layer .slider-after {
    width: 86%;
    left: 7%;
    height: 0.5rem;
    margin-top: -0.25rem;
    border-radius: 0.25rem;
    background-color: rgb(23, 24, 27);
    transform: scaleX(1) !important;
}
.eOA-dmL .slider-handler-wrap {
    flex: 1 1 0%;
    position: relative;
    z-index: 2;
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
.fCSgTW .fix-layer .slider-before, .fCSgTW .fix-layer .slider-after {
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

 .game-control-panel {
    height: 1%;
}
.game-control-panel {
    flex: 1 1 0%;
}
.gcQjQT {
    margin-top: 1rem;
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
.efWjNZ .tit {
    color: rgb(128, 143, 158);
}
.erPQzq {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
}
.erPQzq .amount-str {
    width: 7em;
    display: inline-block;
}
.erPQzq .suffix {
    opacity: 0.5;
}
.gOLODp .label-amount {
    margin-left: auto;
}
 .input-control {
    border-color: transparent;
}
.input-control {
    background-color: rgba(49, 52, 60, 0.4);
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
.fCSgTW .input-control input {
    font-weight: bold;
}
.cYiOHZ .input-control input {
    color: rgb(245, 246, 247);
}
.gOLODp .coin-icon {
    order: -1;
    margin-right: 0.3125rem;
    margin-left: -0.625rem;
    width: 1.25rem;
    height: 1.25rem;
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
.bswIvI > button {
    height: 2.25rem;
    width: 2.75rem;
    padding: 0px;
    color: rgb(153, 164, 176);
    background: rgb(49, 52, 60);
    margin-left: 1px;
}
.cMPLfC {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
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
.input-control {
    border-color: transparent;
}
.input-control {
    background-color: rgba(49, 52, 60, 0.4);
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
.cYiOHZ .input-control .button-group {
    margin-right: -1.125rem;
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
.hzTJOu {
    margin-top: 1rem;
}
.input-control {
    border-color: transparent;
}
 .hzTJOu .input-control input[readonly] {
    opacity: 0.5;
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
.eIHoct .dot-wrap {
    position: absolute;
    width: 1rem;
    height: 1.75rem;
    border-radius: 0.46875rem;
    background: rgb(67, 179, 9);
    left: 0.875rem;
    top: 0.25rem;
}
.eIHoct .reset {
    font-weight: bold;
    color: rgb(255, 255, 255);
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
.cTKsPy .percent {
    margin-right: -0.375rem;
    color: rgb(67, 179, 9);
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

.eIHoct .dot-wrap {
    position: absolute;
    width: 1rem;
    height: 1.75rem;
    border-radius: 0.46875rem;
    background: rgb(67, 179, 9);
    left: 0.875rem;
    top: 0.25rem;
}
.eIHoct .reset {
    font-weight: bold;
    color: rgb(255, 255, 255);
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
.hzTJOu {
    margin-top: 1rem;
}
.eIHoct .dot-wrap .dot {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    position: absolute;
    left: 0px;
    transition: top 0.1s ease-in-out 0s;
    top: -0.0625rem;
}
.kNGYYA {
    display: flex;
    margin-top: 0.75rem;
    font-size: 12px;
    color: rgb(153, 164, 176);
    opacity: 0.6;
}
.kNGYYA .tip-msg {
    flex: 1 1 0%;
}
.hRGEiw .bet-button {
    margin-top: 1.5rem;
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
    top: 0.875rem;
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
</style>
