<script>

import "../.../../../../styles/crash/main.css"
import Allbet from "./allbet.svelte";
import Main from "./main.svelte";
import Mybet from "./mybet.svelte";

let isClassic = true
const handleNavigation = ((w) => {
    if (w === 1) {
        isClassic = true
    }else{
        isClassic = false
    }
})

</script>

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

<style>
.ePAxUv {
    margin-left: 3.5rem;
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

</style>
