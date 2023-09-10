<script>

import {handleCountdown } from "$lib/crashgame/socket"
handleCountdown()
import { crashPoint , crashRunning ,Load_animation, TrackTwo,animateCrashCurve, crashLoad, loadingCrash, crashIsAlive, hasCrashed } from "$lib/crashgame/store"
import {
    Stage,
    Layer,
    Text,
    Rect,
    Line,
    Image
} from "svelte-konva";

let v2 = 10
let v3 = -10

let handleVerticalLoop = setInterval(()=>{
    if(v2 > 150 && v2 < 200){
        v2 += 0.1
    }
    else if(v2 > 200 && v2 < 230){
        v2 += 0.04
    }else if (v2 > 230){
        clearInterval(handleVerticalLoop)
    }
    else{
        v2 += 0.2
    }
}, 10)

let width = 690
let height = 310
let objWidth = 220

</script>


<div class="chart-crash">
<Stage config={{ width: width, height:height }}>
    <Layer>

        {#if $hasCrashed}
            <Text config={{
                text: `${$crashPoint}x`,
                fontSize: 50,
                fill: 'rgb(237, 99, 0)',
                x: width / 2 - 70,
                y: 90,
                fontStyle: '700',
                fontFamily: 'Poppins',
            }}/>

            <Rect config={{
                x: width / 2 - 140 / 2,
                y: 140,
                width: 140,
                height: 28,
                fill: '#3a3940',
                cornerRadius: 3,
            }}/>
            <Text config={{
                text: `crashed`,
                fontSize: 20,
                fill: 'rgb(237, 99, 0)',
                x: width / 2 - 40,
                y: 145,
                fontStyle: '500',
                fontFamily: 'Poppins',
            }}/>
        {/if}
    <!-- ======================================== is_alive curve ============================= -->
        {#if $crashIsAlive}
            <Text config={{
                text: `${$crashRunning}x`,
                fontSize: 50,
                fill: '#ffff',
                x: width / 2 - 50,
                y: 100,
                fontStyle: '700',
                fontFamily: 'Poppins',
            }}/>
        {/if}
 

    <!-- ========================================== Starting load ========================= -->

    {#if $loadingCrash}
        <Rect config={{
            x: width / 2 - objWidth / 2,
            y: 130,
            width: objWidth,
            height: 38,
            fill: '#3a3940',
            cornerRadius: 3,
        }}/>
        <Rect config={{
            x: width / 2 - objWidth / 2,
            y: 130,
            width: $Load_animation,
            height: 38,
            fill: '#43b309',
            shadowBlur: 30,
            cornerRadius: 3,
        }}/>

        <Text config={{
            text: `Starts in ${$crashLoad}s`,
            fontSize: 19,
            fill: '#ffff',
            shadowBlur: 1,
            x: 270,
            y: 139,
            fontStyle: '400',
            fontFamily: 'Poppins',
        }}/> 
    {/if}


 <!-- =========================================== Default vertical position ======================================== -->

 <Text config={{
    text: '0',
    fontSize: 14,
    fill: '#4b4a4f',
    shadowBlur: 1,
    x: 22,
    y: 298.5,
    fontStyle: '400',
    fontFamily: 'Poppins',
}}/> 

<Text config={{
    text: '2',
    fontSize: 14,
    fill: '#4b4a4f',
    shadowBlur: 1,
    x: 125,
    y: 298.5,
    fontStyle: '400',
    fontFamily: 'Poppins',
}}/> 

<Text config={{
    text: '4',
    fontSize: 14,
    fill: '#4b4a4f',
    shadowBlur: 1,
    x: 239,
    y: 298.5,
    fontStyle: '400',
    fontFamily: 'Poppins',
}}/> 

<Text config={{
    text: '6',
    fontSize: 14,
    fill: '#4b4a4f',
    shadowBlur: 1,
    x: 357,
    y: 298.5,
    fontStyle: '400',
    fontFamily: 'Poppins',
}}/> 

<Text config={{
    text: '8',
    fontSize: 14,
    fill: '#4b4a4f',
    shadowBlur: 1,
    x: 475,
    y: 298.5,
    fontStyle: '400',
    fontFamily: 'Poppins',
}}/> 

<!-- <img src="https://www.linkpicture.com/q/prate1.png" type="image"> -->

 <!-- ===========================================  vertical position ======================================== -->


<!-- ============== v3 =============== -->
  <Text config={{
    text: '3x',
    fontSize: 12,
    fill: '#4b4a4f',
    shadowBlur: 1,
    x: 10 ,
    y: 0 + v3,
    fontStyle: '400',
    fontFamily: 'Poppins',
}}/> 

<Line config={{
    x: 30,
    y: 5 + v3,
    points: [0, 0, 35 - 30, 0],
    tension: 0.5,
    closed: true,
    stroke: '#ffffff0e',
}}/>


 <!-- ============== r2 =============== -->
    <Text config={{
        text: '2x',
        fontSize: 12,
        fill: '#4b4a4f',
        shadowBlur: 1,
        x: 10 ,
        y: 0 + v2,
        fontStyle: '400',
        fontFamily: 'Poppins',
    }}/> 

    <Line config={{
        x: 30,
        y: 5 + v2,
        points: [0, 0, 35 - 30, 0],
        tension: 0.5,
        closed: true,
        stroke: '#ffffff0e',
    }}/>

<!-- ========= default =============== -->
        <!-- <Line config={{
            x: 30,
            y: 59,
            points: [0, 0, 35 - 30, 0],
            tension: 0.5,
            closed: true,
            stroke: '#ffffff0e',
        }}/>

        <Text config={{
            text: '1.8x',
            fontSize: 12,
            fill: '#4b4a4f',
            shadowBlur: 1,
            x: 5,
            y: 52.5,
            fontStyle: '400',
            fontFamily: 'Poppins',
        }}/> 

        <Line config={{
            x: 30,
            y: 118,
            points: [0, 0, 35 - 30, 0],
            tension: 0.5,
            closed: true,
            stroke: '#ffffff0e',
        }}/>

        <Text config={{
            text: '1.6x',
            fontSize: 12,
            fill: '#4b4a4f',
            shadowBlur: 1,
            x: 5,
            y: 111.5,
            fontStyle: '400',
            fontFamily: 'Poppins',
        }}/> 

        <Line config={{
            x: 30,
            y: 177,
            points: [0, 0, 35 - 30, 0],
            tension: 0.5,
            closed: true,
            stroke: '#ffffff0e',
        }}/>

        <Text config={{
            text: '1.4x',
            fontSize: 12,
            fill: '#4b4a4f',
            shadowBlur: 1,
            x: 5,
            y: 170.5,
            fontStyle: '400',
            fontFamily: 'Poppins',
        }}/> 

        <Line config={{
            x: 30,
            y: 236,
            points: [0, 0, 35 - 30, 0],
            tension: 0.5,
            closed: true,
            stroke: '#ffffff0e',
        }}/>

        <Text config={{
            text: '1.2x',
            fontSize: 12,
            fill: '#4b4a4f',
            shadowBlur: 1,
            x: 5,
            y: 230.5,
            fontStyle: '400',
            fontFamily: 'Poppins',
        }}/>  -->



<!-- ============================================ two horizontal lines ================================================ -->

        <Line config={{
            x: 30,
            y: 0,
            points: [0, 0, 0, height - 15],
            tension: 0.5,
            closed: true,
            stroke: '#ffffff0e',
        }}/>
        <Line config={{
            x: 30,
            y: height - 15,
            points: [0, 0, width - 30, 0],
            tension: 0.5,
            closed: true,
            stroke: '#ffffff0e',
        }}/>

    </Layer>
</Stage>
</div>
