import { handleAllPlayerStore } from "./store"
import {ServerURl} from "$lib/backendUrl"
const URL = ServerURl()
export const useAllplayer = () => {
    let cashoutError = ''
    let loadingCashout = false
    let result = ''
    const getAllPlayers = async (data) => {
      loadingCashout = true
      cashoutError = null
      const response = await fetch(
        `${URL}/admin/all-players/crash`,{
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const json = await response.json();
      if (!response.ok) {
        loadingCashout = false;
        cashoutError = json.error
      }
      if (response.ok) {
        result = json
        handleAllPlayerStore.set(result)
      }
    };
    return { getAllPlayers, loadingCashout, cashoutError };
  };