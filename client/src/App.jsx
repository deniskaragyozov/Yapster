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

function App() {
  const [user, setUser] = usePersistedState('auth', {});

  const userLoginHandler = (resultData) => {
    setUser(resultData);
  }

  const userLogoutHandler = () => {
    setUser({});
  }

  return (
    <>
    <UserContext.Provider value={{...user, userLoginHandler, userLogoutHandler}}>
     <Routes>
     {!!user.email 
     ?<Route index element={<Home />}/> 
     :<Route index element={<Welcome/>}/> 
     }   
        <Route path='/home' element={<Home />}/>
        <Route path='/post' element={<Post />}/>
        <Route path='/:userId/profile' element={<Profile />}/>
        <Route path='/details' element={<Details />}/>
        <Route path='/logout' element={<Logout />}/>

     </Routes>
     </UserContext.Provider>
    </>
  )
}

export default App
