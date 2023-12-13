import { ServerURl } from "$lib/backendUrl"
const URL = ServerURl()
export const UseTransaction = () => {
  let error;
  let isLoading;
  const user = JSON.parse(localStorage.getItem('user'))
  const Swap = async (data) => {
    isLoading = true
    error = null
    const response = await fetch(
      `${URL}/api/trans/swap`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
        'Authorization': `Bearer ${user.Token}`
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
      window.location.href = '/wallet/swap'
      isLoading = false
    }
  };
  return { Swap, isLoading, error };
};