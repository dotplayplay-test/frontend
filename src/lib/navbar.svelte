<script>
import "../styles/navbar/mobileNavbar.css"
import "../styles/navbar/navbar.css"
import Icon from 'svelte-icons-pack/Icon.svelte';
import HiSolidMenu from "svelte-icons-pack/hi/HiSolidMenu";
export let styles;

</script>

<div class="sc-gVkuDy gAvMHL" style={`padding-left:${styles ? 240 : 76}px; `} >
    <div class="header-wrap">
        <div class="header">
            <div class="sc-hGnimi ftyLxH left">
                <div class="sc-iukxot jivBdD logo-pc">
                    <img alt="logo" class="logo-com" src="https://static.nanogames.io/assets/logo.cebcfe09.png">
                </div>
                <div class="sc-jtXEFf jsyNKG search-pc">
                    <div class="search-input-wrap-pc">
                        <div class="sc-kTLmzF dwaOxj">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_Search"></use>
                            </svg>
                            <input placeholder="Game name | Provider | Category Tag" value="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="login-in">
                <p>Sign in</p>
                <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                    <div class="button-inner">Sign up</div>
                </button>
                <button id="chat" class="sc-eicpiI PGOpB">
                    <div class="chat-btn ">
                        <img class="sc-gsDKAQ hxODWG icon" src="https://www.linkpicture.com/q/play_2.png" alt="" />
                        <div class="sc-fotOHu gGSOuF badge ">26</div>
                    </div>
                </button>
            </div>
        </div>
    </div>
</div>


<!-- ============================================ Mobile view =========================================== -->
<div class="mobile-navbar">
    <div class="sc-hJhJFJ jVgBRe" style="transform: translate3d(0px, 0%, 0px);">
        <div class="login-top">
            <div class="logo-wrap">
                <img alt="logo" src="https://static.nanogames.io/assets/logo_small.c965cce9.png">
            </div>
            <button class="sc-bQtKYq cUTdQJ">
                <span class="open-wrap">
                    <Icon src={HiSolidMenu}  size="18"  color="rgb(67, 179, 9)" className="custom-icon" title="arror" />
                </span>
            </button>
            <div class="header-login">
                <p>Sign in</p>
                <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                    <div class="button-inner">Sign up</div>
                </button>
            </div>
        </div>
        <div class="bottom">
            <div class="left"></div>
            <div class="right">
                <button id="chat" class="sc-eicpiI PGOpB chat-btn">
                    <img class="sc-gsDKAQ hxODWG icon" src="https://www.linkpicture.com/q/play_2.png" alt="" />
                    <div class="sc-fotOHu gGSOuF badge ">99</div>
                </button>
            </div>
        </div>
    </div>
</div>

