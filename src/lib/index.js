import {
    browser
} from '$app/environment'
import { profileStore} from "../lib/store/profile"
import { default_Wallet, usdt_Wallet , ppfWallet,ppdWallet,ppeWallet, pplWallet} from "../lib/store/coins"


export  const UserProfileEl = () => {
    let isloading = true
    let error = false
    const id = browser && JSON.parse(localStorage.getItem('user'))


  const profileEl = (async()=>{
    const response = await fetch(
    "http://localhost:8000/api/profile",{
        method: "GET",
        headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${id.Token}`
        },
    }
    );
    const json = await response.json();
    if(!response.ok){
        error = json.error
        isloading = false
    }
    if (response.ok) {
        profileStore.set(json[0])
        isloading = false
    }
})


const handleDefaultwallet = async () => {
    const response = await fetch(
        "http://localhost:8000/api/wallet/default-wallets",{
            method: "GET",
            headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${id.Token}`
            },
        }
        );
        const json = await response.json();

        if(!response.ok){
        (json)
        }
        if (response.ok) {
        default_Wallet.set(json[0]) 
        }
    };


const handlePPDwallet = async () => {
    const response = id && await fetch(
        "http://localhost:8000/api/wallet/ppd-wallet",{
            method: "GET",
            headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${id.Token}`
            },
        }
        );
        const json = await response.json();
        if (response.ok) {
        ppdWallet.set(json[0]) 
        }
    };
            
const handlePPEwallet = async () => {
    const response = await fetch(
        "http://localhost:8000/api/wallet/ppe-wallet",{
            method: "GET",
            headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${id.Token}`
            },
        }
        );
    const json = await response.json();
    if (response.ok) {
        ppeWallet.set(json[0])
    }
};
            
    const handlePPLwallet = async () => {
        const response = await fetch(
            "http://localhost:8000/api/wallet/ppl-wallet",{
                method: "GET",
                headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${id.Token}`
                },
            }
            );
            const json = await response.json();
            if (response.ok) {
                pplWallet.set(json[0])
            }
        };
            
const handlePPFwallet = async () => {
    const response = await fetch(
        "http://localhost:8000/api/wallet/ppf-wallet",{
            method: "GET",
            headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${id.Token}`
        },
        }
    );
    const json = await response.json();
    if (response.ok) {
        ppfWallet.set(json[0]) 
    }
};
    const handleUSDTwallet = async () => {
        const response = await fetch(
            "http://localhost:8000/api/wallet/usdt-wallet",{
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${id.Token}`
            },
            }
        );
    const json = await response.json();
        if (response.ok) {
            usdt_Wallet.set(json[0]) 
        }
    };
        


    return { profileEl, handleDefaultwallet, handleUSDTwallet, handlePPFwallet, handlePPLwallet,handlePPEwallet, handlePPDwallet }
};