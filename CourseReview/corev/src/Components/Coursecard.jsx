import React from "react";
import Rating from '@mui/material/Rating';

const Coursecard = () => {
    return (
        <div className='w-[96%] shadow rounded-xl p-5 sm:w-[80%] sm:h-auto m-2 sm:mx-36'>
            <div className="sm:flex sm:flex-row-reverse">
                <div>
                    <img src="https://c1.wallpaperflare.com/preview/471/703/720/e-learning-training-school-online-learn-knowledge.jpg" alt="" className='rounded-xl -z-20 m-px my-4' />
                </div>
                <div>
                    <div className='text-2xl font-bold m-2 text-purple-600'>Backend using Django</div>
                    <hr className='bg-zinc-600 sm:hidden' />
                    <div className="my-3 sm:w-[70%] sm:m-2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, amet.</p></div>
                    <div className='flex items-center gap-5 m-2'>
                        <div className='font-bold'>Rating</div>
                        <div className='flex items-center gap-2 sm:my-5'>
                            <div>4.5</div>
                            <Rating name="half-rating-read" defaultValue={0} value={4.5} precision={0.5} readOnly />
                        </div>
                    </div>
                    <div className="font-bold font-style: italic text-xl text-blue-600 my-4"><p>Course By EDX</p></div>
                </div>
            </div>
        </div>
    )
}
export default Coursecard