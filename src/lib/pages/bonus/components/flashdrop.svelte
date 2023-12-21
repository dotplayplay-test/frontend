<script>
import VipLevel from '../../vip/components/vipLevel.svelte';

let is_active = false
const handleCancel = (()=>{
    is_active = !is_active
})
</script>
    
    {#if is_active}
        <VipLevel on:close={handleCancel}/> 
    {/if}
    
<div class="sc-bOtlzW dIGSON shitcode">
    <div class="flex flex-center">
        <div class="title ttu bold" style="color: white; font-size:18px; font-weight:600; margin-top: 30px">Flash drop</div>
        <div class="detail">
            <button>Details</button>
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                <use xlink:href="#icon_Arrow"></use>
            </svg>
        </div>
    </div>
    <div class="desc">Redeem shitcodes to unlock crypto rewards</div>
    <div class="flex-center wrap">
    <input type="text" name="textInput">

        <button class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal" disabled="">
            <div class="button-inner">Redeem Now</div>
        </button>
    </div>
</div>
        
<style>
.sc-bOtlzW {
    height: auto;
}
.shitcode {
    flex: 1 1 33%;
    margin-right: 1.3rem;
}
.dIGSON {
    height: 15.25rem;
   border-radius: 0.5rem;
    overflow: hidden;
    padding: 0.91rem 1.25rem;
    background:#1C1E22 ;
    color: grey;
    font-size: 0.75rem;
    display: flex;
    flex-direction: column;
    
}
.dIGSON .flex {
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.flex {
    display: flex;
}
.sc-bOtlzW .flex .title {
    font-size: 1.9rem;
}
.dIGSON .detail {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
}
.dIGSON .desc {
    margin-top: 0.25rem;
    line-height: 1.43;
    flex: 1 1 0%;
    max-width: 60%;
}
.wrap {
    display: block;
}
  input {
         width: 35vw;
            padding: 10px; 
            margin-bottom: 18px;
            height: 7vh;
            background-color:#24262B;
            border: none;
        }
    
 .button {
    width: 15vw;
    height: 3rem;
    padding: 0px 1.25rem;
    color: black;
    background-color: rgba(255, 230, 0, 0.904);
    border-radius: 5rem;
}

.sc-bOtlzW  .button {
    /* width: 12.75rem; */
    margin: 0px auto;
}
</style>