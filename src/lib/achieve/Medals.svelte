<script>
</script>

<div>
  <div class="medals">
    {#each [0, 5, 10, 15] as medal}
      <div class="single">
        {#if medal === 0}
          <img src="achieve/start.png" alt="medal" />
        {:else}
          <img src="achieve/box.png" alt="medal" />
        {/if}
        <span>{medal}</span>
      </div>
    {/each}
    <div class="single">
      <img src="achieve/box.png" alt="medal" />
      <span>max</span>
    </div>
  </div>
  <div class="progress">
    <div class="bar">
      <div class="progress-bar"></div>
    </div>
  </div>
</div>

<style>
  .medals {
    display: flex;
    justify-content: space-between;
  }
  .single {
    padding: 0.75rem;
    flex-shrink: 0;
    background: var(--affiliate-bg);
    border-radius: 12px;
    display: flex;
    flex-grow: 1;
    font-weight: 600;
    font-size: 12px;
    flex-direction: column;
    align-items: center;
  }
  .single + div {
    margin-left: 10px;
  }
  .single img {
    height: 3rem;
    cursor: pointer;
  }
  .single span {
    margin-top: 5px;
  }
  .progress {
    width: 100%;
    height: 40px;
    background-color: inherit;
    border-radius: 30px;
    box-sizing: border-box;
    border: 15px solid var(--affiliate-bg);
    margin-top: 10px;
  }
  .bar {
    width: 10%;
    height: 100%;
    border-radius: 30px;
    background-color: rgb(67, 179, 9);
    position: relative;
  }
  .progress-bar {
    width: 10px;
    height: 10px;
    position: absolute;
    top: -10px;
    right: 5px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid rgb(67, 179, 9);
  }
  @media screen and (max-width: 650px) {
    .bar {
      border-radius: 15px;
    }
    .progress {
      height: 30px;
      border-radius: 20px;
      margin-top: 10px;
      border: 10px solid var(--affiliate-bg);
    }
    .single {
      padding: 10px;
      font-size: 10px;
    }
    .single img {
      height: 1.8rem;
    }
  }
</style>
