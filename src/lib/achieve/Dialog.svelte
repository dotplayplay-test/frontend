<script>
  import Icon from "svelte-icons-pack/Icon.svelte";
  import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let title;
  export let canGoBack;

  const cancel = () => {
    dispatch("cancel");
  };

  const goBack = () => {
    dispatch("goBack");
  };
</script>

<div class="container">
  <div class="dialog-x">
    <div class="head">
      <div class="head-item">
        {#if canGoBack}
          <button class="dialog-back" on:click={goBack}
            ><svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="sc-gsDKAQ hxODWG icon"
              ><use xlink:href="#icon_Arrow"></use></svg
            ></button
          >
        {/if}
        <div class="title has-close">{title}</div>
      </div>
      <button on:click={cancel} class="close-icon dialog-x-close">
        <Icon
          src={IoCloseSharp}
          size="18"
          color="rgb(255, 255, 255)"
          className="custom-icon"
          title="arror"
        />
      </button>
    </div>
    <div class="body">
      <slot />
    </div>
  </div>
</div>

<style>
  .container {
    display: grid;
    position: fixed;
    z-index: 1000;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.507);
    place-content: center;
  }

  .title {
    font-weight: 600;
    color: white;
  }

  .dialog-x {
    width: 524px;
    max-height: 90vh;
    overflow-y: scroll;

    transition-property: width, height, margin-left, margin-top;
    transition-duration: 0.5s;
    border-radius: 1.25rem;
    overflow: hidden;
    background: var(--affiliate-bg);
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.5s ease 0s;
    padding: 24px;
  }

  .head-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .dialog-back svg {
    transform: rotate(180deg);
    width: 16px;
    height: 16px;
  }

  .body {
    padding: 20px;
    padding-bottom: 50px;
    overflow-y: scroll;
    height: 90%;
    border-radius: 20px;
    background-color: rgb(30, 32, 36);
  }

  @media screen and (max-width: 650px) {
    .body {
      border-radius: 0;
      padding: 10px;
    }
    .dialog-x {
      max-height: 100vh;
      width: 100%;
      border-radius: 0;
    }
    .head {
      padding: 14px;
    }
    .title {
      font-size: 12px;
    }
  }
</style>
