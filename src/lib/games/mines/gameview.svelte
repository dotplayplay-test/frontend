<script>
import { payout } from "$lib/games/ClassicDice/store/index"
import { HandleDicePoint, betPosition, dice_history, HandleHas_won} from "./store/index"
import { DiceHistory } from "./hook/diceHistory";
const { historyD } = DiceHistory()
import { onMount } from "svelte";
import { handleisLoggin } from "../../store/profile"
import HistoryDetails from "./componets/historyDetails.svelte";
import click from "./audio/click.wav"
import cr from "./audio/click.wav"
let range = 50

$:{
    onMount(async()=>{
        $handleisLoggin &&  historyD()
    })
}

$:{
    betPosition.set(range)
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

$: {
    game_logic = 100 / $betPosition
    total_charge = game_logic / game__charges
    payout.set((game_logic - total_charge).toFixed(4))
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

function playSound() {
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
    playSound()
    range = e
})

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
                {#each $dice_history.slice(-6) as  dice (dice._id)} 
                    <button  on:click={()=> handleDiceHistoryDetail(dice)} class="recent-item" style="width: 20%;">
                        <div class={`item-wrap ${dice.has_won ? "is-win" : "is-lose"} `}>{dice.cashout}</div>
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

         <div class="sc-hcupDf dqwCNK game-box sc-deghWO jKOkvT">
            <div class="sc-gWDJhD hnBJiv mine-stage">
                <div class="grids-wrap ">
                    <button class="sc-dSaQTq iuMTMb grid-item">
                        <div class="sc-fAyhPT hLmIlp"></div>
                    </button>
                    <button class="sc-dSaQTq iuMTMb grid-item">
                        <div class="sc-fAyhPT hLmIlp"></div>
                    </button>
                    <button class="sc-dSaQTq iuMTMb grid-item">
                        <div class="sc-fAyhPT hLmIlp"></div>
                    </button>
                    <button class="sc-dSaQTq iuMTMb grid-item">
                        <div class="sc-fAyhPT hLmIlp"></div>
                    </button>
                    <button class="sc-dSaQTq iuMTMb grid-item">
                        <div class="sc-fAyhPT hLmIlp"></div>
                    </button>
                    <button class="sc-dSaQTq iuMTMb grid-item">
                        <div class="sc-fAyhPT hLmIlp"></div>
                    </button>
                    <button class="sc-dSaQTq iuMTMb grid-item"><div class="sc-fAyhPT hLmIlp"></div></button><button class="sc-dSaQTq iuMTMb grid-item"><div class="sc-fAyhPT hLmIlp"></div></button><button class="sc-dSaQTq iuMTMb grid-item"><div class="sc-fAyhPT hLmIlp"></div></button><button class="sc-dSaQTq iuMTMb grid-item"><div class="sc-fAyhPT hLmIlp"></div></button><button class="sc-dSaQTq iuMTMb grid-item"><div class="sc-fAyhPT hLmIlp"></div></button><button class="sc-dSaQTq iuMTMb grid-item"><div class="sc-fAyhPT hLmIlp"></div></button><button class="sc-dSaQTq iuMTMb grid-item"><div class="sc-fAyhPT hLmIlp"></div></button><button class="sc-dSaQTq iuMTMb grid-item"><div class="sc-fAyhPT hLmIlp"></div></button><button class="sc-dSaQTq iuMTMb grid-item"><div class="sc-fAyhPT hLmIlp"></div></button><button class="sc-dSaQTq iuMTMb grid-item"><div class="sc-fAyhPT hLmIlp"></div></button><button class="sc-dSaQTq iuMTMb grid-item"><div class="sc-fAyhPT hLmIlp"></div></button><button class="sc-dSaQTq iuMTMb grid-item"><div class="sc-fAyhPT hLmIlp"></div></button><button class="sc-dSaQTq iuMTMb grid-item"><div class="sc-fAyhPT hLmIlp"></div></button><button class="sc-dSaQTq iuMTMb grid-item"><div class="sc-fAyhPT hLmIlp"></div></button><button class="sc-dSaQTq iuMTMb grid-item"><div class="sc-fAyhPT hLmIlp"></div></button><button class="sc-dSaQTq iuMTMb grid-item"><div class="sc-fAyhPT hLmIlp"></div></button><button class="sc-dSaQTq iuMTMb grid-item"><div class="sc-fAyhPT hLmIlp"></div></button><button class="sc-dSaQTq iuMTMb grid-item"><div class="sc-fAyhPT hLmIlp"></div></button><button class="sc-dSaQTq iuMTMb grid-item"><div class="sc-fAyhPT hLmIlp"></div></button></div><div class="sc-ieCETs dOthbb"><div class=" star-item index1"></div><div class=" star-item index2"></div><div class="active  star-item index3"></div><div class="active  star-item index4"></div></div></div><div class="sc-gLDmcm gnjHQb"><span>House Edge 1%</span></div><svg class="box-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 996 46"><defs><linearGradient id="gcardBg" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#31343C"></stop><stop offset="100%" stop-color="#1E2024" stop-opacity="0"></stop></linearGradient></defs><g opacity=".899"><path fill="url(#gcardBg)" fill-rule="evenodd" d="M0 0h996L892 46H96z" opacity=".598" transform="rotate(-180 498 23)"></path></g></svg></div>

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
}


.fIoiVG .recent-item {
    padding: 0px 0.25rem;
    cursor: pointer;
    animation: pull 1s ;

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

</style>
