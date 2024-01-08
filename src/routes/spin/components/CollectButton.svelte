<script>
  import { onMount } from "svelte";
  import { Text } from "svelte-pixi";
  import { spring } from "svelte/motion";
  import Button from "./Button.svelte";

  export let onClick;
  export let y;
  export let text;
  export let style;

  const coords = spring({
    scale: 0.5,
    alpha: 0,
    duration: 500,
    ease: "easeOut",
  });

  onMount(() => {
    // coords.set({ scale: 1, alpha: 1 });
  });
</script>

<Button {y} {onClick} {...coords}>
  <Text {style} anchor={[0.5, 0.5]} {text} />
</Button>
