import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.js";


export default function AuthGuard(){

    const user = useContext(UserContext);

    const authenticated = !!user.accessToken;

    if(!authenticated){
        return <Navigate to={"/"}/>
    }

    return <Outlet />
}