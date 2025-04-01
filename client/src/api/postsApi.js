import { useDebugValue, useEffect, useState } from "react"
import request from "../utils/request.js"

const baseUrl = "http://localhost:3030/data/posts"

export const useCreatePost = () => {
    const createPost = (postData, accessToken) => {

        const options = {
            headers:{
                'X-Authorization': accessToken
            }
        }

        return request("POST", baseUrl, postData, options)
    }

    return {
        createPost
    }
}

export const useGetPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        request("GET", baseUrl)
        .then(setPosts)
    }, [])

    return{
        posts
    }
}

export const usePost = (postId) => {
    const [post, setPost] = useState({});


    useEffect(() => { 
            request("GET", `${baseUrl}/${postId}`)
            .then(setPost)
    }, []);


    return{
        ...post
    }
}