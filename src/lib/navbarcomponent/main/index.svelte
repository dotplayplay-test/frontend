<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoNotifications from "svelte-icons-pack/io/IoNotifications";
import RiSystemArrowDropDownLine from "svelte-icons-pack/ri/RiSystemArrowDropDownLine";
import BsChatLeftDotsFill from "svelte-icons-pack/bs/BsChatLeftDotsFill";
import BiSolidWallet from "svelte-icons-pack/bi/BiSolidWallet";
import CgMenuCheese from "svelte-icons-pack/cg/CgMenuCheese";
import Navprofile from "../../profilecomponent/main/navprofile.svelte";
import Coins from "../../profilecomponent/main/coins.svelte";
import BsDroplet from "svelte-icons-pack/bs/BsDroplet";
import axios from "axios";
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher()
import { handleAuthToken } from "$lib/store/routes";
import { profileStore, handleisLoading, handleisLoggin, app_Loading } from "$lib/store/profile";
import { onMount } from "svelte";
import {  goto } from "$app/navigation";
import { default_Wallet, coin_list } from "$lib/store/coins";
import { ServerURl } from "$lib/backendUrl"
import Layout from '../../deposit/layout.svelte';
import {isLightMode} from '../../../lib/store/theme'
const URL = ServerURl()

const handleProfile = (async()=>{
    app_Loading.set(true)
    try{
        await axios.get(`${URL}/api/profile`,{
        headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${$handleAuthToken}`
        }
    })
    .then((res)=>{
        app_Loading.set(false)
        profileStore.set(res.data.users[0])
        let wallet = res.data.wallet
        coin_list.set(wallet)
        wallet.forEach(element => {
          if(element.is_active){
            default_Wallet.set(element)
          }
       });
    })
    .catch((err)=>{
        handleisLoggin.set(false)
        profileStore.set({})
        window.location.href = ("")
        localStorage.removeItem("user");
        localStorage.removeItem("user_bet_amount");
    })
    }
    catch(err){
        console.log(err)
    }
})


onMount(()=>{
    $handleAuthToken && $profileStore != {} && handleProfile()
})


const handleDailyPPFbonus = (async()=>{
    await axios.get(`${URL}/api/profile/ppf-daily-bonus`,{
    headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${$handleAuthToken}`
        },
   })
})

onMount(async()=>{
    setTimeout(()=>{
        $handleAuthToken &&  handleDailyPPFbonus()
    },3000)
})


let isCoinDrop = false
const handleCoinsDrop = ((e) => {
    isCoinDrop =! isCoinDrop
})


let userProfile = false
const handleUserProfile = (() => {
userProfile = !userProfile
})


const handleCoinSelect = ((e) => {
    default_Wallet.set(e.detail)
    handleCoinsDrop()
})
const handleChat = ((e) => {
    dispatch("handleChatRoom", e)
})

let is_deposit = false 
const handleDeposit = (()=>{
    is_deposit = !is_deposit
})

</script>

<div id="main">
    {#if is_deposit}
        <Layout on:close={handleDeposit} />
    {/if}



{#if  $default_Wallet.coin_image != undefined}
<div class="sc-DtmNo euzHLF right">
    <div class="sc-gjNHFA juteh wallet-enter">
        <div class="sc-fmciRz LQlWw">
            <button on:click={()=> isCoinDrop =! isCoinDrop} class="sc-iFMAIt icGouR">
                <div class="sc-eXlEPa boxpOO">
                    <img class="coin-icon" alt="" src={$handleisLoggin && $default_Wallet.coin_image}>
                    <span class="currency">{$handleisLoggin && $default_Wallet.coin_name}</span>
                    <Icon src={RiSystemArrowDropDownLine}  size="18"  color="rgb(171, 182, 194)" className="custom-icon"  />
                </div>
                <div class="sc-Galmp erPQzq coin notranslate balance">
                    <div class="amount">
                        <span class="amount-str">{(parseFloat($default_Wallet.balance)).toFixed(6)}<span class="suffix">00</span></span>
                    </div>
                </div>
            </button>
            {#if isCoinDrop}
                <Coins on:coinDefault={handleCoinSelect} />
            {/if}
            <button on:click={()=> handleDeposit()} class="sc-iqseJM sc-bqiRlB eWZHfu button button-normal sc-iqVWFU fGPfpD">
                <div class="button-inner">
                    <span class="wallet-icon">
                        <Icon src={BiSolidWallet}  size="18"  color="rgb(255, 255, 255)"   />
                    </span>
                    <span style="padding-left: 10px;">Wallet</span>
                </div>
            </button>
        </div>
    </div>
    <div class="sc-gnnDb fWkueO">
        <div class="user-wrap">
            {#if $profileStore}
            <a href={`/user/profile/${$profileStore.user_id}`}>
             <img class="avatar" alt="" src={$profileStore?.profile_image}>
            </a>
            {:else}
                <div class="center">
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                </div>
            {/if}
            <button on:mouseenter={handleUserProfile} on:mouseleave={handleUserProfile} class ="svg">
                <span class="na-menu"><Icon src={CgMenuCheese}  size="18"   color="rgba(153, 164, 176, 0.6)" className="custom-icon"  /></span>
                {#if userProfile}
                    <Navprofile />
                {/if}
            </button>
        </div>
    </div>
    <button on:click={()=> goto("/chat")} class="sc-dcgwPl bbYXSv private-chat">
        <span class="nav-message"><Icon src={BsChatLeftDotsFill}  size="18"   color="rgba(153, 164, 176, 0.6)" className="custom-icon"  /></span>
    </button>
    <button  id="notice" class="sc-ksHpcM kultDa notice">
        <div class="notice-btn ">
            <span class="na-notification"><Icon src={IoNotifications}  size="18"   color="rgba(153, 164, 176, 0.6)" className="custom-icon"  /></span>
        </div>
    </button>
    <button on:click={handleChat} id="chat" class="sc-eicpiI PGOpB">
        <div class="chat-btn ">
             <Icon src={BsDroplet}  size="28"   color="#fff" className="custom-icon"  />
            <div class="sc-fotOHu gGSOuF badge ">6</div>
        </div>
    </button>
</div>
{:else}

<div class="sc-DtmNo euzHLF right">
    <div class="sc-gjNHFA juteh wallet-enter">
        <div class="sc-fmciRz LQlWw">
            <button on:click={()=>handleCoinsDrop("open")} class="sc-iFMAIt icGouR">
                <div class="sc-eXlEPa boxpOO">
                    <img class="coin-icon" alt="" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png">
                    <span class="currency">PPF</span>
                    <Icon src={RiSystemArrowDropDownLine}  size="18"  color="rgb(171, 182, 194)" className="custom-icon"  />
                </div>
                <div class="sc-Galmp erPQzq coin notranslate balance">
                    <div class="amount">
                        <span class="amount-str">0.0000<span class="suffix">00</span></span>
                    </div>
                </div>
            </button>
            {#if isCoinDrop}
                <Coins on:coinDefault={handleCoinSelect} />
            {/if}
            <button on:click={()=> handleDeposit()} class="sc-iqseJM sc-bqiRlB eWZHfu button button-normal sc-iqVWFU fGPfpD">
                <div class="button-inner">
                    <span class="wallet-icon">
                        <Icon src={BiSolidWallet}  size="18"  color="rgb(255, 255, 255)"   />
                    </span>
                    <span style="padding-left: 10px;">Wallet</span>
                </div>
            </button>
        </div>
    </div>
    <div class="sc-gnnDb fWkueO">
        <div class="user-wrap">
            {#if $profileStore}
            <a href={`/`}>
                <img class="avatar" alt="" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828435/dpp_logo_sd2z9d.png">
            </a>
            {:else}
                <div class="center">
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                </div>
            {/if}
            <button on:mouseenter={handleUserProfile} on:mouseleave={handleUserProfile} class="svg">
                <span class="na-menu"><Icon src={CgMenuCheese}  size="18"   color="rgba(153, 164, 176, 0.6)" className="custom-icon"  /></span>
                {#if userProfile}
                    <Navprofile />
                {/if}
            </button>
        </div>
    </div>
    <button on:click={()=> goto("/chat")} class="sc-dcgwPl bbYXSv private-chat">
        <span class="nav-message"><Icon src={BsChatLeftDotsFill}  size="18"   color="rgba(153, 164, 176, 0.6)" className="custom-icon"  /></span>
    </button>
    <button  id="notice" class="sc-ksHpcM kultDa notice">
        <div class="notice-btn ">
            <span class="na-notification"><Icon src={IoNotifications}  size="18"   color="rgba(153, 164, 176, 0.6)" className="custom-icon"  /></span>
        </div>
    </button>
    <button on:click={handleChat} id="chat" class="sc-eicpiI PGOpB">
        <div class="chat-btn ">
             <Icon src={BsDroplet}  size="28"   color="#fff" className="custom-icon"  />
            <div class="sc-fotOHu gGSOuF badge ">6</div>
        </div>
    </button>
</div>
{/if}

</div>

<div class="mobile">
    {#if  $default_Wallet.coin_image != undefined}
    <div class="sc-gjNHFA jlttqa wallet-enter">
        <div class="sc-fmciRz LQlWw">
            <button on:click={()=>handleCoinsDrop("open")} class="sc-iFMAIt icGouR">
                <div class="sc-eXlEPa boxpOO">
                    <img class="coin-icon" alt="" src={$handleisLoggin && $default_Wallet.coin_image}>
                    <span class="currency">{$handleisLoggin && $default_Wallet.coin_name}</span>
                    <Icon src={RiSystemArrowDropDownLine}  size="18"  color="rgb(171, 182, 194)" />
                </div>
                <div class="sc-Galmp erPQzq coin notranslate balance">
                    <div class="amount">
                        <span class="amount-str">{(parseFloat($default_Wallet.balance)).toFixed(4)}<span class="suffix">00</span></span>
                    </div>
                </div>
            </button>
            {#if isCoinDrop}
            <Coins on:coinDefault={handleCoinSelect} />
            {/if}
            <button class="sc-iqseJM sc-bqiRlB cBmlor eWZHfu button button-normal sc-iqVWFU fGPfpD">
                <div class="button-inner">
                    <span style="margin-right: 4px;">
                        <Icon src={BiSolidWallet}  size="13"  color="rgb(255, 255, 255)"  />
                    </span>
                    <span>Wallet</span>
                </div>
            </button>

                <div class="sc-gnnDb fhlUmF">
                    <div class="user-wrap">
                        <a href={`/user/profile/${$profileStore.user_id}`}>
                            <img
                                class="avatar"
                                alt=""
                                src={$profileStore?.profile_image}
                            /></a
                        >
                        <button on:click={handleUserProfile} class="svg">
                            <span class="na-menu">
                                <Icon
                                    src={CgMenuCheese}
                                    size="18"
                                    color="rgba(153, 164, 176, 0.6)"
                                />
                            </span>
                        </button>
                        {#if userProfile}
                            <Navprofile />
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    {:else}
    <div class="sc-gjNHFA jlttqa wallet-enter">
        <div class="sc-fmciRz LQlWw">
            <button on:click={()=>handleCoinsDrop("open")} class="sc-iFMAIt icGouR">
                <div class="sc-eXlEPa boxpOO">
                    <img class="coin-icon" alt="" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png">
                    <span class="currency">PPF</span>
                    <Icon src={RiSystemArrowDropDownLine}  size="18"  color="rgb(171, 182, 194)" />
                </div>
                <div class="sc-Galmp erPQzq coin notranslate balance">
                    <div class="amount">
                        <span class="amount-str">0.0000<span class="suffix">00</span></span>
                    </div>
                </div>
            </button>
            {#if isCoinDrop}
            <Coins on:coinDefault={handleCoinSelect} />
            {/if}
            <button class="sc-iqseJM sc-bqiRlB cBmlor eWZHfu button button-normal sc-iqVWFU fGPfpD">
                <div class="button-inner">
                    <span style="margin-right: 4px;">
                        <Icon src={BiSolidWallet}  size="13"  color="rgb(255, 255, 255)"  />
                    </span>
                    <span>Wallet</span>
                </div>
            </button>

                <div class="sc-gnnDb fhlUmF">
                    <div class="user-wrap">
                        <a href={`/`}>
                            <img
                                class="avatar"
                                alt=""
                                src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828435/dpp_logo_sd2z9d.png"
                            /></a
                        >
                        <button on:click={handleUserProfile} class="svg">
                            <span class="na-menu">
                                <Icon
                                    src={CgMenuCheese}
                                    size="18"
                                    color="rgba(153, 164, 176, 0.6)"
                                />
                            </span>
                        </button>
                        {#if userProfile}
                            <Navprofile />
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    {/if}
</div>

<style>

@media only screen and (max-width: 650px){
    .LQlWw {
    background-color: rgb(30, 32, 36);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 2.6rem;
    margin-left: 10px;
    border-radius: 1.5rem;
    padding-left: 0.875rem;
    line-height: 1;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
}
.fhlUmF {
    width: 5rem;
    height: 2.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-left: 7px;
    background-color: rgb(30, 32, 36);
    border-radius: 1.25rem;
    cursor: pointer;
    z-index: 9;
}
.fhlUmF .user-wrap {
    display: flex;
}
.fhlUmF .user-wrap > a {
    font-size: 0px;
}
.fhlUmF .user-wrap > a .avatar {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
}
.fhlUmF .svg {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}

        .fGPfpD {
            height: 100%;
            width: 5.05rem;
            font-size: 12px;
            border-radius: 30px;
        }
    }
</style>
