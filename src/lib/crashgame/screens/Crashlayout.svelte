<script>
import {handleCountdown} from "../socket"
handleCountdown()
import HasCrashed from "./HasCrashed.svelte";
import Loading from "./loading.svelte";
import {crashPoint , crashRunning ,Load_animation,
     winning,crashCurve, crashLoad,
      loadingCrash,winningEl, crashIsAlive, hasCrashed} from "../store"
    import RunningCrash from "./RunningCrash.svelte";
</script>

<div class="crash-board dvgwiw">
   <div class="crash-chart">

      <!-- Render screens -->
      {#if $loadingCrash}
         <div class="cntsnsnQn">
            <Loading />
         </div>
      {/if}
      {#if $hasCrashed}
         <HasCrashed />
      {/if}
      {#if $crashIsAlive}
      <RunningCrash />
      {/if}


      <div class="strock" style="top: 20%;"></div>
      <div class="strock" style="top: 40%;"></div>
      <div class="strock" style="top: 60%;"></div>
      <div class="strock" style="top: 80%;"></div>
      <span class="reixxT" style="top: 16.5%;">1.8x</span>
      <span class="reixxT" style="top: 36.5%;">1.6x</span>
      <span class="reixxT" style="top: 56.5%;">1.4x</span>
      <span class="reixxT" style="top: 76.5%;">1.2x</span>
      <span class="resshbja" style="top: 99.5%;">0</span>
      <span class="ehoIwNks" style="left: 18%;">2</span>
      <span class="ehoIwNks" style="left: 38%;">4</span>
      <span class="ehoIwNks" style="left: 58%;">6</span>
      <span class="ehoIwNks" style="left: 78%;">8</span>
   </div>
</div>

<style>
.crash-board{
   position: relative;
    width: 100%;
    height: 300px;
}
.crash-board.dvgwiw{
   display: flex;
   justify-content: center;
   align-items: center;
}
.crash-chart{
   width: 95%;
   height: 90%;
   position: absolute;
   border-bottom: 2px solid #ffffff0e;
   border-left: 2px solid #ffffff0e;
}
.strock{
   width: 4px;
   height: 1.4px;
   background: #ffffff0e;
   position: absolute;
}
.reixxT{
   position: absolute;
   font-size: 12px;
   color: #ffffff31;
   margin-left: -25px;
}
.resshbja{
   font-size: 12px;
   position: absolute;
   color: #ffffff31;
   margin-left: -7px;
}
.ehoIwNks{
   font-size: 12px;
   position: absolute;
   color: #ffffff31;
   bottom: -17.89px;
}
.cntsnsnQn{
   position: absolute;
   width: 100%;
   height: 100%;
}
</style>