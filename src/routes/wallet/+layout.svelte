<script>
/** @type {import('./$types').PageLoad} */
export let data;

</script>

<div class="s1orvhr wallet-page page-max-width-wrap">
   <div class="title ttu">Wallet</div>
   <div class="content-area bg-transparent">
      <div class="menyu m-fixbot">
         <a href="/wallet/balance"  class={`${data.route === "/wallet/balance" ? "is-active" : ""}`}>
            <!-- <svg class="s1ff97qc icon">
               <use xlink:href="/assets/symbol-defs.ef6a79c4.svg#icon_Wallet"></use>
            </svg> -->
            <div class="name" title="Balance">Balance</div>
         </a>
         <a href="/wallet/deposit" keep-scroll-position="true" class={` ${data.route === "/wallet/deposit" ? "is-active" : ""}`}>
            <!-- <svg class="s1ff97qc icon">
               <use xlink:href="/assets/symbol-defs.ef6a79c4.svg#icon_Deposit"></use>
            </svg> -->
            <div class="name" title="Deposit">Deposit</div>
         </a>
         <a href="/wallet/withdraw" keep-scroll-position="true" class={`${data.route === "/wallet/withdraw" ? "is-active" : ""}`}>
            <!-- <svg class="s1ff97qc icon">
               <use xlink:href="/assets/symbol-defs.ef6a79c4.svg#icon_WithDraw"></use>
            </svg> -->
            <div class="name" title="Withdraw">Withdraw</div></a>
            <a href="/wallet/swap" keep-scroll-position="true" class={` ${data.route === "/wallet/swap" ? "is-active" : ""}`}>
               <!-- <svg class="s1ff97qc icon">
                  <use xlink:href="/assets/symbol-defs.ef6a79c4.svg#icon_Swap"></use>
               </svg> -->
               <div class="name" title="DPP Swap">DPP Swap</div>
            </a>
            <div class="line"></div>
            <a href="/wallet/transaction" keep-scroll-position="true" class={` ${data.route === "/wallet/transaction" ? "is-active" : ""}`}>
               <!-- <svg class="s1ff97qc icon">
                  <use xlink:href="/assets/symbol-defs.ef6a79c4.svg#icon_Transaction"></use>
               </svg> -->
               <div class="name" title="Transaction">Transaction</div>
            </a>
         </div>
         <div class="right-info">
            <slot/>
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
    border-radius: .25rem;
    margin-right: 1.25rem;
    height: auto;
    max-width: 220px;
    width: 20%;
    -webkit-align-self: flex-start;
    -ms-flex-item-align: start;
    align-self: flex-start;
}
.s1orvhr .content-area .menyu>a.is-active {
    background-color: rgba(30,32,36,.4);
    font-weight: 700;
    color: #f5f6f7;
}
.s1orvhr .content-area .menyu>a {
    display: block;
    height: 2.75rem;
    border-radius: .25rem;
    padding-left: 1rem;
    line-height: 2.75rem;
    -webkit-text-decoration: none;
    text-decoration: none;
    margin-bottom: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
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
    border-radius: .25rem;
    padding: 1.5rem 2rem 2rem;
}
.s1orvhr .content-area.bg-transparent .right-info {
    padding: 0;
    background-color: transparent;
}
</style>