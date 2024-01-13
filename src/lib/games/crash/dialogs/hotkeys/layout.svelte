<script context="module">
  import { connect } from "svelte-mobx";
</script>

<script>
  import { crashGame } from "../../store";
  const { autorun } = connect();
  $: hotkeysEnabled = $crashGame.settings.data.hotkeyEnable;
  let game = null;
  $: {

    const _g = $crashGame;
    if (!game && _g) {
      game = _g;
      autorun(() => {
        hotkeysEnabled = game.settings.data.hotkeyEnable;
      });
    }
  }
  const handleToggleHotKeys = () => {
    if (!game) return;
    game.settings.update("hotkeyEnable", !game.settings.data.hotkeyEnable);
  };
</script>

<div class="sc-dkPtRN jScFby scroll-view sc-jnrVZQ cwscAu dialog-box">
  <div class="hotkey-list">
    <div class="hotkey-item">
      <div class="hotkey-txt">Half bet amount</div>
      <div class="hotkey-key">A</div>
    </div>
    <div class="hotkey-item">
      <div class="hotkey-txt">Double bet amount</div>
      <div class="hotkey-key">S</div>
    </div>
    <div class="hotkey-item">
      <div class="hotkey-txt">Make a bet</div>
      <div class="hotkey-key">Space</div>
    </div>
  </div>
  <div class="hotkey-enabled">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      on:click={handleToggleHotKeys}
      class="hotkey-select {hotkeysEnabled
        ? 'active'
        : ''}"
    ></div>
    <div>Hotkeys Enabled</div>
  </div>
</div>

<style>
  .jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
  }

  .hotkey-list {
    margin-top: 0.5rem;
  }
  .hotkey-item {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 1.25rem;
    height: 3.5rem;
    border-radius: 1.25rem;
    margin-bottom: 0.5rem;
    background-color: rgb(23, 24, 27);
    color: rgba(153, 164, 176, 0.6);
  }
  .hotkey-item .hotkey-key {
    width: 6.25rem;
    text-align: center;
    position: relative;
    font-weight: 600;
    color: rgb(245, 246, 247);
    padding: 0.5rem 0px 0.5rem 1.25rem;
  }
  .hotkey-item .hotkey-key::after {
    content: "";
    left: 0px;
    top: 0px;
    bottom: 0px;
    opacity: 0.13;
    position: absolute;
    width: 1px;
    background-color: rgb(153, 164, 176);
  }
  .hotkey-enabled {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 1.25rem;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
  }
  .hotkey-enabled .hotkey-select {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin-right: 0.5rem;
    position: relative;
    background-color: rgba(45, 48, 53, 0.5);
    border: 1px solid rgb(45, 48, 53);
  }
  .hotkey-enabled .hotkey-select.active::after {
    content: "";
    position: absolute;
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(67, 179, 9);
  }
</style>
