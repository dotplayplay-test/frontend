<script>
import { handleBills } from "./hook/bill"
import {onMount} from "svelte"
import {billLoad, billStore} from "./store/index"
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";

onMount(async()=>{
    let sd = await handleBills()
    billStore.set(sd)
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

let newItem;
 $: {
    // $crash_historyEl.sort((a, b) => b._id - a._id);
    newItem =  [...$billStore].reverse()
}


</script>

<div class="right-info">
    {#if $billLoad}
    <div class="jkhj">
        <div class="center">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
    </div>
    {:else}
    {#if $billStore.length > 0}
    <div class="transaction-list">
        <table class="ui-table s1ultrss">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Time</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                {#each newItem.slice(0, 10) as rcas}
                <tr>
                    <td class="cl-light align-center">
                        <div class="change-type-game-detail">
                            <span class="ttu">{rcas.status ? "Win" : "Bet"}</span>
                            <span class="sub-txt"> (Classic Dice) <div class="game-detail-icon">
                            </div>
                        </span>
                    </div>
                    <div class="game-id">Game ID: ({rcas.bill_id})
                        <!-- <svg class="s1ff97qc icon">
                            <use xlink:href="/assets/symbol-defs.ef6a79c4.svg#icon_Copy"></use>
                        </svg> -->
                    </div>
                </td>
                <td class={` ${rcas.status ? "cl-green" : "cl-red"} amount-change`}>
                    <div class="cy2znlo coin notranslate has-sign">
                        {#if rcas.status}
                           <div class="amount amount-str">{rcas.status ? `+${(parseFloat(rcas.trx_amount)).toFixed(4)}` : ""}</div>
                           {:else}
                           <div class="amount amount-str">{rcas.status ? `` : `-${(parseFloat(rcas.trx_amount)).toFixed(4)}`}</div>
                        {/if}
                        <img class="coin-icon" alt="" src={rcas.token_img}>
                    </div>
                </td>
                <td>{new Date(rcas.datetime).getFullYear()}/{new Date(rcas.datetime).getMonth()}/{new Date(rcas.datetime).getDate()} {formatTime(rcas.datetime)}</td>
                <td class="cl-light">
                    <div class="cy2znlo coin notranslate">
                        <div class="amount amount-str"> {rcas.balance}</div>
                        <img class="coin-icon" alt="" src={rcas.token_img}>
                    </div>
                </td>
            </tr>
        {/each}
            </tbody>
        </table>
        <div class="ui-pagination m-fixbot">
            <div class="ui-select">
                <div class="select-trigger">10<div class="arrow top">
                    <Icon src={RiSystemArrowRightSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
                </div>
            </div>
        </div>
        <div class="total">Total 1</div>
        <div class="pages-box pages-wrap">
            <button class="active" disabled="">1</button>
        </div><div class="pages-box page-pn pageConic">
            <button disabled="" class="disabled previous-btn">
                <!-- <svg class="s1ff97qc icon prev">
                    <use xlink:href="/assets/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                </svg> -->
            </button>
            <button disabled="" class="disabled next-page">
                <!-- <svg class="s1ff97qc icon next">
                    <use xlink:href="/assets/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                </svg> -->
            </button>
        </div>
    </div>
    </div>
    {:else}
    <div class="transaction-list">
        <div class="sc-lhMiDA">
            <div class="sc-eCImPb cuPxwd  full-abs">
                <img src="https://static.nanogames.io/assets/empty.acd1f5fe.png" alt="">
                <div class="msg">No data yet! </div>
            </div>
        </div>
    </div>
    {/if}

    {/if}
</div>


<style>
.ui-pagination {
    padding: 0.5rem 1.5rem;
    background: #1C1E22;
}
.jkhj{
    height: 100px;
}
.jkhj .center{
    height: 200px;
}
.ui-pagination .ui-select {
    width: 6em;
    height: 2rem;
}
.ui-select {
    position: relative;
    height: 2.5rem;
}
.s1ultrss .cl-red .amount-str {
    color: rgb(237, 99, 0);
    font-weight: 600;
}
.ui-select .select-trigger {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
    height: 100%;
    cursor: pointer;
    padding: 0 1.25rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-radius: var(--border-radius);
    background-color: #17181b;
}
.ui-pagination {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.ui-select .select-trigger .arrow {
    width: 2.5rem;
    height: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
}
.ui-pagination .total {
    height: 2rem;
    line-height: 2rem;
    margin: 0 0.5rem 0 24px;
    font-size: .75rem;
    color: rgba(153,164,176,.6);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.ui-pagination .pages-wrap {
    background-color: rgba(24,25,29,.6);
    padding: 0 1.125rem;
}
.transaction-list {
    background-color: #31343c;
    border-radius: var(--border-radius);
}
.transaction-list {
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}
table {
    padding: 0.75rem;
}
.ui-table {
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0;
}
thead {
    background: #25272C;
}
.ui-table th:first-child, .ui-table td:first-child {
    text-align: left;
}
.s1ultrss thead th {
    padding: 0.5rem;
}
.ui-table th, .ui-table td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.5rem;
}
.ui-table th {
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.ui-table th, .ui-table td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.5rem;
    font-size: 14px;
}
.ui-table th {
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.ui-table th:last-child, .ui-table td:last-child {
    text-align: right;
}
.s1ultrss thead th {
    padding: 0.5rem;
}
.ui-table td:first-child {
    border-radius: var(--border-radius) 0 0 var(--border-radius);
}
.ui-table th:first-child, .ui-table td:first-child {
    text-align: left;
}
.s1ultrss .cl-light {
    color: #fff;
}
.s1ultrss tbody tr td {
    border-bottom: 1px solid #3C404A;
}
.s1ultrss .change-type-game-detail .sub-txt {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.s1ultrss .sub-txt {
    opacity: .7;
    font-size: .625rem;
}
.s1ultrss .game-id {
    color: #656E78;
    font-size: .625rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    white-space: nowrap;
}
.s1ultrss .amount-change {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--text-color);
}
.s1ultrss tbody tr td {
    border-bottom: 1px solid #3C404A;
}
.s1ultrss .amount-change .coin {
    margin-right: 0.1875rem;
}
.cy2znlo.has-sign {
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}
.cy2znlo {
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    vertical-align: middle;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    white-space: nowrap;
}
.s1ultrss .cl-green .amount-str {
    color: var(--primary-color);
    font-weight: 600;
}
.cy2znlo .amount-str {
    max-width: 10em;
    text-align: right;
}
.cy2znlo .coin-icon {
    width: 1.4em;
    height: 1.4em;
    margin-left: 0.2em;
}
.change-type-game-detail {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
</style>