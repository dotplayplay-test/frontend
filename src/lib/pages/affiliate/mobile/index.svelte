<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import CgFileDocument from "svelte-icons-pack/cg/CgFileDocument";
import CgLoadbarDoc from "svelte-icons-pack/cg/CgLoadbarDoc";
import BsCircleSquare from "svelte-icons-pack/bs/BsCircleSquare";
</script>

<div class="sc-lhMiDA ePAxUv" style="opacity: 1; transform: none;">
    <div class="casino-mobile">
        <div class="sc-bvFjSx fHLJnX welcome">
            <div class="sc-cQMzAB bBIfBG casino-header">
                <div class="header-sub flex-center">
                    <div class="left flex-center">
                        <div class="m-item rules">
                            <Icon src={CgFileDocument} size="18" className="sc-gsDKAQ hxODWG icon" title="Custom icon params" />
                            <span>Rules</span>
                        </div>
                        <div class="m-item terms">
                            <Icon src={BsCircleSquare} size="18" className="sc-gsDKAQ hxODWG icon" title="Custom icon params" />
                            <span>Terms</span>
                        </div>
                    </div>
                    <div class="right flex-center"></div>
                </div>
            </div>
            <div class="banner">
                <button class="management">
                    <Icon src={CgLoadbarDoc} size="24" color="#fff" className="sc-gsDKAQ hxODWG icon" title="Custom icon params" />
                </button>
            </div>
            <div class="container">
                <div class="sc-knKHOI kAMryv my-casino ">
                    <div class="m-casino">
                        <div class="tip ttu">Commission ready everyday<br><span class="theme">$ 100 </span>Just a referral away</div>
                        <button class="new spec">Create Referral Code Now</button>
                    </div>
                </div>
                <div class="section why">
                    <div class="title ttu">Start Earning Today</div>
                    <div class="content">
                        <div class="sc-kTqLtj jsqEAL why-casino">
                            <div class="left">
                                <div class="title theme">Build Your Own <br> Casino Club Quickly.</div>
                                <div class="desc">It's hard to build a casino, but you can start from managing your own table on NANOGAMES.IO.</div>
                                <div class="desc">
                                    <span class="theme">NANOGAMES.IO</span> is not just games, it’s a platform to realize the potential of your hidden dreams. Join NANOGAMES.IO and set sail on a new chapter in your wealth journey immediately!</div>
                            </div>
                            <div class="right">
                                <div class="title theme">Build A Casino Website <br> With Your Own Domain.</div>
                                <div class="desc">If you got your own plan. you can set up a casino website with your own domain, design style and theme. If you are capable to invite players and their wager amount reaches a billion dollars and above, you will be able to get your own customized casino!</div>
                                <div class="desc">Contact
                                    <a href="mailto:support@nanogames.io" class="theme">support@nanogames.io</a> for more details</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section rewards-system">
                    <div class="title ttu">
                        <span class="theme">Affiliate</span>
                        Reward System</div>
                    <div class="tip">NANOGAMES.IO sets up a reward of 100 USD for each referral you invite in addition to commission.
                        Click <span>"Create Referral Code Now"</span>
                        and set sail on a new chapter on your journey of wealth immediately!</div>
                </div>

                <div class="section">
                    <div class="sc-haTkiu fgzCdg rewards-graph">
                        <div class="title">Affiliate Rewards</div>
                        <div class="rewards-wrap">
                            <a href="#" class="item-rewards">
                                <div class="type ttu">USD Rewards</div>
                                <div class="tip-detail">Click for more details</div>
                            </a>
                            <a href="#" class="item-commission">
                                <div class="type">Commission Rewards</div>
                                <div class="tip-detail">Click for more details</div>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="title ttu">Affiliate Rewards</div>
                    <div class="content">
                        <div class="sc-cfJLRR cdwmLq rewards-wrap">
                            <div class="rewards item">
                                <div class="system" style="background-image: url(&quot;https://static.nanogames.io/assets/rewards.dadef713.png&quot;);">
                                    <div class="title theme ttu">USD Rewards</div>
                                    <div class="desc">Every friend you invite will get you</div>
                                    <div class="flex">
                                        <div class="amount">100 USD</div>
                                        <a href="#" class="hover theme">USD Rewards Rules</a>
                                        <Icon src={RiSystemArrowRightSLine} color="rgb(245, 246, 247)" size="18" title="Custom icon params" />
                                    </div>
                                </div>
                                <div class="graph" id="system-rewards" ></div>
                                <div class="footer">
                                    <p class="text">Please contact us for a more profitable customized plan.</p>
                                    <a href="https://t.me/NanoGamesOfficial" target="_blank" class="contact">
                                        <div class="icon-box">
                                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon icon">
                                                <use xlink:href="#icon_Send"></use>
                                            </svg>
                                        </div>
                                        <span>Contact Us</span>
                                    </a>
                                </div>
                            </div>
                            <div class="commission item">
                                <div class="system" style="background-image: url(&quot;https://static.nanogames.io/assets/commission.62eb3f82.png&quot;);">
                                    <div class="title theme ttu">Commission Rewards</div>
                                    <div class="desc">Every friend you invite will rebate you a percentage of their wagers as your commission and will be credited directly to your balance.</div>
                                </div>
                                <div class="graph" id="system-commission"></div>
                                <div class="footer"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="sc-bLdqUH eoJPQL platform-rewards">
                        <div class="is-mobile">
                            <div class="title ttu">Rewards sent out till date</div>
                            <div class="fc">
                                <div class="rewards">
                                    <div class="desc">USD rewards sent out till date</div>
                                    <div class="number-wrap">
                                        <div class="value">129855.5</div>
                                        <div class="type">USD</div>
                                    </div>
                                </div>
                                <div class="commission">
                                    <div class="desc">Commission sent out till date</div>
                                    <div class="number-wrap">
                                        <div class="value">500323.79</div>
                                        <div class="type">USD</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal button">
                    <div class="button-inner">Create Referral Code Now</div></button>
                

            </div>
        </div>
    </div>
</div>
