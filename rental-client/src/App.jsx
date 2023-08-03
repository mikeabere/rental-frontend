import React from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Landlord from './components/Landlord/Landlord'
import Houses from './components/Houses/Houses'

function App() {


  return (
   
    <Routes>
      <Route exact path='/' element={<Dashboard />}/>
      <Route exact path='/Landlord' element={<Landlord />}/>
      <Route exact path='/Houses' element={<Houses />}/>
    </Routes>
     
   
  )
}

export default App
