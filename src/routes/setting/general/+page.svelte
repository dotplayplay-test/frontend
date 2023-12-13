<script>
  import Icon from "svelte-icons-pack/Icon.svelte";
  import IoMoon from "svelte-icons-pack/io/IoMoon";
  import FaSolidSun from "svelte-icons-pack/fa/FaSolidSun";
  import BiSolidBadgeDollar from "svelte-icons-pack/bi/BiSolidBadgeDollar";
  import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
  import BsClock from "svelte-icons-pack/bs/BsClock";
  import { isLightMode } from "../../../lib/store/theme";

  let fullCurencyName = false;
  const handleFullcurrencyName = () => {
    if (!fullCurencyName) {
      localStorage.setItem("show-full-curency", true);
    } else {
      localStorage.removeItem("show-full-curency");
    }
    fullCurencyName = !fullCurencyName;
  };

  let currencySetting = false;
  const handleCurrencySettings = () => {
    currencySetting = !currencySetting;
  };

  const handleLightMode = () => {
//     is_light_mode = !is_light_mode;
//      // You can also save the user's preference in localStorage if needed
//   localStorage.setItem("is_light_mode", JSON.stringify(is_light_mode));

// // To retrieve the boolean value
// const storedValue = localStorage.getItem("is_light_mode");
// const retrievedValue = storedValue ? JSON.parse(storedValue) : false;

// console.log(retrievedValue)
    $isLightMode = !$isLightMode; // Update the store value

};


</script>

<div class={$isLightMode ? " light-mode sc-oXPCX iyNvkI" : "sc-oXPCX iyNvkI" }>
  <div class={$isLightMode ? " light-mode fullname-item" : "fullname-item"}>
    <p>Show full name of currency in crypto list</p>
    <button
      on:click={handleFullcurrencyName}
      class={`sc-giYglK hRMjrF switch ${fullCurencyName && "open"} `}
    >
      <div class={$isLightMode ? "light-dot dot" : "dot"}></div>
    </button>
  </div>
  <div class="fullname-item">
    <div>
      <p>Currency Setting</p>
      <div class={$isLightMode ? "light-grey-bg light-text local-currency" : "local-currency"}>
        <span class="coin-icon">
          <Icon
            src={BiSolidBadgeDollar}
            size="23"
            color="#E94544"
            title="rror"
          />
        </span>
        USD
      </div>
    </div>
    <button
      on:click={handleCurrencySettings}
      class={$isLightMode ? `light-gery-bg sc-giYglK hRMjrF switch ${currencySetting && "open"} ` :`sc-giYglK hRMjrF switch ${currencySetting && "open"} `}
    >
      <div class={$isLightMode ? "light-dot dot" : "dot"}></div>
    </button>
  </div>
  <div>
    <div class="dviHQs-div">
      <p>Display mode</p>
      <div class="sc-gSQFLo dprxuS theme">
        <button on:click={handleLightMode} class={$isLightMode ? "light-grey-bg theme-check" :"theme-check"}>
          <div class:is-active={!$isLightMode} class="item">
            <Icon
              src={IoMoon}
              size="23"
              color={$isLightMode ? "rgba(153, 164, 176, 0.6)" :"rgb(245, 246, 247)"}
              title="Dark"
            />
          </div>
          <div class:is-activeL={$isLightMode} class="item">
            <Icon
              src={FaSolidSun}
              size="23"
              color={$isLightMode ? "rgb(245, 246, 247)" :"rgba(153, 164, 176, 0.6)"}
              title="Light"
            />
          </div>
        </button>
        <div class="theme-word">
          <p class={$isLightMode ? "light-text" :""}>Darkmode</p>
          <p>Currently</p>
        </div>
      </div>
    </div>
    <div>
      <p>Language</p>
      <div class="sc-jJoQJp gOHquD select language-select">
        <div class={$isLightMode ? "light-grey-bg light-text select-trigger" :"select-trigger"}>
          English
          <div class="arrow">
            <Icon
              src={RiSystemArrowRightSLine}
              size="23"
              color="rgba(153, 164, 176, 0.6)"
              title="rror"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Main: English
Option 2: Bahasa Melayu
Option 3: Simplified Chinese -->
<style>
  .light-mode{
    background-color: rgb(255, 255, 255) !important;
    color: rgb(49, 55, 61) !important;
  }
  .light-grey-bg{
    background-color: rgb(245, 246, 250) !important;
  }
  .light-bg {
    background-color: rgb(255, 255, 255) !important;
  }
  .light-text {
    color: rgb(49, 55, 61) !important;
  }
  .light-dot{
    background-color: #FFF !important;
  }
  .iyNvkI > div:first-child {
    padding-top: 0px;
  }
  .iyNvkI .fullname-item {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  .iyNvkI > div {
    border-bottom: 1px solid rgba(152, 167, 181, 0.15);
    padding: 0.875rem 0px;
  }
  .iyNvkI > div p {
    margin: 0px;
    height: 1.25rem;
    line-height: 1.25rem;
  }
  .switch {
    background-color: rgb(0, 85, 255)
  }
  .hRMjrF.open {
    background-color: rgba(93, 160, 0, 0.2);
  }
  .switch.open {
    background-color: rgba(93, 160, 0, 0.2);
  }
  .hRMjrF.open .dot {
    left: 0.75rem;
    background-color: rgb(246, 0, 0);
  }
  .hRMjrF {
    width: 1.75rem;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: rgb(49, 52, 60);
    position: relative;
    cursor: pointer;
  }
  .hRMjrF .dot {
    transition: all 0.2s ease 0s;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: rgba(153, 164, 176, 0.6);
  }
  .iyNvkI .local-currency {
    width: 6.875rem;
    height: 2.5rem;
    border-radius: 1.25rem;
    margin-top: 0.875rem;
    background-color: rgba(37, 39, 46, 0.8);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(245, 246, 247);
  }
  .iyNvkI .local-currency .coin-icon {
    width: 1.5rem;
    margin-right: 1.125rem;
    margin-left: 0.625rem;
  }
  .switch {
    background-color: rgba(30, 32, 36, 0.6);
  }
  .iyNvkI .theme {
    margin-top: 0.875rem;
  }
  .iyNvkI .theme .theme-check {
    background-color: rgba(30, 32, 36, 0.6);
    border-radius: 1.25rem;
  }
  .dprxuS .theme-check {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: rgba(45, 48, 53, 0.5);
    height: 2.5rem;
    border-radius: 1.25rem;
    cursor: pointer;
  }
  .dprxuS .theme-word {
    margin-left: 0.75rem;
    font-size: 0.75rem;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .dprxuS .theme-word > p:first-child {
    font-weight: bold;
    /* color: rgb(245, 246, 247); */
  }
  .dprxuS .theme-word > p {
    margin: 0px;
    line-height: 1rem;
    height: 1rem;
    white-space: nowrap;
  }
  .iyNvkI > div:last-child {
    border-bottom: none;
  }
  .iyNvkI .select.language-select {
    width: 11.25rem;
  }
  .iyNvkI .select {
    width: 8.875rem;
    margin-top: 0.875rem;
  }
  .gOHquD {
    position: relative;
    height: 2.5rem;
    opacity: 1;
  }
  .iyNvkI .select .select-trigger {
    font-weight: bold;
    color: rgb(245, 246, 247);
    background-color: rgba(37, 39, 46, 0.8);
  }
  .gOHquD .select-trigger {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;
    height: 100%;
    cursor: pointer;
    padding: 0px 1.25rem;
    user-select: none;
    border-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
  }
  .gOHquD .select-trigger .arrow {
    width: 2.5rem;
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .dprxuS .theme-check .item {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    padding: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .iyNvkI .theme .theme-check .item.is-active {
    background-image: linear-gradient(
      to left,
      rgb(85, 89, 102),
      rgb(85, 89, 102),
      rgb(88, 174, 20)
    );
  }
  .iyNvkI .theme .theme-check .item.is-activeL {
    background-image: linear-gradient(
      to left,
      rgba(85, 89, 102, 0),
      rgba(85, 89, 102, 0.411),
      rgb(88, 174, 20)
    );
  }
  .dviHQs-div {
    border-bottom: 1px solid rgba(152, 167, 181, 0.15) !important;
    padding: 0.875rem 0px;
    margin-bottom: 0.875rem;
  }
</style>
