<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";

</script>
  <div class="right-info">
  <div class="tabs-view" style="transform: none;">
     <div class="limit-width">
          <div class="bs9gc4t">
              <div class="swm8knq">
                  <div class="label">Withdraw Currency</div>
                  <div class="ui-select wallet-balance-input-wrap">
                      <div class="select-trigger">
                          <img class="coin-icon" alt="" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png">
                          <span class="alias">BNB</span>
                          <div class="balance">Balance</div>
                          <div class="amount">0</div>
                          <div class="arrow ">
                            <Icon src={RiSystemArrowRightSLine}  size="18"  color="rgb(255, 255, 255)"   />
                          </div>
                      </div>
                  </div>
              </div>

            <div class="sq07zth page-margin">
                <div class="label">Choose Network</div>
                <div class="ui-select select-tokens">
                    <div class="select-trigger">
                        ERC20
                        <div class="arrow ">
                            <Icon src={RiSystemArrowRightSLine}  size="18"  color="rgb(255, 255, 255)"   />
                          </div>
                    </div>
                </div>
            </div>

            <div class="ui-input page-margin">
                <div class="input-label">
                    <div>Withdrawal Address</div>
                </div>
                <div class="input-control">
                    <input type="text" placeholder="Fill in carefully according to the specific currency" value="">
                </div>
            </div>

            <div class="ui-input s8xfgc0 page-margin">
                <div class="input-label">
                    <div style="width: 100%; display: flex; align-items: center; justify-content: space-between;">
                        <div style="text-transform: capitalize;">Withdraw amount</div>
                        <div style="font-size: 12px;">Min: 24.843575</div>
                    </div>
                </div>
                <div class="input-control">
                    <input type="text" value="0.0000"></div>
                </div>
            </div>
            <div class="unlock-balance s13ylein">
                <div class="available unlock-item">
                    <div class="label">Available:</div>
                    <div class="value">$0.00</div>
                </div>
            </div>

            <div class="withdraw-info">
                <div class="item">
                    <div class="label">Withdraw amount:</div>
                    <div class="val">
                        <div class="cy2znlo coin notranslate">
                            <div class="amount amount-str"> 0.00</div>
                        </div>
                        USDT
                    </div>
                </div>
                <div class="item">
                    <div class="label">Fee:<button>
                        <!-- <svg class="s1ff97qc icon icon-help">
                            <use xlink:href="/assets/symbol-defs.ef6a79c4.svg#icon_Help"></use>
                        </svg> -->
                    </button>
                </div>
                <div class="val">4.843575 USDT</div>
            </div>
            <div class="item">
                <div class="label">Total withdrawal amount:</div>
                <div class="val cl-primary">
                    <div class="cy2znlo coin notranslate">
                        <div class="amount amount-str"> 0.00</div>
                    </div> USDT</div>
                </div>
            </div>

            <div class="bjruw94">
                <p><span class="cl-primary">Notice:</span> For security purposes, large or suspicious withdrawal may take 1-6 hours for audit process. We appreciate your patience!</p>
            </div>

            <button class="ui-button button-normal s-conic submit-btn">
                <div class="button-inner">Confirm</div>
            </button>
     </div>
  </div>
</div>
<style>
.limit-width {
    max-width: 500px;
}
.swm8knq .label {
    margin-bottom: 0.75rem;
    line-height: .875rem;
    font-size: .875rem;
} 
.ui-select {
    height: 3rem;
}
.ui-select .select-trigger {
    background-color: #1E2024;
}
.swm8knq .select-trigger .coin-icon {
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 1rem;
    margin-left: -0.1875rem;
}
.swm8knq .select-trigger .alias {
    font-size: 1rem;
    color: #fff;
}
.swm8knq .select-trigger .balance {
    margin-left: auto;
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
    border-radius: var(--border-radius);
    background-color: #17181b;
}
.swm8knq .select-trigger .amount {
    color: #fff;
    margin-right: 1.25rem;
    margin-left: 0.3125rem;
}
.right-info {
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
    border-radius: var(--border-radius);
    padding: 1.5rem 2rem 2rem;
}

.page-margin {
    margin-top: 1.5rem;
}
.sq07zth .label {
    margin-bottom: 0.75rem;
    line-height: .875rem;
    font-size: .875rem;
}
.s1orvhr .ui-input .input-label {
    margin-left: 0;
}
.ui-input .input-label {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0 0 0.375rem;
}
.ui-input .input-control {
    height: 3rem;
    background-color: #1E2024;
    border: none;
}
.ui-input .input-control input {
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0;
    border: none;
    background-color: transparent;
    color: #f5f6f7;
}
.ui-input .input-control input::placeholder {
    color: #737a82;
}
.ui-input .input-control {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: var(--border-radius);
    border: 1px solid #2d3035;
    background-color: #222328;
    height: 3.5rem;
    padding: 0 1.25rem;
    opacity: 1;
}
.s13ylein {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-top: 0.5rem;
}
.s13ylein .unlock-item {
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
}
.s13ylein .label {
    margin-right: 0.1875rem;
    font-size: 14px;
    font-family: "poppins";
}
.s13ylein .value {
    font-weight: 600;
    color: #fff;
    font-family: "poppins";
}
 .withdraw-info {
    background-color: #26282C;
    border-radius: var(--border-radius);
    width: 100%;
    margin-top: 1.375rem;
}
 .withdraw-info .item {
    padding: 0.375rem 0.75rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.withdraw-info .item .val {
    color: #fff;
    font-weight: 800;
}
.withdraw-info .item .cl-primary {
    color: var(--primary-color);
}
.cy2znlo {
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    vertical-align: middle;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    white-space: nowrap;
}
.bjruw94 {
    background: rgba(58,201,72,.1);
    padding: 0.125rem 0.75rem;
    border-radius: var(--border-radius);
    margin-top: 0.75rem;
    font-size: .875rem;
    line-height: 1rem;
    color: #fff;
}
p {
    margin: 0.8em 0;
}
.ui-button.s-conic {
    color: #fff;
    background-color: #1d803ab3;
    background-image: conic-gradient(from 1turn,rgba(88,175,16,1),rgba(29,128,58,1));
}
.submit-btn {
    min-width: 14rem;
    width: auto;
    margin: 2rem auto;
}
.ui-button {
    --3xr1hu: rgba(107,113,128,.8);
    display: block;
    width: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-radius: 30px;
    height: 3rem;
    font-weight: 700;
    cursor: pointer;
    -webkit-transition: -webkit-transform .2s cubic-bezier(.36,.66,.04,1);
    -webkit-transition: transform .2s cubic-bezier(.36,.66,.04,1);
    transition: transform .2s cubic-bezier(.36,.66,.04,1);
}
.ui-button>.button-inner {
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
    width: 100%;
    height: 100%;
}
</style>