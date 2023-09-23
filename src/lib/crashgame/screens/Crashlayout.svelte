<script>
import HasCrashed from "./HasCrashed.svelte";
import Loading from "./loading.svelte";
import {crashPoint , crashRunning ,Load_animation,v_ten,
     winning,crashCurve, crashLoad,v_default,v_two,v_three,v_five,v_seven,v_nine, v_twenty, v_fivety, v_hundred, v_Twohundred, 
     v_FiveHundred, v_thousand, 
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


      {#if $v_two}
         <div class="strock" style={`top: ${$v_two + 3.5}%;`}></div>
         <span class="reixxT" style={`top: ${$v_two}%;`}>2x</span>
      {/if}

      {#if $v_three}
      <div class="strock" style={`top: ${$v_three + 3.5}%;`}></div>
      <span class="reixxT" style={`top: ${$v_three}%;`}>3x</span>
      {/if}

      {#if $v_five}
      <div class="strock" style={`top: ${$v_five + 3.5}%;`}></div>
      <span class="reixxT" style={`top: ${$v_five}%;`}>5x</span>
      {/if}

      {#if $v_seven}
      <div class="strock" style={`top: ${$v_seven + 3.5}%;`}></div>
      <span class="reixxT" style={`top: ${$v_seven}%;`}>7x</span>
      {/if}

      {#if $v_nine}
      <div class="strock" style={`top: ${$v_nine + 3.5}%;`}></div>
      <span class="reixxT" style={`top: ${$v_nine}%;`}>9x</span>
      {/if}

      {#if $v_ten}
      <div class="strock" style={`top: ${$v_ten + 3.5}%;`}></div>
      <span class="reixxT" style={`top: ${$v_ten}%;`}>10x</span>
      {/if}

      
      {#if $v_twenty}
      <div class="strock" style={`top: ${$v_twenty + 3.5}%;`}></div>
      <span class="reixxT" style={`top: ${$v_twenty}%;`}>20x</span>
      {/if}

            
      {#if $v_fivety}
      <div class="strock" style={`top: ${$v_fivety + 3.5}%;`}></div>
      <span class="reixxT" style={`top: ${$v_fivety}%;`}>50x</span>
      {/if}

      {#if $v_hundred}
      <div class="strock" style={`top: ${$v_hundred + 3.5}%;`}></div>
      <span class="reixxT" style={`top: ${$v_hundred}%;`}>100x</span>
      {/if}

      {#if $v_Twohundred}
      <div class="strock" style={`top: ${$v_Twohundred + 3.5}%;`}></div>
      <span class="reixxT" style={`top: ${$v_Twohundred}%;`}>200x</span>
      {/if}

      {#if $v_FiveHundred}
      <div class="strock" style={`top: ${$v_FiveHundred + 3.5}%;`}></div>
      <span class="reixxT" style={`top: ${$v_FiveHundred}%;`}>500x</span>
      {/if}

      {#if $v_thousand}
      <div class="strock" style={`top: ${$v_thousand + 3.5}%;`}></div>
      <span class="reixxT" style={`top: ${$v_thousand}%;`}>1000x</span>
      {/if}

      {#if $v_default}
      <div class="strock" style="top: 20%;"></div>
      <div class="strock" style="top: 40%;"></div>
      <div class="strock" style="top: 60%;"></div>
      <div class="strock" style="top: 80%;"></div>
      <span class="reixxT" style="top: 16.5%;">1.8x</span>
      <span class="reixxT" style="top: 36.5%;">1.6x</span>
      <span class="reixxT" style="top: 56.5%;">1.4x</span>
      <span class="reixxT" style="top: 76.5%;">1.2x</span>
      <span class="resshbja" style="top: 99.5%;">0</span>
      {/if}
     
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