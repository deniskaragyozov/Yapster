import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

export default function Like(){
    const navigate = useNavigate();
    
    const params = useParams();
    
    const postId = params.postId;

    useEffect(() => {
        navigate(`/${postId}/details`);
    }, [])
    
    return(<>
    </>)
}