<script>
  import { profileStore } from "$lib/store/profile";
  import axios from "axios";
  import { ServerURl } from "../backendUrl";
  import { handleAuthToken } from "$lib/store/routes";
  import { onMount, onDestroy } from "svelte";
  import { goto } from "$app/navigation";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";

  let light;
  let spinWheel;
  let rotate;
  let data;

  let hours = "";
  let minutes = "";
  let seconds = "";
  let intervalId;
  let lastBonusTimeUtc;
  let timeUntilEligible;
  onMount(() => {
    if ($profileStore.last_bonus) {
      lastBonusTimeUtc = $profileStore.last_bonus;
      const currentTimeUtc = new Date().toUTCString();
      const timeDifference =
        Date.parse(currentTimeUtc) - Date.parse(lastBonusTimeUtc);
      timeUntilEligible = 24 * 60 * 60 * 1000 - timeDifference;

      const updateCounter = () => {
        const remainingTime =
          timeUntilEligible - (Date.now() - Date.parse(currentTimeUtc));
        hours = Math.floor(remainingTime / (1000 * 60 * 60));
        minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        hours = hours.toString().padStart(2, "0");
        minutes = minutes.toString().padStart(2, "0");
        seconds = seconds.toString().padStart(2, "0");
      };

      updateCounter();
      intervalId = setInterval(updateCounter, 1000); // Update every second
    }
  });

  let URL = ServerURl();

  const values = [
    { id: 1, position: 90, value: 0.0001, token: "USDT" },
    { id: 2, position: 67, value: 0.0002, token: "USDT" },
    { id: 3, position: -315, value: 0.0005, token: "USDT" },
    { id: 4, position: -338, value: 0.0001, token: "USDT" },
    { id: 5, position: 360, value: 10.0, token: "USDT" },
    { id: 6, position: -22, value: 50.0, token: "PPF" },
    { id: 7, position: -45, value: 100.0, token: "PPF" },
    { id: 8, position: 157, value: 1000.0, token: "PPF" },
    { id: 9, position: -90, value: 2500.0, token: "PPF" },
    { id: 10, position: 245, value: 5000.0, token: "PPF" },
    { id: 11, position: 225, value: 7500.0, token: "PPF" },
    { id: 12, position: 202, value: 1000.0, token: "PPF" },
    { id: 13, position: 180, value: 0.1, token: "PPD" },
    { id: 14, position: 157, value: 0.25, token: "PPD" },
    { id: 15, position: 158, value: 0.5, token: "PPD" },
    { id: 16, position: -225, value: 1.0, token: "PPD" },
  ];

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function detectTokenImg(value) {
    if (typeof value === "string")
      if (value.toLowerCase() === "usdt")
        return "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663";
    if (value.toLowerCase() === "ppf")
      return "https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png";
    if (value.toLowerCase() === "ppd")
      return "https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828435/dpp_logo_sd2z9d.png";
  }

  function roundLight() {
    setInterval(() => {
      // light.classList.toggle("light-spin");
    }, 900);
  }

  function addBonus(data) {
    axios
      .post(`${URL}/api/spin`, data, {
        headers: {
          Authorization: `bearer ${$handleAuthToken}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  function spinWheels() {
    if (!$handleAuthToken) {
      goto("/login");
      return;
    }
    let valuePosition = getRandomNumber(0, values.length);
    valuePosition = --valuePosition;
    spinWheel.style.animation = `spin 0.1s linear infinite`;
    setTimeout(() => {
      spinWheel.style.animationDuration = "0.3s";
    }, 1500);
    setTimeout(() => {
      spinWheel.style.animationDuration = "0.5s";
    }, 1700);
    setTimeout(() => {
      spinWheel.style.animationDuration = "0.7s";
    }, 1900);
    setTimeout(() => {
      spinWheel.style.animationDuration = "1s";
    }, 2000);
    setTimeout(() => {
      spinWheel.style.animation = "none";
      spinWheel.style.transform = `rotate(${values[valuePosition].position}deg)`;
      setTimeout(() => {
        data = {
          user_id: $profileStore.user_id,
          token: values[valuePosition].token,
          amount: values[valuePosition].value,
        };
        addBonus(data);
        console.log(data);
      }, 1300);
    }, 3000);
  }

  const handleCancel = () => {
    history.back(-1);

  };

  function init() {
    roundLight();
  }

  init();
  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<div class="body">
  <div class="container">
    {#if data}
      <div class="win-modal">
        <div class="win-modal-content">
          <div class="win-modal-header">
            <h2>Bonus zoom</h2>
            <p>Wheel bonus</p>
            <h3>{data.amount} {data.token}</h3>
          </div>
          <a href="">
            <button on:click={() => goto("/")} class="ui-button"
              >Collect now</button
            >
          </a>
        </div>
      </div>
    {/if}
    <button
      on:click={() => handleCancel()}
      class="sc-ieecCq fLASqZ close-icon dialog-close"
    >
      <Icon
        src={IoCloseSharp}
        size="18"
        color="rgb(255, 255, 255)"
        className="custom-icon"
        title="arror"
      />
    </button>
    <div class="header">
      <h1>SPIN TO WIN</h1>
      <h1>500 USDT</h1>
    </div>
    <div class="btgr"></div>
    <div class="togr"></div>
    <div class="spin-wrapper">
      <div class="spinner-container">
        <div class="spinner">
          <div bind:this={spinWheel} class="circle">
            <img bind:this={light} class="light" src={""} alt="" />
            <div class="content">
              {#each values as item}
                <span>
                  <p>{parseFloat(item.value)}</p>
                  <img src={detectTokenImg(item.token)} alt="" />
                </span>
              {/each}
            </div>
          </div>
          <div class="indicator"></div>

          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          {#if !timeUntilEligible}
            <div on:click={spinWheels} class="spin_btn"></div>
          {/if}
        </div>
      </div>
    </div>
    {#if !$handleAuthToken}
      <div class="btn_container">
        <button on:click={() => goto("/login")} class="ui-button"
          >SIGN UP AND SPIN NOW</button
        >
      </div>
    {/if}
    {#if $handleAuthToken && timeUntilEligible}
      <div class="next_spin">
        <h2>Next free spin bonus</h2>
        <div class="input_container">
          <input value={hours.slice(0, 1)} placeholder="0" type="text" />
          <input value={hours.slice(1)} placeholder="0" type="text" />
          <div class="divider">:</div>
          <input value={minutes.slice(0, 1)} placeholder="0" type="text" />
          <input value={minutes.slice(1)} placeholder="0" type="text" />
          <div class="divider">:</div>
          <input value={seconds.slice(0, 1)} placeholder="0" type="text" />
          <input value={seconds.slice(1)} placeholder="0" type="text" />
        </div>
      </div>
    {/if}

    {#if $handleAuthToken && !timeUntilEligible}
      <div class="btn_container">
        <button on:click={spinWheels} class="ui-button">SPIN TO WIN</button>
      </div>
    {/if}
  </div>
</div>

<style>
  .ui-button {
    display: block;
    width: 100%;
    -webkit-user-select: none;
    padding: 15px 20px;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-radius: 50px;
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;
    -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.36, 0.66, 0.04, 1);
    -webkit-transition: transform 0.2s cubic-bezier(0.36, 0.66, 0.04, 1);
    transition: transform 0.2s cubic-bezier(0.36, 0.66, 0.04, 1);
    color: #fff;

    background-image: conic-gradient(
      from 1turn,
      rgba(88, 175, 16, 1),
      rgba(29, 128, 58, 1)
    );
  }
  .body {
    z-index: 400000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 5px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.815);
  }

  .body .header {
    text-align: center;
  }
  .body .header h1 {
    color: white;
    font-weight: 800;
    font-size: 20px;
    line-height: 1;
  }
  .body .header h1:nth-child(2) {
    color: gold;
    text-shadow: 0px -1px 10px gold;
    font-size: 35px;
  }

  .next_spin {
    margin-top: 10px;
    position: relative;
    z-index: 2;
  }
  .next_spin h2 {
    font-size: 20px;
    color: white;
    text-align: center;
  }

  .next_spin .divider {
    /* padding: 0px 5px; */
    font-size: 50px;
    line-height: 0;
    color: white;
    width: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-2px);
  }

  .next_spin input {
    width: 40px !important;
    height: 50px;
    border: none;
    text-align: center;
    border-radius: 5px;
    background-color: var(--card-bg-2);
    font-size: 25px;
    font-weight: 800;
    color: white;
  }

  .next_spin input::placeholder {
    color: white;
  }

  .next_spin .input_container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-top: 10px;
  }
  .container {
    top: 0;
    left: 0;
    height: 100%;
    background-color: var(--card-bg-1);
    padding: 30px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 400px;
    align-items: center;
    border-radius: 20px;
    position: relative;
    transform: translateY(200px);
    animation: slideIn 0.5s ease-in-out forwards;
    opacity: 0;
    animation-delay: 0.5s;
  }

  .win-modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.815);
    z-index: 5;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .win-modal-content {
    width: 100%;
    background-color: var(--card-bg-4);
    padding: 50px 30px;
    overflow: hidden;
    position: relative;
    transform: translateY(200px);
    animation: slideIn 0.5s ease-in-out forwards;
    opacity: 0;
    animation-delay: 0.5s;
    border-radius: 10px;
    background: linear-gradient(
      145deg,
      rgb(35, 35, 35),
      rgb(35, 33, 33),
      rgb(43, 59, 46),
      rgb(76, 99, 58)
    );
  }

  .win-modal-header {
    margin-bottom: 20px;
    text-align: center;
  }

  .win-modal-header h2,
  .win-modal-header p {
    color: gold;
  }

  .win-modal-header h2 {
    text-transform: uppercase;
    font-size: 22px;
  }

  .win-modal-header h3 {
    font-size: 35px;
    text-transform: uppercase;
    color: var(--primary-color);
  }

  .win-modal-content .ui-button {
    width: max-content;
    padding-right: 60px;
    padding-left: 60px;
    margin: 0 auto;
  }

  .togr {
    width: 100%;
    height: 100px;
    border-radius: 50%;
    left: -100px;
    position: absolute;
    background: conic-gradient(
      from 1turn,
      rgba(130, 16, 175, 0.495),
      rgb(251, 87, 153)
    );
    filter: blur(100px);
  }

  .btgr {
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0;
    background: conic-gradient(
      from 1turn,
      rgba(87, 175, 16, 0.495),
      rgb(121, 198, 144)
    );
    filter: blur(100px);
  }

  .spin-wrapper {
    height: 320px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
  }
  .spinner-container {
    position: relative;
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: scale(0.75);
  }

  .spinner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #fff;
    font-weight: bold;
  }

  .spinner .circle {
    background-image: url(./image/crypto_spin-5290c0a3.webp);
    background-size: cover;
    width: 100%;
    height: 100%;
  }

  .spinner .content {
    position: absolute;
    width: 100%;
    height: 85%;
    display: flex;
    justify-content: center;
    top: 30px;
  }

  .spinner span img {
    width: 25px;
    height: 100%;
  }

  .spinner span p {
    color: white;
    font-size: 20px;
  }
  .spinner span {
    position: absolute;
    font-size: 20px;
    display: flex;
    align-items: center;

    &:nth-child(1) {
      transform: rotate(-90deg) translateX(-20px);
    }
    &:nth-child(2) {
      transform: rotate(-70deg) translateY(60px) translateX(-20px);
    }
    &:nth-child(3) {
      transform: rotate(-45deg) translateY(112px) translateX(5px);
    }
    &:nth-child(4) {
      transform: rotate(-20deg) translateY(145px) translateX(80px);
    }

    &:nth-child(5) {
      transform: rotate(-5deg) translateY(170px) translateX(120px);
    }
    &:nth-child(6) {
      transform: rotate(10deg) translateY(185px) translateX(160px);
    }
    &:nth-child(7) {
      transform: rotate(30deg) translateY(170px) translateX(210px);
    }
    &:nth-child(8) {
      transform: rotate(60deg) translateY(98px) translateX(270px);
    }

    &:nth-child(9) {
      transform: rotate(85deg) translateY(27px) translateX(295px);
    }

    &:nth-child(10) {
      transform: rotate(110deg) translateY(-45px) translateX(280px);
    }

    &:nth-child(11) {
      transform: rotate(140deg) translateY(-130px) translateX(230px);
    }

    &:nth-child(12) {
      transform: rotate(160deg) translateY(-150px) translateX(185px);
    }

    &:nth-child(13) {
      transform: rotate(180deg) translateY(-160px) translateX(130px);
    }
    &:nth-child(14) {
      transform: rotate(200deg) translateY(-145px) translateX(80px);
    }

    &:nth-child(15) {
      transform: rotate(220deg) translateY(-110px) translateX(35px);
    }

    &:nth-child(16) {
      transform: rotate(250deg) translateY(-60px) translateX(-10px);
    }
  }
  .spinner img {
    width: 100%;
  }
  .spinner .indicator {
    position: absolute;
    width: 180px;
    height: 110px;
    left: 253px;
    transform: translateY(5px) rotate(0deg);
    background-image: url(./image/indicator.webp);
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 2;
  }
  .spinner .light {
    position: absolute;
    &.light-spin {
      transform: rotate(-23.3deg);
    }
  }

  .spin_btn {
    position: absolute;
    width: 100px !important;
    border-radius: 50%;
    object-fit: contain;
    height: 100px;
    padding: 6px;
    background-image: url(./image/crypto_btn-27a97635.webp);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
