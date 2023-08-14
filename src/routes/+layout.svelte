<script>
import Navbar from "$lib/navbar.svelte";
import SideBar from "$lib/sideBar.svelte";
import Footer from "$lib/footer.svelte";
import Menubar from "$lib/mobile/menu/menubar.svelte";
import {
    browser
} from '$app/environment'
import Closesidebar from "$lib/closesidebar.svelte";
let isOpenSide = true
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

let isMenu = false

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

    <div id="right-bar" style={`width: ${ens}px;`} >
        <header >
            <Navbar styles={isOpenSide} on:menu={handleMenu} />
        </header>
        <main>
            <slot></slot>
        </main>

        <footer>
            <Footer />
        </footer>
    </div>
</div>