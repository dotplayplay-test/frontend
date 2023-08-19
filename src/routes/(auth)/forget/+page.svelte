<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import RiSystemArrowLeftSLine from "svelte-icons-pack/ri/RiSystemArrowLeftSLine";
</script>

<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
    <div class="dialog" style="opacity: 1; width: 464px; height: 535px; margin-top: -264px; margin-left: -232px; transform: scale(1) translateZ(0px);">
        <div class="dialog-back" style="opacity: 1; transform: none;">
            <Icon src={RiSystemArrowLeftSLine}  size="18"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
        </div>
        <div class="dialog-head has-back has-close">
            <div class="dialog-title">Reset Password</div>
        </div>
        <button class="sc-ieecCq fLASqZ close-icon dialog-close">
            <Icon src={IoCloseSharp}  size="18"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
        </button>
        <div class="dialog-body default-style" style="z-index: 2; transform: none;">
            <div class="sc-dkPtRN jScFby scroll-view sc-eoHXOn iDSHOY">
                <div class="sc-ezbkAF kDuLvp input input">
                    <div class="input-label">Registered Email Address.</div>
                    <div class="input-control">
                        <input type="text" autocomplete="off" value="">
                    </div>
                </div>
                <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                    <div class="button-inner">Reset Password</div>
                </button>
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
    height: 3.75rem
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
.jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
}
.iDSHOY .input {
    margin-top: 0.5rem;
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
.iDSHOY .button {
    width: 20rem;
    margin: 2.5rem auto;
}
.fnKcEH.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(67, 179, 9);
    background-image: conic-gradient(from 1turn, rgb(67, 179, 9), rgb(93, 219, 28));
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
