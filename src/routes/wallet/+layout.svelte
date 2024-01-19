<script>
  /** @type {import('./$types').PageLoad} */
  export let data;
</script>

<div class="s1orvhr wallet-page page-max-width-wrap">
  <div class="title ttu">Wallet</div>
  <div class="content-area bg-transparent">
    <div class="menyu m-fixbot">
      <a
        href="/wallet/balance"
        class={`${
          data.route === "/wallet/balance" ? "is-active" : ""
        } menu-item`}
      >
        <svg class="s1ff97qc icon">
          <use xlink:href="/swap/symbol-defs.ef6a79c4.svg#icon_Wallet"></use>
        </svg>
        <div class="name" title="Balance">Balance</div>
      </a>
      <a
        href="/wallet/deposit"
        keep-scroll-position="true"
        class={` ${
          data.route === "/wallet/deposit" ? "is-active" : ""
        } menu-item`}
      >
        <svg class="s1ff97qc icon">
          <use xlink:href="/swap/symbol-defs.ef6a79c4.svg#icon_Deposit"></use>
        </svg>
        <div class="name" title="Deposit">Deposit</div>
      </a>
      <a
        href="/wallet/withdraw"
        keep-scroll-position="true"
        class={`${
          data.route === "/wallet/withdraw" ? "is-active" : ""
        } menu-item`}
      >
        <svg class="s1ff97qc icon">
          <use xlink:href="/swap/symbol-defs.ef6a79c4.svg#icon_WithDraw"></use>
        </svg>
        <div class="name" title="Withdraw">Withdraw</div></a
      >
      <a
        href="/wallet/swap"
        keep-scroll-position="true"
        class={` ${data.route === "/wallet/swap" ? "is-active" : ""} menu-item`}
      >
        <svg class="s1ff97qc icon"
          ><use xlink:href="/swap/symbol-defs.ef6a79c4.svg#icon_Swap"
          ></use></svg
        >
        <div class="name" title="DPP Swap">DPP Swap</div>
      </a>
      <div class="line"></div>
      <a
        href="/wallet/transaction"
        keep-scroll-position="true"
        class={` ${
          data.route === "/wallet/transaction" ? "is-active" : ""
        } menu-item`}
      >
        <svg class="s1ff97qc icon">
          <use xlink:href="/swap/symbol-defs.ef6a79c4.svg#icon_Transaction"
          ></use>
        </svg>
        <div class="name" title="Transaction">Transaction</div>
      </a>
    </div>
    <div class="right-info">
      <slot />
    </div>
  </div>
</div>

<style>
  .page-max-width-wrap {
    width: 100%;
    margin-top: 10px;
    padding: 0 40px;
    max-width: 1430px;
  }
  .s1orvhr .title {
    font-size: 1.125rem;
    color: #ffff;
    margin-bottom: 0.75rem;
    font-weight: 800;
    margin-top: 50px;
  }
  .s1orvhr .content-area {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  /* .s1orvhr .content-area.bg-transparent .right-info {
    padding: 0;
    background-color: transparent;
} */
  .s1orvhr .content-area .menyu {
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
    padding: 1rem 0.625rem;
    background-color: #31343c;
    border-radius: 0.25rem;
    margin-right: 1.25rem;
    height: auto;
    max-width: 220px;
    width: 20%;
    -webkit-align-self: flex-start;
    -ms-flex-item-align: start;
    align-self: flex-start;
  }
  .s1orvhr .content-area .menyu > a.is-active {
    background-color: rgba(30, 32, 36, 0.4);
    font-weight: 700;
    color: #f5f6f7;
  }
  .s1orvhr .content-area .menyu > a {
    height: 2.75rem;
    border-radius: 0.25rem;
    padding-left: 1rem;
    line-height: 2.75rem;
    text-decoration: none;
    margin-bottom: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
  }
  .s1orvhr .content-area .menyu .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .s1orvhr .content-area .right-info {
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-left: 0.25rem;
    background-color: #31343c;
    border-radius: 0.25rem;
    padding: 1.5rem 2rem 2rem;
  }
  .s1orvhr .content-area.bg-transparent .right-info {
    padding: 0;
    background-color: transparent;
  }
  .icon {
    height: 20px;
    overflow: hidden;
    width: 20px;
    fill: #cdcdcdcc;
    margin-right: 10px;
    overflow: hidden;
  }
  .is-active .icon {
    fill: #fff;
  }

  @media screen and (max-width: 650px) {
    .page-max-width-wrap {
      padding: 0;
    }
    .content-area.s-10hdcrst2DyS.s-10hdcrst2DyS {
      flex-direction: column;
    }
    .content-area .menyu.s-10hdcrst2DyS.s-10hdcrst2DyS {
      width: 100%;
      max-width: 100%;
      display: flex;
      padding: 0;
    }
    .content-area .menyu.s-10hdcrst2DyS.s-10hdcrst2DyS {
      margin-right: 0;
    }
    .content-area .right-info.s-10hdcrst2DyS.s-10hdcrst2DyS {
      margin-left: 0;
    }
    .menyu {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      margin: 0;
    }

    .s1orvhr .content-area .menyu > a {
      height: auto;
      flex-grow: 1;
      font-size: 10px;
      justify-content: center;
      flex-direction: column;
      padding: 10px 0;
    }
    .menyu > a {
      margin-bottom: 0 !important;
    }
    .title {
      padding: 12px;
      padding-top: 20px;
    }
    .icon {
      display: grid;
      place-content: center;
      padding: 0;
      margin: 0;
    }
    .name {
      padding: 0;
      margin: 0;
      margin-top: 5px;
      line-height: normal;
    }
  }
</style>
