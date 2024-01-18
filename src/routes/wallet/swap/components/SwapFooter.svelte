<script>
  export let from;
  export let to;
  export let conversionRate;
</script>

{#if !from || !to}
  <div class="head">
    <p>Real Money: <strong>0 USD</strong></p>
  </div>
{:else}
  <div class="footer">
    <div class="head">
      <p>Real Money: <strong>0 {from?.coin?.coin_name}</strong></p>
      <p>Bonus Money: <strong>0 {from?.coin?.coin_name}</strong></p>
    </div>
    {#if conversionRate !== 0}
      <div class="box">
        <p>
          1 {from?.coin?.coin_name} ≈ {conversionRate}
          {to?.coin?.coin_name}
        </p>
      </div>
    {/if}
    <div class="box">
      <div class="result-box">
        <div>Estimated time*</div>
        <div>Seconds</div>
      </div>
      <div class="result-box">
        <div>Swap fee:</div>
        <div>0.00000000 {from?.coin?.coin_name}</div>
      </div>
    </div>
  </div>
{/if}

<style>
  .footer {
    font-size: 0.875rem;
  }
  .head {
    padding: 12px 0;
    display: flex;
    justify-content: space-between;
  }
  .box {
    width: 100%;
    background: #1e202466;
    padding: 12px;
    border-radius: 2px;
    color: #fff;
  }
  .result-box {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 650px) {
    .footer {
      font-size: 12px;
    }
  }
</style>
