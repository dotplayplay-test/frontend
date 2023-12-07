import { ServerURl } from "$lib/backendUrl"
import { handleAuthToken } from "$lib/store/routes";
const URL = ServerURl()
export const UseFetchData = () => {
  let error;
  const fetchData = async (endpoint, data = {}, method = "GET") => {
    const response = await fetch(
      `${URL}${endpoint}`, {
      method,
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${$handleAuthToken}`,
      },
    }
    );
    const json = await response.json();
    if (!response.ok) {
      error = json.error
      console.log(error)
      return { error }
    }
    if (response.ok) {
      return { data: json };
    }
  };
  return { fetchData };
};