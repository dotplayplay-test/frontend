<script>
import HasCrashed from "./HasCrashed.svelte";
import Loading from "./loading.svelte";
import {
    hasCrashed,
    crashPoint,
    Load_animation,
    crashRunning,
    v_ten,
    crashLoad,
    v_default,
    v_two,
    v_three,
    v_five,
    v_seven,
    v_nine,
    v_twenty,
    v_fivety,
    v_hundred,
    v_Twohundred,
    v_FiveHundred,
    v_thousand,
    h_two,
    h_four,
    h_six,
    h_eight,
    h_ten,
    h_twelve,
    h_fourteen,
    h_sixteen,
    h_eighteen,
    h_twenty,
    h_thirthy,
    h_fourty,
    h_sixty,
    h_eighty,
    h_hundred,
    h_Threehundred,
    h_Sevenhundred,
    h_onethousand,
    loadingCrash,
    winningEl,
    crashIsAlive
} from "../store"
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
        {#if  $crashIsAlive}
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
        <!-- <span class="resshbja" style="top: 99.5%;">0</span> -->
        {/if}

        <span class="ehoIwNks" style={`left: -1.3%`}>0</span>
    
        {#if $h_two}
            <span class="ehoIwNks" style={`left: ${$h_two}%;`}>2</span>
        {/if}

        {#if $h_four}
            <span class="ehoIwNks" style={`left: ${$h_four}%;`}>4</span>
        {/if}

        {#if $h_six}
        <span class="ehoIwNks" style={`left: ${$h_six}%;`}>6</span>
        {/if}
        {#if $h_eight}
        <span class="ehoIwNks" style={`left: ${$h_eight}%;`}>8</span>
        {/if}

        {#if $h_ten}
        <span class="ehoIwNks" style={`left: ${$h_ten}%;`}>10</span>
        {/if}

        {#if $h_twelve}
        <span class="ehoIwNks" style={`left: ${$h_twelve}%;`}>12</span>
        {/if}
        {#if $h_fourteen}
        <span class="ehoIwNks" style={`left: ${$h_fourteen}%;`}>14</span>
        {/if}
        {#if $h_sixteen}
        <span class="ehoIwNks" style={`left: ${$h_sixteen}%;`}>16</span>
        {/if}

        {#if $h_eighteen}
        <span class="ehoIwNks" style={`left: ${$h_eighteen}%;`}>18</span>
        {/if}

        {#if $h_twenty}
        <span class="ehoIwNks" style={`left: ${$h_twenty}%;`}>20</span>
        {/if}

        {#if $h_thirthy}
        <span class="ehoIwNks" style={`left: ${$h_thirthy}%;`}>30</span>
        {/if}

        {#if $h_fourty}
        <span class="ehoIwNks" style={`left: ${$h_fourty}%;`}>40</span>
        {/if}

        {#if $h_sixty}
        <span class="ehoIwNks" style={`left: ${$h_sixty}%;`}>60</span>
        {/if}

        {#if $h_eighty}
        <span class="ehoIwNks" style={`left: ${$h_eighty}%;`}>80</span>
        {/if}

        {#if $h_hundred}
        <span class="ehoIwNks" style={`left: ${$h_hundred}%;`}>100</span>
        {/if}

        {#if $h_Threehundred}
        <span class="ehoIwNks" style={`left: ${$h_Threehundred}%;`}>300</span>
        {/if}

        {#if $h_Sevenhundred}
        <span class="ehoIwNks" style={`left: ${$h_Sevenhundred}%;`}>700</span>
        {/if}

        {#if $h_onethousand}
        <span class="ehoIwNks" style={`left: ${$h_onethousand}%;`}>1000</span>
        {/if} 
    </div>
</div>

<style>
@media only screen and (max-width : 650px){
.crash-board {
    position: relative;
    width: 100%;
    height: 170px; 
}
.crash-board.dvgwiw {
    display: flex;
    justify-content: center;
    align-items: center;
}
.crash-chart {
    width: 90%;
    height: 90%;
    position: absolute;
    border-bottom: 2px solid #ffffff0e;
    border-left: 2px solid #ffffff0e;
}
.strock {
    width: 4px;
    height: 1.4px;
    background: #ffffff0e;
    position: absolute;
}
.reixxT {
    position: absolute;
    font-size: 9px;
    color: #ffffff31;
    margin-left: -20px;
}
/* .resshbja {
    font-size: 9px;
    position: absolute;
    color: #ffffff31;
    margin-left: -7px;
} */
.ehoIwNks {
    font-size: 9px;
    position: absolute;
    color: #ffffff31;
    bottom: -17.89px;
}
.cntsnsnQn {
    position: absolute;
    width: 100%;
    height: 100%;
}
}

@media only screen and (min-width : 650px){
.crash-board {
    position: relative;
    width: 100%;
    height: 300px;
}
.crash-board.dvgwiw {
    display: flex;
    justify-content: center;
    align-items: center;
}

.crash-chart {
    width: 95%;
    height: 90%;
    position: absolute;
    border-bottom: 2px solid #ffffff0e;
    border-left: 2px solid #ffffff0e;
}

.strock {
    width: 4px;
    height: 1.4px;
    background: #ffffff0e;
    position: absolute;
}

.reixxT {
    position: absolute;
    font-size: 12px;
    color: #ffffff31;
    margin-left: -25px;
}

/* .resshbja {
    font-size: 12px;
    position: absolute;
    color: #ffffff31;
    margin-left: -7px;
} */
.ehoIwNks {
    font-size: 12px;
    position: absolute;
    color: #ffffff31;
    bottom: -17.89px;
}
.cntsnsnQn {
    position: absolute;
    width: 100%;
    height: 100%;
}
}







</style>
