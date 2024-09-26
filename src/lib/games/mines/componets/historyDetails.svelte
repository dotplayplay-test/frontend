<script>
import { error_msg } from "../store/index"

import { handleAuthToken } from "$lib/store/routes"
import { browser } from '$app/environment';
export let DgII
import axios from "axios"
import { ServerURl } from "$lib/backendUrl"
import { onMount } from "svelte";
const URL = ServerURl()
import {createEventDispatcher } from 'svelte';
import Share from './share/share.svelte';
import Seedsettings from './share/seedsettings.svelte';

const dispatch = createEventDispatcher()

const handleCloseHelp = (() => {
    dispatch("close", 5)
})

let hasSharedBet = false
let handleSharedBet = (() => {
    hasSharedBet = !hasSharedBet
})

let is_seeed_settigs = false
const handleSeedSettings = (()=>{
    is_seeed_settigs = !is_seeed_settigs
})

function formatTime(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

let dataSjj ;
let is_loading = true
const handleDetals = (async()=>{
    is_loading = true
    await axios.post(`${URL}/api/user/mine-game/detailed-history`,{
        data: DgII
    },{
    headers:{
        Authorization: `Bearer ${$handleAuthToken}`
    }})
    .then((res)=>{
        dataSjj = res.data[0]
        is_loading = false
    })
    .catch((error)=>{
        is_loading = false
        console.log(error.response)
    })
})

onMount(async()=>{
    await handleDetals()
})

let is_mobile = false
$:{
    if (browser && window.innerWidth < 650) {
        is_mobile = true
    }
    else {
        is_mobile = false
    }
}

</script>

<div class="sc-bkkeKt kBjSXI">
    {#if $error_msg}
    <div class="error-message">
        <div class="hTTvsjh"> 
            <div>{$error_msg}</div>
            </div>
        </div>
    {/if} 
    <div class="dialog "style={`${is_mobile ? "transform: scale(1) translateZ(0px);" : "opacity: 1; width: 464px; height: 631px; margin-top: -315.5px; margin-left: -232px;"}  `}>
        {#if is_seeed_settigs}
            <button on:click={()=> handleSeedSettings()} class="dialog-back" style="opacity: 1; transform: none;">
                <!-- <Icon src={RiSystemArrowLeftSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" /> -->
            </button>
        {/if}
        <div class={`dialog-head ${is_seeed_settigs ? "has-back" : "has-close"} `}>
            <div class="dialog-title">{is_seeed_settigs ? "Seed Settings" : "Details"}</div>
        </div>
        <button on:click={()=> handleCloseHelp()}  class="sc-ieecCq fLASqZ close-icon dialog-close">
        </button>
        {#if !is_loading}
        {#if !is_seeed_settigs}
        <div class="dialog-body default-style " style="z-index: 2; transform: none;">
            <div class="sc-dkPtRN jScFby scroll-view sc-bvFjSx jGQOsZ">
                <div class="sc-emDsmM Osnbt">
                    {#if !dataSjj.has_won}
                    <img class="win-state" alt="" src="https://static.nanogames.io/assets/lose.b4ff48b7.png">
                    {:else}
                    <img class="win-state" alt="" src="https://static.nanogames.io/assets/win.431b83d6.png">
                    {/if}
                    <div class="sc-jibziO gZqspm game-share">
                        <button on:click={handleSharedBet} class="sc-jibziO gZqspm game-share">
                        </button>
                    </div>
                    <div class="rt_info">
                        <img class="avatar avatar" alt="" src={dataSjj.profile_img}>
                        <div class="name">{dataSjj.username}</div>
                        <div class="flex">
                            <div class="betid">Betting ID: {dataSjj.game_id}</div>
                            <div class="verified">Verified</div>
                        </div>
                    </div>
                    <div class="rt_time">{formatTime(dataSjj.time)}</div>
                    <div class="rt_items">
                        <div class="item-wrap">
                            <div class="label flex-center">
                                <span style="padding-right: 3px;">
                                </span>
                                Amount
                            </div>
                            <div class="number flex-center">{parseFloat(dataSjj.bet_amount)} {dataSjj.bet_token_name}</div>
                        </div>
                        <div class="item-wrap">
                            <div class="label flex-center">
                                <span style="padding-right: 3px;">
                                </span>
                                Payout
                            </div>
                            <div class="number flex-center">{(parseFloat(dataSjj.cashout)).toFixed(2)} x</div>
                        </div>
                        <div class="item-wrap">
                            <div class="label flex-center">
                                <span style="padding-right: 3px;">
                                </span>
                                Profit
                            </div>
                            <div class="number flex-center">{(parseFloat(dataSjj.profit) - parseFloat(dataSjj.bet_amount)).toFixed(4)} {dataSjj.bet_token_name}</div>
                        </div>
                    </div>
                </div>
                {#if hasSharedBet}
                    <Share on:close={handleSharedBet}/>
                {/if}
                
                
                <div class="sc-eZKLwX gzyxPX">
                    {#each dataSjj.gameLoop as loop}
                    <div class="result-item">
                        {#if loop.active}
                            <div class="gems"></div>
                        {/if}
                        {#if loop.mine && !dataSjj.has_won}
                            <div class="mines"></div>
                        {/if}
                    </div>
                    {/each}
                </div>
                
                <div class="seed-main">
                    <div class="sc-ezbkAF kDuLvp input ">
                        <div class="input-label">Server Seed</div>
                        <div class="input-control">
                            <input type="text" placeholder="The seed hasn't been revealed yet." readonly value="">
                        </div>
                    </div>
                    <div class="sc-ezbkAF kDuLvp input ">
                        <div class="input-label">
                            <div class="seed-col">
                                <div>Server Seed (hash)</div>
                                <button on:click={()=>handleSeedSettings()} class="cl-primary">Seed Settings</button>
                            </div>
                        </div>
                        <div class="input-control">
                            <input type="text" readonly value={dataSjj.server_seed}>
                        </div>
                    </div>
                    <div class="col">
                        <div class="sc-ezbkAF kDuLvp input ">
                            <div class="input-label">Client Seed</div>
                            <div class="input-control">
                                <input type="text" readonly value={dataSjj.client_seed}>
                            </div>
                        </div>
                        <div class="sc-ezbkAF kDuLvp input ">
                            <div class="input-label">nonce</div>
                            <div class="input-control">
                                <input type="number" readonly value={dataSjj.game_nonce}>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="verify-wrap">
                    <a href={`https://dppgames.netlify.app/verify/classic-dice/?s=${dataSjj.server_seed}&c=${dataSjj.client_seed}&n=${dataSjj.game_nonce}`} target="_blank"> 
                        <button  class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal verify-btn">
                            <div class="button-inner">Verify</div>
                        </button>
                    </a>
                </div>
            </div>
        </div>
        {:else}
        <Seedsettings on:close={handleSeedSettings} settin={dataSjj} />
        {/if}
        {:else}
            <div class="center">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
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

.dialog-head.has-close {
    margin-right: 3.75rem;
}
.dialog-back {
    position: absolute;
    left: 0px;
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
.dialog-head.has-back {
    margin-left: 3.125rem;
}


.dialog-head .dialog-title {
    font-size: 1rem;
    margin: 0px;
    font-weight: bold;
    flex: 1 1 0%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: var(--text-5);
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
    background: var(--affiliate-bg);
}

.dialog-body {
    position: absolute;
    inset: 0px;
    display: flex;
    overflow: hidden;
}
.default-style > div {
    border-radius: 20px;
    background-color: var(--card-bg-5);
    padding: 1.25rem 1.25rem 0px;
}
.dialog-body > div {
    flex: 1 1 0%;
}
.jGQOsZ {
    position: relative;
}
.jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
}
.Osnbt {
    position: relative;
}
.Osnbt .win-state {
    position: absolute;
    left: 0.625rem;
    top: 0px;
    width: 5rem;
    z-index: 10;
}
.gZqspm {
    z-index: 10;
    width: 2.75rem;
    height: 2.75rem;
    margin: 0px;
    padding: 0px;
    border-radius: 50%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: absolute;
    cursor: pointer;
    right: 0.625rem;
    top: 0.625rem;
}

.Osnbt .rt_info {
    margin: 0px auto;
    padding-top: 2.875rem;
    text-align: center;
}
.Osnbt .rt_info .avatar {
    width: 4.625rem;
    height: 4.625rem;
    border-radius: 50%;
    border: 2px solid rgb(70, 70, 70);
    font-size: 0px;
}
.Osnbt .rt_info .name {
    line-height: 1.25rem;
    margin-top: 0.5rem;
}
.Osnbt .rt_info .flex {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    height: 1.25rem;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 0.375rem;
}
.flex {
    display: flex;
}
.Osnbt .rt_info .flex .betid {
    opacity: 0.6;
}
.Osnbt .rt_info .verified {
    color: rgb(255, 255, 255);
    margin-left: 0.5rem;
    background: url(https://static.nanogames.io/assets/verified.312ca177.svg) left center / auto 0.875rem no-repeat;
    padding-left: 1rem;
    font-weight: bold;
}
.Osnbt .rt_info .name {
    line-height: 1.25rem;
    margin-top: 0.5rem;
}
.Osnbt .rt_time {
    font-size: 0.75rem;
    margin-top: 0.375rem;
    text-align: center;
    opacity: 0.5;
}
.Osnbt .rt_items {
    margin-top: 2.25rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.Osnbt .rt_items .item-wrap {
    height: 4.625rem;
    border-radius: 0.625rem;
    background: var(--affiliate-bg);
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 0%;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 0.375rem;
    padding: 1rem 0px;
color: var(--text-6);}

.Osnbt .rt_items .item-wrap .label {
    height: 1.25rem;
    font-size: 0.75rem;
}
.Osnbt .rt_items .item-wrap .number {
    height: 1rem;
    font-size: 0.75rem;
    white-space: nowrap;
    margin-top: 0.75rem;
}
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.kDuLvp {
    margin-top: 1rem;
}
.jGQOsZ .seed-main {
    margin-top: 1.25rem;
}
.jGQOsZ .seed-main .input {
    margin-top: 1rem;
}
.jGQOsZ .seed-main .input:first-of-type {
    margin-top: 0px;
}
.kDuLvp .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 0.75rem 0.375rem;
color: var(--text-6);}

.kDuLvp .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 1.25rem;
    border: 1px solid var(--border-1);
    background-color: var(--sidebar-card-bg);
    height: 3.5rem;
    padding: 0px 1.25rem;
    opacity: 1;
}
.jGQOsZ .seed-main .input input {
    font-weight: 500;
}
.jGQOsZ .seed-main .input .input-control input[readonly] {
    opacity: 1;
}
.jGQOsZ .seed-main .input .seed-col {
    width: 100%;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.jGQOsZ .seed-main .input .seed-col .cl-primary {
    color: rgb(67, 179, 9);
}
.jGQOsZ .seed-main .input .input-control input[readonly] {
    opacity: 1;
}
.jGQOsZ .seed-main .input input {
    font-weight: 500;
}
.jGQOsZ .seed-main .col {
    margin-top: 0.75rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.jGQOsZ .seed-main .col > .input:first-of-type {
    flex: 2 1 0%;
}
.jGQOsZ .seed-main .col > .input:last-of-type {
    flex: 1 1 0%;
    margin-left: 0.625rem;
}
.jGQOsZ .seed-main .col > .input {
    margin-top: 0rem;
}
.jGQOsZ > div:last-of-type {
    margin-bottom: 3.375rem;
}
.jGQOsZ .verify-wrap .verify-btn {
    width: 70%;
    height: 3.5rem;
    margin: 1.25rem auto 0px;
}
.fnKcEH.button {
    color: var(--text-5);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(67, 179, 9);
    background-image: conic-gradient(from 1turn, rgb(67, 179, 9), rgb(93, 219, 28));
}
.cBmlor > .button-inner {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.gzyxPX {
    display: grid;
    grid-template-columns: repeat(5, auto);
    gap: 0.5rem 0.375rem;
    max-width: 22.5rem;
    margin: 1.25rem auto 0px;
}
.gzyxPX .result-item {
    width: 4rem;
    height: 3.625rem;
    background: var(--affiliate-bg);
    border-radius: 0.25rem;
    position: relative;
}
.gzyxPX .mines::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5.625rem;
    padding-top: 112.48%;
    transform: translate(-50%, -50%);
    background: url(https://static.nanogames.io/assets/mines-effect.905a1992.png) 60% center / 1600% no-repeat;
    z-index: 5;
}
.gzyxPX .mines {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;
}
.gzyxPX .gems {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
}
.gzyxPX .gems::before {
    content: "";
    position: absolute;
    inset: 0px;
    z-index: 1;
    border-radius: 0.25rem;
    background: url(https://static.nanogames.io/assets/gems.f2815a6d.png) center center / 80% no-repeat rgb(57, 14, 113);
}


@media screen and (min-width: 650px){
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
    background: var(--affiliate-bg);
}

}

@media screen and (max-width: 650px){
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
