<script>
  import { goto } from "$app/navigation";
  import Dialog from "$lib/achieve/Dialog.svelte";
  import AchieveList from "$lib/achieve/AchieveList.svelte";
  import AchieveSingle from "../../lib/achieve/AchieveSingle.svelte";

  const handleCancel = () => {
    goto("/promotion");
  };

  const medals = [
    {
      src: "achieve_1.webp",
      name: "Talkative",
      info: "Win this precious medal by chatting in any room for a total of 200days. (Does not need to contribute 200 days)",
    },
    {
      src: "achieve_2.webp",
      name: "Fearless One",
      info: "No one haas lost more than you, you have experienced the worst things! You are a tough cookie! Nothing can knock you down the fearless!",
    },
    {
      src: "achieve_3.png",
      name: "The Loaded King",
      info: "You are rolling in money! Win this bling medal if you have the highest wallet balance ever in the history of DOTPLAYPLAY.IO! (P.S. Vault balance excluded)",
    },
    {
      src: "achieve_4.webp",
      name: "Highest Contributor",
      info: "You are a true king! The mighty heart! The one with the highest wager ever in the history of DOTPLAYPLAY.IO!",
    },
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

  $: selectedMedal = null;

  const selectMedal = (e) => {
    selectedMedal = e.detail;
  };
</script>

<Dialog title="Master Medals" on:cancel={handleCancel}>
  {#if selectedMedal}
    <AchieveSingle {selectedMedal} medal={medals[selectedMedal]} />
  {:else}
    <AchieveList {medals} on:selectMedal={selectMedal} />
  {/if}
</Dialog>
