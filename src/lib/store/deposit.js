import { writable} from "svelte/store"

let showCOins = false
export let showcoins = writable(showCOins)

let isLoading = false
export let is_loading = writable(isLoading)

let depositBonusReportAccess
export let deposit_info = writable(depositBonusReportAccess)