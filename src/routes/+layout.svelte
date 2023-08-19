<script>
import Navbar from "$lib/navbar.svelte";
import SideBar from "$lib/sideBar.svelte";
import Footer from "$lib/footer.svelte";
import Menubar from "$lib/mobile/menu/menubar.svelte";
import ChatSide from "../lib/chat-room/index.svelte"
import "../styles/errors/error.css"
import {
    browser
} from '$app/environment'
import Closesidebar from "$lib/closesidebar.svelte";
let isOpenSide = true
let isChatRoom = 0
let isMenu = false
let sideDetection = 240

import {
    onMount
} from "svelte";
let ens = browser && window.innerWidth

onMount(() => {
    if (browser && window.innerWidth > 1000) {
        isOpenSide = true
        sideDetection = 240
    } else {
        isOpenSide = false
        sideDetection = 76
    }
})

const handleMainMenu = (() => {
    if (isOpenSide) {
        isOpenSide = false
        sideDetection = 76
    } else {
        isOpenSide = true
        sideDetection = 240
    }
})


browser && addEventListener("resize", () => {
    ens = (window.innerWidth)
})

const handleChatroom = (() => {
    if (isChatRoom) {
        isChatRoom = 0
    } else {
        isChatRoom = 360
    }
})

const handleMenu = () => {
    if (isMenu) {
        isMenu = false
    } else {
        isMenu = true
    }
}
</script>

<div class="app">

    {#if (isOpenSide) }
    <div id="side-bar" style={`width:${isOpenSide ? 240 : 76}px`}>
        <SideBar styls={isOpenSide} />
    </div>
    {:else}
    <div id="side-bar" style={`width:${isOpenSide ? 240 : 76}px`}>
        <Closesidebar styls={isOpenSide} />
    </div>
    {/if}
    <div id="menu">
        <button style={`left:${isOpenSide ? 224 : 60}px`} on:click={handleMainMenu}  class="menu">
            <img src='https://www.linkpicture.com/q/menu_2.svg' alt="" />
        </button>
    </div>

    <!-- ======================  mobile menu bar ================= -->
    {#if (isMenu)}
    <div class="menubar">
        <Menubar  on:menu={handleMenu}   />
    </div>
    {/if}

    <div id="right-bar" style={`width: ${isChatRoom ? ((ens - sideDetection) - 360) : ens - sideDetection}px;`} >
        <header>
            <Navbar on:handleMenuMobile={handleMenu} on:handleChatRoom={handleChatroom} styles={isOpenSide} chatroom={isChatRoom} />
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
    {#if (isChatRoom)}
    <ChatSide on:closeChat={handleChatroom} />
    {/if}
</div>
