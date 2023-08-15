<script>
import "../styles/home/index.css"
import "../styles/home/indexmobile.css"
import {
    register
} from 'swiper/element/bundle';
import Homeoriginals from '$lib/homecomponents/homeoriginals.svelte';
import Latestbet from '$lib/homecomponents/latestbet.svelte';
import Homeanimaton from "../lib/homecomponents/homeanimaton.svelte";

register();
</script>

<div id="home-main" class="sc-lhMiDA ePAxUv">
    <div id="home" class="sc-jwQYvw eRdxAb">
        <div class="sc-bLdqUH bPsBUR banner">
            <div class="gradient-wrap">
                <div class="swiper swiper-initialized swiper-horizontal sc-haTkiu iyCsvj">
                    <swiper-container class="swiper-wrapper"
                        slides-per-view={1}
                        speed={2000}
                        loop={true}
                        autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        }} space-between="30"
                        >
                        <swiper-slide class="swiper-slide swiper-slide-duplicate">
                            <div class="sc-kTqLtj dnfJpJ">
                                <a href="/" class="sc-cfJLRR joQyOD">
                                    <img src="https://img2.nanogames.io/banner/40/b2/cb/164300069674127.png" alt="">
                                </a>
                                <a href="/" class="sc-cfJLRR ktmMpR">
                                    <img src="https://static.nanogames.io/assets/lottery.cb45faf6.png" alt="">
                                </a>
                                <a href="/" class="sc-cfJLRR ktmMpR">
                                    <img src="https://static.nanogames.io/assets/lottery.cb45faf6.png" alt="">
                                </a>
                            </div>
                        </swiper-slide>
                        <swiper-slide>

                            <div class="sc-kTqLtj dnfJpJ">
                                <a gridnum="2" href="/lottery" class="sc-cfJLRR joQyOD">
                                    <img src="https://img2.nanogames.io/banner/40/b2/cb/164300069674127.png" alt="">
                                </a>
                                <a gridnum="1" href="/lottery" class="sc-cfJLRR ktmMpR">
                                    <img src="https://static.nanogames.io/assets/lottery.cb45faf6.png" alt="">
                                </a>
                                <a gridnum="1" href="/lottery" class="sc-cfJLRR ktmMpR">
                                    <img src="https://static.nanogames.io/assets/lottery.cb45faf6.png" alt="">
                                </a>
                            </div>
                        </swiper-slide>
                    </swiper-container>
                </div>
            </div>
        </div>

        <div class="sc-gFSQbh gyJkwe">
            <Homeanimaton />
        </div>

    </div>
</div>

<!-- <div class="home">
        <div class="index">
            <div class="jwTuwwx dhghsgiw">
                <div class="shgvuvvvqq RabqooNu" style="height: 195.429px;">
                    <div class="wiwTvqwl gahwwmnx" style="width: 980px; transform: scale(1.02857);">
                        <div class="sfYnqus auwjanw small-large">
                            <div class="sc-gqtqkP kwUMQi small-scale-1">
                                <div class="top">
                                    <div class="circle">
                                        <img src="https://static.nanogames.io/assets/bigprofit.ae9b1ce1.png" alt="">
                                    </div>
                                    <div class="word">
                                        <p><span style="color: rgb(231, 11, 108);">Much</span> Won win</p>
                                    </div>
                                </div>
                                <div class="swiper swiper-initialized swiper-vertical swiper-pointer-events">
                                   
                                            </div>
                                            </div>

                                            <div class="sc-gqtqkP kwUMQi small-scale-2">
                                                <div class="top">
                                                    <div class="circle">
                                                        <img src="https://static.nanogames.io/assets/topprofit.bc94f362.png" alt="">
                                                    </div>
                                                    <div class="word">
                                                        <p><span style="color: rgb(245, 192, 31);">Top</span> Winning Games </p>
                                                    </div>
                                                </div>

                                                <div class="swiper swiper-initialized swiper-vertical swiper-pointer-events">

                                                    <swiper-container class="mySwiper"
                                                        slides-per-view={1}
                                                        speed={2800}
                                                        loop={true}
                                                        autoplay={{
                                                        delay: 2700,
                                                        disableOnInteraction: false,
                                                        }} space-between="30"
                                                        >

                                                        <swiper-slide>
                                                            <div class="sc-gLDmcm bZpQzZ">
                                                                <div class="item-wrap">
                                                                    <div class="sc-bnOPBZ gZglJR win-game-item">
                                                                        <div class="sc-cxVPaa gPcmgp left">
                                                                            <div class="image-inner">
                                                                                <img alt="logo" src="https://img2.nanogames.io/game/image/d1cd852c-126e-4407-a22a-97c26e9c941a.png">
                                                                            </div>
                                                                        </div>
                                                                        <div class="right">
                                                                            <div class="right-word-wrap big-word">
                                                                                <p title="Profit: $201.51">Profit:<span>$201.51</span>
                                                                                </p>
                                                                            </div>
                                                                            <div class="right-word-wrap">
                                                                                <p>In Wheel</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="item-wrap">
                                                                    <div class="sc-bnOPBZ gZglJR win-game-item">
                                                                        <div class="sc-cxVPaa gPcmgp left">
                                                                            <div class="image-inner">
                                                                                <img alt="logo" src="https://img2.nanogames.io/game/image/54316c47-c83c-4edd-9d5b-3693985e979e.png">
                                                                            </div>
                                                                        </div>
                                                                        <div class="right">
                                                                            <div class="right-word-wrap big-word">
                                                                                <p title="Profit: $122.92">Profit:<span>$122.92</span></p>
                                                                            </div>
                                                                            <div class="right-word-wrap">
                                                                                <p>In Book Of Cats</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                </swiper-slide>

                                                                <swiper-slide>
                                                                    <div class="sc-gLDmcm bZpQzZ">
                                                                        <div class="item-wrap">
                                                                            <div class="sc-bnOPBZ gZglJR win-game-item">
                                                                                <div class="sc-cxVPaa gPcmgp left">
                                                                                    <div class="image-inner">
                                                                                        <img alt="logo" src="https://img2.nanogames.io/game/image/2b1695ee-163d-4df2-bc4c-3a0e2252ac5b.png">
                                                                                    </div>
                                                                                </div>
                                                                                <div class="right">
                                                                                    <div class="right-word-wrap big-word">
                                                                                        <p title="Profit: $201.51">Profit:<span>$201.51</span>
                                                                                        </p>
                                                                                    </div>
                                                                                    <div class="right-word-wrap">
                                                                                        <p>In Wheel</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="item-wrap">
                                                                            <div class="sc-bnOPBZ gZglJR win-game-item">
                                                                                <div class="sc-cxVPaa gPcmgp left">
                                                                                    <div class="image-inner">
                                                                                        <img alt="logo" src="https://img2.nanogames.io/game/image/9fcfcdfe-81d9-43e3-a235-8f44177d54a7.png">
                                                                                    </div>
                                                                                </div>
                                                                                <div class="right">
                                                                                    <div class="right-word-wrap big-word">
                                                                                        <p title="Profit: $13.89">Profit:<span>$13.89</span></p>
                                                                                    </div>
                                                                                    <div class="right-word-wrap">
                                                                                        <p>In Candy Dreams: Sweet Planet</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </swiper-slide>

                                                                <swiper-slide>
                                                                    <div class="sc-gLDmcm bZpQzZ">
                                                                        <div class="item-wrap">
                                                                            <div class="sc-bnOPBZ gZglJR win-game-item">
                                                                                <div class="sc-cxVPaa gPcmgp left">
                                                                                    <div class="image-inner">
                                                                                        <img alt="logo" src="https://img2.nanogames.io/game/image/2b1695ee-163d-4df2-bc4c-3a0e2252ac5b.png">
                                                                                    </div>
                                                                                </div>
                                                                                <div class="right">
                                                                                    <div class="right-word-wrap big-word">
                                                                                        <p title="Profit: $201.51">Profit:<span>$201.51</span>
                                                                                        </p>
                                                                                    </div>
                                                                                    <div class="right-word-wrap">
                                                                                        <p>In Wheel</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="item-wrap">
                                                                            <div class="sc-bnOPBZ gZglJR win-game-item">
                                                                                <div class="sc-cxVPaa gPcmgp left">
                                                                                    <div class="image-inner">
                                                                                        <img alt="logo" src="https://img2.nanogames.io/game/image/0aa3d807-0380-4f8e-b65e-3179d4af2234.png">
                                                                                    </div>
                                                                                </div>
                                                                                <div class="right">
                                                                                    <div class="right-word-wrap big-word">
                                                                                        <p title="Profit: $110.23">Profit:<span>$110.23</span></p>
                                                                                    </div>
                                                                                    <div class="right-word-wrap">
                                                                                        <p>In Mines</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </swiper-slide>
                                                                </swiper-container>
                                                            </div>

                                                            </div>

                                                            <div class="small-scale-right">
                                                                <div class="sc-ihINtW cvKYOe sc-jefHZX gHAAU midden-right">
                                                                    <div class="sc-cxpSdN kQfmQV tabs">
                                                                        <div class="tabs-navs">
                                                                            <button class="tabs-nav is-active">
                                                                                <div class="sc-gqtqkP kwUMQi">
                                                                                    <div class="top">
                                                                                        <div class="circle">
                                                                                            <img src="https://static.nanogames.io/assets/popular.91e8961d.png" alt="">
                                                                                        </div>
                                                                                        <div class="word">
                                                                                            <p><span style="color: rgb(93, 219, 28);">Trending</span>Right Now</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </button>

                                                                            <button class="tabs-nav">
                                                                                <div class="sc-gqtqkP kwUMQi">
                                                                                    <div class="top">
                                                                                        <div class="circle">
                                                                                            <img src="	https://static.nanogames.io/assets/recent.3891d707.png" alt="">
                                                                                        </div>
                                                                                        <div class="word">
                                                                                            <p>Recently Added</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </button>
                                                                        </div>
                                                                        <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                                                                            <swiper-container class="mySwiper"
                                                                                slides-per-view={1}
                                                                                speed={2000}
                                                                                loop={true}
                                                                                autoplay={{
                                                                                delay: 2000,
                                                                                disableOnInteraction: false,
                                                                                }} space-between="30"
                                                                                >

                                                                                <swiper-slide style="width: 436px;
                                                                                    margin-right: 12px;" class="right-slides" >
                                                                                    <div class="good-games-wrap">
                                                                                        <div class="item-wrap">
                                                                                            <div class="sc-hIagIn kqweJp win-game-item">
                                                                                                <div class="sc-cxVPaa gPcmgp left">
                                                                                                    <div class="image-inner">
                                                                                                        <img alt="logo" src="https://img2.nanogames.io/game/image/5ab9c93b-8f99-4ff8-94ae-e412357578a6.png">
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="right">
                                                                                                    <div class="right-word-wrap one-p">
                                                                                                        <p>Crash</p>
                                                                                                    </div>
                                                                                                    <div class="right-word-wrap two-p">
                                                                                                        <p>RTP:<span>99%</span></p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="item-wrap">
                                                                                            <div class="sc-hIagIn kqweJp win-game-item">
                                                                                                <div class="sc-cxVPaa gPcmgp left">
                                                                                                    <div class="image-inner">
                                                                                                        <img alt="logo" src="https://img2.nanogames.io/game/image/0aa3d807-0380-4f8e-b65e-3179d4af2234.png">
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="right">
                                                                                                    <div class="right-word-wrap one-p">
                                                                                                        <p>Mines</p>
                                                                                                    </div>
                                                                                                    <div class="right-word-wrap two-p">
                                                                                                        <p>RTP:<span>99%</span></p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="item-wrap">
                                                                                            <div class="sc-hIagIn kqweJp win-game-item">
                                                                                                <div class="sc-cxVPaa gPcmgp left">
                                                                                                    <div class="image-inner">
                                                                                                        <img alt="logo" src="https://img2.nanogames.io/game/image/455dda9f-80eb-438c-958c-45c355c3c659.png">
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="right">
                                                                                                    <div class="right-word-wrap one-p">
                                                                                                        <p>Classic Dice</p>
                                                                                                    </div>
                                                                                                    <div class="right-word-wrap two-p">
                                                                                                        <p>RTP:<span>99%</span>
                                                                                                        </p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </swiper-slide>
                                                                                <swiper-slide>
                                                                                    <div class="good-games-wrap">
                                                                                        <div class="item-wrap">
                                                                                            <div class="sc-hIagIn kqweJp win-game-item">
                                                                                                <div class="sc-cxVPaa gPcmgp left">
                                                                                                    <div class="image-inner">
                                                                                                        <img alt="logo" src="https://img2.nanogames.io/game/image/5ab9c93b-8f99-4ff8-94ae-e412357578a6.png">
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="right">
                                                                                                    <div class="right-word-wrap one-p">
                                                                                                        <p>Crash</p>
                                                                                                    </div>
                                                                                                    <div class="right-word-wrap two-p">
                                                                                                        <p>RTP:<span>99%</span></p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="item-wrap">
                                                                                            <div class="sc-hIagIn kqweJp win-game-item">
                                                                                                <div class="sc-cxVPaa gPcmgp left">
                                                                                                    <div class="image-inner">
                                                                                                        <img alt="logo" src="https://img2.nanogames.io/game/image/0aa3d807-0380-4f8e-b65e-3179d4af2234.png">
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="right">
                                                                                                    <div class="right-word-wrap one-p">
                                                                                                        <p>Mines</p>
                                                                                                    </div>
                                                                                                    <div class="right-word-wrap two-p">
                                                                                                        <p>RTP:<span>99%</span></p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="item-wrap">
                                                                                            <div class="sc-hIagIn kqweJp win-game-item">
                                                                                                <div class="sc-cxVPaa gPcmgp left">
                                                                                                    <div class="image-inner">
                                                                                                        <img alt="logo" src="https://img2.nanogames.io/game/image/455dda9f-80eb-438c-958c-45c355c3c659.png">
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="right">
                                                                                                    <div class="right-word-wrap one-p">
                                                                                                        <p>Classic Dice</p>
                                                                                                    </div>
                                                                                                    <div class="right-word-wrap two-p">
                                                                                                        <p>RTP:<span>99%</span>
                                                                                                        </p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </swiper-slide>
                                                                            </swiper-container>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            </div>
                                                            </div>
                                                            <Homeoriginals />
                                                            <div class="screen-wrap">
                                                                <Latestbet />
                                                            </div>
                                                            </div>
                                                            </div>
</div> -->

<div id="mobile-home" class="sc-jwQYvw eRdxAb">
    <div class="sc-bLdqUH kmnLYQ banner gradient-mobile">
        <div class="gradient-wrap">
            <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events sc-haTkiu iyCsvj">
                <swiper-container class="swiper-wrapper"
                    slides-per-view={1}
                    speed={2000}
                    loop={true}
                    autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    }} space-between="30"
                    >
                    <swiper-slide class="swiper-wrapper">
                        <div class="sc-kTqLtj dnfJpJ">
                            <a href="/" class="sc-cfJLRR ktmMpR">
                                <img src="	https://img2.nanogames.io/banner/af/c7/94/164300069949835.png" alt="">
                            </a>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="image-content">
                            <a href="/" class="sc-cfJLRR ktmMpR">
                                <img src="https://img2.nanogames.io/banner/cf/56/a5/164300091137615.png" alt="">
                            </a>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="image-content">
                            <a href="/" class="sc-cfJLRR ktmMpR">
                                <img src="https://img2.nanogames.io/banner/58/3b/b1/164300088905192.png" alt="">
                            </a>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="image-content">
                            <a href="/" class="sc-cfJLRR ktmMpR">
                                <img src="https://img2.nanogames.io/banner/b7/6d/13/164300094200682.png" alt="">
                            </a>
                        </div>
                    </swiper-slide>
                </swiper-container>
            </div>
        </div>
    </div>
</div>
