import { writable } from "svelte/store"

let error = ''
export let error_msg = writable(error)

let is_loadingEl = false
export let is_loading = writable(is_loadingEl)