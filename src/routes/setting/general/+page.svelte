<script>
  import SelectionView from "$lib/components/selectionView.svelte";


  import { isLightMode } from "../../../lib/store/theme";
  import { preferredCurrency, viewInFiat } from "$lib/store/currency"

  let fullCurencyName = false;
  const handleFullcurrencyName = () => {
    if (!fullCurencyName) {
      localStorage.setItem("show-full-curency", true);
    } else {
      localStorage.removeItem("show-full-curency");
    }
    fullCurencyName = !fullCurencyName;
  };
  const handleCurrencySettings = () => {
    viewInFiat.update(v => {
      localStorage.setItem("view-in-fiat", !v);
      return !v
    });
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
  const handleCurrencySettingChanged =  (currency) => {
    preferredCurrency.set(currency);
    localStorage.setItem("preferred-currency", currency);
  }
</script>


<div class={$isLightMode ? " light-mode sc-oXPCX iyNvkI" : "sc-oXPCX iyNvkI"}>
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
      <!-- <div class={$isLightMode ? "light-grey-bg light-text local-currency" : "local-currency"}>
        
        USD
      </div> -->
      <SelectionView
        value={$preferredCurrency}
        on:onSelectionChanged={({ detail: curr }) => {
          handleCurrencySettingChanged(curr)
        }}
        items={["MYR", "SGD", "AUD", "IDR", "PHP", "VND", "CNY"]}
      >
      </SelectionView>
    </div>
    <button
      on:click={handleCurrencySettings}
      class={$isLightMode
        ? `light-gery-bg sc-giYglK hRMjrF switch ${$viewInFiat && "open"} `
        : `sc-giYglK hRMjrF switch ${$viewInFiat && "open"} `}
    >
      <div class={$isLightMode ? "light-dot dot" : "dot"}></div>
    </button>
  </div>
  <div>
    <div class="dviHQs-div">
      <p>Display mode</p>
      <div class="sc-gSQFLo dprxuS theme">
        <button
          on:click={handleLightMode}
          class={$isLightMode ? "light-grey-bg theme-check" : "theme-check"}
        >
          <div class:is-active={!$isLightMode} class="item">

          </div>
          <div class:is-activeL={$isLightMode} class="item">

          </div>
        </button>
        <div class="theme-word">
          <p class={$isLightMode ? "light-text" : ""}>Darkmode</p>
          <p>Currently</p>
        </div>
      </div>
    </div>
    <div>
      <p>Language</p>
      <div class="sc-jJoQJp gOHquD select language-select">
        <div
          class={$isLightMode
            ? "light-grey-bg light-text select-trigger"
            : "select-trigger"}
        >
          English
          <div class="arrow">

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
  .light-mode {
    background-color: rgb(255, 255, 255) !important;
    color: rgb(49, 55, 61) !important;
  }
  .light-grey-bg {
    background-color: rgb(245, 246, 250) !important;
  }
  .light-bg {
    background-color: rgb(255, 255, 255) !important;
  }
  .light-text {
    color: rgb(49, 55, 61) !important;
  }
  .light-dot {
    background-color: #fff !important;
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
    background-color: rgb(0, 85, 255);
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
    background-color: var(--card-bg-2);
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
    color: var(--text-5);
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
    background-color: var(--sidebar-card-bg);
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
    /* color: var(--text-5); */
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
    color: var(--text-5);
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
    background: var(--affiliate-bg);
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
