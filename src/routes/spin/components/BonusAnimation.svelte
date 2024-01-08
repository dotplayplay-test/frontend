<script>
    import { onMount, onDestroy } from "svelte";
    import { Container, Sprite } from "svelte-pixi";
    import * as PIXI from "pixi.js";
    // import { easeNone } from "svelte/easing";
    import { spring, tweened } from "svelte/motion";

    let rotation = 0;
    let scale = tweened(0.5);
    let y = tweened(-170);

    onMount(() => {
        const rotationSpring = spring({
            rotation: 360,
            config: { repeat: -1, duration: 5 },
        });
        rotationSpring.subscribe((value) => (rotation = value));

        scale.set(1.1);
        y.set(-180);

        const scaleAndY = spring({
            scale: 0.5,
            y: -170,
            config: { repeat: 0, yoyo: true, duration: 0.3 },
        });
        scaleAndY.subscribe(({ scale: s, y: posY }) => {
            scale.set(s);
            y.set(posY);
        });
    });

    onDestroy(() => {
        scale.destroy();
        y.destroy();
    });
</script>

<Container>
    <Container y={-120} scale={2.4} {rotation}>
        {#each [0, 1, 2, 3] as index (index)}
            <Sprite
                texture={PIXI.Texture.from("sunflower.png")}
                anchor={[1, 1]}
                rotation={index * (Math.PI / 2)}
            />
        {/each}
    </Container>
    <Sprite y={-180} texture={PIXI.Texture.from("more_gold.png")} {scale} />
</Container>
