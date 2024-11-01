import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Project from './Pages/Project'
import { BrowserRouter } from 'react-router-dom'
import Contact from './Pages/Contact'
import Footer from './components/Footer'



const App = () => {
  return (
    <>
    <Navbar />
    <Home/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App