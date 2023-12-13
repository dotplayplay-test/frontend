<script>

import Icon from 'svelte-icons-pack/Icon.svelte';
import { createEventDispatcher } from 'svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import HiOutlineRefresh from "svelte-icons-pack/hi/HiOutlineRefresh";
const dispatch = createEventDispatcher()
  const handleCandle = (()=>{
    dispatch("close", 5)
})

</script>

<div class="sc-dJjYzT JLcsN dragpop " style="transform: translate3d(446.185px, 88.8333px, 0px);">
    <div class="dragpop-title">Live Stats</div>
    <button on:click={()=> handleCandle()}  class="dragpop-close hover">
        <Icon src={IoCloseSharp}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
    </button>
    <div class="dragpop-content">
        <div class="sc-dkPtRN jScFby scroll-view sc-eBTqsU eLzuEc">
            <div class="sc-Dtwra kAEDVr">
                <div class="trigger flex-center m-item fold">
                    <div class="current">Bet</div>
                    <Icon src={RiSystemArrowRightSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
                </div>
            </div>
            <div class="sc-bgtQTB kACabd m-item">
                <div class="title flex-center">
                    <span>Bet</span>
                    <button class="title-btn">
                        <Icon src={HiOutlineRefresh}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
                    </button>
                </div>
                <div class="chart-cont">
                    <div class="item-wrap wagered">
                        <div class="item-label">Wagered</div>
                        <div class="sc-Galmp erPQzq coin notranslate">
                            <img class="coin-icon" alt="" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png">
                            <div class="amount">
                                <span class="amount-str">0.<span class="suffix">00000000</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="item-wrap profit">
                    <div class="item-label">Profit</div>
                    <div class="sc-Galmp erPQzq coin notranslate cl-success">
                        <img class="coin-icon" alt="" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png">
                        <div class="amount">
                            <span class="amount-str">0.<span class="suffix">00000000</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="chart-wrap">
            <div class="VictoryContainer" style="height: 100%; width: 100%; pointer-events: none; touch-action: none; position: relative;">
                <svg width="450" height="300" role="img" viewBox="0 0 450 300" style="pointer-events: all; width: 100%; height: 100%;">
                    <g clip-path="url(#victory-clip-14)" style="height: 100%; width: 100%;"><defs>
                        <clipPath id="victory-clip-14">
                            <rect x="0" y="0" width="100%" height="300"></rect>
                        </clipPath>
                    </defs>
                    <g>
                        <path role="presentation" shape-rendering="auto" style="fill: rgb(93, 160, 0); stroke: none; stroke-width: 5; fill-opacity: 0.7; stroke-linecap: round; width: 2px;"></path>
                        <path role="presentation" shape-rendering="auto" style="fill: none; stroke: rgb(93, 160, 0); stroke-width: 5; fill-opacity: 0.7; stroke-linecap: round; width: 2px;"></path>
                    </g>
                </g>
                <g clip-path="url(#victory-clip-15)" style="height: 100%; width: 100%;">
                    <defs>
                        <clipPath id="victory-clip-15">
                            <rect x="0" y="300" width="100%" height="100%"></rect>
                        </clipPath>
                    </defs>
                    <g>
                        <path role="presentation" shape-rendering="auto" style="fill: rgb(237, 99, 0); stroke: none; stroke-width: 5; fill-opacity: 0.7; stroke-linecap: round; width: 2px;"></path>
                        <path role="presentation" shape-rendering="auto" style="fill: none; stroke: rgb(237, 99, 0); stroke-width: 5; fill-opacity: 0.7; stroke-linecap: round; width: 2px;"></path>
                    </g>
                </g>
            </svg>
            <div style="z-index: 99; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;">
                <svg width="450" height="300" viewBox="0 0 450 300" style="overflow: visible; width: 100%; height: 100%;"></svg>
            </div>
        </div>
    </div>
    <div class="bet-wrap">
        <div class="bet-item win">
            <span class="txt ttc">win</span>
            <span class="num false">0</span>
        </div>
        <div class="bet-item lose">
            <span class="txt ttc">lose</span>
            <span class="num false">0</span>
        </div>
    </div>
</div>
        </div>
    </div>
</div>

<style>
.JLcsN {
    position: fixed;
    z-index: 110;
    left: 0px;
    top: 0px;
    min-width: 12.5rem;
    min-height: 12.5rem;
    border-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0.25rem 0.5rem 0px;
}
.JLcsN .dragpop-title {
    flex: 1 1 0%;
    height: 3.125rem;
    line-height: 3.125rem;
    font-weight: bold;
    font-size: 1rem;
    color: rgb(245, 246, 247);
    text-align: center;
    touch-action: none;
    user-select: none;
    cursor: grab;
}
.JLcsN .dragpop-close {
    position: absolute;
    right: 0px;
    top: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3.125rem;
    height: 3.125rem;
}
.eLzuEc {
    font-size: 0.75rem;
    min-width: 300px;
    max-height: 70vh;
    margin-bottom: 1.125rem;
}
.eLzuEc {
    font-size: 0.75rem;
    min-width: 300px;
    max-height: 70vh;
    margin-bottom: 1.125rem;
}
.kAEDVr {
    position: relative;
}
.kAEDVr .trigger {
    height: 2.5rem;
    -webkit-box-pack: justify;
    justify-content: space-between;
    color: rgb(245, 246, 247);
    cursor: pointer;
}
.eLzuEc .m-item {
    border-radius: 1.25rem;
    background: rgb(30, 32, 36);
    margin: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}
.eLzuEc .m-item > .title {
    height: 2.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-weight: 600;
    color: rgb(245, 246, 247);
}
.kACabd > .title {
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.kACabd .title-btn {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: -0.625rem;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
}
.kACabd .chart-cont {
    display: flex;
}
.kACabd .chart-cont .item-wrap.wagered {
    flex: 1 1 0%;
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
.kACabd .chart-cont .item-wrap .coin-icon {
    width: 0.875rem;
    height: 0.875rem;
    margin-right: 0.3125rem;
}
.kACabd .chart-cont .item-wrap.wagered .amount {
    color: rgb(245, 246, 247);
}
.erPQzq .amount-str {
    width: 7em;
    display: inline-block;
}
.kACabd .chart-cont .item-wrap .cl-require .amount {
    color: rgb(237, 99, 0);
}
.kACabd .chart-cont .item-wrap.profit .amount {
    color: rgb(67, 179, 9);
}
.kACabd .chart-cont .item-wrap .amount {
    font-weight: 600;
}
.erPQzq .suffix {
    opacity: 0.5;
}
.erPQzq .amount-str {
    width: 7em;
    display: inline-block;
}
.erPQzq .suffix {
    opacity: 0.5;
}
.kACabd .chart-wrap {
    position: relative;
    width: 16.25rem;
    height: 10.9375rem;
}
.kACabd .bet-wrap {
    display: flex;
}
.kACabd .bet-wrap .win {
    flex: 1 1 0%;
}
.kACabd .bet-wrap .bet-item {
    display: flex;
}
.kACabd .bet-wrap .win .num {
    color: rgb(67, 179, 9);
}
.kACabd .bet-wrap .num {
    margin-left: 0.75rem;
    font-weight: 600;
}
.kACabd .bet-wrap .bet-item {
    display: flex;
}
.kACabd .bet-wrap .lose .num {
    color: rgb(237, 99, 0);
}
.kACabd .bet-wrap .num {
    margin-left: 0.75rem;
    font-weight: 600;
}
.kACabd {
    width: 260px;
    height: 301.6px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    box-sizing: content-box;
    color: rgba(153, 164, 176, 0.6);
    padding-bottom: 1.25rem;
}
</style>