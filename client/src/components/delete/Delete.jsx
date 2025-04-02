import { Navigate, useParams } from "react-router";
import { useDeletePost, usePost } from "../../api/postsApi.js"
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.js";

export default function Delete(){
    
    const params = useParams();
    
    const postId = params.postId;

    const post = usePost(postId);

    const user = useContext(UserContext);

    const { deletePost } = useDeletePost();

    const isOwner = user._id === post?._ownerId

    if(!!post._id){
        if(!isOwner){
            return <Navigate to="/home"/>
        }
        
        deletePost(postId);
        
        return <Navigate to="/home"/>;
    }
}