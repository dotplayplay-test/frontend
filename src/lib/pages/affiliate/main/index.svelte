<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import TiClipboard from "svelte-icons-pack/ti/TiClipboard";
import CgFileDocument from "svelte-icons-pack/cg/CgFileDocument";
import BsCircleSquare from "svelte-icons-pack/bs/BsCircleSquare";
import { profileStore } from "$lib/store/profile";
import { error } from "./store/index";
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
// $: console.log($profileStore)
import { createEventDispatcher } from 'svelte';
import Terms from '../component/terms.svelte';

const dispatch = createEventDispatcher()

let is_rules = false
const handleRules = (() => {
    dispatch("open", 2)
})


let code = "oeu71ki"
let affiilate_link = "https://nanogames.io/i-oeu71ki-n/"
function handleCopyCode() {
    navigator.clipboard.writeText(code)
    .then(() => {
    error.set('Text copied to clipboard');
    setTimeout(()=>{
        error.set("")
    },4000)
    })
    .catch((error) => {
    error.set('Unable to copy text: ', error);
    setTimeout(()=>{
        error.set("")
    },4000)
    });
}

function handleCopyLink() {
    navigator.clipboard.writeText(affiilate_link)
        .then(() => {
        error.set('Text copied to clipboard');
        })
        .catch((error) => {
        error.set('Unable to copy text: ', error);
    });
}

let terms = false
let is_display = false
const handlePopRule = ((event)=>{
    if(event === 1){
        terms = true
    }else{
        terms = false
    }
    is_display = !is_display
})

</script>


<div id="main" class="sc-eySxxw kguWsM welcome">
{#if $error}
    <div class="error-message">
        <div class="hTTvsjh"> 
            <div>{$error}</div>
        </div>
    </div>
 {/if}   

{#if is_display}
<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
    <div class="dialog casino-affiliate-terms" style="opacity: 1; width: 464px; height: 631px; margin-top: -315.5px; margin-left: -232px; transform: scale(1) translateZ(0px);">
        <div class="dialog-head has-close">
            {#if terms}
                <div class="dialog-title">Affiliate Program Rules</div>
                {:else}
                <div class="dialog-title">Commissions Rules</div>
            {/if}

        </div>
        <button on:click={handlePopRule} class="sc-ieecCq fLASqZ close-icon dialog-close">
            <Icon src={IoCloseSharp}  size="18"  color="rgb(255, 255, 255)" className="custom-icon" title="arror" />
        </button>

        <div class="dialog-body default-style casino-affiliate-terms" style="z-index: 2; transform: none;">
            <Terms />
        </div>
    </div>
</div>
{/if}




    <div class="sc-cxVPaa fnthVB casino-header">
        <div class="header-sub flex-center">
            <div class="left flex-center">
                <button on:click={()=>handlePopRule(2)} class="m-item rules">
                    <Icon src={CgFileDocument} size="18" className="sc-gsDKAQ hxODWG icon" title="Custom icon params" />
                    <span>Commission Rules</span>
                </button>
                <button on:click={()=>handlePopRule(1)} class="m-item terms">
                    <Icon src={BsCircleSquare} size="18" className="custom-icon" title="Custom icon params" />
                    <span>Affiliate Terms</span>
                </button>
            </div>
            <div class="right flex-center"></div>
        </div>
    </div>

    <div class="banner">


        <div class="bokeh banner-layer"></div>
        {#if $profileStore}
        <div class="sc-cnHmbd fSEGpF my-casino ">
            <div class="m-casino">
                <div class="tip ttu">Commission ready everyday<br>
                    <span class="theme">$ 100 </span>Just a referral away</div>
            </div>
        </div>
        {:else}
        <div class="character banner-layer"></div>
        <div class="sc-kTqLtj kxrCcr my-casino ">
            <div class="m-casino">
                <div class="tip ttu">Commission ready everyday<br>
                    <span class="theme">$ 100 </span>Just a referral away</div>
                <div class="result-item">
                    <div class="label ttu">My Referral Code</div>
                    <div class="value">
                        <span class="maxlength">{code}</span>
                        <button on:click={handleCopyCode} class="copy"></button>
                    </div>
                </div>
                <div class="result-item">
                    <div class="label ttu">My Referral Link</div>
                    <div class="value">
                        <span class="maxlength">{affiilate_link}</span>
                        <button on:click={handleCopyLink}  class="copy"></button>
                    </div>
                </div>
                <button class="new">Create More Codes</button>
            </div>
        </div>
        {/if}

        <div class="character banner-layer welcome"></div>
        <button class="management">
            <span style="margin: 0px 5px; display:flex;">
                <Icon src={TiClipboard} size="18" color="#fff" className="custom-icon" title="Custom icon params" />
            </span>
            <span>Affiliate Dashboard</span>
        </button>
    </div>

    <div class="button-create">
        <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal button">
            <div class="button-inner">Create Referral Code Now</div>
        </button>
    </div>

    <div class="container">
        <div class="section why">
            <div class="title ttu">Start Earning Today</div>
            <div class="content">
                <div class="sc-iKMXQg esTNSq why-casino">
                    <div class="left">
                        <div class="title theme">Build Your Own <br> Casino Club Quickly.</div>
                        <div class="desc">It's hard to build a casino, but you can start from managing your own table on DOTPLAYPLAY.</div>
                        <div class="desc">
                            <span class="theme">DOTPLAYPLAY</span> is not just games, it’s a platform to realize the potential of your hidden dreams.
                            Join DOTPLAYPLAY and set sail on a new chapter in your wealth journey immediately!
                        </div>
                    </div>
                    <div class="right">
                        <div class="title theme">Build A Casino Website <br> With Your Own Domain.</div>
                        <div class="desc">If you got your own plan. you can set up a casino website with your own domain, design style and theme.
                            If you are capable to invite players and their wager amount reaches a billion dollars and above, you will be able to get your own
                            customized casino!</div>
                        <div class="desc">Contact <a href="mailto:support@dotplayplay.com" class="theme">support@dotplayplay.com</a> for more details</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section rewards-system">
            <div class="title ttu">
                <span class="theme">Affiliate</span> Reward System</div>
            <div class="tip">DOTPLAYPLAY sets up a reward of 100 USD for each referral you invite in addition to commission. Click
                <span>"Create Referral Code Now"</span> and set sail on a new chapter on your journey of wealth immediately!</div>
        </div>
        <div class="section">
            <div class="title pc-spec">Affiliate Rewards</div>
            <div class="content">
                <div class="sc-hIagIn jIdaRB rewards-wrap">
                    <div class="rewards item">
                        <div class="system" style="background-image: url(&quot;https://static.nanogames.io/assets/rewards.dadef713.png&quot;);">
                            <div class="title theme ttu">USD Rewards</div>
                            <div class="desc">Every friend you invite will get you</div>
                            <div class="flex"><div class="amount">100 USD</div>
                                <a class="hover theme" href="/" >USD Rewards Rules</a>
                                <Icon src={ RiSystemArrowRightSLine} size="18" className="custom-icon" title="Custom icon params" />
                            </div>
                        </div>
                        <div class="graph" id="system-rewards">
                        </div>
                        <div class="footer">
                            <p class="text">Please contact us for a more profitable customized plan.</p>
                            <a href="https://t.me/NanoGamesOfficial" target="_blank" class="contact">
                                <div class="icon-box">
                                    <img src="https://static.nanogames.io/assets/Telegram.f76d7c46.svg" class="sc-gsDKAQ hxODWG icon icon" alt="">
                                </div>
                                <span>Contact Us</span>
                            </a>
                        </div>
                    </div>
                    <div class="commission item">
                        <div class="system" style="background-image: url(&quot;https://static.nanogames.io/assets/commission.62eb3f82.png&quot;);">
                            <div class="title theme ttu">Commission Rewards</div>
                            <div class="desc">Every friend you invite will rebate you a percentage of their wagers as your commission and will be credited directly to your balance.</div>
                        </div>
                        <div class="graph" id="system-commission"></div>
                        <div class="footer"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="sc-kjOQFR fLdMfS platform-rewards">
                <div class="is-pc">
                    <div class="title ttu">Rewards sent out till date</div>
                    <div class="fc">
                        <div class="rewards">
                            <div class="desc">USD rewards sent out till date</div>
                            <div class="number-wrap">
                                <div class="value">126057.5</div>
                                <div class="type">USD</div>
                            </div>
                        </div>
                        <div class="commission">
                            <div class="desc">Commission sent out till date</div>
                            <div class="number-wrap">
                                <div class="value">489105.3</div>
                                <div class="type">USD</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="title ttu">Platform real-time rewards</div>
            <div class="content">
                <div class="flex">
                    <div class="flex-left">
                        <div class="sc-cTAIfT khcCBN">
                            <div class="table">
                                <div class="thead">
                                    <div class="tr fc">
                                        <div class="th">Player</div>
                                        <div class="th">Commission/Rewards</div>
                                    </div>
                                </div>
                                <div class="tbody">
                                    <div class="tr fc">
                                        <div class="td fc player">
                                            <span class="nickname">Yhmmxxenyb</span>
                                        </div>
                                        <div class="td fc commission">
                                            <div class="sc-Galmp erPQzq coin notranslate">
                                                <img class="coin-icon" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="">
                                                <div class="amount">
                                                    <span class="amount-str">1.<span class="suffix">00000000</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tr fc">
                                        <div class="td fc player">
                                            <span class="nickname">be meo</span>
                                        </div>
                                        <div class="td fc commission">
                                            <div class="sc-Galmp erPQzq coin notranslate">
                                                <img class="coin-icon" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="">
                                                <div class="amount">
                                                    <span class="amount-str">35.5<span class="suffix">000000</span> </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tr fc">
                                        <div class="td fc player">
                                            <span class="nickname">Jslmmxenyb</span>
                                        </div>
                                        <div class="td fc commission">
                                            <div class="sc-Galmp erPQzq coin notranslate">
                                                <img class="coin-icon" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="">                                                 <div class="amount">
                                                    <span class="amount-str">2.568<span class="suffix">00000</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-right">
                        <div class="sc-cTAIfT khcCBN">
                            <div class="table">
                                <div class="thead">
                                    <div class="tr fc">
                                        <div class="th">Player</div>
                                        <div class="th">Commission/Rewards</div>
                                    </div>
                                </div>
                                <div class="tbody">
                                    <div class="tr fc">
                                        <div class="td fc player">
                                            <span class="nickname">truc dao</span>
                                        </div>
                                        <div class="td fc commission">
                                            <div class="sc-Galmp erPQzq coin notranslate">
                                                <img class="coin-icon" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="">                                                  <div class="amount">
                                                    <span class="amount-str">4.<span class="suffix">00000000</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tr fc">
                                        <div class="td fc player">
                                            <span class="nickname">Jslmmxenyb</span>
                                        </div>
                                        <div class="td fc commission">
                                            <div class="sc-Galmp erPQzq coin notranslate">
                                                <img class="coin-icon" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="">                                                 <div class="amount">
                                                    7<span class="amount-str">3.0175<span class="suffix">0000</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tr fc">
                                        <div class="td fc player">
                                            <span class="nickname">Jslmmxenyb</span>
                                        </div>
                                        <div class="td fc commission">
                                            <div class="sc-Galmp erPQzq coin notranslate">
                                                <img class="coin-icon" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="">                                                 <div class="amount">
                                                    7<span class="amount-str">3.0175<span class="suffix">0000</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal button">
            <div class="button-inner">Create Referral Code Now</div>
        </button>
    </div>
</div>

<style>
.kguWsM {
    overflow: auto;
    padding: 0px 20px;
}

.kguWsM>.banner {
    height: 464px;
    max-width: 1328px;
    margin: 0px auto;
    background-image: radial-gradient(circle at 92% -19%, rgb(163, 20, 220), rgb(123, 16, 185) 20%, rgb(49, 52, 60) 158%);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: auto 100%;
    position: relative;
    border-radius: 0px 0px 20px 20px;
}

.cNqpbz>.banner .bokeh {
    background: url(https://static.nanogames.io/assets/banner.bokeh.fa3a37e6.png) center center / auto 62% no-repeat;
}

.cNqpbz>.banner .banner-layer {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
}

.fSEGpF {
    width: 790px;
    height: 100%;
    margin: 0px auto;
    padding-top: 23px;
    box-sizing: border-box;
    position: relative;
}

.cNqpbz>.banner .character.welcome {
    background-image: url(https://static.nanogames.io/assets/banner.welcome.character.ec0bae0b.png);
}

.cNqpbz>.banner .character {
    background: url(https://static.nanogames.io/assets/banner.character.ce48e661.png) center center / auto 100% no-repeat;
}

.cNqpbz>.banner .banner-layer {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
}

.welcome .sc-cnHmbd .m-casino {
    height: 317px;
    background-image: linear-gradient(rgb(159, 31, 244), rgba(49, 52, 60, 0));
}

.fSEGpF .m-casino {
    width: 320px;
    height: 416px;
    border-radius: 20px;
    background-image: linear-gradient(rgb(159, 31, 244), rgb(62, 14, 95));
    padding: 106px 32px 0px;
    box-sizing: border-box;
    position: relative;
}

.fSEGpF .m-casino::before {
    content: "";
    width: 100%;
    height: 106px;
    position: absolute;
    left: 0px;
    top: 0px;
    background: url(https://static.nanogames.io/assets/my-casino.925e409c.png) center 20px / 176px no-repeat;
}

.welcome .sc-cnHmbd .tip {
    white-space: normal;
    font-size: 24px;
    line-height: 1.22;
}

.fSEGpF .tip {
    font-size: 16px;
    color: rgb(255, 255, 255);
    font-weight: 600;
    margin-bottom: 12px;
    white-space: nowrap;
    line-height: 1.5;
}

.ttu {
    text-transform: uppercase;
}

.cNqpbz>.banner .banner-layer {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
}
.kxrCcr {
    width: 790px;
    height: 100%;
    margin: 0px auto;
    padding-top: 23px;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
}
.kxrCcr .m-casino {
    width: 320px;
    height: 416px;
    border-radius: 20px;
    background-image: linear-gradient(rgb(159, 31, 244), rgb(62, 14, 95));
    padding: 106px 32px 0px;
    box-sizing: border-box;
    position: relative;
}
.kxrCcr .m-casino::before {
    content: "";
    width: 100%;
    height: 106px;
    position: absolute;
    left: 0px;
    top: 0px;
    background: url(https://static.nanogames.io/assets/my-casino.925e409c.png) center 20px / 176px no-repeat;
}
.kxrCcr .tip {
    font-size: 16px;
    color: rgb(255, 255, 255);
    font-weight: 600;
    margin-bottom: 12px;
    white-space: nowrap;
    line-height: 1.5;
}
.kxrCcr .m-casino .theme {
    color: rgb(255, 209, 12);
}
/* .hRNTmA .theme {
    color: rgb(67, 179, 9);
} */
.kxrCcr .result-item {
    font-size: 14px;
    margin-bottom: 0.75rem;
    color: rgb(255, 255, 255);
}
.kxrCcr .label {
    color: rgb(255, 209, 12);
    padding: 0px 18px;
}
.kxrCcr .label {
    color: rgb(255, 209, 12);
    padding: 0px 18px;
}
.kxrCcr .maxlength {
    flex: 0 1 93%;
    overflow: hidden;
    white-space: nowrap;
    opacity: 0.7;
    user-select: text;
}
.kxrCcr .copy {
    background: url(https://static.nanogames.io/assets/copy.37dd4904.svg) center center / auto 18px no-repeat;
    width: 18px;
    height: 18px;
    cursor: pointer;
}

.kxrCcr .value {
    height: 44px;
    border-radius: 22px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    background: rgba(68, 14, 105, 0.5);
    padding: 0px 18px;
}
.kxrCcr .new {
    display: block;
    font-size: 14px;
    text-align: center;
    background-image: conic-gradient(from 1turn, rgb(232, 153, 6), rgb(246, 199, 34));
    font-weight: 600;
    color: rgb(255, 255, 255);
    width: 100%;
    height: 44px;
    border-radius: 22px;
    margin-top: 1.5rem;
}


.kBjSXI {
    position: fixed;
    z-index: 1000;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.7);
    filter: none !important;
}

.dialog {
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 50%;
    top: 50%;
    width: 464px;
    height: 720px;
    margin: -375px 0px 0px -280px;
    transition-property: width, height, margin-left, margin-top;
    transition-duration: 0.5s;
    border-radius: 1.25rem;
    overflow: hidden;
    background-color: rgb(23, 24, 27);
}
.dialog-head.has-close {
    margin-right: 3.75rem;
}
.dialog-head {
    position: relative;
    z-index: 10;
    flex: 0 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 3.75rem;
    margin-left: 1.125rem;
    transition: all 0.5s ease 0s;
}
.dialog-head .dialog-title {
    font-size: 1rem;
    margin: 0px;
    font-weight: bold;
    flex: 1 1 0%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(245, 246, 247);
}
.fLASqZ {
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 11;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3.75rem;
    height: 3.75rem;
}
.default-style {
    padding-top: 3.75rem;
    background-color: rgb(23, 24, 27);
}
.dialog-body {
    position: absolute;
    inset: 0px;
    display: flex;
    overflow: hidden;
}

</style>
