import React from "react";
import Rating from '@mui/material/Rating';

const OtherReviewsCard = () => {
    return (
        <div className='w-[96%] shadow rounded-xl p-5 sm:h-auto m-2 my-7 sm:w-[80%] sm:p-14 sm:mx-36'>
            <div className='w-12 h-12 rounded-full flex m-px'>
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className='w-12 h-12 rounded-full bg-cover ' />
                <div className='text-2xl font-bold mx-5 flex'>AkshitKumar</div>
            </div>
            <div className="flex flex-col sm:flex-col-reverse sm:text-xl sm:justify-center">
                <div className="sm:w-[100%]">
                    <div className="sm:flex sm:flex-row sm:gap-96 sm:w-[80%]  sm:justify-between">
                        <div className="font-bold text-2x1 -my-0 my-2 sm:w-80">Meets Expectation ?</div>
                        <div className='flex items-center gap-5 '>
                            <div className='flex items-center gap-2 mx-0'>
                                <Rating name="half-rating-read" defaultValue={0} value={5.0} precision={1.0} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex sm:flex-row sm:gap-96 sm:w-[80%]  sm:justify-between">
                        <div className="font-bold text-2x1 my-2 ">What do you say about content ?</div>
                        <div className='flex items-center gap-5 '>
                            <div className='flex items-center gap-2 mx-0'>
                                <Rating name="half-rating-read" defaultValue={0} value={5.0} precision={1.0} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex sm:flex-row sm:gap-96 sm:w-[80%]  sm:justify-between">
                        <div className="font-bold text-2x1 -my-0 my-2 ">What do you say about instructor ?</div>
                        <div className='flex items-center gap-5 '>
                            <div className='flex items-center gap-2 mx-0'>
                                <Rating name="half-rating-read" defaultValue={0} value={5.0} precision={1.0} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex sm:flex-row sm:gap-96 sm:w-[80%] sm:justify-between ">
                        <div className="font-bold text-2x1 -my-0 my-2 sm:w-80">Is the duration of course good ?</div>
                        <div className='flex items-center gap-5 '>
                            <div className='flex items-center gap-2 mx-0'>
                                <Rating name="half-rating-read" defaultValue={0} value={5.0} precision={1.0} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex sm:flex-row sm:gap-96 sm:w-[80%] sm:justify-between ">
                        <div className="font-bold text-2x1 -my-0 my-2 ">Were you able to skill up yourself ?</div>
                        <div className='flex items-center gap-5 '>
                            <div className='flex items-center gap-2 mx-0'>
                                <Rating name="half-rating-read" defaultValue={0} value={5.0} precision={1.0} readOnly />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-80 h-40 my-7 border border-black rounded-md outline-none p-1 border-none shadow sm:w-[70%] sm:shadow-none'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus aperiam repudiandae aspernatur dolorum tenetur, in corrupti commodi laboriosam, itaque odit doloremque quidem excepturi quo, fugit laborum amet illum quae aliquam!</p>
                    {/* <input type="text" className='w-80 h-20 my-4 border border-black rounded-md outline-none p-1 border-none shadow ' placeholder='Text box is yours!'/> */}
                </div>
            </div>
        </div>
    )
}
export default OtherReviewsCard