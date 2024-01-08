<script>
    import { spring } from "svelte/motion";

    const { set, ...style } = spring({ scale: 1 }, { duration: 200 });

    export let disabled = false;

    const buttonProps = disabled
        ? {}
        : {
              ...style,
              on: {
                  pointerdown: () => set({ scale: 0.9 }),
                  pointerup: () => set({ scale: 1 }),
                  pointerupoutside: () => set({ scale: 1 }),
              },
              buttonMode: true,
              interactive: true,
          };
</script>

<button {...buttonProps}>Click me</button>
