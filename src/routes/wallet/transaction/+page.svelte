<script>
  import Icon from "svelte-icons-pack/Icon.svelte";
  import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
  import Deposit from "./deposit.svelte";
  import Withdraaw from "./withdraaw.svelte";
  import Swap from "./swap.svelte";
  import Bill from "./bill.svelte";
  import Bonus from "./bonus.svelte";
  import { activeRouteAsset } from "./store/index";

  let activeRoutesTbas = [
    {
      id: 1,
      tabName: "Deposit",
      active: true,
    },
    {
      id: 2,
      tabName: "Withdraw",
      active: false,
    },
    {
      id: 3,
      tabName: "Swap",
      active: false,
    },
    {
      id: 4,
      tabName: "Bill",
      active: false,
    },
    {
      id: 5,
      tabName: "Bonus",
      active: false,
    },
  ];

  let activeRoutesAssets = [
    {
      id: 1,
      tabName: "All Assets",
      active: true,
    },
    {
      id: 2,
      tabName: "Complete",
      active: false,
    },
    {
      id: 3,
      tabName: "Processing",
      active: false,
    },
    {
      id: 4,
      tabName: "Fail",
      active: false,
    },
    {
      id: 5,
      tabName: "Canceled",
      active: false,
    },
  ];

  let activeRoutesAccest = [
    {
      id: 5,
      tabName: "All Assets",
      active: true,
    },
    {
      id: 1,
      tabName: "PPF",
      img: "https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png",
      active: false,
    },
    {
      id: 2,
      tabName: "USDT",
      img: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
      active: false,
    },
    {
      id: 3,
      tabName: "PPL",
      img: "https://res.cloudinary.com/dxwhz3r81/image/upload/v1697827828/ppl_logo_mxiaot.png",
      active: false,
    },
    {
      id: 4,
      tabName: "PPD",
      img: "https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828435/dpp_logo_sd2z9d.png",
      active: false,
    },
  ];

  let is_activeRoutesTbas = false;
  let activeRoutes = {};
  const handleactiveRoutesTbasSelect = (e) => {
    activeRoutesTbas.forEach((element) => {
      if (e.tabName === element.tabName) {
        element.active = true;
        activeRoutes = element;
        activeRoutesTbas = activeRoutesTbas;
      } else {
        element.active = false;
      }
    });
    is_activeRoutesTbas = !is_activeRoutesTbas;
  };
  activeRoutesTbas.forEach((element) => {
    if (element.active) {
      activeRoutes = element;
    }
  });

  let is_activeRoutesAssets = false;
  let RoutesAssets = {};
  const handleactiveRoutesAssetsSelect = (e) => {
    activeRoutesAccest.forEach((element) => {
      if (e.tabName === element.tabName) {
        activeRouteAsset.set(element);
        element.active = true;
        RoutesAssets = element;
        activeRoutesAccest = activeRoutesAccest;
      } else {
        element.active = false;
      }
    });
    is_activeRoutesAssets = !is_activeRoutesAssets;
  };

  activeRoutesAccest.forEach((element) => {
    if (element.active) {
      RoutesAssets = element;
    }
  });

  let is_activeRoutesAs = false;
  let RoutesDess = {};
  const handleactiveRoutesRoutesDess = (e) => {
    activeRoutesAssets.forEach((element) => {
      if (e.tabName === element.tabName) {
        element.active = true;
        RoutesDess = element;
        activeRoutesAssets = activeRoutesAssets;
      } else {
        element.active = false;
      }
    });
    is_activeRoutesAs = !is_activeRoutesAs;
  };

  activeRoutesAssets.forEach((element) => {
    if (element.active) {
      RoutesDess = element;
    }
  });
</script>

<div class="right-info">
  <div class="s866wzp transaction-wrap">
    <div class="s80qwti transaction-tabs">
      <div class="ui-select is-open">
        <button on:click={handleactiveRoutesTbasSelect} class="select-trigger">
          {activeRoutes.tabName}
          <div class="arrow">
            <Icon
              src={RiSystemArrowRightSLine}
              size="18"
              color="rgb(255, 255, 255)"
            />
          </div>
        </button>
        <div
          class="select-options-wrap"
          style={`top: 100%; opacity: 1; transform: none; ${
            !is_activeRoutesTbas ? `display:none` : ""
          }`}
        >
          <div class="ui-scrollview select-options len-6">
            {#each activeRoutesTbas as odio}
              <button
                on:click={() => handleactiveRoutesTbasSelect(odio)}
                class={`select-option ${odio.active ? "active" : ""}`}
                >{odio.tabName}</button
              >
            {/each}
          </div>
        </div>
      </div>
      <div class="ui-select">
        <button
          on:click={handleactiveRoutesAssetsSelect}
          class="select-trigger"
        >
          <img
            src={RoutesAssets.img && RoutesAssets.img}
            class="coin-icon"
            style={` ${
              RoutesAssets.tabName !== "All Assets" ? "" : "display: none;"
            }`}
            alt=""
          />
          {RoutesAssets.tabName}
          <div class="arrow active">
            <Icon
              src={RiSystemArrowRightSLine}
              size="18"
              color="rgb(255, 255, 255)"
            />
          </div>
        </button>
        <div
          class="select-options-wrap"
          style={`top: 100%; opacity: 1; transform: none; ${
            !is_activeRoutesAssets ? `display:none` : ""
          }`}
        >
          <div class="ui-scrollview select-options len-6">
            {#each activeRoutesAccest as ksuey}
              <button
                on:click={() => handleactiveRoutesAssetsSelect(ksuey)}
                class={`select-option ${ksuey.active ? "active" : ""}`}
              >
                <img src={ksuey.img} class="coin-icon" alt="" />
                {ksuey.tabName}
              </button>
            {/each}
          </div>
        </div>
      </div>
      <!-- <div class="ui-select date-select">
      <div class="select-trigger">Past 60 days<div class="arrow ">
         <Icon src={RiSystemArrowRightSLine}  size="18"  color="rgb(255, 255, 255)"   />
      </div>
   </div>
            </div> -->
      {#if activeRoutes.tabName === "Deposit" || activeRoutes.tabName === "Withdraw"}
        <div class="ui-select">
          <button on:click={handleactiveRoutesRoutesDess} class="select-trigger"
            >{RoutesDess.tabName}
            <div class="arrow">
              <Icon
                src={RiSystemArrowRightSLine}
                size="18"
                color="rgb(255, 255, 255)"
              />
            </div>
          </button>
          <div
            class="select-options-wrap"
            style={`top: 100%; opacity: 1; transform: none; ${
              !is_activeRoutesAs ? `display:none` : ""
            }`}
          >
            <div class="ui-scrollview select-options len-6">
              {#each activeRoutesAssets as ueys}
                <button
                  on:click={() => handleactiveRoutesRoutesDess(ueys)}
                  class={`select-option ${ueys.active ? "active" : ""}`}
                  >{ueys.tabName}</button
                >
              {/each}
            </div>
          </div>
        </div>
      {/if}
    </div>
    {#if activeRoutes.tabName === "Deposit"}
      <Deposit />
    {:else if activeRoutes.tabName === "Withdraw"}
      <Withdraaw />
    {:else if activeRoutes.tabName === "Swap"}
      <Swap />
    {:else if activeRoutes.tabName === "Bill"}
      <Bill />
    {:else}
      <Bonus />
    {/if}
  </div>
</div>

<style>
  .right-info {
    padding: 0;
    background-color: transparent;
  }

  .ui-select .coin-icon {
    width: 1rem;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
    margin-right: 0.5rem;
  }

  .s80qwti {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-bottom: 2rem;
  }

  .ui-select .coin-icon {
    width: 1rem;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
    margin-right: 0.5rem;
  }

  .ui-select {
    height: 3rem;
  }

  .s80qwti .ui-select {
    margin-right: 0.625rem;
    min-width: 9.375rem;
  }

  .ui-select {
    position: relative;
  }

  .ui-select .select-trigger {
    background-color: #2d3035;
    width: 100%;
  }

  .ui-select .select-trigger {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
    height: 100%;
    cursor: pointer;
    padding: 0 1.25rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-radius: 12px;
  }

  .ui-select .select-trigger .arrow {
    width: 2.5rem;
    height: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
  }

  .ui-select.is-open .select-options-wrap {
    pointer-events: auto;
  }

  .ui-select .select-options-wrap {
    position: absolute;
    padding: 0.3125rem 0;
    width: 100%;
    left: 0;
    z-index: 2;
    transition: all 0.5s ease;
  }

  .ui-select .select-options {
    border-radius: 2px;
    padding: 0.125rem 0.375rem;
    background-color: #17181b;
    box-shadow: 0 0 8px #00000024;
    height: auto;
    max-height: 16.25rem;
  }

  .ui-scrollview {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    -webkit-flex: 1 1 1px;
    -ms-flex: 1 1 1px;
    flex: 1 1 1px;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-y;
    overscroll-behavior: contain;
  }

  .ui-select .select-options:not(.len-1) > .active {
    border-color: #3bc11766;
  }

  .ui-select .select-option {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    padding: 0 0.625rem;
    font-size: 0.875rem;
    height: 2rem;
    margin: 0.25rem 0;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
    white-space: nowrap;
  }

  .ui-select .select-option:hover {
    background-color: rgba(45, 48, 53, 0.4);
  }
</style>
