<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import { goto } from "$app/navigation";

  import Card from "./Card.svelte";
  import Info from "./Info.svelte";
  import Medals from "./Medals.svelte";
  import Dialog from "./Dialog.svelte";

  const handleCancel = () => {
    goto("/promotion");
  };

  const selectMedal = (medal) => {
    dispatch("selectMedal", medal);
  };

  export let medals;
</script>

<Dialog title="Master Medals" on:cancel={handleCancel}>
  {#if medals}
    <div>
      <div class="medals">
        <Medals />
      </div>
      <Info />
      <div class="divider"></div>
      <div class="">
        <div class="card-box">
          {#each medals as medal}
            <Card {medal} onClick={() => selectMedal(medal)} />
          {/each}
        </div>

        <div class="footer">
          <svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="sc-gsDKAQ hxODWG icon"
            ><use xlink:href="#icon_Inform"></use></svg
          >
          Tip CUB is not included in medal calculation Stats Updated every 24 hours
        </div>
      </div>
    </div>
  {/if}
</Dialog>

<style>
  .divider {
    width: 100%;
    height: 2px;
    background-color: rgb(34, 36, 40);
    margin: 20px 0;
  }

  .medals {
    margin: 20px 0;
  }

  .icon {
    width: 1rem;
    height: 1rem;
    margin-right: 0.25rem;
    display: inline-block;
    vertical-align: text-top;
    fill: rgb(67, 179, 9);
  }

  .footer {
    text-align: center;
    font-weight: 600;
    font-size: 0.75rem;
    color: rgb(67, 179, 9);
    margin: 0 auto;
    margin-top: 2rem;
    max-width: 300px;
  }
  .card-box {
    display: grid;
    grid-gap: 6px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 650px) {
    .footer {
      font-size: 10px;
      margin-bottom: 3rem;
      margin-top: 2rem;
      max-width: 250px;
    }
  }
</style>
