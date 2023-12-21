<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import {  goto } from "$app/navigation";
import { createEventDispatcher } from 'svelte';
import { browser } from '$app/environment';
const dispatch = createEventDispatcher()

const handleClose = (()=>{
    dispatch("close")
})

let is_mobile = false
$:{
    if (browser && window.innerWidth < 650) {
        is_mobile = true
    }
    else {
        is_mobile = false
    }
}

</script>

<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
    <div class="dialog "style={`${is_mobile ? "transform: scale(1) translateZ(0px);" : "opacity: 1; width: 464px; height: 631px; margin-top: -315.5px; margin-left: -232px;"}  `}>
        <div class="ui-dialog d15qhpiq" style="opacity: 1; visibility: visible; transform: translateX(0%) scale(1) translateZ(0px);">
            <div class="dialog-head has-close">
                <div class="dialog-title">Assets Portfolio</div>
            </div>
            <button on:click={()=> handleClose()} class="sc-ieecCq fLASqZ close-icon dialog-close">
                <Icon src={IoCloseSharp}  size="18"  color="rgb(255, 255, 255)" />
            </button>
            <div class="dialog-body no-style" style="z-index: 2; transform: none;">
                <div class="sc-dkPtRN jScFby scroll-view sc-bvFjSx jGQOsZ">
                    <div class="tabs-scroll">
                        <div class="tabs-navs">
                            <button class="tabs-nav is-active">Currency</button>
                            <button class="tabs-nav tabs-nav-disabled">mNFT</button>
                        </div>
                    </div>
                    <div class="tabs-view" style="transform: none;">
                        <div class="ui-scrollview currency-list">
                            <div class={`c1ubyjee currency-item notranslate ${9 === 9 ? "active" : ""} `}>
                                <div class="coin-wrap">
                                    <img alt="" class="coin-icon" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828435/dpp_logo_sd2z9d.png">
                                </div>
                                <div class="name-wrap">
                                    <div class="currency-name">
                                        PPL
                                    </div>
                                </div>
                                <div class="amount-wrap">
                                    <div class="amount-info">
                                        <div class="cy2znlo coin notranslate monospace">
                                            <div class="amount amount-str">$ 0.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
   </div>   
</div>

<style>

.ui-dialog {
    position: absolute;
    right: 0;
    top: 0;
    width: 464px;
    height: 720px;
    max-width: 90vw;
    max-height: 90vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow: hidden;
    background-color: #17181b;
}
.dialog-head.has-close {
    margin-right: 3.75rem;
}
.dialog-head {
    position: relative;
    z-index: 10;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 3.75rem;
    margin-left: 1.125rem;
    -webkit-transition: all .5s;
    transition: all .5s;
}
.dialog-head .dialog-title {
    font-size: 1rem;
    margin: 0;
    font-weight: 700;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
    line-height: 1;
}
.tabs-scroll {
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
}
.tabs-navs {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0.9375rem 1.875rem 1.25rem;
    padding: 0.125rem;
}
.tabs-navs {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 2.25rem;
    position: relative;
    border-radius: var(--border-radius);
    background-color: #24262B;
}
.tabs-navs .is-active {
    border-radius: var(--border-radius);
}
.tabs-nav.is-active {
    background-color: var(--1h443ei);
    color: #2D3035;
    font-weight: 700;
}
.tabs-nav.tabs-nav-disabled {
    opacity: .5;
}
.tabs-nav {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 100%;
    cursor: pointer;
    white-space: nowrap;
    width: 100%;
    z-index: 1;
}
.tabs-nav.is-active {
    background-color: #2D3035;;
    color: #f5f6f7;
    font-weight: 700;
}
.currency-list {
    padding-bottom: 1.25rem;
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
    height: 1px;
}
.ui-scrollview {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    -webkit-flex: 1 1 1px;
    -ms-flex: 1 1 1px;
    flex: 1 1 1px;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-y;
    overscroll-behavior: contain;
}
.c1ubyjee.active {
    border-color: var(--primary-color);
}
.c1ubyjee .coin-wrap {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.c1ubyjee .coin-icon {
    width: 1.875rem;
    height: 1.875rem;
    border-radius: var(--border-radius);
    margin-right: 0.9375rem;
}
.c1ubyjee .currency-name {
    color: #fff;
    font-weight: 800;
    height: 1.25rem;
    line-height: 1.25rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
}
.c1ubyjee {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-align-self: stretch;
    -ms-flex-item-align: stretch;
    align-self: stretch;
    padding: 0.5625rem 0.625rem;
    font-size: .875rem;
    border-radius: var(--border-radius);
    margin: 0.25rem 1.25rem;
    border: solid 1px transparent;
    min-height: 2.0625rem;
}
.currency-name {
    color: #fff;
    font-weight: 800;
    height: 1.25rem;
    line-height: 1.25rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
}
.c1ubyjee .amount-wrap {
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: flex-end;
    -webkit-box-align: flex-end;
    -ms-flex-align: flex-end;
    align-items: flex-end;
    margin-left: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.c1ubyjee .amount-wrap .amount-info {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.c1ubyjee .amount-wrap .coin {
    text-align: right;
}
.c1ubyjee .amount-wrap .monospace {
    color: #fff;
    font-weight: 800;
    line-height: 1;
    height: 1.375rem;
    line-height: 1.375rem;
}
</style>