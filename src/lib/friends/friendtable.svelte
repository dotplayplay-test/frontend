<script>
import { is_loading, affiliate_list } from "$lib/pages/affiliate/main/store/index";


</script>

<div class="sc-gsDKAQ eKuxOW">
    <div class="ant-table-wrapper">
        <div class="ant-spin-nested-loading">
            <div class="ant-spin-container">
                <div class="ant-table ant-table-empty">
                    <div class="ant-table-container">
                        <div class="ant-table-content">
                            <table style="table-layout: auto;">
                                <colgroup></colgroup>
                                <thead class="ant-table-thead"><tr>
                                    <th class="ant-table-cell">Username</th>
                                    <th class="ant-table-cell ant-table-column-has-sorters">
                                        <div class="ant-table-column-sorters"><span class="ant-table-column-title">Total wager($)</span>
                                            <span class="ant-table-column-sorter ant-table-column-sorter-full">
                                                <span class="ant-table-column-sorter-inner">
                                                    <span role="img" aria-label="caret-up" class="anticon anticon-caret-up ant-table-column-sorter-up">
                                                        <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                            <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
                                                        </svg>
                                                    </span>
                                                    <span role="img" aria-label="caret-down" class="anticon anticon-caret-down ant-table-column-sorter-down">
                                                        <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                            <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th class="ant-table-cell ant-table-column-has-sorters">
                                        <div class="ant-table-column-sorters">
                                            <span class="ant-table-column-title">Total Commisions Rewards($)</span>
                                            <span class="ant-table-column-sorter ant-table-column-sorter-full">
                                                <span class="ant-table-column-sorter-inner">
                                                    <span role="img" aria-label="caret-up" class="anticon anticon-caret-up ant-table-column-sorter-up">
                                                        <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                            <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
                                                        </svg>
                                                    </span>
                                                    <span role="img" aria-label="caret-down" class="anticon anticon-caret-down ant-table-column-sorter-down">
                                                        <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                            <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th class="ant-table-cell ant-table-column-has-sorters">
                                        <div class="ant-table-column-sorters">
                                            <span class="ant-table-column-title">Registration Date</span>
                                            <span class="ant-table-column-sorter ant-table-column-sorter-full">
                                                <span class="ant-table-column-sorter-inner">
                                                    <span role="img" aria-label="caret-up" class="anticon anticon-caret-up ant-table-column-sorter-up">
                                                        <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                            <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
                                                        </svg>
                                                    </span>
                                                    <span role="img" aria-label="caret-down" class="anticon anticon-caret-down ant-table-column-sorter-down">
                                                        <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                            <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th class="ant-table-cell">Code</th>
                                    <th class="ant-table-cell">Status</th>
                                    <th class="ant-table-cell">Tip</th>
                                    <th class="ant-table-cell">Chat</th>
                                </tr>
                                </thead>
                                <tbody class="ant-table-tbody">
                                    {#if $is_loading}
                                    <tr class="ant-table-placeholder">
                                        <td colspan="8" class="ant-table-cell">
                                            <div class="ant-empty ant-empty-normal">
                                                <div class="ant-empty-image">
                                                    <svg class="ant-empty-img-simple" width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
                                                        <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
                                                            <ellipse class="ant-empty-img-simple-ellipse" cx="32" cy="33" rx="32" ry="7"></ellipse>
                                                            <g class="ant-empty-img-simple-g" fill-rule="nonzero">
                                                                <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
                                                                <path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" class="ant-empty-img-simple-path"></path>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div class="ant-empty-description">No Data</div>
                                            </div>
                                        </td>
                                    </tr>
                                    {:else}
                                    {#if $affiliate_list.length !== 0}
                                    {#each $affiliate_list as friend}
                                    <tr class="ant-table-row ant-table-row-level-0">
                                        <td class="ant-table-cell">{friend.username}</td>
                                        <td class="ant-table-cell">{friend.total_wagered}</td>
                                        <td class="ant-table-cell">{friend.total_wagered}</td>
                                        <td class="ant-table-cell">{(new Date(friend.joined_at)).getFullYear()}-{(new Date(friend.joined_at)).getMonth()}-{(new Date(friend.joined_at)).getDate()} {(new Date(friend.joined_at)).getHours()}: {(new Date(friend.joined_at)).getMinutes()}:{(new Date(friend.joined_at)).getSeconds()}</td>
                                        <td class="ant-table-cell">{friend.invited_code}</td>
                                        <td class="ant-table-cell">
                                            <span>{friend.account_type}</span>
                                        </td>
                                        <td class="ant-table-cell">
                                            <div class="sc-dkPtRN lcfezC">
                                                <button class="sc-jRQBWg iBRkrO">
                                                    <i class="sc-bdvvtL jOqoQl icon-Tip"></i>
                                                    <span style="margin-left: 0.2em;">Tip</span>
                                                </button>
                                            </div>
                                        </td>
                                        <td class="ant-table-cell">
                                            <div class="sc-dkPtRN lcfezC">
                                                <button class="sc-jRQBWg iBRkrO"><i class="icon-Forum"></i>
                                                    <span style="margin-left: 0.2em;">Chat</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    {/each}
                                    {:else}
                                    <tr class="ant-table-placeholder">
                                        <td colspan="8" class="ant-table-cell">
                                            <div class="ant-empty ant-empty-normal">
                                                <div class="ant-empty-image">
                                                    <svg class="ant-empty-img-simple" width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
                                                        <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
                                                            <ellipse class="ant-empty-img-simple-ellipse" cx="32" cy="33" rx="32" ry="7"></ellipse>
                                                            <g class="ant-empty-img-simple-g" fill-rule="nonzero">
                                                                <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
                                                                <path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" class="ant-empty-img-simple-path"></path>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div class="ant-empty-description">No Data</div>
                                            </div>
                                        </td>
                                    </tr>
                                    {/if}
                                    {/if}
                                   
                                  
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.eKuxOW {
    padding: 20px;
    margin: 20px 30px;
    border: 1px solid rgb(234, 234, 234);
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
}

.ant-table-wrapper {
    clear: both;
    max-width: 100%;
}

.ant-table-wrapper:before {
    display: table;
    content: "";
}

.ant-spin-nested-loading {
    position: relative;
}

.ant-table-wrapper:after {
    display: table;
    clear: both;
    content: "";
}

.ant-spin-nested-loading {
    position: relative;
}

.ant-spin-container {
    position: relative;
    transition: opacity .3s;
}

.ant-table-wrapper:after {
    display: table;
    clear: both;
    content: "";
}

.ant-table {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, .85);
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: "tnum", "tnum";
    position: relative;
    font-size: 14px;
    background: #fff;
    border-radius: 2px;
}

.ant-table-container,
.ant-table-container table>thead>tr:first-child th:first-child {
    border-top-left-radius: 2px;
}

.ant-table-container {
    border-top-right-radius: 2px;
}

.ant-table .ant-table-container:before {
    left: 0;
}

.ant-table .ant-table-container:after,
.ant-table .ant-table-container:before {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    width: 30px;
    transition: box-shadow .3s;
    content: "";
    pointer-events: none;
}

.ant-table table {
    width: 100%;
    text-align: left;
    border-radius: 2px 2px 0 0;
    border-collapse: separate;
    border-spacing: 0;
}

.ant-table-container,
.ant-table-container table>thead>tr:first-child th:first-child {
    border-top-left-radius: 2px;
}

.ant-table-thead>tr:first-child>th:first-child,
.ant-table-thead>tr:first-child>th:last-child {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
}

.ant-table-wrapper .ant-table .ant-table-thead tr>th {
    font-weight: bold;
    background: #1e2024;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    letter-spacing: -.39px;
}

.ant-table-tbody>tr>td,
.ant-table-thead>tr>th {
    padding: 10px 16px;
    height: 40px;
}

.ant-table-thead>tr>th {
    position: relative;
    color: rgba(0, 0, 0, .85);
    font-weight: 500;
    text-align: left;
    background: #fafafa;
    border-bottom: 1px solid #f0f0f0;
    transition: background .3s ease;
}

.ant-table-tbody>tr>td,
.ant-table-thead>tr>th {
    position: relative;
    padding: 16px;
    overflow-wrap: break-word;
}

.ant-table-thead>tr>th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan]):before {
    position: absolute;
    top: 50%;
    right: 0;
    width: 1px;
    height: 1.6em;
    background-color: rgba(0, 0, 0, .06);
    transform: translateY(-50%);
    transition: background-color .3s;
    content: "";
}

.ant-table-wrapper .ant-table .ant-table-thead tr>th {
    font-family: Arial, Helvetica, sans-serif;
    background: #1e2024;
    font-weight: bold;
    color: #fff;
    letter-spacing: -.39px;
}

button {
    border: 0;
    outline: none;
}

.jzILhs .ant-table-wrapper .ant-table-content table tbody>tr>td button {
    color: rgb(237, 167, 35);
    font-weight: 900;
}

.iBRkrO {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    min-width: 2em;
    min-height: 2em;
    background-color: transparent;
}

.ant-table-thead th.ant-table-column-has-sorters {
    cursor: pointer;
    transition: all .3s;
}

.ant-table-tbody>tr>td,
.ant-table-thead>tr>th {
    padding: 10px 16px;
    height: 40px;
}

.ant-table-column-sorters {
    display: flex;
    flex: auto;
    align-items: center;
    justify-content: space-between;
}

.ant-table-column-title {
    position: relative;
    z-index: 1;
    flex: 1 1;
}

.ant-table-column-sorter {
    margin-left: 4px;
    color: #bfbfbf;
    font-size: 0;
    transition: color .3s;
}

.ant-table-column-sorter-inner {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
}

.ant-table-column-sorter-down,
.ant-table-column-sorter-up {
    font-size: 11px;
}

.anticon {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.ant-table-column-sorter-up+.ant-table-column-sorter-down {
    margin-top: -0.3em;
}

.ant-table-column-sorter-down,
.ant-table-column-sorter-up {
    font-size: 11px;
}

.anticon {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.ant-table-wrapper .ant-table .ant-table-tbody {
    background-color: #f7f8fa;
}

.ant-table-empty .ant-table-tbody>tr.ant-table-placeholder {
    color: rgba(0, 0, 0, .25);
}

.ant-table-tbody>tr.ant-table-placeholder {
    text-align: center;
}

.ant-table-wrapper .ant-table .ant-table-tbody tr>td {
    color: #6f6f6f;

    letter-spacing: -.39px;
    font-weight: bold;
}

.ant-table-tbody>tr>td {
    border-bottom: 1px solid #e8e8e8;
    transition: all .3s, border 0s;
    background-color: #f7f7fa;
    font-size: 15px;
    color: #000;
    letter-spacing: -.54px;
    text-align: left;
}

.ant-empty-normal {
    margin: 32px 0;
    color: rgba(0, 0, 0, .25);
}

.ant-empty {
    margin: 0 8px;
    font-size: 14px;
    line-height: 1.5715;
    text-align: center;
}

.ant-empty-normal .ant-empty-image {
    height: 40px;
}

.ant-empty-image {
    height: 100px;
    margin-bottom: 8px;
}
</style>
