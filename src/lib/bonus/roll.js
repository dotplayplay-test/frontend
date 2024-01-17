
import { ServerURl } from "$lib/backendUrl"
import axios from "axios";
const URL = ServerURl()

export const getRoll = async (token) => {
    try {
        const response = await axios.get(`${URL}/api/promotion/verify`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response
    } catch (err) {
        console.log(err.message)
    }
};

export const getWinners = async (token) => {
    try {
        const response = await axios.get(`${URL}/api/promotion/winners`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response
    } catch (err) {
        console.log(err.message)
    }
};
export const getBonus = (winners) => {
    let bonus;
    if (winners.length > 1) {
        const rtBonus = winners
            .map((win) => win.bonus)
            .reduce((a, b) => a + b, 0);
        bonus = rtBonus.toFixed(2);
        return bonus
    } else {
        bonus = winners[0].bonus.toFixed(2);
        return bonus
    }
}
export const createRoll = async (token) => {
    try {
        const token = JSON.parse(localStorage.getItem("user"));
        const response = await fetch(`${URL}/api/promotion/roll-competition`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const json = await response.json();
        return json
    } catch (err) {
        console.log(err.message)
    }
};