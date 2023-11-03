<script>
import { error_msg } from "../store/index"
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp"
import FaSolidShare from "svelte-icons-pack/fa/FaSolidShare";
import SiMoneygram from "svelte-icons-pack/si/SiMoneygram";
import BsCreditCardFill from "svelte-icons-pack/bs/BsCreditCardFill";
import RiFinanceHandCoinFill from "svelte-icons-pack/ri/RiFinanceHandCoinFill";
import BiChart from "svelte-icons-pack/bi/BiChart";
import FaSolidDice from "svelte-icons-pack/fa/FaSolidDice";
import AiFillSlackCircle from "svelte-icons-pack/ai/AiFillSlackCircle";
import RiSystemArrowLeftSLine from "svelte-icons-pack/ri/RiSystemArrowLeftSLine";
export let DgII
$: (DgII)

import {
    createEventDispatcher
} from 'svelte';
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

</script>


<div class="sc-bkkeKt kBjSXI">
    {#if $error_msg}
    <div class="error-message">
        <div class="hTTvsjh"> 
            <div>{$error_msg}</div>
            </div>
        </div>
    {/if}   
    <div class="dialog " style="opacity: 1; width: 464px; height: 631px; margin-top: -315.5px; margin-left: -232px; transform: scale(1) translateZ(0px);">
        
        {#if is_seeed_settigs}
        <button on:click={()=> handleSeedSettings()} class="dialog-back" style="opacity: 1; transform: none;">
            <Icon src={RiSystemArrowLeftSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" />
        </button>
        {/if}
        <div class={`dialog-head ${is_seeed_settigs ? "has-back" : "has-close"} `}>
            <div class="dialog-title">{is_seeed_settigs ? "Seed Settings" : "Details"}</div>
        </div>

        <button on:click={()=> handleCloseHelp()}  class="sc-ieecCq fLASqZ close-icon dialog-close">
            <Icon src={IoCloseSharp}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
        </button>

        {#if !is_seeed_settigs}
        <div class="dialog-body default-style " style="z-index: 2; transform: none;">
            <div class="sc-dkPtRN jScFby scroll-view sc-bvFjSx jGQOsZ">
                <div class="sc-emDsmM Osnbt">
                    {#if !DgII.has_won}
                    <img class="win-state" alt="" src="https://static.nanogames.io/assets/lose.b4ff48b7.png">
                    {:else}
                    <img class="win-state" alt="" src="https://static.nanogames.io/assets/win.431b83d6.png">
                    {/if}
                    <div class="sc-jibziO gZqspm game-share">
                        <button on:click={handleSharedBet} class="sc-jibziO gZqspm game-share">
                            <Icon src={FaSolidShare}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="share to friends" />
                        </button>
                    </div>
                    <div class="rt_info">
                        <img class="avatar avatar" alt="" src={DgII.profile_img}>
                        <div class="name">{DgII.username}</div>
                        <div class="flex">
                            <div class="betid">{`${DgII.bet_id ? `Betting ID: ${DgII.bet_id}` : "" }`}</div>
                            <div class="verified">Verified</div>
                        </div>
                    </div>
                    <div class="rt_time"> {new Date(DgII.time).getFullYear()}:{new Date(DgII.time).getMonth()}:{new Date(DgII.time).getDate()} {formatTime(DgII.time)} </div>
                    <div class="rt_items">
                        <div class="item-wrap">
                            <div class="label flex-center">
                                <span style="padding-right: 3px;">
                                    <Icon src={SiMoneygram}  size="13"  color="rgb(223, 39, 113)" className="custom-icon" title="arror" />
                                </span>
                                Amount
                            </div>
                            <div class="number flex-center">{(parseFloat(DgII.bet_amount)).toFixed(2)} {DgII.token}</div>
                        </div>
                        <div class="item-wrap">
                            <div class="label flex-center">
                                <span style="padding-right: 3px;">
                                    <Icon src={BsCreditCardFill}  size="13"  color="rgb(119, 60, 253)" className="custom-icon" title="arror" />
                                </span>
                                Payout
                            </div>
                            <div class="number flex-center">{(parseFloat(DgII.payout)).toFixed(2)} x</div>
                        </div>
                        <div class="item-wrap">
                            <div class="label flex-center">
                                <span style="padding-right: 3px;">
                                    <Icon src={RiFinanceHandCoinFill}  size="13"  color="rgb(218, 30, 40)" className="custom-icon" title="arror" />
                                </span>
                                Profit
                            </div>
                            <div class="number flex-center">{(parseFloat(DgII.profit)).toFixed(6)} {DgII.token}</div>
                        </div>
                    </div>
                </div>
                {#if hasSharedBet}
                    <Share on:close={handleSharedBet}/>
                {/if}

                <div class="sc-ekrjqK fmwvmO rt_items">
                    <div class="item-wrap">
                        <div class="item-num">
                            <span style="padding-right: 3px;">
                                <Icon src={BiChart}  size="13"  color="rgb(67, 179, 9)" className="custom-icon" title="arror" />
                            </span>
                            Result
                        </div>
                        <div class="item-desc">{DgII.cashout}</div>
                    </div>
                    <div class="item-wrap">
                        <div class="item-num">
                            <span style="padding-right: 3px;">
                                <Icon src={FaSolidDice}  size="13"  color="rgb(15, 98, 254)" className="custom-icon" title="arror" />
                            </span>
                            Bet
                        </div>
                        <div class="item-desc">
                            <span class="mthan">&lt;{DgII.chance}</span>
                        </div>
                    </div>
                    <div class="item-wrap">
                        <div class="item-num">
                            <span style="padding-right: 3px;">
                                <Icon src={AiFillSlackCircle}  size="17"  color="rgb(237, 99, 0)" className="custom-icon" title="arror" />
                            </span>
                            Chance
                        </div>
                        <div class="item-desc">{DgII.chance}%</div>
                    </div>
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
                            <input type="text" readonly value={DgII.server_seed}>
                        </div>
                    </div>
                    <div class="col">
                        <div class="sc-ezbkAF kDuLvp input ">
                            <div class="input-label">Client Seed</div>
                            <div class="input-control">
                                <input type="text" readonly value={DgII.client_seed}>
                            </div>
                        </div>
                        <div class="sc-ezbkAF kDuLvp input ">
                            <div class="input-label">nonce</div>
                            <div class="input-control">
                                <input type="number" readonly value={DgII.game_nonce}>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="verify-wrap">
                    <a href={`https://dppgames.netlify.app/verify/classic-dice/?s=${DgII.server_seed}&c=${DgII.client_seed}&n=${DgII.game_nonce}`} target="_blank"> 
                        <button  class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal verify-btn">
                            <div class="button-inner">Verify</div>
                        </button>
                    </a>
                </div>
            </div>
        </div>
        {:else}
        <Seedsettings on:close={handleSeedSettings} settin={DgII} />
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
    background-color: rgb(23, 24, 27);
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 0%;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 0.375rem;
    padding: 1rem 0px;
    color: rgba(153, 164, 176, 0.6);
}
.fmwvmO {
    margin-top: 0.5rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.fmwvmO .item-wrap {
    height: 4.625rem;
    border-radius: 0.625rem;
    background-color: rgb(23, 24, 27);
    color: rgba(153, 164, 176, 0.6);
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 0%;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 0.375rem;
    padding: 1rem 0px;
}
.fmwvmO .item-wrap .item-num {
    height: 1.25rem;
    font-size: 0.75rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: bold;
}
.fmwvmO .item-wrap .item-desc {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 1rem;
    font-size: 0.75rem;
    white-space: nowrap;
    margin-top: 0.75rem;
}

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
    color: rgba(153, 164, 176, 0.6);
}

.kDuLvp .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 1.25rem;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
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
    color: rgb(245, 246, 247);
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

</style>
