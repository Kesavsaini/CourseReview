import React from 'react'
import Rating from '@mui/material/Rating';
const TopHomecard = () => {
    return (
        <div className='sm:w-[100%] sm:flex sm:justify-center sm:items-center'>
        <div className='w-[96%] shadow rounded-xl p-5 sm:w-[100%] m-2 my-8 sm:w-[85%] '>
            <div className='sm:flex sm:justify-between sm:ml-5'>
            <div >
                <div className='font-bold text-3xl'>
                    <div className=''>Welcome to</div>
                    <div className='text-blue-600'>Course Review</div>
                </div>
                <ul className='text-gray-700 mt-4 font-semibold list-disc mx-4 '>
                <li> Buy courses after reading review</li>
                <li>  Rate courses on our site and help others</li>
                </ul>
                <div className=''>
            <button className='w-80 bg-blue-600 text-white flex justify-center px-10 py-3 rounded-3xl mx sm:rounded-full font-semibold justify-center my-6 sm:m-1 sm:p-2 sm:my-5 sm:hover:bg-white sm:hover:text-blue-600 hover:outline-offset-2'>Buy courses</button>
            <button className='w-80 bg-blue-600 text-white flex justify-center px-10 py-3 rounded-3xl sm:rounded-full font-semibold justify-center my-6 sm:m-1 sm:p-2 sm:my-5 sm:hover:bg-white sm:hover:text-blue-600 hover:outline-offset-2'>Rate courses</button>
            </div>   
            </div>
            <div className='sm:w-[40%] sm:h-[100%] sm:flex '>
            <img src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/03/24185535/Online-Learning.jpg" alt="" className='rounded-xl -z-20 mt-4 sm:h-[110%] sm:-mt-9' />
            </div>
            </div> 
        </div>
        </div>
    )
}

export default TopHomecard;