<script>
  import Icon from "svelte-icons-pack/Icon.svelte";
  import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
  import BiMedal from "svelte-icons-pack/bi/BiMedal";

  import { goto } from "$app/navigation";
  import { medals, earnedMedals } from "$lib/store/medal";
</script>

<div class="sc-gXRojI sc-cKVNtL bRYT JQLBl self">
  <div class="module-name">
    <span class="sc-gsDKAQ hxODWG icon icon-name">
      <Icon
        src={BiMedal}
        size="30"
        color="rgba(153, 164, 176, 0.8)"
        className="sc-gsDKAQ hxODWG icon right right-fold"
      />
    </span>
    Medals
    <div class="total">{$earnedMedals}</div>
    <button on:click={() => goto("/achieve")} class="detail-button">
      Details
      <Icon
        src={RiSystemArrowRightSLine}
        size="30"
        color="rgba(153, 164, 176, 0.8)"
        className="sc-gsDKAQ hxODWG icon right right-fold"
      />
    </button>
  </div>
  <div class="content">
    <div class="scroll">
      {#each $medals as medal}
        <div class="item">
          <img
            style="opacity: {medal?.hasEarned ? 1 : 0.5};"
            src="/achieve/{medal?.src}"
            alt=""
            class="img locked"
          />
        </div>
      {/each}
    </div>
  </div>
</div>
