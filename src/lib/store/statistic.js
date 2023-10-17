import { writable } from "svelte/store"

let isStatistics = false
export const statisticsEl = writable(isStatistics)

let default_statisticsEl = ''
export let default_statistics = writable(default_statisticsEl)

let userStat = ''
export let userStatistics = writable(userStat)