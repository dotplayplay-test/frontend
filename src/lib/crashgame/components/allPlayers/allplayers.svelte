<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import { createEventDispatcher } from 'svelte';
import { handleAllPlayerStore } from "../../store"
import Fulldetails from './fulldetails.svelte';
import { SinglePlayerDetailsEl } from "../../store"
import { onMount } from "svelte";
import { browser } from '$app/environment';
const dispatch = createEventDispatcher()

const handleCloseHelp = (()=>{
    dispatch("close", 5)
})

let isFullDetails = false
const handleFulldetails = ((data)=>{
    if(isFullDetails){
        isFullDetails = false
    }else{
        isFullDetails = true
        SinglePlayerDetailsEl.set(data)
    }
})

let is_mobile = false
onMount(() => {
    if (browser && window.innerWidth <= 650) {
        is_mobile = true
    } else {
        is_mobile = false
    }
})

</script>

<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
    <div class="dialog " style={` ${is_mobile ? "transform: scale(1) translateZ(0px);" : "opacity: 1; width: 464px; height: 631px; margin-top: -315.5px; margin-left: -232px;"}  `}>
        <div class="dialog-head has-close">
            <div class="dialog-title">All Players</div>
        </div> 
        <button on:click={()=> handleCloseHelp()}  class="sc-ieecCq fLASqZ close-icon dialog-close">
            <Icon src={IoCloseSharp}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
        </button>

        {#if !isFullDetails}
        <div class="dialog-body default-style " style="z-index: 2; transform: none;">
            <div class="sc-dkPtRN jScFby scroll-view sc-iRFsWr bKNIoP">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="num">Bet ID</th>
                            <th class="user">Player</th>
                            <th class="payout">Payout</th>
                            <th class="profit">Profit</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {#if $handleAllPlayerStore.length !== 0}
                        {#each $handleAllPlayerStore as player }
                        <tr>
                            <td>
                                <button on:click={()=>handleFulldetails(player)} class="betid">{player.bet_id}</button>
                            </td>
                            <td>
                                <a class="sc-jUosCB iTDswZ user-info username" href={`/user/profile/${player.user_id}`}>
                                    <div class="name">{player.username}</div>
                                </a>
                            </td>

                            <td class="payout">{player.cashout.toFixed(2)}×</td>
                            <td class={`ellipsis ${player.has_won ? "is-win" : "is-lose" } `}>
                                <div class="sc-Galmp erPQzq coin notranslate has-sign">
                                    <img class="coin-icon" alt="" src={player.token_img}>
                                    <div class="amount">
                                        <span class="amount-str">{(parseFloat(player.profit)).toFixed(5)}<span class="suffix">00</span></span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        {:else}
                        <div class="sc-eCImPb cuPxwd empty ">
                            <img src="https://static.nanogames.io/assets/empty.acd1f5fe.png" alt="">
                            <div class="msg">Oops! There is no data yet!</div>
                        </div>
                        {/each}
                        {/if}
                    </tbody>
                </table>
            </div>  
        </div>
        {:else}
        <Fulldetails />
        {/if}

       
   </div>
</div>

<style>
.kBjSXI {
    position: fixed;
    z-index: 1000;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.7);
    filter: none !important;
} 
.bKNIoP .is-lose .amount {
    color: rgb(237, 99, 0);
}
.bKNIoP .is-win .amount {
    color: rgb(93, 160, 0);
}
.bKNIoP .coin {
    font-weight: 600;
}
.erPQzq .coin-icon {
    width: 1.4em;
    height: 1.4em;
    margin-right: 0.25em;
}
.dialog {
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 50%;
    top: 50%;
    width: 464px;
    height: 720px;
    margin: -375px 0px 0px -280px;
    transition-property: width, height, margin-left, margin-top;
    transition-duration: 0.5s;
    border-radius: 1.25rem;
    overflow: hidden;
    background-color: rgb(23, 24, 27);
}
.dialog-head.has-close {
    margin-right: 3.75rem;
}
.dialog-head {
    position: relative;
    z-index: 10;
    flex: 0 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 3.75rem;
    margin-left: 1.125rem;
    transition: all 0.5s ease 0s;
}
.dialog-head .dialog-title {
    font-size: 1rem;
    margin: 0px;
    font-weight: bold;
    flex: 1 1 0%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(245, 246, 247);
}
.fLASqZ {
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 11;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3.75rem;
    height: 3.75rem;
}
.default-style {
    padding-top: 3.75rem;
    background-color: rgb(23, 24, 27);
}
.dialog-body {
    position: absolute;
    inset: 0px;
    display: flex;
    overflow: hidden;
}
.default-style > div {
    border-radius: 20px;
    background-color: rgb(30, 32, 36);
    padding: 1.25rem 1.25rem 0px;
}
.dialog-body > div {
    flex: 1 1 0%;
}
.bKNIoP {
    font-size: 0.875rem;
    padding: 1.25rem 0.625rem !important;
}
.jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
}
.bKNIoP .table {
    width: 100%;
    border-collapse: collapse;
}
table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
.bKNIoP th:first-of-type, .bKNIoP td:first-of-type {
    padding-left: 1.25rem;
    text-align: left;
}
.bKNIoP th {
    font-weight: 500;
    color: rgba(153, 164, 176, 0.6);
    padding-bottom: 0.875rem;
}
.bKNIoP th, .bKNIoP td {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    padding: 0px 0.25rem;
}
.bKNIoP th {
    font-weight: 500;
    color: rgba(153, 164, 176, 0.6);
    padding-bottom: 0.875rem;
}
.bKNIoP th, .bKNIoP td {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    padding: 0px 0.25rem;
}
.bKNIoP th:last-of-type, .bKNIoP td:last-of-type {
    padding-right: 1.25rem;
    text-align: right;
}
.bKNIoP tbody {
    color: rgba(153, 164, 176, 0.8);
}
.bKNIoP tbody tr {
    height: 3.5rem;
}
.bKNIoP tbody tr:nth-child(2n-1) td:first-child {
    border-radius: 1.25rem 0px 0px 1.25rem;
}
.bKNIoP tbody tr:nth-child(2n-1) td {
    background-color: rgb(23, 24, 27);
}
.bKNIoP th:first-of-type, .bKNIoP td:first-of-type {
    padding-left: 1.25rem;
    text-align: left;
}
.bKNIoP th, .bKNIoP td {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    padding: 0px 0.25rem;
}
.bKNIoP .betid {
    width: 5rem;
    color: inherit;
}
.bKNIoP .betid, .bKNIoP .username .name {
    width: 5.625rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
}
.bKNIoP tbody tr:nth-child(2n-1) td {
    background-color: rgb(23, 24, 27);
}
.iTDswZ.user-info {
    color: rgb(245, 246, 247);
    font-weight: bold;
}
.iTDswZ {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
}
.bKNIoP .username .name {
    font-weight: 600;
    color: rgb(245, 246, 247);
}
.iTDswZ .name {
    flex: 1 1 0%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.bKNIoP .betid, .bKNIoP .username .name {
    width: 5.625rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
}
.bKNIoP tbody tr:nth-child(2n-1) td:last-child {
    border-radius: 0px 1.25rem 1.25rem 0px;
}
.bKNIoP tbody tr:nth-child(2n-1) td {
    background-color: rgb(23, 24, 27);
}
.bKNIoP th {
    font-weight: 500;
    color: rgba(153, 164, 176, 0.6);
    padding-bottom: 0.875rem;
}
.cuPxwd {
    padding: 2.5rem 0px;
    color: rgba(153, 164, 176, 0.6);
    line-height: 1;
    text-align: center;
    height: 100%;
    min-height: 16.25rem;
    position: relative;
}
.cuPxwd img {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -6.875rem 0px 0px -6.25rem;
    width: 12.5rem;
    height: 12.5rem;
}
.cuPxwd .msg {
    position: absolute;
    z-index: 1;
    line-height: 1.25rem;
    left: 50%;
    width: 17.5rem;
    top: 50%;
    margin-top: 3.75rem;
    margin-left: -8.75rem;
}
@media only screen and (max-width : 650px){
.dialog {
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    margin: 0px;
    border-radius: 0px;
}
}
</style>