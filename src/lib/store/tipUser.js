import { writable } from "svelte/store"

let tipped = ''

export let tipped_user = writable(tipped)
