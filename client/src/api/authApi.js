import request from "../utils/request.js"

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

