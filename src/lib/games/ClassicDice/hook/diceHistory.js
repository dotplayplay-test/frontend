import { ServerURl } from "$lib/backendUrl"
const URl = ServerURl()
import { dice_history } from "../store/index"

export const DiceHistory = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const historyD = async (data) => {
      const response = await fetch(`${URl}/api/user/dice-game`,{
          method: "GET",
          headers: {
            "Content-type": "application/json",
            'Authorization': `Bearer ${user}`
        }});
      const json = await response.json();
      if (!response.ok) {
        console.log(json.error)
      }
      if (response.ok) {
        dice_history.set(json)
      }
    };
    return { historyD};
};