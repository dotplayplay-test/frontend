import { redirect } from '@sveltejs/kit';
import {
    browser
} from '$app/environment'

const id = browser && JSON.parse(localStorage.getItem('user'))

/** @type {import('./$types').PageLoad} */

export function load({ route, fetch }) {
const handlePPDwallet = async () => {
const response =  await fetch(
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
    return json[0]
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
    return json[0]
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
        return json[0]
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
      return json[0]
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
          return json[0]
        }
      };
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
        return json[0]
      }
    };
  

    const handleUserProfile = async () => {
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
          (json)
        }
  
        if (response.ok) {
          return json[0]
        }
      };


    return {route : route.id, ppdWallet: id &&  handlePPDwallet(), ppeWallet: id &&  handlePPEwallet(), userProfile: handleUserProfile(),
       pplWallet: id &&  handlePPLwallet(), ppfWallet: id &&  handlePPFwallet(), usdtWallet: id &&  handleUSDTwallet(), defaultWallet: id &&  handleDefaultwallet() }
}