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
            <Homeoriginals />
            <Latestbet />
        </div>
    </div>
</div>

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
