<script>
    import { initializeApp, getApp, getApps } from "firebase/app";
    import { getFirestore, collection, onSnapshot } from "firebase/firestore";
    import { firebaseConfig } from "$lib/firebaseConfig";
    import { browser } from '$app/environment'
    let firebaseApp = browser && (getApps().length === 0 ? initializeApp(firebaseConfig) :  getApp() ) ;
    let db =  browser && getFirestore()
    let colRef = browser && collection(db, "borc")
    import { Stage, Layer, Text, Rect, Circle, Line, Image } from "svelte-konva";
    import {onMount} from "svelte";
    // import { animation} from "$lib/store/crashstore/crash";
    // let images = $animation
    let width = 518
    let height = 310
    let crashDB = []

     browser && onSnapshot(colRef, (querySnapshot) => {
        var fbData = [];
        querySnapshot.forEach((doc) => {
            let crashData = { ...doc.data(), id: doc.id }
            fbData = [crashData , ...fbData]
        });
        crashDB = fbData[0]
    });

    let image = null
    let lastanim;
    let firstanim
    let thirdanim
    let secanim;
    // onMount(()=>{
    //     img = document.createElement("img");
    // })

    // $: {
    //     if(crashDB.isRunning){   
    //         if(crashDB.animCrash >= images.length ){
    //             img.src = images[images.length - 1]
    //             img.onload = () => {
    //                 image = img;
    //             }
    //         }else{
    //             img.src = images[crashDB.animCrash]
    //             img.onload = () => {
    //                 image = img;
    //             }
    //         }
    //     }
    // }

    let stepTwo = (1.2.toFixed(2))
    let stepThree = (1.30).toFixed(2)
    let stepFour = (1.50).toFixed(2)
    let stepFive = (1.7).toFixed(2)
    let stepSix = (1.8).toFixed(2)
</script>


<div class="game-box sbuagsugwq">
    <div class="game-box-container">
        <div class="house-egde">
            <span>House Edge 1%</span>
        </div>
        <div class="chart-crash">
            <Stage config={{ width: width, height:height }}>
                <Layer>
                    {#if (!crashDB.isLoading && !crashDB.isRunning && !crashDB.isCrash ) }
                        <Text config={{
                            text: 'Reconnecting...' ,
                            fontSize: 25,
                            fill: '#ffff',
                            shadowBlur: 10,
                            x: 160,
                            y: 130,
                            fontStyle: '500',
                            fontFamily: 'Calibri',
                        }}/>
                    {/if}
                    <!-- ========================== loading crash ====================== -->
                    {#if (crashDB.isLoading)}
                        <Rect config={{
                            x: width / 2 - 100,
                            y: 160,
                            width: 200,
                            height: 40,
                            fill: 'grey',
                            cornerRadius: 3,
                        }}
                        />

                        <Text config={{
                            text: '1.00x',
                            fontSize: 50,
                            fill: '#ffff',
                            shadowBlur: 10,
                            x: 200,
                            y: 80,
                            fontStyle: '700',
                            fontFamily: 'Calibri',
                        }}/>

                        <Rect config={{
                            x: 518 / 2 - 100,
                            y: 160,
                            width: crashDB.loadingCount,
                            height: 40,
                            fill: '#43b309',
                            shadowBlur: 10,
                            cornerRadius: 3,
                        }}
                        />
                        
                        <Text config={{
                            text: 'Starting in',
                            fontSize: 23,
                            fill: '#ffff',
                            shadowBlur: 1,
                            x: 210,
                            y: 170,
                            fontStyle: '400',
                            fontFamily: 'Calibri',
                        }}/>
                    {/if}
                    
                    <!-- =========================== crash is running ======================== -->
                        {#if (crashDB.isRunning)}
                            <!-- <Image
                            config={{ image : image ? image : "",
                                x: 20,
                                y: 0, }}
                            /> -->
                        
                            <Text config={{
                                text: crashDB.runningCount + 'x',
                                fontSize: 50,
                                fill: '#ffff',
                                shadowBlur: 10,
                                x: 200,
                                y: 80,
                                fontStyle: '700',
                                fontFamily: 'Calibri',
                            }}/>
                        {/if}

                <!-- =================================== isCrash ====================================== -->
                        {#if (crashDB.isCrash)}
                            <Text config={{
                                text: 'Crashed at ' + crashDB.crashPoint + "x" ,
                                fontSize: 30,
                                fill: 'rgb(237, 99, 0)',
                                shadowBlur: 10,
                                x: 150,
                                y: 130,
                                fontStyle: '700',
                                fontFamily: 'Calibri',
                            }}/>
                        {/if}
                
                    <!-- ============= Crash Lines ============ -->
    
                    <Line config={{
                      x: 20,
                      y: 0,
                      points: [0, 0, 0, height - 15],
                      tension: 0.5,
                      closed: true,
                      stroke: '#ffffff0e',
                    }}/>
                    <Line config={{
                        x: 20,
                        y: height - 15,
                        points: [0, 0, width - 30, 0],
                        tension: 0.5,
                        closed: true,
                        stroke: '#ffffff0e',
                      }}/>

                    <Rect config={{
                        x: 0,
                        y: 285,
                        width: 35,
                        height: 20,
                        fill: '#ffffff1c',
                        shadowBlur: 10,
                        cornerRadius: 3,
                    }}
                    />
                    <Text config={{
                        text: '1.00x',
                        fontSize: 12,
                        fill: '#ffff',
                        shadowBlur: 10,
                        x: 4,
                        y: 289,
                        fontStyle: '500',
                        fontFamily: 'Calibri',
                    }}/>

            <Rect config={{
                x: 0,
                y: 228,
                width: 40,
                height: 20,
                fill: '#ffffff1c',
                shadowBlur: 10,
                cornerRadius: 3,
            }}
            />
            <Text config={{
                text: (stepTwo) + "x",
                fontSize: 12,
                fill: '#ffff',
                shadowBlur: 10,
                x: 4,
                y: 232,
                fontStyle: '500',
                fontFamily: 'Calibri',
            }}/>

            <Rect config={{
                x: 0,
                y: 171,
                width: 40,
                height: 20,
                fill: '#ffffff1c',
                shadowBlur: 10,
                cornerRadius: 3,
            }}
            />
            <Text config={{
                text: crashDB.forthY ? crashDB.forthY + "x" : stepThree + "x",
                fontSize: 12,
                fill: '#ffff',
                shadowBlur: 10,
                x: 4,
                y: 175,
                fontStyle: '500',
                fontFamily: 'Calibri',
            }}/>


<Rect config={{
    x: 0,
    y: 114,
    width: 40,
    height: 20,
    fill: '#ffffff1c',
    shadowBlur: 10,
    cornerRadius: 3,
}}
/>
<Text config={{
    text: crashDB.forthY ? crashDB.forthY + "x" : stepFour + "x",
    fontSize: 12,
    fill: '#ffff',
    shadowBlur: 10,
    x: 4,
    y: 118,
    fontStyle: '500',
    fontFamily: 'Calibri',
}}/>


<Rect config={{
    x: 0,
    y: 57,
    width: 40,
    height: 20,
    fill: '#ffffff1c',
    shadowBlur: 10,
    cornerRadius: 3,
}}
/>
<Text config={{
    text: crashDB.fifthY ? crashDB.fifthY + "x" : stepFive + "x",
    fontSize: 12,
    fill: '#ffff',
    shadowBlur: 10,
    x: 4,
    y: 61,
    fontStyle: '500',
    fontFamily: 'Calibri',
}}/>

<Rect config={{
    x: 0,
    y: 0,
    width: 40,
    height: 20,
    fill: '#ffffff1c',
    shadowBlur: 10,
    cornerRadius: 3,
}}
/>
        <Text config={{
            text: crashDB.sixthY ? crashDB.sixthY + "x" : stepSix + "x",
            fontSize: 12,
            fill: '#ffff',
            shadowBlur: 10,
            x: 4,
            y: 4,
            fontStyle: '500',
            fontFamily: 'Calibri',
        }}/>


<!-- ============================== Seconds at the buttom ========================================== -->
<Text config={{
    text: crashDB.twoSec ? crashDB.twoSec + "s" : `2s`,
    fontSize: 12,
    fill: '#ffff',
    shadowBlur: 10,
    x: 100,
    y: 299,
    fontStyle: '900',
    fontFamily: 'Calibri',
}}/>

<Text config={{
    text: crashDB.fourSec ? crashDB.fourSec + "s" : `4s`,
    fontSize: 12,
    fill: '#ffff',
    shadowBlur: 10,
    x: 200,
    y: 299,
    fontStyle: '900',
    fontFamily: 'Calibri',
}}/>

<Text config={{
    text: crashDB.sixSec ? crashDB.sixSec + "s" : `6s`,
    fontSize: 12,
    fill: '#ffff',
    shadowBlur: 10,
    x: 300,
    y: 299,
    fontStyle: '900',
    fontFamily: 'Calibri',
}}/>

<Text config={{
    text: crashDB.eightSec ? crashDB.eightSec + "s" : `8s`,
    fontSize: 12,
    fill: '#ffff',
    shadowBlur: 10,
    x: 400,
    y: 299,
    fontStyle: '900',
    fontFamily: 'Calibri',
}}/>

<Text config={{
    text: crashDB.totalSeconds ? "Total " + crashDB.totalSeconds + "s" : `Total 0s` ,
    fontSize: 12,
    fill: '#ffff',
    shadowBlur: 10,
    x: 470,
    y: 299,
    fontStyle: '900',
    fontFamily: 'Calibri',
}}/>

<!-- <Circle config={{
    x: 40,
    y: 288,
    radius: 8,
    fill: '#fff'
  }}
/> -->

 <!-- =========================================== -->


                </Layer>
              </Stage>
        </div>
    </div>
    
</div>

<style>
    .game-box{
        position: relative;
        flex: 1 1 0%;
        display: flex;
        flex-direction: column;
        padding: 0px 1.875rem 1.875rem;
    }
    .sbuagsugwq{
        position: relative;
    }
    .game-box-container{
        position: relative;
        margin-top: 1.875rem;
        margin-bottom: 1.25rem;
    }

    .game-box-container::after{
        content: "";
        display: block;
        padding-top: 0%;
    }
    .house-egde{
        position: absolute;
        z-index: 2;
        right: 1.5rem;
        bottom: -2.25rem;
        font-weight: 500;
        min-width: 5.75rem;
        padding: 0px 1.125rem;
        border-radius: 1.125rem;
        height: 2.25rem;
        font-size: 12px;
        line-height: 2.25rem;
        color: rgba(153, 164, 176, 0.6);
        background-color: rgba(49, 52, 60, 0.4);
    }
    .chart-crash{
        width: 518px; height: 308px;
        /* border-bottom: 1px solid #ffffff1c;
        border-left: 1px solid #ffffff09; */
    }

</style>