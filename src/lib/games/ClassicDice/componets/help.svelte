<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp"
import RiSystemArrowLeftSLine from "svelte-icons-pack/ri/RiSystemArrowLeftSLine";
import RiSystemArrowDropRightLine from "svelte-icons-pack/ri/RiSystemArrowDropRightLine";
import {
    createEventDispatcher
} from 'svelte';
import About from './helps/about.svelte';
import Fairness from './helps/fairness.svelte';

const dispatch = createEventDispatcher()

const handleCloseHelp = (() => {
    dispatch("close", 5)
})

let defaultSate = true
let is_about = false
let fairness = false
const HandleAboutGame = ((e) => {
    if(e === 1){
        defaultSate = !defaultSate
        is_about = !is_about
        fairness = false
    }
    else{
        defaultSate = !defaultSate
        fairness = !fairness
        is_about = false
    }
})


</script>

<div class="sc-bkkeKt kBjSXI">
    <div class="dialog " style="opacity: 1; width: 464px; height: 631px; margin-top: -315.5px; margin-left: -232px; transform: scale(1) translateZ(0px);">
        {#if !defaultSate}
            <button on:click={()=> defaultSate = true} class="dialog-back" style="opacity: 1; transform: none;">
                <Icon src={RiSystemArrowLeftSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" />
            </button>
        {/if}
        <div class={`dialog-head ${defaultSate ? "has-close" : "has-back"} `}>
            <div class="dialog-title">{defaultSate ? "Help" :  is_about ? "What Game Is This?" : "Fairness"}</div>
        </div>
        <button on:click={()=> handleCloseHelp()}  class="sc-ieecCq fLASqZ close-icon dialog-close">
            <Icon src={IoCloseSharp}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" />
        </button>

        {#if defaultSate}
        <div class="dialog-body default-style " style="z-index: 2; transform: none;">
            <div class="sc-dkPtRN jScFby scroll-view sc-cfJLRR cTaiTH">
                <div class="help-list">
                    <button on:click={()=> HandleAboutGame(1)} class="usiu">
                        <span>What Game Is This?</span>
                        <Icon src={RiSystemArrowDropRightLine}  size="23"  color="rgba(153, 164, 176, 0.6)"  />
                    </button>
                    <button on:click={()=> HandleAboutGame(2)} class="usiu">
                        <span>Fairness</span>
                        <Icon src={RiSystemArrowDropRightLine}  size="23"  color="rgba(153, 164, 176, 0.6)"  />
                    </button>
                </div>
            </div>
        </div>
        {/if}

        {#if is_about && !defaultSate}
            <About />
        {/if}
        {#if fairness && !defaultSate}
            <Fairness />
        {/if}

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
.dialog-head.has-back {
    margin-left: 3.125rem;
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

.usiu span:hover {
    color: aliceblue;
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

.default-style>div {
    border-radius: 20px;
    background-color: rgb(30, 32, 36);
    padding: 1.25rem 1.25rem 0px;
}

.dialog-body>div {
    flex: 1 1 0%;
}

.jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
}

.cTaiTH .help-list {
    margin-top: 0.5rem;
}

.cTaiTH .help-list>button {
    background-color: rgb(23, 24, 27);
    border-radius: 1.25rem;
    display: flex;
    width: 100%;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 3.5rem;
    padding: 0px 1.25rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
}
</style>
