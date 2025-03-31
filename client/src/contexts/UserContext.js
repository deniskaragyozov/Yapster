import { createContext } from "react";

// TODO: add a posts and followers collection to the user

export const UserContext = createContext({
    _id: '',
    email: '',
    username:'',
    profilePicUrl: '',
    bio: '',
    accessToken: '',
    userLoginHandler: () => null,
    userLogoutHandler: () => null,
});