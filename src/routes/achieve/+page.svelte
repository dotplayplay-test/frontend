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
    {
      src: "achieve_5.webp",
      name: "The Top Gun",
      info: "You are flying amongst the clouds! The one with the highest VIP level achieved! SVIP 33 unlocked!",
    },
    {
      src: "achieve_6.png",
      name: "The Rain Master",
      info: "You are a pro at getting drenched in Rain! Get this medal when you receive rain for 99 times!",
    },
    {
      src: "achieve_7.webp",
      name: "PACO Lover",
      info: "You love PACO so much that you never miss a chance to catch him! Win this love medal when you catch PACO-spider 200 times!",
    },
    {
      src: "achieve_8.webp",
      name: "Invincible Lucky Dog",
      info: "You are Luck’s favorite child! The Chosen One! Get this Invincible medal when you win 99,000x or higher payout in any game!",
    },
    {
      src: "achieve_17.webp",
      name: "JBTOP 1",
      info: "Your profit (ATH) on JB ranked 1st! You did amazing! page.achieve.content.JB",
    },
    {
      src: "achieve_10.webp",
      name: "Roll King",
      info: "You are the King of the day! Win this medal when you get the maximum number of points on any day in the Roll Competition.",
    },
    {
      src: "achieve_11.webp",
      name: "The Rain Stormer",
      info: "You love to Rain! You have a big heart! Win this medal when the total amount of Rain you’ve sent reaches 100 USD.",
    },
    {
      src: "achieve_12.webp",
      name: "Chicken Dinner",
      info: "You are the champion! You are in for the Win! Get this prestigious medal when your profit reaches 10,000 USD!",
    },
    {
      src: "achieve_13.webp",
      name: "Loyal Player",
      info: "You are not kidding when you say you love NANOGAMES.IO! Your loyalty is the talk of the town! Get this awesome medal when you place over 10,000,000 bets!",
    },
    {
      src: "achieve_14.webp",
      name: "Call Me 'Richman'",
      info: "You are the true Emperor! The Great King! THE RICHMAN! Win this very prestigious medal when your total bet amount reaches 1,000,000 USD.",
    },
    {
      src: "achieve_15.webp",
      name: "The Old-Timer",
      info: "You have seen it all! You have been here a long time! Get this medal when you complete one year on the site!",
    },
    {
      src: "achieve_16.webp",
      name: "The Boss",
      info: "You are the boss! The golden heart! You do not hesitate to reward the worthy! Get this medal by giving tip to 99 different people!",
    },
    {
      src: "achieve_19.webp",
      name: "ETHTOP",
      info: "Your profit (ATH) on ETH ranked 1st! You did amazing! Record holder: Ali Dotti123 - Won 263.0463 ETH",
    },
    {
      src: "achieve_17.webp",
      name: "BANANATOP 1",
      info: "Your profit (ATH) on BANANO ranked 1st! You did amazing! page.achieve.content.BANANO",
    },
    {
      src: "achieve_17.webp",
      name: "NANOTOP 1",
      info: "Your profit (ATH) on NANO ranked 1st! You did amazing! page.achieve.content.NANO",
    },
    {
      src: "achieve_18.webp",
      name: "BTCTOP 1",
      info: "Your profit (ATH) on BTC ranked 1st! You did amazing! Record holder: Hidden - Won 20.05 BTC",
    },
  ];

  $: selectedMedal = null;

  const selectMedal = (e) => {
    selectedMedal = e.detail;
  };

  const goBack = () => {
    selectedMedal = null;
  };
</script>

<Dialog title="Master Medals" on:cancel={handleCancel}>
  {#if selectedMedal}
    <AchieveSingle
      on:goBack={goBack}
      {selectedMedal}
      medal={medals[selectedMedal]}
    />
  {:else}
    <AchieveList {medals} on:selectMedal={selectMedal} />
  {/if}
</Dialog>
