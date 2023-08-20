
import { writable } from 'svelte/store';

let home;
let lottery;
let original
let affiliate;
let vipclub
let recent
let probablyFair
let favourite
let promotion

let routes = [
    {id:1, home: "/", }
]

onMount(() => {
    if (browser && window.location.pathname === "/") {
        home = true
    } else if (browser && window.location.pathname === "/crash" || browser && window.location.pathname === "/plinko" || 
    browser && window.location.pathname === "/tower" || browser && window.location.pathname === "/diamond" || 
    browser && window.location.pathname === "/classic-dice" || browser && window.location.pathname === "/mines" || browser && window.location.pathname === "/hilo") {
        original = true
    } else if (browser && window.location.pathname === "/lottery") {
        lottery = true
    } else if (browser && window.location.pathname === "/affiliate") {
        affiliate = true
    } else if (browser && window.location.pathname === "/help/provably-fair" ||
                browser && window.location.pathname === "/help/agreement" ||
                browser && window.location.pathname === "/help/coinlimit" ||
                browser && window.location.pathname === "/help/contactus" ||
                browser && window.location.pathname === "/help/fee" ||
                browser && window.location.pathname === "/help/googlecheck" ||
                browser && window.location.pathname === "/help/faq" ||
                browser && window.location.pathname === "/help/passcurrency" ||
                browser && window.location.pathname === "/help/privacy" ||
                browser && window.location.pathname === "/help/reglog" ||
                browser && window.location.pathname === "/help/swappolicy" ||
                browser && window.location.pathname === "/help/terms-service"
                ) 
     {
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
    else if (browser && window.location.pathname === "/promotion") {
        promotion = true
    }
})

const handleNavigation = ((e) => {
    if (e === "/") {
        goto(e)
        home = true
        lottery = false
        vipclub = false
        affiliate = false
        recent = false
        favourite = false
        original = false
        probablyFair = false
    } else if (e === "/lottery") {
        lottery = true
        home = false
        affiliate = false
        vipclub = false
        recent = false
        favourite = false
        original = false
        probablyFair = false
        promotion = false
        goto(e)
    } else if (e === "/affiliate") {
        lottery = false
        home = false
        vipclub = false
        affiliate = true
        recent = false
        favourite = false
        original = false
        goto(e)
        probablyFair = false
        promotion = false
    }
    else if (e === "/vip-games") {
        lottery = false
        home = false
        vipclub = true
        affiliate = false
        recent = false
        favourite = false
        original = false
        probablyFair = false
        promotion = false
        goto(e)
    }
    else if (e === "/help/provably-fair") {
        lottery = false
        home = false
        vipclub = false
        affiliate = false
        recent = false
        favourite = false
        original = false
        goto(e)
        promotion = false
        probablyFair = true
    }
    else if (e === "/recent-play") {
        lottery = false
        recent = true
        home = false
        vipclub = false
        affiliate = false
        favourite = false
        original = false
        goto(e)
        probablyFair = false
        promotion = false
    }
    else if (e === "/favourite") {
        lottery = false
        recent = false
        home = false
        vipclub = false
        affiliate = false
        favourite = true
        original = false
        goto(e)
        promotion = false
    }
    else if (e === "/promotion") {
        lottery = false
        recent = false
        home = false
        vipclub = false
        affiliate = false
        favourite = true
        original = false
        goto(e)
        promotion = true
    }
    else {
        lottery = false
        recent = false
        home = false
        vipclub = false
        affiliate = false
        favourite = false
        original = true
        probablyFair = false
        promotion = false
    }
})

