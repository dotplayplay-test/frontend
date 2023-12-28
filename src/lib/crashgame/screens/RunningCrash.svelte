<script>
import { screen, is_open__Appp, is_open__chat } from "$lib/store/screen";
import { crashRunning, crashCurve} from "../store"
import { browser } from '$app/environment';

let is_mobile = false
$:{
    if (browser && window.innerWidth < 650) {
        is_mobile = true
    }
    else {
        is_mobile = false
    }
}

</script>

<div class="running crash">
    <div class="bhuSSkjs">
        <div class="snownd">{(parseFloat($crashRunning)).toFixed(2)}x</div>
    </div>
    
{#if !is_mobile}
    <div class="container" >
      <svg xmlns="http://www.w3.org/2000/svg" width="623" height="309" viewBox="0 0 623 309" fill="none">
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
      </svg>
    </div>
  {:else}
  <div class="container" style="background-color: red; width; 100%; height:100vh">
    <svg width="405" height="201" viewBox="0 0 405 201" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_166_4)">
      <path d="M5 189C269 180.5 350 130.5 397 2" stroke="url(#paint0_linear_166_4)" stroke-width="8"/>
      </g>
      <defs>
      <filter id="filter0_d_166_4" x="0.871277" y="0.625977" width="403.885" height="200.372" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_166_4"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_166_4" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear_166_4" x1="164.205" y1="181.185" x2="337.541" y2="94.6536" gradientUnits="userSpaceOnUse">
      <stop stop-color="#E2E2E2"/>
      <stop offset="0.9933" stop-color="#508B56"/>
      </linearGradient>
      </defs>
      </svg>
  </div>
{/if}

</div>

<style>

@media only screen and (max-width : 650px){
  .bhuSSkjs{
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
   }
  .bhuSSkjs .snownd{
    font-size: 30px;
    word-wrap: normal;
    letter-spacing: 0.5rem;
    font-weight: bold;
    color: #fff;
    text-align: justify;
    font-family: 'Roboto Mono', monospace;
    white-space: 1;
    font-weight: 700;
    font-stretch: expanded;
   }
  .container{
    position: absolute;
    bottom: 0%;
    left: 0%;
}
.bhuSSkjs div{
    font-size: 23px;
    margin-bottom: 30px;
    word-wrap: normal;
    letter-spacing: 0.5rem;
    font-weight: bold;
    color: #fff;
    width: 120px;
    white-space: 2;
    font-stretch: expanded;
   }
}

@media only screen and (min-width : 650px){
  .bhuSSkjs{
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      gap: 10px;
      justify-content: center;
      align-items: center;
      z-index: 10;
   }
   .bhuSSkjs .snownd{
    font-size: 40px;
    margin-bottom: 100px;
    word-wrap: normal;
    letter-spacing: 0.5rem;
    font-weight: bold;
    color: #fff;
    text-align: justify;
    width: 100px;
    font-family: 'Roboto Mono', monospace;
    white-space: 1;
    font-stretch: expanded;
   }
   .container{
    position: absolute;
    bottom: -6%;
    left: -1%;
}

}

/* .circle-head{
    position: absolute;
    width: 17px;
    height: 17px;
    background: #fff;
    border-radius: 50%;
    z-index: 10;
} */

   
/* .crossline{
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.356);
   transform: rotate(-24.1deg);
   transform-origin: top left;
   border-top: 6px solid #fff;
   position: absolute;
   z-index: 8;
   bottom: -1.1%;
   border-radius: 5px;
   left: 0px;
   box-sizing: border-box;
} */

/* .bottom-color-hover{
    position: absolute;
    width: 0; 
    height: 0; 
    border-left: 676px solid transparent;
    border-right: 3px solid transparent;
    bottom: 0;
    border-bottom: 280px solid rgba(20, 177, 20, 0.205);
} */

   /* .running.crash img{
    position: absolute;
    max-width: 100%;
   } */
</style>