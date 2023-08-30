<script>
import RiSystemArrowDropDownLine from "svelte-icons-pack/ri/RiSystemArrowDropDownLine";
import BiSolidWallet from "svelte-icons-pack/bi/BiSolidWallet";
import CgMenuCheese from "svelte-icons-pack/cg/CgMenuCheese";
import BiSolidMessageAltDetail from "svelte-icons-pack/bi/BiSolidMessageAltDetail";
import IoNotifications from "svelte-icons-pack/io/IoNotifications";
import Navprofile from "./profilecomponent/main/navprofile.svelte";
import Coins from "./profilecomponent/main/coins.svelte";
import {app, db} from "$lib/firebaseAuth/index"
import { doc,getDoc } from "firebase/firestore";
import {
    goto
} from "$app/navigation"
import {
    onMount
} from "svelte";
import {
    browser
} from '$app/environment'
import "../styles/navbar/mobileNavbar.css"
import "../styles/navbar/navbar.css"
import Icon from 'svelte-icons-pack/Icon.svelte';
import HiSolidMenu from "svelte-icons-pack/hi/HiSolidMenu";
export let styles;
import { getAuth, onAuthStateChanged } from "firebase/auth";
export let chatroom;

import {
    createEventDispatcher
} from 'svelte'

const dispatch = createEventDispatcher()

const handleChat = (() => {
    dispatch("handleChatRoom", "abek open")
})

let isCoinDrop = false
const handleCoinsDrop = ((e)=>{
    if(isCoinDrop){
        isCoinDrop = false
    }else{
        isCoinDrop = true
    }
})

let authUser
let isLoading = true

const id = browser && JSON.parse(localStorage.getItem('user'))
let profile
$:{
    id &&  onMount(async()=>{
        const docRef = doc(db, "profile", id.email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            profile = docSnap.data()
        } else {
            console.log("No such document!");
        }
    })
}


$: {
    onMount(()=>{
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        authUser =(user)
        isLoading = false
    }else{
        authUser = null
        isLoading = false
    }
    });
})
}


let userProfile = false
const handleUserProfile = (()=>{
    if(userProfile){
        userProfile = false
    }else{
        userProfile = true
    }
})

let activeCoin = {
    id:1, coin_symbol: "USDT", 
    coin_name: "Tether",
    coin_image: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
    amount: 0, 
    suffix: "000000", select: true
}
const handleCoinSelect = ((e)=>{
    activeCoin = (e.detail)
    handleCoinsDrop()
})


const handleMenu = (() => {
    dispatch("handleMenuMobile")
})
</script>

<div id="main" class="sc-gVkuDy gAvMHL" style={` margin-right: ${chatroom}px; `} >
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
                <!-- <div class="sc-jtXEFf jsyNKG search-pc">
                    <div class="search-input-wrap-pc">
                        <div class="sc-kTLmzF dwaOxj">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_Search"></use>
                            </svg>
                            <input placeholder="Game name | Provider | Category Tag" value="">
                        </div>
                    </div>
                </div> -->
            </div>

            {#if isLoading}
                <p>{""}</p>
                {:else}
                {#if (authUser)}
                <div class="sc-DtmNo euzHLF right">
                    <div class="sc-gjNHFA juteh wallet-enter">
                        <div class="sc-fmciRz LQlWw">
                            <button on:click={()=>handleCoinsDrop("open")} class="sc-iFMAIt icGouR">
                                <div class="sc-eXlEPa boxpOO">
                                    <img class="coin-icon" alt="" src={activeCoin.coin_image}>
                                    <span class="currency">{activeCoin.coin_symbol}</span>
                                    <Icon src={RiSystemArrowDropDownLine}  size="18"  color="rgb(171, 182, 194)" className="custom-icon" title="arror" />
                                </div>
                                <div class="sc-Galmp erPQzq coin notranslate balance">
                                    <div class="amount">
                                        <span class="amount-str">{activeCoin.amount}.<span class="suffix">{activeCoin.suffix}</span></span>
                                    </div>
                                </div>
                            </button>
                            {#if isCoinDrop}
                                <Coins on:coinDefault={handleCoinSelect} />
                            {/if}
                            <button on:click={()=> goto("/wallet/deposit")} class="sc-iqseJM sc-bqiRlB cBmlor eWZHfu button button-normal sc-iqVWFU fGPfpD">
                                <div class="button-inner">
                                    <span class="wallet-icon"><Icon src={BiSolidWallet}  size="18"  color="rgb(255, 255, 255)"  title="arror" /> </span>
                                    <span>Wallet</span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="sc-gnnDb fWkueO">
                        <div class="user-wrap">
                            {#if profile}
                            <a href="/user/profile/505090">
                             <img class="avatar" alt="" src={profile &&  profile.profile_image}>
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
                                <span class="na-menu"><Icon src={CgMenuCheese}  size="18"   color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" /></span>
                                {#if userProfile}
                                    <Navprofile {profile} />
                                {/if}
                            </button>
                          
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
            {#if (authUser)}
            <div class="sc-gjNHFA jlttqa wallet-enter">
                <div class="sc-fmciRz LQlWw">
                    <button on:click={()=>handleCoinsDrop("open")} class="sc-iFMAIt icGouR">
                        <div class="sc-eXlEPa boxpOO">
                            <img class="coin-icon" alt="" src={activeCoin.coin_image}>
                            <span class="currency">{activeCoin.coin_symbol}</span>
                            <Icon src={RiSystemArrowDropDownLine}  size="18"  color="rgb(171, 182, 194)" className="custom-icon" title="arror" />
                        </div>
                        <div class="sc-Galmp erPQzq coin notranslate balance">
                            <div class="amount">
                                <span class="amount-str">0.<span class="suffix">00000000</span></span>
                            </div>
                        </div>
                    </button>
      
                    <button on:click={()=> goto("wallet/deposit")} class="sc-iqseJM sc-bqiRlB cBmlor eWZHfu button button-normal sc-iqVWFU fGPfpD">
                        <div class="button-inner">
                            <span class="wallet-icon">
                                <Icon src={BiSolidWallet}  size="18"  color="rgb(255, 255, 255)"  title="arror" /> </span>
                            <span>Wallet</span>
                        </div>
                    </button>
                </div>
                {#if isCoinDrop}
                    <Coins on:coinDefault={handleCoinSelect} />
                {/if}
            </div>
            <div class="sc-gnnDb fhlUmF">
                <div class="user-wrap">
                    <a href="/user/profile/505090">
                        <img class="avatar" alt="" src="https://img2.nanogames.io/avatar/505090/s?t=1692755604086">
                    </a>
                    <button on:click={handleUserProfile} class="svg">
                        <span class="na-menu"><Icon src={CgMenuCheese}  size="18"   color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" /></span>
                            {#if userProfile}
                                <Navprofile />
                            {/if}
                    </button>
                </div>
            </div>
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

<!-- <div class="top"><div class="logo-wrap"><img alt="logo" src="https://static.nanogames.io/assets/logo_small.c965cce9.png"></div><button class="sc-bQtKYq cUTdQJ"><span class="open-wrap"><svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Tighten"></use></svg></span></button><div class="sc-gjNHFA jlttqa wallet-enter"><div class="sc-fmciRz LQlWw"><div class="sc-iFMAIt icGouR"><div class="sc-eXlEPa boxpOO"><img class="coin-icon" src="/coin/BTC.black.png"><span class="currency">BTC</span><svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Arrow"></use></svg></div><div class="sc-Galmp erPQzq coin notranslate balance"><div class="amount"><span class="amount-str">0.<span class="suffix">00000000</span></span></div></div></div><button class="sc-iqseJM sc-bqiRlB cBmlor eWZHfu button button-normal sc-iqVWFU fGPfpD"><div class="button-inner"><svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Wallet"></use></svg><span>Wallet</span></div></button></div><div class="sc-gyElHZ eqDSYn" style="opacity: 1; transform: none;"><div class="sc-dUbtfd bkvHTY balance-select"><div class="sc-ezbkAF kDuLvp input sc-fWCJzd eAGpdQ search-input"><div class="input-control"><input type="text" value=""><svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon search"><use xlink:href="#icon_Search"></use></svg></div></div><div class="sc-dkPtRN jScFby scroll-view sc-dvQaRk bVVgo currency-list"><div class="sc-TBWPX kjMlDW currency-item notranslate   normal"><div class="sc-ZOtfp sc-jOxtWs sc-hmjpVf bAQFCP lkOITC jNFKIW"><div class="coin-wrap"><img class="coin-icon" src="/coin/CUB.black.png"></div><div class="name-wrap"><div class="currency-name">CUB</div></div><div class="amount-wrap"><div class="sc-Galmp erPQzq coin notranslate monospace"><div class="amount"><span class="amount-str">100134.81<span class="suffix">0</span></span></div></div></div></div></div><div class="sc-TBWPX kjMlDW currency-item notranslate  active "><div class="sc-ZOtfp sc-jOxtWs sc-hmjpVf bAQFCP lkOITC jNFKIW"><div class="coin-wrap"><img class="coin-icon" src="/coin/BTC.black.png"></div><div class="name-wrap"><div class="currency-name">BTC</div></div><div class="amount-wrap"><div class="sc-Galmp erPQzq coin notranslate monospace"><div class="amount"><span class="amount-str">0.<span class="suffix">00000000</span></span></div></div></div></div></div><div class="sc-TBWPX kjMlDW currency-item notranslate   normal"><div class="sc-ZOtfp sc-jOxtWs sc-hmjpVf bAQFCP lkOITC jNFKIW"><div class="coin-wrap"><img class="coin-icon" src="/coin/NANO.black.png"></div><div class="name-wrap"><div class="currency-name">NANO</div></div><div class="amount-wrap"><div class="sc-Galmp erPQzq coin notranslate monospace"><div class="amount"><span class="amount-str">0.<span class="suffix">00000000</span></span></div></div></div></div></div><div class="sc-TBWPX kjMlDW currency-item notranslate   normal"><div class="sc-ZOtfp sc-jOxtWs sc-hmjpVf bAQFCP lkOITC jNFKIW"><div class="coin-wrap"><img class="coin-icon" src="/coin/NND.black.png"></div><div class="name-wrap"><div class="currency-name">NND<button class="sc-gUQvok fkfnUV"><svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon icon-help"><use xlink:href="#icon_Help"></use></svg></button></div></div><div class="amount-wrap"><div class="sc-Galmp erPQzq coin notranslate monospace"><div class="amount"><span class="amount-str">0.<span class="suffix">00000000</span></span></div></div></div></div></div><div class="sc-TBWPX kjMlDW currency-item notranslate   normal"><div class="sc-ZOtfp sc-jOxtWs sc-hmjpVf bAQFCP lkOITC jNFKIW"><div class="coin-wrap"><img class="coin-icon" src="/coin/ETH.black.png"></div><div class="name-wrap"><div class="currency-name">ETH</div></div><div class="amount-wrap"><div class="sc-Galmp erPQzq coin notranslate monospace"><div class="amount"><span class="amount-str">0.<span class="suffix">00000000</span></span></div></div></div></div></div><div class="sc-TBWPX kjMlDW currency-item notranslate   normal"><div class="sc-ZOtfp sc-jOxtWs sc-hmjpVf bAQFCP lkOITC jNFKIW"><div class="coin-wrap"><img class="coin-icon" src="/coin/USDT.black.png"></div><div class="name-wrap"><div class="currency-name">USDT</div></div><div class="amount-wrap"><div class="sc-Galmp erPQzq coin notranslate monospace"><div class="amount"><span class="amount-str">0.<span class="suffix">00000000</span></span></div></div></div></div></div><div class="sc-TBWPX kjMlDW currency-item notranslate   normal"><div class="sc-ZOtfp sc-jOxtWs sc-hmjpVf bAQFCP lkOITC jNFKIW"><div class="coin-wrap"><img class="coin-icon" src="/coin/DOGE.black.png"></div><div class="name-wrap"><div class="currency-name">DOGE</div></div><div class="amount-wrap"><div class="sc-Galmp erPQzq coin notranslate monospace"><div class="amount"><span class="amount-str">0.<span class="suffix">00000000</span></span></div></div></div></div></div><div class="sc-TBWPX kjMlDW currency-item notranslate   normal"><div class="sc-ZOtfp sc-jOxtWs sc-hmjpVf bAQFCP lkOITC jNFKIW"><div class="coin-wrap"><img class="coin-icon" src="/coin/TRX.black.png"></div><div class="name-wrap"><div class="currency-name">TRX</div></div><div class="amount-wrap"><div class="sc-Galmp erPQzq coin notranslate monospace"><div class="amount"><span class="amount-str">0.<span class="suffix">00000000</span></span></div></div></div></div></div><div class="sc-TBWPX kjMlDW currency-item notranslate   normal"><div class="sc-ZOtfp sc-jOxtWs sc-hmjpVf bAQFCP lkOITC jNFKIW"><div class="coin-wrap"><img class="coin-icon" src="/coin/LTC.black.png"></div><div class="name-wrap"><div class="currency-name">LTC</div></div><div class="amount-wrap"><div class="sc-Galmp erPQzq coin notranslate monospace"><div class="amount"><span class="amount-str">0.<span class="suffix">00000000</span></span></div></div></div></div></div><div class="sc-TBWPX kjMlDW currency-item notranslate   normal"><div class="sc-ZOtfp sc-jOxtWs sc-hmjpVf bAQFCP lkOITC jNFKIW"><div class="coin-wrap"><img class="coin-icon" src="/coin/BNB.black.png"></div><div class="name-wrap"><div class="currency-name">BNB</div></div><div class="amount-wrap"><div class="sc-Galmp erPQzq coin notranslate monospace"><div class="amount"><span class="amount-str">0.<span class="suffix">00000000</span></span></div></div></div></div></div><div class="sc-TBWPX kjMlDW currency-item notranslate   normal"><div class="sc-ZOtfp sc-jOxtWs sc-hmjpVf bAQFCP lkOITC jNFKIW"><div class="coin-wrap"><img class="coin-icon" src="/coin/NNL.black.png"></div><div class="name-wrap"><div class="currency-name">NNL<button class="sc-gUQvok fkfnUV"><svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon icon-help"><use xlink:href="#icon_Help"></use></svg></button></div></div><div class="amount-wrap"><div class="sc-Galmp erPQzq coin notranslate monospace"><div class="amount"><span class="amount-str">0.<span class="suffix">00000000</span></span></div></div></div></div></div><div class="sc-TBWPX kjMlDW currency-item notranslate   normal"><div class="sc-ZOtfp sc-jOxtWs sc-hmjpVf bAQFCP lkOITC jNFKIW"><div class="coin-wrap"><img class="coin-icon" src="/coin/BANANO.black.png"></div><div class="name-wrap"><div class="currency-name">BANANO</div></div><div class="amount-wrap"><div class="sc-Galmp erPQzq coin notranslate monospace"><div class="amount"><span class="amount-str">0.<span class="suffix">00000000</span></span></div></div></div></div></div></div><div class="sc-lkgTHX fkihw"><button class="sc-iqseJM sc-bqiRlB cBmlor eWZHfu button button-normal manage-list"><div class="button-inner"><svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_ManageList"></use></svg> Manage List</div></button><div class="cont"><div>BTC Price: <span class="icon-usd">$</span><span>26430.0000</span></div><div class="wrap">View in <span>USD</span> <div class="sc-giYglK hRMjrF switch  "><div class="dot"></div></div></div></div></div></div></div></div><div class="sc-gnnDb fhlUmF"><div class="user-wrap"><a href="/user/profile/505090"><img class="avatar " src="https://img2.nanogames.io/avatar/505090/s?t=1692842506239"></a><div class="svg"><svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Menu"></use></svg></div></div></div></div> -->
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

.gAvMHL .left {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex: 1 1 0%;
}
.gAvMHL .right {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
}
.jlttqa {
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
.boxpOO {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-weight: 800;
    min-width: 5.75rem;
}
.boxpOO .coin-icon {
    width: 1rem;
    height: 1rem;
}
.boxpOO .currency {
    margin: 0px 0.625rem 0px 0.4375rem;
    font-size: 14px;
}
.erPQzq {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
}
.icGouR .balance .amount {
    color: rgb(245, 246, 247);
    font-weight: 800;
    font-size: 12.3px;
}
.erPQzq .amount-str {
    width: 7em;
    display: inline-block;
}
.erPQzq .suffix {
    opacity: 0.5;
}

.fhlUmF {
    width: 5rem;
    height: 2.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
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
    height: 80%;
    width: 5.85rem;
    padding-right: 10px;
}
</style>
