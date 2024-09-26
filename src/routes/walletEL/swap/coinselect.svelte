<script>
import {  goto } from "$app/navigation"

</script>

<div class="sc-bkkeKt kBjSXI">
    <div class="dialog sc-zjkyB ipnwmW" style="opacity: 1; width: 464px; height: 585px; margin-top: -294px; margin-left: -232px; transform: scale(1) translateZ(0px);">
        <button class="dialog-back" style="opacity: 1; transform: none;">
        </button>

        <div class="dialog-head has-back has-close">
            <div class="dialog-title">Wallet</div>
        </div>

        <button class="sc-ieecCq fLASqZ close-icon dialog-close">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                <use xlink:href="#icon_Close"></use>
            </svg>
        </button>
        <button on:click={()=>goto("/")} class="sc-ieecCq fLASqZ close-icon dialog-close">
        </button>
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
</style>