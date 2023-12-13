import { writable } from "svelte/store";

let chatsEL = []
export let chats = writable(chatsEL)