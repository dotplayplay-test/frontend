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
        <div class="title ttu bold" style="margin-top: 30px;">Flash drop</div>
        <div class="detail">
            <span>Details</span>
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                <use xlink:href="#icon_Arrow"></use>
            </svg>
        </div>
    </div>
    <div class="desc">Redeem shitcodes to unlock crypto rewards</div>
    <div class="flex-center wrap">
        <div class="sc-ezbkAF kDuLvp input ">
            <div class="input-control" style="height: 45px;">
                <input type="text" value="" >
            </div>
        </div>
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
    height: 17.3rem;
   border-radius: 0.5rem;
    overflow: hidden;
    padding: 0.91rem 1.25rem;
    background: rgb(23, 24, 27);
    color: rgb(255, 255, 255);
    font-size: 0.875rem;
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
    /* cursor: pointer; */
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
 .input {
    margin: 1.2rem 0px;
    /* border-radius: none; */
    
    
}
 .button {
    width: 35vw;
    height: 3rem;
    padding: 0px 1.25rem;
    color: grey;
    background-color: #24262B;
    border-radius: 0;
}
.sc-bOtlzW  .button {
    /* width: 12.75rem; */
    margin: 0px auto;
}
</style>