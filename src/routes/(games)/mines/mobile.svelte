<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import TiVolumeDown from "svelte-icons-pack/ti/TiVolumeDown";
import { default_Wallet } from "$lib/store/coins";
import MobileManualControllers from '$lib/games/mines/mobileManualControllers.svelte';
import MobileAutoController from '$lib/games/mines/mobileAutoController.svelte';
import FiMusic from "svelte-icons-pack/fi/FiMusic";
import { soundHandler} from "$lib/games/mines/store/index"
import background from "$lib/games/mines/audio/sadness.mp3"
import TiVolumeMute from "svelte-icons-pack/ti/TiVolumeMute";
import BiSolidKeyboard from "svelte-icons-pack/bi/BiSolidKeyboard";
import BsEgg from "svelte-icons-pack/bs/BsEgg";
import RiMapGuideFill from "svelte-icons-pack/ri/RiMapGuideFill";
import AiOutlineQuestionCircle from "svelte-icons-pack/ai/AiOutlineQuestionCircle";
import Help from "$lib/games/mines/componets/help.svelte";
import LiveStats from "$lib/games/mines/componets/liveStats.svelte";
import SeedSetting from "$lib/games/mines/componets/seedSetting.svelte";
import Hotkey from "$lib/games/mines/componets/hotkey.svelte";
import { dicegameplays } from "$lib/games/mines/store/index"
import Allbet from '$lib/games/mines/componets/allbet.svelte';

let is_manual = true
const handleTabs = ((e)=>{
    if(e === 1){
        is_manual = true
    }else{
        is_manual = false
    }
})

let playPlayb = false
const handleSoundState = (()=>{
    playPlayb =! playPlayb
    if(playPlayb){
        const audio = new Audio(background);
        audio.volume = 1;
        audio.play();
    }else{
        const audio = new Audio(background);        
        audio.volume = 0;
        audio.paused();
    }
})

function playBackground() {
    if($soundHandler){
        soundHandler.set(0)
    }else{
        soundHandler.set(1)
    }
}

let isHelp = false
const handleIsHelp = (()=>{
    isHelp = !isHelp
})

let is_stats = false
let stats = (()=>{
    is_stats = !is_stats
})

let isSeed = false
const  hanhisSeed = (()=>{
    isSeed = !isSeed
})

let is_hotkey = false
const handleHotKey = (()=>{
    is_hotkey = !is_hotkey
})

let hisQQ = false
const handleDiceHistoryDetail = ((data)=>{
    if(hisQQ){
        hisQQ = false
    }else{
        DgII = data
        hisQQ = true
    }
})

let newItem;
    $: {
    // $crash_historyEl.sort((a, b) => b._id - a._id);
    newItem =  [...$dicegameplays].reverse()
}

</script>

{#if isHelp}
    <Help on:close={handleIsHelp} />
{/if}

{#if is_stats}
    <LiveStats on:close={stats} />
{/if}

{#if isSeed}
<SeedSetting on:close={hanhisSeed}/>
{/if}

{#if is_hotkey}
<Hotkey on:close={handleHotKey} />
{/if}

<div class="sc-lhMiDA ePAxUv" style="opacity: 1; transform: none;">
    <div id="game-Mines" class="sc-haTkiu lmWKWf game-style-mobile sc-bOtlzW bKHexS">
        <div class="game-area">
            <div class="game-main">
                <div class="game-view">
                    <div class="sc-hoHwyw fIoiVG game-recent ">
                        <div class="recent-list-wrap">
                            <div class="empty-item">
                                <p>Game results will be displayed here.</p>
                            </div>
                        </div>
                    </div>
                    <div class="sc-hcupDf dqwCNK game-box sc-jHwEXd fhyNel">
                        <div class="sc-czvZiG CftaC mine-stage">
                            <div class="grids-wrap ">
                                <button disabled="" class="sc-kszsFN iHwDhw grid-item">
                                    <div class="sc-ywFzA iKwybw"></div>
                                </button>
                                <button disabled="" class="sc-kszsFN iHwDhw grid-item">
                                    <div class="sc-ywFzA iKwybw"></div>
                                </button>
                                <button disabled="" class="sc-kszsFN iHwDhw grid-item">
                                    <div class="sc-ywFzA iKwybw"></div>
                                </button>
                                <button disabled="" class="sc-kszsFN iHwDhw grid-item">
                                    <div class="sc-ywFzA iKwybw"></div>
                                </button><button disabled="" class="sc-kszsFN iHwDhw grid-item"><div class="sc-ywFzA iKwybw"></div></button><button disabled="" class="sc-kszsFN iHwDhw grid-item"><div class="sc-ywFzA iKwybw"></div></button>
                                <button disabled="" class="sc-kszsFN iHwDhw grid-item">
                                    <div class="sc-ywFzA iKwybw"></div>
                                </button>
                                <button disabled="" class="sc-kszsFN iHwDhw grid-item">
                                    <div class="sc-ywFzA iKwybw"></div></button><button disabled="" class="sc-kszsFN iHwDhw grid-item"><div class="sc-ywFzA iKwybw"></div></button><button disabled="" class="sc-kszsFN iHwDhw grid-item"><div class="sc-ywFzA iKwybw"></div>
                                    </button>
                                <button disabled="" class="sc-kszsFN iHwDhw grid-item">
                                    <div class="sc-ywFzA iKwybw"></div></button>
                                <button disabled="" class="sc-kszsFN iHwDhw grid-item">
                                    <div class="sc-ywFzA iKwybw"></div>
                                </button>
                                <button disabled="" class="sc-kszsFN iHwDhw grid-item"><div class="sc-ywFzA iKwybw"></div></button><button disabled="" class="sc-kszsFN iHwDhw grid-item">
                                    <div class="sc-ywFzA iKwybw"></div>
                                </button>
                                <button disabled="" class="sc-kszsFN iHwDhw grid-item"><div class="sc-ywFzA iKwybw"></div></button><button disabled="" class="sc-kszsFN iHwDhw grid-item">
                                    <div class="sc-ywFzA iKwybw"></div>
                                </button><button disabled="" class="sc-kszsFN iHwDhw grid-item"><div class="sc-ywFzA iKwybw"></div></button>
                                <button disabled="" class="sc-kszsFN iHwDhw grid-item"><div class="sc-ywFzA iKwybw"></div></button><button disabled="" class="sc-kszsFN iHwDhw grid-item"><div class="sc-ywFzA iKwybw"></div></button><button disabled="" class="sc-kszsFN iHwDhw grid-item"><div class="sc-ywFzA iKwybw"></div></button><button disabled="" class="sc-kszsFN iHwDhw grid-item"><div class="sc-ywFzA iKwybw"></div></button><button disabled="" class="sc-kszsFN iHwDhw grid-item"><div class="sc-ywFzA iKwybw"></div></button><button disabled="" class="sc-kszsFN iHwDhw grid-item"><div class="sc-ywFzA iKwybw"></div></button><button disabled="" class="sc-kszsFN iHwDhw grid-item"><div class="sc-ywFzA iKwybw"></div></button><button disabled="" class="sc-kszsFN iHwDhw grid-item"><div class="sc-ywFzA iKwybw"></div></button></div><div class="sc-kqnjJL bvpiKa"><div class=" star-item index1"></div>
                                <div class=" star-item index2"></div>
                                <div class=" star-item index3"></div>
                                <div class="active  star-item index4"></div>
                            </div>
                        </div>
                        <div class="sc-gLDmcm gnjHQb"><span>House Edge 1%</span></div>
                        <svg class="box-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 996 46"><defs><linearGradient id="gcardBg" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#31343C"></stop><stop offset="100%" stop-color="#1E2024" stop-opacity="0"></stop></linearGradient></defs><g opacity=".899"><path fill="url(#gcardBg)" fill-rule="evenodd" d="M0 0h996L892 46H96z" opacity=".598" transform="rotate(-180 498 23)"></path></g></svg>
                    </div>  
                </div>
                <div id="Mines-control-0" class="sc-hLVXRe cYiOHZ game-control style-mobile">
                    <div class="sc-iwjdpV ikWSlH radio game-control-switch">
                        <button on:click={()=>handleTabs(1)} class={` ${is_manual ? "is-active" : "" }`}>
                            <div class="label">Manual</div>
                        </button>
                        <button on:click={()=>handleTabs(2)} class={` ${is_manual ? "" : "is-active"}`}>
                            <div class="label">Auto</div>
                        </button>
                    </div>
                {#if is_manual}
                    <MobileManualControllers />
                {:else}
                    <MobileAutoController />
                {/if}
                    
                <div class="game-actions">
                    <button on:click={()=> handleSoundState()} class={`action-item ${playPlayb ? "active" : ""} `}>
                        <Icon src={FiMusic}  size="23"  color={` ${playPlayb ? "rgb(67, 179, 9)" : "rgba(153, 164, 176, 0.6)"} `} title="Music" />
                    </button>
                    <button on:click={()=> playBackground()} class={`action-item ${$soundHandler ? "active" : ""} `}>
                        {#if $soundHandler}
                            <Icon src={TiVolumeDown}  size="23"  color={`rgb(67, 179, 9)`} title="Sound" />
                            {:else}
                            <Icon src={TiVolumeMute}  size="23"  color={`rgba(153, 164, 176, 0.6)`} title="Sound closed" />
                        {/if}
                    </button>
                    <button on:click={handleHotKey} class="action-item  ">
                        <Icon src={BiSolidKeyboard}  size="23"  color={`rgba(153, 164, 176, 0.6)`} title="Hot keys" />
                    </button>
                    <button on:click={hanhisSeed} class="action-item  " id="set_seed">
                        <Icon src={BsEgg}  size="23"  color={`rgba(153, 164, 176, 0.6)`} title="Seed" />
                    </button>
                    <button on:click={stats} class="action-item  ">
                        <Icon src={RiMapGuideFill}  size="23"  color={`rgba(153, 164, 176, 0.6)`} title="Live stat" />
                    </button>
                    <button on:click={handleIsHelp} class="action-item  ">
                        <Icon src={AiOutlineQuestionCircle}  size="23"  color={`rgba(153, 164, 176, 0.6)`} title="Help" />
                    </button>
                </div>
            </div>
            </div>
        </div>

        <div class="sc-cxpSdN kQfmQV tabs game-tabs len-3">
            <div class="tabs-navs">
                <button class="tabs-nav is-active">All Bets</button>
                <button class="tabs-nav">My Bets</button>
                <button class="tabs-nav">Contest</button>
                <div class="bg is-reverse" style="left: 0%; right: 66.6667%;"></div>
            </div>
          <Allbet />
        </div>
    </div>
</div>

<style>
.kQfmQV .tabs-navs {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 2.25rem;
    position: relative;
    border-radius: 1.125rem;
    background-color: rgba(49, 52, 60, 0.7);
}
.lmWKWf .game-tabs .tabs-navs {
    margin-bottom: 0.75rem;
    margin-left: 0.625rem;
    display: inline-flex;
}
.kQfmQV .tabs-nav.is-active {
    color: rgb(245, 246, 247);
    font-weight: bold;
}
.kQfmQV .tabs-navs .bg.is-reverse {
    transition: left 0.2s ease-out 0s, right 0.3s ease-out 0s;
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

.lmWKWf .game-tabs .tabs-navs .tabs-nav {
    width: 5.625rem;
}
.lmWKWf .game-tabs {
    margin-top: 2.5rem;
}

.lmWKWf .game-actions {
    display: flex;
    order: 10;
    -webkit-box-align: center;
    align-items: center;
    height: 4rem;
    position: relative;
}
.lmWKWf .game-actions::before {
    content: "";
    flex: 1 1 0%;
}
.lmWKWf .action-item {
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
.lmWKWf .action-item:hover{
    background: rgba(128, 128, 128, 0.164);
    padding: 5px;
    border-radius: 50%;
}
.ePAxUv {
    margin-top: 4rem;
}
.lmWKWf.game-style-mobile {
    padding: 0.625rem;
}
.lmWKWf {
    min-height: 90vh;
}
.bKHexS .game-area .game-main {
    min-height: 52.5rem;
}
.lmWKWf .game-main {
    position: relative;
    border-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
}
.lmWKWf.game-style-mobile .game-view {
    width: 100%;
    overflow: hidden;
    min-width: 100%;
    border-radius: 1.25rem 1.25rem 0px 0px;
}
.fIoiVG {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 2.75rem;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
}
.fIoiVG .recent-list-wrap {
    flex: 1 1 auto;
    height: 100%;
    margin: 0px 1.5rem;
    overflow: hidden;
    position: relative;
    border-radius: 1.375rem;
}
.fIoiVG .empty-item {
    display: flex;
    width: 100%;
    height: 100%;
    color: rgba(153, 164, 176, 0.6);
    background-color: rgba(122, 128, 140, 0.15);
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 1.375rem;
}
.fIoiVG .empty-item > p {
    margin: 0px;
    padding: 0px 0.75rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.fhyNel {
    flex: 1 1 0%;
    background: url(https://static.nanogames.io/assets/bg.136f0468.png) center center / cover no-repeat;
}
.dqwCNK {
    position: relative;
}
.CftaC {
    height: 90%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
}
.CftaC .grids-wrap {
    margin: 4.375rem auto 0px;
    display: grid;
    grid-template-columns: repeat(5, auto);
    gap: 0.5rem 0.625rem;
    max-width: 33.75rem;
    padding: 1.25rem;
    border-radius: 0.375rem;
    background: rgb(17, 18, 20);
    position: relative;
}
.CftaC .grids-wrap::before {
    content: "";
    position: absolute;
    width: 5.3125rem;
    height: 0.875rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAcCAMAAADGO9TYAAAAzFBMVEUAAABISEgVGRUaHBkfJR8VGRUYHBgXGhcXGxcZHRkVGRUXGxcXGhcYGxcoLiorKysXGhYXGxcaHRoZGxkfHx8aHhoXGhYaHhoaHhoXGxc6QTwaHxoXGhc4QDwXGxc8REA7RD8VGRUaHRk1PTk9Rz8XGhY1OzgbIBs1PDk9Rj89RT89RUEYGxcVGBUaHRktMzEpLiw4Pzs6Qj02PTk0Ozc8RD8+R0EyODUwNjMjJycmKikSFhMsMS8cHx8gIyQeIyAeISIZGx0kKSUhJSPPEBtlAAAALHRSTlMABPUlGo7ww4NT1c6pQDQJvJtgKxH3tnc76IpuWVNI7sB14bQl/umzlmLZeiYE94IAAAJsSURBVFjD1dT7d5owFAfwIFRBFMVHfdXHdH1tEdjqqoIZLfz//9NIfFzC0sh+wLrP4TQeven9nlwACXwdTl8/wXT29Gw1UH7KePbrc7yyv98W38cakoED/XkFprPhs6XID/THlVi5ftg17VG9Iz7Qhxfe2o389cvF0ZjOyfxRN1T+QBcrzsaLCCuNNqtL2kHMlG7FNhREacOHdYrrxcQBsbu+iOR0jjEJvcCgNmojarzYgJ0fO38JvU3BuJic8uPIQgeWewTlgrBuIeR9y7c97j3QcnfuzvNh5mJkm5S5tJauCfhMVwq+92ISRr6X/V28X5yz2+z1FcR78rbhPiZ2cHI5qc/dcvr7yMspOuxxwtg/X82aQx8WU4eYKRUslpx+X+n0Bhg40FnCJ5hhbVnerXQbwWndil5vILGyICZ75PYaozlOCbf+GSEWcOgN8QECVaY+YTHFVJwxt1sqV6G0qjiFxFsJCCrMK9rrYMa8mXSQlIHBfdW+04RFJtcy/ChofGgrzxtmotKYBosppy+XeImTS14+qdCaYy0mv0UIq6FKzTJdjvWZlQZ+O+2qGRrK5Zb+4wq7R+T6tBK8k7cMgk8/1pLmmqEneSXoAdN9dZRTNXnQIaaUVbvnWr2TNAhaheaqcXMmL3b6KCcF/QPVLvFHewJBS1+U7K47aV4LFSN50fKnAkFh9oDLWyldKCq8u8zsDJeC2efP20YFqu+fsGAZJBesMPsceWG/iooBN21wAHFh9ue1W0negFFRwTr6IOBIZi/Ja5YCDRWu0apCUMns5ZR2A13CpMlystlfvbZdYrP/L2g6zL5QfwACtwc45qOUEQAAAABJRU5ErkJggg==) center center / contain no-repeat;
    z-index: 1;
    top: -0.125rem;
    left: 0px;
}
.iHwDhw {
    width: 5.75rem;
    height: 5.25rem;
    position: relative;
}
.iKwybw {
    position: absolute;
    inset: 0px;
    z-index: 1;
    border-radius: 0.25rem;
    background-color: rgb(33, 35, 40);
}
.iKwybw::before {
    content: "";
    position: absolute;
    inset: 0px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 80%;
}
.bvpiKa {
    position: absolute;
    left: 0px;
    bottom: -20px;
    right: 0px;
    height: 50px;
}
.bvpiKa .index1 {
    transform: translateX(-280px);
}
.bvpiKa .star-item {
    width: 0.625rem;
    height: 0.625rem;
    position: absolute;
    left: 50%;
    top: 50%;
}
.bvpiKa .index1::before {
    animation-delay: 100ms;
}
.bvpiKa .star-item::before {
    content: "";
    position: absolute;
    inset: 0px;
}
.bvpiKa .index2 {
    transform: translate(-260px, -10px);
}
.bvpiKa .active::before {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAJFJREFUGBljYEAD////5wLieDRhTC5QUSkQn8KUQRIBKuAG4ldADALySFIMTCAOUJARiMWAzCogFgWJAUEUhIKSQAUhQPwCiLGBo0DBOCDmYGJkZFwD1KMFxH1A/BOqH0S9AOJ7QMwIxHxAjABAnVVQY48gRLGwgIp0oAojsEijCgEVgtzFiiqKhQdUpIhFmAEAiABrq/Lg4u0AAAAASUVORK5CYII=) center center / contain no-repeat;
    animation: 1.5s linear 0s 1 normal both running star;
}
.CftaC .grids-wrap::after {
    content: "";
    position: absolute;
    top: -2.1875rem;
    right: 0.125rem;
    width: 11rem;
    height: 3.625rem;
    background: url(https://static.nanogames.io/assets/box-bg2.75183067.png) center center / contain no-repeat;
}
.gnjHQb {
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
.cYiOHZ.style-mobile {
    flex-direction: column;
}
.cYiOHZ {
    display: flex;
}
.cYiOHZ.style-mobile .game-control-switch {
    order: 2;
    margin-top: 1.25rem;
    position: relative;
}
.cYiOHZ .game-control-switch {
    display: flex;
    flex: 0 0 auto;
}
.ikWSlH {
    display: flex;
    opacity: 1;
}
.cYiOHZ.style-mobile .game-control-panel {
    padding: 0px 1.125rem;
}
.cYiOHZ .game-control-panel {
    flex: 1 1 0%;
}
.cYiOHZ .input-control {
    background-color: rgba(49, 52, 60, 0.4);
}
.cYiOHZ.style-mobile .game-control-switch::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    height: 1px;
    opacity: 0.3;
    background-color: rgb(49, 52, 60);
}
.cYiOHZ.style-mobile .game-control-switch::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    height: 1px;
    opacity: 0.3;
    background-color: rgb(49, 52, 60);
}
.cYiOHZ.style-mobile .game-control-switch > button {
    height: 3rem;
    border-bottom: 2px solid transparent;
}
.cYiOHZ .game-control-switch > button.is-active {
    color: rgb(245, 246, 247);
    font-weight: bold;
}
.cYiOHZ .game-control-switch > button {
    flex: 1 1 0%;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
}
.cYiOHZ.style-mobile .game-control-switch > button.is-active {
    border-bottom-color: rgb(67, 179, 9);
    background-image: linear-gradient(to top, rgba(123, 197, 20, 0.3), rgba(123, 197, 20, 0) 50%);
}

.cHwSyr {
    margin-bottom: 1.25rem;
}



@media screen and (max-width: 621px){
.CftaC .grids-wrap {
    height: 100%;
    margin: 2.5rem auto 3.75rem;
    gap: 0.3125rem 0.375rem;
}
.iHwDhw {
    width: 3.125rem;
    height: 2.8125rem;
    position: relative;
}
.gnjHQb span {
    font-size: 0.75rem;
    transform: scale(0.83);
}
}



</style>