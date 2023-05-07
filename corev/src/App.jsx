import React, { useEffect } from 'react' 
import Home from './Pages/Home'
import Rate from './Pages/Rate'
import Course from './Pages/Course'
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Navbar from './Components/Navbar'
import Register from './Pages/Register'
import Login from './Pages/Login'
import { useSelector, useDispatch } from 'react-redux';
const App = () => {
  let user=useSelector(state=>state.userdata.user);
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login'  element={<Login/>}/>
      <Route path='/register'  element={<Register/>}/>
      <Route path='/rate' element={user? <Rate/> : <Navigate to="/login"/>} />
      <Route path='/course' element={<Course/>} />
  </Routes>
  </BrowserRouter>
  )
}

export default App