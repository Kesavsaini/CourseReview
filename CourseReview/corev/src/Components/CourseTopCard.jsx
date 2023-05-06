import React from 'react'
import Rating from '@mui/material/Rating';

const CourseTopCard = () => {
return (
<div className='w-[96%] shadow rounded-xl p-5 sm:w-80 sm:h-auto m-2'>
    <img src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/03/24185535/Online-Learning.jpg"
        alt="" className='rounded-xl -z-20' />
    <div className='text-2xl font-bold m-2 text-blue-600'>Java Programming</div>
    <div className="my-3 sm:w-[70%] sm:m-2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, amet.</p></div>
    <div className='flex items-center gap-5 m-2'>
        <div className='font-bold'>Rating</div>
        <div className='flex items-center gap-2'>
            <div>4.5</div>
            <Rating name="half-rating-read" defaultValue={0} value={4.5} precision={0.5} readOnly />
        </div>
    </div>
    <div className="font-bold font-style: italic text-xl text-blue-600 my-4"><p>Course By EDX</p></div>
</div>
)
}

export default CourseTopCard