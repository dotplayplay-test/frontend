<script>
  import { goto } from "$app/navigation";
  import Dialog from "./Dialog.svelte";

  const handleCancel = () => {
    goto("/promotion");
  };

  export let selectedMedal;
</script>

<Dialog
  canGoBack={true}
  on:goBack
  title="Medals Details"
  on:cancel={handleCancel}
>
  {#if selectedMedal}
    <div class="head">
      <img src="/achieve/{selectedMedal.src}" alt={selectedMedal.name} />
      <p class="title">{selectedMedal.name}</p>
      <div class="progress"></div>
      <p class="title">0/200</p>
    </div>

    <div class="info">
      {selectedMedal?.info}
    </div>

    <div class="metric"><span>Quantity</span><span>Unlimited</span></div>
    <div class="metric"><span>Duration</span><span>Unlimited</span></div>

    <div class="footer">
      <svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="sc-gsDKAQ hxODWG icon"
        ><use xlink:href="#icon_Firends"></use></svg
      >
      0
    </div>
  {/if}
</Dialog>

<style>
  .head {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    font-size: 1.125rem;
    margin: 0.9375rem;
  }
  .progress {
    width: 200px;
    height: 6px;
    margin: 10px 0;
    background: var(--affiliate-bg);
  }
  .info {
    border: 1px solid rgb(67, 179, 9);
    color: rgb(67, 179, 9);
    padding: 20px;
    border-radius: 20px;
    font-size: 14px;
    margin-top: 50px;
    margin-bottom: 20px;
  }
  .metric {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    background-color: rgba(45, 48, 53, 0.5);
    padding: 1.25rem;
    border-radius: 1.25rem;
    font-size: 14px;
    font-weight: 600;
  }
  .metric span:nth-child(1) {
    color: rgba(153, 164, 176, 0.6);
  }
  .footer {
    border-radius: 1.375rem;
    padding: 0.625rem;
    display: flex;
    border: 1px solid rgba(153, 164, 176, 0.13);
    align-items: center;
    height: 3.5rem;
    justify-content: center;
    font-size: 0.75rem;
    margin-top: 3.5rem;
    font-weight: 600;
    width: 100%;
  }
  svg {
    width: 1rem;
    height: 1rem;
    fill: rgb(67, 179, 9);
    margin-right: 0.3125rem;
  }

  @media screen and (max-width: 650px) {
    .title {
      font-size: 14px;
    }
    .progress {
      margin: 5px 0;
    }
    .metric {
      font-size: 12px;
    }
    .info {
      padding: 12px;
      font-size: 12px;
    }
    .footer {
      border-radius: 1.375rem;
      padding: 0.625rem;
      margin-top: 2.5rem;
      margin-bottom: 2.5rem;
    }
  }
</style>
