import React from 'react'
import Rating from '@mui/material/Rating';
import {NavLink, Navigate,Link} from "react-router-dom"
const TopCourseCard = ({data}) => {
  return (
    <div className='w-[96%] shadow rounded-xl p-5 sm:w-80 sm:h-auto m-2'>
    <img src={`${data.img}`} alt="" className='rounded-xl -z-20' />
    <div className='text-2xl font-bold m-2'>{data.name}</div>
    <hr className='bg-zinc-600'/>
     <div className='flex items-center gap-5 m-2'>
      <div className='font-bold'>Platform</div>
      <div>{data.platform}</div>
     </div>
     <div className='flex items-center gap-5 m-2'>
      <div className='font-bold'>Author</div>
      <div>{data.teacher}</div>
     </div>
     <div className='flex items-center gap-5 m-2'>
      <div className='font-bold'>
        Rating
        </div>
      <div className='flex items-center gap-2'>
       <div>{data.rating}</div>
      <Rating name="half-rating-read" defaultValue={0} value={data.rating} precision={0.5} readOnly/>
      </div>
     </div>
     <hr className='bg-zinc-600'/>
     <div className='flex items-center justify-between'>
      <button className='bg-blue-600 text-white px-5 py-3 rounded-3xl font-semibold m-4 sm:m-1 sm:p-2'><Link to={`/rate/${data._id}`}>Rate Course</Link></button>
      <button className=' bg-blue-600 text-white px-5 py-3 rounded-3xl font-semibold m-4'>Buy Now</button>
     </div>
    </div>
  )
}

export default TopCourseCard