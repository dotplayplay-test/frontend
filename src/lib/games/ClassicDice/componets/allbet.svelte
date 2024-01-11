<script>
import { dicegameplays} from "../store/index"
import HistoryDetails from "./historyDetails.svelte";

let newItem;
 $: {
    // $crash_historyEl.sort((a, b) => b._id - a._id);
    newItem =  [...$dicegameplays].reverse()
}

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

{#if hisQQ}
    <HistoryDetails on:close={handleDiceHistoryDetail} DgII={DgII}/> 
{/if}

<div id="main" class="tabs-view" style="transform: none;">
    <div class="sc-eZhRLC iycaRo">
        <table class="sc-gWXbKe iUeetX table is-hover">
            <thead>
                <tr>
                    <th class="num">Bet ID</th>
                    <th class="user">Player</th>
                    <th class="time">Time</th>
                    <th class="bet">Bet</th>
                    <th class="payout">Payout</th>
                    <th class="profit">Profit</th>
                </tr>
            </thead>
            <tbody>
                {#each newItem.slice(0, 20) as dice  }
                <tr  on:click={()=>handleDiceHistoryDetail(dice)}>
                    <td>
                        <button class="hash ellipsis">{dice.bet_id}</button>
                    </td>
                    <td>
                        {#if dice.hidden_from_public }
                            <div class="sc-jUosCB iTDswZ" >
                                <div class="name">Hidden</div>
                            </div>
                            {:else}
                            <a class="sc-jUosCB iTDswZ user-info " href={`/user/profile/${dice.user_id}`}>
                                <div class="name">{dice.username}</div>
                            </a>
                        {/if}
                    </td>
                    <td>{formatTime(dice.time)}</td>
                    <td class="bet">
                        <div class="sc-Galmp erPQzq coin notranslate monospace">
                            <img class="coin-icon" alt="" src={dice.token_img}>
                            <div class="amount">
                                <span class="amount-str">{(parseFloat(dice.bet_amount)).toFixed(6)}<span class="suffix">00</span>
                                </span>
                            </div>
                        </div>
                    </td>
                    {#if !dice.has_won}
                    <td class="payout">0.00×</td>
                    {:else}
                    <td class="payout">{(parseFloat(dice.payout)).toFixed(2)}×</td>
                    {/if}
                    <td class={`profitline ${dice.has_won ? "is-win": "is-lose"} `}>
                        <div class="sc-Galmp erPQzq coin notranslate monospace has-sign">
                            <img class="coin-icon" alt=""  src={dice.token_img}>
                            <div class="amount">
                                {#if !dice.has_won}
                                <span class="amount-str">{(parseFloat(dice.bet_amount)).toFixed(6)}<span class="suffix">00</span></span>
                                {:else}
                                <span class="amount-str">+{(parseFloat(dice.profit)).toFixed(6)}<span class="suffix">00</span></span>
                                {/if}
                            </div>
                        </div>
                    </td>
                </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>

<div class="mobile">
    <div class="tabs-view" style="transform: none;">
        <div class="sc-eZhRLC iycaRo">
            <table class="sc-gWXbKe iUeetX table is-hover">
                <thead>
                    <tr>
                        <th class="num">Bet ID</th>
                        <th class="user">Player</th>
                        <th class="payout">Payout</th>
                        <th class="profit">Profit</th>
                    </tr>
                </thead>
                <tbody>
                    {#each newItem.slice(0, 15) as dice  }
                    <tr on:click={()=>handleDiceHistoryDetail(dice)}>
                        <td>
                            <button class="hash ellipsis">{dice.bet_id}</button>
                        </td>
                        <td>
                            {#if dice.hidden_from_public }
                            <div class="sc-jUosCB iTDswZ" >
                                <div class="name">Hidden</div>
                            </div>
                            {:else}
                            <a class="sc-jUosCB iTDswZ user-info " href={`/user/profile/${dice.user_id}`}>
                                <div class="name">{dice.username}</div>
                            </a>
                        {/if}
                        </td>
                        {#if !dice.has_won}
                        <td class="payout">0.00×</td>
                        {:else}
                        <td class="payout">{(parseFloat(dice.payout)).toFixed(2)}×</td>
                        {/if}
                        <td class={`profitline ${dice.has_won ? "is-win": "is-lose"} `}>
                            <div class="sc-Galmp erPQzq coin notranslate monospace has-sign">
                                <img class="coin-icon" alt=""  src={dice.token_img}>
                            <div class="amount">
                                {#if !dice.has_won}
                                <span class="amount-str">{(parseFloat(dice.bet_amount)).toFixed(6)}<span class="suffix">00</span></span>
                                {:else}
                                <span class="amount-str">+{(parseFloat(dice.profit)).toFixed(6)}<span class="suffix">00</span></span>
                                {/if}
                            </div>
                        </div>
                    </td>
                </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>

<style>
.tabs-view {
    position: relative;
}

.tabs-view {
    background-color: var(--card-bg-5);
    border-radius: 1.25rem;
    padding: 1px 0px;
}

.erPQzq.has-sign .amount-str {
    width: 7.2em;
}
.iycaRo {
    min-height: 30rem;
    padding: 0.5rem;
}

.iUeetX {
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0px;
}

.iycaRo tr {
    cursor: pointer;
    font-size: 14px;
}
.iycaRo tr:hover{
    background: #c6c1c113;
}

.iUeetX th:first-child {
    text-align: left;
}

.iUeetX th {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
}

.iUeetX th {
    font-weight: normal;
color: var(--text-6);}


.iUeetX td:first-child {
    border-radius: 0.625rem 0px 0px 0.625rem;
}

.iUeetX th:first-child,
.iUeetX td:first-child {
    text-align: left;
}

.iUeetX td {
    border: 1px solid transparent;
    color: var(--text-4);
}

.iUeetX th,
.iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
}

.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.iycaRo a {
    color: inherit;
}

.iUeetX td {
    border: 1px solid transparent;
    color: var(--text-4);
}

.iTDswZ.user-info {
    color: var(--text-5);
    font-weight: bold;
}

.iycaRo a {
    color: inherit;
}

.iTDswZ {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
}

.iTDswZ .name {
    flex: 1 1 0%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.iUeetX td {
    border: 1px solid transparent;
    color: var(--text-4);
}

.iycaRo .coin {
    font-weight: bold;
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

.erPQzq .coin-icon {
    width: 1.4em;
    height: 1.4em;
    margin-right: 0.25em;
}

 .coin .amount {
    color: var(--text-5);
}

.erPQzq .amount-str {
    width: 7em;
    display: inline-block;
}

.erPQzq .suffix {
    opacity: 0.5;
}

.iUeetX td {
    border: 1px solid transparent;
    color: var(--text-4);
}

.iUeetX td:last-child {
    border-radius: 0px 0.625rem 0.625rem 0px;
}

.iUeetX th:last-child,
.iUeetX td:last-child {
    text-align: right;
}

.iUeetX td {
    border: 1px solid transparent;
    color: var(--text-4);
}

.iycaRo .coin {
    font-weight: bold;
}

.erPQzq {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
}

.erPQzq .coin-icon {
    width: 1.4em;
    height: 1.4em;
    margin-right: 0.25em;
}


.erPQzq.has-sign .amount-str {
    width: 7.2em;
}
.iycaRo .is-lose .amount {
    color: rgb(237, 99, 0);
}
.iycaRo .is-win .amount {
    color: rgb(67, 179, 9);
}
.iycaRo .coin {
    font-weight: bold;
}

@media only screen and (max-width: 650px){

    .iycaRo {
    min-height: 30rem;
    padding: 0.5rem;
}
.iUeetX {
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0px;
}
.iycaRo tr {
    cursor: pointer;
}
.iUeetX th:first-child, .iUeetX td:first-child {
    text-align: left;
}
.iUeetX th, .iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
}
.iUeetX th {
    padding: 0.875rem 0.3125rem;
    font-size: 0.875rem;
}
.iycaRo .payout {
    width: 4rem;
}
.iUeetX th {
    padding: 0.875rem 0.3125rem;
    font-size: 0.875rem;
}
.iUeetX th:last-child, .iUeetX td:last-child {
    text-align: right;
}
.iUeetX td:first-child {
    border-radius: 0px;
}
.iycaRo a {
    color: inherit;
}
.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.iUeetX td {
    padding: 0.875rem 0.3125rem;
    font-size: 0.75rem;
}
.iUeetX td {
    border: 1px solid transparent;
    color: var(--text-4);
}
.iTDswZ.user-info {
    color: var(--text-5);
    font-weight: bold;
}
.iTDswZ {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
}
.iTDswZ .name {
    flex: 1 1 0%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.iUeetX td {
    padding: 0.875rem 0.3125rem;
    font-size: 0.75rem;
}
.iUeetX td:last-child {
    border-radius: 0px;
}
.iycaRo .coin {
    font-weight: bold;
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
.erPQzq .coin-icon {
    width: 1.4em;
    height: 1.4em;
    margin-right: 0.25em;
}
.erPQzq .amount-str {
    width: 7em;
    display: inline-block;
}
.iycaRo .is-lose .amount {
    color: rgb(237, 99, 0);
}
.erPQzq .suffix {
    opacity: 0.5;
}
.erPQzq.has-sign .amount-str {
    width: 7.2em;
}
}

</style>
