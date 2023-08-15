import { writable } from 'svelte/store';
import { browser } from '$app/environment'

let screens = browser && window.innerWidth 

export const screen = writable(screens);