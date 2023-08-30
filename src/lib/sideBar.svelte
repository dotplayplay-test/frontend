<script>
export let routes
import {
    goto
} from "$app/navigation"
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import IoMoon from "svelte-icons-pack/io/IoMoon";
import HiSolidLightBulb from "svelte-icons-pack/hi/HiSolidLightBulb";
import FaSolidHeadphones from "svelte-icons-pack/fa/FaSolidHeadphones";
import AiFillGift from "svelte-icons-pack/ai/AiFillGift";
import Original from "./original.svelte";
import '../styles/sidebar/sidebar.css'
import '../styles/sidebar/sidebarmobile.css'
export let styls;
let showOriginals = false

const openOriginal = ((e) => {
    if (e) {
        showOriginals = true
    } else {
        showOriginals = false
    }
})

let isLight = false
const handeTheme = ((e) => {
    if (e === `light`) {
        isLight = true
    } else {
        isLight = false
    }
})
</script>

<div id="main" class="sc-jHkVzv eTxQfM unfold">
    <div class="large-sidebar hidden-scroll-y">
        <div class="sc-uojGG hksQGj">
            <a aria-current="page" class="is-active active" href="/">Casino</a>
        </div>
        <button on:click={()=> goto("/")} class={`sc-iNGGcK knLCVT menu-item ${routes.route === "/" ? "select" : ""}`}>
            <div class="menu-pc">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/home.e1cf89b4.png"><span>Home</span>
            </div>
        </button>
        <button on:mouseenter={()=> openOriginal(1)} on:mouseleave={()=> openOriginal(0)} class={`sc-iNGGcK sc-eJwWfJ knLCVT beCBEn menu-item ${ routes.route === "/(games)/crash" ||  routes.route === "/(games)/mines" ||
            routes.route === "/(games)/classic-dice" || routes.route === "/(games)/plinko"|| routes.route === "/(games)/tower" || routes.route === "/(games)/hilo" || routes.route === "/(games)/diamonds"  ? "select" : ""}`}>
            <div class="menu-pc">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/originalcasino.bb7966a7.png">
                <span>DP Originals</span>
            </div>
            <svg class="sc-gsDKAQ hxODWG icon right" fill="none" viewBox="0 0 24 24" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
                <path xmlns="http://www.w3.org/2000/svg" d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="rgba(153,164,176,.8)"></path>
            </svg>
            {#if (showOriginals)}
            <Original styls={styls} />
            {/if}
        </button>
        <button on:click={()=> goto("/bonus")}  class={`sc-iNGGcK knLCVT menu-item  ${routes.route === "/bonus" ? "select" : ""} `}>
            <div class="menu-pc">
                <span style="padding: 10px">
                    <Icon src={AiFillGift}  size="25"  color="rgb(67, 179, 9)" className="custom-icon" title="arror" />
                </span>
                <span>Bonus</span>
            </div>
        </button>
        <button on:click={()=> goto("/promotion")}  class={`sc-iNGGcK knLCVT menu-item special-nav  ${routes.route === "/promotion" ? "select" : ""} `}>
            <div class="menu-pc">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/promotion.316446ec.png"><span>Promotions</span>
            </div>
        </button>
        <button  on:click={()=> goto("/lottery")}  class={`sc-iNGGcK knLCVT menu-item ${ routes.route === "/lottery" ? "select" : ""} `}>
            <div class="menu-pc">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/lottery.bc95b607.png">
                <span>Lottery</span>
            </div>
        </button>
        <button on:click={()=> goto("/affiliate")} class={`sc-iNGGcK knLCVT menu-item ${ routes.route ==="/affiliate" ? "select" : ""}`}>
            <div class="menu-pc">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/affiliate.6f434c33.png">
                <span>Affiliate</span>
            </div>
        </button>
        <button  on:click={()=> goto("/vip-games")} class={`sc-iNGGcK knLCVT menu-item special-nav vip ${  routes.route === "/vip-games" ? "select" : ""}`} >
            <div class="menu-pc">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/vipclub.3b37e72c.png">
                <span>VIP Club</span>
            </div>
        </button>
        <button on:click={()=> goto("/help/provably-fair")} class={`sc-iNGGcK knLCVT menu-item ${ routes.route === `/help/agreement` || routes.route === `/help/provably-fair` ||
            routes.route === `/help/coinlimit` || routes.route === `/help/contactus` || routes.route === `/help/fee`  || routes.route === `/help/googlecheck`  || routes.route === `/help/faq`  || routes.route === `/help/passcurrency` ||
            routes.route === `/help/privacy` || routes.route === `/help/reglog` || routes.route === `/help/swappolicy` || routes.route === `/help/terms-service`
            ? "select" : ""}`}>
            <div class="menu-pc">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/fairness.12d49bfb.png">
                <span>Provably Fair</span>
            </div>
        </button>
        <div class="sc-eGPXGI kCbnNh"></div>

        <button on:click={()=> goto("/favourite")}  class={`sc-iNGGcK knLCVT menu-item ${ routes.route === "/favourite" ? "select" : ""}`}>
            <div class="menu-pc">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/myfavorite.466f0741.png">
                <span>Favorite Games</span>
            </div>
        </button>
        <button on:click={()=> goto("/recent-play")} class={`sc-iNGGcK knLCVT menu-item  ${routes.route === "/recent-play" ? "select" : ""}`}>
            <div class="menu-pc">
                <img alt="menu-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAARVBMVEUAAACNI+aTK++NJOWNI+eMI+aNJOaNJOacLOqOJ+uOJeeNJOaNJOWNJOaOI+aNJeeOJOaPJOePJ+WNJOiSJO2NI+aMI+Uq+huBAAAAFnRSTlMA2Q/5aee/uQsmUfPFopB9XEA7OBzSytsOlAAAASJJREFUWMPtlsmuwjAMRZM6Ywc6APf/P/XBAtynQOV4AQtytpGOZMe5sWk0Go2Gjm6Zgh0GG6alM3r6QHhCoVdqthGg6NacUl5dJGDcNJ4T4F23q9J54FTfnAiak/lHmgmxq/RY+LMpOHvYOlPE9WJecLki1vXHs8feYJOv6dMG2tWFG7vqCPK7GzGbdyIzYxTPIXx6L0oe0skMcKYQMQ5BePVEXSEqzgUsiOZIZCIWkWiCOxY5TMIWrceiVdgki1yI8p1HZzKsSDQgFaI7z4oThk+KuLRSxKWpmm0f9Nxs1fUzfP2qgWR4IMVPRHlePtrjyoIiRhhFjHCwMZpg46hlVFHL4c8owl/xHWk/yE9/2folQr/W6Bet769+jUaj8dP8AetcFXVRAZgCAAAAAElFTkSuQmCC">
                <span>Recent Play</span>
            </div>
        </button>
        <div class="line"></div>
        <div class="sc-fHeRUh hhNgUw border_bottom">
            <span>Language Options</span>
            <div class="sc-jJoQJp gOHquD select  sc-dtDOqo lfiNFq">
                <div class="select-trigger">English
                    <div class="arrow top">
                        <Icon src={RiSystemArrowRightSLine}  size="18"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
                    </div>
                </div>
            </div>
            <div class="sc-gSQFLo dprxuS theme">
                <div class="theme-check">
                    <button on:click={()=>handeTheme("dark")} class={ `item ${isLight ? "" : "is-active"} `}>
                        <Icon src={IoMoon}  size="18"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="moon" />
                    </button>
                    <button on:click={()=>handeTheme("light")} class={ `item ${isLight ? "is-active" : ""} `}>
                        <Icon  src={HiSolidLightBulb}  size="18"  color="#ffff" className="custom-icon" title="light" />
                    </button>
                </div>
                <div class="theme-word">
                    <p>{ isLight ? `Lightmode` : `Darkmode` }</p>
                    <p>Currently</p>
                </div>
            </div>

            <div class="border_bottom">
                <div class="live">
                    <div class="support-icon">
                        <Icon src={FaSolidHeadphones}  size="18"  color="#ffff" className="custom-icon" title="moon" />
                    </div>
                    <span>Live Support</span>
                </div>
            </div>
            <div class="border_bottom end">
                <div class="network">
                    <span>Social Media</span>
                    <div class="sc-XxNYO hNXSBx social-links">
                        <a class="telegram" href="https://t.me/NanoGamesOfficial" target="_blank">
                            <img src="https://static.nanogames.io/assets/Telegram.f76d7c46.svg" class="telegram" alt="">
                        </a>
                        <a class="github" href="https://github.com/NanoGamesio/crash/" target="_blank">
                            <img src="https://static.nanogames.io/assets/Github.87e42b3d.svg" class="github" alt="">
                        </a>
                        <a class="twitter" href="https://twitter.com/nanogamesio?lang=en" target="_blank">
                            <img src="https://static.nanogames.io/assets/Twitter.ec46be69.svg" class="twitter" alt="">
                        </a>
                        <a class="discord" href="https://discord.gg/5sWsU4d" target="_blank">
                            <img src="https://static.nanogames.io/assets/Discord.cbf05e6a.svg" class="discord" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
