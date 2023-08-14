<script>
import {
    goto
} from "$app/navigation"
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import IoMoon from "svelte-icons-pack/io/IoMoon";
import HiSolidLightBulb from "svelte-icons-pack/hi/HiSolidLightBulb";
import FaSolidHeadphones from "svelte-icons-pack/fa/FaSolidHeadphones";
import {
    browser
} from '$app/environment'
import {
    onMount
} from "svelte";
import Original from "./original.svelte";
import '../styles/sidebar/sidebar.css'
import '../styles/sidebar/sidebarmobile.css'

let showOriginals = false

const openOriginal = ((e) => {
    if (e === 1) {
        showOriginals = true
    } else {
        showOriginals = false
    }
})

let home = false
let originals = false
let lottery = false
let affiliate = false
let vip = false
let help = false
let recent = false
let favourite = false

let currentPath;
onMount(() => {
    currentPath = browser && window.location.pathname;
    if (currentPath === '/') {
        home = true
    } else if (currentPath === '/crash' || currentPath === '/classic-dice' || currentPath === '/hili' || currentPath === '/diamonds' || currentPath === '/mines' || currentPath === '/plinko' || currentPath === '/tower') {
        originals = true
    } else if (currentPath === '/lottery') {
        lottery = true
    } else if (currentPath === '/affiliate') {
        affiliate = true
    } else if (currentPath === '/vip-games') {
        vip = true
    } else if (currentPath === '/help/*') {
        help = true
    } else if (currentPath === '/favourite') {
        favourite = true
    } else if (currentPath === '/recent-play') {
        recent = true
    }
});

const handleRoutes = (e) => {
    if (e === 1) {
        currentPath = '/'
        goto("/")
        home = true
        originals = false
        lottery = false
        affiliate = false
        vip = false
        help = false
        recent = false
        favourite = false
    } else if (e.detail === 2) {
        home = false
        originals = true
        lottery = false
        affiliate = false
        vip = false
        help = false
        recent = false
        favourite = false
    } else if (e === 3) {
        goto('/lottery')
        currentPath = '/lottery'
        home = false
        originals = false
        lottery = true
        affiliate = false
        vip = false
        help = false
        recent = false
        favourite = false
    } else if (e === 4) {
        goto("affiliate")
        currentPath = '/affiliate'
        home = false
        originals = false
        lottery = false
        affiliate = true
        vip = false
        help = false
        recent = false
        favourite = false
    } else if (e === 5) {
        goto("vip-games")
        currentPath = '/vip-games'
        home = false
        originals = false
        lottery = false
        affiliate = false
        vip = true
        help = false
        recent = false
        favourite = false
    } else if (e === 6) {
        goto("help/probably-fair")
        currentPath = '/help/*'
        home = false
        originals = false
        lottery = false
        affiliate = false
        vip = false
        help = true
        recent = false
        favourite = false
    } else if (e === 7) {
        goto("favourite")
        currentPath = '/favourite'
        home = false
        originals = false
        lottery = false
        affiliate = false
        vip = false
        help = false
        favourite = true
        recent = false
    } else if (e === 8) {
        goto("recent-play")
        currentPath = '/recent-play'
        home = false
        originals = false
        lottery = false
        affiliate = false
        vip = false
        help = false
        recent = true
        favourite = false
    }
}
</script>

<div id="sidebar" class="sc-jHkVzv eTxQfM unfold">
    <div class="large-sidebar hidden-scroll-y">
        <div class="sc-uojGG hksQGj">
            <a aria-current="page" class="is-active active" href="/">Casino</a>
        </div>
        <button class="sc-iNGGcK knLCVT menu-item select">
            <div class="menu-pc">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/home.e1cf89b4.png"><span>Home</span>
            </div>
        </button>
        <button class="sc-iNGGcK sc-eJwWfJ knLCVT beCBEn menu-item ">
            <div class="menu-pc">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/originalcasino.bb7966a7.png">
                <span>DP Originals</span>
            </div>
            <svg class="sc-gsDKAQ hxODWG icon right" fill="none" viewBox="0 0 24 24" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
                <path xmlns="http://www.w3.org/2000/svg" d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="rgba(153,164,176,.8)"></path>
            </svg>
        </button>
        <button class="sc-iNGGcK knLCVT menu-item">
            <div class="menu-pc">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/lottery.bc95b607.png">
                <span>Lottery</span>
            </div>
        </button>
        <button class="sc-iNGGcK knLCVT menu-item"><div class="menu-pc"><img alt="menu-icon" src="https://static.nanogames.io/assets/affiliate.6f434c33.png">
            <span>Affiliate</span>
        </div>
        </button>
        <button class="sc-iNGGcK knLCVT menu-item special-nav vip">
            <div class="menu-pc">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/vipclub.3b37e72c.png">
                <span>VIP Club</span>
            </div>
        </button>
        <button class="sc-iNGGcK knLCVT menu-item"><div class="menu-pc"><img alt="menu-icon" src="https://static.nanogames.io/assets/fairness.12d49bfb.png">
            <span>Provably Fair</span>
        </div>
        </button>
        <div class="sc-eGPXGI kCbnNh"></div>

        <button class="sc-iNGGcK knLCVT menu-item">
            <div class="menu-pc">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/myfavorite.466f0741.png">
                <span>Favorite Games</span>
            </div>
        </button>
        <button class="sc-iNGGcK knLCVT menu-item">
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
                    <div class="item is-active">
                        <Icon src={IoMoon}  size="18"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="moon" />
                    </div>
                    <div class="item">
                        <Icon src={HiSolidLightBulb}  size="18"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="moon" />
                    </div>
                </div>
                <div class="theme-word">
                    <p>Darkmode</p>
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

<!-- <div class="side-bar sc-jHkVzv eTxQfM unfold">
    <div class="MainBar">

        <div class="MenuBar-contents">

            <button on:click={()=>handleRoutes(1)} class="nav-details">
                <div class={home ? "nav-contents" : "notActive"}>
                    <div class="game-icon">
                        <img src='https://static.nanogames.io/assets/home.e1cf89b4.png' alt="casino" />
                    </div>
                    <div class="game-text">
                        <h3>Home</h3>
                    </div>
                </div>
            </button>

            <button on:mouseenter={()=> openOriginal(1)} class="nav-details" on:mouseleave={()=> openOriginal(2)} >
                <div class="original-contents">
                    <div class={originals ? "nav-contents" : "notActive"}>
                        <div class="game-icon">
                            <img src='https://static.nanogames.io/assets/originalcasino.bb7966a7.png' alt="casino" />
                        </div>
                        <div class="game-text">
                            <h3>BC Original</h3>
                        </div>
                    </div>
                    <div class="game-arrow">
                        <svg fill="none" viewBox="0 0 24 24" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
                            <path xmlns="http://www.w3.org/2000/svg" d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="rgba(153,164,176,.8)"></path>
                        </svg>
                    </div>
                </div>
                {#if showOriginals}
                <Original on:bc={handleRoutes} />
                {/if}
            </button>

            <hr />

            <button on:click={()=>handleRoutes(3)} class="nav-details">
                <div class={lottery ? "nav-contents" : "notActive"}>
                    <div class="game-icon">
                        <img src='https://static.nanogames.io/assets/lottery.bc95b607.png' alt="casino" />
                    </div>
                    <div class="game-text">
                        <h3>Lottery</h3>
                    </div>
                </div>
            </button>

            <button on:click={()=>handleRoutes(4)} class="nav-details">
                <div class={affiliate ? "nav-contents" : "notActive"}>
                    <div class="game-icon">
                        <img src='https://static.nanogames.io/assets/affiliate.6f434c33.png' alt="casino" />
                    </div>
                    <div class="game-text">
                        <h3>Affiliate</h3>
                    </div>
                </div>
            </button>

            <button on:click={()=>handleRoutes(5)} class="nav-details">
                <div class={vip ? "nav-contents" : "notActive"}>
                    <div class="game-icon">
                        <img src="https://static.nanogames.io/assets/vipclub.3b37e72c.png" alt="casino" />
                    </div>
                    <div class="promotion">
                        <h3>VIP Club</h3>
                    </div>
                </div>
            </button>

            <button on:click={()=>handleRoutes(6)} class="nav-details">
                <div class={help ? "nav-contents" : "notActive"}>
                    <div class="game-icon">
                        <img src=https://static.nanogames.io/assets/fairness.12d49bfb.png alt="casino" />
                    </div>
                    <div class="game-text">
                        <h3>Provably Fair</h3>
                    </div>
                </div>
            </button>

            <hr />

            <button on:click={()=>handleRoutes(7)} class="nav-details">
                <div class={favourite? "nav-contents" : "notActive"}>
                    <div class="game-icon">
                        <img src="https://static.nanogames.io/assets/myfavorite.466f0741.png" alt="casino" />
                    </div>
                    <div class="game-text">
                        <h3>Favourite Games</h3>
                    </div>
                </div>
            </button>

            <button on:click={()=>handleRoutes(8)} class="nav-details">
                <div class={recent ? "nav-contents" : "notActive"}>
                    <div class="game-icon">
                        <img src="https://www.linkpicture.com/q/download_96.png" alt="casino" />
                    </div>
                    <div class="game-text">
                        <h3>My Recent Play</h3>
                    </div>
                </div>
            </button>
            <hr />

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
                        <div class="item is-active">
                            <Icon src={IoMoon}  size="18"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="moon" />
                        </div>
                        <div class="item">
                            <Icon src={HiSolidLightBulb}  size="18"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="moon" />
                        </div>
                    </div>
                    <div class="theme-word">
                        <p>Darkmode</p><p>Currently</p>
                    </div>
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

            <div class="border_bottom end"><div class="network"><span>Social Media</span><div class="sc-XxNYO hNXSBx social-links">
                <a class="telegram" href="https://t.me/NanoGamesOfficial" target="_blank">
                    <img src="https://static.nanogames.io/assets/Telegram.f76d7c46.svg" class="telegram" alt=""></a><a class="github" href="https://github.com/NanoGamesio/crash/" target="_blank"><img src="https://static.nanogames.io/assets/Github.87e42b3d.svg" class="github" alt=""></a><a class="twitter" href="https://twitter.com/nanogamesio?lang=en" target="_blank"><img src="https://static.nanogames.io/assets/Twitter.ec46be69.svg" class="twitter" alt=""></a><a class="discord" href="https://discord.gg/5sWsU4d" target="_blank"><img src="https://static.nanogames.io/assets/Discord.cbf05e6a.svg" class="discord" alt=""></a></div></div></div>
        </div>
    </div>
</div> -->
