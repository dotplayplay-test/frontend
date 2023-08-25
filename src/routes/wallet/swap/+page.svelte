<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
</script>

<div id="swap" class="sc-kQoPux iSaUST">
    <div class="sc-dkPtRN jScFby scroll-view sc-fbWUsZ eDKSkl" id="swap">
        <div class="sc-bjztik jvmCui">
            <div class="sc-ezbkAF kDuLvp input sc-bTfYFJ dETeez">
                <div class="input-label">
                    <div class="sc-gLEhor dWDgrK label-pre">You Send</div>
                    <div class="label-suf">
                        <button class="min">Min: <span>0</span>
                        </button>
                        <div class="max  ">Balance: <span>0</span></div>
                    </div>
                </div>
                <div class="input-control">
                    <input type="text" value="0">
                    <button>Max</button>
                    <div class="sc-kHOZwM lkOmCH">
                        <img class="coin-icon" alt="" src="https://www.linkpicture.com/q/dpp_logo.png">
                        <span class="currency">BTC</span>
                        <Icon src={RiSystemArrowRightSLine}  size="18"  color="rgb(255, 255, 255)" className="custom-icon" title="arror" />
                    </div>
                </div>
            </div>
            <div class="sc-eZKLwX jJQdnO">1 BTC ≈ 0.00000000 NND</div>
            <div class="icon-exchange"><button>
               <Icon src={RiSystemArrowDownSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
            </button>
            </div>
            <div class="sc-ezbkAF kDuLvp input sc-bTfYFJ dETeez">
                <div class="input-label">
                    <div class="sc-gLEhor dWDgrK label-pre">You get Approximately</div>
                    <a href="/transactions/bill/BCD/Swap">Record</a>
                </div>
                <div class="input-control">
                    <input type="text" value="0">
                    <div class="sc-kHOZwM lkOmCH">
                        <img class="coin-icon" alt="" src="https://www.linkpicture.com/q/dpp_logo.png">
                        <span class="currency">NND</span>
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_Arrow"></use>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="tips">
                <div class="item">Estimated Time* <span>Seconds</span></div>
                <div class="item">Swap fee: <span>-</span> BTC</div>
            </div>
            <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal sub-btn">
                <div class="button-inner">Swap Now</div>
            </button>
        </div>
    </div>
</div>

<style>
@media screen and (min-width: 650px){
    #swap {
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
.iSaUST #swap {
    padding: 0px;
}
.eDKSkl {
    flex: 1 1 auto;
    padding: 0.625rem 0.625rem 1.875rem;
    position: relative;
}
.eDKSkl {
    flex: 1 1 auto;
    padding: 0.625rem 0.625rem 1.875rem;
    position: relative;
}
.dETeez {
    cursor: pointer;
}
.kDuLvp {
    margin-top: 1rem;
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
.jvmCui .label-pre {
    flex: 1 1 auto;
}
.jvmCui .label-suf {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
.jvmCui .label-suf .min {
    margin-right: 0.625rem;
}
.jvmCui .label-suf button {
    font-size: 0.75rem;
}
.jvmCui .label-suf .min span {
    color: rgb(255, 255, 255);
}
.jvmCui .label-suf .max span {
    color: rgb(255, 255, 255);
}
 .input-control {
    min-height: 3.5rem;
}
.dETeez .input-control {
    height: 4.5rem;
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
.dETeez .input-control input {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0px;
    font-size: 0.9375rem;
}
 .kDuLvp .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
}
.dETeez .input-control button {
    border-radius: 1rem;
    padding: 0.5rem 1.125rem;
    background-color: rgb(60, 64, 75);
    margin-right: 0.625rem;
}
.dETeez .input-control button {
    border-radius: 1rem;
    padding: 0.5rem 1.125rem;
    background-color: rgb(60, 64, 75);
    margin-right: 0.625rem;
}
.dETeez .coin-icon {
    width: 1.875rem;
    height: 1.875rem;
    display: inline-block;
    vertical-align: top;
}
.dETeez .currency {
    flex: 1 1 auto;
    margin-left: 0.9375rem;
    font-size: 1rem;
    font-weight: 800;
    color: rgb(245, 246, 247);
}
.jJQdnO {
    margin: 0px 1rem 0.375rem;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
}
.jvmCui .icon-exchange {
    text-align: center;
    margin: 0px auto -0.75rem;
}
.kDuLvp {
    margin-top: 1rem;
}
.dETeez {
    cursor: pointer;
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
.jvmCui .label-pre {
    flex: 1 1 auto;
}
.jvmCui .tips {
    margin: 1.25rem 0px 0.625rem;
    padding: 0.5rem 1.25rem;
    border-radius: 1.25rem;
    border: 1px solid rgba(45, 48, 53, 0.5);
    font-size: 12px;
}
.jvmCui .tips span {
    color: rgb(255, 255, 255);
}
.jvmCui .tips span {
    color: rgb(255, 255, 255);
}
</style>
