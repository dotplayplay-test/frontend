export const useLogin = () => {
  let error;
  let isLoading;
  const login = async (data) => {
    isLoading = true
    error = null
    const response = await fetch(
      "http://localhost:8000/api/users/signup",{
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
      isLoading = false
    }
  };
  return { login, isLoading, error };
};