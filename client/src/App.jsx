import { Routes, Route } from 'react-router'

import './public/styles/app.css'

import Home from './components/home/Home.jsx'
import Welcome from './components/welcome/Welcome.jsx'
import Register from './components/register/Register.jsx'
import Login from './components/login/Login.jsx'
import Profile from './components/profile/Profile.jsx'

function App() {
  return (
    <>
     <Routes>
        <Route index element={<Welcome/>}/>
        <Route path='/home' element={< Home />}/>
        <Route path='/register' element={< Register />}/>
        <Route path='/login' element={< Login />}/>
        <Route path='/profile' element={< Profile />}/>
     </Routes>
    </>
  )
}

export default App
