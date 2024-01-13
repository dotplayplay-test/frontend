import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const KEY = 'region';
let value;

function getPersistedValue() {
    if (browser) {
        return localStorage.getItem(KEY) || 'English';
    } else {
        return 'English';
    }
}

value = getPersistedValue()

export const region = writable(value);


function persistValue(value) {
    if (browser) {
        localStorage.setItem(KEY, value);
    }
}

region.subscribe((value) => persistValue(value));

region.set(getPersistedValue())