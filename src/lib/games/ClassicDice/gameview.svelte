<script>
import { payout , range} from "$lib/games/ClassicDice/store/index"
import { HandleDicePoint, betPosition, dice_history,Handles_alive, handleOnLose,Autopre_bal, HandleHas_won,winning_track,losing_track,handlediceAutoInput, handleStopOnLose, handleOnwin, rollunder,handleStopOnwin, flix} from "./store/index"
import Icon from 'svelte-icons-pack/Icon.svelte';
import { dicegameplays } from "../ClassicDice/store/index"
import AiOutlineSwap from "svelte-icons-pack/ai/AiOutlineSwap";
import axios from "axios"
import {dice_troo, dice_wallet} from "$lib/games/ClassicDice/store/index"
import { onMount } from "svelte";
import { isbetLoadingBtn } from "./store";
import { default_Wallet, coin_list } from "$lib/store/coins";
import { handleisLoggin, profileStore } from "../../store/profile"
import HistoryDetails from "./componets/historyDetails.svelte";
import click from "./audio/click.wav"
import { handleAuthToken } from "$lib/store/routes"
import { ServerURl } from "$lib/backendUrl"
const URl = ServerURl()
// import { handleTransmit } from "../ClassicDice/AutoControllers.svelte"
import cr from "./audio/click.wav"
import win from "./audio/mixkit-achievement-bell-600.wav";
let rangeEl = 50
let flip = 50

const handleDiceGameHistory = (async()=>{
     await axios.get(`${URl}/api/user/dice-game/dice-history`,{
          headers: {
            "Content-type": "application/json",
            'Authorization': `Bearer ${$handleAuthToken}`
        }})
        .then((response)=>{
            dice_history.set(response.data)
        })
        .catch((error)=>{
            console.log(error.response)
        })
})

onMount(async()=>{
    $handleisLoggin && await handleDiceGameHistory()
})

$:{
    if($range < 0){
        range.set(2)
    }
    if($range > 98){
        range.set(98)
    }
    betPosition.set($range)
    flix.set(rangeEl)
}


let ishover = false
const handleRangl = ((w)=>{
    if(w === 1){
        ishover = true
    }else{
        ishover = false
    }
})
let pop = 0

let houseEgde = 1
let game__charges = 100 / houseEgde
let game_logic;
let total_charge;

$: {
    if($rollunder){
        game_logic =  100 / ($betPosition)
        total_charge = game_logic / game__charges
        payout.set((game_logic - total_charge).toFixed(4))
    }else{
        game_logic =  100 / (100 - $betPosition)
        total_charge = game_logic / game__charges
        payout.set((game_logic - total_charge).toFixed(4))
    }
}

$: {
    if($rollunder){
        game_logic = 100 / $payout
        total_charge = game_logic / game__charges
        betPosition.set((game_logic - total_charge).toFixed(2))
        range.set($betPosition)
    }else{
        game_logic = 100 / $payout
        total_charge = game_logic / game__charges
        betPosition.set((game_logic - total_charge).toFixed(2))
        range.set(100 - $betPosition)
    }
}


let DgII = ''
let hisQQ = false
const handleDiceHistoryDetail = ((data)=>{
    if(hisQQ){
        hisQQ = false
    }else{
        DgII = data
        hisQQ = true
    }
})

function playSounRd() {
    const audio = new Audio(cr);
    audio.volume = 0.5;
    audio.play();
}

// Function to toggle play/pause
function togglePlayback() {
  isPlaying = !isPlaying;
  if (isPlaying) {
    click.play();
  } else {
    click.pause();
  }
}

const handleChange = ((e)=>{
    playSounRd()
    range.set(e)
    let re = 100 - $range
    rangeEl = 100 - $range
})

$:{
    if($betPosition < 0){
        $betPosition = 2
    }
    if($payout > 9900){
        $payout = 98
    }
    if($payout < 1.0102){
        $payout = 1.0102
    }
}

const handleRollUnder = ()=>{
    if($rollunder){
        rollunder.set(false)
        range.set(100 - $betPosition)
    }else{
        rollunder.set(true)
        range.set($betPosition)
    }
}

function playSoundR(e) {
    if(e === 1){
        const audio = new Audio(cr);
        audio.volume = 0.05;
        audio.play();
    }else{
        const audio = new Audio(win);
        audio.volume = 0.05;
        audio.play();
    }
}

let history 
$:{
    history  = [...$dice_history]
}

$:{
    if($dice_wallet.length > 0){
        $dice_wallet.forEach(element => {
        if($profileStore.user_id === element.user_id){
            let wallet = {
                coin_name: element.token,
                coin_image: element.token_img,
                balance:  element.current_amount
             }
             default_Wallet.set(wallet)
        }
    });
    }
}


$:{
    if($dice_troo.length > 0){
        $dice_troo.forEach(element => {
        if($profileStore.user_id === element.user_id){
            dice_history.set(history)
            HandleDicePoint.set(element.cashout)
            history.push(element)
            isbetLoadingBtn.set()
            dice_troo.set([])    
            if(element.has_won){
                winning_track.set($winning_track += parseFloat(element.profit))
                if($handleOnwin){
                    let to = (($handleOnwin/100) * parseFloat($handlediceAutoInput)/1)
                    let from = (to + parseFloat($handlediceAutoInput)).toFixed(4)
                    handlediceAutoInput.set(from)
                }
                if($handleOnLose){
                    handlediceAutoInput.set($Autopre_bal)
                }
             playSoundR(2)
             HandleHas_won.set(true)
            }else{
                losing_track.set($losing_track += parseFloat(element.bet_amount))
                if($handleOnLose){
                    let to = (($handleOnLose/100) * parseFloat($handlediceAutoInput)/1)
                    let from = (to + parseFloat($handlediceAutoInput)).toFixed(4)
                    handlediceAutoInput.set(from)
                }
                HandleHas_won.set(false)
            }
        }
    }); 
    }
}

</script>

{#if hisQQ}
<HistoryDetails on:close={handleDiceHistoryDetail} DgII={DgII} />
{/if}

<div class="game-view">
    <div class="sc-hoHwyw fIoiVG game-recent ">
        <div class="recent-list-wrap">
            {#if $handleisLoggin}
                {#if $dice_history.length !== 0}
                <div class="recent-list" style="width: 100%; transform: translate(0%, 0px);">
                {#each $dice_history.slice(-10) as  dice} 
                    <button  on:click={()=> handleDiceHistoryDetail(dice)} class="recent-item" style="width: 20%;">
                        <div class={`item-wrap ${dice.has_won ? "is-win" : "is-lose"} `}>{(parseFloat(dice.cashout)).toFixed(2)}</div>
                    </button>
                {/each}
                </div> 
                {:else}
                <div class="empty-item">
                    <p>Game results will be displayed here.</p>
                </div>
                {/if}
                {:else}
                <div class="empty-item">
                    <p>Game results will be displayed here.</p>
                </div>
            {/if}
        </div>
    </div>

    <div class="sc-hcupDf dqwCNK game-box sc-jwQYvw fPOXr">
        <div class="sc-gLDmcm gnjHQb">
            <span>House Edge 1%</span>
        </div>

        <div class="game-slider ">
            <div class="slider-wrapper">
                <div class="slider-handles">
                    {#if ishover}
                        <div class="slider-tip" style={`left: ${ $rollunder ? $betPosition - 5 : 100 - $betPosition - 5 }%;`}>{(parseFloat($range)).toFixed(0)}</div>
                    {/if}
                    <input disabled={$Handles_alive} type="range" on:mouseenter={()=>handleRangl(1)} on:mouseleave={()=>handleRangl(2)} min="2" max="98" step="1" class="drag-block "  on:input={(e)=> handleChange(e.target.value)} bind:value={$range}>
                    <div class="slider-track " style={`transform: translate(${$HandleDicePoint}%, 0px);`}>
                        {#if parseFloat($HandleDicePoint) === 50}
                        <div class="dice_num ">{(parseFloat($HandleDicePoint)).toFixed(2)}</div>
                        {:else}
                            <div style={`color: ${$HandleHas_won ? "rgb(67, 179, 9)" : "rgb(237, 99, 0)"};`} class="dice_num ">{(parseFloat($HandleDicePoint)).toFixed(2)}</div>
                        {/if}
                        <div class={`dice_png ${$HandleHas_won ? "dice-animate" : ""}`}>
                            <img alt="dice.png" src="https://static.nanogames.io/assets/dice.1007262a.png">
                        </div>
                    </div>
                    <div class="slider-line ">
                        <div class={ $rollunder ? "slide-win" : "slide-lose"} style={`width: ${$rollunder ? $betPosition : 100 - $betPosition }%;`}></div>
                        <div class={$rollunder ? "slide-lose" : "slide-win"} style={`width: ${$rollunder ? 100 - $betPosition : $betPosition}%;`}></div>
                        <div class="slider-sign" style={`transform: translate(${$HandleDicePoint}%, 0px);`}>
                            <div class="sign"></div>
                        </div>
                    </div>
                </div>
                <div class="slider-mark">
                    <span class="mark">0</span>
                    <span class="mark">25</span>
                    <span class="mark">50</span>
                    <span class="mark">75</span>
                    <span class="mark">100</span>
                </div>
            </div>

            <div class="sc-ljMRFG jdrurA">
                <div class="sc-ezbkAF gcQjQT input ">
                    <div class="input-label">Payout</div>
                    <div class="input-control">
                        <input type="number" bind:value={$payout}>
                        <span class="right-info">x</span>
                    </div>
                </div>
                <div class="sc-ezbkAF gcQjQT input roll-switch">
                    <div class="input-label">{ $rollunder ? "Roll Under" : "Roll Over"}</div>
                    <button on:click={handleRollUnder} class="input-control">
                        <input type="text" readonly value={ $rollunder ? $betPosition : (parseFloat(100 - $betPosition)).toFixed(2)}>
                        <span class="right-info">
                            <Icon src={AiOutlineSwap}  size="18"  color="rgb(67, 179, 9)"/>
                        </span>
                    </button>
                </div>
                <div class="sc-ezbkAF gcQjQT input win-change">
                    <div class="input-label">Win Chance</div>
                    <div class="input-control">
                        <input type="number" min="2" max="98" bind:value={$betPosition}>
                        <div class="right-info">
                            <span class="right-percent">%</span>
                            <button on:click={()=> range.set(2)} class="amount-scale">Min</button>
                            <button on:click={()=> range.set($range -5)} class="amount-scale">-5</button>
                            <button on:click={()=> range.set($range +5) }  class="amount-scale">+5</button>
                            <button on:click={()=> range.set(98)} class="amount-scale">Max</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>



<style>
.fIoiVG {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 2.75rem;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
}

.slider-tip {
    box-sizing: border-box;
    position: absolute;
    top: -3.625rem;
    height: 2.65rem;
    width: 2.65rem;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    color: rgba(153, 164, 176, 0.8);
    background-color: rgb(37, 39, 43);
    box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 8px;
    border-radius: 0.425rem;
}

 .recent-list-wrap {
    flex: 1 1 auto;
    height: 100%;
    margin: 0px 1.5rem;
    overflow: hidden;
    position: relative;
    transition: all 0.5s ease-in;
    border-radius: 1.375rem;
}

.dqwCNK {
    position: relative;
}

.gnjHQb {
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
 .dice-animate::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: -1;
    background: url(https://static.nanogames.io/assets/win.449738f6.png) center center / 100% 100% no-repeat;
    animation: rotation 5s infinite linear;
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.dice-animate img {
    transition: all 0.3s ease 0s;
    transform-origin: center bottom;
    animation: 500ms ease 0s 1 normal none running transDice;
}



.fIoiVG .empty-item {
    display: flex;
    width: 100%;
    height: 100%;
    color: rgba(153, 164, 176, 0.6);
    background-color: rgba(122, 128, 140, 0.15);
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 1.375rem;
}

.fIoiVG .empty-item>p {
    margin: 0px;
    padding: 0px 0.75rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.fIoiVG .recent-list {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    transition: all 0.5s ease-in;
}


.fIoiVG .recent-item {
    padding: 0px 0.25rem;
    cursor: pointer;
    animation: pull 1s ;
    transition: all 0.5s ease;
}

.fIoiVG .is-lose {
    color: rgba(153, 164, 176, 0.6);
    background-color: rgba(122, 128, 140, 0.15);
}
.fIoiVG .is-win {
    color: rgb(245, 246, 247);
    background-color: rgb(67, 179, 9);
}
.fIoiVG .item-wrap {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 0%;
    height: 100%;
    border-radius: 1.375rem;
    font-weight: bold;
}

.dqwCNK {
    position: relative;
}

.fPOXr {
    -webkit-box-flex: 1;
    flex-grow: 1;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    place-content: center;
    position: relative;
    padding: 80px 10%;
    min-height: 37.5rem;
}

.fPOXr .game-slider {
    margin: auto;
    position: relative;
}

.fPOXr .game-slider .slider-wrapper {
    position: relative;
    height: 2.5rem;
    margin-bottom: 5rem;
    margin-top: 10rem;
}

.fPOXr .game-slider .slider-wrapper .slider-handles {
    height: 2.5rem;
    position: absolute;
    inset: 0px 1.125rem;
    transition: opacity 0.3s ease 0s;
}

.fPOXr .game-slider .slider-wrapper .slider-handles .drag-block {
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

.fPOXr .game-slider .slider-wrapper .slider-handles .drag-block::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: 0px;
    /* Centers thumb on the track */
    background-color: #feffff;
    height: 2rem;
    width: 1.4rem;
    border-radius: 10px;
    cursor: grabbing;
}

.fPOXr .game-slider .slider-wrapper .slider-handles .slider-track {
    position: absolute;
    left: 0%;
    bottom: 3rem;
    transition: transform 400ms ease 0s;
    z-index: 99;
    width: 100%;
    height: 8.875rem;
    margin-left: -4.4375rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}

.fPOXr .game-slider .slider-wrapper .slider-handles .slider-track .dice_num {
    font-size: 1.875rem;
    font-weight: bold;
    pointer-events: none;
    color: rgb(255, 255, 255);
    width: 9.25rem;
    height: 4.125rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    left: -0.1875rem;
    top: -3rem;
    position: absolute;
    border-radius: 0.5rem;
    border: 0.3125rem solid rgb(49, 52, 60);
    background-color: rgb(35, 38, 43);
}

.fPOXr .game-slider .slider-wrapper .slider-handles .slider-track .dice_png {
    width: 8.875rem;
    height: 100%;
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    transition: all 400ms ease 0s;
}

.fPOXr .game-slider .slider-wrapper .slider-handles .slider-track .dice_png img {
    width: 4.125rem;
    margin-left: -0.25rem;
}

.fPOXr .game-slider .slider-wrapper .slider-handles .slider-line {
    position: absolute;
    height: 0.625rem;
    width: 100%;
    right: 0px;
    top: 1rem;
    border-radius: 100px;
    overflow: hidden;
    display: flex;
    box-shadow: rgba(49, 52, 60, 0.4) 0px 0px 0px 1.5rem;
}

.fPOXr .game-slider .slider-wrapper .slider-handles .slider-line .slide-win {
    border-radius: 0.625rem 0px 0px 0.625rem;
    height: 100%;
    background: rgb(67, 179, 9);
}

.fPOXr .game-slider .slider-wrapper .slider-handles .slider-line .slide-lose {
    border-radius: 0px 0.625rem 0.625rem 0px;
    height: 100%;
    background: rgb(237, 99, 0);
}

.fPOXr .game-slider .slider-wrapper .slider-handles .slider-line .slider-sign {
    display: block;
    transition: transform 400ms ease 0s;
    content: "";
    position: absolute;
    bottom: 0px;
    top: 0px;
    margin-left: -0.125rem;
    width: 100%;
}

.fPOXr .game-slider .slider-wrapper .slider-handles .slider-line .slider-sign .sign {
    width: 0.25rem;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
}

.fPOXr .game-slider .slider-wrapper .slider-mark {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: absolute;
    top: 3.75rem;
    left: 0px;
    right: 0px;
}

.fPOXr .game-slider .slider-wrapper .slider-mark .mark {
    width: 1.875rem;
    text-align: center;
    color: rgb(245, 246, 247);
}

.jdrurA {
    background-color: rgba(49, 52, 60, 0.4);
    position: relative;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: wrap;
    min-height: 7.375rem;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 1.25rem;
    padding: 1rem 0px 1rem 1.5rem;
}
.jdrurA .input {
    flex: 1 1 0%;
    margin-top: 0px;
    min-width: 7.5rem;
    margin-right: 1.5rem;
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
.jdrurA .input-control {
    display: flex;
    background-color: rgba(49, 52, 60, 0.5);
    
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
.gcQjQT .input-control:focus-within {
    border: 1px solid var(--primary-color);
}
.jdrurA .input {
    flex: 1 1 0%;
    margin-top: 0px;
    min-width: 7.5rem;
    margin-right: 1.5rem;
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
.input-control {
    border-color: transparent;
}
.jdrurA .input-control .right-info {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(67, 179, 9);
    line-height: 1;
    box-sizing: border-box;
}
.jdrurA .input:last-child {
    width: 45%;
}
.jdrurA .win-change {
    flex: 2 1 0%;
    min-width: 15rem;
}
.jdrurA .win-change .right-info {
    margin-right: -1.125rem;
}
.jdrurA .input-control .right-info {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(67, 179, 9);
    line-height: 1;
    box-sizing: border-box;
}
.jdrurA .input-control .right-info .right-percent {
    margin-right: 0.625rem;
}
.jdrurA .win-change .right-info button:first-of-type {
    padding-left: 0.125rem;
    border-top-left-radius: 1.125rem;
    border-bottom-left-radius: 1.125rem;
}
.jdrurA .win-change .right-info button {
    width: 2.75rem;
    height: 2.25rem;
    line-height: 2.25rem;
    font-size: 0.75rem;
    color: rgb(153, 164, 176);
    background: rgb(49, 52, 60);
    margin-left: 1px;
    border-radius: 0px;
    padding: 0px;
    text-align: center;
}
.jdrurA .win-change .right-info button:last-of-type {
    padding-right: 0.125rem;
    border-top-right-radius: 1.125rem;
    border-bottom-right-radius: 1.125rem;
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
.jdrurA .input {
    flex: 1 1 0%;
    margin-top: 0px;
    min-width: 7.5rem;
    margin-right: 1.5rem;
}
.jdrurA .win-change {
    flex: 2 1 0%;
    min-width: 15rem;
}
.gcQjQT .input-control input[readonly] {
    opacity: 0.5;
}
.jdrurA .roll-switch input {
    user-select: none;
    cursor: pointer;
}

</style>
