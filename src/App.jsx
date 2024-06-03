import React from 'react'
import { Route, Routes } from 'react-router-dom'
  
 import Login from "./Pages/Login"
 import Singnup from "./Pages/Singnup"
 import Profile from "./Pages/Profile"
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
 
const App = () => {
  return (
<>
<Navbar></Navbar>
  <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/login"  element={<Login/>}/>
    <Route path="/signup"  element={<Singnup/>}/>
    <Route path="/profile"  element={<Profile/>}/>
  </Routes>
</>
  )
}

export default App




// 107c81686b5b63fa93fd8ce1f1c4e9db