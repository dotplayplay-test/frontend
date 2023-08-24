<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCopy from "svelte-icons-pack/io/IoCopy";
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
</script>

<div class="sc-gLEhor lhZODp" id="deposit">
    <div class="sc-ezbkAF kDuLvp input ">
        <div class="input-label">
            <div style="flex: 1 1 0%;">Deposit Currency</div>
            <a href="/transactions/deposit/DOGE">Record</a>
        </div>
        <div class="sc-kszsFN evIEvq input-control">
            <div class="sc-cBIieI wvKye">
                <div class="wrap">
                    <img class="coin-icon" alt="" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579">
                    <span class="currency">DOGE</span>
                    <span class="svg">
                        <Icon src={RiSystemArrowRightSLine}  size="18"  color="rgb(255, 255, 255)" className="custom-icon" title="arror" />
                    </span>
                </div>
            </div>
            <div class="sc-kqnjJL kdWfvE">
                <div class="wrap">
                    <div class="tit">Balance : </div>
                    <div class="amount">0</div>
                </div>
            </div>
        </div>
    </div>

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
                    <p class="two">≈ 475.209884 DOGE</p>
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
        <div class="sc-wkwDy blotCy">
            <div class="label"><div>Deposit Address&nbsp;( Note: Only <span class="cl-primary"> Doge Coin </span> )</div>
                <div class="notranslate">DR1P...PQxDS</div>
            </div>
            <div class="box">
                <div class="cont">
                    <input class="address" readonly="" value="DR1PTY13GjbsUSkrNVJNCqrfHpDWWPQxDS">
                    <button class="sc-iqseJM cBmlor button button-normal copy-button">
                        <div class="button-inner">
                           <Icon src={IoCopy}  size="18"  color="rgb(255, 255, 255)" className="custom-icon" title="arror" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div class="sc-gDGHff jeroAP">
            <img src="/api/game/support/qrcode/320/?text=DR1PTY13GjbsUSkrNVJNCqrfHpDWWPQxDS" alt="qr.png">
        </div>
        <div class="sc-ywFzA egWBux">
            <p><span class="cl-primary">NOTICE:</span> Send only DOGE to this address. Coins will be deposited after 2 network confirmations.</p>
        </div>
    </div>
</div>

<style>
.kDuLvp {
    margin-top: 1rem;
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
