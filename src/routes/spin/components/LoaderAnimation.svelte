<script>
    import { onMount } from "svelte";
    import { spring } from "svelte/motion";
    import { Loader } from "svelte-pixi";

    const coords = spring({
        scale: 0.5,
        alpha: 0,
        duration: 500,
        ease: "easeOut",
    });

    onMount(() => {
        coords.set({ scale: 1, alpha: 1 });
    });
</script>

<Loader {...coords} />
