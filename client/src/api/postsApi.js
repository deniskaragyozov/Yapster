import { useContext, useEffect, useState } from "react"
import request from "../utils/request.js"
import { UserContext } from "../contexts/UserContext.js"

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
        const searchParams = new URLSearchParams({
            sortBy: `_createdOn desc`
        });

        try{
            request("GET", `${baseUrl}?${searchParams.toString()}`)
            .then(setPosts)
        }catch(err){
            console.log(err.message)
        }
    }, [])

    return{
        posts
    }
}

export const usePost = (postId) => {
    const [post, setPost] = useState({});


    useEffect(() => { 
            try{
                request("GET", `${baseUrl}/${postId}`)
                .then(setPost)
            }catch(err){
                console.log(err.message)
            }
    }, []);

        return{
            ...post
        }
}

export const useEditPost = () => {

    const { accessToken } = useContext(UserContext);

    const editPost = (postData, postId) => {

        const options = {
            headers:{
                'X-Authorization': accessToken
            }
        }

    return request("PUT", `${baseUrl}/${postId}`, postData, options);
    }

    return{
        editPost
    }
}

export const useDeletePost = () => {
    const { accessToken } = useContext(UserContext);

    const deletePost = async (postId) => {

        const options = {
            headers:{
                'X-Authorization': accessToken
            }
        }
        try{
        
            await request("DELETE", `${baseUrl}/${postId}`, null, options)

        }catch(err){
            console.log(err.message)
        }

    }

    return{
        deletePost
    }       
}

export const useUserPosts = (userId) => {
    const [posts, setPosts] = useState([]);
    
    
        useEffect(() => { 
                const searchParams = new URLSearchParams({
                    where: `_ownerId="${userId}"`
                })
    
                request("GET", `${baseUrl}?${searchParams.toString()}`)
                .then(setPosts)
        }, [userId]);
            
        return{
            posts,
        }
}