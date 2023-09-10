<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import BiChart from "svelte-icons-pack/bi/BiChart";
import FaSolidDice from "svelte-icons-pack/fa/FaSolidDice";
import AiFillSlackCircle from "svelte-icons-pack/ai/AiFillSlackCircle";
import "../bankroll/styles/mybetDetails.css"
import BsCreditCardFill from "svelte-icons-pack/bs/BsCreditCardFill";
import SiMoneygram from "svelte-icons-pack/si/SiMoneygram";
import RiFinanceHandCoinFill from "svelte-icons-pack/ri/RiFinanceHandCoinFill";
import FaSolidShare from "svelte-icons-pack/fa/FaSolidShare";
import {
    createEventDispatcher
} from 'svelte';
import Sharebet from './sharebet.svelte';
const dispatch = createEventDispatcher()

const handleClose = (() => {
    dispatch("close", 5)
})

let hasSharedBet = false
let handleSharedBet = (() => {
    if (hasSharedBet) {
        hasSharedBet = false
    } else {
        hasSharedBet = true
    }
})
</script>

<div class="sc-bkkeKt kBjSXI">
    {#if hasSharedBet}
    <Sharebet on:close={handleSharedBet}/>
     {/if}

        <div class="dialog " style="opacity: 1; width: 464px; height: 714px; margin-top: -357px; margin-left: -232px; transform: scale(1) translateZ(0px);">
            <div class="dialog-head has-close"><div class="dialog-title">Details</div></div>

            <button on:click={()=> handleClose()}  class="sc-ieecCq fLASqZ close-icon dialog-close">
                <Icon src={IoCloseSharp}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
            </button>

            <div class="dialog-body default-style " style="z-index: 2; transform: none;">
                <div class="sc-dkPtRN jScFby scroll-view sc-aaqME bGvuvq">
                    <div class="sc-emDsmM Osnbt">
                        <img class="win-state" alt="" src="https://static.nanogames.io/assets/lose.b4ff48b7.png">
                        <button on:click={handleSharedBet} class="sc-jibziO gZqspm game-share">
                            <Icon src={FaSolidShare}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
                        </button>
                        <div class="rt_info">
                            <img class="avatar avatar" alt="" src="https://img2.nanogames.io/avatar/505090/s?t=1694096906450">
                            <div class="name">Victor Otung</div>
                            <div class="flex">
                                <div class="betid">Betting ID: 728240291</div>
                                <div class="verified">Verified</div>
                            </div>
                        </div>
                        <div class="rt_time">9/5/2023, 11:21:47 AM</div>
                        <div class="rt_items">
                            <div class="item-wrap">
                                <div class="label flex-center">
                                    <span style="padding-right: 3px;">
                                        <Icon src={SiMoneygram}  size="13"  color="rgb(223, 39, 113)" className="custom-icon" title="arror" />
                                    </span>
                                    Amount</div>
                                <div class="number flex-center">2 CUB</div>
                            </div>
                            <div class="item-wrap">
                                <div class="label flex-center">
                                    <span style="padding-right: 3px;">
                                        <Icon src={BsCreditCardFill}  size="13"  color="rgb(119, 60, 253)" className="custom-icon" title="arror" />
                                    </span>
                                    Payout</div>
                                <div class="number flex-center">0 x</div>
                            </div>
                            <div class="item-wrap">
                                <div class="label flex-center">
                                    <span style="padding-right: 3px;">
                                        <Icon src={RiFinanceHandCoinFill}  size="13"  color="rgb(218, 30, 40)" className="custom-icon" title="arror" />
                                    </span>
                                    Profit</div>
                                <div class="number flex-center">-2 CUB</div>
                            </div>
                        </div>
                    </div>

                    <div class="sc-czvZiG ddVUMU">
                        <div class="sc-ekrjqK fmwvmO rt_items">
                            <div class="item-wrap">
                                <div class="item-num">
                                    <span style="padding-right: 3px;">
                                        <Icon src={BiChart}  size="13"  color="rgb(67, 179, 9)" className="custom-icon" title="arror" />
                                    </span>
                                    Result</div>
                                <div class="item-desc">1.20x</div>
                            </div>
                            <div class="item-wrap">
                                <div class="item-num">
                                    <span style="padding-right: 3px;">
                                        <Icon src={FaSolidDice}  size="13"  color="rgb(15, 98, 254)" className="custom-icon" title="arror" />
                                    </span>
                                    Bet
                                </div>
                                <div class="item-desc">
                                    <span class="mthan">Classic</span>
                                </div>
                            </div>
                            <div class="item-wrap">
                                <div class="item-num">
                                    <span style="padding-right: 3px;">
                                        <Icon src={AiFillSlackCircle}  size="17"  color="rgb(237, 99, 0)" className="custom-icon" title="arror" />
                                    </span>
                                    Chance</div>
                                <div class="item-desc">-</div>
                            </div>
                        </div>
                        <div class="sc-ezbkAF kDuLvp input ">
                            <div class="input-label">Game ID</div>
                            <div class="input-control">
                                <input type="text" readonly="" value="5608605">
                            </div>
                        </div>
                        <div class="sc-ezbkAF kDuLvp input ">
                            <div class="input-label">Hash</div>
                            <div class="input-control">
                                <input type="text" readonly="" value="a34c4b279604a87277aab525ab0f51a8d1fca78ec5705676c05be6cf0f96e840">
                            </div>
                        </div>
                        <div class="flex btns">
                            <button class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal all">
                                <div class="button-inner">
                                    <span>All Players</span>
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                        <use xlink:href="#icon_Arrow"></use>
                                    </svg>
                                </div>
                            </button>
                            <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                                <div class="button-inner">Verify</div>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        </div>

<style>

</style>
