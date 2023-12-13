<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCopy from "svelte-icons-pack/io/IoCopy";
import { deposit_info } from "$lib/store/deposit"

let address = $deposit_info.pay_address 
let address_msg = ''
function handleCopyCode() {
    navigator.clipboard.writeText(address)
    .then(() => {
        address_msg = 'Copied'
    setTimeout(()=>{
        address_msg = ("")
},4000)
})
}

let amount_msg = ''
let amount = $deposit_info.amount
function handleCopyAmomut() {
    navigator.clipboard.writeText(amount)
    .then(() => {
        amount_msg = 'Copied'
    setTimeout(()=>{
        amount_msg = ("")
},4000)
})
}
let hours
let minutes 
let seconds
$:{
setInterval(()=>{
    let countDownDate = new Date($deposit_info.expire_in).getTime();
    let now = new Date().getTime();
    let distance = countDownDate - now;
     hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000)
}




</script>
    
    <div class="sc-dpAhYB emReoO">
        <div class="sc-wkwDy blotCy">
            <div class="label">
                <div>Deposit Address</div>
                <div>Expire in: <span style="color: yellow; letter-spacing:1px"> {`${ typeof hours === "number"  && hours}hr : ${ typeof minutes === "number" && minutes}m : ${typeof seconds === "number" && seconds}s`}</span> </div>
            </div>
            <div class="box">
                <div class="cont">
                    <input class="address" readonly value={$deposit_info.pay_address}>
                    <div style="color: green; font-weight:bold">{address_msg}</div>
                    <button class="sc-iqseJM cBmlor button button-normal copy-button">
                        <button on:click={handleCopyCode} class="button-inner">
                            <Icon src={IoCopy}  size="18"  color="rgb(255, 255, 255)" className="custom-icon" title="arror" />
                        </button>
                    </button>
                </div>
            </div>
        </div>
        <div class="sc-wkwDy blotCy">
            <div class="label">
                <div>Deposit Amount (Don't pay more than <span class="cl-primary">{$deposit_info.amount}.00{$deposit_info.crypto}</span> ) </div>
                <div style="color: green; font-weight:bold">{amount_msg}</div>
            </div>
            <div class="box">
                <div class="cont">
                    <input class="address" readonly value={$deposit_info.amount}>
                    <button on:click={handleCopyAmomut} class="sc-iqseJM cBmlor button button-normal copy-button">
                        <div class="button-inner">
                            <Icon src={IoCopy}  size="18"  color="rgb(255, 255, 255)" className="custom-icon" title="arror" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div class="sc-wkwDy blotCy">
            <div class="label">
                <div>Network</div>
            </div>
            <div class="box">
                <div class="cont">
                    <input class="address" readonly value={$deposit_info.network}>
                </div>
            </div>
        </div>
        <div class="sc-gDGHff jeroAP">
            <img src="https://i.ibb.co/2k87TQ4/qrcode-1.png" alt="">
        </div>
        <div class="sc-ywFzA egWBux">
            <p><span class="cl-primary">NOTICE:</span> Send only USDT to this address. Coins will be deposited after 6 network confirmations.</p>
        </div>
    </div>
    <style>
       
    </style>