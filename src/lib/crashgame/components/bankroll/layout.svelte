<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import { createEventDispatcher } from 'svelte';
import "./styles/index.css"
import Overview from './overview.svelte';
import Change from './change.svelte';
import History from './history.svelte';
const dispatch = createEventDispatcher()

const handleClose = (()=>{
    dispatch("close", 5)
})

let isOverview = true
let isChange = false
let isHistory = false

const handleTabs = ((r)=>{
    if(r === 1){
        isOverview = true
        isChange = false
        isHistory = false
    }else if( r ===  2){
        isOverview = false
        isChange = true
        isHistory = false
    }else{
        isOverview = false
        isChange = false
        isHistory = true
    }
})

</script>

<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
    <div class="dialog " style="opacity: 1; width: 464px; height: 631px; margin-top: -315.5px; margin-left: -232px; transform: scale(1) translateZ(0px);">
        <div class="dialog-head has-close">
            <div class="dialog-title">Bankroll</div>
        </div>

        <button on:click={()=> handleClose()}  class="sc-ieecCq fLASqZ close-icon dialog-close">
            <Icon src={IoCloseSharp}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
        </button>

        <div class="dialog-body default-style " style="z-index: 2; transform: none;">
            <div class="sc-cxpSdN kQfmQV tabs sc-hgJWpk dQpZxW">
                <div class="tabs-navs">
                    <button on:click={()=>handleTabs(1)} class={`tabs-nav ${isOverview && `is-active`}  `}>Overview</button>
                    <button on:click={()=>handleTabs(2)} class={`tabs-nav ${isChange && `is-active`}  `}>Change</button>
                    <button on:click={()=>handleTabs(3)} class={`tabs-nav ${isHistory && `is-active`}  `}>History</button>
                    {#if isOverview}
                    <div class="bg is-reverse" style="left: 0%; right: 66.6667%;"></div>
                    {:else if isChange}
                    <div class="bg is-reverse" style="left: 33.3333%; right: 33.3333%;"></div>
                    {:else if isHistory}
                    <div class="bg is-reverse" style="left: 66.6667%; right: 0%;"></div>
                    {/if}
                </div>
                <!-- =============================== slot Contents ============================== -->
                <div class="tabs-view">
                    <div class="sc-dkPtRN jScFby scroll-view jackpot-pane">
                        {#if isOverview}
                            <Overview />
                            {:else if isChange}
                            <Change />
                            {:else if isHistory}
                            <History />
                        {/if}
                    </div>
                </div>
            </div>  
        </div>
    </div>
</div>

<style>
    
</style>