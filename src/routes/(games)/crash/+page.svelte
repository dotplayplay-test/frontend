<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemMenuUnfoldFill from "svelte-icons-pack/ri/RiSystemMenuUnfoldFill";
import "../.../../../../styles/crash/main.css"
import Allbet from "./allbet.svelte";
import Main from "./main.svelte";
import Mybet from "./mybet.svelte";
import MobileMain from './mobileMain.svelte';

let isClassic = true
const handleNavigation = ((w) => {
    if (w === 1) {
        isClassic = true
    }else{
        isClassic = false
    }
})

let is_loading = true
setTimeout(()=>{
    is_loading = false
},3000)

let hide_trends = false
const handleTrends = (()=>{
    hide_trends = !hide_trends
})

</script>

{#if is_loading}
    <div class="shWnixNNx animate">
        <div class="gcfyxdtx">
            <img src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697892621/5cRX6a9bi-removebg-preview_rvporq.png" alt="">
        </div>
    </div>
    {:else}
    <div id="main">
        <div class="sc-lhMiDA ePAxUv" style="opacity: 1; transform: none;">
            <div id="game-crash" class="sc-eZhRLC jDDdCf game-style1 sc-eDtABA deWqiM">
                <div class="sc-gRtYjc bGZULB">
                    <div class="sc-cxpSdN kQfmQV tabs">
                        <div class="tabs-navs">
                            <button on:click={()=>handleNavigation(1)} class={`tabs-nav ${isClassic ? "is-active" : "" } `}>Classic</button>
                            <button on:click={()=>handleNavigation(2)}  class={`tabs-nav ${!isClassic ? "is-active" : "" } `}>Trenball</button>
                            <div class="bg" style={` ${isClassic ?  "left: 0%; right: 50%;" :  "left: 50%; right: 0%;" }`}></div>
                        </div>
                    </div>
                </div>
                <div class="game-area">
                    <Main isClassic={isClassic} />
                    <Allbet isClassic={isClassic} />
                </div>
                <Mybet />
            </div>
        </div>
    </div>

    <div class="mobile">
        <div class="sc-lhMiDA ePAxUv" style="opacity: 1; transform: none;">
            <div id="game-crash" class="sc-gRtYjc iIcxfY game-style-mobile sc-jWULZn KqoAz">
                <div class="sc-UMyrj fghMqx">
                    <div class="sc-cxpSdN kQfmQV tabs">
                        <div class="tabs-navs">
                            <button on:click={()=>handleNavigation(1)} class={`tabs-nav ${isClassic ? "is-active" : "" } `}>Classic</button>
                            <button on:click={()=>handleNavigation(2)}  class={`tabs-nav ${!isClassic ? "is-active" : "" } `}>Trenball</button>
                            <div class="bg" style={` ${isClassic ?  "left: 0%; right: 50%;" :  "left: 50%; right: 0%;" }`}></div>
                        </div>
                    </div>
                    <button on:click={handleTrends} class="sc-cQYgkQ fNKiky flex-center ">
                        <span style="margin-right: 0.375rem; padding:1px 0">
                            <Icon src={RiSystemMenuUnfoldFill}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
                        </span>
                        <div>Trends</div>
                    </button>
                </div>
                <MobileMain hide_trends={hide_trends} isClassic={isClassic}/>
            </div>
        </div>
    </div>
{/if}



<style>
.ePAxUv {
    margin-left: 0rem;
    margin-top: 4rem;
}


.jDDdCf.game-style0, .jDDdCf.game-style1, .jDDdCf.game-style-iframe {
    max-width: 1368px;
    margin: 0px auto;
    padding: 1.25rem 0.625rem;
}  
.bGZULB {
    margin: 0px 0.625rem 0.75rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.kQfmQV .tabs-nav.is-active {
    color: rgb(245, 246, 247);
    font-weight: bold;
}

.bGZULB .tabs {
    display: inline-flex;
    margin-right: auto;
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
.jDDdCf {
    min-height: 90vh;
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
.bGZULB .tabs-nav {
    width: 5.625rem;
}
.game-tabs {
    margin-top: 2.5rem;
}

.shWnixNNx .gcfyxdtx{
    background-color: rgb(25, 27, 33);
    position: fixed;
    width: 100%;
    z-index: 1934;
    height: 100%;
    justify-content: center;
    align-items: center;
}
.shWnixNNx.animate{
    justify-content: center;
    align-items: center;
}
.shWnixNNx img{
    width: 100px;
    margin: 220px  120px;
    animation: dice 5s infinite;
}
@keyframes dice {
    0% {
        transform: translate3d(100px, 0%, 0px);
    }
    30% {
        transform: translate3d(30px, 0%, 0px);
    }
    50% {
        transform: translate3d(0px, 0%, 0px);
    }
    70% {
        transform: translate3d(30px, 0%, 0px);
    }
    100% {
        transform: translate3d(100px, 0%, 0px);
    }
}

@media only screen and ( min-width : 1000px){
    .shWnixNNx img{
    width: 100px;
    margin: 0px;
    justify-self: center;
    position: absolute;
    top: 30%;
    left: 40%;
    animation: dice 4s infinite;
}
@keyframes dice {
    0% {
        transform: translate3d(100px, 0%, 0px);
    }
    30% {
        transform: translate3d(30px, 0%, 0px);
    }
    50% {
        transform: translate3d(0px, 0%, 0px);
    }
    70% {
        transform: translate3d(30px, 0%, 0px);
    }
    100% {
        transform: translate3d(100px, 0%, 0px);
    }
}

}

@media only screen and ( max-width : 650px) {
.ePAxUv {
    margin-top: 8.375rem;
}
.iIcxfY.game-style-mobile {
    padding: 0.625rem;
}
.iIcxfY {
    min-height: 90vh;
}
.fghMqx {
    padding: 0px 0.625rem;
}
.fghMqx {
    margin: 0px 0.625rem 0.75rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.fghMqx .tabs {
    display: inline-flex;
    margin-right: auto;
}
.fNKiky {
    margin-right: 0px;
}
.fNKiky {
    margin-right: 1.5rem;
    color: rgba(153, 164, 176, 0.6);
    min-height: 1.875rem;
    font-size: 1.1rem;
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
.fghMqx .tabs-nav {
    width: 5.625rem;
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
.kQfmQV .tabs-nav.is-active {
    color: rgb(245, 246, 247);
    font-weight: bold;
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
.fghMqx .tabs-nav {
    width: 5.625rem;
}
.fNKiky {
    margin-right: 0px;
}
}

</style>
