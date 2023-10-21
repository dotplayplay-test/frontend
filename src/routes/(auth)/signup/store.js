import { writable } from "svelte/store"

let s_isloading = false 
export let is_loadingS = writable(s_isloading)

let error_msg = ''
export let error_msgS = writable(error_msg)