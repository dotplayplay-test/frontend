import { redirect } from '@sveltejs/kit';


/** @type {import('./$types').PageLoad} */
export function load({ route, locals }) {
    // console.log(route.id); // '/a/[b]/[...c]'
    return {route : route.id}
}