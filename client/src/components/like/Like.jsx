import { useNavigate, useParams } from "react-router";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext.js";
import { LikesContext } from "../../contexts/LikesContext.js";
import { usePost } from "../../api/postsApi.js";

export default function Like(){
    const navigate = useNavigate();
    
    const params = useParams();
    
    const postId = params.postId;

    const post = usePost(postId)

    const user = useContext(UserContext);

    const isOwner = user._id === post._ownerId;

    const { likeHandler } = useContext(LikesContext);

    useEffect(() => {

        if(!!post){
            if(!isOwner){
                likeHandler(postId, user._id);
            }
            navigate(`/${postId}/details`);
        }
    }, [post])
    
    return(<>
    </>)
}