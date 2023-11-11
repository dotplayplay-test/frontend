import { writable} from "svelte/store"

let showCOins = false
export let showcoins = writable(showCOins)


let handleSecurityEl = false
export let handleSecurity = writable(handleSecurityEl)


let isLoading = false
export let is_loading = writable(isLoading)

let depositBonusReportAccess = ""
export let deposit_info = writable(depositBonusReportAccess)