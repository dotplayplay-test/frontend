<script>
import { affiliate_info , affilliate_info } from "$lib/pages/affiliate/main/store/index";
</script>
    <div class="sc-kDTinF jjrgSc">
        <div class="dashboard-content">
            <div class="dashboard-top">
                <div class="dashboard-box">
                    <div class="box-img img-unlocked"></div>
                    <div class="box-number">{(parseFloat($affiliate_info.total_earn_me)).toFixed(2)}</div>
                    <div class="box-word">Unlocked</div>
                </div>
                <div class="dashboard-line">
                    <div class="line"></div>
                    <div class="word">USD Rewards</div>
                </div>
                <div class="dashboard-box">
                    <div class="box-img img-unlockedmore"></div>
                    <div class="box-number">{(parseFloat($affiliate_info.total_usd_reward)).toFixed(4)}</div>
                    <div class="box-word">To be unlocked</div>
                </div>
            </div>
            <div class="dashboard-bottom">
                <div class="dashboard-box dashboard-item">
                    <div class="box-img img-friends"></div>
                    <div class="box-number">{$affilliate_info.registered_friends}</div>
                    <div class="box-word">Friend Number</div>
                </div>
                <div class="dashboard-box dashboard-item item-last">
                    <div class="box-img img-rewards"></div>
                    <div class="box-number">{(parseFloat($affilliate_info.today_commission)).toFixed(4)} USD</div>
                    <div class="box-word">Today’s Commission Rewards (Approx.)</div>
                </div>
            </div>
        </div>
    </div>
    
    <style>
    .jjrgSc {
        background: white;
        height: 100%;
        min-height: 600px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
    }
    
    .jjrgSc .dashboard-content {
        width: 80%;
        max-width: 1000px;
    }
    .jjrgSc .dashboard-content .dashboard-top {
        position: relative;
        width: 100%;
        height: 270px;
        border: 1px solid rgb(234, 234, 234);
        border-radius: 4px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
    }
    .jjrgSc .dashboard-content .dashboard-box {
        width: 50%;
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
    }
    .jjrgSc .dashboard-content .dashboard-box .box-img.img-unlocked {
        width: 119px;
        height: 109px;
        background: url(https://mycasino.nanogames.io/static/media/unlockedmore.53d51f77.png) center center / 100% 100% no-repeat;
        margin-top: -18px;
    }
    .jjrgSc .dashboard-content .dashboard-box .box-img.img-unlockedmore {
        width: 82px;
        height: 91px;
        background: url(https://mycasino.nanogames.io/static/media/unlocked.d9b1f04e.png) center center / 100% 100% no-repeat;
    }
    .jjrgSc .dashboard-content .dashboard-box .box-img.img-friends {
        width: 86px;
        height: 76px;
        background: url(https://mycasino.nanogames.io/static/media/friends.d6f521cb.png) center center / 100% 100% no-repeat;
    }
    .jjrgSc .dashboard-content .dashboard-box .box-img.img-rewards {
        width: 85px;
        height: 76px;
        background: url(https://mycasino.nanogames.io/static/media/rewards.27033217.png) center center / 100% 100% no-repeat;
    }
    .jjrgSc .dashboard-content .dashboard-box .box-number {
        font-weight: bold;
        font-size: 38px;
        letter-spacing: -2px;
        color: rgb(84, 84, 84);
    }
    .jjrgSc .dashboard-content .dashboard-box .box-word {
        font-weight: 900;
        color: rgb(140, 140, 140);
    }
    .jjrgSc .dashboard-content .dashboard-box .box-number {
        font-weight: bold;
        font-size: 38px;
        letter-spacing: -2px;
        color: rgb(84, 84, 84);
    }
    .jjrgSc .dashboard-content .dashboard-box .box-word {
        font-weight: 900;
        color: rgb(140, 140, 140);
    }
    .jjrgSc .dashboard-content .dashboard-top .dashboard-line {
        position: absolute;
    }
    .jjrgSc .dashboard-content .dashboard-top .dashboard-line .line {
        width: 1px;
        height: 143px;
        background: rgb(234, 234, 234);
        margin: 0px auto;
    }
    .jjrgSc .dashboard-content .dashboard-top .dashboard-line .word {
        margin-top: 15px;
        font-weight: 900;
        letter-spacing: -0.4px;
        color: rgb(140, 140, 140);
    }
    .jjrgSc .dashboard-content .dashboard-box .box-number {
        font-weight: bold;
        font-size: 38px;
        letter-spacing: -2px;
        color: rgb(84, 84, 84);
    }
    .jjrgSc .dashboard-content .dashboard-box .box-word {
        font-weight: 900;
        color: rgb(140, 140, 140);
    }
    .jjrgSc .dashboard-content .dashboard-bottom {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        margin-top: 19px;
    }
    .jjrgSc .dashboard-content .dashboard-bottom .dashboard-item {
        border: 1px solid rgb(234, 234, 234);
        border-radius: 4px;
        height: 241px;
        width: 49%;
        -webkit-box-pack: center;
        justify-content: center;
    }
    .jjrgSc .dashboard-content .dashboard-box .box-img.img-friends {
        width: 86px;
        height: 76px;
    }
    .jjrgSc .dashboard-content .dashboard-box .box-number {
        font-weight: bold;
        font-size: 38px;
        letter-spacing: -2px;
        color: rgb(84, 84, 84);
    }
    .jjrgSc .dashboard-content .dashboard-box .box-word {
        font-weight: 900;
        color: rgb(140, 140, 140);
    }
    </style>
    