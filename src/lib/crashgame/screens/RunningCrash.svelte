<script>
    import { crashRunning, crashCurve} from "../store"
</script>

<div class="running crash">
    <div class="bhuSSkjs">
        <div>{$crashRunning}x</div>
    </div>
    <div class="container">
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
</div>



<style>
.bhuSSkjs{
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
   }
   .bhuSSkjs div{
    font-size: 45px;
    margin-bottom: 100px;
    font-weight: bold;
    color: #fff;
   }


/* .circle-head{
    position: absolute;
    width: 17px;
    height: 17px;
    background: #fff;
    border-radius: 50%;
    z-index: 10;
} */
.container{
    position: absolute;
    bottom: -6%;
    left: -1%;
}
   
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