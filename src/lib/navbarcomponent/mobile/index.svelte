<!-- <div class="sc-gjNHFA jlttqa wallet-enter">
    <div class="sc-fmciRz LQlWw">
        <button on:click={()=>handleCoinsDrop("open")} class="sc-iFMAIt icGouR">
            <div class="sc-eXlEPa boxpOO">
                <img class="coin-icon" alt="" src={$default_Wallet.coin_image}>
                <span class="currency">{$default_Wallet.coin_name}</span>
                <Icon src={RiSystemArrowDropDownLine}  size="18"  color="rgb(171, 182, 194)" className="custom-icon" title="arror" />
            </div>
            <div class="sc-Galmp erPQzq coin notranslate balance">
                <div class="amount">
                    <span class="amount-str">0.<span class="suffix">00000000</span></span>
                </div>
            </div>
        </button>

        <button on:click={()=> goto("wallet/deposit")} class="sc-iqseJM sc-bqiRlB cBmlor eWZHfu button button-normal sc-iqVWFU fGPfpD">
            <div class="button-inner">
                <span class="wallet-icon">
                    <Icon src={BiSolidWallet}  size="18"  color="rgb(255, 255, 255)"  title="arror" /> </span>
                <span>Wallet</span>
            </div>
        </button>
    </div>
    {#if isCoinDrop}
    <Coins on:coinDefault={handleCoinSelect} />
    {/if}
</div>
<div class="sc-gnnDb fhlUmF">
    <div class="user-wrap">
        <a href="/user/profile/505090">
            <img class="avatar" alt="" src="https://img2.nanogames.io/avatar/505090/s?t=1692755604086">
        </a>
        <button on:click={handleUserProfile} class="svg">
            <span class="na-menu"><Icon src={CgMenuCheese}  size="18"   color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" /></span>
            {#if userProfile}
            <Navprofile />
            {/if}
        </button>
    </div>
</div> -->