import { ServerURl } from "$lib/backendUrl"
const URL = ServerURl()
export const UseFetchData = (handleAuthToken) => {
  let error;
  const fetchData = async (endpoint, data = {}, method = "GET") => {
    const response = await fetch(
      `${URL}/api${endpoint}`, {
      method,
      ...(method === "POST" ? { data: JSON.stringify(data)} : {}),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${handleAuthToken}`,
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