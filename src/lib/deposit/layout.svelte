<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import Crypto from './Crypto.svelte';
import { createEventDispatcher } from 'svelte';
    import Fiat from './fiat.svelte';
const dispatch = createEventDispatcher()
let crypto = true
let fiat = false
let buy = false

const handleTabs = ((e)=>{
   if(e === 1){
      crypto = true
      fiat = false
      buy = false
   }
   else if(e === 2){
      crypto = false
      fiat = true
      buy = false
   }
   else if(e === 3){
      crypto = false
      fiat = false
      buy = true
   }
})

const handleCancel = (()=>{
   dispatch("close")
})

</script>

<div class="wdcb8sn ui-dialog-overlayer" style="background-color: rgba(0, 0, 0, 0.667);">
   <div class="ui-dialog-wrap" style="width: 560px; height: 595px; margin-top: -297.5px; margin-left: -280px; opacity: 1; transform: none;">
      <div class="ui-dialog su96gxq" style="opacity: 1; visibility: visible; transform: translateX(0%) scale(1) translateZ(0px);">
         <div class="dialog-head has-close">
            <div class="dialog-title">Deposit</div>
         </div>
         <button on:click={handleCancel} class="close-icon i1gm0mn8 dialog-close">
            <Icon src={IoCloseSharp}  size="23"  color="rgba(153, 164, 176, 0.6)"  />
         </button>
         <div class="ui-tabs tabs-circle">
            <div class="tabs-scroll">
               <div class="tabs-navs">
                  <button on:click={()=>handleTabs(1)} class={`tabs-nav ${crypto ? "is-active" : "" }`}>Crypto</button>
                  <button on:click={()=>handleTabs(2)} class={`tabs-nav ${fiat ? "is-active" : "" }`}>Fiat</button>
                  <button on:click={()=>handleTabs(3)} class={`tabs-nav ${buy ? "is-active" : "" }`}>Buy Crypto</button>
               </div>
            </div>
            <div class="tabs-view" style="transform: none;">
               {#if crypto}
                  <Crypto />
                  {:else if fiat}
                  <Fiat />
               {/if}
               
            </div>
         </div>
      </div> 
      
     
   </div>
</div>

<style>
.ui-dialog-overlayer {
    z-index: 10000;
}
.wdcb8sn {
    position: fixed;
    z-index: 200;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #0000;
}
.ui-dialog {
    position: absolute;
    right: 0;
    top: 0;
    width: 464px;
    height: 720px;
    max-width: 90vw;
    max-height: 90vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow: hidden;
    background-color: var(--7h9g04);
}
.dialog-head .dialog-title {
    font-size: 1rem;
    margin: 0;
    font-weight: 700;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: var(--autofill-color);
    line-height: 1;
}

.ui-dialog-wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 29rem;
    height: 720px;
    margin: -375px 0 0 -280px;
    -webkit-transition-property: width,height,margin-left,margin-top,background-color;
    transition-property: width,height,margin-left,margin-top,background-color;
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
    border-radius: 30px;
    overflow: hidden;
    background-color: #17181b;
    -webkit-transform: translateZ(0),;
    -ms-transform: translateZ(0),;
    transform: translateZ(0),;
}

.i1gm0mn8 {
    --1uvkmwv: #5f6975;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 11;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 3.75rem;
    height: 3.75rem;
}

.i1gm0mn8 {
    --1uvkmwv: #f5f6f7;
}
.su96gxq {
    --1yhspeg: rgba(95,105,117,.8);
    --1ek0mmx: rgba(218,221,230,.5);
    --1b41co8: #F5F6FA;
    --1x7g4w8: #DADDE6;
    --1q3am70: #ffffff;
    --157d7l0: #F6F7FA;
    --1m9vfxv: rgba(0,0,0,.2);
    color: var(--1yhspeg);
    width: 560px;
    height: 800px;
}
.su96gxq {
    --1yhspeg: rgba(153,164,176,.6);
    --1ek0mmx: #1e2024;
    --1b41co8: #17181B;
    --1x7g4w8: #2A2E33;
    --1q3am70: #1f2024;
    --157d7l0: #1E2024;
    --1m9vfxv: rgba(0,0,0,.5);
}
.ui-dialog>div:last-child {
    /* padding: 1.25rem; */
    background-color: #1e2024;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.su96gxq .tabs-scroll {
    padding: 0 2.125rem 0.9375rem;
    background-color: #17181b;
}
.tabs-circle .tabs-navs {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 2.25rem;
    position: relative;
    border-radius: 30px;
    background-color:#24262b;
}
.su96gxq .tabs-navs {
    background-color: #1e2024;
}
.su96gxq .tabs-navs .is-active {
    background-color: #2a2e33;
    border-radius: 30px;
}
.tabs-circle .tabs-nav.is-active {
    background-color: #2d3035;
    color: var(--autofill-color);
    font-weight: 700;
}
.tabs-circle .tabs-nav {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 100%;
    cursor: pointer;
    white-space: nowrap;
    width: 100%;
    z-index: 1;
}
.ui-tabs {
    padding: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}
.su96gxq.ui-dialog>.ui-tabs .tabs-view {
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
    height: 1px;
    padding-top: 1rem;
}
.tabs-circle .tabs-view {
    position: relative;
}

</style>