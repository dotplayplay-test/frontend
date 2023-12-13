<script>
import {
    is_loading,
    affiliate_info,
    affiliate_list,
    affilliate_info
} from "$lib/pages/affiliate/main/store/index";
let close = true
</script>

<div class="usd-rewards rewards-box">
    <div class="gutter-box rewards-top">
        <div class="rewards-info">
            <div class="usdrewards-box box1">
                <p class="label-p">Newly Available</p>
                <p class="word-p">
                    <span>{$affilliate_info.available_usd_reward}</span>
                    <span>USD</span>
                </p>
            </div>
            <div class="usdrewards-box box2">
                <p class="label-p">Received in Total</p>
                <p class="word-p">
                    <span class="num">{$affiliate_info.total_earn_me}</span>
                    <span class="coin">USD</span>
                </p>
                <p class="label-p left">Current friends staying active will unlock you</p>
                <p class="word-p two">
                    <span class="num">{$affiliate_info.total_usd_reward}</span>
                    <span class="coin">USD</span>
                </p>
            </div>
        </div>
        <div class="rewards-btn">
            <button disabled={$affilliate_info.available_usd_reward === 0} class={ $affilliate_info.available_usd_reward === 0 && "disable-btn"}>Withdraw</button>
        </div>
        <div class="rewards-more">
            <div class="history">
                <i class="icon-History"></i>
                <span>History</span>
            </div>
            <div class="rule">
                <i class="icon-Rule"></i>
                <span>Rule</span>
            </div>
        </div>
    </div>
    <div>

        {#if !close}
        <div class="gutter-box" id="rewards-search">
            <div><p>Username</p>
                <span class="ant-input-affix-wrapper">
                    <input placeholder="Please input" type="text" class="ant-input" value="">
                    <span class="ant-input-suffix">
                        <span role="button" aria-label="close-circle" tabindex="-1" class="anticon anticon-close-circle ant-input-clear-icon-hidden ant-input-clear-icon">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>
                            </svg>
                        </span>
                    </span>
                </span>
            </div>
            <div>
                <p>Registration Date</p>
                <div class="sc-egiyK kiLLw">
                    <div class="ant-picker ant-picker-range">
                        <div class="ant-picker-input ant-picker-input-active">
                            <input readonly placeholder="Start Time" size="12" autocomplete="off" value="">
                        </div>
                        <div class="ant-picker-range-separator">
                            <span aria-label="to" class="ant-picker-separator">
                                <span role="img" aria-label="swap-right" class="anticon anticon-swap-right">
                                    <svg viewBox="0 0 1024 1024" focusable="false" data-icon="swap-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                        <path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z"></path>
                                    </svg>
                                </span>
                            </span>
                        </div><div class="ant-picker-input">
                            <input readonly placeholder="End Time" size="12" autocomplete="off" value="">
                        </div>
                        <div class="ant-picker-active-bar" style="left: 0px; width: 102px; position: absolute;"></div>
                        <span class="ant-picker-suffix">
                            <span role="img" aria-label="calendar" class="anticon anticon-calendar">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="calendar" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
                                </svg>
                            </span>
                        </span>
                    </div>
                </div>
                <button type="button" class="ant-btn button">
                    <span>Search</span>
                </button>
            </div>
        </div>
        {/if}

        <div class="gutter-box">
            <div class="ant-table-wrapper">
                <div class="ant-spin-nested-loading">
                    <div class="ant-spin-container">
                        <div class="ant-table ant-table-empty">
                            <div class="ant-table-container">
                                <div class="ant-table-content">
                                    <table style="table-layout: auto;">
                                        <colgroup></colgroup>
                                        <thead class="ant-table-thead">
                                            <tr>
                                                <th class="ant-table-cell">Username</th>
                                                <th class="ant-table-cell">VIP Level</th>
                                                <th class="ant-table-cell">Earned Me</th>
                                                <th class="ant-table-cell">Registration Time</th>
                                            </tr>
                                        </thead>
                                        <tbody class="ant-table-tbody">
                                            {#if $is_loading}
                                            <tr class="ant-table-placeholder">
                                                <td colspan="4" class="ant-table-cell">
                                                    <div class="ant-empty ant-empty-normal">
                                                        <div class="ant-empty-image">
                                                            <svg class="ant-empty-img-simple" width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
                                                                <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
                                                                    <ellipse class="ant-empty-img-simple-ellipse" cx="32" cy="33" rx="32" ry="7"></ellipse>
                                                                    <g class="ant-empty-img-simple-g" fill-rule="nonzero"><path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
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
                                            <tr  class="ant-table-row ant-table-row-level-0">
                                                <td class="ant-table-cell">{friend.username}</td>
                                                <td class="ant-table-cell">
                                                    <div class="table-level">
                                                        <span>V{friend.vip_level}</span>
                                                        <div class="ant-progress ant-progress-line ant-progress-status-normal ant-progress-default">
                                                            <div class="ant-progress-outer">
                                                                <div class="ant-progress-inner">
                                                                    <div class="ant-progress-bg" style={`width: ${friend.vip_progress}%; height: 8px;`}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="ant-table-cell">
                                                    <span class="table-earnusd">{friend.earn_me} USD</span>
                                                </td>
                                                <td class="ant-table-cell">
                                                    <span>{(new Date(friend.joined_at)).getFullYear()}-{(new Date(friend.joined_at)).getMonth()}-{(new Date(friend.joined_at)).getDate()} {(new Date(friend.joined_at)).getHours()}: {(new Date(friend.joined_at)).getMinutes()}:{(new Date(friend.joined_at)).getSeconds()}</span>
                                                </td>
                                            </tr>
                                            {/each}
                                            {:else}
                                            <tr class="ant-table-placeholder">
                                                <td colspan="4" class="ant-table-cell">
                                                    <div class="ant-empty ant-empty-normal">
                                                        <div class="ant-empty-image">
                                                            <svg class="ant-empty-img-simple" width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
                                                                <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
                                                                    <ellipse class="ant-empty-img-simple-ellipse" cx="32" cy="33" rx="32" ry="7"></ellipse>
                                                                    <g class="ant-empty-img-simple-g" fill-rule="nonzero"><path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
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
    </div>
</div>

    <style>
.rewards-box {
    padding: 20px 30px;
}

.rewards-box .rewards-top {
    padding: 0;
    margin: 0;
    height: 120px;
    display: flex;
    justify-content: left;
    align-items: center;
}

.gutter-box {
    padding: 20px 30px;
    box-sizing: border-box;
    border: 0.58px solid #eaeaea;
    border-radius: 2.81px;
    margin-top: 12px;
    margin-left: 16px;
    margin-right: 16px;
    background: #fff;
}

.rewards-box .rewards-top .rewards-info {
    display: flex;
    flex-direction: column;
}

.rewards-box .rewards-top .rewards-info .usdrewards-box.box1 {
    align-items: baseline;
}

.rewards-box .rewards-top .rewards-info .usdrewards-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    letter-spacing: -.54px;
    height: 50px;
    width: 100%;
    padding: 0 20px;
}

.rewards-box .rewards-top .rewards-info .usdrewards-box.box1 .label-p {
    color: #6f6f6f;
    font-size: 15px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}

p {
    margin-top: 0;
    margin-bottom: 1em;
}

.rewards-box .rewards-top .rewards-info .usdrewards-box.box1 .label-p:after {
    content: "：";
    display: inline-block;
}

.rewards-box .rewards-top .rewards-info .usdrewards-box.box1 .word-p>span:first-child {
    font-size: 38px;
    color: #ffb51f;
    letter-spacing: -2px;
    font-weight: bold;
}

.rewards-box .rewards-top .rewards-info .usdrewards-box.box1 .word-p>span:last-child {
    font-size: 25px;
    color: #ffb51f;
    letter-spacing: -1px;
    font-weight: bold;
    margin-left: 5px;
}

.rewards-box .rewards-top .rewards-info .usdrewards-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    letter-spacing: -.54px;
    height: 50px;
    width: 100%;
    padding: 0 20px;
}

.rewards-box .rewards-top .rewards-info .usdrewards-box.box2 .label-p {

    letter-spacing: -1px;
}

.rewards-box .rewards-top .rewards-info .usdrewards-box.box2>p {
    margin-bottom: 1.2rem;
}

.rewards-box .rewards-top .rewards-info .usdrewards-box.box2 .word-p .num {
    font-size: 14px;
    color: #ffb51f;
    margin-left: 10px;
    padding-bottom: 6px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}

.rewards-box .rewards-top .rewards-info .usdrewards-box.box2 .word-p .coin {
    font-size: 14px;
    color: #ffb51f;
    margin-left: 5px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}

.rewards-box .rewards-top .rewards-info .usdrewards-box.box2 .label-p.left {
    margin-left: 20px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}

.rewards-box .rewards-top .rewards-info .usdrewards-box.box2 .label-p {

    letter-spacing: -1px;
}

.rewards-box .rewards-top .rewards-info .usdrewards-box.box2>p {
    margin-bottom: 1.2rem;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}

[class*=btn] {
    cursor: pointer;
}

.rewards-box .rewards-top .rewards-btn button.disable-btn {
    background-image: none;
    background-color: #9494a4;
    cursor: not-allowed;
}

.rewards-box .rewards-top .rewards-btn button {
    height: 42px;
    background-image: linear-gradient(237deg, #ffe751, #eda723);
    border-radius: 5px;
    font-size: 16px;
    color: #fff;
    letter-spacing: 0;
    padding: 4px 20px;
}

.rewards-box .rewards-top .rewards-more {
    margin-right: 40px;
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.rewards-box .rewards-top .rewards-more>div {
    display: flex;
    cursor: pointer;
    font-size: 14px;
    align-items: center;
}

.rewards-box .rewards-top .rewards-more>div i {
    margin-right: 5px;
    color: #273642;
}

[class^=icon-] {
    font-family: icomoon !important;
    font-style: normal;
    font-weight: 400;
    -webkit-font-feature-settings: normal;
    font-feature-settings: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.rewards-box .rewards-top .rewards-more>div span {
    font-size: 14px;
    color: #273642;
    letter-spacing: -.48px;
    text-align: center;
}

.rewards-box .rewards-top .rewards-more .history:after {
    content: "";
    width: 1px;
    height: 12px;
    background: #545454;
    display: inline-block;
    margin-left: 10px;
}

.rewards-box .rewards-top .rewards-more .rule {
    margin-left: 10px;
}

.rewards-box .rewards-top .rewards-more>div {
    display: flex;
    cursor: pointer;
    font-size: 14px;
    align-items: center;
}

.rewards-box .rewards-top .rewards-more>div i {
    margin-right: 5px;
    color: #273642;
}

.rewards-box .rewards-top .rewards-more>div span {
    font-weight: bold;
    font-size: 14px;
    color: #273642;
    letter-spacing: -.48px;
    text-align: center;
}

.rewards-box>div>.gutter-box {
    margin: 20px 0 0;
    padding: 20px;
}

#rewards-search {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;
    margin: 20px 0 0;
    height: 120px;
}

.gutter-box {
    padding: 20px 30px;
    box-sizing: border-box;
    border: 0.58px solid #eaeaea;
    border-radius: 2.81px;
    margin-top: 12px;
    margin-left: 16px;
    margin-right: 16px;
    background: #fff;
}

#rewards-search {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;
    margin: 20px 0 0;
    height: 120px;
}

.rewards-box>div>.gutter-box {
    margin: 20px 0 0;
    padding: 20px;
}

.rewards-box>div>.gutter-box {
    margin: 20px 0 0;
    padding: 20px;
}

.gutter-box {
    padding: 20px 30px;
    box-sizing: border-box;
    border: 0.58px solid #eaeaea;
    border-radius: 2.81px;
    margin-top: 12px;
    margin-left: 16px;
    margin-right: 16px;
    background: #fff;
}

#rewards-search>div:first-child {
    width: 22%;
}

#rewards-search>div {
    width: 80%;
    margin-right: 20px;
}

#rewards-search>div p:first-child {

    color: #36434c;
    letter-spacing: 0;
    margin: 0 0 5px;
}

#rewards-search>div .ant-input-affix-wrapper {
    height: 36px;
}

.ant-input-affix-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all .3s;
    display: inline-flex;
}

.ant-input-affix-wrapper:before {
    width: 0;
    visibility: hidden;
    content: "\a0";
}

.ant-input-affix-wrapper>input.ant-input {
    padding: 0;
    border: none;
    outline: none;
}

.ant-input-suffix {
    margin-left: 4px;
}

.ant-input-suffix {
    display: flex;
    flex: none;
    align-items: center;
}

.anticon.ant-input-clear-icon-hidden {
    visibility: hidden;
}

.anticon.ant-input-clear-icon {
    margin: 0;
    color: rgba(0, 0, 0, .25);

    vertical-align: -1px;
    cursor: pointer;
    transition: color .3s;
}

.anticon svg {
    display: inline-block;
}

#rewards-search>div {
    width: 80%;
    margin-right: 20px;
}

#rewards-search>div p:first-child {

    color: #36434c;
    letter-spacing: 0;
    margin: 0 0 5px;
}

.kiLLw {
    display: inline-block;
    width: 60%;
    max-width: 400px;
}

#rewards-search>div .ant-picker-range {
    height: 36px;
}

.kiLLw .ant-picker-range {
    width: 100%;
}

.ant-picker-input {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 100%;
}

.ant-picker-input>input:placeholder-shown {
    text-overflow: ellipsis;
}

.ant-picker-range-separator {
    align-items: center;
    padding: 0 8px;
    line-height: 1;
}

.ant-picker-separator {
    position: relative;
    display: inline-block;
    width: 1em;
    height: 16px;
    color: rgba(0, 0, 0, .25);
    font-size: 16px;
    vertical-align: top;
    cursor: default;
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

.anticon svg {
    display: inline-block;
}

.ant-picker-input {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 100%;
}

.ant-picker-input>input:placeholder-shown {
    text-overflow: ellipsis;
}

.ant-picker-range .ant-picker-active-bar {
    bottom: -1px;
    height: 2px;
    margin-left: 11px;
    background: #1890ff;
    opacity: 0;
    transition: all .3s ease-out;
    pointer-events: none;
}

.ant-picker-suffix {
    align-self: center;
    margin-left: 4px;
    color: rgba(0, 0, 0, .25);
    line-height: 1;
    pointer-events: none;
}

.ant-picker-suffix>* {
    vertical-align: top;
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

.anticon svg {
    display: inline-block;
}

#rewards-search .button {
    background-image: linear-gradient(237deg, #ffe751, #eda723);
    border-radius: 4px;
    color: #fff;
    font-family: Montserrat-SemiBold;
    font-size: 16px;
    letter-spacing: 0;
    border: 0;
    outline: none;
    margin-left: 20px;
}

#rewards-search>div button {
    height: 36px;
    padding: 4px 20px;
}

[class*=btn] {
    cursor: pointer;
}

.ant-picker-input {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 100%;
}

.ant-picker-input>input:placeholder-shown {
    text-overflow: ellipsis;
}

.ant-picker-range .ant-picker-active-bar {
    bottom: -1px;
    height: 2px;
    margin-left: 11px;
    background: #1890ff;
    opacity: 0;
    transition: all .3s ease-out;
    pointer-events: none;
}

.ant-picker-range .ant-picker-active-bar {
    bottom: -1px;
    height: 2px;
    margin-left: 11px;
    background: #1890ff;
    opacity: 0;
    transition: all .3s ease-out;
    pointer-events: none;
}

.ant-picker-suffix {
    align-self: center;
    margin-left: 4px;
    color: rgba(0, 0, 0, .25);
    line-height: 1;
    pointer-events: none;
}

.anticon svg {
    display: inline-block;
}

.ant-picker-range-separator {
    align-items: center;
    padding: 0 8px;
    line-height: 1;
}

.ant-picker-input {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 100%;
}

.ant-picker-input>input {
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border-radius: 2px;
    transition: all .3s;
    flex: auto;
    min-width: 1px;
    height: auto;
    padding: 0;
    background: transparent;
    border: 0;
}

#rewards-search>div .ant-picker-range {
    height: 36px;
}

.kiLLw .ant-picker-range {
    width: 100%;
}

.ant-picker-range {
    position: relative;
    display: inline-flex;
}

.ant-picker {
    box-sizing: border-box;
    margin: 0;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: "tnum", "tnum";
    padding: 4px 11px;
    position: relative;
    display: inline-flex;
    align-items: center;
    background: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: border .3s, box-shadow .3s;
}

.rewards-box>div>.gutter-box {
    margin: 20px 0 0;
    padding: 20px;
}

.gutter-box {
    padding: 20px 30px;
    box-sizing: border-box;
    border: 0.58px solid #eaeaea;
    border-radius: 2.81px;
    margin-top: 12px;
    margin-left: 16px;
    margin-right: 16px;
    background: #fff;
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

.ant-spin-container {
    position: relative;
    transition: opacity .3s;
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

.ant-spin-container:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: none\9;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: 0;
    transition: all .3s;
    content: "";
    pointer-events: none;
}

.ant-table-container {
    border-top-right-radius: 2px;
}

.ant-spin-container:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: none\9;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: 0;
    transition: all .3s;
    content: "";
    pointer-events: none;
}

.ant-table-container:after,
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

.ant-table table {
    width: 100%;
    text-align: left;
    border-radius: 2px 2px 0 0;
    border-collapse: separate;
    border-spacing: 0;
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

    background: #1e2024;
    color: #fff;
    letter-spacing: -.39px;
}

.ant-table-wrapper .ant-table .ant-table-thead tr>th {

    background: #1e2024;
    color: #fff;
    letter-spacing: -.39px;
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

.ant-table-container table>thead>tr:first-child th:last-child {
    border-top-right-radius: 2px;
}

.ant-table-wrapper .ant-table .ant-table-tbody {
    background-color: #f7f8fa;
}

.ant-table-empty .ant-table-tbody>tr.ant-table-placeholder {
    color: rgba(0, 0, 0, .25);
}

.ant-table-wrapper .ant-table .ant-table-tbody tr>td {
    color: #6f6f6f;

    letter-spacing: -.39px;
    font-weight: bold;

}

.gutter-box .ant-table-tbody>tr>td {
    padding: 4px 16px;
}

.ant-table-tbody>tr>td,
.ant-table-thead>tr>th {
    padding: 10px 16px;
    height: 40px;
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

.ant-spin-container:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: none\9;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: 0;
    transition: all .3s;
    content: "";
    pointer-events: none;
}

.ant-table-wrapper .ant-table .ant-table-tbody tr>td {
    color: #6f6f6f;
    letter-spacing: -.39px;
}

.gutter-box .ant-table-tbody>tr>td {
    padding: 4px 16px;
}

.gutter-box .ant-table-tbody>tr>td {
    padding: 8px 16px;
}

.ant-table-tbody>tr>td,
.ant-table-thead>tr>th {
    padding: 10px 16px;
    height: 40px;
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

.ant-table-wrapper .ant-table .ant-table-tbody tr>td {
    color: #6f6f6f;

    letter-spacing: -.39px;
    font-weight: bold;
}

.gutter-box .ant-table-tbody>tr>td {
    padding: 4px 16px;
}

.ant-table-wrapper .ant-table .ant-table-tbody tr>td {
    color: #6f6f6f;
    letter-spacing: -.39px;
    font-weight: bold;
}

.ant-table-content .table-level>span {
    color: #273642;
    font-weight: 800;
    font-family: Poppins;
}

.ant-table-content .table-level .ant-progress-line {
    width: 80%;
    margin-left: 5px;
}

.ant-progress-line {
    position: relative;
    width: 100%;
    font-size: 14px;
}

.ant-progress {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: "tnum", "tnum";
    display: inline-block;
}

.ant-progress-outer {
    display: inline-block;
    width: 100%;
    margin-right: 0;
    padding-right: 0;
}

.ant-table-content .table-level .ant-progress-line .ant-progress-inner {
    background-color: rgba(68, 84, 96, .3);
}

.ant-progress-inner {
    position: relative;
    display: inline-block;
    width: 100%;
    overflow: hidden;
    vertical-align: middle;
    background-color: #f5f5f5;
    border-radius: 100px;
}

.ant-table-content .table-level .ant-progress-line .ant-progress-inner .ant-progress-bg {
    background-color: #ffbf45;
    background-image: linear-gradient(237deg, #ffe992, #ffbf45);
}

.ant-progress-bg {
    position: relative;
    background-color: #1890ff;
    border-radius: 100px;
    transition: all .4s cubic-bezier(.08, .82, .17, 1) 0s;
}

.ant-table-content .table-earnusd {
    color: #ffb51f;
    font-size: 16px;
    letter-spacing: -.5px;
}
</style>
