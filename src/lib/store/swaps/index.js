import {writable} from "svelte/store"

let sender = {}
let receiver = {}
let isOpen = false
let isSender = true

export let storeSender = writable(sender)
export let storeReceiver = writable(receiver)
export let checkIsOpen = writable(isOpen)
export let IsSender = writable(isSender)