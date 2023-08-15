<script>
import Navbar from "$lib/navbar.svelte";
import SideBar from "$lib/sideBar.svelte";
import Footer from "$lib/footer.svelte";
import Menubar from "$lib/mobile/menu/menubar.svelte";
import ChatSide from "../lib/chat-room/index.svelte"
import {
    browser
} from '$app/environment'
import Closesidebar from "$lib/closesidebar.svelte";
let isOpenSide = false
let isChatRoom = 0
let isMenu = false
import {
    onMount
} from "svelte";

onMount(() => {
    if (browser && window.innerWidth > 1000) {
        isOpenSide = true
    } else {
        isOpenSide = false
    }
})

const handleMainMenu = (() => {
    if (isOpenSide) {
        isOpenSide = false
    } else {
        isOpenSide = true
    }
})

let ens = browser && window.innerWidth - 240
browser && addEventListener("resize", () => {
    ens = (window.innerWidth - 240)
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
        <SideBar />
    </div>
    {:else}
    <div id="side-bar" style={`width:${isOpenSide ? 240 : 76}px`}>
        <Closesidebar />
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

    <div id="right-bar" style={`width: ${isChatRoom ? (ens - 360) : ens }px;`} >
        <header >
            <Navbar on:handleChatRoom={handleChatroom} styles={isOpenSide} chatroom={isChatRoom} />
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
