
export const useProfile = () => {
    let error;
    let isLoading;
    const createProfile = async (data) => {
      isLoading = true
      error = null
      const response = await fetch(
        "http://localhost:8000/api/users/create-profile",{
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
      }
      if (response.ok) {
        isLoading = false
      }
    };
    return { createProfile, isLoading, error };
  };