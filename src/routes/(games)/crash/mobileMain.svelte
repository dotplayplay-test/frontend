<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowUpSLine from "svelte-icons-pack/ri/RiSystemArrowUpSLine";
import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
import AiFillQuestionCircle from "svelte-icons-pack/ai/AiFillQuestionCircle";
import BiStats from "svelte-icons-pack/bi/BiStats";
import Crashlayout from '$lib/crashgame/screens/Crashlayout.svelte';

    let isAdvance = false
const handleAdvancebg = ((q)=>{
    if(q === 1){
        isAdvance = false
    }else{
        isAdvance = true
    }
})

let isHelp = false
const handleHelp = ()=>{
    if(isHelp){
        isHelp = false
    }else{
        isHelp = true
    }
}


let isStat = false
const handleStatistics = (()=>{
    if(isStat){
        isStat = false
    }else{
        isStat = true
    }
})

</script>

<div class="game-area">
    <div class="game-main">
        <div class="game-view">
            <div class="sc-eBhrFy jrzKwG game-recent sc-jLuXOi gfnnAw">
                <div class="recent-list-wrap">
                    <div class="recent-list" style="width: 133.333%; transform: translate(0%, 0px);">
                        <div class="game-item is-moon" style="width: 25%;">
                            <div class="issus">5757274</div>
                            <div>17.56x</div>
                        </div><div class="game-item " style="width: 25%;">
                            <div class="issus">5757275</div>
                            <div>1.03x</div>
                        </div>
                        <div class="game-item " style="width: 25%;">
                            <div class="issus">5757276</div>
                            <div>1.12x</div>
                        </div>
                        <div class="game-item is-doubble" style="width: 25%;">
                            <div class="issus">5757277</div>
                            <div>8.61x</div>
                        </div>
                        <div class="game-item is-doubble" style="width: 25%;">
                            <div class="issus">5757277</div>
                            <div>8.61x</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sc-faIbUi faJsUu game-box sc-fDZUdJ jvaryA">
                <div class="sc-kexyCK gUytcA house-edge">
                    <span>House Edge 1%</span>
                </div>
                <div class="sc-jNHgKk deLgbW">
                    <Crashlayout />
                </div>
                <svg class="box-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 996 46"><defs>
                    <linearGradient id="gcardBg" x1="50%" x2="50%" y1="0%" y2="100%">
                        <stop offset="0%" stop-color="#31343C"></stop><stop offset="100%" stop-color="#1E2024" stop-opacity="0"></stop>
                    </linearGradient>
                </defs><g opacity=".899">
                    <path fill="url(#gcardBg)" fill-rule="evenodd" d="M0 0h996L892 46H96z" opacity=".598" transform="rotate(-180 498 23)"></path>
                </g>
            </svg>
            </div>
        </div>
        <div id="crash-control-0" class="sc-hCwLRM jcwJKv game-control style-mobile">
            <div class="sc-iwjdpV ikWSlH radio game-control-switch">
                <button on:click={()=>handleAdvancebg(1)} class={`${!isAdvance &&  "is-active"}`} >
                    <div class="label">Manual</div>
                </button>
                <button on:click={()=>handleAdvancebg(2)} class={`${isAdvance && "is-active"}`} >
                    <div class="label">Advanced</div>
                </button>
            </div>
            <div class="game-control-panel">
                <div class="sc-jcEtbA eRjsxw">
                    <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big sc-fBNLhH dtXZTz">
                        <div class="button-inner">
                            <div>Bet</div>
                        </div>
                    </button>
                    <div class="forms">
                        <div class="sc-ezbkAF gcQjQT input sc-fvxzrP gOLODp sc-hDzdEj dcPZTa game-coininput">
                            <div class="input-label">
                                <div class="sc-lepLyc gqMxJF label">
                                    <div>Amount</div>
                                    <div class="max-profit">
                                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                            <use xlink:href="#icon_Inform"></use>
                                        </svg>
                                        <!-- <div class="tip">
                                            <span class="tit">Max Profit:&nbsp;</span>
                                            <div class="sc-Galmp erPQzq coin notranslate">
                                                <div class="amount">
                                                    <span class="amount-str">32659.7964</span>
                                                </div>
                                            </div>
                                        </div> -->
                                    </div>
                                </div>
                                <div class="label-amount">0 USD</div>
                            </div>
                            <div class="input-control">
                                <input type="text" value="1.00">
                                <img class="coin-icon" alt="" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png">
                                <div class="sc-kDTinF bswIvI button-group">
                                    <button>/2</button>
                                    <button>x2</button>
                                    <button class="sc-lcdCCa xtnse">
                                        <Icon src={RiSystemArrowUpSLine}  size="17"  color="rgba(153, 164, 176, 0.6)"  title="arror" />
                                        <Icon src={RiSystemArrowDownSLine}  size="17"  color="rgba(153, 164, 176, 0.6)"  title="arror" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="sc-ezbkAF hzTJOu input sc-eBHJIF MycAI">
                            <div class="input-label">
                                <div class="chance-title">
                                    <div class="auto-title">Auto cash out</div>
                                    <div>Chance&nbsp;&nbsp;
                                        <span class="chance-num">0.99%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="input-control">
                                <input type="text" value="100.00">
                                <div class="payout-txt">×</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="game-actions">
            <button on:click={handleStatistics} class="action-item  ">
                <Icon src={BiStats}  size="18"  color="rgb(153, 164, 176)" className="custom-icon" title="arror" />
            </button>
            <button on:click={handleHelp} class="action-item  ">
                <Icon src={AiFillQuestionCircle}  size="18"  color="rgb(153, 164, 176)" className="custom-icon" title="arror" />
            </button>
        </div>
    </div>
</div>

<style>
.game-main.game-main {
    min-height: auto;
}
.game-main {
    position: relative;
    border-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
}
.game-view {
    width: 100%;
    overflow: hidden;
    min-width: 100%;
    border-radius: 1.25rem 1.25rem 0px 0px;
}
.jrzKwG {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 2.75rem;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
}

.gfnnAw .recent-list-wrap {
    background-color: rgba(49, 52, 60, 0.4);
    border-radius: 1.375rem;
    padding: 0px 0.625rem;
    margin: 0px 0.625rem;
}
.jrzKwG .recent-list-wrap {
    margin: 0px 0.625rem;
}
.jrzKwG .recent-list-wrap {
    flex: 1 1 auto;
    height: 100%;
    margin: 0px 1.5rem;
    overflow: hidden;
    position: relative;
    border-radius: 1.375rem;
}
.jrzKwG .recent-list {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
}
.gfnnAw .game-item.is-doubble {
    color: rgb(67, 179, 9);
}
.gfnnAw .game-item.is-doubble {
    color: rgb(67, 179, 9);
}
.gfnnAw .game-item {
    display: flex;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    line-height: 0.875rem;
    background-color: transparent;
    position: relative;
    padding-left: 1.4375rem;
    color: rgb(237, 99, 0);
    text-align: left;
    align-items: flex-start;
    height: 100%;
}
.gfnnAw .game-item {
    padding-left: 1.125rem;
}
.gfnnAw .game-item {
    display: flex;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    line-height: 0.875rem;
    background-color: transparent;
    position: relative;
    padding-left: 1.4375rem;
    color: rgb(237, 99, 0);
    text-align: left;
    align-items: flex-start;
    height: 100%;
}
.gfnnAw .game-item.is-doubble {
    color: rgb(67, 179, 9);
}
.gfnnAw .game-item.is-moon {
    color: rgb(246, 199, 34);
}
.gfnnAw .game-item {
    padding-left: 1.125rem;
}
.gfnnAw .game-item::before {
    content: "";
    position: absolute;
    left: 0.125rem;
    top: 50%;
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    transform: translateY(-50%);
    background-color: rgb(237, 99, 0);
}
.gfnnAw .game-item.is-doubble {
    color: rgb(67, 179, 9);
}
.gfnnAw .game-item {
    padding-left: 1.125rem;
}
.gfnnAw .game-item.is-doubble::before {
    background-color: rgb(67, 179, 9) !important;
}
.gfnnAw .game-item::before {
    width: 0.75rem;
    height: 0.75rem;
}
.gfnnAw .game-item .issus {
    font-size: 1rem;
    font-weight: normal;
    transform: scale(0.7);
    width: 3.125rem;
    transform-origin: left center;
    margin-bottom: 0.125rem;
    color: rgba(153, 164, 176, 0.5);
}
.jvaryA {
    position: relative;
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    padding: 0px 0.625rem 1.875rem;
}
.gUytcA {
    position: absolute;
    z-index: 2;
    right: 1.5rem;
    bottom: 1.25rem;
    font-weight: 500;
    min-width: 8.75rem;
    padding: 0px 1.125rem;
    border-radius: 1.125rem;
    height: 2.25rem;
    line-height: 2.25rem;
    color: rgba(153, 164, 176, 0.6);
    background-color: rgba(49, 52, 60, 0.4);
}
.gUytcA {
    min-width: 6.25rem;
    text-align: center;
    right: 0.875rem;
    bottom: 1rem;
    height: 2.25rem;
    line-height: 2.25rem;
    padding: 0px 0.75rem;
}
.gUytcA span {
    font-size: 0.75rem;
    transform: scale(0.83);
}
.deLgbW {
    position: relative;
    margin-top: 1.875rem;
    margin-bottom: 1.25rem;
}
.faJsUu .box-bg {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: -1px;
    width: 100%;
}
.gUytcA {
    min-width: 6.25rem;
    text-align: center;
    right: 0.875rem;
    bottom: 1rem;
    height: 2.25rem;
    line-height: 2.25rem;
    padding: 0px 0.75rem;
}
.jcwJKv.style-mobile {
    flex-direction: column;
}
.jcwJKv {
    display: flex;
}
.jcwJKv.style-mobile .game-control-panel {
    padding: 0px 1.125rem;
}
.jcwJKv .game-control-panel {
    flex: 1 1 0%;
}
.jcwJKv.style-mobile {
    flex-direction: column;
}
.jcwJKv {
    display: flex;
}
.jcwJKv.style-mobile .game-control-switch {
    order: 2;
    margin-top: 1.25rem;
    position: relative;
}
.jcwJKv.style-mobile .game-control-switch::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    height: 1px;
    opacity: 0.3;
    background-color: rgb(49, 52, 60);
}
.jcwJKv.style-mobile .game-control-switch > button.is-active {
    border-bottom-color: rgb(67, 179, 9);
    background-image: linear-gradient(to top, rgba(123, 197, 20, 0.3), rgba(123, 197, 20, 0) 50%);
}
.jcwJKv.style-mobile .game-control-switch > button {
    height: 3rem;
    border-bottom: 2px solid transparent;
}
.jcwJKv.style-mobile .game-control-switch {
    order: 2;
    margin-top: 1.25rem;
    position: relative;
}
.jcwJKv .game-control-switch {
    display: flex;
    flex: 0 0 auto;
}
.jcwJKv.style-mobile .game-control-switch::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    height: 1px;
    opacity: 0.3;
    background-color: rgb(49, 52, 60);
}
.jcwJKv.style-mobile .game-control-switch > button.is-active {
    border-bottom-color: rgb(67, 179, 9);
    background-image: linear-gradient(to top, rgba(123, 197, 20, 0.3), rgba(123, 197, 20, 0) 50%);
}
.jcwJKv.style-mobile .game-control-switch > button {
    height: 3rem;
    border-bottom: 2px solid transparent;
}
.jcwJKv .game-control-switch > button.is-active {
    color: rgb(245, 246, 247);
    font-weight: bold;
}
.jcwJKv .game-control-switch > button {
    flex: 1 1 0%;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
}
.jcwJKv .game-control-switch > button {
    flex: 1 1 0%;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
}
.jcwJKv.style-mobile .game-control-panel {
    padding: 0px 1.125rem;
}
.jcwJKv .game-control-panel {
    flex: 1 1 0%;
}
.jcwJKv.style-mobile .game-control-panel {
    padding: 0px 1.125rem;
}
.eRjsxw .forms {
    margin-bottom: 0px;
}
.eRjsxw .forms .input {
    width: auto;
}
.hzTJOu {
    margin-top: 1rem;
}
.hzTJOu .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 1.125rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
}
.eRjsxw .chance-title {
    display: flex;
    flex: 1 1 0%;
    font-size: 13px;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.eRjsxw .auto-title {
    margin-right: auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.eRjsxw .chance-title .chance-num {
    color: rgb(67, 179, 9);
}
.gcQjQT {
    margin-top: 1rem;
}
.eRjsxw .forms .input {
    width: auto;
}
.gcQjQT .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 1.125rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
}
.gqMxJF {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 1rem;
}
.input-control {
    border-color: transparent;
}
.jcwJKv .input-control {
    background-color: rgba(49, 52, 60, 0.4);
}
.jcwJKv .input-control {
    background-color: rgba(49, 52, 60, 0.4);
}
.gcQjQT .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
}
.gOLODp .coin-icon {
    order: -1;
    margin-right: 0.3125rem;
    margin-left: -0.625rem;
    width: 1.25rem;
    height: 1.25rem;
}
.jcwJKv .input-control .button-group {
    margin-right: -1.125rem;
}
.dcPZTa .button-group {
    width: 8.375rem;
    position: relative;
}
.bswIvI {
    display: flex;
}
.bswIvI > button:first-child {
    margin-left: 0px;
    padding-left: 0.125rem;
    border-top-left-radius: 1.125rem;
    border-bottom-left-radius: 1.125rem;
}
.bswIvI > button {
    height: 2.25rem;
    width: 2.75rem;
    padding: 0px;
    color: rgb(153, 164, 176);
    background: rgb(49, 52, 60);
    margin-left: 1px;
}
.bswIvI > button:last-child {
    padding-right: 0.125rem;
    border-top-right-radius: 1.125rem;
    border-bottom-right-radius: 1.125rem;
}
.bswIvI > button {
    height: 2.25rem;
    width: 2.75rem;
    padding: 0px;
    color: rgb(153, 164, 176);
    background: rgb(49, 52, 60);
    margin-left: 1px;
}
.bswIvI > button {
    height: 2.25rem;
    width: 2.75rem;
    padding: 0px;
    color: rgb(153, 164, 176);
    background: rgb(49, 52, 60);
    margin-left: 1px;
}
.dtXZTz {
    width: 90%;
    max-width: 19.75rem;
    margin: 3.5rem auto;
}
.gcQjQT .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 1.125rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
}
.gqMxJF .max-profit {
    position: relative;
    margin-left: 0.1875rem;
    width: 1rem;
    height: 1rem;
}
.xtnse {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
}
.game-actions {
    display: flex;
    order: 10;
    -webkit-box-align: center;
    align-items: center;
    height: 4rem;
    position: relative;
}
.game-actions::before {
    content: "";
    flex: 1 1 0%;
}
.action-item {
    cursor: pointer;
    margin-right: 0.5rem;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
</style>
