<script>
import { payout } from "$lib/games/ClassicDice/store/index"
import { mine_history, minesStore, HandlemineGems, Cashout, HandleHas_won,betDetails, HandleIsAlive, HandleWinning} from "./store/index"
import { MinesHistory } from "./hook/diceHistory";
const { historyMines } = MinesHistory()
import { onMount } from "svelte";
import { handleAuthToken } from "$lib/store/routes"
import axios from "axios"
import { handleisLoggin } from "../../store/profile"
import HistoryDetails from "./componets/historyDetails.svelte";
import win from "./audio/hit.mp3"
import wion from "./audio/glass-breaking-151256.mp3"
import cr from "./audio/click.wav"
let range = 50
import { ServerURl } from "$lib/backendUrl"
const URL = ServerURl()

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
    const audio = new Audio(win);
    audio.volume = 0.5;
    audio.play();
})

let skown = [
    {id:1, active: false, mine: true},
    {id:2, active: false, mine: false},
    {id:3, active: false, mine: false},
    {id:4, active: false, mine: false},
    {id:5, active: false, mine: false},
    {id:6, active: false, mine: false},
    {id:7, active: false, mine: false},
    {id:8, active: false, mine: false},
    {id:9, active: false, mine: false},
    {id:10, active: false, mine: false},
    {id:11, active: false, mine: false},
    {id:12, active: false, mine: true},
    {id:13, active: false, mine: false},
    {id:14, active: false, mine: false},
    {id:15, active: false, mine: false},
    {id:16, active: false, mine: false},
    {id:17, active: false, mine: false},
    {id:18, active: false, mine: false},
    {id:19, active: false, mine: false},
    {id:20, active: false, mine: false},
    {id:21, active: false, mine: false},
    {id:22, active: false, mine: false},
    {id:23, active: false, mine: true},
    {id:24, active: false, mine: false},
    {id:25, active: false, mine: false},
]

const handleFubbf = (()=>{
    const audio = new Audio(wion);
    audio.volume = 0.5;
    audio.play();
})

const handleLostBet = (async(data)=>{
    mine_history.set([...$mine_history, data])
    await axios.post(`${URL}/api/user/mine-game/lost-bet`,{
        data
    },{
        headers:{
        Authorization: `Bearer ${$handleAuthToken}`
    }
    })
    .then((res)=>{
        (res.data)
    })
    .catch((error)=>{
         console.log(error)
    })
})

let multiplayerEl = 1.03
let multiplier 
const handleMines = ((event)=>{
$minesStore.forEach(element => {
 if(element.id === event.id){
    if(event.mine){
        handleFubbf()
        Cashout.set(0)
        element.active = true
        HandleIsAlive.set(false)
        HandleHas_won.set(true)
        minesStore.set($minesStore)
        handleLostBet({gameLoop:$minesStore, cashout:0})
    }else{
        element.active = true
        handleChange()
        HandlemineGems.set($HandlemineGems - 1)
        minesStore.set($minesStore)
        multiplier = multiplayerEl * (24 - $HandlemineGems)
        Cashout.set(multiplier)
    }
    }
    });
})


const handleActivemies = (async()=>{
    await axios.get(`${URL}/api/user/mine-game/mine-init`,{
        headers:{
        Authorization: `Bearer ${$handleAuthToken}`
    }
    })
    .then((response)=>{
        let pops = response.data[0]
        if(pops){
            minesStore.set(pops.gameLoop)
        let ins = []
        $minesStore.forEach(element => {
             if(!element.mine){
                ins.push(element)
             }
        });
        HandlemineGems.set(ins.length)
        HandleIsAlive.set(pops.active)
    let waskj = [
    {
     mines: pops.mine,
      bet_amount:pops.bet_amount , 
      bet_token_name:pops.bet_token_name,
      bet_token_img:pops.bet_token_img
    }]
        betDetails.set(waskj[0])
    }
    })
    .catch((error)=>{
        console.log(error)
    })
   await historyMines()
})


onMount(async()=>{
    $handleAuthToken && handleActivemies()
})

</script>

{#if hisQQ}
<HistoryDetails on:close={handleDiceHistoryDetail} DgII={DgII} />
{/if}

<div class="game-view">
    <div class="sc-hoHwyw fIoiVG game-recent ">
        <div class="recent-list-wrap">
            {#if $handleisLoggin}
                {#if $mine_history.length !== 0}
                <div class="recent-list" style="width: 100%; transform: translate(0%, 0px);">
                {#each $mine_history.slice(-6) as  dice } 
                    <button  on:click={()=> handleDiceHistoryDetail(dice)} class="recent-item" style="width: 20%;">
                        <div class={`item-wrap ${dice.has_won ? "is-win" : "is-lose"} `}>{(parseFloat(dice.cashout)).toFixed(2)}x</div>
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
                {#if $HandleWinning}
                    <div class="sc-lcdCCa gPUDNx win-wrap" style="opacity: 1; transform: none;">
                        <div class="sc-jrQzAO iodxXo amount">
                            <span style="transform: scale(0.963115);">{(parseFloat($HandleWinning.profit)).toFixed(5)} {$HandleWinning.bet_token_name}</span>
                        </div>
                        <div class="odds">{(parseFloat($HandleWinning.cashout)).toFixed(2)}×</div>
                    </div>
                {/if}
               
                <div class="grids-wrap ">
                {#if $HandleIsAlive}
                {#each $minesStore as ui}
                    <button disabled={ui.active && !ui.mine} on:pointerenter={playSound} on:click={()=>handleMines(ui)} class={`sc-kiwPtn gmXWCK grid-item ${false && "unselected"}`}>
                        {#if ui.active && !ui.mine}
                            <div class={`sc-cdJjGe gsYRFa qLoBl`}>
                                <div class="sc-cdJjGe gsYRFa graph"></div>
                            </div>
                        {:else if ui.active && ui.mine } 
                            <div class="sc-cdJjGe sc-eSJyHI gsYRFa eojQMr effect end mines3"></div>
                            {:else}
                            <div class={`sc-cdJjGe gsYRFa`}>
                            </div>
                        {/if} 
                    </button>
                {/each}
                {:else if $HandleHas_won && !$HandleIsAlive}
                {#each $minesStore as ui}
                <button disabled={true} class={`sc-kiwPtn gmXWCK grid-item ${!ui.active && !ui.mine && "unselected"} `}>
                    {#if !ui.active && !ui.mine}
                        <div class={`sc-cdJjGe gsYRFa qLoBl`}>
                            <div class="sc-cdJjGe gsYRFa graph"></div>
                        </div>
                    {:else if !ui.active && ui.mine } 
                    <div class="sc-lcDUFh gywOmz mines4"></div>
                    {:else if ui.active && ui.mine } 
                    <div class="sc-cdJjGe sc-eSJyHI gsYRFa eojQMr effect end mines3"></div>
                    {:else}
                    <div class={`sc-cdJjGe gsYRFa qLoBl`}>
                        <div class="sc-cdJjGe gsYRFa graph"></div>
                    </div>
                {/if} 
                </button>
                {/each}
                {:else}
                {#each skown as ui}
                <button disabled class={`sc-kiwPtn gmXWCK grid-item unselected`}>
                {#if ui.active && !ui.mine}
                    <div class={`sc-cdJjGe gsYRFa qLoBl`}>
                        <div class="sc-cdJjGe gsYRFa graph"></div>
                    </div>
                {:else if ui.active && ui.mine } 
                    <div class="sc-cdJjGe sc-eSJyHI gsYRFa eojQMr effect end mines3"></div>
                {:else}
                    <div class={`sc-cdJjGe gsYRFa`}></div>
                {/if}
                </button>
            {/each}
            {/if}
                </div>
                <div class="sc-ieCETs dOthbb">
                    <div class=" star-item index1"></div>
                    <div class=" star-item index2"></div>
                    <div class="active  star-item index3"></div>
                    <div class="active  star-item index4"></div>
                </div>
            </div>
            <svg class="box-bg" xmlns="http://www.57896.org/2000/svg" viewBox="0 0 996 46"><defs>
                <linearGradient id="gcardBg" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset="0%" stop-color="#31343C"></stop>
                    <stop offset="100%" stop-color="#1E2024" stop-opacity="0"></stop>
                </linearGradient>
            </defs>
            <g opacity=".899">
            <path fill="url(#gcardBg)" fill-rule="evenodd" d="M0 0h996L892 46H96z" opacity=".598" transform="rotate(-180 498 23)">
                </path>
            </g>
        </svg>
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
.bOVXMe {
    width: 5.75rem;
    height: 5.25rem;
    position: relative;
}
.gywOmz {
    position: absolute;
    inset: 0px;
    z-index: 1;
    border-radius: 0.25rem;
    background-color: rgb(33, 35, 40);
}
.unselected .sc-lcDUFh::before {
    opacity: 0.3;
}
.gywOmz::before {
    content: "";
    position: absolute;
    inset: 0px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 80%;
}
.gywOmz.mines4::before {
    background-image: url(https://static.nanogames.io/assets/mines-4.8900a7b8.png);
    background-size: 85%;
}
.unselected .sc-lcDUFh::before {
    opacity: 0.3;
}
.boGbAB::before {
    background-image: url(https://static.nanogames.io/assets/gems.f2815a6d.png);
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
    /* padding: 80px 10%; */
    min-height: 37.5rem;
}
.dqwCNK {
    position: relative;
}
.fPOXr {
    flex: 1 1 0%;
    background: url(https://static.nanogames.io/assets/bg.136f0468.png) center center / cover no-repeat;
}
.hnBJiv {
    height: 90%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
}
.hnBJiv .grids-wrap {
    margin: 4.375rem auto 0px;
    display: grid;
    grid-template-columns: repeat(5, auto);
    gap: 0.5rem 0.625rem;
    max-width: 33.75rem;
    padding: 1.25rem;
    border-radius: 0.375rem;
    background: rgb(17, 18, 20);
    position: relative;
}
.hnBJiv .grids-wrap::before {
    content: "";
    position: absolute;
    width: 5.3125rem;
    height: 0.875rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAcCAMAAADGO9TYAAAAzFBMVEUAAABISEgVGRUaHBkfJR8VGRUYHBgXGhcXGxcZHRkVGRUXGxcXGhcYGxcoLiorKysXGhYXGxcaHRoZGxkfHx8aHhoXGhYaHhoaHhoXGxc6QTwaHxoXGhc4QDwXGxc8REA7RD8VGRUaHRk1PTk9Rz8XGhY1OzgbIBs1PDk9Rj89RT89RUEYGxcVGBUaHRktMzEpLiw4Pzs6Qj02PTk0Ozc8RD8+R0EyODUwNjMjJycmKikSFhMsMS8cHx8gIyQeIyAeISIZGx0kKSUhJSPPEBtlAAAALHRSTlMABPUlGo7ww4NT1c6pQDQJvJtgKxH3tnc76IpuWVNI7sB14bQl/umzlmLZeiYE94IAAAJsSURBVFjD1dT7d5owFAfwIFRBFMVHfdXHdH1tEdjqqoIZLfz//9NIfFzC0sh+wLrP4TQeven9nlwACXwdTl8/wXT29Gw1UH7KePbrc7yyv98W38cakoED/XkFprPhs6XID/THlVi5ftg17VG9Iz7Qhxfe2o389cvF0ZjOyfxRN1T+QBcrzsaLCCuNNqtL2kHMlG7FNhREacOHdYrrxcQBsbu+iOR0jjEJvcCgNmojarzYgJ0fO38JvU3BuJic8uPIQgeWewTlgrBuIeR9y7c97j3QcnfuzvNh5mJkm5S5tJauCfhMVwq+92ISRr6X/V28X5yz2+z1FcR78rbhPiZ2cHI5qc/dcvr7yMspOuxxwtg/X82aQx8WU4eYKRUslpx+X+n0Bhg40FnCJ5hhbVnerXQbwWndil5vILGyICZ75PYaozlOCbf+GSEWcOgN8QECVaY+YTHFVJwxt1sqV6G0qjiFxFsJCCrMK9rrYMa8mXSQlIHBfdW+04RFJtcy/ChofGgrzxtmotKYBosppy+XeImTS14+qdCaYy0mv0UIq6FKzTJdjvWZlQZ+O+2qGRrK5Zb+4wq7R+T6tBK8k7cMgk8/1pLmmqEneSXoAdN9dZRTNXnQIaaUVbvnWr2TNAhaheaqcXMmL3b6KCcF/QPVLvFHewJBS1+U7K47aV4LFSN50fKnAkFh9oDLWyldKCq8u8zsDJeC2efP20YFqu+fsGAZJBesMPsceWG/iooBN21wAHFh9ue1W0negFFRwTr6IOBIZi/Ja5YCDRWu0apCUMns5ZR2A13CpMlystlfvbZdYrP/L2g6zL5QfwACtwc45qOUEQAAAABJRU5ErkJggg==) center center / contain no-repeat;
    z-index: 1;
    top: -0.125rem;
    left: 0px;
}
.iuMTMb {
    width: 5.75rem;
    height: 5.25rem;
    position: relative;
}
.hLmIlp:hover{
    background-color: rgb(50, 53, 60);
    margin-bottom: 2px;
    transition: all 0.5s ease;
}
.hnBJiv.graph {
    background-color: rgb(33, 35, 40);
    inset: 2px;
}
.hnBJiv .win-wrap {
    z-index: 11;
}
.gPUDNx {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    width: 16.875rem;
    height: 7.5rem;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -3.75rem 0px 0px -8.4375rem;
    border-radius: 0.5rem;
    border: 0.3125rem solid rgb(49, 52, 60);
    background-color: rgb(35, 38, 43);
}
.gPUDNx .amount {
    color: rgb(67, 179, 9);
    font-size: 1.875rem;
    font-weight: bold;
    width: 90%;
}
.iodxXo {
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
}
.iodxXo > span {
    transform-origin: center center;
    display: inline-block;
    white-space: nowrap;
}
.gPUDNx .odds {
    font-size: 1.625rem;
    color: rgb(255, 255, 255);
    font-weight: bold;
    line-height: 1;
}
.hLmIlp {
    position: absolute;
    inset: 0px;
    z-index: 1;
    border-radius: 0.25rem;
    background-color: rgb(33, 35, 40);
}
.hLmIlp::before {
    content: "";
    position: absolute;
    inset: 0px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 80%;
}
.hnBJiv .grids-wrap::after {
    content: "";
    position: absolute;
    top: -2.1875rem;
    right: 0.125rem;
    width: 11rem;
    height: 3.625rem;
    background: url(https://static.nanogames.io/assets/box-bg2.75183067.png) center center / contain no-repeat;
}
.gmXWCK {
    width: 5.75rem;
    height: 5.25rem;
    position: relative;
}
.gsYRFa:hover{
    margin-bottom: 2px;
}
.gsYRFa {
    position: absolute;
    inset: 0px;
    z-index: 1;
    border-radius: 0.25rem;
    background-color: rgb(33, 35, 40);
}
.gsYRFa::before {
    content: "";
    position: absolute;
    inset: 0px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 80%;
}

.hnBJiv {
    height: 90%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
}
.hnBJiv .grids-wrap {
    margin: 4.375rem auto 0px;
    display: grid;
    grid-template-columns: repeat(5, auto);
    gap: 0.5rem 0.625rem;
    max-width: 33.75rem;
    padding: 1.25rem;
    border-radius: 0.375rem;
    background: rgb(17, 18, 20);
    position: relative;
}
.hnBJiv .grids-wrap::before {
    content: "";
    position: absolute;
    width: 5.3125rem;
    height: 0.875rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAcCAMAAADGO9TYAAAAzFBMVEUAAABISEgVGRUaHBkfJR8VGRUYHBgXGhcXGxcZHRkVGRUXGxcXGhcYGxcoLiorKysXGhYXGxcaHRoZGxkfHx8aHhoXGhYaHhoaHhoXGxc6QTwaHxoXGhc4QDwXGxc8REA7RD8VGRUaHRk1PTk9Rz8XGhY1OzgbIBs1PDk9Rj89RT89RUEYGxcVGBUaHRktMzEpLiw4Pzs6Qj02PTk0Ozc8RD8+R0EyODUwNjMjJycmKikSFhMsMS8cHx8gIyQeIyAeISIZGx0kKSUhJSPPEBtlAAAALHRSTlMABPUlGo7ww4NT1c6pQDQJvJtgKxH3tnc76IpuWVNI7sB14bQl/umzlmLZeiYE94IAAAJsSURBVFjD1dT7d5owFAfwIFRBFMVHfdXHdH1tEdjqqoIZLfz//9NIfFzC0sh+wLrP4TQeven9nlwACXwdTl8/wXT29Gw1UH7KePbrc7yyv98W38cakoED/XkFprPhs6XID/THlVi5ftg17VG9Iz7Qhxfe2o389cvF0ZjOyfxRN1T+QBcrzsaLCCuNNqtL2kHMlG7FNhREacOHdYrrxcQBsbu+iOR0jjEJvcCgNmojarzYgJ0fO38JvU3BuJic8uPIQgeWewTlgrBuIeR9y7c97j3QcnfuzvNh5mJkm5S5tJauCfhMVwq+92ISRr6X/V28X5yz2+z1FcR78rbhPiZ2cHI5qc/dcvr7yMspOuxxwtg/X82aQx8WU4eYKRUslpx+X+n0Bhg40FnCJ5hhbVnerXQbwWndil5vILGyICZ75PYaozlOCbf+GSEWcOgN8QECVaY+YTHFVJwxt1sqV6G0qjiFxFsJCCrMK9rrYMa8mXSQlIHBfdW+04RFJtcy/ChofGgrzxtmotKYBosppy+XeImTS14+qdCaYy0mv0UIq6FKzTJdjvWZlQZ+O+2qGRrK5Zb+4wq7R+T6tBK8k7cMgk8/1pLmmqEneSXoAdN9dZRTNXnQIaaUVbvnWr2TNAhaheaqcXMmL3b6KCcF/QPVLvFHewJBS1+U7K47aV4LFSN50fKnAkFh9oDLWyldKCq8u8zsDJeC2efP20YFqu+fsGAZJBesMPsceWG/iooBN21wAHFh9ue1W0negFFRwTr6IOBIZi/Ja5YCDRWu0apCUMns5ZR2A13CpMlystlfvbZdYrP/L2g6zL5QfwACtwc45qOUEQAAAABJRU5ErkJggg==) center center / contain no-repeat;
    z-index: 1;
    top: -0.125rem;
    left: 0px;
}

.iVvsfA {
    position: absolute;
    inset: 0px;
    z-index: 0;
    overflow: hidden;
    border-radius: 0.25rem;
}
.qLoBl {
    background-color: rgb(57, 14, 113);
}
.gsYRFa {
    position: absolute;
    inset: 0px;
    z-index: 1;
    border-radius: 0.25rem;
    background-color: rgb(33, 35, 40);
}
.gsYRFa::before {
    content: "";
    position: absolute;
    inset: 0px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 80%;
}
.gsYRFa.graph {
    background-color: rgb(33, 35, 40);
    inset: 2px;
}
.qLoBl .graph {
    background-color: rgb(57, 14, 113);
}
.qLoBl .graph::before {
    background-image: url(https://static.nanogames.io/assets/gems.f2815a6d.png);
    animation: 300ms ease 0s 1 normal none running gemsZoomIn;
    background-size: contain;
    transform: scale(0.8);
}
.gsYRFa.mines3::before {
    background-image: url(https://static.nanogames.io/assets/mines-3.b54d60a7.png);
    background-size: 85%;
}
.unselected .sc-cdJjGe::before {
    opacity: 0.3;
}
</style>
