<script>
    import { crashRunning, crashCurve} from "../store"
</script>

<div class="running crash">
    <div class="bhuSSkjs">
        <div>{$crashRunning}x</div>
    </div>
    <img style="bottom: -3.4%; left: -1%" src={$crashCurve} alt="">
</div>

<style>
   .bhuSSkjs{
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .bhuSSkjs div{
    font-size: 45px;
    margin-bottom: 100px;
    font-weight: bold;
    color: #fff;
   }

   .running.crash img{
    position: absolute;
    max-width: 100%;
   }
</style>