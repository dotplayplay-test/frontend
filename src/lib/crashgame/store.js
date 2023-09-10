import { writable } from "svelte/store"

let isLoading = true
let isRunning = false
let isCrashed = false

let isUpto2 = false
let trackTwo = 3    

export let loadingCrash = writable(isLoading)
export let crashIsAlive = writable(isRunning)
export let hasCrashed = writable(isCrashed)

export let IsUpto2 = writable(isUpto2)
export let TrackTwo = writable(trackTwo)

let running_at = 0
let loading_at = 5
let crash_at = "0.00" 
let animateLoad = 220

export let Load_animation = writable(animateLoad)
export let crashLoad = writable(loading_at)
export let crashRunning = writable(running_at)
export let crashPoint = writable(crash_at)


let crashAnimate = ""
export let animateCrashCurve = writable(crashAnimate)

let history = [ 
    {id:5610140, crashpoint: 0.34},
    {id:5610141, crashpoint: 2.34},
    {id:5610142, crashpoint: 12.34},
    {id:5610143, crashpoint: 2.34},
    {id:5610144, crashpoint: 7.34},
    {id:5610145, crashpoint: 2.34},
    {id:5610146, crashpoint: 1.34},
    {id:5610147, crashpoint: 5.34},
    {id:5610148, crashpoint: 20.34},
    {id:5610149, crashpoint: 2.64},
    {id:5610150, crashpoint: 30.34},
    {id:5610151, crashpoint: 1.34},
    {id:5610152, crashpoint: 9.34},
    {id:5610153, crashpoint: 1.34},
]
export let historyStore = writable(history)


let hasbet = false
let hasbet_amount = 0
export let handleHasbet = writable(hasbet)
export let handleHasbet_amount = writable(hasbet_amount)