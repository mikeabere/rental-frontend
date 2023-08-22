import React from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'

import Dashboard from './components/Dashboard/Dashboard'
import Landlord from './components/Landlord/Landlord'
import Houses from './components/Houses/Houses'
import Tennant from './components/Tennants/Tennants'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'

function App() {


  return (
   
    <Routes>
      <Route exact path='/Dashboard' element={<Dashboard />}/>
      <Route exact path='/' element={<Login />}/>
      <Route exact path='/Signup' element={<Signup />}/>
      <Route exact path='/Landlord' element={<Landlord />}/>
      <Route exact path='/Houses' element={<Houses />}/>
      <Route exact path='/Tennants' element={<Tennant />}/>
    </Routes>
     
   
  )
}

export default App
