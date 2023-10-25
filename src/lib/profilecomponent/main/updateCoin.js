import { ServerURl } from "$lib/backendUrl"
const URL = ServerURl()

export const updateCoins = () => {
    let error;
    let isLoading;
    const useCoinUpdate = async (data) => {
    const user = JSON.parse(localStorage.getItem('user'))
      isLoading = true
      error = null
      const response = await fetch(`${URL}/api/wallet/update-default-wallets`,{
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json",
            'Authorization': `Bearer ${user}`
          },
        }
      );
      const json = await response.json();
      if (!response.ok) {
          error = json.error
          console.log(error)
      }
      if(response.ok){
        (json)
      }
    };
    return { useCoinUpdate, isLoading, error };
  };