import { createContext } from "react";

export const LikesContext = createContext({
    postId: [],
    likeHandler: () => null,
});