import { persistStore } from './persistStore.js'

const disable = false

export const myStore = persistStore(disable)

export const winners = persistStore([])