<script>
  import { routes } from "../lib/store/routes";
  import { createEventDispatcher } from "svelte";
  export let styls;
  let dispatch = createEventDispatcher();
  import { goto } from "$app/navigation";
  let games;
  $: {
    games = [
      {
        id: 1,
        name: "Crash",
        icon: "icon_Crash",
        route: "crash",
        isAtive: $routes.route === "/(games)/crash",
      },
      {
        id: 2,
        name: "Classic Dice",
        icon: "icon_ClassicDice",
        route: "classic-dice",
        isAtive: $routes.route === "/(games)/classic-dice",
      },
      {
        id: 3,
        name: "Plinko",
        icon: "icon_Plinko",
        route: "plinko",
        isAtive: $routes.route === "/(games)/plinko",
      },
      {
        id: 4,
        name: "Tower",
        icon: "icon_Bingo",
        route: "tower",
        isAtive: $routes.route === "/(games)/tower",
      },
      {
        id: 5,
        name: "HiLo",
        icon: "icon_Hilo",
        route: "hilo",
        isAtive: $routes.route === "/(games)/hilo",
      },
      {
        id: 6,
        name: "Diamonds",
        icon: "icon_HashDice",
        route: "diamonds",
        isAtive: $routes.route === "/(games)/diamonds",
      },
      {
        id: 7,
        name: "Mines",
        icon: "icon_Mines",
        route: "mines",
        isAtive: $routes.route === "/(games)/mines",
      },
      {
        id: 8,
        name: "Keno",
        icon: "icon_Keno",
        route: "keno",
        isAtive: $routes.route === "/(games)/keno",
      },
    ];
  }

  const handleOriginalRoute = (e, i) => {
    goto(e);
    dispatch("bc", i);
  };
</script>

<div class="game-list" style={`left: ${styls ? 240 : 76}px;`}>
  <div class="game-list-container">
    {#each games as game (game.id)}
      <button on:click={() => handleOriginalRoute(`/${game.route}`, 2)}>
        <div class="game-item {game.isAtive ? 'select' : ''}">
          <div class="game-icon">
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="sc-gsDKAQ hxODWG icon"
              ><use xlink:href="#{game.icon}"></use></svg
            >
            <!-- <Icon src={game.icon} size="22"/> -->
          </div>
          <div class="game-name">
            <p>{game.name}</p>
          </div>
        </div>
      </button>
    {/each}
  </div>
</div>

<style>
  .game-list {
    transition: 0.5s ease;
    position: fixed;
    width: 200px;
    height: 100vh;
    top: 0;
    z-index: 1000;
    width: 15rem;
    background-color: rgb(45, 48, 53);
    padding-top: 8.125rem;
    z-index: 0;
  }

  .game-list-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}

  .game-list-container button {
    width: 100%;
    background: none;
    border: none;
    margin: 0;
  }
  .game-item .game-icon {
    width: 2.5rem;
    height: 1.75rem;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
  }
  .game-item .game-name {
    margin-left: 0.75rem;
    white-space: nowrap;
  }
  .game-item {
    width: 13.5rem;
    height: 2.25rem;
    margin: 0px auto 0.5rem;
    border: 1px solid rgb(45, 48, 53);
    border-radius: 1.25rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 0.875rem;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
  }
  .game-item.select {
    border: 1px solid rgba(93, 160, 0, 0.4);
    color: rgb(245, 246, 247);
  }
  .game-item.select .icon {
    fill: rgb(245, 246, 247);
  }

  .game-item:hover,
  .game-item:hover .icon {
    color: rgb(245, 246, 247);
    fill: rgb(245, 246, 247);
    transition: 0.5s ease;
  }
</style>
