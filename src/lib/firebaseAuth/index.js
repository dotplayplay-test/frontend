import firebase from "firebase/compat/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import {  goto } from "$app/navigation"
import { useLogin } from "../hook/useLogin";
import { useProfile } from "../hook/useProfile";
import { getFirestore } from "firebase/firestore";
import { useRegister } from "./createUser";
const { register } = useRegister()

const { createProfile } = useProfile()
const { login } = useLogin()

import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider,
    signInWithEmailAndPassword, signOut } from "firebase/auth";
export const firebaseConfig = {
    apiKey: "AIzaSyDzTvAEBt59YRXXHcddEN-jPCpYL17zYRQ",
    authDomain: "dotplayplay-1692584380329.firebaseapp.com",
    projectId: "dotplayplay-1692584380329",
    storageBucket: "dotplayplay-1692584380329.appspot.com",
    messagingSenderId: "934101502841",
    appId: "1:934101502841:web:7c618c3beffda794a3bda8"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const handleSignIn = (async (email, password)=>{
    const auth = getAuth(app);
    await createUserWithEmailAndPassword(auth, email, password)
    .then((res)=>{
        register(res)
    })
    .catch((err)=>{
     alert(err.code)
    })
 })

 export const handleLogin = (async (email, password)=>{
    let errorMessage;
    const auth = getAuth(app);
   await signInWithEmailAndPassword(auth, email, password)
   .then((res)=>{
     login(res)
    goto("/")
   })
   .catch((err)=>{
    alert(err.code)
   })
 })

 export const handleGoogleAuth = (()=>{
    const auth = getAuth(app);
    signInWithPopup(auth, new GoogleAuthProvider())
    .then((res)=>{
        login(res)
       })
       .catch((err)=>{
        alert(err.code)
    })
 })

 export const handleFacebookAuth = (()=>{
    const auth = getAuth(app);
    signInWithPopup(auth, new FacebookAuthProvider())
    .then((res)=>{
        goto("/")
        login(res)
        createProfile(res)
       })
       .catch((err)=>{
        alert(err.code)
    })
 })

 export const handleLogout = (async()=>{
    const auth = getAuth(app);
    signOut(auth).then((res) => {
        console.log(res)
        localStorage.removeItem("user");
      }).catch((error) => {
       console.log(error)
      });
 })
