<script>
import HiSolidSearch from "svelte-icons-pack/hi/HiSolidSearch";
import MainNavbar from "../lib/navbarcomponent/main/index.svelte"
import { goto } from "$app/navigation";
import "../styles/navbar/mobileNavbar.css";
import "../styles/navbar/navbar.css";
import Icon from 'svelte-icons-pack/Icon.svelte';
import HiSolidMenu from "svelte-icons-pack/hi/HiSolidMenu";
export let styles;
export let chatroom;
import { handleisLoggin, handleisLoading } from "$lib/store/profile";
import { createEventDispatcher } from 'svelte';
import Statistic from "./statistics/main/statistic.svelte";
import { statisticsEl } from "../lib/store/statistic"

const dispatch = createEventDispatcher()
const handleChat = ((e) => {
    dispatch("handleChatRoom", e)
})
const handleMenu = (() => {
    dispatch("handleMenuMobile")
})

const handleStatistic = (()=>{
    statisticsEl.set(true)
})

</script>

<div id="main" class="sc-gVkuDy gAvMHL" style={` margin-right: ${chatroom}px; `} >
    {#if $statisticsEl}
        <Statistic on:close={handleStatistic} />       
    {/if}
    <div class="header-wrap">
        <div class="header">
            <div class="sc-hGnimi ftyLxH left">
                <div class="sc-iukxot jivBdD logo-pc">
                    {#if styles }
                    <img alt="logo" class="logo-com" src="https://www.linkpicture.com/q/dpp-logowhite.png">
                    {:else}
                    <img style="border-radius: 12px;" class="coin-icon" alt="" src="https://www.linkpicture.com/q/dpp-favicon-logo.jpg">
                    {/if}
                </div>
            </div>
            {#if !$handleisLoading}
            {#if $handleisLoggin}
                <MainNavbar on:handleChatRoom={handleChat} />
            {:else}
            <div class="login-in">
                <button  on:click={()=> goto("/login")} >
                    <p >Sign in</p>
                </button>
                <button on:click={()=> goto("/register")} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
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
            {/if}
        </div>
    </div>
</div>



<!-- ============================================ Mobile view =========================================== -->
<div class="mobile">
    <div class="sc-hJhJFJ jVgBRe" style="transform: translate3d(0px, 0%, 0px);">
        <div class="login-top">
            <div class="logo-wrap">
                <img alt="logo" style="border-radius: 12px;" src="https://www.linkpicture.com/q/dpp-favicon-logo.jpg">
            </div>
            <button on:click={handleMenu} class="sc-bQtKYq cUTdQJ">
                <span class="open-wrap">
                    <Icon src={HiSolidMenu}  size="18"   color="rgb(67, 179, 9)" className="custom-icon" title="arror" />
                </span>
            </button>
            <div class="sc-eldieg elBGFt big-enter" bis_skin_checked="1">
                <button>
                    <Icon src={HiSolidSearch} title="search" />
                </button>
            </div>
            {#if $handleisLoggin}
            <h3>Logged in </h3>
            {:else}
            <div class="header-login">
                <button on:click={()=> goto("/login")} >
                    <p>Sign in</p>
                </button>
                <button on:click={()=> goto("/register")} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                    <div class="button-inner">Sign up</div>
                </button>
            </div>
            {/if}
        </div>
        <div class="bottom">
            <div class="left"></div>
            <div class="right">
                <button on:click={handleChat} id="chat" class="sc-eicpiI PGOpB chat-btn">
                    <img class="sc-gsDKAQ hxODWG icon" src="https://www.linkpicture.com/q/play_2.png" alt="" />
                    <div class="sc-fotOHu gGSOuF badge ">99</div>
                </button>
            </div>
        </div>
    </div>
</div>

<style>

.elBGFt.big-enter {
    -webkit-box-pack: end;
    justify-content: flex-end;
}

.elBGFt {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;
    margin-left: 6px;
}
</style>
