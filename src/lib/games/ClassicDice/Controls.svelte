<script>
import AutoControllers from "./AutoControllers.svelte";
import ManualControllers from "./ManualControllers.svelte";
import {Handles_alive} from "$lib/games/ClassicDice/store/index"

let is_manual = true
const hanleManualControls = ((e)=>{
    if(e === 1){
        is_manual = true
    }else{
        is_manual = false
    }
})
</script>

<div id="ClassicDice-control-0" class="sc-hLVXRe cYiOHZ game-control style0">
    <div class="sc-iwjdpV ikWSlH radio game-control-switch">
        <button disabled={$Handles_alive} on:click={()=> hanleManualControls(1)} class={`${is_manual ? "is-active" : ""} `}>
            <div class="label">Manual</div>
        </button>
        <button disabled={$Handles_alive}  on:click={()=> hanleManualControls(2)} on:click={hanleManualControls} class={`${!is_manual ? "is-active" : ""} `}>
            <div class="label">Auto</div>
        </button>
    </div>
    {#if is_manual}
        <ManualControllers />
    {/if}
    {#if !is_manual}
        <AutoControllers />
    {/if}

</div>

<style>
   
</style>