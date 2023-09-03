<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import BsQuestionCircleFill from "svelte-icons-pack/bs/BsQuestionCircleFill";
</script>

<div class="sc-eZKLwX jJQdnO label">
    <div class="title-rate">Annual Percentage Rate
        <span>5%</span>
    </div>
    <button>
      <Icon src={BsQuestionCircleFill}  size="14"   color="rgb(93, 160, 0)" className="custom-icon" title="arror" />
        Security Rules</button>
</div>
<div class="sc-hKumaY JghUg">
    <div class="sc-cxpSdN kQfmQV tabs">
        <div class="tabs-navs">
            <button class="tabs-nav is-active">Transfer In</button>
            <button class="tabs-nav">Transfer Out</button>
            <div class="bg" style="left: 0%; right: 50%;"></div>
        </div>
        <div class="tabs-view" style="transform: none;">
            <div class="sc-ekRyGy dngFbm">
                <div class="sc-ezbkAF kDuLvp input sc-bTfYFJ dETeez">
                    <div class="input-label">
                        <div style="flex: 1 1 0%;">You Send</div>
                        <div>Wallet Balance:<span class="amount"> 0</span>
                        </div>
                    </div>
                    <div class="input-control">
                        <input type="text" value="0">
                        <button>Max</button>
                        <div class="sc-kHOZwM lkOmCH">
                            <!-- <img class="coin-icon" alt="" src="/coin/BTC.black.png"> -->
                            <!-- <span class="currency">BTC</span>
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_Arrow"></use>
                            </svg> -->
                        </div>
                    </div>
                </div>
                <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal sub-btn" disabled="">
                    <div class="button-inner">Coming soon!</div>
                </button>
            </div>
        </div>
    </div>
</div>

<style>
 .label {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-size: 0.75rem;
}
.jJQdnO {
    margin: 0px 1rem 0.375rem;
    display: flex;
    flex-wrap: wrap;
}
.gwKQBT .label .title-rate {
    color: rgb(255, 255, 255);
    font-weight: 800;
}
.gwKQBT .label .title-rate span {
    color: rgb(67, 179, 9);
    font-size: 1rem;
}
.gwKQBT .label button {
    font-size: 0.75rem;
    color: rgba(153, 164, 176, 0.6);
}
.JghUg {
    border-radius: 1.25rem;
    background-color: rgb(30, 32, 36);
    position: relative;
    padding: 0.625rem;
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
.tabs-navs {
    width: 17.5rem;
    margin: 0.75rem auto 1.375rem;
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
.kQfmQV .tabs-view {
    position: relative;
}
.dngFbm {
    margin-top: 1.25rem;
    padding-bottom: 2.625rem;
}
.dngFbm .sub-btn {
    margin: 2.75rem auto 0px;
}
.cBmlor:disabled.sc-iqseJM:not(.is-loading) {
    opacity: 0.5;
    cursor: default;
}
.JghUg .sub-btn {
    width: 20.5rem;
    margin: 1.25rem auto 1.875rem;
}
.cBmlor > .button-inner {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
.kDuLvp .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 0.75rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
    font-size: 12px;
}
</style>
