<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import VscLaw from "svelte-icons-pack/vsc/VscLaw";
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
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
                <Icon src={VscLaw}  size="24"  color="rgb(67, 179, 9)" className="custom-icon" title="arror" />
                <span class="ttc">help center</span>
            </p>
            <button on:click={()=> goto('/')} class="sc-ieecCq fLASqZ close-icon ">
                <Icon src={IoCloseSharp}  size="18"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
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
