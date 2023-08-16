<script>
import { browser } from '$app/environment'
import { onMount } from "svelte";
let one
let two 
let three
let four
let five
let six 
let seven 
let eight
let nine
let ten
let eleven
let twelve
onMount(() => {
    if (browser && window.location.pathname === "/help/provably-fair") {
        one= true
    } else if (browser && window.location.pathname === "/help/agreement" ) {
        two = true
    } else if (browser && window.location.pathname === "/lottery") {
        lottery = true
    } else if (browser && window.location.pathname === "/affiliate") {
        affiliate = true
    } else if (browser && window.location.pathname === "/help/provably-fair") {
        probablyFair = true
    }
    else if (browser && window.location.pathname === "/vip-games") {
        vipclub = true
    }
    else if (browser && window.location.pathname === "/recent-play") {
        recent = true
    }
    else if (browser && window.location.pathname === "/favourite") {
        favourite = true
    }
})



const handleNavigation = ((e)=>{
    if(e === 1){
         one = true
         two = false
         three = false
         four = false
         five  = false
         six  = false
         seven  = false
         eight = false
         nine = false
         ten = false
         eleven = false
         twelve = false
    }
    else if(e === 2){
         one = false
         two = true
         three = false
         four = false
         five  = false
         six  = false
         seven  = false
         eight = false
         nine = false
         ten = false
         eleven = false
         twelve = false
    }
    else if(e === 3){
         one = false
         two = false
         three = true
         four = false
         five  = false
         six  = false
         seven  = false
         eight = false
         nine = false
         ten = false
         eleven = false
         twelve = false
    }
    else if(e === 4){
         one = false
         two = false
         three = false
         four = true
         five  = false
         six  = false
         seven  = false
         eight = false
         nine = false
         ten = false
         eleven = false
         twelve = false
    }
    else if(e === 5){
         one = false
         two = false
         three = false
         four = false
         five  = true
         six  = false
         seven  = false
         eight = false
         nine = false
         ten = false
         eleven = false
         twelve = false
    }
    else if(e === 6){
         one = false
         two = false
         three = false
         four = false
         five  = false
         six  = true
         seven  = false
         eight = false
         nine = false
         ten = false
         eleven = false
         twelve = false
    }
    else if(e === 7){
         one = false
         two = false
         three = false
         four = false
         five  = false
         six  = false
         seven  = true
         eight = false
         nine = false
         ten = false
         eleven = false
         twelve = false
    }
    else if(e === 8){
         one = false
         two = false
         three = false
         four = false
         five  = false
         six  = false
         seven  = false
         eight = true
         nine = false
         ten = false
         eleven = false
         twelve = false
    }
    else if(e === 9){
         one = false
         two = false
         three = false
         four = false
         five  = false
         six  = false
         seven  = false
         eight = false
         nine = true
         ten = false
         eleven = false
         twelve = false
    }
    else if(e === 10){
         one = false
         two = false
         three = false
         four = false
         five  = false
         six  = false
         seven  = false
         eight = false
         nine = false
         ten = true
         eleven = false
         twelve = false
    }
    else if(e === 11){
         one = false
         two = false
         three = false
         four = false
         five  = false
         six  = false
         seven  = false
         eight = false
         nine = false
         ten = false
         eleven = true
         twelve = false
    }
    else if(e === 12){
         one = false
         two = false
         three = false
         four = false
         five  = false
         six  = false
         seven  = false
         eight = false
         nine = false
         ten = false
         eleven = false
         twelve = true
    }
})



</script>

<div class="menuee">
    <a on:click={()=>handleNavigation(1)} class={ one ? "select" : ''} href="/help/provably-fair">Provably fair</a>
    <a on:click={()=>handleNavigation(2)} class={ two ? "select" : ''} href="/help/agreement">User Agreement</a>
    <a on:click={()=>handleNavigation(3)} class={ three ? "select" : ''} href="/help/coinlimit">Coin Accuracy Limit</a>
    <a on:click={()=>handleNavigation(4)} class={ four ? "select" : ''} href="/help/contactus">Support</a>
    <a on:click={()=>handleNavigation(5)} class={ five ? "select" : ''} href="/help/fee">Fee</a>
    <a on:click={()=>handleNavigation(6)} class={ six ? "select" : ''} href="/help/googlecheck">Google Authenticator</a>
    <a on:click={()=>handleNavigation(7)} class={ seven ? "select" : ''} href="/help/faq">FAQ</a>
    <a on:click={()=>handleNavigation(8)} class={ eight ? "select" : ''} href="/help/passcurrency">Cryptocurrency</a>
    <a on:click={()=>handleNavigation(9)} class={ nine ? "select" : ''} href="/help/privacy">Privacy Policy</a>
    <a on:click={()=>handleNavigation(10)} class={ ten ? "select" : ''} href="/help/reglog">Registration and Login</a>
    <a on:click={()=>handleNavigation(11)} class={ eleven ? "select" : ''} href="/help/swappolicy">NGSwap Policy</a>
    <a on:click={()=>handleNavigation(12)} class={ twelve ? "select" : ''} href="/help/terms-service">Terms of Service</a>
</div>

<style>

</style>
