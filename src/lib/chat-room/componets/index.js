import {ServerURl} from "$lib/backendUrl"
const URL = ServerURl()

export const usePublicMessages = () => {
    let error;
    let isLoading;
    const sendMessage = async (data) => {
      isLoading = true
      error = null
      const user = JSON.parse(localStorage.getItem('user'))
      const response = await fetch(`${URL}/api/public-chat`,{
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
      }
      if (response.ok) {
        // Save user to localStorage
        // Update the auth store
        isLoading = false
      }
    };
    return { sendMessage, isLoading, error };
  };