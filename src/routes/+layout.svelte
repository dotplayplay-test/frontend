<script>
/** @type {import('./$types').PageLoad} */
export let data;
import { routes } from "$lib/store/routes"
import { handleAuthToken } from "$lib/store/routes"
import { browser } from '$app/environment';
$: routes.set(data)
import Icon from 'svelte-icons-pack/Icon.svelte';
import {handleCountdown} from "$lib/crashgame/socket"
import HiSolidMenu from "svelte-icons-pack/hi/HiSolidMenu";

setTimeout(()=>{
    if(data.preloaed === null){
         window.location.href = ("/")
    }
},3000)
import { screen, is_open__Appp, is_open__chat } from "$lib/store/screen"
import Navbar from "$lib/navbar.svelte";
import ProfileAuth from "$lib/profleAuth/index.svelte";
import { profileStore } from "$lib/store/profile"
import SideBar from "$lib/sideBar.svelte";
import Footer from "$lib/footer.svelte";
import Menubar from "$lib/mobile/menu/menubar.svelte";
import ChatSide from "../lib/chat-room/index.svelte"
import Notification from "../lib/notification/index.svelte";
import { handleNestedRoute } from "$lib/store/nested_routes";
import { handleisLoggin, handleisLoading , app_Loading} from "$lib/store/profile"
import "../styles/errors/error.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "$lib/firebaseAuth/index";
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
            coin_name: $handle_IsRedwinners[i]._doc.token,
            coin_image:  $handle_IsRedwinners[i]._doc.token_img,
            balance:  $handle_IsRedwinners[i].update_bal
        }
        if($profileStore.user_id === $handle_IsRedwinners[i]._doc.user_id){
            default_Wallet.set(wllet)
        }
    }
} 


$:{
    data.token &&  handleAuthToken.set(data.token)
    if($handleAuthToken){
        handleisLoading.set(false)
        handleisLoggin.set(true)
        if($profileStore.email){
            handleisLoading.set(false)
            handleisLoggin.set(true)
        }else{
            handleisLoading.set(true)
        }
    }else{
        handleisLoading.set(false)
    }
}

// $:{
//     onMount(() => {
//     const auth = getAuth(app);
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//             const uid = user.uid;
//             handleisLoggin.set(true)
//             handleisLoading.set(false)
//         } else {
//             handleisLoggin.set(false)
//             handleisLoading.set(false)
//         }
//     });
// })
// }


onMount(() => {
    handleCountdown()
    if (browser && window.innerWidth < 650) {
        isOpenSide = true
        sideDetection = 0
        is_open__Appp.set(false)
    } else if (browser && window.innerWidth > 1220) {
        isOpenSide = true
        sideDetection = 240
        is_open__Appp.set(true)
    } else {
        isOpenSide = false
        sideDetection = 76
    }
})

const handleMainMenu = (() => {
    if (isOpenSide) {
        isOpenSide = false
        is_open__Appp.set(false)
        sideDetection = 76
    } else {
        if (browser && window.innerWidth > 650 && window.innerWidth < 1000) {
        isOpenSide = true
        is_open__Appp.set(true)
        sideDetection = 76
    }else{
        isOpenSide = true
        is_open__Appp.set(true)
        sideDetection = 240
    }
    }
})

let ens = browser && window.innerWidth
$:{
browser && addEventListener("resize", () => {
    ens = (window.innerWidth)
    screen.set(ens)
})
}

onMount(()=>{
    ens = browser && window.innerWidth
    screen.set(ens)
})

let isnotification = false
const handleChatroom = ((e) => {
    if (isChatRoom) {
        isnotification = false
        isChatRoom = 0
        is_open__chat.set(false)
    } else {
        isChatRoom = 360
        is_open__chat.set(true)
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
                <Icon src={HiSolidMenu}  size="18"   color="#fff"  />
            </button>
        </div>
    </div>
    {#if !data.preloaed}
        <div class="preloading">
            <div class="gyuys">
                <img class="coin-icon" alt="" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1699447809/preload_b2jdw0.jpg">
            </div>
        </div>
    {/if}


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

<style>
.preloading{
    background-color: var(--background-color);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 367898978920;
}
.preloading .gyuys{
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
}
.gyuys img{
    position: absolute;
    display: flex;
    align-items: center;
    top: 30%;
    align-content: center;
    width: 180px;
    border-radius: 50%;
    animation: move 10s infinite;
}

@keyframes move{
    10%{
        top: 10%;
        transition: all 4.5s ease;
    }
 
    100%{
        top: 55%;
        transition: all 4.5s ease;
    }
    /* 70%{
        top: 55%;
        transition: all 4.5s ease;
    }
    100%{
        top: 0%;
        transition: all 4.5s ease;
    } */
}

</style>