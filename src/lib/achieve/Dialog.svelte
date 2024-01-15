<script>
  import Icon from "svelte-icons-pack/Icon.svelte";
  import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let title;

  const cancel = () => {
    dispatch("cancel");
  };
</script>

<div class="container">
  <div class="dialog-x">
    <div class="head">
      <div class="title has-close">{title}</div>
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

  .body {
    padding: 20px;
    padding-bottom: 50px;
    overflow-y: scroll;
    height: 90%;
    border-radius: 20px;
    background-color: rgb(30, 32, 36);
  }

  @media screen and (max-width: 650px) {
    .dialog-x {
      width: 100%;
    }
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }
  }
</style>
