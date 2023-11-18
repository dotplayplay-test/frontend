import { mine_history } from "../store/index"
import { ServerURl } from "$lib/backendUrl"
const URl = ServerURl()
import { browser } from '$app/environment';

export const MinesHistory = () => {
    const user = browser && JSON.parse(localStorage.getItem('user'))
    const historyMines = async (data) => {
      const response = await fetch(
        `${URl}/api/user/mine-game/mine-history`,{
          method: "GET",
          headers: {
            "Content-type": "application/json",
            'Authorization': `Bearer ${user}`
          },
        }
      );
      const json = await response.json();
      if (!response.ok) {
        console.log(json.error)
      }
      if (response.ok) {
        mine_history.set(json)
      }
    };
    return { historyMines};
};