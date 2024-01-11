import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const KEY = 'theme';
let value;

function getPersistedValue() {
    if (browser) {
        return localStorage.getItem(KEY) || 'dark';
    } else {
        return 'dark';
    }
}

value = getPersistedValue()

export const theme = writable(value);


function persistValue(value) {
    if (browser) {
        localStorage.setItem(KEY, value);
    }
}

theme.subscribe((value) => persistValue(value));

theme.set(getPersistedValue())