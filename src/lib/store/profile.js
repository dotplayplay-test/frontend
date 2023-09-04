import { writable } from "svelte/store"
let profile = {}
let isLoggin = false
let isLoading = true
export let profileStore = writable(profile)
export let handleisLoggin = writable(isLoggin)
export let handleisLoading = writable(isLoading)
