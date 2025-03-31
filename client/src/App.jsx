import { Routes, Route } from 'react-router'

import './public/styles/app.css'

import { UserContext } from './contexts/UserContext.js'

import Home from './components/home/Home.jsx'
import Welcome from './components/welcome/Welcome.jsx'
import Register from './components/register/Register.jsx'
import Login from './components/login/Login.jsx'
import Profile from './components/profile/Profile.jsx'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState({});

  const userLoginHandler = (resultData) => {
    setUser(resultData);
  }
  return (
    <>
    <UserContext.Provider value={{...user, userLoginHandler}}>
     <Routes>
        <Route index element={<Welcome/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/profile' element={<Profile />}/>
     </Routes>
     </UserContext.Provider>
    </>
  )
}

export default App
