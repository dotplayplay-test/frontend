import { writable } from "svelte/store"
let profile = {}
export let profileStore = writable(profile)
