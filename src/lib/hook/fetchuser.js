import { writable} from "svelte/store"

let profileAuth = ""

export let profile = writable(profileAuth)