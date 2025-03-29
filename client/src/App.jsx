import { Routes, Route } from 'react-router'

import './public/styles/app.css'

import Home from './components/home/Home.jsx'
import Welcome from './components/welcome/Welcome.jsx'
import Register from './components/register/Register.jsx'
import Login from './components/login/Login.jsx'

function App() {
  return (
    <>
     <Routes>
        <Route index element={<Welcome/>}/>
        <Route path='/home' element={< Home />}/>
        <Route path='/register' element={< Register />}/>
        <Route path='/login' element={< Login />}/>
     </Routes>
    </>
  )
}

export default App
