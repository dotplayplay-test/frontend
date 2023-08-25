<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCopy from "svelte-icons-pack/io/IoCopy";
import Selectcoin from '$lib/wallet/selectcoin.svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";

let isSelectCoin = false
const handlecoinSelect = (() => {
    if (isSelectCoin) {
        isSelectCoin = false
    } else {
        isSelectCoin = true
    }
})

let defaultCoin = {
    id: 1,
    coin_symbol: "USDT",
    coin_name: "Tether",
    coin_image: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
    amount: 0,
    suffix: "000000",
    select: true,
    networks: {
        erc: {
            qr_code: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
            address: "DR1PTY13GjbsUSkrNVJNCqrfHpDWWPQxDS"
        },
        bep: {
            qr_code: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
            address: "0x351455346d88ee6FE927c79f23395143662EC88e"
        },
        trc: {
            qr_code: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
            address: "TEosAyZA7Kwv4q84es3uyLgXHDHQWyYrsq"
        }
    }
}

let erc = true
let trc = false
let bep = false

const handleNetwork = ((e)=>{
    if(e === 1){
        erc = true
        trc = false
        bep = false
    }else if(e === 2){
        erc = false
        trc = false
        bep = true
    }else{
        erc = false
        trc = true
        bep = false
    }
})

const handleCoins = ((e) => {
    defaultCoin = e.detail
    handlecoinSelect()
})
</script>

<div class="sc-gLEhor lhZODp" id="deposit">
    {#if isSelectCoin}
    <Selectcoin on:handleCoinSelect={handleCoins}/>
        {/if}
        <div class="sc-ezbkAF kDuLvp input ">
            <div class="input-label">
                <div style="flex: 1 1 0%;">Deposit Currency</div>
                <a href="/transactions/deposit/DOGE">Record</a>
            </div>
            <button on:click={handlecoinSelect} class="sc-kszsFN evIEvq input-control">
                <div class="sc-cBIieI wvKye">
                    <div class="wrap">
                        <img class="coin-icon" alt="" src={defaultCoin.coin_image}>
                        <span class="currency">{defaultCoin.coin_symbol}</span>
                        <span class="svg">
                            <Icon src={RiSystemArrowRightSLine}  size="18"  color="rgb(255, 255, 255)" className="custom-icon" title="arror" />
                        </span>
                    </div>
                </div>
                <div class="sc-kqnjJL kdWfvE">
                    <div class="wrap">
                        <div class="tit">Balance : </div>
                        <div class="amount">{defaultCoin.amount}</div>
                    </div>
                </div>
            </button>
        </div>

        {#if defaultCoin.coin_symbol === "USDT"}
        <div class="sc-zjkyB cpVBtC">
            <div class="sc-czvZiG exgnid bcd-label">
                <p>First Deposit Bonus</p>
                <span>More</span>
            </div>
            <div class="sc-dXNJws kyYKJa">
                <div class="bg-light light-ani">
                    <div class="sc-jFkwbb bNDdwa bcd-left">
                        <p class="one">$30<span>(or above to get bonus)</span>
                        </p>
                        <p class="two">≈ 30 USDT</p>
                    </div>
                    <div class="sc-bOtlzW gCfefU bcd-right">
                        <div class="wrap">
                            <div class="sc-bQFuvY dftgop sun-flower">
                                <img class="img-bg" src="https://static.nanogames.io/assets/sf_w.adddd7aa.png" alt="sf">
                                <img class="img-bonus" src="https://static.nanogames.io/assets/bonus.8a408dd9.png" alt="bonus">
                            </div>
                            <div class="info">
                                <p class="one">
                                    <b>+80%</b>
                                    <span>Bonus</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="sc-dpAhYB emReoO">
            <div class="sc-fSDTwv hgHrvG">
                <div class="label">Choose Network</div>
                <div class="btn-wrap">
                    <div class="scroll-box">
                        <div class="btn-space">
                            <button on:click={()=>handleNetwork(1)} class={erc ? `active` : ""} disabled={erc}>ERC20</button>
                        </div>
                        <div class="btn-space">
                            <button on:click={()=>handleNetwork(2)} class={bep ? `active` : ""} disabled={bep}>BEP20</button>
                        </div>
                        <div class="btn-space">
                            <button on:click={()=>handleNetwork(3)} class={trc ? `active` : ""} disabled={trc}>TRC20</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sc-wkwDy blotCy">
                <div class="label">
                    <div>Deposit Address&nbsp;( Note: Only <span class="cl-primary"> {defaultCoin.coin_symbol} Coin </span> )</div>
                    {#if erc}
                        <div class="notranslate">{defaultCoin.networks.erc.address.substring(0, 7).concat('.......')}</div> 
                        {:else if trc}
                        <div class="notranslate">{defaultCoin.networks.trc.address.substring(0, 7).concat('.......')}</div> 
                        {:else if bep}
                        <div class="notranslate">{defaultCoin.networks.bep.address.substring(0, 7).concat('.......')}</div> 
                    {/if}
                </div>
                <div class="box">
                    <div class="cont">
                        {#if erc}
                        <input class="address" readonly="" value={defaultCoin.networks.erc.address}>
                        {:else if trc}
                        <input class="address" readonly="" value={defaultCoin.networks.trc.address}>
                        {:else if bep}
                        <input class="address" readonly="" value={defaultCoin.networks.bep.address}>
                    {/if}

                        <button class="sc-iqseJM cBmlor button button-normal copy-button">
                            <div class="button-inner">
                                <Icon src={IoCopy}  size="18"  color="rgb(255, 255, 255)" className="custom-icon" title="arror" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div class="sc-gDGHff jeroAP">
                {#if erc}
                 <img src={defaultCoin.networks.erc.qr_code} alt="qr.png">
                 {:else if trc}
                 <img src={defaultCoin.networks.trc.qr_code} alt="qr.png">
                 {:else if bep}
                 <img src={defaultCoin.networks.bep.qr_code} alt="qr.png">
                {/if}
            </div>
            <div class="sc-ywFzA egWBux">
                <p><span class="cl-primary">NOTICE:</span> Send only USDT to this address. Coins will be deposited after 6 network confirmations.</p>
            </div>
        </div>
        {:else}
        <div class="sc-gRtYjc fIolUb">
            <div class="oval">
                <img alt="" src="https://static.nanogames.io/assets/bcdcoin.141c7b8c.png" class="bcd-left">
                <img alt="" src="https://static.nanogames.io/assets/bcdcoin.141c7b8c.png" class="bcd-center">
                <img alt="" src="https://static.nanogames.io/assets/bcdcoin.141c7b8c.png" class="bcd-right">
            </div>
            <div class="bcd-usd">
                <img alt="bcd-usd" src="https://static.nanogames.io/assets/bcd_usd.ae5190d3.png">
            </div>
            <p><span class="word">{defaultCoin.coin_symbol}</span> (DPP Dollar) is a crypto launched by DOTPLAYPLAY. You can play games, tip, coindrop, rain with it.</p>
            <p><span class="word">1 {defaultCoin.coin_symbol} = 1 USD</span> , You can <a class="hover" href="/wallet/swap">DPPSwap</a> DPP into any other currencies at any time and withdraw it to your wallet.</p>
            <p>Deposit {defaultCoin.coin_symbol} into Vault, Enjoy up to <span class="word">10%</span> Annual Percentage Rate return.</p>
            <p><span class="hover">Deposit</span> to claim your {defaultCoin.coin_symbol} bonus now.</p>
            <button class="more-about">
                <span>More about {defaultCoin.coin_symbol}</span>
                <Icon src={RiSystemArrowRightSLine}  size="18"  color="rgb(255, 255, 255)" className="custom-icon" title="arror" />
            </button>
        </div>
        {/if}

    
        </div>

<style>
    .fIolUb {
    margin-top: 1rem;
    border-radius: 1.25rem;
    padding: 0px 0.75rem 1rem;
    position: relative;
    color: rgba(153, 164, 176, 0.6);
    background-color: rgb(23, 24, 27);
}
.fIolUb .oval {
    position: absolute;
    top: 0px;
    z-index: 0;
    width: 15.5rem;
    height: 12.0625rem;
    left: 50%;
    transform: translateX(-50%);
    background: url(https://static.nanogames.io/assets/oval.7db862c7.png) center center / 100% 100% no-repeat;
}
.fIolUb .oval .bcd-left {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    top: 2rem;
    left: 2rem;
    transform: rotate(115deg);
}
.fIolUb .oval .bcd-center {
    position: absolute;
    width: 4rem;
    height: 4rem;
    top: 1.125rem;
    left: 50%;
    transform: translateX(-50%);
}
.fIolUb .oval .bcd-right {
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: -0.375rem;
    right: 2rem;
    transform: rotate3d(0, 0, 3, 35deg);
}
.fIolUb .bcd-usd {
    padding-top: 5.625rem;
    position: relative;
    z-index: 1;
    display: block;
    font-size: 0px;
    margin-bottom: 1.5rem;
    text-align: center;
}
.fIolUb .bcd-usd {
    padding-top: 5.625rem;
    position: relative;
    z-index: 1;
    display: block;
    font-size: 0px;
    margin-bottom: 1.5rem;
    text-align: center;
}
.fIolUb > p {
    margin-top: 1rem;
}
.fIolUb > p .word {
    font-weight: bold;
    color: rgb(245, 246, 247);
}
.fIolUb .more-about {
    margin: 1rem 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(67, 179, 9);
    font-size: 0.875rem;
}
@media screen and (min-width: 650px) {
    #deposit {
        border-radius: 20px;
        background-color: rgb(30, 32, 36);
        padding: 1.25rem 1.25rem 0px;
        box-sizing: border-box;
        height: 380px;
        overflow-y: auto;
        touch-action: pan-y;
        overscroll-behavior: contain;
    }
}
.hgHrvG {
    margin-top: 1rem;
}
.hgHrvG .label {
    margin: 0px 1rem 0.375rem 0.75rem;
}
.hgHrvG .btn-wrap {
    display: flex;
}
.hgHrvG .btn-wrap .scroll-box {
    width: 100px;
    display: flex;
    flex: 1 1 auto;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    position: relative;
    height: 2.1875rem;
}
.hgHrvG .btn-wrap .btn-space {
    padding: 0px 0.1875rem;
    scroll-snap-align: start;
}
.hgHrvG .btn-wrap button {
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    padding: 0px 1.25rem;
    height: 2.125rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 0.875rem;
}
.hgHrvG .btn-wrap .active {
    color: rgb(255, 255, 255);
    border: 1px solid rgb(67, 179, 9);
    font-weight: 800;
    background-color: rgba(93, 160, 0, 0.15);
}
.kDuLvp {
    margin-top: 1rem;
    width: 100%;
}

.kDuLvp .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 1.25rem;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    height: 3.5rem;
    padding: 0px 1.25rem;
    opacity: 1;
}

.kDuLvp .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 0.75rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
}

.evIEvq.input-control {
    border-radius: 1.25rem;
    height: 4.5rem;
    width: 100%;
}

.input-control {
    min-height: 3.5rem;
}

.evIEvq {
    cursor: pointer;
}

.wvKye {
    flex: 6 1 0%;
    line-height: 1.875rem;
}

.wvKye .wrap {
    padding-right: 1.25rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}

.evIEvq .coin-icon {
    width: 1.875rem;
    height: 1.875rem;
    display: inline-block;
    vertical-align: top;
}

.wvKye .currency {
    color: rgb(245, 246, 247);
    font-size: 1.125rem;
}

.evIEvq .currency {
    flex: 1 1 auto;
    margin-left: 0.9375rem;
    font-size: 1.125rem;
    font-weight: 800;
}

.wvKye .svg {
    margin-top: 0.1875rem;
}

.kdWfvE {
    border-left: 1px solid rgb(45, 48, 53);
    line-height: 0.9375rem;
    flex: 4 1 0%;
}

.kdWfvE .wrap {
    padding-left: 1.25rem;
}

.kdWfvE .amount {
    color: rgb(245, 246, 247);
    margin-top: 0.3125rem;
}

.evIEvq .amount {
    font-size: 0.9375rem;
    font-weight: 800;
}

.cpVBtC {
    position: relative;
    overflow: hidden;
    margin-top: 1rem;
}

.exgnid {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px 0.875rem;
    flex: 1 1 auto;
}

.exgnid p {
    margin: 0px;
    line-height: 1.25rem;
    color: rgb(251, 207, 18);
}

.exgnid span {
    line-height: 1.25rem;
    color: rgb(67, 179, 9);
    cursor: pointer;
}

.kyYKJa {
    margin-top: 0.25rem;
    overflow: hidden;
    background-image: url(https://static.nanogames.io/assets/bonusbg.d708b706.png);
    background-repeat: no-repeat;
    background-size: 100%;
    position: relative;
    height: 3.875rem;
    border: none;
    padding: 0px 1.125rem 0.375rem;
}

.bg-light {
    overflow: hidden;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 100%;
    padding: 0px 0.75rem;
    position: relative;
}

.light-ani::before {
    content: "";
    position: absolute;
    display: block;
    width: 3.75rem;
    height: 3.875rem;
    bottom: -0.1875rem;
    margin-left: -5rem;
    z-index: 2;
    overflow: hidden;
    opacity: 0.2;
    background: -webkit-gradient(linear, 0% 0%, 100% 0%, from(rgba(45, 48, 53, 0)), color-stop(0.5, rgb(213, 88, 48)), to(rgba(45, 48, 53, 0)));
    transform: skewX(-25deg);
    animation: 5s ease 0s infinite normal none running aniBlink;
}

.bNDdwa {
    flex: 6.1 1 0%;
    display: flex;
    height: 100%;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
}

.bNDdwa .one {
    font-size: 1.25rem;
    color: rgb(251, 207, 18);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 1.375rem;
    font-weight: bold;
}

.kyYKJa p {
    margin: 0px;
}

.bNDdwa .two {
    color: rgb(245, 246, 247);
    line-height: 1.125rem;
    font-size: 12px;
}

.cpVBtC .bcd-right {
    border-left: 1px solid rgba(176, 179, 191, 0.05);
}

.gCfefU .wrap {
    padding-left: 1rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
}

.dftgop {
    position: relative;
    width: 2.75rem;
    height: 2.75rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-left: -0.625rem;
}

.dftgop .img-bg {
    width: 2.45rem;
    height: 2.45rem;
    position: absolute;
    top: 0px;
    left: 0px;
    animation: 5s linear 0s infinite normal none running rorate;
    z-index: 1;
}

.dftgop .img-bonus {
    width: 1.875rem;
    height: auto;
    z-index: 2;
}

.bNDdwa .one {
    font-size: 1.25rem;
    color: rgb(251, 207, 18);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 1.375rem;
    font-weight: bold;
}

.bNDdwa .one span {
    margin-right: 0.25rem;
    font-weight: 400;
    font-size: 0.75rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 10.3125rem;
}

.gCfefU .info .one {
    line-height: 1.25rem;
    color: rgb(251, 207, 18);
    text-align: right;
}

.gCfefU .info .one b {
    font-size: 0.7375rem;
    margin-right: 0.3125rem;
}

.gCfefU .info .one span {
    font-size: 0.55rem;
}

.blotCy {
    margin-top: 1rem;
    width: 100%;
    font-size: 0.8125rem;
}

.jeroAP {
    width: 11.125rem;
    height: 11.125rem;
    margin: 1rem auto;
    padding: 0.75rem;
    border-radius: 1.25rem;
    overflow: hidden;
    background-color: rgb(45, 48, 53);
    animation: 1.5s linear 0s infinite normal none running placeholderShimmer;
}

.jeroAP img {
    width: 100%;
    border-radius: 0.625rem;
    image-rendering: pixelated;
}

.egWBux {
    padding: 0rem 1rem;
    border-radius: 1.25rem;
    font-size: 0.75rem;
    border: 1px solid rgb(45, 48, 53);
}

.cl-primary {
    color: var(--primary-color);
}

p {
    margin: 0.8em 0;
}

.blotCy .label {
    margin: 0px 0.75rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
}

.blotCy .box {
    background-color: rgba(45, 48, 53, 0.5);
    border: 1px solid rgb(45, 48, 53);
    padding: 0.3125rem 1.25rem;
    width: 100%;
    border-radius: 1.25rem;
    min-height: 3.5rem;
    display: flex;
    flex-direction: column;
}

.blotCy .address {
    border: none;
    background-color: transparent;
    padding: 0.625rem 0px;
}

.blotCy .cont {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 auto;
}

.emReoO .copy-button {
    width: 2.5rem;
    height: 1.875rem;
    margin-right: -1.25rem;
}

.blotCy .cont .address {
    flex: 1 1 auto;
    word-break: break-all;
    color: rgb(245, 246, 247);
}

.blotCy .cont button {
    width: 2.5rem;
    height: 1.875rem;
    flex: 0 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
</style>
