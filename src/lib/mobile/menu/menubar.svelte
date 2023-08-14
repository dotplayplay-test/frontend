<script>
import '../style/index.css'
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import Games from '../components/games.svelte';
import IoMoon from "svelte-icons-pack/io/IoMoon";
import HiSolidLightBulb from "svelte-icons-pack/hi/HiSolidLightBulb";
import FaSolidHeadphones from "svelte-icons-pack/fa/FaSolidHeadphones";

import { createEventDispatcher } from 'svelte'
const dispatch = createEventDispatcher()


const handleMenu = ((e)=>{
    dispatch("menu", e)
})

let isGames = true 
const handleOriginals = (()=>{
    if(isGames){
        isGames = false
    }else{
        isGames = true
    }
})

</script>

<div class="sc-fXEqDS hZgDyO">
    <span role="button" tabindex="0" on:keyup={handleMenu} class="close-wrap">
        <Icon src={IoCloseSharp} color="rgba(153, 164, 176, 0.6)" size="20" className="custom-icon" title="Custom icon params" />
    </span>

    <div id="sidebar" class="sc-xiLah beBixG">
        <div class="mobile-sidebar-top-tab">
            <div class="sc-uojGG hksQGj">
                <a class="is-active" href="/">Menu</a>
                <div></div>
            </div>
        </div>

        <div class="nav-item">
            <img alt="menu-icon" src="https://static.nanogames.io/assets/home.e1cf89b4.png">
            <div class="nav-right">Home</div>
        </div>

        <div  role="button" tabindex="0" on:keyup={handleOriginals} class="nav-item">
            <img alt="menu-icon" src="https://static.nanogames.io/assets/originalcasino.bb7966a7.png">
            <div class="nav-right">NG Originals</div>
            <Icon src={RiSystemArrowRightSLine} color="rgba(153, 164, 176, 0.6)" size="17" className="sc-gsDKAQ hxODWG icon open-icon open" title="Custom icon params" />
        </div>

        <!-- =================== Games ============================ -->
        {#if (isGames)}
            <Games />
        {/if}

        <div class="nav-item">
            <img alt="menu-icon" src="https://static.nanogames.io/assets/lottery.bc95b607.png">
            <div class="nav-right">Lottery</div>
        </div>

        <div class="nav-item">
            <img alt="menu-icon" src="https://static.nanogames.io/assets/affiliate.6f434c33.png">
            <div class="nav-right">Affiliate</div>
        </div>
        <div class="nav-item special-nav vip">
            <img alt="menu-icon" src="https://static.nanogames.io/assets/vipclub.3b37e72c.png">
            <div class="nav-right">VIP Club</div>
        </div>

        <div class="nav-item">
            <img alt="menu-icon" src="https://static.nanogames.io/assets/fairness.12d49bfb.png">
            <div class="nav-right">Provably Fair</div>
        </div>
        <div class="sc-eGPXGI kCbnNh"></div>
        <div class="nav-item">
            <img alt="menu-icon" src="https://static.nanogames.io/assets/myfavorite.466f0741.png">
            <div class="nav-right">Favorite Games</div>
        </div>

        <div class="nav-item">
            <img alt="menu-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAARVBMVEUAAACNI+aTK++NJOWNI+eMI+aNJOaNJOacLOqOJ+uOJeeNJOaNJOWNJOaOI+aNJeeOJOaPJOePJ+WNJOiSJO2NI+aMI+Uq+huBAAAAFnRSTlMA2Q/5aee/uQsmUfPFopB9XEA7OBzSytsOlAAAASJJREFUWMPtlsmuwjAMRZM6Ywc6APf/P/XBAtynQOV4AQtytpGOZMe5sWk0Go2Gjm6Zgh0GG6alM3r6QHhCoVdqthGg6NacUl5dJGDcNJ4T4F23q9J54FTfnAiak/lHmgmxq/RY+LMpOHvYOlPE9WJecLki1vXHs8feYJOv6dMG2tWFG7vqCPK7GzGbdyIzYxTPIXx6L0oe0skMcKYQMQ5BePVEXSEqzgUsiOZIZCIWkWiCOxY5TMIWrceiVdgki1yI8p1HZzKsSDQgFaI7z4oThk+KuLRSxKWpmm0f9Nxs1fUzfP2qgWR4IMVPRHlePtrjyoIiRhhFjHCwMZpg46hlVFHL4c8owl/xHWk/yE9/2folQr/W6Bet769+jUaj8dP8AetcFXVRAZgCAAAAAElFTkSuQmCC">
            <div class="nav-right">Recent Play</div>
        </div>

        <div class="theme-live border_top">
            <div class="sc-gSQFLo dprxuS theme">
                <div class="theme-check">
                    <div class="item is-active">
                        <Icon src={IoMoon} color="rgba(153, 164, 176, 0.6)" size="17" className="sc-gsDKAQ hxODWG icon open-icon open" title="Custom icon params" />
                    </div>
                    <div class="item">
                        <Icon src={HiSolidLightBulb} color="rgba(153, 164, 176, 0.6)" size="17" className="sc-gsDKAQ hxODWG icon open-icon open" title="Custom icon params" />
                    </div>
                </div>
                <div class="theme-word">
                    <p>Darkmode</p>
                    <p>Currently</p>
                </div>
            </div>
            <div class="live">
                <div class="support-icon">
                    <Icon src={FaSolidHeadphones} color="#fff" size="17" className="sc-gsDKAQ hxODWG icon open-icon open" title="Custom icon params" />
                </div>
                <span>Live Support</span>
            </div>
        </div>

        <div class="language border_top">
            <span>Language Options</span>
            <div class="sc-jJoQJp gOHquD select  sc-dVNjXY bfVniQ">
                <div class="select-trigger">
                    English
                    <div class="arrow top">
                        <Icon src={RiSystemArrowRightSLine} color="rgba(153, 164, 176, 0.6)" size="17" className="sc-gsDKAQ hxODWG icon open-icon open" title="Custom icon params" />
                    </div>
                </div>
            </div>
        </div>

        <div class="network border_top">
            <span>Social Media</span>
            <div class="sc-XxNYO hNXSBx social-links">
                <a class="telegram" href="https://t.me/NanoGamesOfficial" target="_blank">
                    <img src="https://static.nanogames.io/assets/Telegram.f76d7c46.svg" class="telegram" alt="">
                </a>
                <a class="github" href="https://github.com/NanoGamesio/crash/" target="_blank">
                    <img src="https://static.nanogames.io/assets/Github.87e42b3d.svg" class="github" alt=""></a>
                <a class="twitter" href="https://twitter.com/nanogamesio?lang=en" target="_blank">
                    <img src="https://static.nanogames.io/assets/Twitter.ec46be69.svg" class="twitter" alt=""></a>
                <a class="discord" href="https://discord.gg/5sWsU4d" target="_blank">
                    <img src="https://static.nanogames.io/assets/Discord.cbf05e6a.svg" class="discord" alt=""></a>
            </div>
        </div>
    </div>
</div>
