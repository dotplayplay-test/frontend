<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import AiFillGift from "svelte-icons-pack/ai/AiFillGift";
import Original from "./original.svelte";
import { goto } from "$app/navigation"
import { browser } from '$app/environment'
import {onMount} from "svelte";
export let styls;
let showOriginals = false

const openOriginal = ((e) => {
    if (e) {
        showOriginals = true
    } else {
        showOriginals = false
    }
})


let home;
let lottery;
let original
let affiliate;
let vipclub
let recent
let probablyFair
let favourite
let promotion
let bonus 

onMount(() => {
    if (browser && window.location.pathname === "/") {
        home = true
    } else if (browser && window.location.pathname === "/crash" || browser && window.location.pathname === "/plinko" || 
    browser && window.location.pathname === "/tower" || browser && window.location.pathname === "/diamond" || 
    browser && window.location.pathname === "/classic-dice" || browser && window.location.pathname === "/mines" || browser && window.location.pathname === "/hilo") {
        original = true
    } else if (browser && window.location.pathname === "/lottery") {
        lottery = true
    } else if (browser && window.location.pathname === "/affiliate") {
        affiliate = true
    } else if (browser && window.location.pathname === "/help/provably-fair" ||
                browser && window.location.pathname === "/help/agreement" ||
                browser && window.location.pathname === "/help/coinlimit" ||
                browser && window.location.pathname === "/help/contactus" ||
                browser && window.location.pathname === "/help/fee" ||
                browser && window.location.pathname === "/help/googlecheck" ||
                browser && window.location.pathname === "/help/faq" ||
                browser && window.location.pathname === "/help/passcurrency" ||
                browser && window.location.pathname === "/help/privacy" ||
                browser && window.location.pathname === "/help/reglog" ||
                browser && window.location.pathname === "/help/swappolicy" ||
                browser && window.location.pathname === "/help/terms-service"
                ) 
     {
        probablyFair = true
    }
    else if (browser && window.location.pathname === "/vip-games") {
        vipclub = true
    }
    else if (browser && window.location.pathname === "/bonus") {
        bonus= true
    }
    else if (browser && window.location.pathname === "/recent-play") {
        recent = true
    }
    else if (browser && window.location.pathname === "/favourite") {
        favourite = true
    }
    else if (browser && window.location.pathname === "/promotion") {
        promotion = true
    }
})


const handleNavigation = ((e) => {
    if (e === "/") {
        goto(e)
        home = true
        lottery = false
        vipclub = false
        affiliate = false
        recent = false
        favourite = false
        original = false
        probablyFair = false
        bonus = false
    }
    else if (e === "/bonus") {
        bonus = true
        lottery = false
        home = false
        affiliate = false
        vipclub = false
        recent = false
        favourite = false
        original = false
        probablyFair = false
        promotion = false
        goto(e)
    } 
     else if (e === "/lottery") {
        lottery = true
        home = false
        affiliate = false
        vipclub = false
        recent = false
        favourite = false
        original = false
        probablyFair = false
        promotion = false
        bonus = false
        goto(e)
    } else if (e === "/affiliate") {
        lottery = false
        home = false
        vipclub = false
        affiliate = true
        recent = false
        favourite = false
        original = false
        goto(e)
        probablyFair = false
        promotion = false
        bonus = false
    }
    else if (e === "/vip-games") {
        lottery = false
        home = false
        vipclub = true
        affiliate = false
        recent = false
        favourite = false
        original = false
        probablyFair = false
        promotion = false
        bonus = false
        goto(e)
    }
    else if (e === "/help/provably-fair") {
        lottery = false
        home = false
        vipclub = false
        affiliate = false
        recent = false
        favourite = false
        original = false
        bonus = false
        goto(e)
        promotion = false
        probablyFair = true
    }
    else if (e === "/recent-play") {
        lottery = false
        bonus = false
        recent = true
        home = false
        vipclub = false
        affiliate = false
        favourite = false
        original = false
        goto(e)
        probablyFair = false
        promotion = false
    }
    else if (e === "/favourite") {
        lottery = false
        recent = false
        home = false
        vipclub = false
        bonus = false
        affiliate = false
        favourite = true
        original = false
        goto(e)
        promotion = false
    }
    else if (e === "/promotion") {
        lottery = false
        recent = false
        home = false
        vipclub = false
        bonus = false
        affiliate = false
        favourite = true
        original = false
        goto(e)
        promotion = true
    }
    else {
        lottery = false
        recent = false
        home = false
        vipclub = false
        affiliate = false
        favourite = false
        bonus = false
        original = true
        probablyFair = false
        promotion = false
    }
})


</script>

<div class="sc-jHkVzv eTxQfM fold">
    <div class="small-sidebar hidden-scroll-y">
        <div class="sc-bilyIR ioXbGd">
            <div class="tab-more">
                <div class="tab-item select small-icon">
                    <img alt="icon" src="https://static.nanogames.io/assets/casino.8f220c2c.png">
                </div>
            </div>
        </div>
        <button on:click={()=> handleNavigation("/")} class={`sc-iNGGcK knLCVT menu-item ${home ? "select" : ""}`}>
            <div class="menu-mobile">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/home.e1cf89b4.png">
            </div>
        </button>
        <button on:mouseenter={()=> openOriginal(1)} on:mouseleave={()=> openOriginal(0)} class="sc-iNGGcK sc-eJwWfJ knLCVT beCBEn menu-item">
            <div class={`sc-iNGGcK sc-eJwWfJ knLCVT beCBEn menu-item menu-mobile ${original ? "select" : ""}`}>
                <img alt="menu-icon" src="https://static.nanogames.io/assets/originalcasino.bb7966a7.png">
            </div>
            <div style="margin-left: -1.125rem;
                margin-right: 0.25rem; margin-top: -0.1rem;
               ">
             <Icon src={RiSystemArrowRightSLine}  size="30"  color="rgba(153, 164, 176, 0.8)" className="sc-gsDKAQ hxODWG icon right right-fold" title="arror" />
            </div>
            {#if (showOriginals)}
             <Original styls={styls} />
            {/if}
        </button>
        <button on:click={()=> handleNavigation("/bonus")} class={`sc-iNGGcK knLCVT menu-item ${bonus ? "select" : ""}`}>
            <div class="menu-mobile">
                <Icon src={AiFillGift}  size="25"  color="rgb(67, 179, 9)" className="custom-icon" title="arror" />
            </div>
        </button>
        <button on:click={()=> handleNavigation("/promotion")} class={`sc-iNGGcK knLCVT menu-item ${promotion ? "select" : ""}`}>
            <div class="menu-mobile">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/promotion.316446ec.png">
            </div>
        </button>
        <button on:click={()=> handleNavigation("/lottery")} class={`sc-iNGGcK knLCVT menu-item ${lottery ? "select" : ""}`}>
            <div class="menu-mobile">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/lottery.bc95b607.png">
            </div>
        </button>
        <button on:click={()=> handleNavigation("/affiliate")} class={`sc-iNGGcK knLCVT menu-item ${affiliate ? "select" : ""}`}>
            <div class="menu-mobile">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/affiliate.6f434c33.png">
            </div>
        </button>
        <button on:click={()=> handleNavigation("/vip-games")} class={`sc-iNGGcK knLCVT menu-item special-nav vip ${vipclub ? "select" : ""}`}>
            <div class="menu-mobile">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/vipclub.3b37e72c.png">
            </div>
        </button>
        <button on:click={()=> handleNavigation("/help/provably-fair")} class={`sc-iNGGcK knLCVT menu-item ${probablyFair ? "select" : ""}`}>
            <div class="menu-mobile">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/fairness.12d49bfb.png">
            </div>
        </button>
        <div class="sc-eGPXGI kCbnNh"></div>
        <button on:click={()=> handleNavigation("/favourite")} class={`sc-iNGGcK knLCVT menu-item ${favourite ? "select" : ""}`}>
            <div class="menu-mobile">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/myfavorite.466f0741.png">
            </div></button>
        <button on:click={()=> handleNavigation("/recent-play")} class={`sc-iNGGcK knLCVT menu-item  ${recent ? "select" : ""}`}><div class="menu-mobile"><img alt="menu-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAARVBMVEUAAACNI+aTK++NJOWNI+eMI+aNJOaNJOacLOqOJ+uOJeeNJOaNJOWNJOaOI+aNJeeOJOaPJOePJ+WNJOiSJO2NI+aMI+Uq+huBAAAAFnRSTlMA2Q/5aee/uQsmUfPFopB9XEA7OBzSytsOlAAAASJJREFUWMPtlsmuwjAMRZM6Ywc6APf/P/XBAtynQOV4AQtytpGOZMe5sWk0Go2Gjm6Zgh0GG6alM3r6QHhCoVdqthGg6NacUl5dJGDcNJ4T4F23q9J54FTfnAiak/lHmgmxq/RY+LMpOHvYOlPE9WJecLki1vXHs8feYJOv6dMG2tWFG7vqCPK7GzGbdyIzYxTPIXx6L0oe0skMcKYQMQ5BePVEXSEqzgUsiOZIZCIWkWiCOxY5TMIWrceiVdgki1yI8p1HZzKsSDQgFaI7z4oThk+KuLRSxKWpmm0f9Nxs1fUzfP2qgWR4IMVPRHlePtrjyoIiRhhFjHCwMZpg46hlVFHL4c8owl/xHWk/yE9/2folQr/W6Bet769+jUaj8dP8AetcFXVRAZgCAAAAAElFTkSuQmCC"></div></button>
        <div class="line line-fold"></div>
        <div class="sc-evcjhq jzXtuE"><div class="fold-lan"><span class="ttu">en</span><div class="lan-wrap"><div class="sc-jJoQJp gOHquD select  sc-dtDOqo lfiNFq hidden-lan"><div class="select-trigger">English<div class="arrow top"><svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Arrow"></use></svg></div></div></div></div></div><div class="sc-fHeRUh hhNgUw fold-theme"><div class="theme-icon-wrap"><div class="theme-icon flex-center"><svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Dark"></use></svg></div></div><div class="sc-gSQFLo dprxuS theme"><div class="theme-check"><div class="item is-active"><svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Dark"></use></svg></div><div class="item"><svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Light"></use></svg></div></div><div class="theme-word"><p>Darkmode</p><p>Currently</p></div></div></div></div>
    </div>
</div>

<style>
.eTxQfM.fold {
    width: 76px;
}

.eTxQfM button {
    color: rgba(153, 164, 176, 0.8);
}

.eTxQfM {
    position: fixed;
    z-index: 102;
    left: 0px;
    top: 0px;
    bottom: 0px;
    width: 240px;
    color: rgba(153, 164, 176, 0.8);
    background-color: rgb(30, 32, 36);
    transition: all 0.2s linear 0s;
}

.eTxQfM .small-sidebar {
    width: 76px;
    height: 100%;
    overflow: hidden;
}

.ioXbGd {
    margin-top: 0.4375rem;
    margin-bottom: 0.4375rem;
    border-bottom: 1px solid rgba(49, 52, 60, 0.6);
    width: 100%;
    height: 3.25rem;
    box-sizing: content-box;
    padding-bottom: 1rem;
    padding-left: 0.625rem;
}

.ioXbGd .tab-more {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid transparent;
    width: 3.25rem;
    height: 3.25rem;
    position: absolute;
    z-index: 10;
    padding: 0.1875rem;
}

.ioXbGd .tab-more .tab-item.select {
    background-color: rgb(43, 47, 55);
}

.ioXbGd .tab-more .tab-item {
    display: flex;
    flex: 0 0 auto;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 2.875rem;
    height: 2.875rem;
    border-radius: 17px;
    overflow: hidden;
}

.ioXbGd .tab-more .tab-item img {
    width: 2.125rem;
    height: 2.125rem;
    display: inline-block;
    vertical-align: top;
}

.knLCVT {
    width: 100%;
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 0.875rem;
}

.knLCVT.select .menu-mobile {
    background-image: linear-gradient(to right, rgba(105, 179, 1, 0.4), rgba(85, 89, 102, 0.4) 33%, rgba(85, 89, 102, 0.4));
}

.knLCVT .menu-mobile {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 0px auto 0.5rem;
}

.knLCVT .menu-mobile img {
    width: 2.5rem;
    height: 2.5rem;
}
.kCbnNh {
    border-bottom: 1px solid rgba(49, 52, 60, 0.6);
    margin: 1rem 0.625rem 1.25rem;
}
.jzXtuE .fold-lan {
    margin-top: 1rem;
}
.jzXtuE .fold-lan {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    margin: 0px auto 1rem;
}
.jzXtuE .fold-lan span {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: rgb(45, 48, 53);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}

.jzXtuE .fold-lan span {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: rgb(45, 48, 53);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
.gOHquD {
    position: relative;
    height: 2.5rem;
    opacity: 1;
}
.lfiNFq .select-trigger {
    background: rgba(45, 48, 53, 0.5);
}
.gOHquD .select-trigger {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;
    height: 100%;
    cursor: pointer;
    padding: 0px 1.25rem;
    user-select: none;
    border-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
}
.gOHquD .select-trigger .arrow {
    width: 2.5rem;
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    top: 0px;
}
.jzXtuE .fold-theme, .jzXtuE .fold-lan {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    margin: 0px auto 1rem;
}
.jzXtuE .fold-theme .theme-icon-wrap {
    width: 2.5rem;
    height: 2.5rem;
}
.jzXtuE .fold-theme .theme {
    display: none;
}
.eTxQfM::after {
    content: "";
    position: absolute;
    left: 100%;
    top: 0px;
    width: 0.75rem;
    height: 100%;
    pointer-events: none;
    background-image: linear-gradient(to right, rgb(4, 4, 4), rgba(36, 38, 43, 0));
    opacity: 0.1;
    z-index: -1;
}
</style>
