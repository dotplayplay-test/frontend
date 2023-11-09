import { handleAuthToken } from "$lib/store/routes"
import { profileStore } from "$lib/store/profile"
import { default_Wallet } from "$lib/store/coins"
import {  goto } from "$app/navigation";
import { ServerURl } from "$lib/backendUrl"
const URL = ServerURl()

export const useRegister = () => {
    let error;
    let isLoading;
    const register = async (data) => {
      isLoading = true
      error = null
      const response = await fetch(
        `${URL}/api/users/register`,{
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const json = await response.json();
      if (!response.ok) {
        isLoading = false;
        error = json.error
        console.log(error)
      }
      if (response.ok) {
        let hisex = json.wallet
        hisex.forEach(element => {
          if(element.is_active){
            default_Wallet.set(element)
          }
       });
        localStorage.setItem("user", JSON.stringify(json.Token));
        handleAuthToken.set(json.Token)
        profileStore.set(json.result)
        // window.location.href = ("/info")
        goto("/info")
        // default_Wallet.set(json.default_wallet)
        isLoading = false
      }
    };
    return { register };
}