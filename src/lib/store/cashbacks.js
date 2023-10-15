import { writable } from "svelte/store";

let week_cashbackEl = ''
export let week_cashback = writable(week_cashbackEl)

let month_cashbackEl = ''
export let month_cashback = writable(month_cashbackEl)