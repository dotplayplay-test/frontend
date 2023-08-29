import {
    goto
} from "$app/navigation"

export const updateUser = () => {
    let error;
    let isLoading;
    const useUpdate = async (data) => {
    const user = JSON.parse(localStorage.getItem('user'))
      isLoading = true
      error = null
      const response = await fetch(
        "http://localhost:8000/api/profile/update-user",{
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
          error = json.error
          console.log(error)
      }
      if(response.ok){
        window.location.href = '/'
      }
    };
    return { useUpdate, isLoading, error };
  };