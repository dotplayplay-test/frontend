<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import { createEventDispatcher } from 'svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import RiSystemArrowLeftSLine from "svelte-icons-pack/ri/RiSystemArrowLeftSLine";
import About from '$lib/crashgame/components/help/about.svelte';
import Fairness from '$lib/crashgame/components/help/fairness.svelte';
import Backroll from '$lib/crashgame/components/help/backroll.svelte';
import HelpTrendball from '$lib/crashgame/components/help/helpTrendball.svelte';
import { browser } from '$app/environment'
import Helpautocashout from '$lib/crashgame/components/help/helpautocashout.svelte';
const dispatch = createEventDispatcher()

const handleCloseHelp = (()=>{
    dispatch("close", 5)
})

let isAbout = false
let isDefault = true
let isFairness = false
let isBankroll = false
let isTrendball = false
let isAutoCashout = false
const handleAbout = (()=>{
    if(isAbout){
        isAbout = false
    }else{
        isDefault = false
        isAbout = true
    }
})
const handleFairness = (()=>{
    if(isFairness){
        isFairness = false
    }else{
        isDefault = false
        isFairness = true
    }
})
const handleBankrol = (()=>{
    if(isBankroll){
        isBankroll = false
    }else{
        isDefault = false
        isBankroll = true
    }
})

const handleAutoCashout = (()=>{
    if(isAutoCashout){
        isAutoCashout = false
    }else{
        isAutoCashout = true
        isDefault = false
    }
})

const handleTrendball = (()=>{
    if(isTrendball){
        isTrendball = false
    }else{
        isTrendball = true
        isDefault = false
    }
})

const handleGoBack = (()=>{
    isDefault = true
    isAbout = false
    isFairness = false
    isBankroll = false
    isAutoCashout = false
    isTrendball = false
})

let is_mobile = true
$:{
    if (browser && window.innerWidth < 650) {
        is_mobile = true
    }
    else {
        is_mobile = false
    }
}


</script>

<div class="sc-bkkeKt kBjSXI">
   <div class="dialog " style={is_mobile ? "" : "opacity: 1; width: 464px; height: 631px; margin-top: -315.5px; margin-left: -232px;"}>
    
    {#if !isDefault}
        <button on:click={handleGoBack} class="dialog-back" style="opacity: 1; transform: none;">
            <Icon src={RiSystemArrowLeftSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
        </button>
    {/if}

    <div class={`dialog-head ${!isDefault ? "has-back" : ""} has-close`}>
        {#if isDefault}
            <div class="dialog-title">Help</div>
            {:else if isAbout}
            <div class="dialog-title">What Game Is This?</div>
            {:else if isFairness}
            <div class="dialog-title">Fairness</div>
            {:else if isBankroll}
            <div class="dialog-title">Bankroll</div>
            {:else if isAutoCashout}
            <div class="dialog-title">Auto cash out</div>
            {:else if isTrendball}
            <div class="dialog-title">Trend</div>
        {/if}
    </div>
    <button on:click={()=> handleCloseHelp()}  class="sc-ieecCq fLASqZ close-icon dialog-close">
        <Icon src={IoCloseSharp}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
    </button>
    {#if isDefault}
    <div class="dialog-body default-style " style="z-index: 2; transform: none;">
        <div class="sc-dkPtRN jScFby scroll-view sc-dYtuZ cWluKW">
                <div class="help-list">
                    <button on:click={handleAbout}>
                        <span>What Game Is This?</span>
                        <Icon src={RiSystemArrowRightSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
                    </button>
                    <button on:click={handleFairness}>
                        <span>Fairness</span>
                        <Icon src={RiSystemArrowRightSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
                    </button>
                    <button on:click={handleBankrol}>
                        <span>Bankroll</span>
                        <Icon src={RiSystemArrowRightSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
                    </button>
                    <button on:click={handleAutoCashout}>
                        <span>Auto cash out</span>
                        <Icon src={RiSystemArrowRightSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
                    </button>
                    <button on:click={handleTrendball}>
                        <span>Trenball</span>
                        <Icon src={RiSystemArrowRightSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
                    </button>
                </div>
            </div>
    </div>
    {/if}

    {#if isAbout}
        <About />  
    {/if}

    {#if isFairness}
        <Fairness />
    {/if}

    {#if isBankroll}
        <Backroll />
    {/if}
    {#if isAutoCashout}
        <Helpautocashout />
    {/if}
    {#if isTrendball}
        <HelpTrendball />
    {/if}

   </div>
</div>

<style>
.dialog-head.has-close {
    margin-right: 3.75rem;
}

@media only screen and (max-width:650px){
.dialog {
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    margin:0px;
    transition-property: width, height, margin-left, margin-top;
    transition-duration: 0.5s;
    border-radius: 1.25rem;
    overflow: hidden;
    background-color: rgb(23, 24, 27);
}
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
.default-style > div {
    border-radius: 20px;
    background-color: rgb(30, 32, 36);
    padding: 1.25rem 1.25rem 0px;
}
.dialog-body > div {
    flex: 1 1 0%;
}
.jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
}
.cWluKW .help-list {
    margin-top: 0.5rem;
}
.cWluKW .help-list > button {
    background-color: rgb(23, 24, 27);
    border-radius: 1.25rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 3.5rem;
    width: 100%;
    padding: 0px 1.25rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
}
.cWluKW .help-list > button:hover{
    color: #fff;
}
.dialog-back {
    position: absolute;
    left: 0px;
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
.dialog-head.has-close {
    margin-right: 3.75rem;
}
.dialog-head.has-back {
    margin-left: 3.125rem;
}
</style>