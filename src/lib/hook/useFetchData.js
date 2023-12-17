import { ServerURl } from "$lib/backendUrl"
import axios from "axios";
const URL = ServerURl()
export const UseFetchData = (handleAuthToken) => {
  const fetch = async (endpoint, data = {}, method = "GET") => {
    const url = `${URL}/api${endpoint}`;
    const headers = {
      "Content-type": "application/json",
      Authorization: `Bearer ${handleAuthToken}`,
    }
    try {
      const response = await (method === "POST" ? axios.post(url, data, {
        headers
      }) : axios.get(url, { headers }));
      return { data: response.data };
    } catch (error) {
      console.log(error)
      return { error }
    }
  };
  return { fetch };
};