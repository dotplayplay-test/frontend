<script>
import {
    profileStore
} from "../../../store/profile"
import {
    dicegameplays
} from "../../ClassicDice/store/index"

$: {
    $dicegameplays.sort((a, b) => b.id - a.id);
}
</script>

<div class="tabs-view" style="transform: none;">
    <div class="sc-eZhRLC iycaRo">
        <table class="sc-gWXbKe iUeetX table is-hover">
            <thead>
                <tr>
                    <th class="num">Bet ID</th>
                    <th class="time">Time</th>
                    <th class="bet">Bet</th>
                    <th class="payout">Payout</th>
                    <th class="profit">Profit</th>
                </tr>
            </thead>
            <tbody>
                {#each $dicegameplays.slice(0, 15) as dice (dice.id) }
                {#if $profileStore.user_id === dice.user_id}
                <tr>
                    <td>
                        <button  class="hash ellipsis">{dice.bet_id}</button>
                    </td>
                    <td>{dice.time}</td>
                    <td class="bet">
                        <div class="sc-Galmp erPQzq coin notranslate monospace">
                            <img class="coin-icon" alt="" src={dice.token_img}>
                            <div class="amount">
                                <span class="amount-str">{dice.bet_amount}.<span class="suffix">000000</span>
                                </span>
                            </div>
                        </div>
                    </td>
                    {#if dice.win_lose === "win"}
                    <td class="payout">{dice.payout}×</td>
                    {:else}
                    <td class="payout">0.00×</td>
                    {/if}
                    <td class={`profitline ${dice.win_lose === "win" ? "is-win" : "is-lose" } `}>
                        <div class="sc-Galmp erPQzq coin notranslate monospace has-sign">
                            <img class="coin-icon" alt="" src={dice.token_img}>
                            <div class="amount">
                                {#if dice.win_lose === "win"}
                                <span class="amount-str">+{dice.profit}.<span class="suffix">000000</span>
                                </span>
                                {:else}
                                <span class="amount-str">{dice.bet_amount}.<span class="suffix">000000</span>
                                </span>
                                {/if}
                            </div>
                        </div>
                    </td>
                </tr>
                {/if}
                {/each}
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

.iUeetX th:first-child,
.iUeetX td:first-child {
    text-align: left;
}

.iUeetX th,
.iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
}

.iUeetX th,
.iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
}

.iUeetX th {
    font-weight: normal;
    color: rgba(153, 164, 176, 0.6);
}

.iycaRo tr {
    cursor: pointer;
}

.iUeetX td:first-child {
    border-radius: 0.625rem 0px 0px 0.625rem;
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

.iycaRo .is-lose .amount {
    color: rgb(237, 99, 0);
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

.coin .amount {
    color: rgb(245, 246, 247);
}

.iycaRo .coin {
    font-weight: bold;
}
</style>
