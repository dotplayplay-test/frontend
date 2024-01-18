<script>
  import Icon from "svelte-icons-pack/Icon.svelte";
  import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";

  export let handleOnChange;
  export let showMax = false;
  export let onClickMax;
  export let onClick;
  export let activeCoin;
  export let disabled = false;

  export let amount = 0;
</script>

<div class={`ui-select`}>
  <div class="input-control">
    <input
      type="number"
      autocomplete="off"
      {disabled}
      placeholder="0.0000"
      on:change={handleOnChange}
      bind:value={amount}
    />
  </div>
  {#if showMax}
    <button on:click={onClickMax} class="select-trigger show-max">
      <p class="coin-name">Max</p>
    </button>
  {/if}

  {#if activeCoin}
    <button on:click={onClick} class="select-trigger">
      <img class="coin-icon" alt="" src={activeCoin.coin_image} />
      <p class="coin-name">
        {activeCoin.coin_name}
      </p>
      <div class="arrow">
        <Icon
          src={RiSystemArrowRightSLine}
          size="18"
          color="rgb(255, 255, 255)"
        />
      </div>
    </button>
  {/if}
</div>

<style>
  :root {
    --bg: #1e202466;
    --bg2: #26282c;
  }
  .ui-select {
    padding: 6px;
    display: flex;
    flex-shrink: 0;
    border-radius: 6px;
    background-color: var(--bg2);
  }
  .input-control {
    flex-grow: 1;
  }
  .input-control input {
    border: none;
    background: inherit;
    width: 100%;
    font-weight: bold;
    padding: 0 12px;
    color: white;
    font-size: 1.2em;
  }
  .select-trigger {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 6px;
    font-size: 0.875rem;
    user-select: none;
    border-radius: 4px;
    background-color: #00000059;
  }
  .arrow {
    display: grid;
    place-content: center;
  }
  .coin-icon {
    width: 20px;
    border-radius: 100%;
    overflow: hidden;
  }
  .coin-name {
    margin: 0 4px;
  }
  .show-max {
    margin-right: 5px;
  }
  @media screen and (max-width: 650px) {
    .input-control input,
    .select-trigger {
      font-size: 12px;
    }
  }
</style>
