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
  useEffect(()=>{
    console.log("this is user")
    console.log(user);
  })
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/login'  element={!user ?<Login/>:<Navigate to="/"/>}/>
      <Route path='/register'  element={<Register/>}/>
      <Route path='/course' element={<Course/>} />
      <Route path='/rate/:courseid'  element={user ?<Rate/>:<Navigate to="/login"/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App