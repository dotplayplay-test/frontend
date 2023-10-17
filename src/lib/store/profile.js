import { writable } from "svelte/store"
let profile = {}
let isLoggin = false
let isLoading = true
let first_loadEl = false

export let profileStore = writable(profile)
export let handleisLoggin = writable(isLoggin)
export let handleisLoading = writable(isLoading)
export let first_load = writable(first_loadEl)

let users_profileEl = []
export let users_profile = writable(users_profileEl)
