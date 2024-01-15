<script>
import { crashLoad, Load_animation} from "../store"

</script>

<div class="bhuSSkjs">
   <div class="nJbsiaks">
      <div class="content">
         <span>Starts in {(parseFloat($crashLoad)).toFixed(2)} s</span>
      </div>
      <div class="load" style={`width: ${$Load_animation}%;`}></div>
   </div>
</div>

<style>
   .bhuSSkjs{
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .bhuSSkjs .nJbsiaks{
      border-radius: 3px;
      position: relative;
      width: 240px;
      height: 32px;
      background: rgba(70, 80, 65, 0.842);
      font-size: 13px;
      color: #ffff;
      font-weight: 700;
      margin-bottom: 40px;
   }
   .bhuSSkjs .nJbsiaks .content{
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      position: absolute;
      align-items: center;
      z-index: 12;
      letter-spacing: 0.1rem;
      text-align: justify;
      font-family: 'Roboto Mono', monospace;
   }
   .nJbsiaks .load{
      background: linear-gradient(90deg, #43B309 59.12%, rgba(74, 125, 48, 0.54) 80.17%);
      position: absolute;
      top: 0;
      border-radius: 3px;
      z-index: 10;
      height: 100%;
   }
</style>