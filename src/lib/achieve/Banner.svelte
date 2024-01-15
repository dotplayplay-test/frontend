<script>
  import { goto } from "$app/navigation";

  const medals = [
    "achieve_1.webp",
    "achieve_2.webp",
    "achieve_3.png",
    "achieve_4.webp",
    "achieve_5.webp",
    "achieve_6.png",
    "achieve_7.webp",
    "achieve_8.webp",
    "achieve_10.webp",
    "achieve_11.webp",
    "achieve_12.webp",
    "achieve_13.webp",
    "achieve_14.webp",
    "achieve_15.webp",
    "achieve_16.webp",
    "achieve_17.webp",
    "achieve_18.webp",
    "achieve_19.webp",
  ];
</script>

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
        class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Arrow"></use></svg
      >
    </button>
  </div>
  <div class="inner">
    <div class="medals">
      {#each medals as medal}
        <div class="medal-item img-locked">
          <img src="/achieve/{medal}" alt={medal} />
        </div>
      {/each}
    </div>
    <div class="footer">
      <div class="percent">
        <div class="bar">
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
  @media only screen and (max-width: 1000px) {
    .box {
      grid-template-columns: 1fr;
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  .text-box {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media only screen and (max-width: 1000px) {
    .text-box {
      max-width: 100%;
    }
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
  @media only screen and (max-width: 1000px) {
    .text-box {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
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
  .img-locked {
    opacity: 0.5;
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
</style>
