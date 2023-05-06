import React from 'react' 
import Home from './Pages/Home'
import Rate from './Pages/Rate'
import Course from './Pages/Course'
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'  element={<Home/>}/>} />
      <Route path='/rate' element={<Rate/>} />
      <Route path='/course' element={<Course/>} />
  </Routes>
  </BrowserRouter>
  )
}

export default App