<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoDice from "svelte-icons-pack/io/IoDice";
import { createEventDispatcher } from 'svelte';
import { routes } from "$lib/store/routes"
$: console.log($routes)
const dispatch = createEventDispatcher()

const handleDispatch = ((e)=>{
    dispatch("dipla", e)
})

</script>

<!-- ============================  games ================= -->
<div class="sc-hKwDye fclMSM" style="height: auto;">
    <div class="sc-lbhJGD dzUbMz">
        <div class="item-wrap">
            <div  class={`game-item ${$routes.route === "/(games)/crash" ? "select" : ""}`}>
                <button on:click={()=> handleDispatch("/crash")} class="game-area">
                    <Icon src={IoDice} color="rgba(153, 164, 176, 0.6)" size="17" className="crash-icon" title="Custom icon params" />
                    <div class="sc-jrQzAO iodxXo p">
                        <span style="transform: scale(1);">Crash</span>
                    </div>
                </button>
            </div>
            <div class={`game-item ${$routes.route === "/(games)/classic-dice" ? "select" : ""}`} >
                <button on:click={()=> handleDispatch("/classic-dice")} class="game-area">
                    <Icon src={IoDice} color="rgba(153, 164, 176, 0.6)" size="17" className="custom-icon" title="Custom icon params" />
                    <div class="sc-jrQzAO iodxXo p">
                        <span style="transform: scale(1);">Classic Dice</span>
                    </div>
                </button>
            </div>
            <div class={`game-item ${$routes.route === "/(games)/plinko" ? "select" : ""}`}>
                <button on:click={()=> handleDispatch("/plinko")} class="game-area">
                    <Icon src={IoDice} color="rgba(153, 164, 176, 0.6)" size="17" className="custom-icon" title="Custom icon params" />
                    <div class="sc-jrQzAO iodxXo p">
                        <span style="transform: scale(1);">plinko</span>
                    </div>
                </button>
            </div>
            <div class={`game-item ${$routes.route === "/(games)/tower" ? "select" : ""}`}>
                <button on:click={()=> handleDispatch("/tower")} class="game-area">
                    <Icon src={IoDice} color="rgba(153, 164, 176, 0.6)" size="20" className="custom-icon" title="Custom icon params" />
                    <div class="sc-jrQzAO iodxXo p">
                        <span style="transform: scale(0.925);">Tower</span>
                    </div>
                </button>
            </div>
        </div>

        <div class="item-wrap">
            <div class={`game-item ${$routes.route === "/(games)/hilo" ? "select" : ""}`}>
                <button on:click={()=> handleDispatch("/hilo")} class="game-area">
                    <Icon src={IoDice} color="rgba(153, 164, 176, 0.6)" size="17" className="crash-icon" title="Custom icon params" />
                    <div class="sc-jrQzAO iodxXo p">
                        <span style="transform: scale(1);">Hilo</span>
                    </div>
                </button>
            </div>
            <div class={`game-item ${$routes.route === "/(games)/diamonds" ? "select" : ""}`}>
                <button on:click={()=> handleDispatch("/diamonds")} class="game-area">
                    <Icon src={IoDice} color="rgba(153, 164, 176, 0.6)" size="17" className="custom-icon" title="Custom icon params" />

                    <div class="sc-jrQzAO iodxXo p">
                        <span style="transform: scale(1);">Diamond</span>
                    </div>
                </button>
            </div>
            <div class={`game-item ${$routes.route === "/(games)/mines" ? "select" : ""}`}>
                <button on:click={()=> handleDispatch("/mines")} class="game-area">
                    <Icon src={IoDice} color="rgba(153, 164, 176, 0.6)" size="17" className="custom-icon" title="Custom icon params" />
                    <div class="sc-jrQzAO iodxXo p">
                        <span style="transform: scale(1);">Mines</span>
                    </div>
                </button>
            </div>
        </div>
    </div>
</div>