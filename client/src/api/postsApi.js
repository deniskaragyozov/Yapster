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