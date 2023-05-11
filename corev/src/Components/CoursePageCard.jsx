import React from 'react'
import Rating from '@mui/material/Rating';
const CoursePageCard = () => {
    return (
        <div className='sm:w-[100%] sm:flex sm:justify-center sm:items-center'>
        <div className='w-[96%] shadow rounded-xl p-5 m-2 my-8 sm:w-[85%]  herog'>
            <div className='sm:flex sm:justify-between sm:ml-5'>
            <div >
                <div className='mt-8 text-white'>
                    <div className='font-bold text-sm'>Akshit Kumar 2nd Feb 2023</div>
                    <div className='font-bold text-2xl mt-2'>Backend using Django</div>
                    <div className='mt-4'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At aut obcaecati commodi quibusdam voluptas corrupti quas, similique nam laudantium ipsum deserunt doloremque necessitatibus beatae iste blanditiis nihil nulla harum tempora.</p></div>
                </div>
                <div className='mt-16'>
            <button className='w-80 bg-blue-600 text-white flex px-10 py-3 rounded-3xl mx sm:rounded-full font-semibold justify-center my-6 sm:m-1 sm:p-2 sm:my-5 sm:hover:bg-white sm:hover:text-blue-600 hover:outline-offset-2'>Buy courses</button>
            </div>   
            </div>
            </div> 
        </div>
        </div>
    )
}

export default CoursePageCard;