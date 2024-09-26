<script>
import Help from "$lib/help.svelte";
import "../../styles/helpcenter/main/index.css"
import "../../styles/helpcenter/mobile/index.css"
import {
    goto
} from "$app/navigation"
</script>

<div class="sc-lhMiDA ePAxUv">
    <div id="helpcenter">
        <div class="sc-hKumaY dUhyFv">
            <p class="title">
                <span class="ttc">help center</span>
            </p>
            <button on:click={()=> goto('/')} class="sc-ieecCq fLASqZ close-icon ">
            </button>
        </div>
        <div class="sc-GEbAx hJFGXE pc">
            <div class="content-area">
                <Help />
                <div class="right-info">
                    <div style="transform: translate3d(0px, 0px, 0px); opacity: 1;">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
