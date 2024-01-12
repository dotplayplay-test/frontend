<script>
  export let left = -220;
  export let top = 23;

  let moving = false;

  function onMouseDown() {
    moving = true;
  }

  function onMouseMove(e) {
    if (moving) {
      left += e.movementX;
      top += e.movementY;
    }
  }

  function onMouseUp() {
    moving = false;
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:mousedown={onMouseDown}
  style="left: {left}px; top: {top}px;"
  class="draggable {moving ? "moving": ""}"
>
  <slot />
</div>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<style>
  .draggable {
    user-select: none;
    cursor: pointer;
    border: solid 1px gray;
    position: absolute;
  }
  .draggable.moving {
    cursor: grabbing;
  }
</style>
