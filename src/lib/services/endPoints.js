import { ServerURl } from "$lib/backendUrl"
const baseURL ='localhost:3000/'
const apiVersion ='api/'
export const Endpoints ={
    Settings:{
        ChangePassword: baseURL + apiVersion + "users/change-password",
        SendVerificationEmail : baseURL + apiVersion + "users/send-verification-email",
        Verify : baseURL + apiVersion + "users/verify",
        Enable2FA :  baseURL + apiVersion + "users/enable-2fa",
        Verify2FA : baseURL + apiVersion + "users/verify-2fa"
    }
}

