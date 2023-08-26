import { redirect } from "@sveltejs/kit"
import { browser } from '$app/environment'

export const load = (async(event)=>{
const user = browser && await JSON.parse(localStorage.getItem('user'))


setTimeout(() => {
console.log(user)
    if(!user){
        redirect(302, "/login")
    }
}, 1500);
})