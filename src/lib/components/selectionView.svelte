<script>
  import { createEventDispatcher } from 'svelte';
  export let value = '';
  export let disabled = false;
  export let embeded = false;
  export let openOnHover = true;
  export let items = [];
  $: isEmebed = false;
  $: selectedView = '';
  $: selectionItems = [];
  $: isDisabled = false;
  $: canOpenOnHover = false;
  $: {
    isEmebed = embeded;
    selectedView = value;
    selectionItems = items;
    isDisabled = disabled;
    canOpenOnHover= openOnHover;
  }
  const dispatch = createEventDispatcher();
  $: selectOptionsOpen = false;
</script>

<div
  on:pointerleave={() => (selectOptionsOpen = false)}
  class="sc-jJoQJp {isDisabled ? 'fbdnux' : ''} gOHquD select {selectOptionsOpen
    ? 'is-open'
    : ''} language-select {embeded ? "embed" : ""}"
>
<!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    on:click={() => !isDisabled && (selectOptionsOpen = !selectOptionsOpen)}
    on:pointerover={() => !isDisabled && canOpenOnHover && (selectOptionsOpen = true)}
    class="select-trigger"
  >
    <slot /><span style="margin-left: 5px;">{selectedView}</span>
    
    <div
      class="arrow"
    >
      <svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Arrow"></use></svg
      >
    </div>
  </div>
  {#if selectOptionsOpen}
    <div
      class="sc-hiCibw iVwWcQ select-options-wrap"
      style="opacity: 1; top: 100%; transform: none;"
    >
      <div class="sc-dkPtRN jScFby scroll-view select-options len-17">
        {#each selectionItems as item (item)}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div
            on:click={() => {
              dispatch('onSelectionChanged', item);
              selectOptionsOpen = false;
            }}
            class="select-option {item === selectedView ? 'active' : ''}"
          >
            {item}
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .embed {
    margin-top: 0 !important;
    width: 100% !important;
  }
  .embed .select-trigger {
    padding: 0!important;
    margin: 0 -10px;
    background-color: transparent !important;
  }
  .select.language-select {
    margin-top: 5px;
    width: 11.25rem;
  }

  .gOHquD {
    position: relative;
    height: 2.5rem;
    opacity: 1;
  }
  .fbdnux {
    position: relative;
    height: 2.5rem;
    opacity: 0.5;
  }
  .bOvhJd .select .select-trigger {
    font-weight: bold;
    color: rgb(245, 246, 247);
    background-color: rgba(37, 39, 46, 0.8);
  }

  .gOHquD .select-trigger {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;
    height: 100%;
    cursor: pointer;
    padding: 0px 1.25rem;
    user-select: none;
    border-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
  }
  .gOHquD .select-trigger .arrow {
    width: 2.5rem;
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .gOHquD .select-trigger .arrow > svg {
    font-size: 0.625rem;
    transition: transform 0.5s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
  }

  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }
  .gOHquD.is-open .select-options-wrap {
    pointer-events: auto;
  }
  .gOHquD.is-open .arrow > svg {
    transform: rotate(90deg);
  }

  .iVwWcQ {
    position: absolute;
    padding: 0.3125rem 0px;
    width: 100%;
    left: 0px;
    z-index: 2;
    pointer-events: none;
  }
  .iVwWcQ .select-options {
    border-radius: 1.25rem;
    padding: 0.125rem 0.375rem;
    background-color: rgb(23, 24, 27);
    box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 8px 0px;
    height: auto;
    max-height: 16.25rem;
  }

  .jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
  }
  .iVwWcQ .select-options:not(.len-1) > .active {
    border-color: rgba(91, 174, 28, 0.4);
  }

  .iVwWcQ .select-option {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    padding: 0px 0.625rem;
    font-size: 0.875rem;
    height: 2rem;
    margin: 0.25rem 0px;
    border: 1px solid transparent;
    border-radius: 1.0625rem;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
    white-space: nowrap;
  }
  .iVwWcQ .select-option:hover {
    background-color: rgba(45, 48, 53, 0.4);
  }
  .iVwWcQ .select-options:not(.len-1) > .active::after {
    content: '';
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.25rem;
    top: 50%;
    margin-top: -0.25rem;
    right: 0.625rem;
    background-color: rgb(67, 179, 9);
    box-shadow: rgba(91, 174, 28, 0.15) 0px 0px 0px 0.3125rem;
  }
</style>
