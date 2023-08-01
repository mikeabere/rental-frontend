import React from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Landlord from './components/Landlord/Landlord'


function App() {


  return (
   
    <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path='./Landlord' element={<Landlord />}/>
    </Routes>
     
   
  )
}

export default App
