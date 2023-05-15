import React from 'react'
import Rating from '@mui/material/Rating';
import { Link, Navigate } from 'react-router-dom';
const TopHomecard = () => {
    return (
        <div className='sm:w-[100%] sm:flex sm:justify-center sm:items-center'>
        <div className='w-[96%] shadow rounded-xl p-5 m-2 my-8 sm:w-[85%] '>
            <div className='sm:flex sm:justify-between sm:ml-5'>
            <div >
                <div className='font-bold text-3xl'>
                    <div className=''>Welcome to</div>
                    <div className='text-blue-600'>Course Review</div>
                </div>
                <ul className='text-gray-700 mt-4 font-semibold list-disc mx-4 '>
                <li> Explore courses after reading review</li>
                <li>  Rate courses on our site and help others</li>
                </ul>
                <div className='h-28 flex items-end'>
                <Link to="/course">
            <button className='w-20 h-20 bg-blue-600 flex justify-center items-center text-white rounded-full mx sm:rounded-full  font-semibold sm:hover:bg-white sm:hover:text-blue-600 hover:outline-offset-2 animate-bounce shadow-2xl shadow-black'>Explore courses</button>
            </Link>
            {/* <button className='w-80 bg-blue-600 text-white flex justify-center px-10 py-3 rounded-3xl sm:rounded-full font-semibold  my-6 sm:m-1 sm:p-2 sm:my-5 sm:hover:bg-white sm:hover:text-blue-600 hover:outline-offset-2'>Rate courses</button> */}
            </div>   
            </div>
            <div className='sm:w-[40%] sm:h-[100%] sm:flex cursor-pointer'>
            <img src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/03/24185535/Online-Learning.jpg" alt="" className='rounded-xl -z-20 mt-4 sm:h-[100%] sm:mt-0' />
            </div>
            </div> 
        </div>
        </div>
    )
}

export default TopHomecard;