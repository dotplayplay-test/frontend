

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
        // Save user to localStorage
        localStorage.setItem("user", JSON.stringify(json));
        // Update the auth store
        window.location.href = '/login/info'
        isLoading = false
      }
    };
    return { register, isLoading, error };
  };