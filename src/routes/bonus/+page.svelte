<script>
import { goto } from "$app/navigation"
import "../../styles/bonus/index.css"
import Bonus from "$lib/mobile/pages/bonus.svelte";
import Mainbonus from "$lib/pages/bonus/Mainbonus.svelte";
import { handleisLoggin } from "$lib/store/profile";

</script>


{#if !$handleisLoggin}
<div id="main" class="b1rxc92l page-max-width-wrap width-stage-2">
    <div class="tsxsoob top-page-wrap">
        <div class="left-text-wrap">
            <h2 class="ttu">Unlock <span>endless</span> benefits</h2>
            <p class="sub-p">Join now and embark on an exhilarating journey of luck and reward!</p>
            <div class="bonus-items">
                <div class="bonus-item f">
                    <img alt="" src="https://bc.game/assets/bonus.cdc01905.png" class="bonus-img">
                    <div class="right-p">
                        <p class="t ttu">Level Up Bonus</p>
                        <p class="d">Reach new heights with our Level-Up Bonus</p>
                    </div>
                </div>
                <div class="bonus-item">
                    <img alt="" src="https://bc.game/assets/recharge.c1e09ed1.png" class="recharge-img">
                    <div class="right-p">
                        <p class="t ttu">Recharge</p>
                        <p class="d">Schedule your Recharge bonuses by your choice</p>
                    </div>
                </div>
                <div class="bonus-item">
                    <img alt="" src="https://bc.game/assets/weekly.38d1483e.png" class="weekly-img">
                    <div class="right-p">
                        <p class="t ttu">Weekly &amp; monthly cashback</p>
                        <p class="d">Power up with captivating weekly and monthly bonuses</p>
                    </div>
                </div>
            </div>
            <button on:click={()=> goto("register")} class="ui-button button-normal s-conic2 join-btn">
                <div class="button-inner">Join Dotplayplay Now</div>
            </button>
        </div>
    </div>

    <div class="s1mxgt0r step-page-wrap">
        <div class="step-top">
            <div class="st-item">
                <div class="num">01</div>
                <p>Sign up &amp; make a deposit</p>
            </div>
            <div class="st-item">
                <div class="num">02</div>
                <p>Play your fav games</p>
            </div>
            <div class="st-item">
                <div class="num">03</div>
                <p>Increase your VIP levels</p>
            </div>
        </div>
        <div class="steps">
            <div class="step-item">
                <div class="img-wrap">
                    <img alt="img" src="https://bc.game/assets/step1.4f9b8a46.png">
                </div>
                <div class="step-text">
                    <p class="ttu st">Discover BC.GAME’s exceptional Deposit Bonus</p>
                    <p class="sd">We are unique in a way that you can see your initial deposit bonus right away and offers an 180% bonus for your first deposit!</p>
                    <button class="ui-button button-normal s-conic s-btn">
                        <div class="button-inner">Claim Your Deposit Bonus</div>
                    </button>
                </div>
            </div>
            <div class="step-item left">
                <div class="img-wrap">
                    <img alt="img" src="https://bc.game/assets/step2.a4608671.png">
                </div>
                <div class="step-text">
                    <p class="ttu st">Reach new heights with our Level Up bonus</p>
                    <p class="sd">Empower your finances today and boost your balance like never before with surprising rewards that will be unlocked multiple times as you level up.</p>
                    <button class="ui-button button-normal s-conic s-btn">
                        <div class="button-inner">Unlock Level-up Bonus</div>
                    </button>
                </div>
            </div>
            <div class="step-item">
                <div class="img-wrap">
                    <img alt="img" src="https://bc.game/assets/step3.d04f0d6c.png">
                </div>
                <div class="step-text">
                    <p class="ttu st">Maximize the Potential of BCD/FIAT Rakeback</p>
                    <p class="sd">Earn locked BCD/Fiat through bonuses and effortlessly unlock its potential by wagering in your preferred way. Claim it directly to your balance!</p>
                    <button class="ui-button button-normal s-conic s-btn">
                        <div class="button-inner">How to Unlock Rakeback?</div>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="m16yp196 midden-page-wrap">
        <p class="m-bt ttu">Get a lot of <span>free</span> perks</p>
        <div class="perks-wrap">
            <div class="perk-item item-1">
                <div class="top-info">Every Day &amp; Week</div>
                <div class="img-wrap">
                    <img alt="img" src="https://bc.game/assets/quests.51129c77.png" class="quests">
                </div>
                <div class="text-wrap">
                    <p class="tt ttu">Quest Hub</p>
                    <p class="td">Conquer daily and weekly quests while amassing and snowballing your earnings!</p>
                </div>
            </div>
            <div class="perk-item item-2">
                <div class="top-info">Every Day</div>
                <div class="img-wrap">
                    <img alt="img" src="https://bc.game/assets/spin.32147807.png" class="spin">
                </div>
                <div class="text-wrap">
                    <p class="tt ttu">Free Lucky Spins</p>
                    <p class="td">Spin and win your daily opportunity to bag up to 5 BTC - the ultimate thrill in every roll!</p>
                </div>
            </div>
            <div class="perk-item item-3">
                <div class="top-info">Every Day</div>
                <div class="img-wrap">
                    <img alt="img" src="https://bc.game/assets/roll.206dc70d.png" class="roll">
                </div>
                <div class="text-wrap">
                    <p class="tt ttu">Free roll competitions</p>
                    <p class="td">The earlier you get the same score, the higher you rank - let the game begin!</p>
                </div>
            </div>
        </div>
        <div class="infos">
            <div class="top-img-text">
                <div class="top-img">
                    <img src="https://bc.game/assets/cashback.03e94459.png" alt="">
                </div>
                <div class="top-text">
                    <p class="text-t">Introducing Our Very Own <span>Recharge</span> Cashback</p>
                    <p class="text-d">Immerse yourself in the exhilarating world of Recharge, where the power is in your hands.
                        Join BC.GAME and customize your reward.</p><button><span>Join BC.GAME Today</span>
                        <!-- <svg class="s1yetyrx icon">
                            <use xlink:href="/assets/symbol-defs.ac3d71f1.svg?lang.svg#icon_Arrow"></use>
                        </svg> -->
                    </button>
                </div>
            </div>
            <div class="bot-info">
                <div class="mb-item">
                    <div class="mb-img">
                        <div class="mb-bg cashback1"></div>
                        <img alt="" class="small" src="https://bc.game/assets/cashback1.53900494.png">
                    </div>
                    <div class="mb-text">
                        <p class="mb-t">Recharge activation</p>
                        <p class="mb-d">Journey towards Recharge Activation as you strive to reach VIP level 22 and beyond.</p>
                    </div>
                </div>
                <div class="mb-line f"></div>
                <div class="mb-item">
                    <div class="mb-img">
                        <div class="mb-bg cashback2"></div>
                        <img alt="" src="https://bc.game/assets/cashback2.44428bc6.png">
                    </div>
                    <div class="mb-text">
                        <p class="mb-t">Recharge at your pace</p>
                        <p class="mb-d">Claim bonuses every 10 mins, hourly or daily</p>
                    </div>
                </div>
                <div class="mb-line l"></div>
                <div class="mb-item">
                    <div class="mb-img">
                        <div class="mb-bg cashback3"></div>
                        <img alt="" src="	https://bc.game/assets/cashback3.64664617.png">
                    </div>
                    <div class="mb-text">
                        <p class="mb-t">Recharge Reward Tiers</p>
                        <p class="mb-d">Snowball your rewards as you wager and climb from Tier 1 to Tier 4</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="ba043ru">
        <p class="bot-t">Wait. We have <span>more</span> benefits for you!</p>
        <div class="bot-infos">
            <div class="info-item">
                <div class="bot-img-wrap benefit1">
                    <div class="img-bg"></div>
                    <img alt="" src="https://bc.game/assets/benefit1.088103df.png">
                </div>
                <p class="b-t ttu">Catch Coco for surprising rewards!</p>
                <p class="b-d">Catch the fleeting COCO spider every 6 hours on our page and earn exclusive BCD/Fiat rewards based on your
                    VIP level.</p>
            </div>
            <div class="info-item-line f"></div>
            <div class="info-item">
                <div class="bot-img-wrap benefit2">
                    <div class="img-bg"></div>
                    <img alt="" src="https://bc.game/assets/benefit2.fae47315.png">
                </div>
                <p class="b-t ttu">Win with DPP Lottery</p>
                <p class="b-d">Experience provably fair gaming and let your lucky numbers do the magic.
                    Don't wait, jump in and try your luck!</p>
            </div>
            <div class="info-item-line l"></div>
            <div class="info-item">
                <div class="bot-img-wrap benefit3">
                    <div class="img-bg"></div>
                    <img alt="" src="https://bc.game/assets/benefit3.e7f903cf.png">
                </div>
                <p class="b-t ttu">Wait for Coin-Drop and Chat Rain</p>
                <p class="b-d">Engage, chat, and seize spontaneous rewards with Constant Chat Rains and Coin-Drops—be active,
                    quick, and earn free coins.</p>
            </div>
        </div>
        <div class="bot-signup">
            <div class="bot-bg"></div>
            <p>We are proud to provide you with the most luxurious gaming experience</p>
            <button class="ui-button button-normal s-conic">
                <div class="button-inner">Sign Up Now</div>
            </button>
        </div>
    </div>
</div>
{:else}
    <Mainbonus />
{/if}



<div class="mobile">
    <Bonus />
</div>