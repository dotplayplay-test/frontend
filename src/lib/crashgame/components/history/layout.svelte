<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import { crash_historyEl } from "../../store"
import RiSystemArrowLeftSLine from "svelte-icons-pack/ri/RiSystemArrowLeftSLine";
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
let newItem;
$: {
    // $crash_historyEl.sort((a, b) => b._id - a._id);
    newItem =  [...$crash_historyEl].reverse()
}

</script>

<div class="tabs-view" style="transform: none;">
    <div class="sc-ljMRFG ewHNmT">
        <div class="sc-iwjdpV ikWSlH radio history-tab">
            <button class="is-active">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                    <use xlink:href="#icon_Statistics"></use>
                </svg>
            </button>
            <button class="">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                    <use xlink:href="#icon_Data"></use>
                </svg>
            </button>
        </div>
        <div class="sc-gFSQbh iovqrr">
            <table class="sc-gWXbKe iUeetX table is-hover">
                <thead>
                    <tr>
                        <th style="width: 24%;">Game ID</th>
                        <th style="width: 20%;">Result</th>
                        <th>Hash</th>
                    </tr>
                </thead>
                <tbody>
                    {#each newItem.slice(0, 20) as history}
                    <tr>
                        <td>
                            <div class="game-link">
                                <div class={`dot ${parseFloat(history.crash_point) > 2 ? "type-2" : "type-1" } `}></div>
                                {history.game_id}
                            </div>
                        </td>
                        <td>{(parseFloat(history.crash_point)).toFixed(2)}x</td>
                        <td>
                            <div class="flex-center">
                                <input type="text" readonly value={history.hash}>
                                <a target="_blank" href={`https://dppgames.netlify.app/verify/crash?hash=${history.hash}`}>
                                    Verify
                                </a>
                            </div>
                        </td>
                    </tr>
                    {/each}
                </tbody>
            </table>
            <div class="sc-cCcXHH dXTFyi pagination ">
                <div class="sc-cidDSM dmcoXZ">Total {$crash_historyEl.length}</div>
                <div class="sc-jcFjpl sc-iAKWXU dORpLZ bnBwbM pages-wrap">
                    <button class="active" disabled="">1</button>
                    <button class="">2</button>
                    <button class="">3</button>
                </div>
                <div class="sc-jcFjpl sc-iAKWXU dORpLZ bnBwbM page-pn">
                    <button disabled="" class="disabled previous-btn">
                        <Icon src={RiSystemArrowLeftSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
                    </button>
                    <button class="next-page">
                        <Icon src={RiSystemArrowRightSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<style>

@media only screen and (max-width: 650px){
.table{
    font-size: 13px;
}
}

.tabs-view {
    background-color: rgb(30, 32, 36);
    border-radius: 1.25rem;
    padding: 1px 0px;
}
.tabs-view {
    position: relative;
}
.ewHNmT {
    position: relative;
    overflow: hidden;
}
.ewHNmT .history-tab {
    height: 3.5rem;
    border-bottom: 1px solid rgba(49, 52, 60, 0.6);
    padding: 0px 1.25rem;
}
.ikWSlH {
    display: flex;
    opacity: 1;
}
.iovqrr {
    max-width: 50rem;
    margin: 0px auto 1.25rem;
    padding: 0.5rem;
}
.iovqrr table {
    margin: 1.25rem auto;
}
.iUeetX {
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0px;
}
table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
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
    font-weight: normal;
    color: rgba(153, 164, 176, 0.6);
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
.iUeetX th:last-child, .iUeetX td:last-child {
    text-align: right;
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
.iUeetX td:first-child {
    border-radius: 0.625rem 0px 0px 0.625rem;
}
.iUeetX th:first-child, .iUeetX td:first-child {
    text-align: left;
}
.iUeetX td {
    border: 1px solid transparent;
    color: rgb(153, 164, 176);
}
.iUeetX th, .iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
}
.iovqrr .game-link {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
}
.iovqrr .dot.type-2 {
    background-color: rgb(67, 179, 9);
}
.iovqrr .dot.type-1 {
    background-color: rgb(237, 99, 0);
}
.iovqrr .dot {
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 50%;
    margin-right: 0.375rem;
}
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.iovqrr input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-right: 0.3125rem;
    flex: 1 1 0%;
}
.dXTFyi {
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
}
.dmcoXZ {
    height: 2rem;
    line-height: 2rem;
    margin: 0px 0.5rem 0px 24px;
    font-size: 0.75rem;
    color: rgba(153, 164, 176, 0.6);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.dORpLZ.pages-wrap {
    background-color: rgba(24, 25, 29, 0.6);
    padding: 0px 1.125rem;
}
.dORpLZ.pages-wrap {
    background-color: rgba(24, 25, 29, 0.6);
    padding: 0px 1.125rem;
}
.dORpLZ.pages-wrap .active {
    color: rgb(245, 246, 247);
    font-weight: 600;
}
.ewHNmT .pagination button {
    background-color: rgba(45, 48, 53, 0.6);
}
.dORpLZ.pages-wrap button {
    font-size: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.75rem;
    margin: 0px;
}
.dORpLZ.pages-wrap button {
    font-size: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.75rem;
    margin: 0px;
}
.dORpLZ.page-pn {
    margin-left: 0.75rem;
}
.dORpLZ {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 2rem;
    border-radius: 2rem;
    overflow: hidden;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
}
.bnBwbM.page-pn button.disabled {
    background-color: rgb(30, 32, 36);
}
.dORpLZ.page-pn button {
    width: 2.125rem;
    height: 2rem;
    margin: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
</style>
