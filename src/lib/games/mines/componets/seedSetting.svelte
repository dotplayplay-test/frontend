<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp"
import { createEventDispatcher } from 'svelte';
import { browser } from '$app/environment';
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
            <div class="dialog-title">Seed Settings</div>
        </div>

        <button on:click={()=> handleCloseHelp()}  class="sc-ieecCq fLASqZ close-icon dialog-close">
            <Icon src={IoCloseSharp}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
        </button>

        <div class="dialog-body default-style " style="z-index: 2; transform: none;">
            <div class="sc-dkPtRN jScFby scroll-view sc-hxaKAp iGYNgq dialog-box">
                <div class="warn">You may use this function to set a new server seed + a new client seed, they can be randomly generated or customized (at least 10 characters), 
                    and the number of bets will be reset to zero.
                </div>
                <div class="detailForm">
                    <div class="title">Current seeds</div>
                    <div class="sc-ezbkAF kDuLvp input ">
                        <div class="input-label">Server Seed (hash)</div>
                        <div class="input-control">
                            <input type="text" readonly="" value="a356ee6b9467299864e7ccf63233740a386556e2aff3cd2caef0d8f394d35ac3">
                        </div>
                    </div>
                    <div class="formFlex">
                        <div class="sc-ezbkAF kDuLvp input ">
                            <div class="input-label">Client Seed</div>
                            <div class="input-control">
                                <input type="text" readonly="" value="H6d3PGnNRBc3">
                            </div>
                        </div>
                        <div class="sc-ezbkAF kDuLvp input ">
                            <div class="input-label">Nonce</div>
                            <div class="input-control">
                                <input type="text" readonly="" value="50">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="devide"></div>
                <div class="detailForm">
                    <div class="title">New seeds</div>
                    <div class="sc-ezbkAF kDuLvp input ">
                        <div class="input-label">Server Seed (hash)</div>
                        <div class="input-control">
                            <input type="text" placeholder="The seed hasn't been revealed yet" readonly="" value="381b36a01d9040987744f0889c9636c3b8ec04bdd8e8c52f5a4eea3536c019f6">
                        </div>
                    </div>
                    <div class="formFlex">
                        <div class="sc-ezbkAF kDuLvp input ">
                            <div class="input-label">Client Seed</div>
                            <div class="input-control">
                                <input type="text" value="PxFenAFjwPaAfbD6p2x">
                                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon rotate-icon">
                                    <use xlink:href="#icon_Refresh"></use>
                                </svg>
                            </div>
                        </div>
                        <div class="sc-ezbkAF kDuLvp input ">
                            <div class="input-label">Nonce</div>
                            <div class="input-control">
                                <input type="text" readonly="" value="0">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="submit">
                    <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                        <div class="button-inner">Use New Seeds</div>
                    </button>
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
.default-style {
    padding-top: 3.75rem;
    background-color: rgb(23, 24, 27);
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
.iGYNgq .warn {
    border: 1px solid rgb(67, 179, 9);
    background: rgba(93, 160, 0, 0.1);
    border-radius: 0.625rem;
    color: rgb(67, 179, 9);
    padding: 0.75rem 1.25rem;
    margin-top: 0.5rem;
    font-size: 0.75rem;
}
.iGYNgq .detailForm {
    margin-top: 1.375rem;
}
.iGYNgq .detailForm .title {
    color: rgb(245, 246, 247);
    line-height: 1;
    font-weight: bold;
}
.iGYNgq .detailForm .input {
    margin-top: 0.75rem;
}
.iGYNgq .detailForm .input-label {
    margin: 0px 0px 0.25rem 0.75rem;
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
.iGYNgq .detailForm .input .input-control input[readonly] {
    opacity: 1;
}
.iGYNgq .detailForm .input .input-control input {
    color: rgb(245, 246, 247);
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
.iGYNgq .detailForm .formFlex {
    display: flex;
    margin-bottom: 1.25rem;
}
.iGYNgq .detailForm .formFlex > div:first-child {
    flex: 6 1 0%;
    margin-right: 10px;
}
.iGYNgq .detailForm .input-label {
    margin: 0px 0px 0.25rem 0.75rem;
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
.kDuLvp {
    margin-top: 1rem;
}
.iGYNgq .detailForm .input .input-control input[readonly] {
    opacity: 1;
}
.iGYNgq .detailForm .input .input-control input {
    color: rgb(245, 246, 247);
}
.iGYNgq .detailForm .formFlex > div:last-child {
    flex: 4 1 0%;
}
.iGYNgq .detailForm .input {
    margin-top: 0.75rem;
}
.iGYNgq .submit {
    margin: 1.25rem 0px 3.75rem;
    padding: 0px 3.125rem;
}
</style>
