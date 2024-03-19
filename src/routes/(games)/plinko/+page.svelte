<script>
  import { browser } from '$app/environment';
  import { screen } from '$lib/store/screen';
  import GameControls from '$lib/games/plinko/GameControls.svelte';
  import GameActions from '$lib/games/plinko/GameActions.svelte';
  import GameView from '$lib/games/plinko/GameView.svelte';
  import AllBets from '$lib/games/plinko/AllBets.svelte';
  import MyBets from '$lib/games/plinko/MyBets.svelte';
  import { plinkoGame } from '$lib/games/plinko/store';
  import { onDestroy, onMount } from 'svelte';
  import PlinkoGame from '$lib/games/plinko/logics/PlinkoGame';

  $: currentTab = 1;
  $: gameInit = false;
  onMount(async () => {
    if (browser) {
      try {
        const gameInstance = new PlinkoGame();
        await gameInstance.initialize();
        plinkoGame.set(gameInstance);
        gameInit = true;
      } catch (error) {
        console.log('Error init game ', error);
      }
    }
  });
  onDestroy(() => {
    $plinkoGame?.deactivate();
    plinkoGame.set(null);
  });
</script>

<div id="game-plinko" class="sc-haTkiu lmWKWf game-style0 sc-cBIieI ikZPEu">
  <div class="game-area">
    <div class="game-main {$screen < 900 ? 'mobile-view' : ''}">
      <GameControls />
      <GameView />
      <GameActions />
    </div>
  </div>
  <div class="sc-cxpSdN kQfmQV tabs game-tabs len-3">
    <div class="tabs-navs">
      <button
        on:click={() => (currentTab = 1)}
        class="tabs-nav {currentTab === 1 ? 'is-active' : ''}">All Bets</button
      >
      <button
        on:click={() => (currentTab = 2)}
        class="tabs-nav {currentTab === 2 ? 'is-active' : ''}">My Bets</button
      >
      <div class="bg" style="width: 50%; left: {50 * (currentTab - 1)}%;"></div>
    </div>
    <div class="tabs-view" style="transform: none;">
      {#if currentTab === 1}
        <AllBets />
      {:else if currentTab === 2}
        <MyBets />
      {/if}
    </div>
  </div>
  <div class="sc-kTqLtj hsmSjD">
    <div class="intro-title">
      <p>Plinko</p>
      <div class="intro-tags">
        <p>Our Best Games</p>
        <p>Multiplayer</p>
        <p>BC Originals</p>
      </div>
    </div>
    <div class="description">
      Plinko is the peculiar game of chance played with a ball “plinking” down
      the vertical board populated with offset rows of pegs. represented the
      board in the form of a pyramid.
    </div>
    <button class="intro-detail"
      >Details<svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Arrow"></use></svg
      ></button
    >
  </div>
</div>

<style>
  .lmWKWf.game-style0 {
    max-width: 1368px;
    margin: 0px auto;
    padding: 1.25rem 0.625rem;
  }

  .lmWKWf {
    min-height: 90vh;
  }

  .lmWKWf.game-style0 .game-area {
    display: flex;
    flex-wrap: wrap;
  }
  .ikZPEu .game-main.game-main {
    min-height: auto;
  }
  .lmWKWf.game-style0 .game-main:not(.mobile-view) {
    padding-left: 330px;
  }
  .lmWKWf.game-style0 .game-main {
    min-height: 47.5rem;
  }
  .lmWKWf.game-style0 .game-main {
    min-height: 47.5rem;
  }

  .lmWKWf.game-style0 .game-main {
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    overflow: hidden;
  }

  .lmWKWf .game-main {
    position: relative;
    border-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
  }
  :global(
      .lmWKWf.game-style0 .game-view,
      .lmWKWf.game-style1 .game-view,
      .lmWKWf.game-style-iframe .game-view
    ) {
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
  }
  .lmWKWf .game-tabs {
    margin-top: 2.5rem;
  }
  .lmWKWf .game-tabs .tabs-navs {
    margin-bottom: 0.75rem;
    margin-left: 0.625rem;
    display: inline-flex;
  }

  .kQfmQV .tabs-navs {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 2.25rem;
    position: relative;
    border-radius: 1.125rem;
    background-color: rgba(49, 52, 60, 0.7);
  }
  .lmWKWf .game-tabs .tabs-navs .tabs-nav {
    width: 5.625rem;
  }
  .kQfmQV .tabs-nav:hover {
    color: rgb(245, 246, 247);
  }
  .kQfmQV .tabs-nav {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 0%;
    height: 100%;
    cursor: pointer;
    white-space: nowrap;
    width: 100%;
    z-index: 1;
  }

  .kQfmQV .tabs-nav.is-active {
    color: rgb(245, 246, 247);
    font-weight: bold;
  }
  .kQfmQV .tabs-navs .bg {
    border-radius: 1.125rem;
    background-image: linear-gradient(
      to left,
      rgb(85, 89, 102),
      rgb(85, 89, 102),
      rgb(88, 174, 20)
    );
    opacity: 0.4;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    transition:
      right 0.2s ease-out 0s,
      left 0.3s ease-out 0s;
    transform: translateZ(0px);
    box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 0.3125rem;
  }
  .lmWKWf .game-tabs .tabs-view {
    background-color: rgb(30, 32, 36);
    border-radius: 1.25rem;
    padding: 1px 0px;
  }

  .kQfmQV .tabs-view {
    position: relative;
  }
  .hsmSjD {
    width: 100%;
    border-radius: 1.25rem;
    background-color: rgb(30, 32, 36);
    padding: 1.5rem 1.5rem 2rem;
    margin-top: 2rem;
  }
  .hsmSjD .intro-title {
    min-height: 5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .hsmSjD .intro-title > p {
    font-size: 1rem;
    color: rgb(245, 246, 247);
    font-weight: 600;
    margin: 0px;
    white-space: nowrap;
  }
  .hsmSjD .intro-title .intro-tags {
    margin-left: 2.5rem;
    display: flex;
    flex-wrap: wrap;
  }
  .hsmSjD .intro-title .intro-tags > p {
    margin: 0px 1.125rem 0.3125rem 0px;
    padding: 0.5rem 1.25rem;
    border-radius: 1.125rem;
    background-color: rgb(43, 47, 54);
  }
  @media screen and (max-width: 621px) {
    .hsmSjD {
      margin: 1.25rem 0px 0px !important;
      width: auto !important;
      padding: 1rem 0.75rem 1.5rem !important;
    }
    .hsmSjD .intro-title {
      flex-wrap: wrap !important;
      height: auto !important;
    }
    .hsmSjD .intro-title .intro-tags > p {
      margin: 0px 0.3125rem 0.3125rem 0px !important;
      white-space: nowrap !important;
      padding: 0.375rem 0.875rem !important;
      line-height: 1.25rem !important;
      height: 2rem !important;
    }
    .hsmSjD .description {
      margin-top: 0.625rem !important;
      line-height: 1.25rem !important;
      padding-left: 0.25rem !important;
    }
    .hsmSjD .intro-title > p {
      width: 100% !important;
      margin: 0px 0px 1rem !important;
      line-height: 1.25rem !important;
      padding: 0px 0.625rem !important;
    }
    .hsmSjD .intro-title .intro-tags {
      margin-left: 0px !important;
      flex-wrap: wrap !important;
    }
  }

  p {
    margin: 0.8em 0;
  }
  .hsmSjD .description {
    margin-top: 0.75rem;
    line-height: 1.25rem;
  }
  .hsmSjD .intro-detail {
    width: 6.75rem;
    height: 2.5rem;
    margin-top: 2rem;
    border-radius: 1.25rem;
    background-color: rgba(49, 52, 60, 0.6);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .hsmSjD .intro-detail > svg {
    font-size: 0.5625rem;
    margin-left: 1.125rem;
  }
  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }
</style>
