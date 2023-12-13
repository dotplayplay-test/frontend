import axios from "axios"
import { browser } from '$app/environment'
import { ServerURl} from "$lib/backendUrl"
import {billLoad} from "../store/index"
const URL = ServerURl()
const id = browser && JSON.parse(localStorage.getItem('user'))
export const handleBills = (async()=>{
    billLoad.set(true)
    const response = await fetch( `${URL}/api/transaction/bill`,{
        method: "GET",
        headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${id}`
        }
    }
    );
    const json = await response.json();
    if(!response.ok){
    (json)
    billLoad.set(false)
    }
    if (response.ok) {
        billLoad.set(false)
        return json
    }
})
