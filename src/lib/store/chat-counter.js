import { writable } from "svelte/store"

export let chatCounter = writable(0)
export let showChatCounter = writable(true)