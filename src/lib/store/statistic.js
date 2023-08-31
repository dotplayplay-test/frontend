import { writable } from "svelte/store"

let isStatistics = false

export const statisticsEl = writable(isStatistics)