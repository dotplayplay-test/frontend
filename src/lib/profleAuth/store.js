import { writable } from "svelte/store";

let error = ''
export let error_msg = writable(error)

let is_up = false
export let handleSepProfile = writable(is_up)