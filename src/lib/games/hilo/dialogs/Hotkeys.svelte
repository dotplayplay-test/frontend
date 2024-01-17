<script>
  import { createEventDispatcher } from "svelte";
    import { hotkeysEnabled } from "../store";
    const handleToggleHotKeys = () => {
        hotkeysEnabled.update(v => {
            const _new = !v;
            localStorage.setItem("HILO_HOTKEYS_ENABLED", _new ? "true" : "false");
            return _new;
        });
    }
    const dispatch = createEventDispatcher();

</script>
<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
  <div
    class="dialog"
    style="opacity: 1; width: 464px; height: 582px; margin-top: -291px; margin-left: -232px; transform: scale(1) translateZ(0px);"
  >
    <div class="dialog-head has-close">
      <div class="dialog-title">Hot keys</div>
    </div>
    <button on:click={() => dispatch("close")} class="sc-ieecCq fLASqZ close-icon dialog-close"
      ><svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Close"></use></svg
      ></button
    >
    <div class="dialog-body default-style" style="z-index: 2; transform: none;">
      <div class="sc-dkPtRN jScFby scroll-view sc-hIagIn cxLQEF dialog-box">
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
          <div class="hotkey-item">
            <div class="hotkey-txt">Higher or Same</div>
            <div class="hotkey-key">Q</div>
          </div>
          <div class="hotkey-item">
            <div class="hotkey-txt">Lower or Same</div>
            <div class="hotkey-key">W</div>
          </div>
          <div class="hotkey-item">
            <div class="hotkey-txt">Skip Current Card</div>
            <div class="hotkey-key">E</div>
          </div>
          <div class="hotkey-item">
            <div class="hotkey-txt">Cashout</div>
            <div class="hotkey-key">R</div>
          </div>
        </div>
        <div class="hotkey-enabled">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div on:click={handleToggleHotKeys} class="hotkey-select {$hotkeysEnabled ? "active" : ""}"></div>
          <div>Hotkeys Enabled</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
    .kBjSXI {
    position: fixed;
    z-index: 1000;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.7);
    filter: none !important;
}
.dialog {
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 50%;
    top: 50%;
    width: 464px;
    height: 720px;
    margin: -375px 0px 0px -280px;
    transition-property: width, height, margin-left, margin-top;
    transition-duration: 0.5s;
    border-radius: 1.25rem;
    overflow: hidden;
    background-color: rgb(23, 24, 27);
}
.dialog-head.has-close {
    margin-right: 3.75rem;
}

.dialog-head {
    position: relative;
    z-index: 10;
    flex: 0 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 3.75rem;
    margin-left: 1.125rem;
    transition: all 0.5s ease 0s;
}
.dialog-head .dialog-title {
    font-size: 1rem;
    margin: 0px;
    font-weight: bold;
    flex: 1 1 0%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(245, 246, 247);
}
.fLASqZ {
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 11;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3.75rem;
    height: 3.75rem;
}
.fLASqZ svg {
    transition: transform 0.5s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
    cursor: pointer;
    font-size: 0.75rem;
}

.hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
}
.fLASqZ:hover svg {
    transform: rotate(-90deg);
    fill: rgb(245, 246, 247);
}
.default-style {
    padding-top: 3.75rem;
    background-color: rgb(23, 24, 27);
}

.dialog-body {
    position: absolute;
    inset: 0px;
    display: flex;
    overflow: hidden;
}
.default-style > div {
    border-radius: 20px;
    background-color: rgb(30, 32, 36);
    padding: 1.25rem 1.25rem 0px;
}

.dialog-body > div {
    flex: 1 1 0%;
}
.dialog-box {
    color: rgba(153, 164, 176, 0.6);
    background-color: rgb(30, 32, 36);
    border-top-left-radius: 2.5rem;
    border-top-right-radius: 2.5rem;
    padding: 1.75rem 1.125rem;
}
.jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
}
.cxLQEF .hotkey-list {
    margin-top: 0.5rem;
}
.cxLQEF .hotkey-item {
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
.cxLQEF .hotkey-item .hotkey-key {
    width: 6.25rem;
    text-align: center;
    position: relative;
    font-weight: 600;
    color: rgb(245, 246, 247);
    padding: 0.5rem 0px 0.5rem 1.25rem;
}
.cxLQEF .hotkey-item .hotkey-key::after {
    content: "";
    left: 0px;
    top: 0px;
    bottom: 0px;
    opacity: 0.13;
    position: absolute;
    width: 1px;
    background-color: rgb(153, 164, 176);
}
.cxLQEF .hotkey-enabled {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 1.25rem;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
}
.cxLQEF .hotkey-enabled .hotkey-select {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin-right: 0.5rem;
    position: relative;
    background-color: rgba(45, 48, 53, 0.5);
    border: 1px solid rgb(45, 48, 53);
}
.cxLQEF .hotkey-enabled .hotkey-select.active::after {
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
