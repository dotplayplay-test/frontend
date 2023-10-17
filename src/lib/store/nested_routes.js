import { writable } from "svelte/store";

let is_active = ''
export let handleNestedRoute = writable(is_active)