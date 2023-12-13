import { handleHasbet,handleHasbet_amount , winning} from "./store"
import {default_Wallet} from "../store/coins"
import {ServerURl} from "$lib/backendUrl"
import { browser } from '$app/environment';
const URL = ServerURl()

export const useCrashBet = () => {
    let error = ''
    let isLoading = false
    let result = ''

    const user = browser && JSON.parse(localStorage.getItem('user'))
    const crashBet = async (data) => {
      isLoading = true
      error = null
      const response = await fetch(
        `${URL}/api/user/crash-game/bet`,{
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

      }
      if (response.ok) {
        result = json
        let data = {
          coin_name: result.bet_token_name,
          coin_image:  result.bet_token_img,
          balance:  result.current_amount,
      }
        localStorage.setItem("user_bet_amount", JSON.stringify(json));
        default_Wallet.set(data)
        handleHasbet_amount.set(result.bet_amount)
        handleHasbet.set(true)
        isLoading = false
      }
    };
    return { crashBet, isLoading, error };
  };

  const handleWinning = ()=>{
    winning.set(true)
    setTimeout(()=>{
      winning.set(false)
    },3000)
  }

export const useCrashCashout = () => {
    let cashoutError = ''
    let loadingCashout = false
    let result = ''
    const user = JSON.parse(localStorage.getItem('user'))
    const cashout = async (data) => {
      loadingCashout = true
      cashoutError = null
      const response = await fetch(
        `${URL}/api/user/crash-game/cashout`,{
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
        loadingCashout = false;
        cashoutError = json.error
      }
      if (response.ok) {
        result = json
        let data = {
          coin_name: result.bet_token_name,
          coin_image:  result.bet_token_img,
          balance:  result.cash,
          suffix: "0000",
      }
        localStorage.removeItem("user_bet_amount");
        default_Wallet.set(data)
        handleHasbet.set(false)
        loadingCashout = false
        handleWinning()
      }
    };
    return { cashout, loadingCashout, cashoutError };
  };