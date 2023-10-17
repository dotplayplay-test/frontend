import { writable } from "svelte/store";

let error = ''
export let error_msg = writable(error)