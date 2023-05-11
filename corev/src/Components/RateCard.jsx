import React, { useEffect, useState } from "react";
import Rating from '@mui/material/Rating';
import axios from "axios";

const RateCard = ({courseid}) => {
    const [course,setCourse]=useState({});
    useEffect(()=>{
        const getCousrseData=async()=>{
            try{
             const res=await axios.get(`http://localhost:3001/api/get/course/${courseid}`);
             setCourse(res.data);
            }catch(err){
                console.log(err);
            }
        }
        if(Object.keys(course).length===0){
        getCousrseData();
        }
    })
    return (
        <div className='w-[96%] shadow rounded-xl p-5 sm:w-[80%] sm:h-auto m-2 sm:mx-36'>
            <div className='text-3xl font-bold m-px flex justify-center sm:hidden'>Rate the course</div>
            <div className="sm:flex sm:flex-row-reverse">
                <div>
                    <img src="https://c1.wallpaperflare.com/preview/471/703/720/e-learning-training-school-online-learn-knowledge.jpg" alt="" className='rounded-xl -z-20 m-px my-4' />
                </div>
                <div>
                    <div className='text-2xl font-bold m-2'>{course.name}</div>
                    <hr className='bg-zinc-600 sm:hidden' />
                    <div className="sm:w-[70%] sm:m-2"><p>{course.desc}</p></div>
                    <div className='flex items-center gap-5 m-2'>
                        <div className='font-bold'>Rating</div>
                        <div className='flex items-center gap-2 sm:my-5'>
                            <div>{course.rating}</div>
                            <Rating name="half-rating-read" defaultValue={0} value={course && course.rating} precision={0.5} readOnly />
                        </div>
                    </div>
                    <hr className='bg-zinc-600 sm:hidden' />
                    <div className="font-bold font-style: italic text-xl text-blue-600 my-4"><p>Course By EDX</p></div>
                    <div className='flex items-center justify-between'>
                        <button className='w-80 bg-blue-600 text-white flex  px-10 py-3 rounded-md sm:rounded-full font-semibold justify-center my-6 sm:m-1 sm:p-2 sm:my-5 sm:hover:bg-white sm:hover:text-blue-600 hover:outline-offset-2'>Start learning for free</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RateCard