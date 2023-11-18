
import { HandleDicePoint, isbetLoadingBtn,dice_history } from "../store/index"
import {default_Wallet} from "../../../store/coins"
import cr from "../audio/mixkit-achievement-bell-600.wav"
import { HandleHas_won } from "../store/index";
import { browser } from '$app/environment';
import { ServerURl } from "$lib/backendUrl"
const URl = ServerURl()

function playSound() {
  const audio = new Audio(cr);
  audio.volume = 0.5;
  audio.play();
}

export const DiceHook = () => {
    const user = browser && JSON.parse(localStorage.getItem('user'))
    const playdice = async (data) => {
      isbetLoadingBtn.set(true)
      const response = await fetch(
        `${URl}/api/user/dice-game/bet`,{
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
        let prev = json.history[json.history.length - 1]
        if(prev.has_won){
          playSound()
          HandleHas_won.set(true)
        }else{
          HandleHas_won.set(false)
        }
      }
    };
    return { playdice};
  };