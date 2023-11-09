import {
  browser
} from '$app/environment'


const id = browser && JSON.parse(localStorage.getItem('user'))
const preloaed = browser && JSON.parse(localStorage.getItem('preload'))
/** @type {import('./$types').PageLoad} */

export function load({ route, fetch }) {
  return {route : route.id, token: id , preloaed}
}