<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
import { active_playerEl} from "$lib/crashgame/store";
</script>

<div class="tabs-view" style="transform: none;">
   <div class="sc-eoHXOn vjsVz">
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
                                <span class="ttl opacity">{player.cashout}x</span>
                            {/if}
                        </td>
                        <td>
                            <div class="sc-Galmp erPQzq coin notranslate">
                            <img class="coin-icon" alt="" src={player.token_img}>
                            <div class="amount">
                                <span class="amount-st">{(parseFloat(player.bet_amount)).toFixed(4)}<span class="suffix">00</span></span>
                            </div>
                        </div>
                        </td>
                        <td>
                        {#if player.has_won}
                            <div class="sc-Galmp erPQzq coin notranslate is-win">
                                <img class="coin-icon" alt="" src={player.token_img}>
                                <div class="amount">
                                    <span class="amount-st">{player.profit}</span>
                                </div>
                            </div>
                            {:else if !player.has_won && !player.user_status}
                            <div class="sc-Galmp erPQzq coin notranslate has-lose">
                                <img class="coin-icon" alt="" src={player.token_img}>
                                <div class="amount">
                                    <span class="amount-st">{(parseFloat(player.bet_amount)).toFixed(4)}<span class="suffix">00</span></span>
                                </div>
                            </div>
                            {:else}
                            <span class="ttl opacity">betting</span>
                        {/if}
                        </td>
                    </tr>
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
   </div>
</div>

<style>
.tabs-view {
    background-color: rgb(30, 32, 36);
    border-radius: 1.25rem;
    padding: 1px 0px;
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
.vjsVz .head td:first-of-type {
    text-align: left;
}
.vjsVz td:first-child {
    border-radius: 0.625rem 0px 0px 0.625rem;
}
.vjsVz .head td {
    text-align: center;
}
.vjsVz .user {
    max-width: 8.75rem;
}
.vjsVz td {
    padding: 0px 0.375rem;
    height: 3rem;
}
.vjsVz .head td {
    text-align: center;
}
.vjsVz .escape {
    width: 5.625rem;
}
.vjsVz td {
    padding: 0px 0.375rem;
    height: 3rem;
}
.vjsVz .head td {
    text-align: center;
}
.vjsVz .head td:last-of-type {
    text-align: right;
}
.vjsVz td:last-child {
    border-radius: 0px 0.625rem 0.625rem 0px;
}
.vjsVz .scroll-wrap {
    flex: 1 1 auto;
    position: relative;
}
.vjsVz .scroll-wrap {
    flex: 1 1 auto;
    position: relative;
}
.vjsVz td:first-child {
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
table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
.iUeetX {
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0px;
}
.iUeetX td {
    padding: 0.875rem 0.3125rem;
    font-size: 0.75rem;
}
.iUeetX td {
    border: 1px solid transparent;
    color: rgb(153, 164, 176);
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
.vjsVz .escape {
    width: 5.625rem;
}
.vjsVz td {
    padding: 0px 0.375rem;
    height: 3rem;
}
.iUeetX td {
    padding: 0.875rem 0.3125rem;
    font-size: 0.75rem;
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
.vjsVz .opacity {
    opacity: 0.5;
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
.vjsVz .coin .amount {
    color: rgb(245, 246, 247);
    font-weight: bold;
}
.erPQzq .amount-st {
    width: 7em;
    display: inline-block;
}
.erPQzq .suffix {
    opacity: 0.5;
}
.vjsVz td:last-child {
    border-radius: 0px 0.625rem 0.625rem 0px;
}
.iUeetX td:last-child {
    text-align: right;
}
.vjsVz .opacity {
    opacity: 0.5;
}


</style>