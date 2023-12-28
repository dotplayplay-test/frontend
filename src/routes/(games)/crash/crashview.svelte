<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemMenuUnfoldFill from "svelte-icons-pack/ri/RiSystemMenuUnfoldFill";
import { createEventDispatcher, onMount } from 'svelte';
const dispatch = createEventDispatcher()
import { crash_historyEl, crashLoad,game_id,handleHasbet,active_playerEl, Load_animation,crashCurve,hasCrashed, loadingCrash ,crashRunning,crashPoint,mybetEl, crashIsAlive} from "$lib/crashgame/store"
import Crashlayout from '$lib/crashgame/screens/Crashlayout.svelte';
import Allplayers from '$lib/crashgame/components/allPlayers/allplayers.svelte';
import { useAllplayer } from "$lib/crashgame/fetchallPlayers"
import {RealTimeURl} from "$lib/backendUrl";
const { getAllPlayers } = useAllplayer()
const handleTrends = (()=>{
    dispatch("closeTrend", 5)
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

onMount(()=>{
    const event = new EventSource(`${RealTimeURl()}/crash-engine`);
    event.addEventListener("crash-plucj", ({data}) => {
        let mimik = JSON.parse(data)
       
    })
    event.addEventListener("countdown", ({data}) => {
        let mimik = JSON.parse(data);
        crashLoad.set(mimik.timeSec)
        Load_animation.set(mimik.load_animate)
        loadingCrash.set(mimik.is_loading)
        crashIsAlive.set(mimik.is_running)
        hasCrashed.set(mimik.is_crashed)
        crashRunning.set(mimik.crash_point)
        crashPoint.set(mimik.crash_point_stop)
        // game_id.set(mimik.game_id)
    });
    event.addEventListener("nuppp-curve", ({data}) =>{
        let mimik = JSON.parse(data);
        crashCurve.set(mimik)
    })
    event.addEventListener("crash_details", ({data}) =>{
        let mimik = JSON.parse(data);
        crash_historyEl.set(mimik)
    })
    // event.addEventListener("crash-details", ({data}) =>{
    //     let mimik = JSON.parse(data);
    //     crashPoint.set(mimik.crash_point)
    //     hasCrashed.set(true)
    //     loadingCrash.set(false)
    //     crashIsAlive.set(false)
    //     handleHasbet.set(false)
    // })
    // event.addEventListener("crash-game-history", ({data}) =>{
    //     let mimik = JSON.parse(data);
    //     crash_historyEl.set(mimik)
    // })
    // event.addEventListener("my-bet", ({data}) =>{
    //     let mimik = JSON.parse(data);
    //     mybetEl.set(mimik)
    // })
    // event.addEventListener("active_players", ({data}) =>{
    //     let mimik = JSON.parse(data);
    //     active_playerEl.set(mimik)
    // })
})

</script>

{#if allbet}
    <Allplayers  on:close={handleAllbet} />
{/if}

<div class="game-view">
    <div class="sc-hoHwyw fIoiVG game-recent sc-bjztik kQtbd">
        <div class="recent-list-wrap">
            <div class="recent-list" style="transform: translate(0%, 0px);">
                {#if $crash_historyEl.length !== 0}
                {#each $crash_historyEl as his}
                    <button on:click={()=>handleAllbet(his)} class={`game-item ${his.crash_point >= 10 && "is-moon"} ${his.crash_point > 2 && his.crash_point < 10 && "is-doubble"} `} style="width: 25%;">
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
        <button on:click={handleTrends} class="sc-fZzbTk frfwnj flex-center ">
            <Icon src={RiSystemMenuUnfoldFill}  size="27"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
            <div>Trends</div>
        </button>
    </div>

    <div class="sc-eqUgKp hjPxpf game-box sc-lnDqNf hbPvVG">
        <div class="sc-epFoly gBNWKS house-edge">
            <span>House Edge 1%</span>
        </div>
        <div class="sc-feYDSs hgDXdf">
            <Crashlayout />
        </div>
        <svg class="box-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 996 46"><defs>
            <linearGradient id="gcardBg" x1="50%" x2="50%" y1="0%" y2="100%">
                <stop offset="0%" stop-color="#31343C"></stop><stop offset="100%" stop-color="#1E2024" stop-opacity="0"></stop>
            </linearGradient>
        </defs><g opacity=".899">
            <path fill="url(#gcardBg)" fill-rule="evenodd" d="M0 0h996L892 46H96z" opacity=".598" transform="rotate(-180 498 23)"></path>
        </g>
    </svg>
</div>

</div>

<style>
.game-view {
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
}
.hbPvVG {
    position: relative;
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    padding: 0px 1.875rem 1.875rem;
}
.fIoiVG {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 2.75rem;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
}
.fIoiVG .jackpot-enter {
    margin-left: 1.5rem;
}
.lhEJig {
    width: 10.125rem;
    height: 100%;
    line-height: 1.25rem;
    border-radius: 1.375rem;
    position: relative;
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(49, 52, 60, 0.4);
}

.kQtbd .recent-list-wrap {
    background-color: rgba(49, 52, 60, 0.4);
    border-radius: 1.375rem;
    padding: 0px 0.625rem;
    margin: 0px 0.625rem;
}
.fIoiVG .recent-list-wrap {
    flex: 1 1 auto;
    height: 100%;
    margin: 0px 1.5rem;
    overflow: hidden;
    position: relative;
    border-radius: 1.375rem;
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
.kQtbd .recent-list-wrap {
    background-color: rgba(49, 52, 60, 0.4);
    border-radius: 1.375rem;
    padding: 0px 0.625rem;
    margin: 0px 0.625rem;
}
.fIoiVG .recent-list-wrap {
    flex: 1 1 auto;
    height: 100%;
    margin: 0px 1.5rem;
    overflow: hidden;
    position: relative;
    border-radius: 1.375rem;
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
.kQtbd .game-item.is-doubble {
    color: rgb(67, 179, 9);
}
.kQtbd .game-item {
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
.kQtbd .game-item::before {
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
.kQtbd .game-item .issus {
    font-size: 1rem;
    font-weight: normal;
    transform: scale(0.7);
    width: 3.125rem;
    transform-origin: left center;
    margin-bottom: 0.125rem;
    color: rgba(153, 164, 176, 0.5);
}
.frfwnj {
    margin-right: 1.5rem;
    color: rgba(153, 164, 176, 0.6);
    min-height: 1.875rem;
    font-size: 1rem;
}
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.hjPxpf .box-bg {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: -1px;
    width: 100%;
}

.hgDXdf::after {
    content: "";
    display: block;
}
.hgDXdf {
    position: relative;
    margin-top: 1.875rem;
    margin-bottom: 1.25rem;
}
.gBNWKS {
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
.hjPxpf {
    position: relative;
}
.game-item.is-doubble {
    color: rgb(67, 179, 9);
}
 .game-item.is-moon::before {
    background-color: rgb(246, 199, 34) !important;
}
 .game-item.is-moon {
    color: rgb(246, 199, 34);
}
 .game-item.is-doubble {
    color: rgb(67, 179, 9);
}
 .game-item.is-doubble::before {
    background-color: rgb(67, 179, 9) !important;
}
.empty-item{
    text-align: center;
    display: flex;
    padding: 7px 120px 0 9px;
    justify-content: center;
}
</style>

