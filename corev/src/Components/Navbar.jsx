import React, { useState } from 'react'
import Dehaze from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
   const [dis1, setDis1] = useState({ display: "none" })
   const [dis2, setDis2] = useState({ display: "block" })
   const closeit = () => {
      setDis1({ display: "none" });
      setDis2({ display: "block" });
   }
   const openit = () => {
      setDis1({ display: "block" });
      setDis2({ display: "none" });
   }
   return (
      <div className='sm:p-3 z-50 sticky'>
         <div className='flex items-center justify-between z-50'>
            <div className='sm:flex justify-center items-center gap-10'>
               <div className='text-blue-700 text-3xl font-bold hidden sm:block'>Coursereview</div>
               <div className='p-3 sm:flex flex-row gap-5 text-xl font-semibold hidden z-50'>
                  <a href="">Home</a>
                  <a href="">Rate</a>
                  <a href="">Courses</a>
                  <a href="">Coupouns</a>
                  <a href="">About</a>
               </div>
               <div className='' onClick={openit} style={dis2}>
                  <div className='sm:hidden'>
                     <Dehaze style={{ fontSize: '40px' }} />
                  </div>
               </div>
               <div></div>
               <div className='glass w-48 h-[100vh] absolute top-0' style={dis1}>
                  <div className='' onClick={closeit}>
                     <CloseIcon style={{ fontSize: '40px' }} />
                  </div>
                  <div className='p-3 flex flex-col gap-3 text-xl font-extrabold'>
                     <a href="">Home</a>
                     <a href="">Rate</a>
                     <a href="">Courses</a>
                     <a href="">Coupouns</a>
                     <a href="">About</a>
                  </div>
               </div>
            </div>
            <div className=''>
               <input type="text" className='w-52 border border-black rounded-full outline-none p-1 border-none shadow sm:w-96 sm:p-3' placeholder='Search here' />
            </div>
            <div className='w-12 h-12 rounded-full'>
               <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className='w-12 h-12 rounded-full bg-cover' />
            </div>
         </div>
      </div>
   )
}

export default Navbar