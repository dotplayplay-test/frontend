<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import Indev from '$lib/crashgame/components/mybetDetails/indev.svelte';
import Sharebet from '../../../lib/crashgame/components/mybetDetails/sharebet.svelte';
import Layout from '$lib/crashgame/components/history/layout.svelte';

let isBet = true
let isHistory = false
let isContent = false

const handleRoute = ((w)=>{
    if(w === 1){
        isBet = true
        isHistory = false
        isContent = false
    }
    else if(w === 2){
        isBet = false
        isHistory = true
        isContent = false
    }
    else{
        isBet = false
        isHistory = false
        isContent = true 
    }
})
let isBetHistory = false
let handleBetHistory = (()=>{
    if(isBetHistory){
        isBetHistory = false
    }else{
        isBetHistory = true
    }
})

</script>

{#if isBetHistory}
<Indev on:close={handleBetHistory} />
{/if}

<div class="sc-cxpSdN kQfmQV tabs game-tabs len-3">
    <div class="tabs-navs">
        <button on:click={()=>handleRoute(1)} class={`tabs-nav ${isBet ? "is-active" : ""} `} >My Bets</button>
        <button on:click={()=>handleRoute(2)} class={`tabs-nav ${isHistory ? "is-active" : ""} `} >History</button>
        <button on:click={()=>handleRoute(3)}  class={`tabs-nav ${isContent ? "is-active" : ""} `} >Contest</button>
        {#if isBet}
            <div class="bg" style={`left: 0%; right: 66.6667%;`}></div>
            {:else if isHistory}
            <div class="bg" style="left: 33.3333%; right: 33.3333%;"></div>
            {:else if isContent}
            <div class="bg" style="left: 66.6667%; right: 0%;"></div>
        {/if}
    </div>
{#if isBet}
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
                <tr on:click={()=>handleBetHistory()} class="values">
                    <td>
                        <p class="hash ellipsis">728240291</p>
                    </td>
                    <td>11:21:47 AM</td>
                    <td class="bet">
                        <div class="sc-Galmp erPQzq coin notranslate monospace">
                            <img class="coin-icon" alt="" src="https://www.linkpicture.com/q/ppf_logo.png">
                            <div class="amount">
                                <span class="amount-str">2.<span class="suffix">00000000</span>
                                </span>
                            </div>
                        </div>
                    </td>
                    <td class="payout">0.00×</td>
                    <td class="profitline is-lose">
                        <div class="sc-Galmp erPQzq coin notranslate monospace has-sign">
                            <img class="coin-icon" alt="" src="https://www.linkpicture.com/q/ppf_logo.png">
                            <div class="amount">
                                <span class="amount-str">2.<span class="suffix">00000000</span>
                                </span>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
{:else if isHistory}
    <Layout />
{/if}

</div>

<div class="sc-knKHOI cFxmZX">
    <div class="intro-title">
        <p>Crash</p>
        <div class="intro-tags">
            <p>Multiplayer</p>
            <p>Our Best Games</p>
            <p>BC Originals</p>
        </div>
    </div>
    <div class="description">CRASH is an online multiplayer blockchain guessing game that made as an increasing curve that may crash at any time.</div>
    <button class="intro-detail">
        Details
        <Icon src={RiSystemArrowRightSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
    </button>
</div>

<style>
.game-tabs {
    margin-top: 2.5rem;
}
.values:hover{
    background: #bcbbbb29;
}

.iycaRo {
    min-height: 30rem;
    padding: 0.5rem;
}

.game-tabs {
    margin-top: 2.5rem;
}

.lmWKWf .game-tabs .tabs-navs {
    margin-bottom: 0.75rem;
    margin-left: 0.625rem;
    display: inline-flex;
}

.kQfmQV .tabs-navs {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 2.25rem;
    position: relative;
    border-radius: 1.125rem;
    background-color: rgba(49, 52, 60, 0.7);
}

.lmWKWf .game-tabs .tabs-navs .tabs-nav {
    width: 5.625rem;
}

.kQfmQV .tabs-nav {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 0%;
    height: 100%;
    cursor: pointer;
    white-space: nowrap;
    width: 100%;
    z-index: 1;
}

.kQfmQV .tabs-nav {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 0%;
    height: 100%;
    cursor: pointer;
    white-space: nowrap;
    width: 100%;
    z-index: 1;
}

.kQfmQV .tabs-navs .bg {
    border-radius: 1.125rem;
    background-image: linear-gradient(to left, rgb(85, 89, 102), rgb(85, 89, 102), rgb(88, 174, 20));
    opacity: 0.4;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    transition: right 0.2s ease-out 0s, left 0.3s ease-out 0s;
    transform: translateZ(0px);
    box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 0.3125rem;
}

.lmWKWf .game-tabs .tabs-view {
    background-color: rgb(30, 32, 36);
    border-radius: 1.25rem;
    padding: 1px 0px;
}

.kQfmQV .tabs-view {
    position: relative;
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

.lmWKWf .game-tabs .tabs-navs {
    margin-bottom: 0.75rem;
    margin-left: 0.625rem;
    display: inline-flex;
}

.kQfmQV .tabs-navs {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 2.25rem;
    position: relative;
    border-radius: 1.125rem;
    background-color: rgba(49, 52, 60, 0.7);
}

.lmWKWf .game-tabs .tabs-navs .tabs-nav {
    width: 5.625rem;
}

.kQfmQV .tabs-nav.is-active {
    color: rgb(245, 246, 247);
    font-weight: bold;
}

.kQfmQV .tabs-nav {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 0%;
    height: 100%;
    cursor: pointer;
    white-space: nowrap;
    width: 100%;
    z-index: 1;
}

.lmWKWf .game-tabs .tabs-navs {
    margin-bottom: 0.75rem;
    margin-left: 0.625rem;
    display: inline-flex;
}

.lmWKWf .game-tabs .tabs-view {
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

.iUeetX th,
.iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
}

.iUeetX th:last-child,
.iUeetX td:last-child {
    text-align: right;
}

.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.iycaRo .coin {
    font-weight: bold;
}

.erPQzq .coin-icon {
    width: 1.4em;
    height: 1.4em;
    margin-right: 0.25em;
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

.game-tabs .tabs-navs {
    margin-bottom: 0.75rem;
    margin-left: 0.625rem;
    display: inline-flex;
}

.game-tabs .tabs-navs .tabs-nav {
    width: 5.625rem;
}

.game-tabs .tabs-view {
    background-color: rgb(30, 32, 36);
    border-radius: 1.25rem;
    padding: 1px 0px;
}

.iUeetX th:first-child,
.iUeetX td:first-child {
    text-align: left;
}
.cFxmZX {
    width: 100%;
    border-radius: 1.25rem;
    background-color: rgb(30, 32, 36);
    padding: 1.5rem 1.5rem 2rem;
    margin-top: 2rem;
}
.cFxmZX .intro-title {
    min-height: 5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.cFxmZX .intro-title > p {
    font-size: 1rem;
    color: rgb(245, 246, 247);
    font-weight: 600;
    margin: 0px;
    white-space: nowrap;
}
.cFxmZX .intro-title .intro-tags {
    margin-left: 2.5rem;
    display: flex;
    flex-wrap: wrap;
}
.cFxmZX .intro-title .intro-tags > p {
    margin: 0px 1.125rem 0.3125rem 0px;
    padding: 0.5rem 1.25rem;
    border-radius: 1.125rem;
    background-color: rgb(43, 47, 54);
}
.cFxmZX .description {
    margin-top: 0.75rem;
    line-height: 1.25rem;
}
.cFxmZX .intro-detail {
    width: 6.75rem;
    height: 2.5rem;
    margin-top: 2rem;
    border-radius: 1.25rem;
    background-color: rgba(49, 52, 60, 0.6);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
</style>
