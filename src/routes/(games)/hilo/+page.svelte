<script>
  import { browser } from "$app/environment";
  import { screen } from "$lib/store/screen";
  import GameControls from "$lib/games/hilo/GameControls.svelte";
  import GameActions from "$lib/games/hilo/GameActions.svelte";
  import GameView from "$lib/games/hilo/GameView.svelte";
  import AllBets from "$lib/games/hilo/AllBets.svelte";
  import MyBets from "$lib/games/hilo/MyBets.svelte";
  import { soundManager, soundSettings } from "$lib/games/hilo/store";
  import SM from "$lib/games/hilo/audio/SoundManager";
  import { socketEvents } from "$lib/games/hilo/socket";
  import { handleisLoggin, profileStore } from "$lib/store/profile";
  import {
    hilo_game,
    processingRequest,
    hotkeysEnabled,
    error_msg,
  } from "$lib/games/hilo/store";
  import { default_Wallet } from "$lib/store/coins";
  import { onDestroy, onMount } from "svelte";
  $: currentTab = 1;

  $: SE = null;

  $: {
    if (browser && $profileStore.user_id && !SE) {
      SE = socketEvents($profileStore.user_id);
      SE.handleHiloInit({ user_id: $profileStore.user_id });
    }
  }

  const handleBet = (e) => {
    if (SE && !$processingRequest) {
      SE.handleHiloBet({
        token: e.detail.token,
        token_img: e.detail.token_img,
        user_id: $profileStore.user_id,
        bet_amount: e.detail.bet_amount,
      });
    }
  };

  const handleNextRound = (e) => {
    if (SE && !$processingRequest) {
      const { bet_id, token, token_img, payout, bet_amount } = $hilo_game;
      SE.handleHiloNextRound({
        hi: e.detail.hi,
        lo: e.detail.lo,
        user_id: $profileStore.user_id,
        skip: e.detail.skip,
        bet_id,
        bet_amount,
        token,
        token_img,
        payout,
      });
    }
  };

  const handleCashOut = (e) => {
    if (SE && !$processingRequest) {
      const { bet_id, token, token_img, payout, bet_amount } = $hilo_game;
      SE.handleHiloCashout({
        user_id: $profileStore.user_id,
        bet_id,
        bet_amount,
        token,
        token_img,
        payout,
      });
    }
  };
  let messageTimeout;
  onMount(() => {
    if (browser) {
      const hotkeys = localStorage.getItem("HILO_HOTKEYS_ENABLED") === "true";
      hotkeysEnabled.set(hotkeys);
      let settings = localStorage.getItem("HILO_SOUND_SETTINGS");
      settings = settings && JSON.parse(settings);
      settings = settings || { music: true, soundFx: true };
      soundSettings.set(settings);
      soundManager.set(
        new SM({ hilo: { enabled: settings.music } }, settings.soundFx)
      );

      error_msg.subscribe((v) => {
        clearTimeout(messageTimeout);
        if (v) {
          setTimeout(() => {
            error_msg.set("");
          }, 3000);
        }
      });
    }
  });
  onDestroy(() => {
    $soundManager?.stop();
  });
</script>

{#if $error_msg}
  <div class="error-message">
    <div class="hTTvsjh">
      <div>{$error_msg}</div>
    </div>
  </div>
{/if}
<div
  id="game-Hilo"
  class="sc-haTkiu lmWKWf game-style0 sc-hKumaY hmdAmi"
  style="opacity: 1; transform: none;"
>
  <div class="game-area">
    <div class="game-main {$screen < 900 ? 'mobile-view' : ''}">
      <GameControls
        on:hiloNextRound={handleNextRound}
        on:hiloCashout={handleCashOut}
        on:hiloBet={handleBet}
      />
      <GameView on:hiloNextRound={handleNextRound} />
      <GameActions />
    </div>
  </div>
  <div class="sc-cxpSdN kQfmQV tabs game-tabs len-2">
    <div class="tabs-navs">
      <button
        on:click={() => (currentTab = 1)}
        class="tabs-nav {currentTab === 1 ? 'is-active' : ''}">All Bets</button
      >
      <button
        on:click={() => (currentTab = 2)}
        class="tabs-nav {currentTab === 2 ? 'is-active' : ''}">My Bets</button
      >
      <div
        class="bg is-reverse"
        style="width: 50%; left: {currentTab === 2 ? '50%' : '0'};"
      ></div>
    </div>
    <div class="tabs-view" style="transform: none;">
      {#if currentTab === 1}
        <AllBets />
      {:else}
        <MyBets />
      {/if}
    </div>
  </div>
  <div class="sc-knKHOI cFxmZX">
    <div class="intro-title">
      <p>Hilo</p>
      <div class="intro-tags">
        <p>Our Best Games</p>
        <p>BC Originals</p>
        <p>Cards</p>
        <p>BC Table Games</p>
        <p>Table games</p>
        <p>Original</p>
      </div>
    </div>
    <div class="description">
      Hi-lo is an online single player guessing game in which you guess the card
      point is higher (hi) or lower (lo) compared to the previous one.
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
  .lmWKWf.game-style0 .game-area {
    display: flex;
    flex-wrap: wrap;
  }
  .lmWKWf.game-style0 .game-main:not(.mobile-view) {
    padding-left: 330px;
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
  .hmdAmi .game-main {
    min-height: 47.5rem;
  }
  .lmWKWf .game-main {
    position: relative;
    border-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
  }
  .lmWKWf.game-style0 {
    max-width: 1368px;
    margin: 0px auto;
    padding: 1.25rem 0.625rem;
  }

  .lmWKWf {
    min-height: 90vh;
  }
  .lmWKWf .game-tabs {
    margin-top: 2.5rem;
  }
  .lmWKWf .game-tabs .tabs-navs {
    margin-bottom: 0.75rem;
    margin-left: 0.625rem;
    display: inline-flex;
  }

  .lmWKWf .game-tabs .tabs-navs .tabs-nav {
    width: 5.625rem;
  }

  .kQfmQV .tabs-nav.is-active {
    color: rgb(245, 246, 247);
    font-weight: bold;
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
  .kQfmQV .tabs-navs {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 2.25rem;
    position: relative;
    border-radius: 1.125rem;
    background-color: rgba(49, 52, 60, 0.7);
  }
  .kQfmQV .tabs-navs .bg.is-reverse {
    transition:
      left 0.2s ease-out 0s,
      right 0.3s ease-out 0s;
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
  .cFxmZX {
    width: 100%;
    border-radius: 1.25rem;
    background-color: rgb(30, 32, 36);
    padding: 1.5rem 1.5rem 2rem;
    margin-top: 2rem;
  }
  .cFxmZX .intro-title {
    min-height: 5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  @media screen and (max-width: 621px) {
    .cFxmZX {
      margin: 1.25rem 0px 0px !important;
      width: auto !important;
      padding: 1rem 0.75rem 1.5rem !important;
    }
    .cFxmZX .intro-title {
      flex-wrap: wrap !important;
      height: auto !important;
    }
    .cFxmZX .intro-title .intro-tags > p {
      margin: 0px 0.3125rem 0.3125rem 0px !important;
      white-space: nowrap !important;
      padding: 0.375rem 0.875rem !important;
      line-height: 1.25rem !important;
      height: 2rem !important;
    }
    .cFxmZX .description {
      margin-top: 0.625rem !important;
      line-height: 1.25rem !important;
      padding-left: 0.25rem !important;
    }
    .cFxmZX .intro-title > p {
      width: 100% !important;
      margin: 0px 0px 1rem !important;
      line-height: 1.25rem !important;
      padding: 0px 0.625rem !important;
    }
    .cFxmZX .intro-title .intro-tags {
      margin-left: 0px !important;
      flex-wrap: wrap !important;
    }
  }
  .cFxmZX .intro-title > p {
    font-size: 1rem;
    color: rgb(245, 246, 247);
    font-weight: 600;
    margin: 0px;
    white-space: nowrap;
  }
  .cFxmZX .intro-title .intro-tags {
    margin-left: 2.5rem;
    display: flex;
    flex-wrap: wrap;
  }
  .cFxmZX .intro-title .intro-tags > p {
    margin: 0px 1.125rem 0.3125rem 0px;
    padding: 0.5rem 1.25rem;
    border-radius: 1.125rem;
    background-color: rgb(43, 47, 54);
  }
  .cFxmZX .description {
    margin-top: 0.75rem;
    line-height: 1.25rem;
  }
  .cFxmZX .intro-detail {
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
  .cFxmZX .intro-detail > svg {
    font-size: 0.5625rem;
    margin-left: 1.125rem;
  }
  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }
</style>
