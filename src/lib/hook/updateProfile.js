import {ServerURl} from "$lib/backendUrl"
const URL = ServerURl()

export const updateProfile = () => {
    let error;
    let isLoading;
    const useUpdateProfile = async (data) => {
    const user = JSON.parse(localStorage.getItem('user'))
      isLoading = true
      error = null
      const response = await fetch(
        `${URL}/api/profile/update-profile`,{
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json",
            'Authorization': `Bearer ${user.Token}`
          },
        }
      );
      const json = await response.json();
      console.log(json)
      if (!response.ok) {
          error = json.error
          console.log(error)
      }
      if(response.ok){
        window.location.href = '/'
      }
    };
    return { useUpdateProfile, isLoading, error };
  };