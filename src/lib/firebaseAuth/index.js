import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import {  goto } from "$app/navigation"
import { useLogin } from "../hook/useLogin";
import { useProfile } from "../hook/useProfile";
import { getFirestore, addDoc, collection, doc, updateDoc } from "firebase/firestore";

const { createProfile } = useProfile()
const { login } = useLogin()

import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider,
    signInWithEmailAndPassword, signOut  } from "firebase/auth";
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
        createProfile(res)
        goto("/login/info")
        handleCrteateProfile(res.user.uid)
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
    goto("/")
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
        goto("/login/info")
        createProfile(res)
        handleCrteateProfile(res.user.uid)
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
        createProfile(res)
       })
       .catch((err)=>{
        console.log(err)
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

 export const handleCrteateProfile = (async(id)=>{
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        function generateString(length) {
            let result = ' ';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        let username = (generateString(9));
    try {
        const docRef = await addDoc(collection(db, "profile"), {
            user_id: id,
            username,
            firstname: "",
            lastname: "",
            born: '',
            profile_image: "https://img2.nanogames.io/avatar/head1.png",
            username,  
            vip_level: "V0",
            total_waggered: 0,
            total_wins: 0, 
            total_chats: 0,
            joined_at: new Date()
        });
        localStorage.setItem("profileID", JSON.stringify(docRef.id));
      } catch (e) {
        console.error("Error adding document: ", e);
      }
})

export const handleProfileUpdate = (async(id)=>{
    const userId = doc(db, "profile", id.user_id);
    await updateDoc(userId, {
        username: id.username,
        profile_image: id.profile_image
    });
})

export const handleAllProfileUpdate = ( async(user)=>{
    const userId = doc(db, "profile", user.user_id);
    await updateDoc(userId, {
        firstname: user.firstname,
        lastname: user.lastname,
        born: user.dob
    });
})