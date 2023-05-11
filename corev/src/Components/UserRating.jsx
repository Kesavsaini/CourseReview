import React, { useState } from "react";
import Rating from '@mui/material/Rating';
import axios from "axios";
import { useSelector } from "react-redux";

const UserRating = ({courseid}) => {
    const token=useSelector((state)=>state.userdata.user.token);
    const [expectations,setExpectations]=useState(0);
    const [instructor,setrInstructor]=useState(0);
    const [duration,setDuration]=useState(0);
    const [skillup,setSkillup]=useState(0);
    const [comment,setComment]=useState("");
    const submitRating=async(e)=>{
        const headers = {
            'token':`Bearer ${token}`
          }
        try{
            const body={expectations,instructor,duration,skillup,comment};
            console.log(body);
            const res=await axios.post(`http://localhost:3001/api/newrating/${courseid}`,body,{headers:headers});
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div className='w-[96%] shadow rounded-xl p-5  sm:h-auto m-2 sm:w-[80%] sm:p-14 sm:mx-36'>
            <div className='w-12 h-12 rounded-full flex m-px'>
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className='w-12 h-12 rounded-full bg-cover ' />
                <div className='text-2xl font-bold mx-5 flex'>AkshitKumar</div>
            </div>
            <div className="flex flex-col sm:flex-col-reverse sm:text-xl sm:justify-center">
                <div className="sm:w-[100%]">
                    <div className="sm:flex sm:flex-row sm:gap-96 sm:w-[80%] sm:justify-between">
                        <div className="font-bold text-2x1  my-2 sm:w-80">Meets Expectation ?</div>
                        <div className='flex items-center gap-5 '>
                            <div className='flex items-center gap-2 mx-0'>
                            <Rating name="half-rating" defaultValue={0} precision={0.5} onChange={(e,value)=>setExpectations(value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex sm:flex-row sm:gap-96 sm:w-[80%]  sm:justify-between">
                        <div className="font-bold text-2x1 my-2 ">What do you say about content ?</div>
                        <div className='flex items-center gap-5 '>
                            <div className='flex items-center gap-2 mx-0'>
                            <Rating name="half-rating" defaultValue={0} precision={0.5} />
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex sm:flex-row sm:gap-96 sm:w-[80%]  sm:justify-between">
                        <div className="font-bold text-2x1  my-2 ">What do you say about instructor ?</div>
                        <div className='flex items-center gap-5 '>
                            <div className='flex items-center gap-2 mx-0'>
                            <Rating name="half-rating" defaultValue={0} precision={0.5} onChange={(e,value)=>setrInstructor(value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex sm:flex-row sm:gap-96 sm:w-[80%] sm:justify-between ">
                        <div className="font-bold text-2x1 my-2 sm:w-80">Is the duration of course good ?</div>
                        <div className='flex items-center gap-5 '>
                            <div className='flex items-center gap-2 mx-0'>
                            <Rating name="half-rating" defaultValue={0} precision={0.5} onChange={(e,value)=>setDuration(value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex sm:flex-row sm:gap-96 sm:w-[80%] sm:justify-between ">
                        <div className="font-bold text-2x1 my-2 ">Were you able to skill up yourself ?</div>
                        <div className='flex items-center gap-5 '>
                            <div className='flex items-center gap-2 mx-0'>
                            <Rating name="half-rating" defaultValue={0} precision={0.5} onChange={(e,value)=>setSkillup(value)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <input type="text" className='w-80 h-36 my-4 border border-black rounded-md outline-none p-2 border-none shadow sm:w-[80%] sm:h-36' placeholder='Text box is yours!' onChange={(e)=>setComment(e.target.value)}/>
            </div>
            <div className='flex items-center justify-center'>
                <button className=' w-80 bg-blue-600 text-white flex  px-10 py-3 rounded-md font-semibold justify-center  my-6 sm:m-1 sm:p-2 sm:my-6' onClick={(e)=>submitRating(e)}>Submit Rating</button>
            </div>
        </div>
    )
}
export default UserRating