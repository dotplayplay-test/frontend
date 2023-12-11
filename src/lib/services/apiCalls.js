import { Endpoints } from "./endPoints";
import { handleAuthToken } from "$lib/store/routes";

const ChangePassword = async (oldPassword, newPassword, confirmNewPassword) => {
    try {
      const response = await fetch(Endpoints.Settings.ChangePassword, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${handleAuthToken}`
            },
        body: JSON.stringify({
          oldPassword,
          newPassword,
          confirmNewPassword,
        }),
      });

      if (response.ok) {
        errorMessage = "";
      } else {
        // Handle error response
        const errorData = await response.json();
      }
    } catch (error) {
      console.error("Error:", error);
      errorMessage = "An error occurred while processing your request.";
    }
  };