import { writable } from "svelte/store";

// exports
export let medals = writable([]);
export let earnedMedals = writable(0);
export let medalProgress = writable("0%");
