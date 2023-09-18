
import { HandleDicePoint, isbetLoadingBtn,dice_history } from "../store/index"
import {default_Wallet} from "../../../store/coins"

export const DiceHook = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const playdice = async (data) => {
      isbetLoadingBtn.set(true)
      const response = await fetch(
        "http://localhost:8000/api/user/dice-game/bet",{
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json",
            'Authorization': `Bearer ${user.Token}`
          },
        }
      );
      const json = await response.json();
      if (!response.ok) {
        console.log(json.error)
      }
      if (response.ok) {
        isbetLoadingBtn.set(false)
        dice_history.set(json.history)
        default_Wallet.set(json.wallet)
        HandleDicePoint.set(json.point)
      }
    };
    return { playdice};
  };