import { useContext, useEffect } from "react";
import request from "../utils/request.js"
import { UserContext } from "../contexts/UserContext.js";

const baseUrl = "http://localhost:3030/users"

export const useLogin = () =>
    {
        const login = (email, password) =>
             request("POST", `${baseUrl}/login`,
                 {email, password});


        return {
            login
        }
    }

export const useRegister = () =>
{
    const register = (email, password, username, profilePicUrl) =>
        request("POST", `${baseUrl}/register`, {email, password, username, profilePicUrl});

    return {
        register
    }
}

export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useContext(UserContext);

    useEffect(() => {
        if(!accessToken){
            return;
        }

        const options = {
         headers: {
              'X-Authorization': accessToken
            }
        };

        request("GET", `${baseUrl}/logout`, null, options)
        .then(userLogoutHandler)

    }, [accessToken, userLogoutHandler])
    
    return{
        isLoggedOut: !!accessToken
    }
}

