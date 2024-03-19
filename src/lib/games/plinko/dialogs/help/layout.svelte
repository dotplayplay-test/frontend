<script>
  import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    const handleClick = (screen) => {
        return (e) => {
            dispatch("click", screen)
        }
    }
</script>
<div class="sc-dkPtRN jScFby scroll-view sc-jCHUfY cIvcgv">
  <div class="help-list">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click={handleClick("What Game Is This?")}>
      <span>What Game Is This?</span><svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Arrow"></use></svg
      >
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click={handleClick("Fairness")}>
      <span>Fairness</span><svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Arrow"></use></svg
      >
    </div>
  </div>
</div>
<style>
    .jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
}
.cIvcgv .help-list {
    margin-top: 0.5rem;
}
.cIvcgv .help-list > div {
    background-color: rgb(23, 24, 27);
    border-radius: 1.25rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 3.5rem;
    padding: 0px 1.25rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
}
.cIvcgv .help-list > div > svg {
    width: 0.75rem;
    height: 0.75rem;
    fill: rgba(95, 105, 117, 0.36);
}
.cIvcgv .help-list > div:hover {
    color: rgb(245, 246, 247);
}
</style>