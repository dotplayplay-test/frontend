<script>
import axios from "axios"
import { ServerURl } from "$lib/backendUrl"
import { handleAuthToken} from "$lib/store/routes"
const URL = ServerURl()
import { ppd_unlock } from "../store/index"

const handleGetUnLocked = (async()=>{
    await axios.get(`${URL}/api/cashback/displayUnlockDDP`,{
        headers:{
            Authorization: `bearer ${$handleAuthToken}`
        }
    })
    .then((response)=>{
        ppd_unlock.set(response.data[0])
    })
    .catch(err=>{
        console.log(err)
    })
})
handleGetUnLocked()


</script>

<div class="sc-hrJsxi jdKyKT bcd ">
    <div class="left">
        <div class="title ttu bold">PPD Unlock</div>
        <div class="desc">Enjoy the game while unlocking PPD to your wallet</div>
        <div class="detail">
            <span>Details</span>
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                <use xlink:href="#icon_Arrow"></use>
            </svg>
        </div>
    </div>
    <div class="right">
        <div class="preview">
            <div class="released">
                <div class="type">Unlocked  </div>
                <div class="value bold">{$ppd_unlock.unlocked} PPD</div>
            </div>
            <div class="lucked">
                <div class="type">Locked</div>
                <div class="value bold">{$ppd_unlock.locked} PPD</div>
            </div>
        </div>
        <div class="percent">
            <div class="percent-value">Unlocked  {$ppd_unlock.progress}%</div>
            <div class="bar-wrap">
                <div class="pointer p-25"></div>
                <div class="pointer p-50"></div>
                <div class="pointer p-75"></div>
                <div class="bar-current" style={`width: ${$ppd_unlock.progress}%;`}></div>
            </div>
        </div>
    </div>
</div>

<style>
 .bcd {
    flex: 1 1 33%;
}
.sc-hrJsxi {
    height: auto;
    display: block;
}
.sc-hrJsxi {
    height: auto;
    display: block;
}
.jdKyKT {
    height: 15rem;
    border-radius: 1.25rem;
    overflow: hidden;
    /* display: flex; */
    margin-top: 15px;
    padding: .7rem 1.25rem;
    background-image: linear-gradient(to right, rgba(147, 42, 195, 0.76) 27%, rgb(139, 43, 184) 57%, rgb(48, 52, 60) 121%);
    color: rgb(255, 255, 255);
    font-size: 0.775rem;
}
.left {
    position: relative;
    z-index: 3;
}
.left .title {
    font-size: 1.05rem;
}
.jdKyKT .left {
    flex: 0 1 50%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.jdKyKT .left {
    flex: 0 1 50%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
 .bold {
    font-weight: 600;
}
.jdKyKT .left .desc {
    line-height: 1.43;
    flex: 1 1 0%;
    margin-top: 0.325rem;
    max-width: 13.75rem;
}
.left .detail {
    position: absolute;
    top: 0px;
    right: 0px;
}
.jdKyKT .left .detail {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
}
.right {
    min-height: 11.25rem;
}
.jdKyKT .right {
    flex: 1 1 50%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.sc-hrJsxi .right .preview {
    margin-top: .5rem;
}
.jdKyKT .right .preview {
    display: flex;
    border-bottom: 1px solid rgba(250, 255, 247, 0.14);
    text-align: center;
    line-height: normal;
    padding: 0.625rem 0px 1.25rem;
    position: relative;
}
.jdKyKT .right .preview .released {
    flex: 0 0 50%;
}
.right .preview .value {
    font-size: 1.25rem;
}
.bold {
    font-weight: 600;
}
.jdKyKT .right .preview .lucked {
    flex: 0 0 50%;
    opacity: 0.5;
}
.jdKyKT .right .preview::after {
    content: "";
    position: absolute;
    top: 0px;
    bottom: 0.175rem;
    left: 50%;
    border-right: 1px solid rgba(250, 255, 247, 0.14);
    z-index: 1;
}
.right .percent {
    line-height: 1.43;
    margin-bottom: 42px;
}
.jdKyKT .right .bar-wrap {
    height: 0.5rem;
    width: 100%;
    border-radius: 0.25rem;
    background: rgba(23, 24, 27, 0.3);
    position: relative;
    margin: .5rem 0px;
}
.jdKyKT .right .bar-wrap .pointer {
    position: absolute;
    top: 0px;
    width: 0.25rem;
    height: 100%;
    background: rgba(216, 216, 216, 0.12);
    transform: translateX(-50%);
    z-index: 1;
}
</style>