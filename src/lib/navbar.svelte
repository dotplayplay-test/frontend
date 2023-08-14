<script>
import "../styles/navbar/mobileNavbar.css"
import "../styles/navbar/navbar.css"
import Icon from 'svelte-icons-pack/Icon.svelte';
import HiSolidMenu from "svelte-icons-pack/hi/HiSolidMenu";
</script>

<div class="Navbar">
    <div class=Navbar-container>
        <div class="logo">
            <a href="/">DOTPLAYPLAY</a>
        </div>
        <div class="logins">
            <div class="login">
                <a href="/login">Login</a>
            </div>
            <div class="signup">
                <a href="/signup">Signup</a>
            </div>
            <div class="chat" >
                <div class="icon">
                    <img src="https://www.linkpicture.com/q/play_2.png" alt="" />
                </div>
                <div class="num">
                    <p>1</p>
                </div>
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
