import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Componets/Home'
import About from './Componets/About'
import Skills from './Componets/Skills'
import Projects from './Componets/Projects'
import Contact from './Componets/Contact'
import Navbarcomponent from './Componets/Navbarcompenent'

const App = () => {
  return (
   <Router>
    <Navbarcomponent/>
    <Routes> 
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Skills' element={<Skills/>} />
      <Route path='/Projects' element={<Projects/>} />
      <Route path='/Contact' element={<Contact/>} />
    </Routes>
   </Router>
  )
}

export default App
