import { ServerURl } from "$lib/backendUrl";
import axios from "axios";

export const fetchMedals = async ({ token }) => {
  let baseUrl = ServerURl();
  let endpoint = `${baseUrl}/api/medal/all-medals`;

  if (token) {
    endpoint = `${baseUrl}/api/medal/all-user-medals`;
  }

  const response = await axios.get(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data ?? [];
};
