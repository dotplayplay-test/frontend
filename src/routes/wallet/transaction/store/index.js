import { writable } from "svelte/store";

let jsjk = [];
let ujsjk = false;
export let billStore = writable(jsjk);
export let billLoad = writable(ujsjk);
export let activeRouteAsset = writable(null);
