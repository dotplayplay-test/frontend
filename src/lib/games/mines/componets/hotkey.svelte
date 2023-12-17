<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp"
import { browser } from '$app/environment';
import {
    createEventDispatcher
} from 'svelte';

const dispatch = createEventDispatcher()
const handleCloseHelp = (() => {
    dispatch("close", 5)
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

<div class="sc-bkkeKt kBjSXI">
    <div class="dialog "style={`${is_mobile ? "transform: scale(1) translateZ(0px);" : "opacity: 1; width: 464px; height: 631px; margin-top: -315.5px; margin-left: -232px;"}  `}>
        <div class="dialog-head has-close">
            <div class="dialog-title">Hot keys</div>
        </div>
        <button on:click={()=> handleCloseHelp()}  class="sc-ieecCq fLASqZ close-icon dialog-close">
            <Icon src={IoCloseSharp}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
        </button>

        <div class="dialog-body default-style " style="z-index: 2; transform: none;">
            <div class="sc-dkPtRN jScFby scroll-view sc-hIagIn cxLQEF dialog-box">
                <div class="hotkey-list">
                    <div class="hotkey-item">
                        <div class="hotkey-txt">Half bet amount</div>
                        <div class="hotkey-key">A</div>
                    </div>
                    <div class="hotkey-item">
                        <div class="hotkey-txt">Double bet amount</div>
                        <div class="hotkey-key">S</div>
                    </div>
                    <div class="hotkey-item">
                        <div class="hotkey-txt">Make a bet</div>
                        <div class="hotkey-key">Space</div>
                    </div>
                    <div class="hotkey-item">
                        <div class="hotkey-txt">Toggle condition to win</div>
                        <div class="hotkey-key">Q</div>
                    </div>
                    <div class="hotkey-item">
                        <div class="hotkey-txt">Lower the target</div>
                        <div class="hotkey-key">W</div>
                    </div>
                    <div class="hotkey-item">
                        <div class="hotkey-txt">Higher the target</div>
                        <div class="hotkey-key">E</div>
                    </div>
                </div>
                <div class="hotkey-enabled">
                    <div class="hotkey-select "></div>
                    <div>Hotkeys Enabled</div>
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
.cxLQEF .hotkey-enabled {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 1.25rem;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
}
.cxLQEF .hotkey-enabled .hotkey-select {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin-right: 0.5rem;
    position: relative;
    background-color: rgba(45, 48, 53, 0.5);
    border: 1px solid rgb(45, 48, 53);
}
@media screen and (min-width: 650px){
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

}

@media screen and (max-width: 650px){
.dialog {
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    margin: 0px;
    border-radius: 0px;
}

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
.dialog-body {
    position: absolute;
    inset: 0px;
    display: flex;
    overflow: hidden;
}
.default-style > div {
    border-radius: 20px;
    background-color: rgb(30, 32, 36);
    padding: 1.25rem 1.25rem 0px;
}
.dialog-body > div {
    flex: 1 1 0%;
}
.dialog-box {
    color: rgba(153, 164, 176, 0.6);
    background-color: rgb(30, 32, 36);
    border-top-left-radius: 2.5rem;
    border-top-right-radius: 2.5rem;
    padding: 1.75rem 1.125rem;
}

.jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
}
.cxLQEF .hotkey-list {
    margin-top: 0.5rem;
}
.cxLQEF .hotkey-item {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 1.25rem;
    height: 3.5rem;
    border-radius: 1.25rem;
    margin-bottom: 0.5rem;
    background-color: rgb(23, 24, 27);
    color: rgba(153, 164, 176, 0.6);
}
.cxLQEF .hotkey-item .hotkey-key {
    width: 6.25rem;
    text-align: center;
    position: relative;
    font-weight: 600;
    color: rgb(245, 246, 247);
    padding: 0.5rem 0px 0.5rem 1.25rem;
}
.cxLQEF .hotkey-item .hotkey-key::after {
    content: "";
    left: 0px;
    top: 0px;
    bottom: 0px;
    opacity: 0.13;
    position: absolute;
    width: 1px;
    background-color: rgb(153, 164, 176);
}
</style>
