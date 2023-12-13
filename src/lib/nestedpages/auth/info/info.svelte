<script>
import { browser } from '$app/environment';
import { handleNestedRoute } from "$lib/store/nested_routes";
import { error_msg } from "./store";
import { handleSepProfile } from "$lib/profleAuth/store"
import axios from "axios";
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import { profileStore } from "$lib/store/profile";
import { routes} from "$lib/store/routes";
import { handleAuthToken } from "$lib/store/routes";
import { handleGoogleAuth, handleFacebookAuth } from "$lib/firebaseAuth/index"
import { ServerURl } from "$lib/backendUrl"
const URL = ServerURl()

let img1 = true
let img2 = false
let img3 = false
let img4 = false
let img5 = false
let img6 = false
let profile_img = "https://img2.nanogames.io/avatar/head1.png"

const googleAuth = (() => {
    handleGoogleAuth()
})

const handleFacebookAuthi = (() => {
    handleFacebookAuth()
})

const handleImgeSelect = ((e)=>{
    if(e === 1){
        img1 = true
        img2 = false
        img3 = false
        img4 = false
        img5 = false
        img6 = false
        profile_img = "https://img2.nanogames.io/avatar/head1.png"
    }
    else if(e === 2){
        img2 = true
        img1 = false
        img3 = false
        img4 = false
        img5 = false
        img6 = false
        profile_img = "https://img2.nanogames.io/avatar/head2.png"
    }
    else if(e === 3){
        img2 = false
        img4 = false
        img5 = false
        img6 = false
        img1 = false
        img3 = true
        profile_img = "https://img2.nanogames.io/avatar/head3.png"
    }
    else if(e === 4){
        img2 = false
        img1 = false
        img3 = false
        img5 = false
        img6 = false
        img4 = true
        profile_img = "https://img2.nanogames.io/avatar/head4.png"
    }
    else if(e === 5){
        img2 = false
        img1 = false
        img3 = false
        img4 = false
        img5 = true
        profile_img = "https://img2.nanogames.io/avatar/head5.png"
    }
    else if(e === 6){
        img2 = false
        img1 = false
        img3 = false
        img4 = false
        img5 = false
        img6 = true
        profile_img = "https://img2.nanogames.io/avatar/head6.png"
    }
})

let username = $profileStore.username
let is_loading = false
const handleSubmit = (async() => {
    if (!username) {
        error_msg.set("username can't be empty")
        setTimeout(()=>{
            error_msg.set("")
        },4000)
    } else {
        if($routes.profile){
            let data = {
                born: $profileStore.born,
                email: $profileStore.email,
                firstname: $profileStore.firstname,
                hidden_from_public: $profileStore.hidden_from_public,
                hide_profile: $profileStore.hide_profile,
                joined_at: $profileStore.joined_at,
                lastname: $profileStore.lastname,
                profile_image: profile_img,
                refuse_friends_request: $profileStore.refuse_friends_request,
                refuse_tips:$profileStore.refuse_tips,
                user_id: $profileStore.user_id,
                username: username,
                vip_level: $profileStore.vip_level
            }
              await  axios.post(`${URL}/api/profile/update-user`, {
            data
          },{
            headers: {
            "Content-type": "application/json",
            'Authorization': `Bearer ${$handleAuthToken}`
          },
          }).then((res)=>{
            profileStore.set(data)
            browser &&   window.history.replaceState(null, '', $routes.route);
            handleNestedRoute.set("")
            window.location.href = $routes.route
          })
        }else{
            window.location.href = $routes.route
            error_msg.set("something went wrong")
            setTimeout(()=>{
                error_msg.set("")
            },4000)
        }
    }
})

const handleClose = (()=>{
    window.location.href = $routes.route
    browser &&   window.history.replaceState(null, '', $routes.route);
    handleNestedRoute.set("")
})

</script>

<div id="main" class="sc-bkkeKt kBjSXI">

    {#if $error_msg}
    <div class="error-message">
        <div class="hTTvsjh"> 
            <div>{$error_msg}</div>
            </div>
        </div>
    {/if}   
    <div class="dialog " style="opacity: 1; width: 464px; height: 631px; margin-top: -315.5px; margin-left: -232px; transform: scale(1) translateZ(0px);">
        <div class="dialog-head has-close">
            <img alt="logo" class="sc-bOtlzW QccSQ" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697848521/dpp-logowhite_lbifm7.png">
        </div>
        <button on:click={()=> handleClose()} class="sc-ieecCq fLASqZ close-icon dialog-close">
            <Icon src={IoCloseSharp}  size="18"  color="rgb(255, 255, 255)" className="custom-icon" title="arror" />
        </button>
        <div class="dialog-body no-style sc-zjkyB ipnwmW" style="z-index: 2; transform: none;">
            <div class="welcome">
                <div class="msg1">BUILD THE BEST CRYPTO CASINO TOGETHER</div>
                <img src="https://static.nanogames.io/assets/login_coco.1855b11e.png" alt="">
            </div>
            <div class="sc-dkPtRN jScFby scroll-view hide-bar sc-bjztik ceTZhf" style="transform: none;">
                <div id="regist-info" class="sc-fSDTwv kYCmoV">
                    <h2>Glad to have you onboard!</h2>
                    <hr><div class="box">
                        <div class="sc-ezbkAF kDuLvp input ">
                            <div class="input-label">Username (Can be modified later)</div>
                            <div class="input-control">
                                <input bind:value={username} type="text" placeholder="Username " >
                            </div>
                        </div>
                        <div class="sc-ezbkAF kDuLvp input sc-iJCbQK kmovRe">
                            <div class="input-label">Default Avatar</div>
                            <div class="buttons">
                                <button on:click={()=> handleImgeSelect(1)} class:active={img1} style="opacity: 1; transform: none;">
                                    <img src="https://img2.nanogames.io/avatar/head1.png" alt="">
                                </button>
                                <button on:click={()=> handleImgeSelect(2)} class:active={img2} style="opacity: 1; transform: none;">
                                    <img src="https://img2.nanogames.io/avatar/head2.png" alt="">
                                </button>
                                <button on:click={()=> handleImgeSelect(3)} class:active={img3} style="opacity: 1; transform: none;">
                                    <img src="https://img2.nanogames.io/avatar/head3.png" alt="">
                                </button>
                                <button on:click={()=> handleImgeSelect(4)} class:active={img4} style="opacity: 1; transform: none;">
                                    <img src="https://img2.nanogames.io/avatar/head4.png" alt="" >
                                </button>
                                <button on:click={()=> handleImgeSelect(5)} class:active={img5} style="opacity: 1; transform: none;">
                                    <img src="https://img2.nanogames.io/avatar/head5.png" alt="">
                                </button>
                                <button on:click={()=> handleImgeSelect(6)} class:active={img6} style="opacity: 1; transform: none;">
                                    <img src="https://img2.nanogames.io/avatar/head6.png" alt="">
                                </button>
                            </div>
                        </div>
                        <button disabled={is_loading} on:click={handleSubmit} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                            {#if is_loading}
                            <div class="button-inner">Loading....</div>
                            {:else}
                            <div class="button-inner">Let’s Start</div>
                            {/if}
                        </button>
                    </div>
                </div>

                <div id="other-login" class="sc-jFkwbb iajVfs">
                    <div class="box-title"> Log in directly with  </div>
                    <div class="other-group">
                        <button on:click={googleAuth} id="gg_login" type="button" title="google">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <path fill="#fa455e" d="M16 0a16 16 0 110 32 16 16 0 010-32z"></path>
                                <path fill="#fff" d="M19.5 12.3c-.5-.5-1.1-.9-1.8-1a4.8 4.8 0 00-2-.2c-.9 0-1.7.4-2.3 1a5 5 0 00-2 4 5 5 0 004 4.8 5 5 0 001.6 0c.8 0 1.6-.3 2.2-.7.5-.4 1-.9 1.2-1.4l.3-.9v-.2h-4.4v-3.2h7.5l.2.1.1 1v1.2c0 .5 0 1-.2 1.6v-.1a7.4 7.4 0 01-1.4 3 7 7 0 01-3 2.4h-.1c-.6.2-1.2.4-1.9.4a8.8 8.8 0 01-1.9 0c-.8 0-1.5-.1-2.2-.4-.9-.4-1.6-.8-2.3-1.4-1-.8-1.9-2-2.4-3.2l-.5-1.9v-1.4-.1c0-.9.2-1.7.4-2.5.3-.7.7-1.4 1.2-2 1-1.4 2.5-2.5 4.3-3l1.5-.3a11.1 11.1 0 011.3 0 7.7 7.7 0 014.8 2l-.1.3-2 2h-.1z"></path>
                            </svg>
                        </button>

                        <button on:click={handleFacebookAuthi} id="fb_login" type="button" title="facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <path fill="#fff" d="M31.7 16.3a15.7 15.7 0 11-31.4 0 15.7 15.7 0 0131.4 0z"></path>
                                <path fill="#227aee" d="M0 16a16 16 0 0013.4 15.8V20.6h-4v-4.7h4v-4.4c0-2.7 2.3-5.7 6.5-5.6 1.5 0 3.4.5 3.4.5v4s-1.9-.2-3 0c-1.6.2-2 1.4-2 2v3.3h4.9l-1 4.9h-3.8v11.2A16 16 0 100 16z"></path>
                            </svg>
                        </button>

                        <div class="line"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.kmovRe button.active img {
    border: 4px solid rgb(67, 179, 9);
}
.kYCmoV {
    position: relative;
    width: 100%;
}
.kYCmoV h2 {
    margin: 1.5625rem 8%;
    color: rgb(227, 227, 227);
}
h2 {
    font-weight: 400;
    font-size: 1.0625rem;
}
.kYCmoV hr {
    height: 1px;
    margin: 0px;
    border: none;
    background-color: rgba(62, 72, 79, 0.3);
}
.kYCmoV .box {
    margin: 1.875rem 8%;
}
.kDuLvp {
    margin-top: 1rem;
}
.kDuLvp .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 0.75rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
}
.kDuLvp .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 1.25rem;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    height: 3.5rem;
    padding: 0px 1.25rem;
    opacity: 1;
}
.kDuLvp .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
    outline: none;
}
.kDuLvp {
    margin-top: 1rem;
}
.kDuLvp .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 0.75rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
}
.kmovRe .buttons {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-top: 1rem;
}

.kmovRe img {
    width: 3.375rem;
    height: 3.375rem;
    border-radius: 50%;
}
.kYCmoV .button {
    margin: 2.5rem 0px;
}

.kBjSXI {
    position: fixed;
    z-index: 1000;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.7);
    filter: none !important;
}

.ipnwmW {
    background-color: rgb(67, 179, 9);
}

.dialog {
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 50%;
    top: 50%;
    width: 464px;
    height: 720px;
    margin: -375px 0px 0px -280px;
    transition-property: width, height, margin-left, margin-top;
    transition-duration: 0.5s;
    border-radius: 1.25rem;
    overflow: hidden;
    /* background-color: rgb(23, 24, 27); */
}

.dialog-head.has-close {
    margin-right: 3.75rem;
}

.dialog-head {
    position: relative;
    z-index: 10;
    flex: 0 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 3.75rem;
    margin-left: 1.125rem;
    transition: all 0.5s ease 0s;
}

img {
    overflow-clip-margin: content-box;
    overflow: clip;
}

.fLASqZ {
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 11;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3.75rem;
    height: 3.75rem;
    cursor: pointer;
}

.ipnwmW.dialog-body {
    padding: 0px;
}

.dialog-body {
    position: absolute;
    inset: 0px;
    display: flex;
    overflow: hidden;
}

.ipnwmW .welcome {
    height: 11.875rem;
    position: absolute;
    top: 3.75rem;
    left: 1.25rem;
    right: 0.3125rem;
    z-index: 1;
    color: rgb(245, 246, 247);
}

.dialog-body>div {
    flex: 1 1 0%;
}

.ipnwmW .welcome .msg1 {
    font-size: 1.5rem;
    font-weight: bold;
    width: 14.375rem;
    line-height: 1.2;
    margin-top: 1.25rem;
}

.ipnwmW .welcome img {
    height: 13.75rem;
    position: absolute;
    right: 0px;
    top: -1.875rem;
}

.dialog-body>div {
    flex: 1 1 0%;
}

.iajVfs .box-title {
    text-align: center;
    width: 100%;
    line-height: 1;
    margin-bottom: 0.875rem;
    color: rgba(153, 164, 176, 0.6);
}

.iajVfs {
    padding: 1rem 2.5rem 1.25rem;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
}

.iajVfs .box-title {
    text-align: center;
    width: 100%;
    line-height: 1;
    margin-bottom: 0.875rem;
    color: rgba(153, 164, 176, 0.6);
}

.iajVfs .other-group {
    border-radius: 1.75rem;
    background-color: rgba(49, 52, 60, 0.5);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
}

.iajVfs .other-group button {
    display: flex;
    height: 3.5rem;
    width: 3.5rem;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

.dialog-body>div {
    flex: 1 1 0%;
}

.ceTZhf {
    position: absolute;
    inset: 16.25rem 0px 0px;
    height: auto;
    border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
}

.jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
}

.QccSQ {
    height: 1.875rem;
    margin: 1rem 0px;
}

.iajVfs .other-group button {
    display: flex;
    height: 3.5rem;
    width: 3.5rem;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

.iajVfs .other-group svg {
    width: 2.25rem;
    height: 2.25rem;
}

.jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
}

.ceTZhf {
    position: absolute;
    inset: 16.25rem 0px 0px;
    height: auto;
    border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
}

/* ============================= mobile ===================================== */

.kBjSXI {
    position: fixed;
    z-index: 1000;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.7);
    filter: none !important;
}

.dialog {
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 50%;
    top: 50%;
    width: 464px;
    height: 720px;
    margin: -375px 0px 0px -280px;
    transition-property: width, height, margin-left, margin-top;
    transition-duration: 0.5s;
    border-radius: 1.25rem;
    overflow: hidden;
    background-color: rgb(23, 24, 27);
}

.dialog-head.has-close {
    margin-right: 3.75rem;
}

.dialog-head {
    position: relative;
    z-index: 10;
    flex: 0 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 3.75rem;
    margin-left: 1.125rem;
    transition: all 0.5s ease 0s;
}

.fLASqZ {
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 11;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3.75rem;
    height: 3.75rem;
    cursor: pointer;
}

.dialog-body>div {
    flex: 1 1 0%;
}

.dA-dCPD .welcome .msg1 {
    font-size: 1.5rem;
    font-weight: bold;
    width: 14.375rem;
    line-height: 1.2;
    margin-top: 1.25rem;
}

.dA-dCPD .welcome img {
    height: 12.75rem;
    position: absolute;
    right: 0px;
    top: -1.875rem;
}

.dialog-body>div {
    flex: 1 1 0%;
}

@media screen and (max-width: 621px) {
    .dialog {
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        margin: 0px;
        border-radius: 0px;
    }

    .jScFby {
        box-sizing: border-box;
        height: 100%;
        overflow-y: auto;
        touch-action: pan-y;
        overscroll-behavior: contain;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    img {
        overflow-clip-margin: content-box;
        overflow: clip;
    }
}

.gIMEzD .other-group button {
    display: flex;
    height: 3.5rem;
    width: 3.5rem;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

.gIMEzD .other-group svg {
    width: 2.25rem;
    height: 2.25rem;
}
</style>
