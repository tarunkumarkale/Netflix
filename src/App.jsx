import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
 import Login from "./Pages/Login"
 import Singnup from "./Pages/Singnup"
 import Profile from "./Pages/Profile"
import Navbar from './Components/Navbar'
 
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
