import React, { useEffect, useState } from "react";
import Rating from '@mui/material/Rating';
import axios from "axios";
const Coursecard = ({data}) => {
    return (
        <div className='w-[96%] shadow rounded-xl p-5 sm:w-[48%] m-2'>
            <div className="sm:flex sm:flex-row-reverse">
                <div>
                    <img src="https://c1.wallpaperflare.com/preview/471/703/720/e-learning-training-school-online-learn-knowledge.jpg" alt="" className='rounded-xl -z-20 m-px my-4' />
                </div>
                <div>
                    <div className='text-2xl font-bold m-2 text-purple-600'>{data.name}</div>
                    <hr className='bg-zinc-600 sm:hidden' />
                    <div className="my-3 sm:w-[70%] sm:m-2"><p>{data.desc}</p></div>
                    <div className='flex items-center gap-5 m-2'>
                        <div className='font-bold'>Rating</div>
                        <div className='flex items-center gap-2 sm:my-5'>
                            <div>{data.rating}</div>
                            <Rating name="half-rating-read" defaultValue={0} value={data.rating} precision={0.5} readOnly />
                        </div>
                    </div>
                    <div className="font-bold font-style: italic text-xl text-blue-600 my-4"><p>{data.platform}</p></div>
                </div>
            </div>
        </div>
    )
}
export default Coursecard