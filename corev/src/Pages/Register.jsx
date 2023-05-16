import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Register = () => {
  const [firstname,setfirstName]=useState();
  const [lastname,setlastName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const navigate=useNavigate();
  const Singnup=async(e)=>{
    e.preventDefault();
     try{
       const res=await axios.post('http://localhost:3001/api/auth/create',{firstname,lastname,email,password});
       navigate('/login');
       console.log(res.data)
     }catch(err){
      console.log(err);
     }
  }
  return (
    <div className='sm:justify-center'>
      <div className='font-bold text-4xl mt-40 ml-3 flex justify-center sm:text-5xl sm:mt-14 '>
        <div>
          Welcome to
        </div>
        <div className='text-blue-600 ml-2'>
          ReviewKar
        </div>
      </div>
      
      <div className='sm:flex sm:flex-col sm:justify-center sm:items-center w-[100vw] h-[80vh] '>
      <div className='font-bold text-zinc-500 mt-2 sm:mt-2 flex justify-center'>
        Please enter your details
      </div>
      <div className="form ml-5 p-5 mt-4 mr-3 shadow-2xl rounded-md sm:w-[35%] sm:justify-center sm:items-center">
        <form>
          <div className="input-container flex flex-col mt-5 text-zinc-700">
            <label className='font-semibold text-2xl'>FirstName </label>
            <input type="text" name="fname" required placeholder='Enter your First Name' className='border border-solid h-10 mt-2 rounded-sm shadow-lg' onChange={(e)=>setfirstName(e.target.value)}/>
          </div>
          <div className="input-container flex flex-col mt-5 text-zinc-700">
            <label className='font-semibold text-2xl'>LastName </label>
            <input type="text" name="lname" required placeholder='Enter your Last Name' className='border border-solid h-10 mt-2 rounded-sm shadow-lg' onChange={(e)=>setlastName(e.target.value)}/>
          </div>
          <div className="input-container flex flex-col mt-5 text-zinc-700">
            <label className='font-semibold text-2xl'>Email </label>
            <input type="email" name="pass" required placeholder='Enter your Email' className='border border-solid h-10 mt-2 rounded-md shadow-lg' onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="input-container flex flex-col mt-5 text-zinc-700">
            <label className='font-semibold text-2xl'>Password </label>
            <input type="password" name="pass" required placeholder='Enter your Password' className='border border-solid h-10 mt-2 rounded-sm shadow-lg' onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="button-container flex justify-center">
            <button className='w-80 bg-blue-600 text-white flex px-10 py-3 rounded-3xl mx sm:rounded-full font-semibold justify-center my-6 mt-10 sm:m-1 sm:p-2 sm:my-5 sm:hover:bg-white sm:hover:text-blue-600 hover:outline-offset-2' onClick={(e)=>Singnup(e)}>Register</button>
          </div>
        </form>
        <div className='text-blue-700'>
        <Link to="/login">
         LOGIN
        </Link>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Register