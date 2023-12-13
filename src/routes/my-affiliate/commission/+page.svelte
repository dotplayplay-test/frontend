<script>
import {
    affiliate_info
} from "$lib/pages/affiliate/main/store/index";

</script>

<div class="sc-jrQzAO eIqOBt">
    <div class="commissions-wrap">
        <div class="commission-top">
            <div class="commission-box box1">
                <p class="lebel-p">Total Commission Rewards Received (Approx.)</p>
                <p class="word-p">
                    <span>{$affiliate_info.total_commission_reward}</span>
                    <span>USD</span>
                </p>
            </div>
            <div class="commission-box box3">
                <i class="icon-History"></i>
                <span>History</span>
            </div>
        </div>

        <div class="commission-bottom">
            <div class="ant-table-wrapper">
                <div class="ant-spin-nested-loading">
                    <div class="ant-spin-container">
                        <div class="ant-table ant-table-empty">
                            <div class="ant-table-container">
                                <div class="ant-table-content">
                                    <table style="table-layout: auto;">
                                        <colgroup></colgroup>
                                        <thead class="ant-table-thead"><tr>
                                            <th colspan="2" class="ant-table-cell">Total Commission Rewards</th>
                                            <th colspan="2" class="ant-table-cell">Commission Rewards Available</th>
                                        </tr>
                                        </thead>
                                        <tbody class="ant-table-tbody">
                                            <tr class="ant-table-placeholder">
                                                <td colspan="4" class="ant-table-cell">
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
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="withdraw">
                <p>All Cryptos One-click</p><p>Away to Your PPD Wallet</p>
                <button disabled={$affiliate_info.total_commission_reward === 0} class={$affiliate_info.total_commission_reward === 0 && `disable-btn`}>WITHDRAW</button>
            </div>
        </div>
    </div>
</div>

<style>
.eIqOBt .commissions-wrap {
    margin: 20px 30px;
}

.eIqOBt .commissions-wrap .commission-top {
    background-color: rgb(255, 255, 255);
    height: 120px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border: 0.58px solid rgb(234, 234, 234);
}

.eIqOBt .commissions-wrap .commission-top .box1 {
    margin: 0px 0px 0px 20px;
    width: 45%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;
}

.eIqOBt .commissions-wrap .commission-top .box1 .lebel-p {
    font-size: 16px;
    letter-spacing: -0.54px;
    margin-bottom: 0px;
    margin-top: 12px;
    font-weight: bold;
}

.eIqOBt .commissions-wrap .commission-top .box1 .lebel-p::after {
    content: ":";
    display: inline-block;
}

.eIqOBt .commissions-wrap .commission-top .box1 .word-p {
    margin-bottom: 0px;
}

.eIqOBt .commissions-wrap .commission-top .box1 .word-p>span:first-child {
    margin-left: 4px;
    font-size: 38px;
    color: rgb(255, 181, 31);
    font-weight: bold;
    letter-spacing: -2px;
}

.eIqOBt .commissions-wrap .commission-top .box1 .word-p>span:last-child {
    font-weight: bold;
    font-size: 26px;
    letter-spacing: -1px;
    color: rgb(255, 181, 31);
}

.eIqOBt .commissions-wrap .commission-top .box3 {
    margin-left: auto;
    margin-right: 50px;
    display: flex;
    cursor: pointer;
    -webkit-box-align: center;
    align-items: center;
    font-size: 14px;
}

.eIqOBt .commissions-wrap .commission-top .box3 .icon-History {
    margin-right: 5px;
    color: rgb(39, 54, 66);
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

.eIqOBt .commissions-wrap .commission-top .box3>span {
   font-weight: bold;
    font-size: 14px;
    color: rgb(39, 54, 66);
    letter-spacing: -0.48px;
    text-align: center;
    font-weight: bold;
}

.eIqOBt .commissions-wrap .commission-top .box3 .icon-History::before {
    font-size: 16px;
}

.icon-History:before {
    content: "\e911";
}

.eIqOBt .commissions-wrap .commission-top .box3 .icon-History {
    margin-right: 5px;
    color: rgb(39, 54, 66);
}
.eIqOBt .commissions-wrap .commission-bottom {
    background-color: rgb(255, 255, 255);
    margin-top: 24px;
    padding: 40px 20px;
    border: 0.58px solid rgb(234, 234, 234);
    display: flex;
}
.eIqOBt .commissions-wrap .commission-bottom .ant-table-wrapper {
    width: 35%;
    min-width: 300px;
    min-height: 500px;
    background: rgb(247, 247, 250);
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
    color: rgba(0,0,0,.85);
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: "tnum","tnum";
    position: relative;
    font-size: 14px;
    background: #fff;
    border-radius: 2px;
}
.ant-table-container, .ant-table-container table>thead>tr:first-child th:first-child {
    border-top-left-radius: 2px;
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
.ant-table .ant-table-container:after, .ant-table .ant-table-container:before {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    width: 30px;
    transition: box-shadow .3s;
    content: "";
    pointer-events: none;
}
.eIqOBt .commissions-wrap .commission-bottom .ant-table-wrapper .ant-table-empty table {
    min-height: 500px;
}
.ant-table table {
    width: 100%;
    text-align: left;
    border-radius: 2px 2px 0 0;
    border-collapse: separate;
    border-spacing: 0;
}
.ant-table-thead>tr:first-child>th:first-child, .ant-table-thead>tr:first-child>th:last-child {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
}
.eIqOBt .commissions-wrap .commission-bottom .ant-table-wrapper .ant-table-content thead > tr > th {
    text-align: center;
}
.ant-table-container, .ant-table-container table>thead>tr:first-child th:first-child {
    border-top-left-radius: 2px;
}
.ant-table-wrapper .ant-table .ant-table-thead tr>th {
    font-size: 12px;
    background: #1e2024;
    color: #fff;
    letter-spacing: -.39px;
}
.ant-table-tbody>tr>td, .ant-table-thead>tr>th {
    padding: 10px 16px;
    height: 40px;
}.ant-table-thead>tr>th {
    position: relative;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    text-align: left;
    background: #fafafa;
    border-bottom: 1px solid #f0f0f0;
    transition: background .3s ease;
}
.ant-table-tbody>tr>td, .ant-table-thead>tr>th {
    position: relative;
    padding: 16px;
    overflow-wrap: break-word;
}
.eIqOBt .commissions-wrap .commission-bottom .ant-table-wrapper .ant-table-content thead > tr > th {
    text-align: center;
}
.ant-table-container table>thead>tr:first-child th:last-child {
    border-top-right-radius: 2px;
}
.ant-table-wrapper .ant-table .ant-table-tbody {
    background-color: #f7f8fa;
}
.ant-table-empty .ant-table-tbody>tr.ant-table-placeholder {
    color: rgba(0,0,0,.25);
}
.ant-table-tbody>tr.ant-table-placeholder {
    text-align: center;
}
.eIqOBt .commissions-wrap .commission-bottom .ant-table-wrapper .ant-table-content tbody > tr > td:first-child {
    text-align: right;
    padding-right: 0px;
}
.ant-empty-normal {
    margin: 32px 0;
    color: rgba(0,0,0,.25);
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
.ant-empty-image svg {
    height: 100%;
    margin: auto;
}

.ant-table .ant-table-container:after {
    right: 0;
}
.ant-table .ant-table-container:after, .ant-table .ant-table-container:before {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    width: 30px;
    transition: box-shadow .3s;
    content: "";
    pointer-events: none;
}
.eIqOBt .commissions-wrap .commission-bottom .withdraw {
    width: 35%;
    min-width: 300px;
    text-align: center;
    height: 500px;
    background-color: rgb(247, 247, 250);
    flex-direction: column;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-left: 30px;
    border-radius: 2px;
}
.eIqOBt .commissions-wrap .commission-bottom .withdraw p {
    font-size: 27px;
    color: rgb(54, 67, 76);
   font-weight: 900;
    letter-spacing: -1px;
    line-height: 36px;
    margin-bottom: 0px;
}
p {
    margin-top: 0;
    margin-bottom: 1em;
}
.eIqOBt .commissions-wrap .commission-bottom .withdraw p {
    font-size: 27px;
    color: rgb(54, 67, 76);
    font-weight: 900;
    letter-spacing: -1px;
    line-height: 36px;
    margin-bottom: 0px;
}
p {
    margin-top: 0;
    margin-bottom: 1em;
}
.eIqOBt .commissions-wrap .commission-bottom .withdraw button.disable-btn {
    background-image: none;
    background-color: rgb(148, 148, 164);
    cursor: not-allowed;
}
.eIqOBt .commissions-wrap .commission-bottom .withdraw button.disable-btn {
    background-image: none;
    background-color: rgb(148, 148, 164);
    cursor: not-allowed;
}

.eIqOBt .commissions-wrap .commission-bottom .withdraw button {
    width: 229px;
    height: 49px;
    margin-top: 32px;
    background-image: linear-gradient(237deg, rgb(255, 231, 81) 0%, rgb(237, 167, 35) 100%);
    border-radius: 5.62px;
    font-size: 20.24px;
    color: rgb(255, 255, 255);
    letter-spacing: 0px;
}


</style>
