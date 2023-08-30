/** @type {import('./$types').PageLoad} */


export function load({ route }) {
    // console.log(route.id); // '/a/[b]/[...c]'
    return {route : route.id}
}