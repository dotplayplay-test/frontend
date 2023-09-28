<script>
/** @type {import('./$types').PageLoad} */
export let data;
import { routes } from "$lib/store/routes"
import { handleAuthToken } from "$lib/store/routes"
$: routes.set(data)
import { handleSepProfile } from "$lib/profleAuth/store"
import {handleCountdown} from "$lib/crashgame/socket"
handleCountdown()
import { error_msg} from "$lib/crashgame/store"
import Navbar from "$lib/navbar.svelte";
import ProfileAuth from "$lib/profleAuth/index.svelte";
import { profileStore } from "$lib/store/profile"
import SideBar from "$lib/sideBar.svelte";
import Footer from "$lib/footer.svelte";
import Menubar from "$lib/mobile/menu/menubar.svelte";
import ChatSide from "../lib/chat-room/index.svelte"
import Notification from "../lib/notification/index.svelte";
import { handleNestedRoute } from "$lib/store/nested_routes";
import { handleisLoggin, handleisLoading } from "$lib/store/profile"
import "../styles/errors/error.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "$lib/firebaseAuth/index";
import { browser } from '$app/environment';
import { onMount } from "svelte";
import { default_Wallet } from "../lib/store/coins"
import { handle_IsRedwinners} from "../lib/crashgame/store"
import Closesidebar from "$lib/closesidebar.svelte";
let isOpenSide = true
let isChatRoom = 0
let isMenu = false
let sideDetection = 0

$:{
        for(let i = 0; i < $handle_IsRedwinners.length; i++){
            let wllet = {
                coin_name: $handle_IsRedwinners[i].token,
                coin_image:  $handle_IsRedwinners[i].token_img,
                balance:  $handle_IsRedwinners[i].update_bal
            }
            if($profileStore.user_id === $handle_IsRedwinners[i].user_id){
                default_Wallet.set(wllet)
            }
        }
} 


$:{
    onMount(async()=>{
        data.profile &&  handleAuthToken.set(data.profile.Token)
    })
}

$:{
    onMount(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            handleisLoggin.set(true)
            handleisLoading.set(false)
        } else {
            handleisLoggin.set(false)
            handleisLoading.set(false)
        }
    });
})
}

let ens = browser && window.innerWidth

onMount(() => {
    if (browser && window.innerWidth < 650) {
        isOpenSide = true
        sideDetection = 0
    } else if (browser && window.innerWidth > 1000) {
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
let isnotification = false
const handleChatroom = ((e) => {
    if (isChatRoom) {
        isnotification = false
        isChatRoom = 0
    } else {
        isChatRoom = 360
        if (e === "notification") {
            isnotification = true
        } else {
            isnotification = false
        }
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

    {#if $profileStore && $profileStore.born === '' && $handleNestedRoute !== "/login/info" }
        <ProfileAuth />
    {/if}

    {#if (isOpenSide) }
    <div id="main" style={`width:${isOpenSide ? 240 : 76}px`}>
        <SideBar routes={data} styls={isOpenSide} />
    </div>
    {:else}
    <div id="main" style={`width:${isOpenSide ? 240 : 76}px`}>
        <Closesidebar routes={data} styls={isOpenSide} />
    </div>
    {/if}
    <div id="main">
        <div id="menu">
            <button style={`left:${isOpenSide ? 224 : 60}px`} on:click={handleMainMenu}  class="menu">
                <img src='https://www.linkpicture.com/q/menu_2.svg' alt="" />
            </button>
        </div>
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

        {#if $handleisLoading}
        <!-- Loading animation -->
        <div class="center">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
        {:else}
        <main class="sc-lhMiDA ePAxUv">
            <slot></slot>
        </main>
        <footer>
            <Footer />
        </footer>
        {/if}

    </div>
    {#if (isChatRoom)}
    {#if isnotification}
    <Notification />
    {:else}
    <ChatSide on:closeChat={handleChatroom} />
    {/if}

    {/if}
</div>
