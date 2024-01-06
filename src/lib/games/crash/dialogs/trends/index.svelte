<script context="module">
  import { connect } from "svelte-mobx";
</script>

<script>
  const { autorun } = connect();
  import TrendBallDrawer from "../../logics/TrendBallDrawer";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
  import { createEventDispatcher, onMount } from "svelte";
  import Draggable from "../../components/draggable.svelte";
  import { crashGame } from "../../store";
  let scrollTimeout;
  const oddsEngine = new TrendBallDrawer();
  const dispatch = createEventDispatcher();
  const handleClose = () => {
    dispatch("close", 5);
  };

  $: dotsContainer = null;
  $: renderedDots = [];
  function renderDots(history) {
    const oddsValues = history.slice(-192).map(({ odds }) => {
      if (odds < 2) return 1;
      if (odds < 10) return 2;
      return 3;
    });

    renderedDots = oddsEngine.render(oddsValues, 6, 32);
    console.log("Dots ", renderedDots);
  }
  $: {
    const game = $crashGame;
    if (game) {
      autorun(() => {
        renderDots(game.history);

        if (dotsContainer) {
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            const { scrollLeft, scrollWidth } = dotsContainer;
            if (scrollLeft === 0 || scrollLeft > 350) {
              dotsContainer.scrollTo(scrollWidth, 0);
            }
          }, 100);
        }
      });
    }
  }
  onMount(() => {
    renderDots($crashGame?.history || []);
  });
</script>

<div id="main">
  <Draggable>
    <div
      class="sc-dJjYzT JLcsN dragpop"
      style="transform: translate3d(468.633px, 191.146px, 0px);"
    >
      <div class="dragpop-title">Trends</div>
      <button on:click={() => handleClose()} class="dragpop-close hover">
        <Icon
          src={IoCloseSharp}
          size="23"
          color="rgba(153, 164, 176, 0.6)"
          className="custom-icon"
          title="arror"
        />
      </button>
      <div class="dragpop-content">
        <div class="sc-iJCbQK liaPil">
          <div class="dots-wrap" bind:this={dotsContainer}>
            <div class="dots">
              {#each renderedDots as dot, index (`${index}_${dot}`)}
                <div class="sc-fSDTwv grKOWb dot type-{dot}"></div>
              {/each}
            </div>
          </div>
          <button class="sc-gDGHff cEhaBs">
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="sc-gsDKAQ hxODWG icon help-ico"
            >
              <use xlink:href="#icon_Help"></use>
            </svg>
            <div>Understanding Trend Chart</div>
          </button>
        </div>
      </div>
    </div>
  </Draggable>
</div>

<div class="mobile">
  <div class="sc-dJjYzT dcGdSd">
    <div class="dragpop-content">
      <div class="sc-iJCbQK liaPil">
        <div class="dots-wrap">
          <div class="dots">
            {#each renderedDots as dot, index (`${index}_${dot}`)}
              <div class="sc-fSDTwv itetCR dot type-{dot}"></div>
            {/each}
          </div>
        </div>
        <button class="sc-bXRjm kFDPAv">
          <svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="sc-gsDKAQ hxODWG icon help-ico"
            ><use xlink:href="#icon_Help"></use>
          </svg>
          <div>Understanding Trend Chart</div>
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  @media only screen and (min-width: 650px) {
    .JLcsN {
      position: fixed;
      z-index: 110;

      min-width: 12.5rem;
      min-height: 12.5rem;
      border-radius: 1.25rem;
      background-color: rgb(23, 24, 27);
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0.25rem 0.5rem 0px;
    }
    .JLcsN .dragpop-title {
      flex: 1 1 0%;
      height: 3.125rem;
      line-height: 3.125rem;
      font-weight: bold;
      font-size: 1rem;
      color: rgb(245, 246, 247);
      text-align: center;
      touch-action: none;
      user-select: none;
      cursor: grab;
    }
    .JLcsN .dragpop-close {
      position: absolute;
      right: 0px;
      top: 0px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      width: 3.125rem;
      height: 3.125rem;
    }
    .dragpop-content .sc-iJCbQK {
      padding-top: 0px;
    }
    .liaPil {
      width: 430px;
      padding: 1rem;
    }
    .liaPil .dots-wrap {
      overflow: auto;
    }
    .cEhaBs {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
    }
    .liaPil .dots {
      width: 800px;
      display: grid;
      margin-bottom: 1rem;
      gap: 1px;
      grid-template-columns: repeat(32, 1fr);
    }
    .grKOWb {
      background-color: rgb(45, 48, 53);
      border-radius: 0.1875rem;
      position: relative;
    }
    .grKOWb::before {
      content: "";
      display: block;
      padding-top: 100%;
    }
    .grKOWb.type-1::after {
      background-color: rgb(237, 99, 0);
    }
    .grKOWb::after {
      content: "";
      position: absolute;
      left: 15%;
      top: 15%;
      width: 70%;
      height: 70%;
      border-radius: 50%;
    }
    /* .grKOWb.type-3::after {
    background-color: rgb(246, 199, 34);
} */
    .grKOWb.type-2::after {
      background-color: rgb(67, 179, 9);
    }
    .grKOWb::after {
      content: "";
      position: absolute;
      left: 15%;
      top: 15%;
      width: 70%;
      height: 70%;
      border-radius: 50%;
    }
    .dots-wrap {
      overflow: auto;
    }
    .dots {
      width: 800px;
      display: grid;
      margin-bottom: 1rem;
      gap: 1px;
      grid-template-columns: repeat(32, 1fr);
    }
  }

  @media only screen and (max-width: 650px) {
    .dcGdSd {
      width: 100%;
      padding: 1rem;
      z-index: 1153;
      top: 26%;
    }
    .dots-wrap {
      overflow: auto;
    }
    .kFDPAv {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
    }
    .dcGdSd .dots {
      width: 800px;
      display: grid;
      margin-bottom: 1rem;
      gap: 1px;
      grid-template-columns: repeat(32, 1fr);
    }
    .itetCR {
      background-color: rgb(45, 48, 53);
      border-radius: 0.1875rem;
      position: relative;
    }
    .itetCR::before {
      content: "";
      display: block;
      padding-top: 100%;
    }
    .itetCR.type-2::after {
      background-color: rgb(67, 179, 9);
    }
    .itetCR::after {
      content: "";
      position: absolute;
      left: 15%;
      top: 15%;
      width: 70%;
      height: 70%;
      border-radius: 50%;
    }

    /* .itetCR.type-3::after {
    background-color: rgb(246, 199, 34);
} */
    .itetCR.type-1::after {
      background-color: rgb(237, 99, 0);
    }
    /* .JLcsN {
    position: fixed;
    z-index: 110;
    min-width: 12.5rem;
    min-height: 12.5rem;
    border-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0.25rem 0.5rem 0px;
}
.JLcsN .dragpop-title {
    flex: 1 1 0%;
    height: 3.125rem;
    line-height: 3.125rem;
    font-weight: bold;
    font-size: 1rem;
    color: rgb(245, 246, 247);
    text-align: center;
    touch-action: none;
    user-select: none;
    cursor: grab;
}
.JLcsN .dragpop-close {
    position: absolute;
    right: 0px;
    top: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3.125rem;
    height: 3.125rem;
}
.dragpop-content .sc-iJCbQK {
    padding-top: 0px;
}
.liaPil {
    width: 430px;
    padding: 1rem;
}
.liaPil .dots-wrap {
    overflow: auto;
}
.cEhaBs {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.liaPil .dots {
    width: 800px;
    display: grid;
    margin-bottom: 1rem;
    gap: 1px;
    grid-template-columns: repeat(32, 1fr);
}
.grKOWb {
    background-color: rgb(45, 48, 53);
    border-radius: 0.1875rem;
    position: relative;
}
.grKOWb::before {
    content: "";
    display: block;
    padding-top: 100%;
}
.grKOWb.type-1::after {
    background-color: rgb(237, 99, 0);
}
.grKOWb::after {
    content: "";
    position: absolute;
    left: 15%;
    top: 15%;
    width: 70%;
    height: 70%;
    border-radius: 50%;
} */
    /* .grKOWb.type-3::after {
    background-color: rgb(246, 199, 34);
} */
    /* .grKOWb.type-2::after {
    background-color: rgb(67, 179, 9);
}

.dots-wrap {
    overflow: auto;
}
.dots {
    width: 800px;
    display: grid;
    margin-bottom: 1rem;
    gap: 1px;
    grid-template-columns: repeat(32, 1fr);
} */
  }
</style>
