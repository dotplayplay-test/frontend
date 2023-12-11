import { writable } from 'svelte/store';

let initialIsLightMode = false;

// Check if running in a browser environment
if (typeof window !== 'undefined') {
  // Check if the value is stored in local storage
  const storedValue = localStorage.getItem('isLightMode');
  initialIsLightMode = storedValue ? JSON.parse(storedValue) : false;
}

// Create a writable store with the initial value
export const isLightMode = writable(initialIsLightMode);

// Subscribe to changes and update local storage
isLightMode.subscribe(value => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('isLightMode', JSON.stringify(value));
  }
});
