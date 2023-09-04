import {
  browser
} from '$app/environment'

const id = browser && JSON.parse(localStorage.getItem('user'))

/** @type {import('./$types').PageLoad} */

export function load({ route, fetch }) {
  return {route : route.id, profile: id }
}