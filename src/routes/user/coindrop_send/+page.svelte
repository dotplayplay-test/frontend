<script>
  import Icon from "svelte-icons-pack/Icon.svelte";
  import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
  import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
  import "../../../styles/users/coindrop/index.css";
  import RiSystemArrowLeftSLine from "svelte-icons-pack/ri/RiSystemArrowLeftSLine";
  import { usePublicMessages } from "$lib/chat-room/componets/index";
  import { UserProfileEl } from "$lib/index";
  import { error_msg } from "$lib/nestedpages/auth/login/store";
  import { onMount } from "svelte";
  const {
    handleUSDTwallet,
    handlePPFwallet,
    handlePPLwallet,
    handlePPDwallet,
  } = UserProfileEl();
  const { sendMessage } = usePublicMessages();
  import {
    ppdWallet,
    pplWallet,
    usdt_Wallet,
    default_Wallet,
    coin_list,
  } from "$lib/store/coins";
  import { profileStore } from "$lib/store/profile";
  import { handleCountdown } from "../../../lib/games/ClassicDice/socket/index";
  const { handleChattingMessages } = handleCountdown();

  $: {
    onMount(async () => {
      handleUSDTwallet();
      handlePPFwallet();
      handlePPLwallet();
      handlePPDwallet();
    });
  }

  let coins = $coin_list.filter(
    (coin) => coin.coin_name.toLowerCase() !== "ppd"
  );

  let coinDropValue = 10;
  let isSelectCoin = false;
  let num = 10;
  let eachCoinDrop = parseInt(coinDropValue) / parseInt(num);
  let displayComment = "";
  let isCommet = false;
  const handleSelectCoins = () => {
    if (isSelectCoin) {
      isSelectCoin = false;
    } else {
      isSelectCoin = true;
    }
  };

  $: {
    eachCoinDrop = parseInt(coinDropValue) / parseInt(num);
  }

  const handleSelectCoin = (e) => {
    default_Wallet.set(e);
    handleSelectCoins();
  };

  const handleSubmit = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let newformat = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let time = hours + ":" + minutes + " " + newformat;
    let data = {
      msg_id: Math.floor(Math.random() * 230000000),
      email: $profileStore.email,
      type: "coin_drop",
      text: ".",
      sent_at: time,
      username: $profileStore.username,
      profle_img: $profileStore.profile_image,
      sender_username: $profileStore.username,
      hide_profile: $profileStore.hide_profile,
      user_id: $profileStore.user_id,
      time: new Date(),
      gif: ".",
      coin_drop_amount: parseInt(coinDropValue),
      coin_drop_comment: displayComment,
      coin_drop_num: num,
      coin_drop_token: $default_Wallet.coin_name,
      coin_drop_image: $default_Wallet.coin_image,
      vip_level: $profileStore.vip_level,
      profile: $profileStore,
    };
    if (parseInt(coinDropValue) < 0) {
      error_msg.set("Invalid amount");
      setTimeout(() => error_msg.set(""), 3000);
    }
    if (parseInt(coinDropValue) > $default_Wallet.balance) {
      error_msg.set("Insufficient balance");
      setTimeout(() => error_msg.set(""), 3000);
    } else {
      handleChattingMessages(data);
      history.back(-1);
    }
  };
</script>

<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
  {#if $error_msg}
    <div class="error-message">
      <div class="hTTvsjh">
        <div>{$error_msg}</div>
      </div>
    </div>
  {/if}
  <div
    class="dialog"
    style="opacity: 1; width: 464px; height: 581px; margin-top: -290.5px; margin-left: -232px; transform: scale(1) translateZ(0px);"
  >
    {#if isSelectCoin}
      <button
        on:click={() => handleSelectCoins()}
        class="dialog-back"
        style="opacity: 1; transform: none;"
      >
        <Icon
          src={RiSystemArrowLeftSLine}
          size="23"
          color="rgba(153, 164, 176, 0.6)"
          className="custom-icon"
          title="arror"
        />
      </button>
    {/if}
    <div class={`dialog-head ${isSelectCoin ? "has-back" : "has-close"}`}>
      <div class="dialog-title">Coindrop</div>
    </div>
    <button
      on:click={() => history.back()}
      class="sc-ieecCq fLASqZ close-icon dialog-close"
    >
      <Icon
        src={IoCloseSharp}
        size="23"
        color="rgba(153, 164, 176, 0.6)"
        className="custom-icon"
        title="arror"
      />
    </button>
    <div class="dialog-body default-style" style="z-index: 2; transform: none;">
      {#if !isSelectCoin}
        <div class="sc-jTycuM dhoFwU">
          <div class="sc-ezbkAF kDuLvp input sc-bTfYFJ dETeez amount-input">
            <div class="input-label">
              <p style="flex: 1 1 auto;">Amount</p>
              <p>
                Balance: <span
                  >{$default_Wallet.balance +
                    " " +
                    $default_Wallet.coin_name}</span
                >
              </p>
            </div>
            <div class="input-control">
              <input type="number" bind:value={coinDropValue} />
              <button
                on:click={() => handleSelectCoins()}
                class="sc-kHOZwM lkOmCH"
              >
                <img
                  class="coin-icon"
                  alt=""
                  src={$default_Wallet.coin_image}
                />
                <span class="currency">{$default_Wallet.coin_name}</span>
                <Icon
                  src={RiSystemArrowRightSLine}
                  size="23"
                  color="rgba(153, 164, 176, 0.6)"
                  className="custom-icon"
                  title="arror"
                />
              </button>
            </div>
            <div class="input-after">
              Min: {#if $default_Wallet.coin_name === "PPL"}
                2
              {:else}
                1
              {/if}
              {$default_Wallet.coin_name}
            </div>
          </div>
          <div class="sc-ezbkAF kDuLvp input people-input">
            <div class="input-label">Number of people</div>
            <div class="input-control">
              <input type="text" bind:value={num} />
              <div class="min-number">1~100</div>
            </div>
          </div>
          <div class="sc-ezbkAF kDuLvp input sc-ikJyIC iowset send-textarea">
            <div class="input-label">Message (Optional)</div>
            <div class="input-control">
              <textarea bind:value={displayComment} disabled={isCommet}
              ></textarea>
              <div class="send-len">0/32</div>
            </div>
          </div>
          <div class="show-amount">
            <span class="amount-num"
              >{$default_Wallet.coin_name === "PPL" ? 2 : 1}</span
            >
            <span class="cl-primary">{$default_Wallet.coin_name}</span>
          </div>
          <button
            on:click={handleSubmit}
            class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal"
          >
            <div class="button-inner">Start Coindrop</div>
          </button>
        </div>
      {:else}
        <div class="sc-eLwHnm eCfWZW">
          <div
            class="sc-dkPtRN jScFby scroll-view sc-dvQaRk bVVgo currency-list"
          >
            {#each coins as coin (coin._id)}
              <button
                on:click={() => handleSelectCoin(coin)}
                class={`sc-TBWPX kjMlDW currency-item notranslate ${
                  coin.select ? "active" : "normal"
                }  `}
              >
                <div class="sc-ZOtfp sc-jOxtWs sc-hmjpVf bAQFCP lkOITC jNFKIW">
                  <div class="coin-wrap">
                    <img class="coin-icon" alt="" src={coin.coin_image} />
                  </div>
                  <div class="name-wrap">
                    <div class="currency-name">{coin.coin_name}</div>
                  </div>
                  <div class="amount-wrap">
                    <div class="sc-Galmp erPQzq coin notranslate monospace">
                      <div class="amount">
                        <span class="amount-str">
                          {coin.balance}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .dialog-back {
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 11;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3.75rem;
    height: 3.75rem;
  }

  .dialog-head.has-back {
    margin-left: 3.125rem;
  }

  .dialog-head.has-close {
    margin-right: 3.75rem;
  }

  .default-style > div {
    border-radius: 20px;
    background-color: var(--card-bg-5);
    padding: 1.25rem 1.25rem 0px;
  }

  .dialog-body > div {
    flex: 1 1 0%;
  }

  .eCfWZW {
    display: flex;
    flex-direction: column;
    align-self: stretch;
  }

  .eCfWZW .currency-list {
    margin-top: 0.8125rem;
    margin-bottom: 0.9375rem;
  }

  .jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
  }

  .kjMlDW {
    padding: 0.4375rem 0.625rem;
    font-size: 0.875rem;
    border-radius: 1.25rem;
    margin: 0.25rem 0px;
    width: 100%;
    border: 1px solid transparent;
    min-height: 2.0625rem;
  }

  .bAQFCP {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .jNFKIW .coin-wrap {
    position: relative;
  }

  .bAQFCP .coin-icon {
    width: 1.875rem;
    height: 1.875rem;
    margin-right: 0.9375rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 8px;
    border-radius: 0.9375rem;
  }

  .lkOITC .coin-wrap {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .bAQFCP .currency-name {
    color: rgb(255, 255, 255);
    font-weight: 800;
    height: 1.25rem;
    line-height: 1.25rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
  }

  .jNFKIW .amount-wrap {
    flex-direction: column;
    align-items: flex-end;
  }

  .lkOITC .amount-wrap {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-left: auto;
  }

  .jNFKIW .amount-wrap .coin {
    text-align: right;
  }

  .jNFKIW .monospace {
    color: rgb(255, 255, 255);
    font-weight: 800;
    height: 1.375rem;
    line-height: 1.375rem;
  }

  .erPQzq {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
  }

  .monospace {
    font-family: Monmono;
  }

  .erPQzq .amount-str {
    width: 7em;
    display: inline-block;
  }

  .erPQzq .suffix {
    opacity: 0.5;
  }

  .kjMlDW.active {
    border-color: rgb(67, 179, 9);
  }
</style>
