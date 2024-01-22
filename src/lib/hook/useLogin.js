import { handleAuthToken } from "$lib/store/routes";
import { profileStore } from "$lib/store/profile";
import { default_Wallet } from "$lib/store/coins";
import { is_loading } from "$lib/nestedpages/auth/login/store";
import { ServerURl } from "$lib/backendUrl";
const URL = ServerURl();

export const useLogin = () => {
  let error;
  let isLoading;
  const login = async (data) => {
    is_loading.set(true);
    error = null;
    const response = await fetch(`${URL}/api/users/signup`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      is_loading.set(false);
      error = json.error;
      console.log(error);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json.Token));
      console.log(json.Token);
      handleAuthToken.set(json.Token);
      profileStore.set(json.result);

      default_Wallet.set(json.default_wallet);
      isLoading = false;
      window.location.href = "/";
      // goto("/")
    }
  };
  return { login, isLoading, error };
};
