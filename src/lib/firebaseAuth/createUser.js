import { browser } from '$app/environment';
import { handleNestedRoute } from "$lib/store/nested_routes"
import { handleAuthToken } from "$lib/store/routes"
import { profileStore } from "$lib/store/profile"
import { default_Wallet } from "$lib/store/coins"

export const useRegister = () => {
    let error;
    let isLoading;
    const register = async (data) => {
      isLoading = true
      error = null
      const response = await fetch(
        "http://localhost:8000/api/users/register",{
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
        let db = {
          email: json.profile.email,
          Token: json.Token
        }
        localStorage.setItem("user", JSON.stringify(db));
        handleAuthToken.set(json.Token)
        profileStore.set(json.profile)
        browser &&  window.history.replaceState(null, 'info', '/login/info')
        handleNestedRoute.set('/login/info')
        default_Wallet.set(json.wallet)
        isLoading = false
      }
    };
    return { register };
}