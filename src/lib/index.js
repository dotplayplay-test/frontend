import { browser } from '$app/environment'
import { profileStore, first_load} from "../lib/store/profile"
import { default_Wallet, usdt_Wallet, ppfWallet,ppdWallet,ppeWallet, pplWallet } from "../lib/store/coins"
import { ServerURl } from "$lib/backendUrl"
const URL = ServerURl()

export  const UserProfileEl = () => {
first_load.set(true)
const id = browser && JSON.parse(localStorage.getItem('user'))

const handleprofile = async () => {
const response = await fetch( `${URL}/api/profile`,{
        method: "GET",
        headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${id}`
        }
    }
    );
    const json = await response.json();
    if(!response.ok){
    (json)
    }
    if (response.ok) {
        return json.users[0]
    }
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
        return json[0]
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
                return json[0] 
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
        return json[0] 
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
        return json[0]
    }
};

    return { handleprofile, handleUSDTwallet, handlePPFwallet, handlePPLwallet, handlePPDwallet }
};