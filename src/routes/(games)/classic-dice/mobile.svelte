<script>
import MobileManual from "$lib/games/ClassicDice/mobileManual.svelte";
import { payout } from "$lib/games/ClassicDice/store/index"
import { HandleDicePoint,range, betPosition, dice_history,Handles_alive, handleOnLose,Autopre_bal, HandleHas_won,winning_track,losing_track,handlediceAutoInput, handleStopOnLose, handleOnwin, rollunder,handleStopOnwin, flix} from "$lib/games/ClassicDice/store/index"
import Icon from 'svelte-icons-pack/Icon.svelte';
import AiOutlineSwap from "svelte-icons-pack/ai/AiOutlineSwap";
import AiFillSound from "svelte-icons-pack/ai/AiFillSound";
import BiSolidKeyboard from "svelte-icons-pack/bi/BiSolidKeyboard";
import BiStats from "svelte-icons-pack/bi/BiStats";
import RiSystemArrowDropRightLine from "svelte-icons-pack/ri/RiSystemArrowDropRightLine";
import BiSolidAlbum from "svelte-icons-pack/bi/BiSolidAlbum";
import BsHurricane from "svelte-icons-pack/bs/BsHurricane";
import { handleisLoggin } from "$lib/store/profile"
import HistoryDetails from "$lib/games/ClassicDice/componets/historyDetails.svelte";
import { soundHandler } from "$lib/games/ClassicDice/store/index"
import MobileAuthController from "$lib/games/ClassicDice/mobileAutoController.svelte"
import click from "$lib/games/ClassicDice/audio/click.wav"
import cr from "$lib/games/ClassicDice/audio/click.wav"
import Allbet from "$lib/games/ClassicDice/componets/allbet.svelte";
import Mybet from "$lib/games/ClassicDice/componets/mybet.svelte";
import LiveStats from "$lib/games/ClassicDice/componets/liveStats.svelte";
import Help from "../crash/help.svelte";
import SeedSetting from "$lib/games/ClassicDice/componets/seedSetting.svelte";


let rangeEl = 50
let flip = 50

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

let houseEgde = 1
let game__charges = 100 / houseEgde
let game_logic;
let total_charge;

// $: {
//     if($rollunder){
//         game_logic =  100 / ($betPosition)
//         total_charge = game_logic / game__charges
//         payout.set((game_logic - total_charge).toFixed(4))
//     }else{
//         game_logic =  100 / (100 - $betPosition)
//         total_charge = game_logic / game__charges
//         payout.set((game_logic - total_charge).toFixed(4))
//     }
// }

// $: {
//     if($rollunder){
//         game_logic = 100 / $payout
//         total_charge = game_logic / game__charges
//         betPosition.set((game_logic - total_charge).toFixed(2))
//         range = ($betPosition)
//     }else{
//         game_logic = 100 / $payout
//         total_charge = game_logic / game__charges
//         betPosition.set((game_logic - total_charge).toFixed(2))
//         range = (100 - $betPosition)
//     }
// }


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




async function playSound() {
    
    try{
        const audio = new Audio(cr);
        audio.volume = 0.5;
        audio.play();
    }
    catch(err){
        console.log(err)
    }

}

const handleChange = ((e)=>{
    playSound()
    range.set(e)
    let re = 100 - $range
    rangeEl = 100 - $range
})

$:{
    if($betPosition < 0){
        $betPosition = 0.01
    }
    if($payout > 9900){
        $payout = 9900
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

let isAdvance = false
const handleChangeRoute = (e)=>{
    if(e === 1){
        isAdvance = false
    }else{
        isAdvance = true
    }
}

let isallbet = true
let ismybet = false
let iscontest = false
const handleTabs = ((event)=>{
    if(event === 1){
        isallbet = true
        ismybet = false
        iscontest = false
    }
    else if(event === 2){
        ismybet = true
        iscontest = false
        isallbet = false
    }
    else if(event === 3){
        iscontest = true
        ismybet = false
        isallbet = false
    }
})

let is_stats = false
let stats = (()=>{
  is_stats = !is_stats
})
let isSeed = false
const  hanhisSeed = (()=>{
  isSeed = !isSeed
})

let isHelp = false

const handleIsHelp = (()=>{
  isHelp = !isHelp
})


const handleSoundState = (()=>{
    if($soundHandler){
        soundHandler.set(0)
    }else{
        soundHandler.set(1)
    }
})



 
</script>

{#if hisQQ}
<HistoryDetails on:close={handleDiceHistoryDetail} DgII={DgII} />
{/if}


<!-- {#if is_stats} -->
  <!-- <LiveStats on:close={stats} /> -->
<!-- {/if} -->

{#if isSeed}
  <SeedSetting on:close={hanhisSeed}/>
{/if}

{#if isHelp}
<Help on:close={handleIsHelp} />
{/if}


<div class="sc-lhMiDA ePAxUv" style="opacity: 1; transform: none;">
   <div id="game-ClassicDice" class="sc-haTkiu glMLZr game-style-mobile sc-gDGHff gYWFhf">
        <div class="game-area">
            <div class="game-main"> 
                <div class="game-view">
                    <div class="sc-hoHwyw fIoiVG game-recent ">
                        <div class="recent-list-wrap">
                            <div class="recent-list" style="width: 133.333%;">
                            {#if $handleisLoggin}
                                {#if $dice_history.length !== 0}
                                {#each $dice_history as dice}
                                <button on:click={()=> handleDiceHistoryDetail(dice)} class="recent-item" style="width: 20%;">
                                    <div class={`item-wrap ${dice.has_won ? "is-win" : "is-lose"} `}>{(parseFloat(dice.cashout)).toFixed(2)}</div>
                                </button>
                                {/each} 
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
                    </div>
                    <div class="sc-hcupDf dqwCNK game-box sc-jwQYvw fPOrXr">
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
                                        <input type="text" readonly value={$betPosition}>
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
                            <svg class="box-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 996 46"><defs><linearGradient id="gcardBg" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#31343C"></stop><stop offset="100%" stop-color="#1E2024" stop-opacity="0"></stop></linearGradient></defs><g opacity=".899"><path fill="url(#gcardBg)" fill-rule="evenodd" d="M0 0h996L892 46H96z" opacity=".598" transform="rotate(-180 498 23)"></path></g></svg>
                        </div>
                    </div>
                </div>

                <div id="ClassicDice-control-0" class="sc-hLVXRe cYiOHZ game-control style-mobile">
                    <div class="sc-iwjdpV ikWSlH radio game-control-switch">
                        <button on:click={()=> handleChangeRoute(1)} class={!isAdvance ? "is-active" : ""}>
                            <div class="label">Manual</div>
                        </button>
                        <button on:click={()=> handleChangeRoute(2)} class={isAdvance ? "is-active" : ""}>
                            <div class="label">Auto</div>
                        </button>
                    </div>
                    {#if !isAdvance}
                        <MobileManual />
                        {:else}
                        <MobileAuthController />
                    {/if}
                </div>

                <div class="game-actions">
                    <button on:click={()=> handleSoundState()} class={`action-item ${$soundHandler ? "active" : ""} `}>
                        <Icon src={AiFillSound} size="23"  color={` ${$soundHandler ? "rgb(67, 179, 9)" : "rgba(153, 164, 176, 0.6)"} `} title="Sound" />
                    </button>
                    <button on:click={stats} class="action-item ">
                        <Icon src={BiStats}  size="18"  color="rgb(153, 164, 176)" />
                    </button>
                    <button on:click={hanhisSeed} class="action-item " id="set_seed">
                        <Icon src={BiSolidAlbum}  size="18"  color="rgb(153, 164, 176)" />
                    </button>
                    <button on:click={handleIsHelp} class="action-item ">
                        <Icon src={BsHurricane}  size="18"  color="rgb(153, 164, 176)" />
                    </button>
                </div>
            </div>
        </div>
    <div class="sc-cxpSdN kQfmQV tabs game-tabs len-3">
        <div class="tabs-navs">
            <button on:click={()=>handleTabs(1)} class={`tabs-nav ${isallbet ? "is-active" : ""}`}>All Bets</button>
            <button on:click={()=>handleTabs(2)} class={`tabs-nav ${ismybet ? "is-active" : ""}`}>My Bets</button>
            <button on:click={()=>handleTabs(3)} class={`tabs-nav ${iscontest ? "is-active" : ""}`}>Contest</button>
            {#if isallbet}
                <div class="bg" style="left: 0%; right: 66.6667%;"></div>
                {:else if ismybet}
                <div class="bg" style="left: 33%; right: 33%;"></div>
                {:else if iscontest}
                <div class="bg" style="left: 66.6667%; right: 0%;"></div>
            {/if}
        </div>
        {#if isallbet}
            <Allbet />
            {:else if ismybet}
            <Mybet />
        {/if}
    </div>
   </div>
</div>

<style>
.glMLZr.game-style-mobile {
    padding: 0.625rem;
}
.glMLZr {
    min-height: 90vh;
}
.glMLZr .game-main {
    position: relative;
    border-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
}
.glMLZr.game-style-mobile .game-view {
    width: 100%;
    overflow: hidden;
    min-width: 100%;
    border-radius: 1.25rem 1.25rem 0px 0px;
}
.fIoiVG {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 2.75rem;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
}
.fIoiVG .recent-list-wrap {
    flex: 1 1 auto;
    height: 100%;
    margin: 0px 1.5rem;
    overflow: hidden;
    position: relative;
    border-radius: 1.375rem;
}
/* .fIoiVG .recent-list-wrap {
    margin: 0px 0.625rem;
} */
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
.fIoiVG .empty-item > p {
    margin: 0px;
    padding: 0px 0.75rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.fPOrXr {
    display: flex;
    -webkit-box-flex: 1;
    flex-grow: 1;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    place-content: center;
    position: relative;
    padding: 0px 10%;
    min-height: 37.5rem;
}
@media only screen and (max-width: 400px){
.fPOrXr {
    padding: 0px 0.75rem;
    min-height: 30rem;
}
}
.fPOrXr {
    min-height: 30rem;
}
.gnjHQb {
    min-width: 6.25rem;
    text-align: center;
    right: 0.875rem;
    bottom: 1rem;
    height: 2.25rem;
    line-height: 2.25rem;
    padding: 0px 0.75rem;
}
.gnjHQb {
    position: absolute;
    z-index: 2;
    right: 1.5rem;
    bottom: 0.5rem;
    font-weight: 500;
    min-width: 8.75rem;
    padding: 0px 1.125rem;
    border-radius: 1.125rem;
    height: 2.25rem;
    line-height: 2.25rem;
    color: rgba(153, 164, 176, 0.6);
    background-color: rgba(49, 52, 60, 0.4);
}
.gnjHQb span {
    font-size: 0.75rem;
    transform: scale(0.83);
}
.fPOrXr .game-slider {
    position: relative;
    text-align: left;
}
.fPOrXr .game-slider {
    width: 100%;
    margin-top: 3rem;
}
.fPOrXr .game-slider .slider-wrapper {
    position: relative;
    height: 2.5rem;
    margin-bottom: 5rem;
    margin-top: 10rem;
}
.fPOrXr .game-slider .slider-wrapper {
    margin-top: 4.5rem;
    margin-bottom: 3.5rem;
}
.fPOrXr .game-slider .slider-wrapper .slider-handles {
    height: 2.5rem;
    position: absolute;
    inset: 0px 1.125rem;
    padding-top: 10px;
    transition: opacity 0.3s ease 0s;
}
.fPOrXr .game-slider .slider-wrapper .slider-handles .drag-block {
    position: absolute;
    z-index: 10;
    top: 0px;
    left: 0px;
    bottom: 0px;
    background-color: transparent;
    border-radius: 10px;
    appearance: none;
    width: 100%;
    margin: 0px;
    height: 100%;
    cursor: pointer;
}
.fPOrXr .game-slider .slider-wrapper .slider-handles .slider-track {
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

 .game-slider .slider-wrapper .slider-handles .drag-block {
    position: absolute;
    z-index: 10;
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

.jdrurA .win-change .right-info button:last-of-type {
    padding-right: 0.125rem;
    border-top-right-radius: 1.125rem;
    border-bottom-right-radius: 1.125rem;
}


 .game-slider .slider-wrapper .slider-handles .drag-block::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: 0px;
    /* Centers thumb on the track */
    background-color: #feffff;
    height: 1.6rem;
    width: 1.2rem;
    border-radius: 10px;
    cursor: grabbing;
}

.fPOrXr .game-slider .slider-wrapper .slider-handles .slider-track {
    bottom: 2.25rem;
    height: 6.25rem;
    margin-left: -3.125rem;
}
.fPOrXr .game-slider .slider-wrapper .slider-handles .slider-track .dice_num {
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
.fPOrXr .game-slider .slider-wrapper .slider-handles .slider-track .dice_num {
    width: 7rem;
    height: 3.25rem;
    font-size: 1.4rem;
    font-weight: bold;
    top: -2.5rem;
    left: 0.125rem;
}
.fPOrXr .game-slider .slider-wrapper .slider-handles .slider-track .dice_png {
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
.fPOrXr .game-slider .slider-wrapper .slider-handles .slider-track .dice_png {
    width: 6.25rem;
    height: 100%;
}
.fPOrXr .game-slider .slider-wrapper .slider-handles .slider-track .dice_png img {
    width: 4.125rem;
    margin-left: -0.25rem;
}
.fPOrXr .game-slider .slider-wrapper .slider-handles .slider-track .dice_png img {
    width: 3.125rem;
    height: 3.125rem;
}
.fPOrXr .game-slider .slider-wrapper .slider-handles .slider-line {
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
.fPOrXr .game-slider .slider-wrapper .slider-handles .slider-line {
    /* height: 0.375rem; */
    box-shadow: rgba(49, 52, 60, 0.4) 0px 0px 0px 1.25rem;
}
.fPOrXr .game-slider .slider-wrapper .slider-handles .slider-line .slide-win {
    border-radius: 0.625rem 0px 0px 0.625rem;
    height: 100%;
    background: rgb(67, 179, 9);
}
.fPOrXr .game-slider .slider-wrapper .slider-handles .slider-line .slide-lose {
    border-radius: 0px 0.625rem 0.625rem 0px;
    height: 100%;
    background: rgb(237, 99, 0);
}
.fPOrXr .game-slider .slider-wrapper .slider-handles .slider-line .slider-sign {
    display: block;
    transition: transform 400ms ease 0s;
    content: "";
    position: absolute;
    bottom: 0px;
    top: 0px;
    margin-left: -0.125rem;
    width: 100%;
}
.fPOrXr .game-slider .slider-wrapper .slider-handles .slider-line .slider-sign .sign {
    width: 0.25rem;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
}
.fPOrXr .game-slider .slider-wrapper .slider-mark {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: absolute;
    top: 3.75rem;
    left: 0px;
    right: 0px;
}
.fPOrXr .game-slider .slider-wrapper .slider-mark .mark {
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
.jdrurA {
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0.625rem 0px 0.625rem 0.625rem;
    -webkit-box-align: center;
    align-items: center;
    height: 10.75rem;
    min-width: 100%;
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
.jdrurA .input {
    width: 49%;
    margin-bottom: 0.625rem;
    margin-right: 0.625rem;
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
.glMLZr .input-control {
    border-color: transparent;
}
.jdrurA .input-control {
    display: flex;
    background-color: rgba(49, 52, 60, 0.5);
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
.jdrurA .input input {
    font-weight: bold;
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
    width: 100%;
    margin-bottom: 0px;
}
.glMLZr .input-control {
    border-color: transparent;
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
.jdrurA .win-change .right-info button:first-of-type {
    padding-left: 0.125rem;
    border-top-left-radius: 1.125rem;
    border-bottom-left-radius: 1.125rem;
}
.cYiOHZ.style-mobile .game-control-switch {
    order: 2;
    margin-top: 1.25rem;
    position: relative;
}
.cYiOHZ.style-mobile {
    flex-direction: column;
}
.cYiOHZ {
    display: flex;
}
.cYiOHZ.style-mobile .game-control-switch {
    order: 2;
    margin-top: 1.25rem;
    position: relative;
}
.cYiOHZ .game-control-switch {
    display: flex;
    flex: 0 0 auto;
}
.cYiOHZ.style-mobile .game-control-switch::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    height: 1px;
    opacity: 0.3;
    background-color: rgb(49, 52, 60);
}
.cYiOHZ.style-mobile .game-control-switch > button.is-active {
    border-bottom-color: rgb(67, 179, 9);
    background-image: linear-gradient(to top, rgba(123, 197, 20, 0.3), rgba(123, 197, 20, 0) 50%);
}
.cYiOHZ.style-mobile .game-control-switch > button {
    height: 3rem;
    border-bottom: 2px solid transparent;
}
.cYiOHZ .game-control-switch > button.is-active {
    color: rgb(245, 246, 247);
    font-weight: bold;
}
.cYiOHZ .game-control-switch > button {
    flex: 1 1 0%;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
}
.cYiOHZ .game-control-switch > button {
    flex: 1 1 0%;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
}
.glMLZr .game-actions {
    display: flex;
    order: 10;
    -webkit-box-align: center;
    align-items: center;
    height: 4rem;
    position: relative;
}
.glMLZr .game-actions::before {
    content: "";
    flex: 1 1 0%;
}
.glMLZr .action-item {
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
.glMLZr .game-tabs {
    margin-top: 2.5rem;
}
.glMLZr .game-tabs {
    position: relative;
    padding-top: 3rem;
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
.glMLZr .game-tabs .tabs-navs {
    margin-bottom: 0.75rem;
    margin-left: 0.625rem;
    display: inline-flex;
}
.glMLZr .game-tabs .tabs-navs {
    position: absolute;
    left: 50%;
    top: 0px;
    transform: translateX(-50%);
    margin: 0px;
}
.glMLZr .game-tabs .tabs-navs .tabs-nav {
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
.glMLZr .game-tabs .tabs-navs .tabs-nav {
    width: 5.625rem;
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

/* .fIoiVG .recent-list-wrap {
    margin: 0px 0.625rem;
} */
.fIoiVG .recent-list {
    position: absolute;
    font-size: 13px;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
}

.fIoiVG .recent-item {
    padding: 0px 0.25rem;
    cursor: pointer;
}

/* .fIoiVG .recent-item {
    padding: 0px 0.25rem;
    cursor: pointer;
    margin: 3px;
} */
.fIoiVG .is-win {
    color: rgb(245, 246, 247);
    background-color: rgb(67, 179, 9);
}
.fIoiVG .is-lose {
    color: rgba(153, 164, 176, 0.6);
    background-color: rgba(122, 128, 140, 0.15);
}
.fIoiVG .item-wrap {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 0%;
    height: 100%;
    padding: 10px 21px;
    border-radius: 1.375rem;
    font-weight: bold;
}
.glMLZr .game-tabs .tabs-view {
    background-color: rgb(30, 32, 36);
    border-radius: 1.25rem;
    padding: 1px 0px;
}
.kQfmQV .tabs-view {
    position: relative;
}


</style>