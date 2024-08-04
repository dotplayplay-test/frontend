import { writable  } from "svelte/store";

let game = null;
export let plinkoGame = writable(game)

let _liveStats = null;
export let liveStats = writable(_liveStats);

let error = ''
export let error_msg = writable(error)
