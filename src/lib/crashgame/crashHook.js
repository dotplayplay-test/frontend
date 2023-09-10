import { handleHasbet,handleHasbet_amount } from "./store"
import {default_Wallet} from "../store/coins"

export const useCrashBet = () => {
    let error = ''
    let isLoading = false
    let result = ''
    const user = JSON.parse(localStorage.getItem('user'))
    const crashBet = async (data) => {
      isLoading = true
      error = null
      const response = await fetch(
        "http://localhost:8000/api/user/crash-game/bet",{
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
        isLoading = false;
        error = json.error
        console.log(error)
      }
      if (response.ok) {
        result = json
        let data = {
          coin_name: result.bet_token_name,
          coin_image:  result.bet_token_img,
          balance:  result.current_amount,
          suffix: "0000",
      }
        default_Wallet.set(data)
        handleHasbet_amount.set(data.bet_amount)
        handleHasbet.set(true)
        isLoading = false
      }
    };
    return { crashBet, isLoading, error };
  };