<script>
  import { goto } from "$app/navigation";
  import { createEventDispatcher, onMount } from "svelte";
  import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import RiSystemArrowUpSLine from "svelte-icons-pack/ri/RiSystemArrowUpSLine";
  import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
  import { UseFetchData } from "$lib/hook/useFetchData";
  import { handleAuthToken } from "$lib/store/routes";
  import { default_Wallet } from "$lib/store/coins";
  const dispatch = createEventDispatcher();
  let selectedNumbers = [];
  $: jackpotNum = 0;
  $: ticketAmount = 1;
  $: ticketCost = 1 * 0.1;
  const handleRandomGeneration = () => {
    const balls = Array(36)
      .fill(null)
      .map((_, i) => i + 1);
    selectedNumbers = Array.from({ length: 5 }, () => {
      const randomIndex = Math.floor(Math.random() * balls.length);
      return balls.splice(randomIndex, 1)[0];
    });
    jackpotNum = Math.max(1, Math.min(10, Math.round(Math.random() * 10) + 1));
  };
  const handleSetTicketAmount = (amount, update) => {
    return (e) => {
      if (update)
        ticketAmount = Math.min(1000, Math.max(1, ticketAmount + amount));
      else ticketAmount = amount;
      ticketCost = ticketAmount * 0.1;
    };
  };
  const handleSelection = (num) => {
    if (selectedNumbers.includes(num)) {
      selectedNumbers = [...selectedNumbers.filter((n) => n !== num)];
    } else if (selectedNumbers.length < 5) {
      selectedNumbers = [...selectedNumbers, num];
    }
  };

  $: isManual = false;
  const handleClose = () => {
    if (loading) return;
    dispatch("close-dialog");
  };
  $: loading = false;
  const buyTicket = async () => {
    if (
      $default_Wallet.coin_name !== "PPL" ||
      (isManual && (selectedNumbers.length < 5 || !jackpotNum)) ||
      $default_Wallet.balance < ticketCost
    )
      return;

    loading = true;
    try {
      const { data } = await UseFetchData($handleAuthToken).fetch(
        "/lottery/buy-ticket",
        {
          numbers: selectedNumbers,
          random: !isManual,
          amount: ticketAmount,
          jackpot: jackpotNum,
        },
        "POST",
      );
      dispatch("close-dialog", data);
    } catch (error) {
      console.log("Error > ", error);
    } finally {
      loading = false;
    }
  };
  $: showSlider = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:click={() => (showSlider = false)}
  class="sc-bkkeKt kBjSXI"
  style="opacity: 1;"
>
  <div
    class="dialog"
    style="opacity: 1; width: 464px; height: 582px; margin-top: -291px; margin-left: -232px; transform: scale(1) translateZ(0px);"
  >
    <div class="dialog-head has-close">
      <div class="dialog-title">Buy Lottery Tickets</div>
    </div>
    <button
      on:click={handleClose}
      class="sc-ieecCq fLASqZ close-icon dialog-close"
      ><Icon
        src={IoCloseSharp}
        size="23"
        color="rgba(153, 164, 176, 0.6)"
      /></button
    >
    <div class="dialog-body default-style" style="z-index: 2; transform: none;">
      <div class="sc-dkPtRN jScFby scroll-view sc-bXdNzS jybDrO">
        <div class="warn">
          <span
            >You can get more NNL from <a href="/wallet/swap?to=BCL">NGSwap</a> at
            anytime</span
          >
        </div>
        <div class="layout">
          <div class="label">Pay with</div>
          <div class="pay-input">
            <img
              class="coin-icon"
              alt={$default_Wallet.coin_name}
              src={$default_Wallet.coin_image}
            /><span class="currency">{$default_Wallet.coin_name}</span><span
              class="balance">{$default_Wallet.balance}</span
            >
          </div>
          <div
            class="error-txt {$default_Wallet.coin_name !== 'PPL'
              ? 'show'
              : ''}"
          >
            Please select PPL to buy a ticket!
          </div>
        </div>
        <div class="sc-jnrVZQ kyAFkr">
          <div class="label">Number of tickets</div>
          <div class="input-tickets">
            <div class="pre-input">
              <div class="sc-ezbkAF kDuLvp input">
                <div class="input-control">
                  <input type="text" readonly value={ticketAmount} />
                </div>
              </div>
              <div class="sc-kDTinF bswIvI button-group">
                <button
                  on:click={handleSetTicketAmount(10)}
                  class="sc-iqseJM cBmlor button button-normal {ticketAmount ===
                  10
                    ? 'active'
                    : ''}"><div class="button-inner">10</div></button
                ><button
                  on:click={handleSetTicketAmount(50)}
                  class="sc-iqseJM cBmlor button button-normal {ticketAmount ===
                  50
                    ? 'active'
                    : ''}"><div class="button-inner">50</div></button
                ><button
                  on:click={handleSetTicketAmount(100)}
                  class="sc-iqseJM cBmlor button button-normal {ticketAmount ===
                  100
                    ? 'active'
                    : ''}"><div class="button-inner">100</div></button
                >
                {#if showSlider}
                  <div
                    on:click={(e) => {
                      e.stopPropagation();
                    }}
                    class="fix-layer"
                    style="opacity: 1; transform: none;"
                  >
                    <button
                      on:click={handleSetTicketAmount(1)}
                      class={ticketAmount === 1 ? "active" : ""}>Min</button
                    >
                    <div
                      id="tk-slider-container"
                      class="sc-kLwhqv eOA-dmL slider"
                    >
                      <div
                        class="slider-after"
                        style="transform: scaleX({ticketAmount / 1000});"
                      ></div>
                      <div
                        class="slider-handler-wrap"
                        style="transform: translateX(0%);"
                      >
                        <input
                          type="range"
                          class="drag-block"
                          min="1"
                          step="1"
                          max="1000"
                          on:input={(e) =>
                            handleSetTicketAmount(parseInt(e.target.value))()}
                          bind:value={ticketAmount}
                        />
                      </div>
                      <div
                        class="slider-before"
                        style="transform: scaleX({1 - ticketAmount / 1000});"
                      ></div>
                    </div>
                    <button
                      on:click={handleSetTicketAmount(1000)}
                      class={ticketAmount === 1000 ? "active" : ""}>Max</button
                    >
                  </div>
                {/if}
                <button
                  on:click={(e) => {
                    e.stopPropagation();
                    showSlider = !showSlider;
                  }}
                  class="sc-hIagIn fuYEiw"
                  ><Icon
                    src={RiSystemArrowUpSLine}
                    size="80"
                    color="rgba(153, 164, 176, 0.6)"
                  />
                  <Icon
                    src={RiSystemArrowDownSLine}
                    size="80"
                    color="rgba(153, 164, 176, 0.6)"
                  /></button
                >
              </div>
            </div>
            <div class="suff-desc">
              <div class="cont">
                <div class="cost">Total Cost:</div>
                <div style="font-size: .875rem" class="amount error">
                  {parseFloat(ticketCost).toFixed(8)} PPL
                </div>
              </div>
            </div>
          </div>
          <div class="desc">0.10000000 PPL/Ticket</div>
        </div>
        <div class="sc-kjOQFR gwUFaO">
          <div class="sc-iwjdpV ikWSlH radio">
            <div
              role="radio"
              aria-checked={!isManual}
              tabindex="-1"
              on:keydown={() => (isManual = false)}
              on:click={() => (isManual = false)}
              class="radio-item {!isManual ? 'is-active' : ''}"
            >
              <div class="circle"></div>
              <div>Auto Generate</div>
            </div>
            <div
              role="radio"
              aria-checked={isManual}
              tabindex="-1"
              on:keydown={() => (isManual = true)}
              on:click={() => (isManual = true)}
              class="radio-item {isManual ? 'is-active' : ''}"
            >
              <div class="circle"></div>
              <div>Manual Select</div>
            </div>
          </div>
          {#if isManual}
            <div class="select-box">
              <div class="simple">
                <div class="random-wrap">
                  <div class="sub-tips">5 digits optional</div>
                  <button on:click={handleRandomGeneration} class="random"
                    >Random</button
                  >
                </div>
                <div class="box">
                  {#each Array.from({ length: 36 }, (_, i) => i + 1) as number (number)}
                    <button
                      on:click={() => handleSelection(number)}
                      class="sc-iqseJM cBmlor button button-normal {selectedNumbers.includes(
                        number,
                      )
                        ? 'active'
                        : ''}"
                      ><div class="button-inner">
                        {number}
                      </div></button
                    >
                  {/each}
                </div>
              </div>
              <div class="jackpot">
                <div class="sub-tips">1 Jackpot Ball</div>
                <div class="box">
                  {#each Array.from({ length: 10 }, (_, i) => i + 1) as number (number)}
                    <button
                      on:click={() => (jackpotNum = number)}
                      class="sc-iqseJM cBmlor button button-normal {number ===
                      jackpotNum
                        ? 'active'
                        : ''}"
                      ><div class="button-inner">
                        {number}
                      </div></button
                    >
                  {/each}
                </div>
              </div>
            </div>
            <div
              class="error-txt {selectedNumbers.length < 5 || !jackpotNum
                ? 'show'
                : ''}"
            >
              Please choose 6 numbers to take part in the DOTPlayPlay Lottery!
            </div>
          {/if}
        </div>
        <button
          on:click={buyTicket}
          class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal submit-btn"
          disabled={loading ||
            $default_Wallet.balance < ticketCost ||
            (isManual && (selectedNumbers.length < 5 || !jackpotNum))}
          ><div class="button-inner">Buy Tickets</div></button
        >
      </div>
    </div>
  </div>
</div>

<style>
  .kBjSXI {
    position: fixed;
    z-index: 1000;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.7);
    filter: none !important;
  }
  .dialog {
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 50%;
    top: 50%;
    width: 464px;
    height: 720px;
    margin: -375px 0px 0px -280px;
    transition-property: width, height, margin-left, margin-top;
    transition-duration: 0.5s;
    border-radius: 1.25rem;
    overflow: hidden;
    background: var(--affiliate-bg);
  }
  .dialog-head.has-close {
    margin-right: 3.75rem;
  }

  .dialog-head {
    position: relative;
    z-index: 10;
    flex: 0 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 3.75rem;
    margin-left: 1.125rem;
    transition: all 0.5s ease 0s;
  }
  .dialog-head.has-close {
    margin-right: 3.75rem;
  }
  .dialog-head {
    position: relative;
    z-index: 10;
    flex: 0 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 3.75rem;
    margin-left: 1.125rem;
    transition: all 0.5s ease 0s;
  }
  .fLASqZ {
    position: absolute;
    right: 0px;
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
  .default-style {
    padding-top: 3.75rem;
    background: var(--affiliate-bg);
  }

  .dialog-body {
    position: absolute;
    inset: 0px;
    display: flex;
    overflow: hidden;
  }

  .default-style > div {
    border-radius: 20px;
    background-color: var(--card-bg-5);
    padding: 1.25rem 1.25rem 0px;
  }

  .dialog-body > div {
    flex: 1 1 0%;
  }
  .jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
  }

  .jybDrO .warn {
    border: 1px solid rgb(67, 179, 9);
    background: rgba(93, 160, 0, 0.1);
    border-radius: 1.25rem;
    color: rgb(67, 179, 9);
    padding: 0.75rem 1.25rem;
    margin-top: 0.5rem;
    height: 4rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .jybDrO .warn a {
    color: rgb(67, 179, 9);
    text-decoration: underline;
  }

  .jybDrO .layout {
    margin-top: 1.25rem;
  }
  .jybDrO .label {
    margin: 0px 0px 0.4375rem 0.875rem;
    height: 1.125rem;
    line-height: 1.125rem;
  }
  .jybDrO .layout .pay-input {
    height: 4rem;
    padding: 0px 1.25rem;
    border-radius: 1.25rem;
    color: rgb(255, 255, 255);
    background-color: rgb(37, 39, 44);
    border: 1px solid var(--border-1);
    font-size: 1.125rem;
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .jybDrO .layout .coin-icon {
    width: 1.6875rem;
    height: 1.6875rem;
    margin-right: 1.0625rem;
  }
  .jybDrO .layout .pay-input .balance {
    margin-left: auto;
    font-size: 1rem;
    margin-right: 0.875rem;
  }
  .kyAFkr {
    margin-top: 1.5rem;
  }
  .jybDrO .label {
    margin: 0px 0px 0.4375rem 0.875rem;
    height: 1.125rem;
    line-height: 1.125rem;
  }
  .kyAFkr .input-tickets {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background-color: rgb(37, 39, 44);
    border: 1px solid var(--border-1);
    padding: 0.6875rem 1.25rem;
    border-radius: 1.25rem;
    position: relative;
  }
  .kyAFkr .input-tickets .pre-input .input {
    margin-top: 0px;
    margin-left: 0.625rem;
  }

  .kDuLvp {
    margin-top: 1rem;
  }
  .kyAFkr .input-tickets .pre-input .input .input-control {
    border: none;
    padding-left: 0px;
    background-color: transparent;
    height: 2.125rem;
    line-height: 2.125rem;
  }

  .kDuLvp .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 1.25rem;
    border: 1px solid var(--border-1);
    background-color: var(--sidebar-card-bg);
    height: 3.5rem;
    padding: 0px 1.25rem;
    opacity: 1;
  }
  .kDuLvp .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: var(--text-5);
  }
  .kyAFkr .input-tickets .pre-input .button-group {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    height: 2.25rem;
  }
  .kyAFkr .input-tickets .pre-input .button-group .button:first-child {
    padding-left: 0.125rem;
    border-top-left-radius: 1.25rem;
    border-bottom-left-radius: 1.25rem;
  }

  .kyAFkr .input-tickets .pre-input .button-group .button:hover,
  .kyAFkr .input-tickets .pre-input .button-group .button.active {
    color: var(--text-5);
    font-weight: 600;
    background-color: rgb(60, 64, 74);
  }

  .bswIvI {
    display: flex;
  }
  .kyAFkr .input-tickets .pre-input .button-group .button:first-child {
    padding-left: 0.125rem;
    border-top-left-radius: 1.25rem;
    border-bottom-left-radius: 1.25rem;
  }
  .kyAFkr .input-tickets .pre-input .button-group .button {
    border-radius: 0px;
    height: 100%;
    width: 2.5rem;
    flex: 0 0 auto;
    font-size: 0.75rem;
    background-color: rgba(60, 64, 74, 0.5);
    font-weight: 400;
  }

  .bswIvI > button:first-child {
    margin-left: 0px;
    padding-left: 0.125rem;
    border-top-left-radius: 1.125rem;
    border-bottom-left-radius: 1.125rem;
  }
  .bswIvI > button {
    height: 2.25rem;
    width: 2.75rem;
    padding: 0px;
    color: var(--text-4);
    background: var(--card-bg-2 );
    margin-left: 1px;
  }
  .cBmlor {
    display: block;
    width: 100%;
    border-radius: 6.25rem;
    height: 3rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
  }
  .cBmlor > .button-inner {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .bswIvI > button:last-child {
    padding-right: 0.125rem;
    border-top-right-radius: 1.125rem;
    border-bottom-right-radius: 1.125rem;
  }

  .bswIvI > button {
    height: 2.25rem;
    width: 2.75rem;
    padding: 0px;
    color: var(--text-4);
    background: var(--card-bg-2 );
    margin-left: 1px;
  }
  .fuYEiw {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
  }
  .kyAFkr .input-tickets .suff-desc {
    width: 9rem;
    padding: 0px 0px 0px 0.9375rem;
    margin: 0.25rem 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-left: 1px solid rgba(105, 115, 126, 0.25);
  }
  .kyAFkr .input-tickets .suff-desc .cost {
    font-size: 0.75rem;
  }
  .kyAFkr .input-tickets .suff-desc .error {
    color: rgb(237, 99, 0);
  }
  .kyAFkr .desc {
    font-size: 0.75rem;
    height: 1.0625rem;
    line-height: 1.0625rem;
    margin: 0.25rem 0px 0px 0.875rem;
  }
  .gwUFaO {
    margin-top: 1.25rem;
  }
  .ikWSlH {
    display: flex;
    opacity: 1;
  }
  .gwUFaO .radio .is-active {
    color: rgb(67, 179, 9);
  }

  .gwUFaO .radio-item {
    margin: 0px 0.875rem;
  }
  .ikWSlH .radio-item {
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .ikWSlH .radio-item .circle {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 0 0 auto;
    width: 1rem;
    height: 1rem;
    border-radius: 0.5em;
    margin-right: 0.3em;
    border: 1px solid var(--border-1);
    box-sizing: border-box;
    background-color: var(--sidebar-card-bg);
  }
  .ikWSlH .radio-item.is-active .circle::after {
    display: block;
  }
  .ikWSlH .radio-item .circle::after {
    content: "";
    display: none;
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 0.3125rem;
    background-color: rgb(67, 179, 9);
  }

  .gwUFaO .error-txt {
    margin: 0.625rem 0px 0px 0.875rem;
    color: rgb(67, 179, 9);
    line-height: 1.125rem;
    opacity: 0;
  }
  .cBmlor:disabled.sc-iqseJM:not(.is-loading) {
    opacity: 0.5;
    cursor: default;
  }

  .jybDrO .layout .error-txt {
    margin: 0.625rem 0px 0px 2rem;
    font-size: 12px;
    color: rgb(179, 9, 9);
    line-height: 1.125rem;
    opacity: 0;
  }
  .jybDrO .layout .error-txt.show {
    opacity: 1;
  }

  .jybDrO .submit-btn {
    width: 17.75rem;
    margin: 1.125rem auto 2.5rem;
  }
  .fnKcEH.button {
    color: var(--text-5);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(67, 179, 9);
    background-image: conic-gradient(
      from 1turn,
      rgb(67, 179, 9),
      rgb(93, 219, 28)
    );
  }
  .cBmlor {
    display: block;
    width: 100%;
    border-radius: 6.25rem;
    height: 3rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
  }
  .cBmlor > .button-inner {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .gwUFaO .select-box {
    margin-top: 1.125rem;
    background: url(https://static.nanogames.io/assets/select_ball.f88756e8.png)
      0% 0% / 100% no-repeat;
    padding: 0.875rem;
  }
  .gwUFaO .select-box .simple {
    padding-bottom: 1.375rem;
  }
  .gwUFaO .random-wrap {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0px 0px 0.625rem;
  }
  .gwUFaO .random-wrap .sub-tips {
    margin: 0px 0px 0px 0.5rem;
  }

  .gwUFaO .sub-tips {
    margin: 2.125rem 0px 0.5rem 0.5rem;
  }
  .gwUFaO .random-wrap .random:hover {
    color: rgb(255, 255, 255);
    background-color: rgba(110, 120, 131, 0.5);
  }
  .gwUFaO .random-wrap .random {
    margin-left: auto;
    width: 6.5rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    border-radius: 1rem;
    background-color: rgb(78, 85, 99);
  }
  .gwUFaO .select-box .simple .box {
    flex-wrap: wrap;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  .gwUFaO .select-box .button {
    width: 2.25rem;
    height: 2.25rem;
    text-align: center;
    line-height: 2.25rem;
    border-radius: 50%;
    background-color: rgb(38, 40, 45);
    margin: 0.25rem 0.1875rem;
  }

  .cBmlor {
    display: block;
    width: 100%;
    border-radius: 6.25rem;
    height: 3rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
  }
  .gwUFaO .select-box .button.active {
    color: rgb(0, 0, 0);
    background: url(https://static.nanogames.io/assets/ball.161fa8af.png) 0% 0% /
      100% 100% no-repeat;
  }
  .gwUFaO .select-box .button:hover {
    color: rgb(255, 255, 255);
    background-color: rgba(110, 120, 131, 0.5);
  }
  .cBmlor > .button-inner {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .gwUFaO .select-box .jackpot {
    margin-top: 0.6875rem;
    padding-bottom: 0.8125rem;
  }
  .gwUFaO .sub-tips {
    margin: 2.125rem 0px 0.5rem 0.5rem;
  }
  .gwUFaO .select-box .jackpot .box {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  .gwUFaO .select-box .jackpot .box .button.active,
  .gwUFaO .select-box .jackpot .box .button:hover {
    background: url(https://static.nanogames.io/assets/jackpot_ball.23b29c5d.png)
      0% 0% / 100% 100% no-repeat;
  }
  .gwUFaO .error-txt.show {
    opacity: 1;
  }
  .gwUFaO .error-txt {
    margin: 0.625rem 0px 0px 0.875rem;
    color: rgb(67, 179, 9);
    line-height: 1.125rem;
    opacity: 0;
  }
  .cBmlor:disabled.sc-iqseJM:not(.is-loading) {
    opacity: 0.5;
    cursor: default;
  }

  .jybDrO .submit-btn {
    width: 17.75rem;
    margin: 1.125rem auto 2.5rem;
  }
  .fnKcEH.button {
    color: var(--text-5);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(67, 179, 9);
    background-image: conic-gradient(
      from 1turn,
      rgb(67, 179, 9),
      rgb(93, 219, 28)
    );
  }
  .cBmlor {
    display: block;
    width: 100%;
    border-radius: 6.25rem;
    height: 3rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
  }
  .cBmlor > .button-inner {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .kyAFkr .input-tickets .fix-layer {
    position: absolute;
    right: 0px;
    top: 2.875rem;
    z-index: 2;
    touch-action: pan-x;
    width: 200px;
    height: 2.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 0.625rem;
    background-color: rgb(33, 35, 40);
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.15) 1px 0px 7px 0px;
  }
  .kyAFkr .input-tickets .fix-layer > button:hover,
  .kyAFkr .input-tickets .fix-layer > button.active {
    color: var(--text-5);
    font-weight: 600;
    background-color: rgb(60, 64, 74);
  }
  .kyAFkr .input-tickets .fix-layer > button {
    height: 100%;
    width: 2.5rem;
    flex: 0 0 auto;
    font-size: 0.75rem;
    background-color: rgba(60, 64, 74, 0.5);
  }
  .kyAFkr .input-tickets .fix-layer .slider {
    flex: 1 1 0%;
    height: 100%;
  }

  .drag-block {
    position: absolute;
    z-index: 100;
    top: 0px;
    left: 0px;
    bottom: 0px;
    background-color: transparent;
    border-radius: 10px;
    appearance: none;
    width: 100%;
    margin: 0px;
    height: 100%;
    cursor: grab;
    -webkit-appearance: none;
  }
  .drag-block::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: 0px;
    /* Centers thumb on the track */
    background-color: #feffff;
    height: 1.5rem;
    width: 1rem;
    border-radius: 10px;
    cursor: grabbing;
  }
  .eOA-dmL {
    position: relative;
    display: flex;
    height: 0.875rem;
    overflow: hidden;
    box-sizing: content-box;
    padding: 0px 0.8125rem;
    cursor: pointer;
  }
  .kyAFkr .input-tickets .fix-layer .slider-before,
  .kyAFkr .input-tickets .fix-layer .slider-after {
    width: 86%;
    left: 7%;
    height: 0.5rem;
    margin-top: -0.25rem;
    border-radius: 0.25rem;
    background: var(--affiliate-bg);
    transform: scaleX(1) !important;
  }
  .eOA-dmL .slider-before,
  .eOA-dmL .slider-after {
    height: 2px;
    width: 98%;
    position: absolute;
    left: 1%;
    top: 50%;
    margin-top: -1px;
  }
  .eOA-dmL .slider-after {
    background-color: rgba(216, 222, 227, 0.4);
    transform-origin: left center;
  }
  .eOA-dmL .slider-handler-wrap {
    flex: 1 1 0%;
    position: relative;
    z-index: 2;
  }
 
  .kyAFkr .input-tickets .fix-layer .slider-before,
  .kyAFkr .input-tickets .fix-layer .slider-after {
    width: 86%;
    left: 7%;
    height: 0.5rem;
    margin-top: -0.25rem;
    border-radius: 0.25rem;
    background: var(--affiliate-bg);
    transform: scaleX(1) !important;
  }

  .eOA-dmL .slider-before,
  .eOA-dmL .slider-after {
    height: 2px;
    width: 98%;
    position: absolute;
    left: 1%;
    top: 50%;
    margin-top: -1px;
  }
  .eOA-dmL .slider-before {
    background-color: rgba(216, 222, 227, 0.4);
    transform-origin: right center;
  }
  .kyAFkr .input-tickets .fix-layer > button {
    height: 100%;
    width: 2.5rem;
    flex: 0 0 auto;
    font-size: 0.75rem;
    background-color: rgba(60, 64, 74, 0.5);
  }
</style>
