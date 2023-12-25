import { writable } from "svelte/store"

let game = null;
export let hilo_game = writable(game)

let _soundSettings = {music: false, soundFx: false};

export let soundSettings = writable(_soundSettings)

let _soundManager = null;
export let soundManager = writable(_soundManager);

let _processing = false;
export let processingRequest = writable(_processing);
let _init = false;
export let initializing = writable(_init);

let _userBets = [];
export let userBets = writable(_userBets);
let _recentsBets = [];
export let recentBets = writable(_recentsBets);

let _hotkeysEnabled = false;
export let hotkeysEnabled = writable(_hotkeysEnabled);

let _liveStats = null;
export let liveStats = writable(_liveStats);

let error = ''
export let error_msg = writable(error)