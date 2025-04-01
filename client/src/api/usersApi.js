import { useEffect, useState } from "react";
import request from "../utils/request.js";

const baseUrl = "http://localhost:3030/data/accounts"

export const useSaveUser = () => {
    const saveUser = ({email, username, profilePicUrl, bio, accessToken}) =>{
    
    const userData = {
        email,
        username,
        profilePicUrl,
        bio,
        accessToken
    }

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
            const searchParams = new URLSearchParams({
                where: `_ownerId="${userId}"`
            })

            request("GET", `${baseUrl}?${searchParams.toString()}`)
            .then(setUser)
    }, [userId]);


    return{
        ...user[0]
    }
}