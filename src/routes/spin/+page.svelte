<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { handleAuthToken } from "$lib/store/routes";
    import { Howl } from "howler";
    // import { Application, Text } from "svelte-pixi";
    import * as PIXI from "pixi.js";
    import { spring } from "svelte/motion";

    // Define your sprite frames and metadata
    const spriteFrames = {
        "bg1.png": {
            frame: {
                x: 350,
                y: 1,
                w: 752,
                h: 128,
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 0,
                y: 6,
                w: 752,
                h: 128,
            },
            sourceSize: {
                w: 752,
                h: 140,
            },
        },
        "bonus_zoom.png": {
            frame: {
                x: 173,
                y: 926,
                w: 468,
                h: 52,
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 468,
                h: 52,
            },
            sourceSize: {
                w: 468,
                h: 52,
            },
        },
        "box1.png": {
            frame: {
                x: 173,
                y: 884,
                w: 40,
                h: 554,
            },
            rotated: !0,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 40,
                h: 554,
            },
            sourceSize: {
                w: 40,
                h: 554,
            },
        },
        "box2.png": {
            frame: {
                x: 350,
                y: 373,
                w: 644,
                h: 114,
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 644,
                h: 114,
            },
            sourceSize: {
                w: 644,
                h: 114,
            },
        },
        "bracket.png": {
            frame: {
                x: 350,
                y: 489,
                w: 424,
                h: 186,
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 424,
                h: 186,
            },
            sourceSize: {
                w: 424,
                h: 186,
            },
        },
        "button.png": {
            frame: {
                x: 357,
                y: 677,
                w: 476,
                h: 113,
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 0,
                y: 1,
                w: 476,
                h: 113,
            },
            sourceSize: {
                w: 476,
                h: 114,
            },
        },
        "circle.png": {
            frame: {
                x: 809,
                y: 884,
                w: 60,
                h: 60,
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 60,
                h: 60,
            },
            sourceSize: {
                w: 60,
                h: 60,
            },
        },
        "coin_bg.png": {
            frame: {
                x: 929,
                y: 880,
                w: 44,
                h: 44,
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 44,
                h: 44,
            },
            sourceSize: {
                w: 44,
                h: 44,
            },
        },
        "flag.png": {
            frame: {
                x: 350,
                y: 131,
                w: 661,
                h: 240,
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 2,
                y: 29,
                w: 661,
                h: 240,
            },
            sourceSize: {
                w: 664,
                h: 274,
            },
        },
        "light.png": {
            frame: {
                x: 871,
                y: 880,
                w: 56,
                h: 56,
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 56,
                h: 56,
            },
            sourceSize: {
                w: 56,
                h: 56,
            },
        },
        "more_gold.png": {
            frame: {
                x: 1,
                y: 697,
                w: 354,
                h: 148,
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 4,
                y: 15,
                w: 354,
                h: 148,
            },
            sourceSize: {
                w: 376,
                h: 202,
            },
        },
        "num_bg.png": {
            frame: {
                x: 910,
                y: 489,
                w: 76,
                h: 100,
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 76,
                h: 100,
            },
            sourceSize: {
                w: 76,
                h: 100,
            },
        },
        "pap1.png": {
            frame: {
                x: 173,
                y: 847,
                w: 38,
                h: 26,
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 38,
                h: 26,
            },
            sourceSize: {
                w: 38,
                h: 26,
            },
        },
        "pap2.png": {
            frame: {
                x: 1,
                y: 947,
                w: 22,
                h: 22,
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 22,
                h: 22,
            },
            sourceSize: {
                w: 22,
                h: 22,
            },
        },
        "pap3.png": {
            frame: {
                x: 996,
                y: 373,
                w: 12,
                h: 26,
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 12,
                h: 26,
            },
            sourceSize: {
                w: 12,
                h: 26,
            },
        },
        "pap4.png": {
            frame: {
                x: 776,
                y: 623,
                w: 50,
                h: 64,
            },
            rotated: !0,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 50,
                h: 64,
            },
            sourceSize: {
                w: 50,
                h: 64,
            },
        },
        "pap5.png": {
            frame: {
                x: 975,
                y: 880,
                w: 44,
                h: 44,
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 44,
                h: 44,
            },
            sourceSize: {
                w: 44,
                h: 44,
            },
        },
        "pap6.png": {
            frame: {
                x: 1074,
                y: 648,
                w: 18,
                h: 16,
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 18,
                h: 16,
            },
            sourceSize: {
                w: 18,
                h: 16,
            },
        },
        "pap7.png": {
            frame: {
                x: 643,
                y: 926,
                w: 48,
                h: 44,
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 48,
                h: 44,
            },
            sourceSize: {
                w: 48,
                h: 44,
            },
        },
        "pap8.png": {
            frame: {
                x: 729,
                y: 884,
                w: 78,
                h: 68,
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 78,
                h: 68,
            },
            sourceSize: {
                w: 78,
                h: 68,
            },
        },
        "pap9.png": {
            frame: {
                x: 910,
                y: 591,
                w: 16,
                h: 18,
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 16,
                h: 18,
            },
            sourceSize: {
                w: 16,
                h: 18,
            },
        },
        "pap11.png": {
            frame: {
                x: 809,
                y: 946,
                w: 30,
                h: 32,
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 30,
                h: 32,
            },
            sourceSize: {
                w: 30,
                h: 32,
            },
        },
        "ring.png": {
            frame: {
                x: 1,
                y: 1,
                w: 347,
                h: 694,
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 347,
                h: 694,
            },
            sourceSize: {
                w: 347,
                h: 694,
            },
        },
        "spin_button.png": {
            frame: {
                x: 842,
                y: 648,
                w: 230,
                h: 230,
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 16,
                y: 16,
                w: 230,
                h: 230,
            },
            sourceSize: {
                w: 264,
                h: 264,
            },
        },
        "spin_text.png": {
            frame: {
                x: 1,
                y: 847,
                w: 170,
                h: 98,
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 49,
                y: 79,
                w: 170,
                h: 98,
            },
            sourceSize: {
                w: 264,
                h: 264,
            },
        },
        "sunflower.png": {
            frame: {
                x: 776,
                y: 489,
                w: 132,
                h: 132,
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 132,
                h: 132,
            },
            sourceSize: {
                w: 132,
                h: 132,
            },
        },
        "text1.png": {
            frame: {
                x: 357,
                y: 792,
                w: 483,
                h: 90,
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 17,
                y: 2,
                w: 483,
                h: 90,
            },
            sourceSize: {
                w: 518,
                h: 100,
            },
        },
        "text2.png": {
            frame: {
                x: 1013,
                y: 131,
                w: 515,
                h: 85,
            },
            rotated: !0,
            trimmed: !0,
            spriteSourceSize: {
                x: 2,
                y: 7,
                w: 515,
                h: 85,
            },
            sourceSize: {
                w: 518,
                h: 100,
            },
        },
    };

    const spriteMetadata = {
        app: "https://www.codeandweb.com/texturepacker",
        version: "1.0",
        image: "sprites@2x.png",
        format: "RGBA8888",
        size: {
            w: 1103,
            h: 979,
        },
        scale: "1",
        smartupdate:
            "$TexturePacker:SmartUpdate:0ff1a90c81998aadb703e5dbbaa9bdde:92f2dea8b762adb9da1cb9fe046d7d46:29d0d1a87896af4ba9df7fc872031c2e$",
    };

    // Define your URLs
    const spriteURL = "/sprites.png";
    const soundSpriteURL = "/sounds.mp3";

    // Combine the data
    const assets = {
        sprites: spriteURL,
        soundSprite: soundSpriteURL,
    };

    // Example usage in a reactive statement
    $: {
    }

    let app;
    let spinContainer;
    let K = {};
    let spinBtnContainer;
    const prices = [
        0.0001, 0.0002, 0.0005, 0.001, 10.0, 50.0, 100.0, 1000.0, 2500.0,
        5000.0, 7500.0, 10000.0, 0.1, 0.25, 0.5, 1.0,
    ];

    // Define the loading function
    const loadAssets = async () => {
        PIXI.Assets.load(["/sprites@2x.6522026d.json"]).then(() => {
            createSpinnerContainer();
            addMarker();
            addSpinButton();
            addBlinkingLight();
            addPrices();
            // const textures = keys.map((k) => PIXI.Texture.from(k));
            // console.log({ textures });
            // const sprite = PIXI.Sprite(textures[1]);
            // app.stage.addChild(sprite);

            // const bg1 = PIXI.Sprite.from("bg1.png");
            // app.stage.addChild(bg1);

            // const bonus_zoom = PIXI.Sprite.from("bonus_zoom.png");
            // app.stage.addChild(bonus_zoom);

            // const box1 = PIXI.Sprite.from("box1.png");
            // app.stage.addChild(box1);

            // const box2 = PIXI.Sprite.from("box2.png");
            // app.stage.addChild(box2);

            // const button = PIXI.Sprite.from("button.png");
            // app.stage.addChild(button);

            // const circle = PIXI.Sprite.from("circle.png");
            // app.stage.addChild(circle);

            // const flag = PIXI.Sprite.from("flag.png");
            // app.stage.addChild(flag);

            // const more_gold = PIXI.Sprite.from("more_gold.png");
            // app.stage.addChild(more_gold);

            // const num_bg = PIXI.Sprite.from("num_bg.png");
            // app.stage.addChild(num_bg);

            // const pap1 = PIXI.Sprite.from("pap1.png");
            // app.stage.addChild(pap1);

            // const pap2 = PIXI.Sprite.from("pap2.png");
            // app.stage.addChild(pap2);

            // const pap3 = PIXI.Sprite.from("pap3.png");
            // app.stage.addChild(pap3);

            // const pap4 = PIXI.Sprite.from("pap4.png");
            // app.stage.addChild(pap4);

            // const pap5 = PIXI.Sprite.from("pap5.png");
            // app.stage.addChild(pap5);

            // const pap6 = PIXI.Sprite.from("pap6.png");
            // app.stage.addChild(pap6);

            // const pap7 = PIXI.Sprite.from("pap7.png");
            // app.stage.addChild(pap7);

            // const pap8 = PIXI.Sprite.from("pap8.png");
            // app.stage.addChild(pap8);

            // const pap9 = PIXI.Sprite.from("pap9.png");
            // app.stage.addChild(pap9);

            // const pap11 = PIXI.Sprite.from("pap11.png");
            // app.stage.addChild(pap11);

            // const sunflower = PIXI.Sprite.from("sunflower.png");
            // app.stage.addChild(sunflower);

            // const text1 = PIXI.Sprite.from("text1.png");
            // app.stage.addChild(text1);

            // const text2 = PIXI.Sprite.from("text2.png");
            // app.stage.addChild(text2);

            // scale stage container to match the background size
            // app.stage.scale.x = app.view.width / background.width;
            // app.stage.scale.y = app.view.height / background.height;
        });
    };

    const createSpinnerContainer = () => {
        spinContainer = new PIXI.Container();
        const ring = PIXI.Sprite.from("ring.png");

        addWheelBoard();
        // spinContainer.width = ring.width * 2;

        // spinContainer.position.x = app.screen.width / 2 - ring.width;
        // spinContainer.position.y = 50;

        // spinContainer.pivot.set(
        //     spinContainer.position.x + spinContainer.width / 2,
        //     spinContainer.position.y + spinContainer.height / 2,
        // );

        // spinContainer.width = ring.width * 2;

        spinContainer.position.x = app.screen.width / 2;
        // spinContainer.position.y = ring.height / 2;
        // spinContainer.position.x = app.screen.width / 2 - ring.width;
        spinContainer.position.y = app.screen.height / 2;
        // spinContainer.position.y = ring.height / 2;

        // spinContainer.rotation = Math.PI / 4;

        console.log({
            w: spinContainer.width,
            h: spinContainer.height,
            r: ring.width,
        });

        spinContainer.pivot.set(spinContainer.width / 4, app.screen.height / 8);
        // spinContainer.pivot.set(300, 50);

        app.stage.addChild(spinContainer);

        // const texture = PIXI.Texture.from(
        //     "https://pixijs.com/assets/bunny.png",
        // );

        // // Create a 5x5 grid of bunnies
        // for (let i = 0; i < 25; i++) {
        //     const bunny = new PIXI.Sprite(texture);

        //     bunny.anchor.set(0.5);
        //     bunny.x = (i % 5) * 40;
        //     bunny.y = Math.floor(i / 5) * 40;
        //     spinContainer.addChild(bunny);
        // }

        // // Move container to the center
        // spinContainer.x = app.screen.width / 2;
        // spinContainer.y = app.screen.height / 2;

        // // Center bunny sprite in local spinContainer coordinates
        // spinContainer.pivot.x = spinContainer.width / 2;
        // spinContainer.pivot.y = spinContainer.height / 2;

        // // Listen for animate update
        // app.ticker.add((delta) => {
        //     // rotate the spinContainer!
        //     // use delta to create frame-independent transform
        //     spinContainer.rotation -= 0.01 * delta;
        // });
    };

    const addWheelBoard = () => {
        const ring = PIXI.Sprite.from("ring.png");
        // ring.scale.x *= -1;
        // ring.position.set(-ring.width, 0);
        ring.anchor.set(0.5);
        spinContainer.addChild(ring);

        const ring2 = PIXI.Sprite.from("ring.png");
        ring2.scale.x *= -1;
        ring2.anchor.set(0.5);
        ring2.position.set(ring2.width, 0);

        spinContainer.addChild(ring2);
    };

    const addSpinButton = () => {
        const s = spring({ scale: 1 }, { duration: 0.2 });
        spinBtnContainer = new PIXI.Container();
        const spin_button = PIXI.Sprite.from("spin_button.png");

        spinBtnContainer.position.x = app.screen.width / 2;
        spinBtnContainer.position.x -= spin_button.width / 2;

        spinBtnContainer.position.y = spinContainer.height / 2;
        spinBtnContainer.position.y -= spin_button.height / 2;
        spinBtnContainer.position.y += 50;

        spinBtnContainer.interactive = true;
        spinBtnContainer.buttonMode = true;

        spinBtnContainer
            .on("pointerdown", () => s.set({ scale: 0.9 }))
            .on("pointerup", () => s.set({ scale: 1 }))
            .on("pointerupoutside", () => s.set({ scale: 1 }))
            .on("click", magicSpin);

        app.stage.addChild(spinBtnContainer);

        spinBtnContainer.addChild(spin_button);

        const spin_text = PIXI.Sprite.from("spin_text.png");
        spinBtnContainer.addChild(spin_text);
    };

    const magicSpin = () => {
        // if (!$handleAuthToken) {
        //     goto("/login");
        //     return;
        // }

        const rotationSpeed = Math.random() * 0.1 + 0.1; // Random rotation speed
        const randomRotationDuration = Math.random() * 3000 + 3000; // Random duration in milliseconds

        // Animate the rotation
        let rotationStartTime = Date.now();
        app.ticker.add(() => {
            const elapsedTime = Date.now() - rotationStartTime;
            if (elapsedTime > randomRotationDuration) return;
            spinContainer.rotation += rotationSpeed;
        });
    };

    const addMarker = () => {
        const bracket = PIXI.Sprite.from("bracket.png");

        bracket.position.x = app.screen.width / 2;
        // bracket.position.x -= bracket.width / 2;

        bracket.position.y = spinContainer.height / 2;
        bracket.position.y -= bracket.height / 2;
        bracket.position.y += 55.5;

        // bracket.position.x = spinContainer.position.x + spinContainer.width / 2;
        // bracket.position.x -= 10; //remove wheel border

        // bracket.position.y =
        //     spinContainer.position.y + spinContainer.height / 2;
        // bracket.position.y -= bracket.height / 2;

        app.stage.addChild(bracket);
    };

    const lights = [];
    const texts = [];

    const addBlinkingLight = () => {
        const lightContainer = new PIXI.Container();

        lightContainer.position.x = 90;
        lightContainer.position.y = -20;
        // lightContainer.position.x = spinContainer.position.x;
        // lightContainer.position.y = spinContainer.position.y / 2;

        lightContainer.rotation = (56 * Math.PI) / 180;

        spinContainer.addChild(lightContainer);

        const circleRadius =
            Math.min(spinContainer.width, spinContainer.height) / 2 - 5;

        for (let i = 0; i < prices.length; i++) {
            const angle = (i * (Math.PI * 2)) / prices.length;

            const x = circleRadius * Math.cos(angle);
            const y = circleRadius * Math.sin(angle);

            const light = PIXI.Sprite.from("light.png");

            light.x = x;
            light.y = y;
            // light.anchor.set(0.5);
            lights.push(light);

            lightContainer.addChild(light);
        }

        let show = true;
        let current = 0;

        app.ticker.add(function () {
            if (current >= 30) {
                current = 0;
                show = !show;
                return;
            }

            lights.forEach((item, index) => {
                item.visible = index % 2 !== 0 ? show : !show;
            });

            current++;
        });
    };

    const addPrices = () => {
        const lightContainer = new PIXI.Container();

        lightContainer.position.x = 90;
        lightContainer.position.y = 0;

        spinContainer.addChild(lightContainer);

        // const circleRadius = 100;
        const circleRadius =
            Math.min(spinContainer.width, spinContainer.height) / 3.5;

        for (let i = 0; i < prices.length; i++) {
            const textContainer = new PIXI.Container();
            const angle = i * ((Math.PI * 2) / prices.length);

            const x = circleRadius * Math.cos(angle);
            const y = circleRadius * Math.sin(angle);

            const text = new PIXI.Text(prices[i], {
                fontFamily: "Arial",
                fontSize: 16,
                fill: "white",
                align: "center",
                // stroke: "black",
                // strokeThickness: 1,
            });

            text.rotation = angle + Math.PI;
            text.anchor.set(0.5);
            text.x = x;
            text.y = y;
            texts.push(text);

            const icon = PIXI.Sprite.from(
                "https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828435/dpp_logo_sd2z9d.png",
            );

            textContainer.addChild(text);

            lightContainer.addChild(textContainer);
        }

        let show = true;
        let current = 0;

        app.ticker.add(function () {
            if (current >= 30) {
                current = 0;
                show = !show;
                return;
            }

            lights.forEach((item, index) => {
                item.visible = index % 2 !== 0 ? show : !show;
            });

            current++;
        });
    };

    // Define a function to get a specific texture from the spritesheet
    const getTexture = (textureName) => {
        return K[assets.sprites].spritesheet?.textures[textureName];
    };

    let sound;

    // Define a function to play sounds
    const playSound = (soundName) => {
        try {
            sound.play(soundName);
        } catch (error) {
            console.error("Error playing sound:", error);
        }
    };

    // Load assets on component mount
    onMount(async () => {
        app = new PIXI.Application({
            width: (50 / 100) * window.innerWidth,
            height: window.innerHeight,
            antialias: true,
            transparent: false,
            resolution: 1,
        });

        document.getElementById("pixi-container").appendChild(app.view);

        await loadAssets();

        sound = new Howl({
            src: [assets.soundSprite],
            sprite: {
                SpinOpen: [0, 1979],
                SpinAndBonus: [1979, 8268],
                Click: [10247, 306],
                Collect: [10553, 601],
            },
        });
    });

    let e = 0;
    let r = null;
    let o = false;
    let a = {};
    // let a = useSpring({
    //     rotation: 0,
    //     config: {
    //         duration: 5000,
    //         ease: w.easeOut,
    //     },
    // });

    // onMount(() => {
    //     const spinHandler = ({ position: spinPosition, bonus }) => {
    //         Z("SpinAndBonus");
    //         let rotationValue = 2160 - (360 * spinPosition) / 16;
    //         const currentRotation = e;
    //         const newRotation =
    //             currentRotation + 360 - (currentRotation % 360) + rotationValue;
    //         e = newRotation;
    //         a.rotation = newRotation;

    //         T(4300).then(() => {
    //             if (t()) i(true);
    //         });

    //         T(5300).then(() => {
    //             if (t()) r(bonus);
    //         });
    //     };

    //     _.on("spin", spinHandler);

    //     return () => {
    //         _.off("spin", spinHandler);
    //     };
    // });
</script>

<div id="main" class="sc-bkkeKt kBjSXI">
    <div
        class="dialog"
        style="opacity: 1; width: 464px; height: 631px; margin-top: -315.5px; margin-left: -232px; transform: scale(1) translateZ(0px);"
    >
        <div id="pixi-container"></div>
    </div>
</div>

<style>
    #pixi-container {
        position: relative;
        width: 800px;
        height: 600px;
    }
</style>
