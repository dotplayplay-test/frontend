<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoMoon from "svelte-icons-pack/io/IoMoon";
import HiSolidLightBulb from "svelte-icons-pack/hi/HiSolidLightBulb";
import BiSolidBadgeDollar from "svelte-icons-pack/bi/BiSolidBadgeDollar";
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";


let fullCurencyName = false
const handleFullcurrencyName = (()=>{
    if(!fullCurencyName){
        localStorage.setItem("show-full-curency", true);
    }else{
        localStorage.removeItem("show-full-curency");
    }
    fullCurencyName = !fullCurencyName
})

let currencySetting = false
const handleCurrencySettings = (()=>{
    currencySetting = !currencySetting
})

let is_light_mode = false
const handleLightMode = ()=>{
    is_light_mode = !is_light_mode
}

</script>

<div class="sc-oXPCX iyNvkI">
    <div class="fullname-item">
        <p>Show full name of currency in crypto list</p>
        <button on:click={handleFullcurrencyName} class={`sc-giYglK hRMjrF switch ${fullCurencyName && "open"} `}>
            <div class="dot"></div>
        </button>
    </div>
    <div class="fullname-item">
        <div>
            <p>Currency Setting</p>
            <div class="local-currency">
               <span class="coin-icon">
                  <Icon src={BiSolidBadgeDollar}  size="23"  color="rgba(153, 164, 176, 0.6)"  title="rror" />
               </span>
               USD
               </div>
        </div>
        <button on:click={handleCurrencySettings} class={`sc-giYglK hRMjrF switch ${currencySetting && "open"} `}>
            <div class="dot"></div>
        </button>
    </div>
    <div>
        <p>Display mode</p>
        <div class="sc-gSQFLo dprxuS theme">
            <button on:click={handleLightMode} class="theme-check">
                <div class="item is-active">
                  <Icon src={IoMoon}  size="23"  color="rgba(153, 164, 176, 0.6)"  title="rror" />
                </div>
                <div class="item">
                  <Icon src={HiSolidLightBulb}  size="23"  color="rgba(153, 164, 176, 0.6)"  title="arror" />
                </div>
            </button>
            <div class="theme-word">
                <p>Darkmode</p>
                <p>Currently</p>
            </div>
        </div>
        <div>
            <p>Language</p>
            <div class="sc-jJoQJp gOHquD select  language-select">
                <div class="select-trigger">
                    English
                    <div class="arrow ">
                     <Icon src={RiSystemArrowRightSLine}  size="23"  color="rgba(153, 164, 176, 0.6)"  title="rror" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Main: English
Option 2: Bahasa Melayu
Option 3: Simplified Chinese -->
<style>
.iyNvkI > div:first-child {
    padding-top: 0px;
}
.iyNvkI .fullname-item {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.iyNvkI > div {
    border-bottom: 1px solid rgba(152, 167, 181, 0.15);
    padding: 0.875rem 0px;
}
.iyNvkI > div p {
    margin: 0px;
    height: 1.25rem;
    line-height: 1.25rem;
}
.switch {
    background-color: rgba(30, 32, 36, 0.6);
}
.hRMjrF.open {
    background-color: rgba(93, 160, 0, 0.2);
}
 .switch.open {
    background-color: rgba(93, 160, 0, 0.2);
}
.hRMjrF.open .dot {
    left: 0.75rem;
    background-color: rgb(67, 179, 9);
}
.hRMjrF {
    width: 1.75rem;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: rgb(49, 52, 60);
    position: relative;
    cursor: pointer;
}
.hRMjrF .dot {
    transition: all 0.2s ease 0s;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: rgba(153, 164, 176, 0.6);
}
.iyNvkI .local-currency {
    width: 6.875rem;
    height: 2.5rem;
    border-radius: 1.25rem;
    margin-top: 0.875rem;
    background-color: rgba(37, 39, 46, 0.8);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(245, 246, 247);
}
.iyNvkI .local-currency .coin-icon {
    width: 1.5rem;
    margin-right: 1.125rem;
    margin-left: 0.625rem;
}
.switch {
    background-color: rgba(30, 32, 36, 0.6);
}
.iyNvkI .theme {
    margin-top: 0.875rem;
}
.iyNvkI .theme .theme-check {
    background-color: rgba(30, 32, 36, 0.6);
    border-radius: 1.25rem;
}
.dprxuS .theme-check {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: rgba(45, 48, 53, 0.5);
    height: 2.5rem;
    border-radius: 1.25rem;
    cursor: pointer;
}
.dprxuS .theme-word {
    margin-left: 0.75rem;
    font-size: 0.75rem;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
}
.dprxuS .theme-word > p:first-child {
    font-weight: bold;
    color: rgb(245, 246, 247);
}
.dprxuS .theme-word > p {
    margin: 0px;
    line-height: 1rem;
    height: 1rem;
    white-space: nowrap;
}
.iyNvkI > div:last-child {
    border-bottom: none;
}
.iyNvkI .select.language-select {
    width: 11.25rem;
}
.iyNvkI .select {
    width: 8.875rem;
    margin-top: 0.875rem;
}
.gOHquD {
    position: relative;
    height: 2.5rem;
    opacity: 1;
}
.iyNvkI .select .select-trigger {
    font-weight: bold;
    color: rgb(245, 246, 247);
    background-color: rgba(37, 39, 46, 0.8);
}
.gOHquD .select-trigger {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;
    height: 100%;
    cursor: pointer;
    padding: 0px 1.25rem;
    user-select: none;
    border-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
}
.gOHquD .select-trigger .arrow {
    width: 2.5rem;
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    top: 0px;
}
.dprxuS .theme-check .item {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    padding: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
.iyNvkI .theme .theme-check .item.is-active {
    background-image: linear-gradient(to left, rgb(85, 89, 102), rgb(85, 89, 102), rgb(88, 174, 20));
}

</style>

