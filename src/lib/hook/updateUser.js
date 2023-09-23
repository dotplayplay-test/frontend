
export const updateUser = () => {
    const useUpdate = async (data) => {
      let request = {
        username: data.username,
         profile_image:data.profile_image,
          email :data.user_id.email
      }
      const response = await fetch(
        "http://localhost:8000/api/profile/update-user",{
          method: "POST",
          body: JSON.stringify(request),
          headers: {
            "Content-type": "application/json",
            'Authorization': `Bearer ${data.user_id.Token}`
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
    return { useUpdate };
  };