<script>
    import { crashRunning, crashCurve} from "../store"
    let count = 0
    let line = 0
    let r = setInterval(()=>{
        if(count < 100){
            count += 0.5
            line += 0.3889
        }
    }, 50)

</script>

<div class="running crash">
    <div class="bhuSSkjs">
        <div>{$crashRunning}x</div>
    </div>

    <!-- <div class="circle-head" style={`bottom:${count}%; left:${count}%`}></div>
    <div class="crossline" style={`width: calc(1.414 * ${line}%);`}></div>
    <div class="bottom-color-hover"></div> -->
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
}
   
.crossline{
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.356);
   transform: rotate(-22.1deg);
   transform-origin: top left;
   border-top: 8px solid #fff;
   position: absolute;
   z-index: 8;
   bottom: 0%;
   left: 0px;
   box-sizing: border-box;
}

.bottom-color-hover{
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