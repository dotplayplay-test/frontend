<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoDice from "svelte-icons-pack/io/IoDice";
import IoRocket from "svelte-icons-pack/io/IoRocket";
import {routes} from "../lib/store/routes"
import {
    createEventDispatcher
} from 'svelte';
export let styls;
let dispatch = createEventDispatcher()
import {
    goto
} from "$app/navigation"
let games
$: { games = [{
        id: 1,
        name: "Crash",
        icon: IoRocket,
        route: "crash",
        isAtive: $routes.route === "/(games)/crash"
    },
    {
        id: 2,
        name: "Classic Dice",
        icon: IoDice,
        route: "classic-dice",
        isAtive: $routes.route === "/(games)/classic-dice"
    },
    {
        id: 3,
        name: "Plinko",
        icon: IoDice,
        route: "plinko",
        isAtive: $routes.route === "/(games)/plinko"
    },
    {
        id: 4,
        name: "Tower",
        icon: IoDice,
        route: "tower",
        isAtive: $routes.route === "/(games)/tower"
    },
    {
        id: 5,
        name: "HiLo",
        icon: IoDice,
        route: "hilo",
        isAtive: $routes.route === "/(games)/hilo"
    },
    {
        id: 6,
        name: "Diamonds",
        icon: IoDice,
        route: "diamonds",
        isAtive: $routes.route === "/(games)/diamonds"
    },
    {
        id: 7,
        name: "Mines",
        icon: IoDice,
        route: "mines",
        isAtive: $routes.route === "/(games)/mines"
    },
]}

const handleOriginalRoute = ((e, i) => {
    goto(e)
    dispatch('bc', i)
})
</script>

<div class="orginal-game-routes" style={`left: ${styls ? 240 : 76}px;`}>
    <div class="orginal-game-routes-container">
        {#each games as game (game.id)}
        <button on:click={()=> handleOriginalRoute(game.route, 2)}>
            <div class={game.isAtive ? "IsActive-original-content" : "original-content"}>
                <div class="icon">
                    <Icon src={game.icon} />
                </div>
                <div class="name">
                    <p>{game.name}</p>
                </div>
            </div>
        </button>
        {/each}
    </div>
</div>


<style>
.orginal-game-routes {
    transition: .5s ease;
    position: fixed;
    width: 200px;
    height: 100vh;
    top: 0;
    z-index: 1000;
    background-color: rgb(45, 48, 53);
}

.orginal-game-routes .orginal-game-routes-container {
    margin-top: 140px;
}

.orginal-game-routes-container button {
    width: 100%;
    background: none;
    border: none;
    margin: 0;
}

.original-content .icon,
.IsActive-original-content .icon {
    font-size: 17px;
    padding: 0 10px;
    fill: rgba(153, 164, 176, .8);
}

.original-content .name,
.IsActive-original-content .name {
    padding: 2px;
}

.orginal-game-routes-container .IsActive-original-content {
    display: flex;
    gap: 5px;
    padding: 6px 0;
    width: 90%;
    border-radius: 30px;
    border: 1px solid #42b3096b;
    color: rgba(153, 164, 176, .8);
    margin: 5px;
    transition: 0.7s ease;
    cursor: pointer;
}

.orginal-game-routes-container .original-content {
    display: flex;
    gap: 5px;
    padding: 6px 0;
    width: 90%;
    border-radius: 30px;
    color: rgba(153, 164, 176, .8);
    margin: 5px;
    cursor: pointer;
}

.orginal-game-routes-container .original-content:hover,
.original-content:hover .icon {
    color: #f5f6f7;
    font-weight: 800;
    fill: #f5f6f7;
    transition: 0.5s ease;
}
</style>
