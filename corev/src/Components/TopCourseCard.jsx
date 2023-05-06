import React from 'react'
import Rating from '@mui/material/Rating';
const TopCourseCard = (dta) => {
  console.log(dta.dta)
  return (
    <div className='w-[96%] shadow rounded-xl p-5 sm:w-80 sm:h-auto m-2'>
    <img src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/03/24185535/Online-Learning.jpg" alt="" className='rounded-xl -z-20' />
    <div className='text-2xl font-bold m-2'>{dta.dta.name}</div>
    <hr className='bg-zinc-600'/>
     <div className='flex items-center gap-5 m-2'>
      <div className='font-bold'>Platform</div>
      <div>{dta.dta.platform}</div>
     </div>
     <div className='flex items-center gap-5 m-2'>
      <div className='font-bold'>Author</div>
      <div>{dta.dta.platform}</div>
     </div>
     <div className='flex items-center gap-5 m-2'>
      <div className='font-bold'>Rating</div>
      <div className='flex items-center gap-2'>
       <div>{dta.dta.rating}</div>
      <Rating name="half-rating-read" defaultValue={0} value={dta.dta.rating} precision={0.5} readOnly/>
      </div>
     </div>
     <hr className='bg-zinc-600'/>
     <div className='flex items-center justify-between'>
      <button className='bg-blue-600 text-white px-5 py-3 rounded-3xl font-semibold m-4 sm:m-1 sm:p-2'>Rate Course</button>
      <button className=' bg-blue-600 text-white px-5 py-3 rounded-3xl font-semibold m-4'>Buy Now</button>
     </div>
    </div>
  )
}

export default TopCourseCard