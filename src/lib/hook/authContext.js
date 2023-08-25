import { writable } from "svelte/store"
import {
    browser
} from '$app/environment'
let userAuth;

const handleAuthUpdate = ((e)=>{
    userAuth = e
    console.log("AuthContext : ", JSON.parse(userAuth));
})

export const authReducer = ((type, data)=>{
    if(type === "Login"){
        handleAuthUpdate(data)
    }
    if(type === "Logout"){
        handleAuthUpdate(null)
    }
})

const user = browser && JSON.parse(localStorage.getItem("user"));
if(user){
    userAuth = user
}
// $: console.log("AuthContext : ", userAuth);

export const AuthContext = writable(userAuth);
