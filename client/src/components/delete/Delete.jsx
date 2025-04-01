import { useNavigate, useParams } from "react-router";
import { useDeletePost } from "../../api/postsApi.js"
import { useEffect } from "react";

export default function Delete(){
    const navigate = useNavigate();
    
    const params = useParams();
    
    const postId = params.postId;
    
    useDeletePost(postId);

    useEffect(() => {
        navigate("/");
    }, [])
    
    return(<>
    </>)
}