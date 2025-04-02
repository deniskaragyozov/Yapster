import { createContext } from "react";

export const CommentsContext = createContext({
    postId: [],
    likeHandler: () => null,
});