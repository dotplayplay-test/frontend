import { writable } from "svelte/store";

let err = ''
export let error = writable(err)