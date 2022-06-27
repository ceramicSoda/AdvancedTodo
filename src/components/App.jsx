import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Todo from '../pages/Todo.jsx'
import Auth from '../pages/Auth.jsx'
import Completed from '../pages/Completed.jsx'
import Footer from '../components/footer/Footer' 

function App() {
  return (
    <div className="app">
      <Todo/>
      <Footer/>
    </div>
  )
}

export default App
