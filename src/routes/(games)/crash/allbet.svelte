<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
import Trendball from './trendball.svelte';
import { active_playerEl, game_id } from "$lib/crashgame/store";
export let isClassic;

const handleAllbet = (()=>{
    if(isClassic){
        isClassic = false
    }else{
        isClassic = true
    }
})

</script>

<div class="sc-kqnjJL iLyFYQ">
    <div class="top">
        <div class="title">All Bets</div>
        <div class="flex-middle"><div>Trenball</div>
            <button on:click={handleAllbet} class={`sc-giYglK hRMjrF switch ${!isClassic ? "open" : ""}  `}>
                <div class="dot"></div>
            </button>
        </div>
    </div>

    {#if isClassic}
    <div class="sc-eoHXOn vjsVz need-scroll">
        <table class="head">
            <tbody>
                <tr>
                    <td class="user">Player</td>
                    <td class="escape">Cash Out</td>
                    <td class="amount">Amount</td>
                    <td>Profit</td>
                </tr>
            </tbody>
        </table>
        <div class="scroll-wrap">
            <div class="sc-gWXbKe iUeetX table is-hover">
                <table class="sc-gWXbKe iUeetX table is-hover">
                    <tbody>
                        {#if $active_playerEl.length !== 0 && $active_playerEl[0].game_type === "Classic"}
                        {#each $active_playerEl as player }
                        {#if player.game_id === $game_id}
                        <tr>
                            <td class="user">
                                {#if player.hidden_from_public}
                                <div class="sc-jUosCB iTDswZ " >
                                    <img class="avatar " alt="" src="https://static.nanogames.io/assets/avatar.a1ff78fe.png">
                                    <div class="name">Hidden</div>
                                </div>
                                {:else}
                                <a class="sc-jUosCB iTDswZ user-info " href={`/user/profile/${player.user_id}`}>
                                    <img class="avatar " alt="" src={player.profile_img}>
                                    <div class="name">{player.username}</div>
                                </a>
                            {/if}
                            </td>
                            <td class="escape">
                                {#if player.cashout < 1 && player.user_status}
                                    {#if !player.has_win && player.game_status}
                                        <span class="ttl opacity">{"betting"}</span>
                                        {:else}
                                        <span class="ttl opacity">betting</span>
                                    {/if}
                                {:else}
                                    <span class="ttl opacity">{(player.cashout).toFixed(2)}x</span>
                                {/if}
                            </td>
                            <td>
                                <div class="sc-Galmp erPQzq coin notranslate">
                                <img class="coin-icon" alt="" src={player.token_img}>
                                <div class="amount">
                                    <span class="amount-st">{(player.bet_amount).toFixed(4)}<span class="suffix">00</span></span>
                                </div>
                            </div>
                            </td>
                            <td>
                            {#if player.has_won}
                                <div class="sc-Galmp erPQzq coin notranslate is-win">
                                    <img class="coin-icon" alt="" src={player.token_img}>
                                    <div class="amount">
                                        <span class="amount-st">{(player.profit).toFixed(4)}</span>
                                    </div>
                                </div>
                                {:else if !player.has_won && !player.user_status}
                                <div class="sc-Galmp erPQzq coin notranslate has-lose">
                                    <img class="coin-icon" alt="" src={player.token_img}>
                                    <div class="amount">
                                        <span class="amount-st">{(player.bet_amount).toFixed(4)}<span class="suffix">00</span></span>
                                    </div>
                                </div>
                                {:else}
                                <span class="ttl opacity">betting</span>
                            {/if}
                            </td>
                        </tr>
                        {/if}
                        {/each}
                        {:else}
                            <div class="sc-eCImPb cuPxwd empty ">
                                <img src="https://static.nanogames.io/assets/empty.acd1f5fe.png" alt="">
                                <div class="msg">Oops! There is no data yet!</div>
                            </div>
                        {/if}
                    </tbody>
                </table>
            </div>
        </div>
        <div class="foot">
            <div class="state">0/{$active_playerEl.length} Player</div>
            <button class="list-toggle show-more">
                <div>Show more</div>
                <Icon src={RiSystemArrowDownSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
            </button>
        </div>
    </div>
    {:else}
    <Trendball />
    {/if}
</div>

<style>
.iLyFYQ {
    background-color: rgb(30, 32, 36);
    margin-left: 0.625rem;
    border-radius: 1.25rem;
    width: 40%;
    max-width: 542px;
    position: relative;
}
.iLyFYQ .top {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: absolute;
    top: -1.875rem;
    left: 0px;
    font-size: 13px;
    right: 0px;
    padding: 0px 0.625rem;
    line-height: 1.25rem;
}
.iLyFYQ .top .title {
    font-weight: bold;
    color: rgb(245, 246, 247);
}
.flex-middle {
    display: flex;
    align-items: center;
}
.iLyFYQ .top .switch {
    margin-left: 0.5rem;
}
.hRMjrF {
    width: 1.75rem;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: rgb(49, 52, 60);
    position: relative;
    cursor: pointer;
}
.hRMjrF .dot {
    transition: all 0.2s ease 0s;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: rgba(153, 164, 176, 0.6);
}
.iLyFYQ .top .switch {
    margin-left: 0.5rem;
}
.hRMjrF.open {
    background-color: rgba(93, 160, 0, 0.2);
}
.hRMjrF.open .dot {
    left: 0.75rem;
    background-color: rgb(67, 179, 9);
}
.vjsVz {
    height: 100%;
    min-height: 37.5rem;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px 0.375rem;
}
.vjsVz {
    height: 100%;
    min-height: 37.5rem;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px 0.375rem;
}
.vjsVz .head {
    table-layout: fixed;
    height: 3.75rem;
    font-size: 13px;
    color: rgba(153, 164, 176, 0.6);
}
table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
.vjsVz .head td {
    text-align: center;
}
.vjsVz .head td:first-of-type {
    text-align: left;
}
.vjsVz .user {
    max-width: 8.75rem;
}
.vjsVz td {
    padding: 0px 0.375rem;
    height: 3rem;
}
.vjsVz .escape {
    width: 5.625rem;
    font-size: 14.5px;
}
.vjsVz .head td:last-of-type {
    text-align: right;
}
.vjsVz .scroll-wrap {
    flex: 1 1 auto;
    position: relative;
}
.vjsVz.need-scroll .table {
    position: absolute;
    left: 0px;
    top: 0px;
}
.iUeetX {
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0px;
}
.iUeetX td:first-child {
    border-radius: 0.625rem 0px 0px 0.625rem;
}
 .iUeetX td:first-child {
    text-align: left;
}
.vjsVz .user {
    max-width: 8.75rem;
}
.vjsVz td {
    padding: 0px 0.375rem;
    height: 3rem;
}
.iUeetX td {
    border: 1px solid transparent;
    color: rgb(153, 164, 176);
}
.iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
}
.vjsVz .user-info {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
}
.iTDswZ.user-info {
    color: rgb(245, 246, 247);
    font-weight: bold;
    font-size: 13px;
}
.iTDswZ {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
}
.iTDswZ .avatar {
    width: 1.62em;
    height: 1.62em;
    border-radius: 50%;
    margin-right: 0.5em;
}
.iTDswZ .name {
    flex: 1 1 0%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.iTDswZ .name {
    flex: 1 1 0%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.vjsVz .escape {
    width: 5.625rem;
}
.vjsVz td {
    padding: 0px 0.375rem;
    height: 3rem;
}
.iUeetX td {
    border: 1px solid transparent;
    color: rgb(153, 164, 176);
}
.vjsVz .opacity {
    opacity: 0.5;
}
.table .sc-Galmp {
    font-family: Monmono;
}
.erPQzq .coin-icon {
    width: 1.4em;
    height: 1.4em;
    margin-right: 0.25em;
}
.erPQzq {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
}
.vjsVz .coin .coin-icon {
    width: 1.2em;
    height: 1.2em;
}
.vjsVz .coin .amount {
    color: rgb(245, 246, 247);
    font-weight: bold;
    font-size: 13px;
}
.erPQzq .suffix {
    opacity: 0.5;
}
.iUeetX td:last-child {
    border-radius: 0px 0.625rem 0.625rem 0px;
}
.iUeetX td:last-child {
    text-align: right;
}
.vjsVz td {
    padding: 0px 0.375rem;
    height: 3rem;
}
.vjsVz .opacity {
    opacity: 0.5;
}
.ttl {
    text-transform: lowercase;
}

.iUeetX td:last-child {
    border-radius: 0px 0.625rem 0.625rem 0px;
}
.iUeetX td:last-child {
    text-align: right;
}
.table .sc-Galmp {
    font-family: Monmono;
}

.erPQzq {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
}
.vjsVz .coin .coin-icon {
    width: 1.2em;
    height: 1.2em;
}
.erPQzq .coin-icon {
    width: 1.4em;
    height: 1.4em;
    margin-right: 0.25em;
}

.vjsVz .coin.is-win .amount {
    color: rgb(67, 179, 9);
}
.vjsVz .coin.has-lose .amount {
    color: rgb(237, 99, 0);
}
.vjsVz .coin .amount {
    color: rgb(245, 246, 247);
    font-weight: bold;
}

.erPQzq .suffix {
    opacity: 0.5;
}

.vjsVz .foot {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 1rem 0.4375rem;
    position: relative;
    z-index: 11;
}
.vjsVz .state::before {
    content: "";
    display: inline-block;
    background-color: rgb(67, 179, 9);
    width: 0.4375rem;
    height: 0.4375rem;
    border-radius: 0.25rem;
    margin-right: 0.4375rem;
}
.vjsVz .list-toggle {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 7.5rem;
    height: 2rem;
    border-radius: 1rem;
    padding: 0px 0.625rem;
    white-space: nowrap;
    background-color: rgb(35, 39, 44);
}
.vjsVz .list-toggle > div {
    flex: 1 1 0%;
}
</style>
