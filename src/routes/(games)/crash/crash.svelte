<script>
import { io } from "socket.io-client";
import {RealTimeURl} from "$lib/backendUrl"
const URL = RealTimeURl()
const socket = io(`${URL}`);
import { onMount, tick } from "svelte";

let runnfs ;
let countdowWe ;
onMount(async()=>{
    socket.on("running-crash", data=>{
        runnfs = data
    })

    socket.on("countdown", data=>{
        countdowWe = data
    })
})


import { default_Wallet } from "$lib/store/coins"
import { crashPoint , crashRunning ,Load_animation, winning,crashCurve, crashLoad,
      loadingCrash,winningEl, crashIsAlive, hasCrashed } from "$lib/crashgame/store"
import {
    Stage,
    Layer,
    Text,
    Rect,
    Line,
    Image
} from "svelte-konva";
import {
    browser
} from '$app/environment'
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

let image = null;
onMount(() => {
    const img = document.createElement("img");
    img.src = `<svg xmlns="http://www.w3.org/2000/svg" width="623" height="309" viewBox="0 0 623 309" fill="none">
          <g filter="url(#filter0_d_160_5)">
            <path d="M5 297C272 270.5 519 133 615 3" stroke="url(#paint0_linear_160_5)" stroke-width="4"/>
          </g>
          <defs>
            <filter id="filter0_d_160_5" x="0.60498" y="0.623779" width={$crashCurve} height="308.357" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_160_5"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_160_5" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_160_5" x1="252.742" y1="284.714" x2="523.573" y2="150.893" gradientUnits="userSpaceOnUse">
              <stop stop-color="#E2E2E2"/>
              <stop offset="0.9933" stop-color="#508B56"/>
            </linearGradient>
          </defs>
      </svg>`
    img.onload = () => {
        image = img;
    };
});

let animate = null;
$:{
    onMount(async() => {
        const img = new window.Image;
 
        img.onload = () => {
            animate = img;
        };
    });
}

let width = 690
let height = 310
let objWidth = 220

</script>

<div class="chart-crash">
<Stage config={{ width: width, height:height }}>
    <Layer>
        <!-- {#if $winning}
            <Text config={{
                text: `${($winningEl).toFixed(2)} ${$default_Wallet.coin_name} `,
                fontSize: 25,
                fill: '#ffff',
                shadowBlur: 1,
                x: 357,
                y: 50.5,
                fontStyle: '600',
                fontFamily: 'Helvetica',
            }}/> 
            <Text config={{
                text: 'You won',
                fontSize:28,
                fill: '#43b309',
                shadowBlur: 1,
                x: 230,
                y: 50.5,
                fontStyle: '600',
                fontFamily: 'Helvetica',
            }}/> 
            <Image config={{
                x:213,
                y:70,
                width: 272,
                height: 160,
                image
            }} />
        {/if} -->

        <!-- <Image config={{
            x:23,
            y:70,
          
            image:animate
        }} /> -->

        <!-- {#if $hasCrashed}
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
        {/if} -->
    <!-- ======================================== is_alive curve ============================= -->
        <!-- {#if $crashIsAlive} -->
            <Text config={{
                text: `${runnfs}x`,
                fontSize: 50,
                fill: '#ffff',
                x: width / 2 - 50,
                y: 100,
                fontStyle: '700',
                fontFamily: 'Poppins',
            }}/>
        <!-- {/if} -->
 

    <!-- ========================================== Starting load ========================= -->

    <!-- {#if $loadingCrash}
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
    {/if} -->


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
