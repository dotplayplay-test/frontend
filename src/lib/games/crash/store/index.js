import { writable  } from "svelte/store";

let game = null;
export let crashGame = writable(game)

let gameType = 1;
export let crashGameType = writable(gameType)

let _liveStats = null;
export let liveStats = writable(_liveStats);

let error = ''
export let error_msg = writable(error)
