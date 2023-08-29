export const usePublicMessages = () => {
    let error;
    let isLoading;
    const sendMessage = async (data) => {
      isLoading = true
      error = null

      const user = JSON.parse(localStorage.getItem('user'))
      const response = await fetch("http://localhost:8000/api/public-chat",{
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
        // Save user to localStorage
        console.log(json)
        // Update the auth store
        isLoading = false
      }
    };
    return { sendMessage, isLoading, error };
  };