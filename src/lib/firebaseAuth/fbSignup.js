import {  goto } from "$app/navigation";
import { handleAuthToken } from "$lib/store/routes"
import { profileStore } from "$lib/store/profile"
import { default_Wallet } from "$lib/store/coins"
import { ServerURl } from "$lib/backendUrl"
const URL = ServerURl()

export const fbUseLogin = () => {
  let error;
  let isLoading;
  const fblogin = async (data) => {
    isLoading = true
    error = null
    const response = await fetch(
      `${URL}/api/users/signup`,{
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
      localStorage.setItem("user", JSON.stringify(json.Token));
      handleAuthToken.set(json.Token)
      profileStore.set(json.result)
      goto("/")
      default_Wallet.set(json.default_wallet)
      isLoading = false
    }
  };
  return { fblogin };
};