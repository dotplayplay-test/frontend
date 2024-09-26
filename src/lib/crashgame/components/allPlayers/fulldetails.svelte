<script>

import "../bankroll/styles/mybetDetails.css"
import { SinglePlayerDetailsEl } from "../../store"

</script>

<div class="dialog-body default-style " style="z-index: 2; transform: none;">
    <div class="sc-dkPtRN jScFby scroll-view sc-aaqME bGvuvq">
        <div class="sc-emDsmM Osnbt">
            {#if !$SinglePlayerDetailsEl.has_won}
                <img class="win-state" alt="" src="https://static.nanogames.io/assets/lose.b4ff48b7.png">
            {:else}
            <img class="win-state" alt="" src="https://static.nanogames.io/assets/win.431b83d6.png">
            {/if}
            <div class="rt_info">
                <img class="avatar avatar" alt="" src={$SinglePlayerDetailsEl.profile_img}>
                <div class="name">{$SinglePlayerDetailsEl.username}</div>
                <div class="flex">
                    <div class="betid">Betting ID: {$SinglePlayerDetailsEl.bet_id}</div>
                    <div class="verified">Verified</div>
                </div>
            </div>
            <div class="rt_time">{$SinglePlayerDetailsEl.time}</div>
            <div class="rt_items">
                <div class="item-wrap">
                    <div class="label flex-center">
                        <span style="padding-right: 3px;">
     
                        </span>
                        Amount</div>
                    <div class="number flex-center">{$SinglePlayerDetailsEl.bet_amount}{" "}{$SinglePlayerDetailsEl.token}</div>
                </div>
                <div class="item-wrap">
                    <div class="label flex-center">
                        <span style="padding-right: 3px;">
   
                        </span>
                        Payout
                    </div>
                    {#if $SinglePlayerDetailsEl.win_lose === "lose" }
                     <div class="number flex-center">0 x</div>
                      {:else}      
                        <div class="number flex-center">{$SinglePlayerDetailsEl.cashout} x</div>
                    {/if}
                </div>
                <div class="item-wrap">
                    <div class="label flex-center">
                        <span style="padding-right: 3px;">
 
                        </span>
                        Profit
                    </div>
                    {#if $SinglePlayerDetailsEl.win_lose === "lose" }
                    <div class="number flex-center">0 x</div>
                     {:else}      
                       <div class="number flex-center">{$SinglePlayerDetailsEl.profit} x</div>
                   {/if}
                </div>
            </div>
        </div>

        <div class="sc-czvZiG ddVUMU">
            <div class="sc-ekrjqK fmwvmO rt_items">
                <div class="item-wrap">
                    <div class="item-num">
                        <span style="padding-right: 3px;">
                       
                        </span>
                        Result</div>
                    <div class="item-desc">{$SinglePlayerDetailsEl.payout}x</div>
                </div>
                <div class="item-wrap">
                    <div class="item-num">
                        <span style="padding-right: 3px;">
                     
                        </span>
                        Bet
                    </div>
                    <div class="item-desc">
                        <span class="mthan">{$SinglePlayerDetailsEl.game_type}</span>
                    </div>
                </div>
                <div class="item-wrap">
                    <div class="item-num">
                        <span style="padding-right: 3px;">
               
                        </span>
                        Chance</div>
                    <div class="item-desc">{$SinglePlayerDetailsEl.chance}</div>
                </div>
            </div>
            <div class="sc-ezbkAF kDuLvp input ">
                <div class="input-label">Game ID</div>
                <div class="input-control">
                    <input type="text" readonly={true} value={$SinglePlayerDetailsEl.game_id}>
                </div>
            </div>
            <div class="sc-ezbkAF kDuLvp input ">
                <div class="input-label">Hash</div>
                <div class="input-control">
                    <input type="text" readonly value={$SinglePlayerDetailsEl.game_hash}>
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
                    <a style="color:#fff" href={`https://dppgames.netlify.app/verify/crash?hash=${$SinglePlayerDetailsEl.game_hash}`} target="_blank" >
                        <div class="button-inner">Verify</div>
                    </a>
                </button>
            </div>
        </div>

    </div>
</div>

<style>
   
</style>