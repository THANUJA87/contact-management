import { useState } from 'react'
import './App.css'
import {Route, Routes } from 'react-router-dom'
import ContactList from './pages/ContactList'
import AddContact from './pages/AddContact'
import EditContact from './pages/EditContact'


function App() {
  

  return (
    <>
 
      <Routes>
        <Route path='/' element={<ContactList/>} />
        <Route path='/add' element={<AddContact/>} />
        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>
  
    
    </>
  )
}

export default App
