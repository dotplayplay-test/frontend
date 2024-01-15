<script>
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import Card from "../promotion/Card.svelte";
  import Info from "../promotion/Info.svelte";
  import Medals from "../promotion/Medals.svelte";
  import Dialog from "../../lib/achieve/Dialog.svelte";

  const handleCancel = () => {
    goto("/promotion");
  };

  onMount(() => {
    if (browser && window.innerWidth < 650) {
      is_mobile = true;
    } else {
      is_mobile = false;
    }
  });

  const medals = [
    { src: "achieve_1.webp", name: "Talkative" },
    { src: "achieve_2.webp", name: "Fearless One" },
    { src: "achieve_3.png", name: "The Loaded King" },
    { src: "achieve_4.webp", name: "Highest Contributor" },
    { src: "achieve_5.webp", name: "The Top Gun" },
    { src: "achieve_6.png", name: "The Rain Master" },
    { src: "achieve_7.webp", name: "PACO Lover" },
    { src: "achieve_8.webp", name: "Invincible Lucky Dog" },
    { src: "achieve_17.webp", name: "JBTOP 1" },
    { src: "achieve_10.webp", name: "Roll King" },
    { src: "achieve_11.webp", name: "The Rain Stormer" },
    { src: "achieve_12.webp", name: "Chicken Dinner" },
    { src: "achieve_13.webp", name: "Loyal Player" },
    { src: "achieve_14.webp", name: "Call Me 'Richman'" },
    { src: "achieve_15.webp", name: "The Old-Timer" },
    { src: "achieve_16.webp", name: "The Boss" },
    { src: "achieve_19.webp", name: "ETHTOP" },
    { src: "achieve_17.webp", name: "BANANATOP 1" },
    { src: "achieve_17.webp", name: "NANOTOP 1" },
    { src: "achieve_18.webp", name: "BTCTOP 1" },
  ];
</script>

<Dialog title="Master Medals" on:cancel={handleCancel}>
  <div>
    <div class="medals">
      <Medals />
    </div>
    <Info />
    <div class="divider"></div>
    <div class="">
      <div class="card-box">
        {#each medals as medal}
          <Card {medal} />
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
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }
  }
</style>
