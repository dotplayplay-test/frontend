import { writable} from "svelte/store"
let route = ""

export let routes = writable(route)