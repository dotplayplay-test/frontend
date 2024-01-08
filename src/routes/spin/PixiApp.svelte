<script>
    import { onMount } from "svelte";
    import * as PIXI from "pixi.js";
    import { spring } from "svelte/motion";
    import {
        Application,
        Text,
        Sprite,
        NineSlicePlane,
        Container,
    } from "svelte-pixi";
    import CollectButton from "./components/CollectButton.svelte";
    import BonusAnimation from "./components/BonusAnimation.svelte";

    const spriteSpriteUrl = "/sprites@2x.6522026d.json";
    const soundSpriteUrl = "/sounds.mp3";
    let spriteSheet;
    const soundSprite = {
        SpinOpen: [0, 1979],
        SpinAndBonus: [1979, 8268],
        Click: [10247, 306],
        Collect: [10553, 601],
    };

    async function loadSprites() {
        try {
            const resources = await PIXI.Assets.load([spriteSpriteUrl]);
            const s = resources[spriteSpriteUrl];
            const texture = s.baseTexture;
            return new PIXI.Spritesheet(texture, s.data);
        } catch (error) {
            console.error("something went wrong: ", error);
        }
    }

    let soundPlayer;

    onMount(async () => {
        spriteSheet = await loadSprites();

        soundPlayer = new Howl({
            src: ["/sounds.mp3"],
            sprite: {
                SpinOpen: [0, 1979],
                SpinAndBonus: [1979, 8268],
                Click: [10247, 306],
                Collect: [10553, 601],
            },
        });

        getTexture("circle.png");
    });

    const otherSpriteProps = { x: 100, y: 100, width: 50, height: 50 };
    const otherPlaneProps = { x: 200, y: 200, width: 100, height: 100 };
    const style = { fill: 0xff0000 };
    const textProps = { text: "Hello Svelte-Pixi!" };

    function playSound(spriteName) {
        try {
            soundPlayer.play(spriteName);
        } catch (error) {
            console.error(error);
        }
    }

    function getTexture(name) {
        return PIXI.Sprite.from(name);
    }

    const sound = new Howl({
        src: [soundSpriteUrl],
        sprite: soundSprite,
    });

    function Button({ disabled = false } = {}) {
        const s = spring({ scale: 1 }, { duration: 0.2 });

        const buttonProps = {
            s,
            on: {
                pointerdown: () => s.set({ scale: 0.9 }),
                pointerup: () => s.set({ scale: 1 }),
                pointerupoutside: () => s.set({ scale: 1 }),
            },
            buttonMode: true,
            interactive: true,
        };

        return buttonProps;
    }

    const bonusTextStyle = {
        fontSize: 16,
        fontWeight: "bold",
        fill: 0xffffff,
    };

    const dailyCheckInStyle = {
        fontSize: 16,
        fontWeight: "bold",
        fill: 0xffffff,
    };

    const wheelBonusStyle = {
        fontSize: 24,
        fontWeight: "bold",
        fill: 0xffffff,
    };

    const collectNowStyle = {
        fontSize: 16,
        fontWeight: "bold",
        fill: "white",
    };

    const bonusAnimationProps = {
        alpha: {
            start: 0,
            end: 0.85,
        },
        scale: {
            list: [
                { value: 0.5, time: 0 },
                { value: 1, time: 0.5 },
            ],
            minimumScaleMultiplier: 1,
        },
        speed: {
            start: 320,
            end: 0,
            minimumSpeedMultiplier: 1,
        },
        acceleration: {
            x: 0,
            y: 0,
        },
        maxSpeed: 0,
        startRotation: {
            min: 0,
            max: 0,
        },
        noRotation: false,
        rotationSpeed: {
            min: 0,
            max: 0,
        },
        lifetime: {
            min: 0.3,
            max: 0.3,
        },
        blendMode: "screen",
        frequency: 0.005,
        emitterLifetime: 0.2,
        maxParticles: 1,
        pos: {
            x: 0,
            y: 0,
        },
        addAtBack: true,
        autoUpdate: true,
        spawnType: "point",
    };

    const collectButtonAnimationProps = {
        scale: {
            list: [
                { value: 0.5, time: 0 },
                { value: 1, time: 0.5 },
            ],
            minimumScaleMultiplier: 1,
        },
        alpha: {
            start: 0,
            end: 1,
        },
    };

    const flagSprite = "flag.png";
    const textSprite = "text1.png";
    const box1Sprite = "box1.png";
    const box2Sprite = "box2.png";
</script>

<Application width={600} height={800} antialias>
    <Container x={212} y={390}>
        <Sprite
            texture={PIXI.Texture.from("more_gold.png")}
            anchor={0.5}
            interactive={true}
        />
        <Container y={20}>
            <!-- <BonusAnimation {...bonusAnimationProps} /> -->
            <Container>
                <!-- <Container y={-120} scale={2.4}>
                    {#each [0, 1, 2, 3] as index (index)}
                        <Sprite
                            texture={PIXI.Texture.from("sunflower.png")}
                            anchor={[1, 1]}
                            rotation={index * (Math.PI / 2)}
                        />
                    {/each}
                </Container> -->
                <!-- <Sprite y={-180} texture={PIXI.Texture.from("more_gold.png")} /> -->
            </Container>
            <NineSlicePlane
                texture={PIXI.Texture.from(box1Sprite)}
                leftWidth={12}
                topHeight={12}
                rightWidth={0}
                bottomHeight={12}
                x={-90}
                width={180}
                height={280}
            />
            <NineSlicePlane
                texture={PIXI.Texture.from(box1Sprite)}
                x={90}
                leftWidth={12}
                topHeight={12}
                rightWidth={0}
                bottomHeight={12}
                width={180}
                height={280}
                scale={[-1, 1]}
            />
            <Container y={-130}>
                <Sprite
                    texture={PIXI.Texture.from("bonus_zoom.png")}
                    anchor={[0.5, 0.5]}
                    interactive="true"
                />
                <Text
                    y={75}
                    style={wheelBonusStyle}
                    anchor={0.5}
                    text="Wheel Bonus"
                />
                <Text
                    y={100}
                    style={bonusTextStyle}
                    anchor={0.5}
                    text="0.001 BTC"
                />
                <!-- <Text y={100} style={bonusTextStyle} anchor={0.5} text={`${bonusAmount.amount} ${bonusAmount.currencyName}`} /> -->
                <NineSlicePlane
                    texture={PIXI.Texture.from(box2Sprite)}
                    y={150}
                    leftWidth={15}
                    rightWidth={15}
                    topHeight={0}
                    bottomHeight={0}
                    width={322}
                    height={50}
                >
                    <Text
                        x={110}
                        y={26}
                        style={dailyCheckInStyle}
                        anchor={0.5}
                        text="Daily Check in :"
                    />
                    <!-- <Text
                        x={210}
                        y={26}
                        style={dailyCheckInStyle}
                        anchor={0.5}
                        text={`${dailyCheckInAmount.amount} ${dailyCheckInAmount.currencyName}`}
                    /> -->
                    <Text
                        x={210}
                        y={26}
                        style={dailyCheckInStyle}
                        anchor={0.5}
                        text="0.001 BTC"
                    />
                </NineSlicePlane>
            </Container>
            <Container
                y={30}
                interactive={true}
                onClick={() => {
                    console.log("collect");
                    // Z("Collect");
                    // onClose();
                }}
            >
                <Text
                    x={210}
                    y={26}
                    style={collectNowStyle}
                    anchor={0.5}
                    text="Collect Bonus"
                />
                <Sprite
                    texture={PIXI.Texture.from("sunflower.png")}
                    anchor={[0.5, 0.5]}
                />
            </Container>
            <!-- <CollectButton {...collectButtonProps} /> -->
            <!-- <LoaderAnimation /> -->
        </Container>
    </Container>
</Application>
