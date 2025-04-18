import { Routes, Route } from 'react-router'

import './public/styles/app.css'

import { UserContext } from './contexts/UserContext.js'

import Home from './components/home/Home.jsx'
import Welcome from './components/welcome/Welcome.jsx'
import Profile from './components/profile/Profile.jsx'
import usePersistedState from './hooks/usePersistedState.js'
import Logout from './components/logout/Logout.jsx'
import Details from './components/details/Details.jsx'
import Post from './components/post/Post.jsx'
import Edit from './components/edit/Edit.jsx'
import Delete from './components/delete/Delete.jsx'
import Like from './components/like/Like.jsx'
import { LikesContext } from './contexts/LikesContext.js'
import AuthGuard from './components/guards/authGuard.jsx'
import Search from './components/search/Search.jsx'
import Comment from './components/comment/Comment.jsx'
import { CommentsContext } from './contexts/CommentsContext.js'

function App() {
  const [user, setUser] = usePersistedState('auth', {});
  
  const userLoginHandler = (resultData) => {
    setUser(resultData);
  }

  const userLogoutHandler = () => {
    setUser({});
  }

  const [likes, setLikes] = usePersistedState('likes', {});

  const likeHandler = (postId, userId) => {
    setLikes((state) => {
      const existingLikes = state[postId] || [];
  
      if (existingLikes.includes(userId)) {
        const userIndex = existingLikes.indexOf(userId);

        existingLikes.splice(userIndex, 1);

        return state;
      }
  
      return {
        ...state,
        [postId]: [...existingLikes, userId],
      };
    });
  }

  const [comments, setComments] = usePersistedState('comments', {});

  const commentHandler = (postId, commentData) => {
    setComments((state) => {
      const existingComments = state[postId] || [];

      return {
        ...state,
        [postId]: [...existingComments, commentData],
      };
    });
  }

  return (
    <>
    <UserContext.Provider value={{...user, userLoginHandler, userLogoutHandler}}>
    <LikesContext.Provider value={{...likes, likeHandler}}>
    <CommentsContext.Provider value={{...comments, commentHandler}}>
     <Routes>
     {!!user.email 
     ?<Route index element={<Home />}/> 
     :<Route index element={<Welcome/>}/> 
     }   
        <Route path='/home' element={<Home />}/>
        <Route path='/:postId/details' element={<Details />}/>
        <Route path='/:userId/profile' element={<Profile />}/>
        <Route path='/search' element={<Search />}/>
        <Route element={<AuthGuard />}>
          <Route path='/post' element={<Post />}/>
          <Route path='/:postId/edit' element={<Edit />}/>
          <Route path='/:postId/delete' element={<Delete />}/>
          <Route path='/:postId/comment' element={<Comment />}/>
          <Route path='/:postId/like' element={<Like />}/>
          <Route path='/logout' element={<Logout />}/>
        </Route>
     </Routes>
     </CommentsContext.Provider>
     </LikesContext.Provider>
     </UserContext.Provider>
    </>
  )
}

export default App
