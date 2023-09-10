<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
import Trendball from './trendball.svelte';
export let isClassic;

const handleAllbet = (()=>{
    if(isClassic){
        isClassic = false
    }else{
        isClassic = true
    }
})

</script>

<div class="sc-bcCSHH gAFwbx">
    <div class="top">
        <div class="title">All Bets</div>
        <div class="flex-middle"><div>Trenball</div>
            <button on:click={handleAllbet} class={`sc-giYglK hRMjrF switch ${!isClassic ? "open" : ""}  `}>
                <div class="dot"></div>
            </button>
        </div>
    </div>

    {#if isClassic}
    <div class="sc-eSJyHI fdisPg need-scroll">
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
                        <tr>
                            <td class="user">
                                <a class="sc-jUosCB iTDswZ user-info " href="/user/profile/376778">
                                    <img class="avatar " alt="" src="https://img2.nanogames.io/avatar/376778/s">
                                    <div class="name">Hhhhhhh</div>
                                </a>
                            </td>
                            <td class="escape">
                                <span class="ttl opacity">Betting</span>
                            </td><td><div class="sc-Galmp erPQzq coin notranslate">
                                <img class="coin-icon" alt="" src="https://www.linkpicture.com/q/ppf_logo.png">
                                <div class="amount">
                                    <span class="amount-str">33.554432<span class="suffix">0</span>
                                    </span>
                                </div>
                            </div>
                            </td>
                            <td>
                                <span class="ttl opacity">Betting</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="user">
                                <a class="sc-jUosCB iTDswZ user-info " href="/user/profile/376778">
                                    <img class="avatar " alt="" src="https://img2.nanogames.io/avatar/376778/s">
                                    <div class="name">Hhhhhhh</div>
                                </a>
                            </td>
                            <td class="escape">
                                <span class="ttl opacity">Betting</span>
                            </td><td><div class="sc-Galmp erPQzq coin notranslate">
                                <img class="coin-icon" alt="" src="https://www.linkpicture.com/q/ppf_logo.png">
                                <div class="amount">
                                    <span class="amount-str">33.554432<span class="suffix">0</span>
                                    </span>
                                </div>
                            </div>
                            </td>
                            <td>
                                <span class="ttl opacity">Betting</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="foot">
            <div class="state">0/11 Player</div>
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
.gAFwbx {
    background-color: rgb(30, 32, 36);
    margin-left: 0.625rem;
    border-radius: 1.25rem;
    width: 40%;
    max-width: 542px;
    position: relative;
}

.gAFwbx .top {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: absolute;
    top: -1.875rem;
    left: 0px;
    right: 0px;
    padding: 0px 0.625rem;
    line-height: 1.25rem;
}

.gAFwbx .top .title {
    font-weight: bold;
    color: rgb(245, 246, 247);
}

.flex-middle {
    display: flex;
    align-items: center;
}

.gAFwbx .top .switch {
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

.hRMjrF.open {
    background-color: rgba(93, 160, 0, 0.2);
}

.fdisPg {
    height: 100%;
    min-height: 37.5rem;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px 0.375rem;
}

.fdisPg .head {
    table-layout: fixed;
    height: 3.75rem;
    color: rgba(153, 164, 176, 0.6);
}

.fdisPg .head td {
    text-align: center;
}

table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}

.fdisPg .head td:first-of-type {
    text-align: left;
}

.fdisPg .user {
    max-width: 8.75rem;
}

.fdisPg td {
    padding: 0px 0.375rem;
    height: 3rem;
}

.fdisPg .escape {
    width: 5.625rem;
}

.fdisPg .head td:last-of-type {
    text-align: right;
}

.fdisPg td {
    padding: 0px 0.375rem;
    height: 3rem;
}

.fdisPg .scroll-wrap {
    flex: 1 1 auto;
    position: relative;
}

.fdisPg.need-scroll .table {
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

.fdisPg .user {
    max-width: 8.75rem;
}

.iUeetX td {
    border: 1px solid transparent;
    color: rgb(153, 164, 176);
}

.fdisPg .escape {
    width: 5.625rem;
}

.fdisPg .opacity {
    opacity: 0.5;
}

.erPQzq {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
}

.table .sc-Galmp {
    font-family: Monmono;
}

.fdisPg .coin .coin-icon {
    width: 1.2em;
    height: 1.2em;
}

.erPQzq .coin-icon {
    width: 1.4em;
    height: 1.4em;
    margin-right: 0.25em;
}

.fdisPg .coin .amount {
    color: rgb(245, 246, 247);
    font-weight: bold;
}

.erPQzq .amount-str {
    width: 7em;
    display: inline-block;
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

.fdisPg .opacity {
    opacity: 0.5;
}

.iTDswZ {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
}

.iTDswZ.user-info {
    color: rgb(245, 246, 247);
    font-weight: bold;
}

.iTDswZ .avatar {
    width: 1.62em;
    height: 1.62em;
    border-radius: 50%;
    margin-right: 0.5em;
}

.iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
}

/* .iTDswZ.user-info .hidden-name {
    color: rgb(153, 164, 176);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
} */

.fdisPg .foot {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 1rem 0.4375rem;
    position: relative;
    z-index: 11;
}
.hRMjrF.open .dot {
    left: 0.75rem;
    background-color: rgb(67, 179, 9);
}
.fdisPg .state::before {
    content: "";
    display: inline-block;
    background-color: rgb(67, 179, 9);
    width: 0.4375rem;
    height: 0.4375rem;
    border-radius: 0.25rem;
    margin-right: 0.4375rem;
}

.fdisPg .list-toggle {
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

.fdisPg .list-toggle>div {
    flex: 1 1 0%;
}
</style>
