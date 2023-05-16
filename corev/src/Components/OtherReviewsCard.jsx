import React, { useEffect, useState } from "react";
import Rating from '@mui/material/Rating';
import axios from "axios";
import { useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';

const OtherReviewsCard = ({data}) => {
    const token=useSelector((state)=>state.userdata.user.token);
    const userid=useSelector((state)=>state.userdata.user._id);
    const [suser,setsUser]=useState();
    useEffect(()=>{
           const getProfile=async()=>{
            const headers = {
                'token':`Bearer ${token}`
              }
            try{
              const res=await axios.get(`http://localhost:3001/api/user/get/${data.userId}`,{headers:headers});
              setsUser(res.data);
            }catch(err){
                console.log(err);
            }
        }
        getProfile();
    });
    const deleteReview=async()=>{
         try{
            const headers = {
                'token':`Bearer ${token}`
              }
           await axios.delete(`http://localhost:3001/api/delete/rating/${data._id}`,{headers:headers});
         }catch(err){
            console.log(err);
         }
    }
    return (
        <div className='w-[96%] shadow rounded-xl p-5 sm:h-auto m-2 my-7 sm:w-[80%] sm:p-14 sm:mx-36'>
            <div className='flex justify-between items-center'>
                <div className="flex justify-center items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className='w-12 h-12 rounded-full bg-cover ' />
                <div className='text-2xl font-bold mx-5 flex'>{suser ? suser.name :"User"}</div>
                </div>
                {userid===data.userId && <div className="cursor-pointer">
                    <DeleteIcon className="hover:text-red-600" onClick={deleteReview}/>
                </div>}
            </div>
            <div className="flex flex-col sm:flex-col-reverse sm:text-xl sm:justify-between">
                <div className="sm:gap-5 sm:h-60 sm:flex sm:flex-col sm:justify-between">
                    <div className="sm:flex sm:flex-row sm:w-[80%]  sm:justify-between">
                        <div className="font-bold text-2x1 -my-0 sm:w-80">Meets Expectation ?</div>
                        <div className='flex items-center gap-5 '>
                            <div className='flex items-center gap-2 mx-0'>
                                <Rating name="half-rating-read" defaultValue={0} value={data.expectations} precision={1.0} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex sm:flex-row sm:w-[80%]  sm:justify-between">
                        <div className="font-bold text-2x1 my-2 ">What do you say about content ?</div>
                        <div className='flex items-center gap-5 '>
                            <div className='flex items-center gap-2 mx-0'>
                                <Rating name="half-rating-read" defaultValue={0} value={0} precision={1.0} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex sm:flex-row sm:w-[80%]  sm:justify-between">
                        <div className="font-bold text-2x1 -my-0 ">What do you say about instructor ?</div>
                        <div className='flex items-center gap-5 '>
                            <div className='flex items-center gap-2 mx-0'>
                                <Rating name="half-rating-read" defaultValue={0} value={data.instructor} precision={1.0} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex sm:flex-row  sm:w-[80%] sm:justify-between ">
                        <div className="font-bold text-2x1 -my-0  sm:w-80">Is the duration of course good ?</div>
                        <div className='flex items-center gap-5 '>
                            <div className='flex items-center gap-2 mx-0'>
                                <Rating name="half-rating-read" defaultValue={0} value={data.duration} precision={1.0} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex sm:flex-row  sm:w-[80%] sm:justify-between ">
                        <div className="font-bold text-2x1 -my-0">Were you able to skill up yourself ?</div>
                        <div className='flex items-center gap-5 '>
                            <div className='flex items-center gap-2 mx-0'>
                                <Rating name="half-rating-read" defaultValue={0} value={data.skillup} precision={1.0} readOnly />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-80 h-40 my-7 border border-black rounded-md outline-none p-1 border-none shadow sm:w-[70%] sm:shadow-none'>
                    <p>{data.comment}</p>
                    {/* <input type="text" className='w-80 h-20 my-4 border border-black rounded-md outline-none p-1 border-none shadow ' placeholder='Text box is yours!'/> */}
                </div>
            </div>
        </div>
    )
}
export default OtherReviewsCard