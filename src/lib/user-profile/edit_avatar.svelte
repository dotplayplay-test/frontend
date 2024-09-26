<script>

let image = "https://img2.nanogames.io/avatar/505090/l?t=1695187081164"

let default_images = [
    {id: 1, img: "https://img2.nanogames.io/avatar/head1.png", state: "is-active"},
    {id: 2, img: "https://img2.nanogames.io/avatar/head2.png", state: ""},
    {id: 3, img: "https://img2.nanogames.io/avatar/head3.png", state: ""},
    {id: 4, img: "https://img2.nanogames.io/avatar/head4.png", state: ""},
    {id: 5, img: "https://img2.nanogames.io/avatar/head5.png", state: ""},
    {id: 6, img: "https://img2.nanogames.io/avatar/head6.png", state: ""},
]

const handleDefaultImaage = ((e)=>{
    for(let i = 0; i < default_images.length; i++){
        if(e === default_images[i].id){
            default_images[i].state = "is-active"
            image = default_images[i].img
        }else{
            default_images[i].state = ""
        }
    }
})

</script>

<div class="dialog-body no-style " style="z-index: 2; transform: none;">
    <div class="sc-dkPtRN jScFby scroll-view sc-bjztik iZmuoy">
        <div class="crop-area" aria-disabled="false">
            <div data-testid="container" class="reactEasyCrop_Container">
                <img alt="" class="reactEasyCrop_Image reactEasyCrop_Contain" src={image} style="transform: translate(0.46875px, 0px) rotate(0deg) scale(0.9375);">
                <div data-testid="cropper" class="reactEasyCrop_CropArea reactEasyCrop_CropAreaGrid croped-area" style="width: 300px; height: 300px;"></div>
            </div>
            <button class="upload flex-center">
                <input bind:this={image}  accept=".png,.jpg" type="file">
            </button>
        </div>
        <div class="wrap-box">
            <div class="sc-ezbkAF kDuLvp input sc-fbWUsZ iYpTcp avatar-selecter">
                <div class="input-label">Default Avatar</div>
                <div class="buttons">
                    {#each default_images as img (img.id)}  
                    <button on:click={()=> handleDefaultImaage(img.id)} class={img.state} style="opacity: 1; transform: none;">
                        <img src={img.img} alt="">
                    </button>
                    {/each}
                </div>
            </div>
            <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                <div class="button-inner">Submit</div>
            </button>
        </div>
    </div>
</div>

<style>
.no-style {
    padding-top: 3.75rem;
    background: var(--affiliate-bg);
}

.dialog-body {
    position: absolute;
    inset: 0px;
    display: flex;
    overflow: hidden;
}

.dialog-body>div {
    flex: 1 1 0%;
}

.reactEasyCrop_Image {
    will-change: transform;
}

.jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
}


.iZmuoy .crop-area {
    position: relative;
    height: 320px;
    opacity: 1 !important;
}

.iZmuoy .croped-area {
    border-radius: 50%;
    border: none;
    color: rgba(0, 0, 0, 0.8);
}

.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.reactEasyCrop_Container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    user-select: none;
    touch-action: none;
    cursor: move;
    display: flex;
    justify-content: center;
    align-items: center;
}

.reactEasyCrop_Contain {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}


.reactEasyCrop_CropArea {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    box-shadow: 0 0 0 9999em;
    color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
}

.iZmuoy .upload {
    width: 3.75rem;
    height: 3.75rem;
    position: absolute;
    z-index: 11;
    left: 50%;
    top: 50%;
    margin: -1.875rem 0px 0px -1.875rem;
}

.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.iZmuoy .upload input {
    opacity: 0;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
}

.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.iZmuoy .wrap-box {
    margin: 30px 6%;
}


.iZmuoy .avatar-selecter {
    margin: 0px 1.25rem;
}

.kDuLvp .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 0.75rem 0.375rem;
color: var(--text-6);}

.iYpTcp .buttons {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-top: 1rem;
}

.iYpTcp button {
    width: 3.75rem;
    height: 3.75rem;
    border: 0.1875rem solid transparent;
    border-radius: 50%;
}

.iYpTcp img {
    width: 3.375rem;
    height: 3.375rem;
    border-radius: 50%;
}

.iZmuoy .button {
    margin: 1.875rem auto 0px;
    width: 18.75rem;
}

.fnKcEH.button {
    color: var(--text-5);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(67, 179, 9);
    background-image: conic-gradient(from 1turn, rgb(67, 179, 9), rgb(93, 219, 28));
}

.cBmlor>.button-inner {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
.iYpTcp button.is-active {
    border-color: rgb(67, 179, 9);
}
</style>
