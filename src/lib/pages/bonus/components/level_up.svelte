<script>
import VipLevel from '../../vip/components/vipLevel.svelte';
import { allcashback } from "../store/index"
let is_active = false
const handleCancel = (()=>{
    is_active = !is_active
})
</script>

{#if is_active}
    <VipLevel on:close={handleCancel}/> 
{/if}

<div class="ba3phvn page-bonus-item">
    <div class="bonus-item-text">
        <div class="bonus-tit">
            <p class="bonus-t">Level Up Rewards</p>
            <div class="t1vk7zf8 tips-wrap">
                <div class="in"></div>
            </div>
        </div>
        <p class="bonus-d">Level up to get exclusive rewards.</p>
        <div class="bonus-desc">
            <p>Current VIP</p>
            <p>VIP{$allcashback.vip_level}</p>
        </div>
        <div class="bonus-desc last">
            <p>XP to Next Level</p>
            <p class=""> {Math.round($allcashback.total_wagered)}/ {$allcashback.next_level_point}</p>
        </div>
        <div class="bonus-desc last">
            <p>Ready to claim</p>
            {#if  $allcashback.vip_level === 0}
            <p class="">-</p>
            {:else if  $allcashback.vip_level === 1}
            <p class="">0.04</p>
            {:else if  $allcashback.vip_level === 2}
            <p class="">0.05</p>
            {:else if  $allcashback.vip_level === 3}
            <p class="">0.10</p>
            {:else if  $allcashback.vip_level === 4}
            <p class="">0.20</p>
            {:else if  $allcashback.vip_level === 5}
            <p class="">0.30</p>
            {:else if  $allcashback.vip_level === 6}
            <p class="">0.35</p>
            {:else if  $allcashback.vip_level === 7}
            <p class="">0.70</p>
            {:else if  $allcashback.vip_level === 8}
            <p class="">0.80</p>
            {:else if  $allcashback.vip_level === 9}
            <p class="">0.90</p>
            {:else if  $allcashback.vip_level === 10}
            <p class="">1.00</p>
            {:else if  $allcashback.vip_level === 11}
            <p class="">1.10</p>
            {:else if  $allcashback.vip_level === 12}
            <p class="">1.20</p>
            {:else if  $allcashback.vip_level === 13}
            <p class="">1.30</p>
            {:else if  $allcashback.vip_level === 14}
            <p class="">1.40</p>
            {:else if  $allcashback.vip_level === 15}
            <p class="">1.50</p>
            {:else if  $allcashback.vip_level === 16}
            <p class="">1.60</p>
            {:else if  $allcashback.vip_level === 17}
            <p class="">1.70</p>
            {:else if  $allcashback.vip_level === 18}
            <p class="">1.80</p>
            {:else if  $allcashback.vip_level === 19}
            <p class="">1.90</p>
            {:else if  $allcashback.vip_level === 20}
            <p class="">2.00</p>
            {:else if  $allcashback.vip_level === 21}
            <p class="">3.00</p>
            {:else if  $allcashback.vip_level === 22}
            <p class="">4.00</p>
            {:else if  $allcashback.vip_level === 23}
            <p class="">5.00</p>
            {:else if  $allcashback.vip_level === 24}
            <p class="">6.00</p>
            {:else if  $allcashback.vip_level === 25}
            <p class="">7.00</p>
            {:else if  $allcashback.vip_level === 26}
            <p class="">8.00</p>
            {:else if  $allcashback.vip_level === 27}
            <p class="">9.00</p>
            {:else if  $allcashback.vip_level === 28}
            <p class="">10.00</p>
            {:else if  $allcashback.vip_level === 29}
            <p class="">12.00</p>
            {:else if  $allcashback.vip_level === 30}
            <p class="">14.00</p>
            {:else if  $allcashback.vip_level === 31}
            <p class="">16.00</p>
            {:else if  $allcashback.vip_level === 32}
            <p class="">18.00</p>
            {:else if  $allcashback.vip_level === 33}
            <p class="">20.00</p>
            {:else if  $allcashback.vip_level === 34}
            <p class="">22.00</p>
            {:else if  $allcashback.vip_level === 35}
            <p class="">24.00</p>
            {:else if  $allcashback.vip_level === 36}
            <p class="">26.00</p>
            {:else if  $allcashback.vip_level === 37}
            <p class="">30.00</p>
            {:else if  $allcashback.vip_level === 38}
            <p class="">35.00</p>
            {:else if  $allcashback.vip_level === 39}
            <p class="">40.00</p>
            {:else if  $allcashback.vip_level === 40}
            <p class="">50.00</p>
            {:else if  $allcashback.vip_level === 41}
            <p class="">60.00</p>
            {:else if  $allcashback.vip_level === 42}
            <p class="">70.00</p>
            {:else if  $allcashback.vip_level === 43}
            <p class="">80.00</p>
            {:else if  $allcashback.vip_level === 44}
            <p class="">90.00</p>
            {:else if  $allcashback.vip_level === 45}
            <p class="">100.00</p>
            {:else if  $allcashback.vip_level === 46}
            <p class="">110.00</p>
            {:else if  $allcashback.vip_level === 47}
            <p class="">120.00</p>
            {:else if  $allcashback.vip_level === 48}
            <p class="">130.00</p>
            {:else if  $allcashback.vip_level === 49}
            <p class="">140.00</p>
            {:else if  $allcashback.vip_level === 50}
            <p class="">150.00</p>
            {:else if  $allcashback.vip_level === 51}
            <p class="">160.00</p>
            {:else if  $allcashback.vip_level === 52}
            <p class="">170.00</p>
            {:else if  $allcashback.vip_level === 53}
            <p class="">180.00</p>
            {:else if  $allcashback.vip_level === 54}
            <p class="">190.00</p>
            {:else if  $allcashback.vip_level === 55}
            <p class="">200.00</p>
            {:else if  $allcashback.vip_level === 56}
            <p class="">220.00</p>
            {:else if  $allcashback.vip_level === 57}
            <p class="">240.00</p>
            {:else if  $allcashback.vip_level === 58}
            <p class="">260.00</p>
            {:else if  $allcashback.vip_level === 59}
            <p class="">280.00</p>
            {:else if  $allcashback.vip_level === 60}
            <p class="">300.00</p>
            {:else if  $allcashback.vip_level === 61}
            <p class="">350.00</p>
            {:else if  $allcashback.vip_level === 62}
            <p class="">400.00</p>
            {:else if  $allcashback.vip_level === 63}
            <p class="">450.00</p>
            {:else if  $allcashback.vip_level === 64}
            <p class="">500.00</p>
            {:else if  $allcashback.vip_level === 65}
            <p class="">550.00</p>
            {:else if  $allcashback.vip_level === 66}
            <p class="">600.00</p>
            {:else if  $allcashback.vip_level === 67}
            <p class="">700.00</p>
            {:else if  $allcashback.vip_level === 68}
            <p class="">800.00</p>
            {:else if  $allcashback.vip_level === 69}
            <p class="">1200.00</p>
            {:else if  $allcashback.vip_level === 70}
            <p class="">1300.00</p>
            {:else if  $allcashback.vip_level === 71}
            <p class="">1400.00</p>
            {:else if  $allcashback.vip_level === 72}
            <p class="">1500.00</p>
            {:else if  $allcashback.vip_level === 73}
            <p class="">1600.00</p>
            {:else if  $allcashback.vip_level === 74}
            <p class="">1700.00</p>
            {:else if  $allcashback.vip_level === 75}
            <p class="">1800.00</p>
            {:else if  $allcashback.vip_level === 76}
            <p class="">2000.00</p>
            {:else if  $allcashback.vip_level === 77}
            <p class="">2200.00</p>
            {:else if  $allcashback.vip_level === 78}
            <p class="">2300.00</p>
            {:else if  $allcashback.vip_level === 79}
            <p class="">2500.00</p>
            {:else if  $allcashback.vip_level === 80}
            <p class="">2600.00</p>
            {:else if  $allcashback.vip_level === 81}
            <p class="">2700.00</p>
            {:else if  $allcashback.vip_level === 82}
            <p class="">2800.00</p>
            {:else if  $allcashback.vip_level === 83}
            <p class="">3000.00</p>
            {:else if  $allcashback.vip_level === 84}
            <p class="">3200.00</p>
            {:else if  $allcashback.vip_level === 85}
            <p class="">3600.00</p>
            {:else if  $allcashback.vip_level === 86}
            <p class="">4000.00</p>
            {:else if  $allcashback.vip_level === 87}
            <p class="">4500.00</p>
            {:else if  $allcashback.vip_level === 88}
            <p class="">5000.00</p>
            {:else if  $allcashback.vip_level === 89}
            <p class="">5500.00</p>
            {:else if  $allcashback.vip_level === 90}
            <p class="">6000.00</p>
            {:else if  $allcashback.vip_level === 91}
            <p class="">7000.00</p>
            {:else if  $allcashback.vip_level === 92}
            <p class="">8000.00</p>
            {:else if  $allcashback.vip_level === 93}
            <p class="">9000.00</p>
            {:else if  $allcashback.vip_level === 94}
            <p class="">10000.00</p>
            {:else if  $allcashback.vip_level === 95}
            <p class="">11000.00</p>
            {:else if  $allcashback.vip_level === 96}
            <p class="">12000.00</p>
            {:else if  $allcashback.vip_level === 97}
            <p class="">13000.00</p>
            {:else if  $allcashback.vip_level === 98}
            <p class="">15000.00</p>
            {:else if  $allcashback.vip_level === 99}
            <p class="">18000.00</p>
            {:else if  $allcashback.vip_level === 100}
            <p class="">20000.00</p>
            {:else if  $allcashback.vip_level > 101}
            <p class="">23000.00</p>
            {/if}
       
        </div>
    </div>
    <div class="bonus-btn">
        <button on:click={handleCancel} style="width: 100%; font-weight:bold; color:#43b309;" class="quests-btn">
            <span>View VIP Club</span>
        </button>
    </div>
    <div class="bonus-bg-wrap">
        <div class="bg-inner"></div>
        <img alt="img" src="https://bc.game/assets/recharge.a4be9aca.png">
    </div>
</div>
    
<style>
.bonus-d{
    font-size: 13px;
}
.page-bonus-item {
    width: 32%;
    background:#1C1E22 ;
    position: relative;
    min-width: 7.125rem;
     border-radius: 0.25rem;
    margin-bottom: 1.25rem;
    z-index: 5;
    height: 15.25rem;
    -webkit-backdrop-filter: blur(7px);
    backdrop-filter: blur(7px);
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    border-radius: 12px;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 1.375rem 1.5rem;
}
.page-bonus-item {
    margin-bottom: 1rem;
    width: 49%;
}
.bonus-item-text {
    position: relative;
    z-index: 3;
    width: 100%;
}
.bonus-tit {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.bonus-item-text .bonus-t {
    color: var(--autofill-color);
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 600;
    margin-right: 0.25rem;
}
.page-bonus-item p {
    margin: 0;
}

.bonus-desc.last {
    margin-top: 0.5rem;
}
.bonus-desc {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: .75rem;
    line-height: 1rem;
    width: 70%;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    max-width: 15rem;
    margin-top: 1rem;
}
.bonus-btn {
    position: relative;
    z-index: 2;
    margin-top: auto;
}

.ba3phvn .bonus-bg-wrap {
    position: absolute;
    z-index: 1;
    width: 35%;
    height: 100%;
    right: 0;
    top: 0;
    overflow: hidden;
}
.bonus-bg-wrap .bg-inner {
    width: 16.75rem;
    height: 12.875rem;
    background: radial-gradient(50% 50% at 50% 50%,rgba(9,148,123,.5) 0%,rgba(9,148,123,0) 100%);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.bonus-bg-wrap img {
    height: 10rem;
    position: absolute;
    right: 0;
    top: 6%;
}
.quests-btn {
    background: #24262B;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 3rem;
}

</style>