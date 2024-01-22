<script>
  import { scale } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import { onMount } from "svelte";
    export let dialogData = null;
    $: data = null;

    $: {
      data = dialogData;
    }
    $:container = null;
    onMount(() => {
      if (document) document.body.appendChild(container);
      return () => {
        document.body.removeChild(container)
      }
    })
</script>
<div bind:this={container} class="sc-bkkeKt kBjSXI" style="opacity: 1;">
  <div in:scale={{start: 0.7, duration: 300, easing: backOut, opacity: 0.5}} class="sc-dlVxhl gvBCkE" style="transform: scale(1); opacity: 1;">
    <div class="sc-hGPBjI hyKsfV">
      <div class="message">
        {data?.message}
      </div>
      <div class="btns">
        <button
            on:click={() => data?.response(false)}
          class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal cancle"
          ><div class="button-inner">Cancel</div></button
        ><button
            on:click={() => data?.response(true)}
          class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal light"
          ><div class="button-inner">Confirm</div></button
        >
      </div>
    </div>
  </div>
</div>

<style>
    .kBjSXI {
    position: fixed;
    z-index: 9999;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.7);
    filter: none !important;
}

.gvBCkE {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0px;
    height: 0px;
}
.gvBCkE > div {
    transform: translate(-50%, -50%);
}

.hyKsfV {
    width: 26.25rem;
    background-color: rgb(30, 32, 36);
    border-radius: 1.25rem;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0.125rem 1.25rem 0px;
}
.hyKsfV .message {
    font-size: 1rem;
    line-height: 1.25rem;
    min-height: 12.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0px 1.875rem;
    text-align: center;
}
.hyKsfV .btns > button:last-child {
    margin-right: 0px;
}
.hyKsfV .btns {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0px 0px 2.5rem;
}
.hyKsfV .btns button {
    width: 9.375rem;
    height: 2.75rem;
    margin-right: 1rem;
}
.gEBngo.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(107, 113, 128);
}
.fnKcEH.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(67, 179, 9);
    background-image: conic-gradient(from 1turn, rgb(67, 179, 9), rgb(93, 219, 28));
}
.cBmlor {
    display: block;
    width: 100%;
    border-radius: 6.25rem;
    height: 3rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
}
.cBmlor > .button-inner {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
</style>