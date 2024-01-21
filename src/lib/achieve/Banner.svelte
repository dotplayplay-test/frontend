<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  import { medals, earnedMedals, medalProgress } from "$lib/store/medal";
  import { handleAuthToken } from "$lib/store/routes";

  import { fetchMedals } from "./actions";

  onMount(() => {
    init();
  });

  let isLoading = false;

  const init = async () => {
    try {
      isLoading = true;

      $medals = await fetchMedals({
        token: $handleAuthToken,
      });

      $earnedMedals = $medals.filter((medal) => medal.hasEarned).length;
      $medalProgress = ($earnedMedals / $medals.length) * 100 + "%";

      isLoading = false;
    } catch (err) {
      console.log(err.message);
      isLoading = false;
    }
  };
</script>

{#if isLoading}
  <div></div>
{:else}
  <div class="box">
    <div class="text-box">
      <div>
        <h3 class="title">Master Medals</h3>
        <p class="desc">Witness every step of your becoming a Master</p>
      </div>
      <button on:click={() => goto("/achieve")} class="details">
        <span> Details </span>
        <svg
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="sc-gsDKAQ hxODWG icon"
          ><use xlink:href="#icon_Arrow"></use></svg
        >
      </button>
    </div>
    <div class="inner">
      <div class="medals">
        {#each $medals as medal}
          <div
            class="medal-item img-locked"
            style={`opacity: ${medal.hasEarned ? 1 : 0.4};`}
          >
            <img src="/achieve/{medal?.src}" alt={medal?.name} />
          </div>
        {/each}
      </div>
      <div class="footer">
        <div class="percent">
          <div class="bar">
            <div class="progress" style={"width:" + $medalProgress}></div>
            <div class="tip-wrap">
              {#each [0, 5, 10, 15] as point}
                <div class="pointer">
                  <span class="num">{point}</span>
                  <span class="type">Medals</span>
                </div>
              {/each}
              <div class="pointer">Max</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .box {
    border-radius: 12px;
    display: grid;
    height: 220px;
    grid-template-columns: 0.4fr 1fr;
    border-radius: 1.25rem;
    overflow: hidden;
    padding: 1.5rem 1.25rem;
    background-image: linear-gradient(
      98deg,
      rgb(17, 218, 138) -39%,
      rgb(49, 52, 60) 94%
    );
    color: rgb(255, 255, 255);
    font-size: 0.875rem;
    margin: 1rem 0px;
  }
  .progress {
    height: 100%;
    border-radius: 12px;
    position: absolute;
    background-color: red;
  }
  .text-box {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .text-box::before {
    content: "";
    position: absolute;
    top: -1.25rem;
    left: 13.125rem;
    width: 7.75rem;
    height: 7.75rem;
    background: url("/achieve/circle-medal.png") center center / cover no-repeat;
  }
  .title {
    font-size: 1.5rem;
    line-height: normal;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
  }
  .desc {
    color: rgb(255, 255, 255);
    font-size: 0.875rem;
    max-width: 200px;
  }
  .details {
    display: flex;
    align-items: center;
    font-weight: bold;
  }
  .details span {
    color: rgb(255, 255, 255);
    font-size: 0.875rem;
  }
  .icon {
    width: 0.875rem;
    height: 0.875rem;
    fill: rgb(105, 179, 1);
    margin-left: 0.375rem;
  }
  .medals {
    flex-grow: 1;
    overflow: hidden;
  }
  .inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: fit-content;
  }
  .medals {
    display: flex;
    overflow: auto;
  }
  .medal-item {
    flex: 0 0 4.375rem;
    margin-right: 1.125rem;
  }
  .medal-item img {
    width: 100%;
    position: relative;
    z-index: 2;
  }

  .percent {
    padding-top: 1.25rem;
  }
  .bar {
    height: 0.5rem;
    width: 100%;
    border-radius: 0.25rem;
    background: rgba(36, 38, 27, 0.3);
    position: relative;
  }
  .num {
    color: white;
  }
  .type {
    color: rgba(152, 167, 181, 0.8);
    margin-left: 0.25rem;
  }
  .tip-wrap {
    position: absolute;
    top: -1.25rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.75rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    -webkit-box-align: center;
    align-items: center;
  }
  @media only screen and (max-width: 1000px) {
    .box {
      grid-template-columns: 1fr;
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .text-box {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      max-width: 100%;
    }
  }
</style>
