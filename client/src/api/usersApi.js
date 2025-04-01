import { useEffect, useState } from "react";
import request from "../utils/request.js";

const baseUrl = "http://localhost:3030/data/accounts"

export const useSaveUser = () => {
    const saveUser = (userData) =>{
        const accessToken = userData.accessToken

    const options = {
        headers: {
            'X-Authorization': accessToken
        }
    }

    return request("POST", baseUrl, userData, options);
}

    return{
        saveUser
    }
}

export const useUser = (userId) => {
    const [user, setUser] = useState({});


    useEffect(() => { 
        request("GET", `${baseUrl}/${userId}`)
        .then(setUser)
    }, [userId]);


    return{
        ...user
    }
}