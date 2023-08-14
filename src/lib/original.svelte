<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoDice from "svelte-icons-pack/io/IoDice";

import {
    createEventDispatcher
} from 'svelte';

let dispatch = createEventDispatcher()

import {
    goto
} from "$app/navigation"
import {
    onMount
} from "svelte";

let games = [{
        id: 1,
        name: "Crash",
        icon: IoDice,
        route: "crash",
        isAtive: false
    },
    {
        id: 2,
        name: "Classic Dice",
        icon: IoDice,
        route: "classic-dice",
        isAtive: false
    },
    {
        id: 3,
        name: "Plinko",
        icon: IoDice,
        route: "plinko",
        isAtive: false
    },
    {
        id: 4,
        name: "Tower",
        icon: IoDice,
        route: "tower",
        isAtive: false
    },
    {
        id: 5,
        name: "HiLo",
        icon: IoDice,
        route: "hilo",
        isAtive: false
    },
    {
        id: 6,
        name: "Diamonds",
        icon: IoDice,
        route: "diamonds",
        isAtive: false
    },
    {
        id: 7,
        name: "Mines",
        icon: IoDice,
        route: "mines",
        isAtive: false
    },
]

let currentPath;
onMount(() => {
    currentPath = window.location.pathname;
    if (currentPath === '/crash') {
        games[0].isAtive = true
    } else if (currentPath === "/classic-dice") {
        games[1].isAtive = true
    } else if (currentPath === "/plinko") {
        games[2].isAtive = true
    } else if (currentPath === "/tower") {
        games[3].isAtive = true
    } else if (currentPath === "/hilo") {
        games[4].isAtive = true
    } else if (currentPath === "/diamonds") {
        games[5].isAtive = true
    } else if (currentPath === "/mines") {
        games[6].isAtive = true
    }
});

const handleOriginalRoute = ((e, i) => {
    goto(e)
    if (e === 'crash') {
        games[0].isAtive = true
        games[1].isAtive = false
        games[2].isAtive = false
        games[3].isAtive = false
        games[4].isAtive = false
        games[5].isAtive = false
        games[6].isAtive = false
    } else if (e === "classic-dice") {
        games[0].isAtive = false
        games[1].isAtive = true
        games[2].isAtive = false
        games[3].isAtive = false
        games[4].isAtive = false
        games[5].isAtive = false
        games[6].isAtive = false
    } else if (e === "plinko") {
        games[0].isAtive = false
        games[1].isAtive = false
        games[2].isAtive = true
        games[3].isAtive = false
        games[4].isAtive = false
        games[5].isAtive = false
        games[6].isAtive = false
    } else if (e === "tower") {
        games[0].isAtive = false
        games[1].isAtive = false
        games[2].isAtive = false
        games[3].isAtive = true
        games[4].isAtive = false
        games[5].isAtive = false
        games[6].isAtive = false
    } else if (e === "hilo") {
        games[0].isAtive = false
        games[1].isAtive = false
        games[2].isAtive = false
        games[3].isAtive = false
        games[4].isAtive = true
        games[5].isAtive = false
        games[6].isAtive = false
    } else if (e === "diamonds") {
        games[0].isAtive = false
        games[1].isAtive = false
        games[2].isAtive = false
        games[3].isAtive = false
        games[4].isAtive = false
        games[5].isAtive = true
        games[6].isAtive = false
    } else if (e === "mines") {
        games[0].isAtive = false
        games[1].isAtive = false
        games[2].isAtive = false
        games[3].isAtive = false
        games[4].isAtive = false
        games[5].isAtive = false
        games[6].isAtive = true
    }
    dispatch('bc', i)
})
</script>

<div class="orginal-game-routes">
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
    left: 240px;
    background-color: rgb(45, 48, 53);
}

.orginal-game-routes .orginal-game-routes-container {
    margin-top: 140px;
}

.orginal-game-routes-container button {
    width: 100%;
    background: none;
    border: none;
    margin: 5px 0;
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
