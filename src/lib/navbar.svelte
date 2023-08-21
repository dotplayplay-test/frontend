<script>
import RiSystemArrowDropDownLine from "svelte-icons-pack/ri/RiSystemArrowDropDownLine";
import BiSolidWallet from "svelte-icons-pack/bi/BiSolidWallet";
import CgMenuCheese from "svelte-icons-pack/cg/CgMenuCheese";
import BiSolidMessageAltDetail from "svelte-icons-pack/bi/BiSolidMessageAltDetail";
import IoNotifications from "svelte-icons-pack/io/IoNotifications";
import {
    goto
} from "$app/navigation"
import "../styles/navbar/mobileNavbar.css"
import "../styles/navbar/navbar.css"
import Icon from 'svelte-icons-pack/Icon.svelte';
import HiSolidMenu from "svelte-icons-pack/hi/HiSolidMenu";
export let styles;
export let chatroom;
import {
    createEventDispatcher
} from 'svelte'
import AuthContext from "./hook/authContext";
const dispatch = createEventDispatcher()

const handleChat = (() => {
    dispatch("handleChatRoom", "abek open")
})

const handleAuth = (e) => {
    if (e === 1) {
        goto("/register")
    } else {
        goto("/login")
    }
}

const handleMenu = (() => {
    dispatch("handleMenuMobile")
})
</script>

<div id="main" class="sc-gVkuDy gAvMHL" style={`padding-left:${styles ? 240 : 76}px; margin-right: ${chatroom}px; `} >
    <div class="header-wrap">
        <div class="header">
            <div class="sc-hGnimi ftyLxH left">
                <div class="sc-iukxot jivBdD logo-pc">
                    <img alt="logo" class="logo-com" src="https://www.linkpicture.com/q/dpp-favicon-logo-allwhite-transparent-final.png">
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

            {#if ($AuthContext)}
            <div class="sc-DtmNo euzHLF right">
                <div class="sc-gjNHFA juteh wallet-enter">
                    <div class="sc-fmciRz LQlWw">
                        <div class="sc-iFMAIt icGouR">
                            <div class="sc-eXlEPa boxpOO">
                                <img class="coin-icon" alt="" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579">
                                <span class="currency">USDT</span>
                                <Icon src={RiSystemArrowDropDownLine}  size="18"  color="rgb(171, 182, 194)" className="custom-icon" title="arror" />
                            </div>
                            <div class="sc-Galmp erPQzq coin notranslate balance">
                                <div class="amount">
                                    <span class="amount-str">0.<span class="suffix">00000000</span></span>
                                </div>
                            </div>
                        </div>
                        <button class="sc-iqseJM sc-bqiRlB cBmlor eWZHfu button button-normal sc-iqVWFU fGPfpD">
                            <div class="button-inner">
                                <span class="wallet-icon"><Icon src={BiSolidWallet}  size="18"  color="rgb(255, 255, 255)"  title="arror" /> </span>
                                <span>Wallet</span>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="sc-gnnDb fWkueO">
                    <div class="user-wrap">
                        <a href="/user/profile/505090">
                            <img class="avatar" alt="" src="https://img2.nanogames.io/avatar/505090/s?t=1692615121845">
                        </a>
                        <div class="svg">
                            <span class="na-menu"><Icon src={CgMenuCheese}  size="18"   color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" /></span>

                        </div>
                    </div>
                </div>
                <button class="sc-dcgwPl bbYXSv private-chat">
                    <span class="nav-message"><Icon src={BiSolidMessageAltDetail}  size="18"   color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" /></span>
                </button>
                <button id="notice" class="sc-ksHpcM kultDa notice">
                    <div class="notice-btn ">
                        <span class="na-notification"><Icon src={IoNotifications}  size="18"   color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" /></span>
                    </div>
                </button>
                <button on:click={handleChat} id="chat" class="sc-eicpiI PGOpB">
                    <div class="chat-btn ">
                        <img class="sc-gsDKAQ hxODWG icon" src="https://www.linkpicture.com/q/play_2.png" alt="" />
                        <div class="sc-fotOHu gGSOuF badge ">26</div>
                    </div>
                </button>
            </div>
            {:else}
            <div class="login-in">
                <button  on:click={()=>handleAuth(2)} >
                    <p >Sign in</p>
                </button>
                <button on:click={()=>handleAuth(1)} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                    <div class="button-inner">Sign up</div>
                </button>
                <button on:click={handleChat} id="chat" class="sc-eicpiI PGOpB">
                    <div class="chat-btn ">
                        <img class="sc-gsDKAQ hxODWG icon" src="https://www.linkpicture.com/q/play_2.png" alt="" />
                        <div class="sc-fotOHu gGSOuF badge ">26</div>
                    </div>
                </button>
            </div>
            {/if}
        </div>
    </div>
</div>

<!-- ============================================ Mobile view =========================================== -->
<div class="mobile">
    <div class="sc-hJhJFJ jVgBRe" style="transform: translate3d(0px, 0%, 0px);">
        <div class="login-top">
            <div class="logo-wrap">
                <img alt="logo" src="https://static.nanogames.io/assets/logo_small.c965cce9.png">
            </div>
            <button on:click={handleMenu} class="sc-bQtKYq cUTdQJ">
                <span class="open-wrap">
                    <Icon src={HiSolidMenu}  size="18"   color="rgb(67, 179, 9)" className="custom-icon" title="arror" />
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

<style>
.cBmlor {
    display: block;
    width: 100%;
    border-radius: 6.25rem;
    height: 3rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
}

.gAvMHL .right {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
}

.euzHLF .wallet-enter {
    margin-right: 24px;
}

@media screen and (min-width: 1080px) and (max-width: 1440px) {
    .euzHLF .wallet-enter {
        margin-right: 6px;
    }
}

.juteh {
    position: relative;
    cursor: pointer;
}

.LQlWw {
    background-color: rgb(30, 32, 36);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 3rem;
    border-radius: 1.5rem;
    padding-left: 0.875rem;
    line-height: 1;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
}

.icGouR {
    position: relative;
    margin: 0.4375rem 0.25rem 0.4375rem 0.4375rem;
}

.eWZHfu.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(88, 26, 196);
    background-image: conic-gradient(from 1turn, rgb(88, 26, 196), rgb(119, 60, 253));
}

.fGPfpD {
    height: 100%;
    width: 7.25rem;
}

.boxpOO {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-weight: 800;
    min-width: 5.75rem;
}

.erPQzq {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
}

.boxpOO .coin-icon {
    width: 1rem;
    height: 1rem;
}

.boxpOO .currency {
    margin: 0px 0.625rem 0px 0.4375rem;
}

.icGouR .balance .amount {
    color: rgb(245, 246, 247);
    font-weight: 800;
}

.erPQzq .amount-str {
    width: 7em;
    display: inline-block;
}

.erPQzq .suffix {
    opacity: 0.5;
}

.cBmlor>.button-inner {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.fGPfpD .wallet-icon {
    margin-right: 0.3125rem;
}

.fWkueO {
    width: 5rem;
    height: 2.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(30, 32, 36);
    border-radius: 1.25rem;
    cursor: pointer;
    position: relative;
    z-index: 9;
}

.fWkueO .user-wrap {
    display: flex;
}

.fWkueO .user-wrap>a {
    font-size: 0px;
}

.fWkueO .user-wrap>a .avatar {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
}

.fWkueO .svg {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}

.fWkueO .svg>.na-menu {
    font-size: 0.75rem;
    margin-left: -4px;
}

.bbYXSv {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 0 0 auto;
    width: 2.5rem;
    height: 2.5rem;
    position: relative;
}

@media screen and (min-width: 1080px) and (max-width: 1440px) {
    .euzHLF .private-chat {
        margin-left: 12px;
    }

    .euzHLF #notice {
        margin-right: 8px;
        margin-left: 4px;
    }
}

.bbYXSv .nav-message {
    width: 1.375rem;
    height: 1.375rem;
}

.kultDa {
    cursor: pointer;
}

.kultDa .notice-btn {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
.gAvMHL .login-in .button {
    width: 6.25rem;
    height: 2.5rem;
    margin-right: 3.125rem;
}
</style>
