import React from 'react'
import Rating from '@mui/material/Rating';
import {NavLink, Navigate,Link} from "react-router-dom"
const TopCourseCard = ({data}) => {
  return (
    <div className='w-[96%] h-[27rem] shadow p-4 rounded-xl sm:w-96 m-3 '>
      <div className='sm:mt-0 h-40 flex justify-center items-center bg-blue-700 rounded-xl'>
    <img src={`${data.img}`} alt="" className='rounded-xl w-[100%] h-[100%] ' />
    </div>
    <div>
    <div className='text-xl font-semibold m-2 sm:flex sm:justify-center sm:items-center h-12 sm:h-10'>{data.name}</div>
    <hr className='bg-zinc-600'/>
     <div className='flex items-center gap-5 m-2 sm:ml-6'>
      <div className='font-bold'>Platform</div>
      <div className='ml-5'>{data.platform}</div>
     </div>
     <div className='flex items-center gap-5 m-2  sm:ml-6'>
      <div className='font-bold'>Author</div>
      <div className='ml-8'>{data.teacher}</div>
     </div>
     <div className='flex items-center gap-5 m-2 sm:ml-6'>
      <div className='font-bold'>
        Rating
        </div>
      <div className='flex items-center gap-2'>
       <div className='ml-9'>{data.rating}</div>
      <Rating name="half-rating-read" defaultValue={0} value={data.rating} precision={0.5} readOnly/>
      </div>
     </div>
     <hr className='bg-zinc-600'/>
     <div className='flex items-center justify-between sm:mt-4'>
      <button className='w-36 sm:w-28 sm:ml-11 bg-blue-600 text-white px-5 py-3 rounded-3xl font-semibold m-4 sm:m-1 sm:p-2  hover:bg-white hover:text-blue-600 hover:border-solid hover:border-blue-600'><Link to={`/rate/${data._id}`}>Rate Course</Link></button>
      <button className='w-36 sm:w-28 sm:mr-11 bg-blue-600 text-white px-5 py-3 rounded-3xl font-semibold m-4 sm:m-1 sm:p-2 hover:bg-white hover:text-blue-600'>Buy Now</button>
     </div>
     </div>
    </div>
  )
}

export default TopCourseCard