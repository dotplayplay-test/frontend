<script>
  import Icon from "svelte-icons-pack/Icon.svelte";
  import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";

  export let coins = [];
  export let setActive;
  export let closeDialog;
  export let activeCoin;

  let isActive = (coin) => coin.coin_name === activeCoin.coin_name;
</script>

<div
  class="ui-dialog ui-dialog-overlayer"
  style="background-color: rgba(0, 0, 0, 0.667);"
>
  <div class="inner">
    <div class="head">
      <h5>Assets Portfolio</h5>

      <button
        on:click={closeDialog}
        class="sc-ieecCq fLASqZ close-icon dialog-close"
      >
        <Icon
          src={IoCloseSharp}
          size="25"
          color="rgba(153, 164, 176, 0.6)"
          className="custom-icon"
          title="arror"
        />
      </button>
    </div>
    <div class="body">
      {#each coins as coin}
        <button
          on:click={() => setActive(coin)}
          disabled={isActive(coin)}
          class={`coin ${isActive(coin) ? "is-active" : ""}`}
        >
          <div class="coin-info">
            <img class="icon" alt="" src={coin.coin_image} />
            <p class="name">
              {coin.coin_name}
            </p>
          </div>
          <p class="balance">0.0001</p>
        </button>
      {/each}
    </div>
  </div>
</div>

<style>
  .ui-dialog {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    display: grid;
    place-items: center;
    overflow: hidden;
    background-color: #17181b;
  }
  .inner {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    width: 100%;
    background-color: #101012;
  }
  .head {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #101012;
  }
  .body {
    margin: 20px;
  }
  .coin {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border-radius: 12px;
    padding: 6px 10px;
  }
  .coin + button {
    margin-top: 6px;
  }
  .coin .icon {
    width: 40px;
    height: 40px;
  }
  .coin-info {
    display: flex;
    align-items: center;
    font-weight: 700;
  }
  .name {
    margin-left: 12px;
  }
  .coin:hover {
    background-color: #101012;
  }
  .coin:disabled:hover {
    background-color: inherit;
  }
  .coin:disabled {
    cursor: default;
  }
  .is-active {
    border: 1px solid var(--primary-color);
  }
  .balance {
    color: white;
    font-weight: 800;
  }
</style>
