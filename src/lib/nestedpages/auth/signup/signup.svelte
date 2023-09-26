<script>
import {
    goto
} from "$app/navigation"
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import RiSystemArrowDropDownLine from "svelte-icons-pack/ri/RiSystemArrowDropDownLine";
import AiOutlineCheck from "svelte-icons-pack/ai/AiOutlineCheck";
import RiSystemArrowDropLeftLine from "svelte-icons-pack/ri/RiSystemArrowDropLeftLine";
import {handleSignIn } from "$lib/firebaseAuth/index"
import { handleGoogleAuth, handleFacebookAuth } from "$lib/firebaseAuth/index"
import { createEventDispatcher } from "svelte";
import { error_msgS, is_loadingS } from "./store"
const dispatch = createEventDispatcher()
let isREf = false
let email = ''
let password = ''
let aggreement = false

const handleAgreement = (() => {
    if (aggreement) {
        aggreement = false
    } else {
        aggreement = true
    }
})

const googleAuth = (()=>{
    handleGoogleAuth()
})

const handleFacebookAuthi = (()=>{
    handleFacebookAuth()
})

const handleSubmit = (() => {
    if (!email) {
        error_msgS.set("email field can't be empty")
        setInterval(()=>{
            error_msgS.set("")
        }, 4000)
    } else if (!password) {
        error_msgS.set("Password is required")
        setInterval(()=>{
            error_msgS.set("")
        }, 4000)
    } else {
        handleSignIn(email, password)
    }
})

const handleCancel = (()=>{
    dispatch("close", 3)
})


</script>

<div id="main" class="sc-bkkeKt kBjSXI">

    {#if $error_msgS}
    <div class="error-message">
        <div class="hTTvsjh"> 
            <div>{$error_msgS}</div>
        </div>
    </div>
 {/if}   

    <div class="dialog " style="opacity: 1; width: 464px; height: 631px; margin-top: -315.5px; margin-left: -232px; transform: scale(1) translateZ(0px);">
        <div class="dialog-head has-close">
            <img src="https://static.nanogames.io/assets/logo2.cc188584.png" alt="" class="sc-bOtlzW QccSQ">
        </div>
        <button on:click={()=> handleCancel()} class="sc-ieecCq fLASqZ close-icon dialog-close">
            <Icon src={IoCloseSharp}  size="18"  color="rgb(255, 255, 255)" className="custom-icon" title="arror" />
        </button>
        <div class="dialog-body no-style sc-zjkyB ipnwmW" style="z-index: 2; transform: none;">
            <div class="welcome">
                <div class="msg1">BUILD THE BEST CRYPTO CASINO TOGETHER</div>
                <img src="https://static.nanogames.io/assets/login_coco.1855b11e.png" alt="">
            </div>
            <div class="sc-dkPtRN jScFby scroll-view hide-bar sc-bjztik ceTZhf" style="transform: none;">
                    <div id="regist" class="sc-fSDTwv cfNMkN">
                        <div class="box">
                            <div class="sc-ezbkAF kDuLvp input ">
                                <div class="input-label">Email Address</div>
                                <div class="input-control">
                                    <input type="text" bind:value={email} autocomplete="off" placeholder="Registered Email Address." >
                                </div>
                            </div>
                            <div class="sc-ezbkAF kDuLvp input ">
                                <div class="input-label">Login Password</div>
                                <div class="input-control">
                                    <input type="password"  autocomplete="off" placeholder="Login Password" bind:value={password} >
                                </div>
                            </div>
                            {#if  isREf}
                            <div class="sc-ezbkAF kDuLvp input ">
                                <div class="input-label">Referral/Promo Code (Optional)</div>
                                <div class="input-control">
                                    <input type="text" autocomplete="off" placeholder="Referral/Promo Code" value="">
                                </div>
                            </div>
                            {:else}
                            <div class="casino-code hover">Referral/Promo Code (Optional)
                                 <Icon src={RiSystemArrowDropDownLine}  size="18"  color="rgb(255, 255, 255)" className="sc-gsDKAQ hxODWG icon" title="arror" />
                            </div>
                            {/if}
                        </div>
                        <hr>
                        <div class="box">
                            <div class="argument-check">
                                <input bind:checked={aggreement} class="sc-iJKOTD kdCtGQ checkbox" type="checkbox">
                                <div class="label">I agree with <a href="/help/agreement" class="argument">user agreement</a>,
                                    and confirm that I am at least 18 years old!</div>
                            </div>
                            <div class="buttons">
                                <button on:click={()=> goto("/login")} class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-big signin" >
                                    <div class="button-inner">
                                        <Icon src={RiSystemArrowDropLeftLine}  size="25"  color="rgb(255, 255, 255)" className="custom-icon" title="arror" />
                                        <span>Sign in</span>
                                    </div>
                                </button>
                                <button disabled={!aggreement} on:click={handleSubmit}  type="submit" class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big" >
                                    <div class="button-inner">
                                        {#if $is_loadingS}
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
                                            Sign Up
                                        {/if}
                                    </div>
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
</div>

<!-- ============================================ mobile ========================================= -->

<div class="mobile">
    <div class="sc-bkkeKt kBjSXI" style="background-color: transparent;">
        <div class="dialog sc-kITQLZ dA-dCPD">
            <div class="dialog-head has-close">
                <img src="https://www.linkpicture.com/q/dpp-logowhite-transparent-final_1.png" alt="" class="sc-fBgqEL gKVaPL">
            </div>
            <button on:click={()=> goto("/")} class="sc-ieecCq fLASqZ close-icon dialog-close">
                <Icon src={IoCloseSharp}  size="18"  color="rgb(255, 255, 255)" className="custom-icon" title="arror" />
            </button>
            <div class="dialog-body no-style sc-kITQLZ dA-dCPD">
                <div class="welcome">
                    <div class="msg1">BUILD THE BEST CRYPTO CASINO TOGETHER</div>
                    <img alt="" src="https://static.nanogames.io/assets/login_coco.1855b11e.png">
                </div>
                <div class="sc-dkPtRN jScFby scroll-view hide-bar sc-kudmJA biIEWz" style="transform: none;">
                    <div id="regist" class="sc-bNoLzS Vvcdr">
                        <div class="box">
                            <div class="sc-ezbkAF kDuLvp input ">
                                <div class="input-label">Email Address</div>
                                <div class="input-control">
                                    <input type="text"  autocomplete="off" placeholder="Registered Email Address." value="">
                                </div>
                            </div>
                            <div class="sc-ezbkAF kDuLvp input ">
                                <div class="input-label">Login Password</div>
                                <div class="input-control">
                                    <input type="password" autocomplete="off" placeholder="Login Password" value="">
                                </div>
                            </div>

                            {#if  isREf}
                            <div class="sc-ezbkAF kDuLvp input ">
                                <div class="input-label">Referral/Promo Code (Optional)</div>
                                <div class="input-control">
                                    <input type="text" autocomplete="off" placeholder="Referral/Promo Code" value="">
                                </div>
                            </div>
                            {:else}
                            <div class="casino-code hover">Referral/Promo Code (Optional)
                                 <Icon src={RiSystemArrowDropDownLine}  size="18"  color="rgb(255, 255, 255)" className="sc-gsDKAQ hxODWG icon" title="arror" />
                            </div>
                            {/if}
                        </div>
                        <hr>
                        <div class="box">
                            <div class="argument-check">
                                <button on:click={handleAgreement}  class="sc-iJKOTD kdCtGQ checkbox ">
                                    {#if (!aggreement)}
                                    <Icon src={AiOutlineCheck}  size="16"  color="rgb(67, 179, 9)" className="dot" title="arror" />
                                    {:else}
                                    ""
                                    {/if}
                                </button>
                                <div class="label">
                                    I agree with
                                    <a href="/help/agreement" class="argument">user agreement</a>,
                                    and confirm that I am at least 18 years old!
                                </div>
                            </div>
                            <div class="buttons">
                                <button class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-big signin">
                                    <div class="button-inner">
                                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                            <use xlink:href="#icon_Arrow"></use>
                                        </svg>
                                        <span>Sign in</span>
                                    </div>
                                </button>
                                <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big">
                                    <div class="button-inner">Sign up</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id="other-login" class="sc-kSWJqS gIMEzD">
                        <div class="box-title"> Log in directly with  </div>
                        <div class="other-group">
                            <button id="gg_login" type="button" title="google">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                    <path fill="#fa455e" d="M16 0a16 16 0 110 32 16 16 0 010-32z"></path>
                                    <path fill="#fff" d="M19.5 12.3c-.5-.5-1.1-.9-1.8-1a4.8 4.8 0 00-2-.2c-.9 0-1.7.4-2.3 1a5 5 0 00-2 4 5 5 0 004 4.8 5 5 0 001.6 0c.8 0 1.6-.3 2.2-.7.5-.4 1-.9 1.2-1.4l.3-.9v-.2h-4.4v-3.2h7.5l.2.1.1 1v1.2c0 .5 0 1-.2 1.6v-.1a7.4 7.4 0 01-1.4 3 7 7 0 01-3 2.4h-.1c-.6.2-1.2.4-1.9.4a8.8 8.8 0 01-1.9 0c-.8 0-1.5-.1-2.2-.4-.9-.4-1.6-.8-2.3-1.4-1-.8-1.9-2-2.4-3.2l-.5-1.9v-1.4-.1c0-.9.2-1.7.4-2.5.3-.7.7-1.4 1.2-2 1-1.4 2.5-2.5 4.3-3l1.5-.3a11.1 11.1 0 011.3 0 7.7 7.7 0 014.8 2l-.1.3-2 2h-.1z"></path>
                                </svg>
                            </button>
                            <button id="fb_login" type="button" title="facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                    <path fill="#fff" d="M31.7 16.3a15.7 15.7 0 11-31.4 0 15.7 15.7 0 0131.4 0z"></path>
                                    <path fill="#227aee" d="M0 16a16 16 0 0013.4 15.8V20.6h-4v-4.7h4v-4.4c0-2.7 2.3-5.7 6.5-5.6 1.5 0 3.4.5 3.4.5v4s-1.9-.2-3 0c-1.6.2-2 1.4-2 2v3.3h4.9l-1 4.9h-3.8v11.2A16 16 0 100 16z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<style>
.kBjSXI {
    position: fixed;
    z-index: 1000;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.7);
    filter: none !important;
}
input[type="checkbox"]{
    color: aqua;
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
    transition: 0.5s ease-in-out;
    cursor: pointer;
}

.fLASqZ:hover {
    transition: 0.5s ease-in-out;
    transform: rotate(60deg);
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
    outline: none;
    color: rgb(245, 246, 247);
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

.lnrkkr .buttons .button:first-of-type {
    width: 15rem;
    flex: 0 0 auto;
    margin-right: 0.625rem;
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

.gEBngo.button {
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(107, 113, 128);
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

.kDuLvp .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    outline: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
}

input:-webkit-autofill {
    -webkit-box-shadow: 200px 200px 100px #273642 inset;
    box-shadow: 200px 200px 100px #273642 inset;
    -webkit-text-fill-color: var(--autofill-color);
}

.cfNMkN .box {
    padding: 1.25rem;
}

.cfNMkN hr {
    margin: 0px;
    height: 1px;
    border: none;
    background-color: rgba(62, 72, 79, 0.3);
}

.cfNMkN .argument-check {
    display: flex;
    margin-bottom: 1.25rem;
}

.cfNMkN .argument-check .checkbox {
    margin-top: 0.25rem;
    margin-right: 0.375rem;
}

.kdCtGQ {
    width: 1rem;
    height: 1rem;
    flex: 0 0 auto;
    display: inline-block;
    vertical-align: middle;
    border-radius: 0.1875rem;
    box-sizing: border-box;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    font-size: 0.875rem;
    padding: 0.0625rem 0.0625rem 0.0625rem 0.125rem;
    color: transparent;
    position: relative;
    cursor: pointer;
}

.cfNMkN .buttons {
    display: flex;
    margin: 0px 1.25rem;
}

.cfNMkN .signin {
    color: rgb(245, 246, 247);
    background-color: rgb(49, 52, 60);
}

.cfNMkN .button {
    flex: 1 1 0%;
}

.cBmlor {
    display: block;
    width: 100%;
    border-radius: 6.25rem;
    height: 3rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
}

.cBmlor.button-big {
    height: 3.625rem;
}

.cfNMkN .buttons .button:last-of-type {
    width: 15rem;
    flex: 0 0 auto;
    margin-left: 0.625rem;
}

.fnKcEH.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(67, 179, 9);
    background-image: conic-gradient(from 1turn, rgb(67, 179, 9), rgb(93, 219, 28));
}

.cBmlor.button-big {
    height: 3.625rem;
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

.cfNMkN .signin {
    color: rgb(245, 246, 247);
    background-color: rgb(49, 52, 60);
}

.cBmlor:disabled.sc-iqseJM:not(.is-loading) {
    opacity: 0.5;
    cursor: default;
}

/* ======================================================= mobile ========================================= */

.kBjSXI {
    position: fixed;
    z-index: 1000;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.7);
    filter: none !important;
}

.dA-dCPD {
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
    background-color: rgb(23, 24, 27);
}

.dA-dCPD .dialog-head {
    background-color: transparent;
    box-shadow: none;
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

.gKVaPL {
    height: 1.075rem;
    margin: 1rem 0px;
}

.dA-dCPD.dialog-body {
    padding: 0px;
}

.dA-dCPD .welcome {
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

.biIEWz {
    position: absolute;
    inset: 16.25rem 0px 0px;
    height: auto;
    border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
    overflow-y: scroll;
}

.kDuLvp .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 0.75rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
    font-size: 12px;
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

.cBmlor {
    display: block;
    width: 100%;
    border-radius: 6.25rem;
    height: 3rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
}

.cBmlor.button-big {
    height: 3.625rem;
}

.jBwyNM .buttons .button:first-of-type {
    width: 11rem;
    flex: 0 0 auto;
    margin-right: 0.625rem;
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

.Vvcdr {
    background-color: rgb(30, 32, 36);
    width: 29rem;
}

.Vvcdr .box {
    padding: 1.25rem;
}

.Vvcdr .box>.input:first-of-type {
    margin-top: 0.25rem;
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
}

.Vvcdr .casino-code {
    margin-top: 1rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    cursor: pointer;
    font-size: 13px;
}

.Vvcdr hr {
    margin: 0px;
    height: 1px;
    border: none;
    background-color: rgba(62, 72, 79, 0.3);
}

.Vvcdr .argument-check {
    display: flex;
    margin-bottom: 1.25rem;
}

.gEBngo.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(107, 113, 128);
}

.Vvcdr .argument-check .checkbox {
    margin-top: 0.25rem;
    margin-right: 0.375rem;
}

.Vvcdr .buttons {
    display: flex;
    margin: 0px 1.25rem;
}

.Vvcdr .signin {
    color: rgb(245, 246, 247);
    background-color: rgb(49, 52, 60);
}

.Vvcdr .button {
    flex: 1 1 0%;
}

.Vvcdr .buttons .button:last-of-type {
    width: 11rem;
    flex: 0 0 auto;
    margin-left: 0.625rem;
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
        /* height: 100%; */
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

    .Vvcdr {
        width: 100%;
    }
}

.gIMEzD {
    padding: 1rem 2.5rem 1.25rem;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
}

.gIMEzD .box-title {
    text-align: center;
    width: 100%;
    line-height: 1;
    margin-bottom: 0.875rem;
    color: rgba(153, 164, 176, 0.6);
}

.gIMEzD .other-group {
    border-radius: 1.75rem;
    background-color: rgba(49, 52, 60, 0.5);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
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
