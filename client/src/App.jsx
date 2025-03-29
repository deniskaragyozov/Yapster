import { Routes, Route } from 'react-router'

import './public/styles/app.css'

import Home from './components/home/Home.jsx'
import Welcome from './components/welcome/Welcome.jsx'
import Register from './components/register/Register.jsx'

function App() {
  return (
    <>
     <Routes>
        <Route index element={<Welcome/>}/>
        <Route path='/home' element={< Home />}/>
        <Route path='/register' element={< Register />}/>
     </Routes>
    </>
  )
}

export default App
