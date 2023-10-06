import { writable } from "svelte/store";

let err = ''
export let error = writable(err)

let affilliate_infoEl = ''
export let affilliate_info = writable(affilliate_infoEl)

let is_activated = false
export let Handleis_activated = writable(is_activated)
