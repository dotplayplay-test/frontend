import { writable} from "svelte/store"
let route = ""
export let routes = writable(route)
let authToken = ''
export let handleAuthToken = writable(authToken)

let current_routeEl = ""
export let current_route = writable(current_routeEl)

let nested_current_routeEl = ""
export let nested_current_route = writable(nested_current_routeEl)