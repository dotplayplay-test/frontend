
export const updateUser = () => {
    const useUpdate = async (data) => {
      const response = await fetch(
        `${URL}/api/profile/update-user`,{
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json",
            'Authorization': `Bearer ${data.user_id.Token}`
          },
        }
      );
      const json = await response.json();
      if (!response.ok) {
          console.log(response)
      }
      if(response.ok){
        json
      }
    };
    return { useUpdate };
  };