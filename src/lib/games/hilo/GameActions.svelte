<script>
  import { soundSettings, soundManager, hilo_game } from "./store";
  import { screen } from "$lib/store/screen";
  import Hotkeys from "./dialogs/Hotkeys.svelte";
  import LiveStats from "./dialogs/LiveStats.svelte";
  import Help from "./dialogs/Help.svelte";
  import HiloDialog from "./dialogs/HiloDialog.svelte";
  $: showHotkeyDialog = false;
  $: showHelpDialog = false;
  $: showLiveStatsDialog = false;
  $: hiloDialogDialogData = null;
  const handChangeSettings = (settings) => {
    return (e) => {
      const newSettings = { ...$soundSettings, ...settings };
      localStorage.setItem("HILO_SOUND_SETTINGS", JSON.stringify(newSettings));
      soundSettings.set(newSettings);
      if (settings.music !== undefined) {
        if (!newSettings.music) {
          $soundManager.pause("hilo");
        } else {
          $soundManager.play("hilo");
        }
      }
      $soundManager.setAudioEnabled(newSettings.soundFx);
    };
  };
</script>

<div class="game-actions">
  <button
    on:click={handChangeSettings({ music: !$soundSettings.music })}
    class="action-item {$soundSettings.music ? 'active' : ''}"
    ><svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="sc-gsDKAQ hxODWG icon"
      ><use xlink:href="#icon_Music{$soundSettings.music ? 'On' : 'Off'}"
      ></use></svg
    ></button
  ><button
    on:click={handChangeSettings({ soundFx: !$soundSettings.soundFx })}
    class="action-item {$soundSettings.soundFx ? 'active' : ''}"
    ><svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="sc-gsDKAQ hxODWG icon"
      ><use xlink:href="#icon_Sound{$soundSettings.soundFx ? 'On' : 'Off'}"
      ></use></svg
    ></button
  >
  {#if $screen > 660}
    <button on:click={() => (showHotkeyDialog = true)} class="action-item"
      ><svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="sc-gsDKAQ hxODWG icon"
        ><use xlink:href="#icon_HotKeys"></use></svg
      ></button
    >
  {/if}
  <button
    on:click={() => {
      if ($hilo_game?.bet_id) {
        hiloDialogDialogData = {
          betID: $hilo_game.bet_id,
          tab: 2,
        };
      }
    }}
    class="action-item"
    id="set_seed"
    ><svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Seed"></use></svg
    ></button
  ><button on:click={() => (showLiveStatsDialog = true)} class="action-item"
    ><svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="sc-gsDKAQ hxODWG icon"
      ><use xlink:href="#icon_LiveStats"></use></svg
    ></button
  ><button on:click={() => (showHelpDialog = true)} class="action-item"
    ><svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Help"></use></svg
    ></button
  >
</div>
{#if showHotkeyDialog}
  <Hotkeys on:close={() => (showHotkeyDialog = false)} />
{/if}
{#if showHelpDialog}
  <Help on:close={() => (showHelpDialog = false)} />
{/if}
{#if showLiveStatsDialog}
  <LiveStats on:close={() => (showLiveStatsDialog = false)} />
{/if}
{#if Boolean(hiloDialogDialogData)}
  <HiloDialog
    launchConf={hiloDialogDialogData}
    on:close={() => (hiloDialogDialogData = null)}
  />
{/if}

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
    content: "";
    flex: 1 1 0%;
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

  .action-item .icon {
    fill: rgb(153, 164, 176);
    transition: all 0.3s ease-in-out 0s;
  }
  .game-actions::after {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    height: 1px;
    opacity: 0.3;
    background-color: rgb(49, 52, 60);
  }
  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }
  .action-item.active .icon {
    fill: rgb(67, 179, 9);
  }
  .action-item.active:hover .icon {
    fill: rgb(67, 179, 9);
  }
  .action-item:hover .icon {
    font-size: 1rem;
    fill: rgb(245, 246, 247);
  }
</style>
