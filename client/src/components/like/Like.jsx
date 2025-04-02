import { useNavigate, useParams } from "react-router";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext.js";
import { LikesContext } from "../../contexts/LikesContext.js";

export default function Like(){
    const navigate = useNavigate();
    
    const params = useParams();
    
    const postId = params.postId;

    const user = useContext(UserContext);

    const { likeHandler } = useContext(LikesContext);

    useEffect(() => {
        likeHandler(postId, user._id);
        navigate(`/${postId}/details`);
    }, [])
    
    return(<>
    </>)
}