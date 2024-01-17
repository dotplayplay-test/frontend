import {browser} from "$app/environment";
import { writable } from "svelte/store"

let _preferredCurrency = browser && localStorage.getItem("preferred-currency") || "AUD";

export const preferredCurrency = writable(_preferredCurrency);

let _rates = [];
export const currencyRates = writable(_rates);

let _viewInFiat = (browser && localStorage.getItem("view-in-fiat") === "true") || false;
export const viewInFiat = writable(_viewInFiat);