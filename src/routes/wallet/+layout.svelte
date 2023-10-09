<script>
import "../../styles/transactions/deposit.css"

/** @type {import('./$types').PageLoad} */
export let data;


import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import BiTransfer from "svelte-icons-pack/bi/BiTransfer";
import FaSolidWallet from "svelte-icons-pack/fa/FaSolidWallet";
import IoSwapVerticalOutline from "svelte-icons-pack/io/IoSwapVerticalOutline";
import SiVault from "svelte-icons-pack/si/SiVault";
import {
    checkIsOpen
} from "$lib/store/swaps/index"
import BsCashCoin from "svelte-icons-pack/bs/BsCashCoin";
import RiSystemArrowLeftSLine from "svelte-icons-pack/ri/RiSystemArrowLeftSLine";

import {
    goto
} from "$app/navigation"

let count = 1

const handleNavigation = ((e) => {
    goto(e)
    count = count + 1
})

const handleClose = (() => {
    history.go(-count)
    count = 1
})

const handleOpenCoinSelect = (() => {
    if ($checkIsOpen) {
        checkIsOpen.set(false)
    } else {
        checkIsOpen.set(true)
    }
})

</script>

<div id="main">
    <div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
        <div class="dialog " style="opacity: 1; width: 464px; height: 631px; margin-top: -315.5px; margin-left: -232px; transform: scale(1) translateZ(0px);">
            {#if $checkIsOpen}
            <button on:click={()=> handleOpenCoinSelect()} class="dialog-back" style="opacity: 1; transform: none;">
                <Icon src={RiSystemArrowLeftSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
            </button>
            {/if}

            <div class={`dialog-head ${$checkIsOpen ? "has-back" : "has-close"}`}>
                <div class="dialog-title">Wallet</div>
                {#if !$checkIsOpen}
                <div class="sc-fZzbTk sobNK">
                    <button>
                        <span class="icon">
                            <Icon src={BiTransfer}  size="18"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
                        </span>
                        <span>Transactions</span>
                    </button>
                </div>
                {/if}
            </div>
            <button on:click={()=> handleClose() } class="sc-ieecCq fLASqZ close-icon dialog-close">
                <Icon src={IoCloseSharp}  size="18"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
            </button>

            <div class="dialog-body no-style" style="z-index: 2; transform: none;">
                <div id="wallet" class="sc-kMyqmI hioXRL">
                    <div class="sc-cAUCVt fsVpnS">
                        <button on:click={()=> handleNavigation("/wallet/deposit")} class={`tab ${ "/wallet/deposit" === data.route  ? `active` : "" } `}>
                            <Icon src={FaSolidWallet}  size="18"  color={`${"/wallet/deposit" === data.route ? `rgb(255, 255, 255` : "rgba(153, 164, 176, 0.6)" }  `} className="custom-icon" title="arror" />
                            <div class="title">Deposit</div>
                        </button>
                        <button on:click={()=> handleNavigation("/wallet/withdraw")} class={`tab ${"/wallet/withdraw" === data.route  ? `active` : "" } `}>
                            <Icon src={BsCashCoin}  size="18"   color={`${"/wallet/withdraw" === data.route  ? `rgb(255, 255, 255` : "rgba(153, 164, 176, 0.6)" }  `}  className="custom-icon" title="arror" />
                            <div class="title">Withdraw</div>
                        </button>
                        <button on:click={()=> handleNavigation("/wallet/swap")} class={`tab ${"/wallet/swap" === data.route  ? `active` : "" } `}>
                            <Icon src={IoSwapVerticalOutline}  size="18"   color={`${"/wallet/swap" === data.route  ? `rgb(255, 255, 255` : "rgba(153, 164, 176, 0.6)" }  `}  className="custom-icon" title="arror" />
                            <div class="title">DPPSwap</div>
                        </button>
                        <button on:click={()=> handleNavigation("/wallet/vault")} class={`tab ${"/wallet/vault" === data.route  ? `active` : "" } `}>
                            <Icon src={SiVault}  size="18"   color={`${"/wallet/vault" === data.route  ? `rgb(255, 255, 255` : "rgba(153, 164, 176, 0.6)" }  `}  className="custom-icon" title="arror" />
                            <div class="title">Vault Pro</div>
                        </button>
                    </div>
                    <div class="sc-dkPtRN jScFby scroll-view sc-fbWUsZ eDKSkl" id="deposit">
                        <div class="sc-hKumaY JghUg">
                            <slot></slot>
                        </div>
                    </div>

                    {#if !$checkIsOpen}
                    <div class="sc-hDzdEj exYdcu">
                        <div class="sc-lcdCCa iTVeFz">
                            <div class="cont">Your 2FA currently is Disabled</div>
                            <button class="sc-iqseJM sc-bqiRlB cBmlor eWZHfu button button-normal">
                                <div class="button-inner">Enable 2FA</div>
                            </button>
                        </div>
                    </div>
                    {/if}

                </div>
            </div>
        </div>
    </div>
</div>

<!-- ==================== Mobile =============================== -->
<div class="mobile">
    <div class="sc-bkkeKt kBjSXI" style="background-color: transparent;">
        <div class="dialog" style="transform: none;">
            <div class="dialog-head has-close">
                <div class="dialog-title">Wallet</div>
                <div class="sc-jSYIrd fktpVO">
                    <button>
                        <Icon src={BiTransfer}  size="18"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
                        <span>Transactions</span>
                    </button>
                </div>
            </div>
            <button on:click={()=> handleClose() } class="sc-ieecCq fLASqZ close-icon dialog-close">
                <Icon src={IoCloseSharp}  size="18"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
            </button>
        </div>
        <div class="dialog-body no-style" style="z-index: 2; transform: none;">
            <div id="wallet" class="sc-kMyqmI hioXRL">
                <div class="sc-hctura jEHNdH">
                    <button on:click={()=> handleNavigation("/wallet/deposit")} class={`tab ${ "/wallet/deposit" === data.route  ? `active` : "" } `}>
                        <Icon src={FaSolidWallet}  size="18"  color={`${"/wallet/deposit" === data.route ? `rgb(255, 255, 255` : "rgba(153, 164, 176, 0.6)" }  `} className="custom-icon" title="arror" />
                        <div class="title">Deposit</div>
                    </button>
                    <button on:click={()=> handleNavigation("/wallet/withdraw")} class={`tab ${"/wallet/withdraw" === data.route  ? `active` : "" } `}>
                        <Icon src={BsCashCoin}  size="18"   color={`${"/wallet/withdraw" === data.route  ? `rgb(255, 255, 255` : "rgba(153, 164, 176, 0.6)" }  `}  className="custom-icon" title="arror" />
                        <div class="title">Withdraw</div>
                    </button>
                    <button on:click={()=> handleNavigation("/wallet/swap")} class={`tab ${"/wallet/swap" === data.route  ? `active` : "" } `}>
                        <Icon src={IoSwapVerticalOutline}  size="18"   color={`${"/wallet/swap" === data.route  ? `rgb(255, 255, 255` : "rgba(153, 164, 176, 0.6)" }  `}  className="custom-icon" title="arror" />
                        <div class="title">DPPSwap</div>
                    </button>
                    <button on:click={()=> handleNavigation("/wallet/vault")} class={`tab ${"/wallet/vault" === data.route  ? `active` : "" } `}>
                        <Icon src={SiVault}  size="18"   color={`${"/wallet/vault" === data.route  ? `rgb(255, 255, 255` : "rgba(153, 164, 176, 0.6)" }  `}  className="custom-icon" title="arror" />
                        <div class="title">Vault Pro</div>
                    </button>
                </div>
                <div class="sc-dkPtRN jScFby scroll-view sc-fbWUsZ eDKSkl" id="deposit">
                    <div class="sc-hKumaY JghUg">
                        <slot></slot>
                    </div>
                </div>
                <div class="sc-hDzdEj exYdcu">
                    <div class="sc-lcdCCa iTVeFz">
                        <div class="cont">Your 2FA currently is Disabled</div>
                        <button class="sc-iqseJM sc-bqiRlB cBmlor eWZHfu button button-normal">
                            <div class="button-inner">Enable 2FA</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
@media screen and (min-width: 650px) {
    /* .kBjSXI {
        position: fixed;
        z-index: 1000;
        inset: 0px;
        background-color: rgba(0, 0, 0, 0.7);
        filter: none !important;
    } */

    .dialog-back {
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: 11;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        width: 3.75rem;
        height: 3.75rem;
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

    .dialog-head.has-back {
        margin-left: 3.125rem;
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

    .dialog-head .dialog-title {
        font-size: 1rem;
        margin: 0px;
        font-weight: bold;
        flex: 1 1 0%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        color: rgb(245, 246, 247);
    }

    .sobNK {
        display: flex;
    }

    .sobNK span {
        color: rgba(153, 164, 176, 0.6);
        font-size: 0.875rem;
    }

    .sobNK .icon {
        display: inline-block;
        vertical-align: top;
        width: 1.125rem;
        height: 1.125rem;
        margin: 0px 0.5rem 0px 0px;
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
    }

    .default-style {
        padding-top: 3.75rem;
        background-color: rgb(23, 24, 27);
    }

    .fsVpnS {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        background-color: rgb(30, 32, 36);
        border-radius: 1.25rem;
        margin: 0.25rem 0.625rem 0.625rem;
        order: 0;
        flex: 0 0 auto;
        font-size: 12px;
    }

    .default-style>div {
        border-radius: 20px;
        background-color: rgb(30, 32, 36);
        padding: 1.25rem 1.25rem 0px;
    }

    .fsVpnS .tab {
        position: relative;
        z-index: 2;
        height: 5rem;
        width: 5rem;
        padding: 0.625rem 0px;
        text-align: center;
        cursor: pointer;
        line-height: 1;
        border-radius: 1.25rem;
    }

    .fsVpnS .tab:hover {
        background: rgba(0, 0, 0, 0.1);
    }

    .hMujFh {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        position: relative;
        color: rgba(153, 164, 176, 0.6);
    }

    .fsVpnS .tab.active {
        background-color: rgb(67, 179, 9);
        color: rgb(255, 255, 255);
    }
}

@media screen and (max-width: 650px) {
    #main {
        width: 50%;
    }
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
        flex-wrap: wrap;
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
        flex-wrap: wrap;
        -webkit-box-align: center;
        align-items: center;
        height: 3.75rem;
        margin-left: 1.125rem;
        transition: all 0.5s ease 0s;
    }

    .dialog-head .dialog-title {
        font-size: 1rem;
        margin: 0px;
        font-weight: bold;
        flex: 1 1 0%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        color: rgb(245, 246, 247);
    }

    .fktpVO {
        display: flex;
    }

    .fktpVO span {
        color: rgba(153, 164, 176, 0.6);
        font-size: 0.875rem;
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
    }

    .no-style {
        padding-top: 3.75rem;
        background-color: rgb(23, 24, 27);
    }

    .dialog-body {
        position: absolute;
        inset: 0px;
        display: flex;
        overflow: hidden;
    }

    .dialog-body>div {
        flex: 1 1 0%;
    }

    .hioXRL {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        position: relative;
        color: rgba(153, 164, 176, 0.6);
    }

    .eDKSkl {
        flex: 1 1 auto;
        padding: 0.625rem 0.625rem 1.875rem;
        position: relative;
    }

    .jScFby {
        box-sizing: border-box;
        height: 100%;
        overflow-y: auto;
        touch-action: pan-y;
        overscroll-behavior: contain;
    }

    .JghUg {
        border-radius: 1.25rem;
        background-color: rgb(30, 32, 36);
        position: relative;
        padding: 0.625rem;
        flex-wrap: wrap;
    }

    .dialog {
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        margin: 0px;
        border-radius: 0px;
    }

    .jEHNdH {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        background-color: rgb(30, 32, 36);
        border-radius: 1.25rem;
        margin: 0.25rem 0.625rem 0.625rem;
        order: 1;
        flex: 0 0 auto;
        font-size: 12px;
        flex-wrap: wrap;
    }

    /* .sc-bkkeKt {
        display: flex;
        flex-wrap: wrap;
    } */

}

@media screen and (max-width: 850px){
    .dialog {
        display: flex;
        font-size: x-small;
        height: 100%;
        
       
    }

    .dialog-body {
        margin-right: 10px;
        font-size: x-small;
  
    }

    .dialog-head {
        font-size: x-small;

    }

    .dialog-head.has-back {
        font-size: smaller;
    }

    .dialog-title {
        font-size: smaller;
    }

    .cBmlor>.button-inner {
   font-size: small;
   
   
}

/* .eWZHfu.button {
    width: 40%;
    height: 80%;
    margin-right: 90px;
} */

}

.jEHNdH .tab.active {
    background-color: rgb(67, 179, 9);
    color: rgb(255, 255, 255);
}

.jEHNdH .title {
    margin-top: 0.3125rem;
}

.jEHNdH .tab {
    position: relative;
    z-index: 2;
    height: 5rem;
    width: 5rem;
    padding: 0.625rem 0px;
    text-align: center;
    cursor: pointer;
    line-height: 1;
    border-radius: 1.25rem;
}

.exYdcu {
    position: relative;
    padding: 1.125rem 0px;
    border-top: 1px solid rgba(128, 141, 152, 0.1);
}

.iTVeFz {
    margin: 0px auto;
    display: flex;
    flex: 0 0 auto;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background-color: rgb(30, 32, 36);
    border-radius: 2.4375rem;
    height: 3.5rem;
}

.iTVeFz .cont {
    display: flex;
    padding: 0.625rem 0.625rem 0.625rem 2rem;
    line-height: 1.125rem;
    opacity: 0.8;
    font-size: 12px;
}

.eWZHfu.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(88, 26, 196);
    background-image: conic-gradient(from 1turn, rgb(88, 26, 196), rgb(119, 60, 253));
}

.iTVeFz button {
    width: 12.5rem;
    height: 100%;
    margin: 0px;
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

.cBmlor {
    display: block;
    width: 100%;
    border-radius: 6.25rem;
    height: 3rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
}
</style>
