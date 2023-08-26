import { initializeApp } from "firebase/app";
import {  goto } from "$app/navigation"
import { useLogin } from "../hook/useLogin";
import { useProfile } from "../hook/useProfile";
import { browser } from '$app/environment'


const { createProfile } = useProfile()
const { login } = useLogin()
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider,
    signInWithEmailAndPassword, signOut  } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDzTvAEBt59YRXXHcddEN-jPCpYL17zYRQ",
    authDomain: "dotplayplay-1692584380329.firebaseapp.com",
    projectId: "dotplayplay-1692584380329",
    storageBucket: "dotplayplay-1692584380329.appspot.com",
    messagingSenderId: "934101502841",
    appId: "1:934101502841:web:7c618c3beffda794a3bda8"
};


export const app = initializeApp(firebaseConfig);

export const handleSignIn = (async (email, password)=>{
    const auth = getAuth(app);
    await createUserWithEmailAndPassword(auth, email, password)
    .then((res)=>{
        createProfile(res)
        goto("/login/info")
        login(res)
       })
       .catch((err)=>{
        console.log(err)
    })
 })

 export const handleLogin = (async (email, password)=>{
    let errorMessage;
    const auth = getAuth(app);
   await signInWithEmailAndPassword(auth, email, password)
   .then((res)=>{
    login(res)
    createProfile(res)
    goto("/login/info")
   })
   .catch((err)=>{
    const errorCode = err.code;
     errorMessage = err.message;
   })
   console.log(errorMessage)
 })

 export const handleGoogleAuth = (()=>{
    const auth = getAuth(app);
    signInWithPopup(auth, new GoogleAuthProvider())
    .then((res)=>{
        login(res)
        goto("/")
       })
       .catch((err)=>{
        console.log(err)
    })
 })

 export const handleFacebookAuth = (()=>{
    const auth = getAuth(app);
    signInWithPopup(auth, new FacebookAuthProvider())
    .then((res)=>{
        goto("/")
        login(res)
       })
       .catch((err)=>{
        console.log(err)
    })
 })


 export const handleLogout = (async()=>{
    const auth = getAuth(app);
    // localStorage.removeItem('user')
    signOut(auth).then((res) => {
        console.log(res)
      }).catch((error) => {
       console.log(error)
      });
 })