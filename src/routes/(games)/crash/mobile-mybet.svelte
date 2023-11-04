<script>
import {mybetEl, mybetElDetails } from "$lib/crashgame/store"
import { profileStore , handleisLoggin} from "$lib/store/profile"
import Indev from '$lib/crashgame/components/mybetDetails/indev.svelte';
let isBetHistory = false
let handleBetHistory = ((e)=>{
    if(isBetHistory){
        isBetHistory = false
    }else{
        mybetElDetails.set(e)
        isBetHistory = true
    }
})

let newItem;

$: {
    // $crash_historyEl.sort((a, b) => b._id - a._id);
    newItem =  [...$mybetEl].reverse()
}

</script>
{#if isBetHistory}
<Indev on:close={handleBetHistory} />
{/if}
<div class="tabs-view" style="transform: none;">
    <div class="sc-eZhRLC iycaRo">
        <table class="sc-gWXbKe iUeetX table is-hover">
            <thead>
                <tr>

                    <th class="num">Bet ID</th>
                    <!-- <th class="time">Time</th> -->
                    <!-- <th class="bet">Bet</th> -->
                    <th class="payout">Payout</th>
                    <th class="profit">Profit</th>
                </tr>
            </thead>
            <tbody>
                {#if $handleisLoggin}
                {#each newItem.slice(0, 20) as mybet }
                {#if (mybet.username === $profileStore.username)}
                <tr on:click={()=>handleBetHistory(mybet)} class="values">
                    <td>
                        <p class="hash ellipsis">{mybet.bet_id}</p>
                    </td>
                    <!-- <td>{mybet.time}</td> -->
                    <!-- <td class="bet">
                        <div class="sc-Galmp erPQzq coin notranslate monospace">
                            <img class="coin-icon" alt="" src={mybet.token_img}>
                            <div class="amount">
                                <span class="amount-str">{mybet.bet_amount}<span class="suffix">00</span>
                                </span>
                            </div>
                        </div>
                    </td> -->
                    {#if mybet.has_won}
                    <td class="payout">{(parseFloat(mybet.cashout)).toFixed(2)}×</td>
                    {:else}
                    <td class="payout">{"0.00"}x</td>
                    {/if}
                    <td class="profitline is-lose">
                        <div class="sc-Galmp erPQzq coin notranslate monospace has-sign">
                            <img class="coin-icon" alt="" src={mybet.token_img}>
                            <div class="amount">
                                {#if mybet.has_won}
                                <span class="amount-str" style="color:#43b309">+{(parseFloat(mybet.profit)).toFixed(5)}<span class="suffix">00</span> </span>
                                {:else}
                                <span class="amount-str" style="color: rgb(237, 99, 0);">{(parseFloat(mybet.bet_amount)).toFixed(5)}<span class="suffix">00</span> </span>
                                {/if}
                            </div>
                        </div>
                    </td>
                </tr>
                {/if}
                {/each}
                {:else}
                <div class="sc-eCImPb cuPxw empty ">
                    <img src="https://static.nanogames.io/assets/empty.acd1f5fe.png" alt="">
                    <div class="msg">Oops! There is no data yet!</div>
                </div>
                {/if} 
               
           
            </tbody>
        </table>
    </div>
</div>

<style>
.tabs-view {
    background-color: rgb(30, 32, 36);
    border-radius: 1.25rem;
    padding: 1px 0px;
}
.cuPxw .msg{
    position: absolute;
    top: 60%;
    left: 25%;
}
.cuPxw img{
    width: 170px;
    position: absolute;
    top: 30%;
    left: 30%;
}
.tabs-view {
    position: relative;
}
.iycaRo {
    min-height: 30rem;
    padding: 0.5rem;
}
.iycaRo .empty {
    min-height: 30rem;
}

.iUeetX {
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0px;
}
.iycaRo tr {
    cursor: pointer;
    font-size: 13px;
}
.iUeetX th:first-child, .iUeetX td:first-child {
    text-align: left;
}
.iUeetX th {
    padding: 0.875rem 0.3125rem;
    font-size: 0.875rem;
}
.iUeetX th, .iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
}
.iUeetX th {
    font-weight: normal;
    color: rgba(153, 164, 176, 0.6);
}
.iycaRo .payout {
    width: 4rem;
}
.iUeetX th {
    padding: 0.875rem 0.3125rem;
    font-size: 0.875rem;
}
.iUeetX th, .iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
}
.iUeetX th:last-child, .iUeetX td:last-child {
    text-align: right;
}
.iUeetX td:first-child {
    border-radius: 0px;
}
.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.iUeetX td:last-child {
    border-radius: 0px;
}
.iycaRo {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
}
.iycaRo .coin-icon {
    width: 1.4em;
    height: 1.4em;
    margin-right: 0.25em;
}
.erPQzq .is-lose .amount {
    color: rgb(237, 99, 0);
}
.erPQzq .coin .amount {
    color: rgb(245, 246, 247);
}
.erPQzq.has-sign .amount-str {
    width: 7.2em;
}
.erPQzq .suffix {
    opacity: 0.5;
}
.iycaRo .is-win .amount {
    color: rgb(67, 179, 9);
}
</style>