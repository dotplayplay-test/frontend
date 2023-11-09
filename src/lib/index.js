import { browser } from '$app/environment'
import { profileStore, first_load} from "../lib/store/profile"
import { default_Wallet, usdt_Wallet, ppfWallet,ppdWallet,ppeWallet, pplWallet } from "../lib/store/coins"
import { ServerURl } from "$lib/backendUrl"
const URL = ServerURl()

export  const UserProfileEl = () => {
first_load.set(true)
let error = false
const id = browser && JSON.parse(localStorage.getItem('user'))

const handleDefaultwallet = async () => {
    // const response = await fetch(
    //     `${URL}/api/wallet/default-wallets`,{
    //         method: "GET",
    //         headers: {
    //         "Content-type": "application/json",
    //         "Authorization": `Bearer ${id}`
    //         },
    //     }
    //     );
    //     const json = await response.json();

    //     if(!response.ok){
    //     (json)
    //     }
    //     if (response.ok) {
    //     default_Wallet.set(json[0]) 
    //     }
    };


const handlePPDwallet = async () => {
    const response = id && await fetch(
        `${URL}/api/wallet/ppd-wallet`,{
            method: "GET",
            headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${id}`
            },
        }
        );
        const json = await response.json();
        if (response.ok) {
        ppdWallet.set(json[0]) 
        }
    };
                   
    const handlePPLwallet = async () => {
        const response = await fetch(
            `${URL}/api/wallet/ppl-wallet`,{
                method: "GET",
                headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${id}`
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
        `${URL}/api/wallet/ppf-wallet`,{
            method: "GET",
            headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${id}`
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
        `${URL}/api/wallet/usdt-wallet`,{
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${id}`
        },
        }
    );
const json = await response.json();
    if (response.ok) {
        usdt_Wallet.set(json[0]) 
    }
};

    return { handleDefaultwallet, handleUSDTwallet, handlePPFwallet, handlePPLwallet, handlePPDwallet }
};