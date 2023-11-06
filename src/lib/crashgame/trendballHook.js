import { redTrendballEl} from "./store"
import {default_Wallet} from "../store/coins"
import {ServerURl} from "$lib/backendUrl"
import { browser } from '$app/environment';
const URL = ServerURl()

export const useRedTrendball = () => {
    let error = ''
    let result = ""
    let isLoading = false
    const user = browser && JSON.parse(localStorage.getItem('user'))
    const redTrendball = async (data) => {
      isLoading = true
      error = null
      const response = await fetch(
        `${URL}/api/user/crash-game/red-trendball`,{
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
        redTrendballEl.set(result.bet_amount)
        isLoading = false
      }
    };
    return { redTrendball, isLoading, error };
  };

