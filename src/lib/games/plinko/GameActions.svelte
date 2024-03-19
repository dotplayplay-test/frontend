<script context="module">
  import { connect } from 'svelte-mobx';
</script>

<script>
  import { screen } from '$lib/store/screen';
  import { plinkoGame } from './store';
  const { autorun } = connect();
  import PlinkoInfoDialog from './dialogs/GameInfoDialog.svelte';
  import LiveStats from './dialogs/LiveStats.svelte';
  $: dialogData = null;
  $: showingStats = false;
  $: bgSoundEnabled = $plinkoGame?.settings.data.hotkeyEnable || false;
  $: soundEnabled = $plinkoGame?.settings.data.soundEnable || false;
  $: fastEnabled = $plinkoGame?.settings.data.fastEnable || false;
  let game = null;
  $: {
    const _g = $plinkoGame;
    if (!game && _g) {
      game = _g;
      autorun(() => {
        bgSoundEnabled = game.settings.data.bgSoundEnable;
        soundEnabled = game.settings.data.soundEnable;
        fastEnabled = game.settings.data.fastEnable;
      });
    }
  }
  const handleToggleSettings = (setting) => {
    return (e) => {
      if (!game) return;
      game.settings.update(setting, !game.settings.data[setting]);
    };
  };
</script>

{#if Boolean(dialogData)}
  <PlinkoInfoDialog
    launchConf={dialogData}
    on:close={() => (dialogData = null)}
  />
{/if}
{#if showingStats}
  <LiveStats on:close={() => (showingStats = false)} />
{/if}
<div class="game-actions">
  <button
    on:click={handleToggleSettings('bgSoundEnable')}
    class="action-item {bgSoundEnabled ? 'active' : ''}"
    ><svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="sc-gsDKAQ hxODWG icon"><use xlink:href="#{bgSoundEnabled ? "icon_MusicOn" : "icon_MusicOff"}"></use></svg
    ></button
  ><button
    on:click={handleToggleSettings('soundEnable')}
    class="action-item {soundEnabled ? 'active' : ''}"
    ><svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="sc-gsDKAQ hxODWG icon"><use xlink:href="#{soundEnabled ? "icon_SoundOn" : "icon_SoundOff"}"></use></svg
    ></button
  ><button
    on:click={handleToggleSettings('fastEnable')}
    class="action-item {fastEnabled ? 'active' : ''}"
    ><svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_TurboBet"></use></svg
    ></button
  >
  {#if $screen > 660}
    <button
      on:click={() => {
        dialogData = {
          startScreen: 'Hot keys',
        };
      }}
      class="action-item"
      ><svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="sc-gsDKAQ hxODWG icon"
        ><use xlink:href="#icon_HotKeys"></use></svg
      ></button
    >
  {/if}
  <button
    on:click={() => {
      dialogData = {
        startScreen: 'Seeds',
        params: {}
      };
    }}
    class="action-item"
    id="set_seed"
    ><svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Seed"></use></svg
    ></button
  ><button on:click={() => showingStats = true} class="action-item"
    ><svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="sc-gsDKAQ hxODWG icon"
      ><use xlink:href="#icon_LiveStats"></use></svg
    ></button
  ><button
    on:click={() => {
      dialogData = {
        startScreen: 'Help',
      };
    }}
    class="action-item"
    ><svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Help"></use></svg
    ></button
  >
</div>

<style>
  .game-actions {
    display: flex;
    order: 10;
    -webkit-box-align: center;
    align-items: center;
    height: 4rem;
    position: relative;
  }
  .game-actions::before {
    content: '';
    flex: 1 1 0%;
  }
  .action-item:hover {
    background: rgba(49, 52, 60, 0.35);
  }
  .action-item:hover .icon {
    font-size: 1rem;
    fill: rgb(245, 246, 247);
  }
  .action-item {
    cursor: pointer;
    margin-right: 0.5rem;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .gJxbeS .action-item .icon {
    fill: rgb(153, 164, 176);
    transition: all 0.3s ease-in-out 0s;
  }

  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }
  .game-actions::after {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    height: 1px;
    opacity: 0.3;
    background-color: rgb(49, 52, 60);
  }
  .action-item.active .icon {
    fill: rgb(67, 179, 9);
  }
</style>
