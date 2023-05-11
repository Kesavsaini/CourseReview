import React, { useEffect, useState } from "react";
import Navbar from '../Components/Navbar'
import OtherReviewsCard from "../Components/OtherReviewsCard";
import RateCard from "../Components/RateCard";
import UserRating from "../Components/UserRating";
import TopCourses from '../Components/TopCourses'
import { useLocation } from "react-router-dom";
import axios from "axios";

const Rate = () => {
    const href = useLocation();
    const courseid=href.pathname.split("/")[2];
    const [review,setReview]=useState([]);
    useEffect(()=>{
        const getReview=async()=>{
            try{
                const res=await axios.get(`http://localhost:3001/api/get/courserating/${courseid}`);
                setReview(res.data);
            }catch(err){
                console.log(err);
            }
        }
        getReview();
    })

    return (
        <div>
            <div>
                <RateCard courseid={courseid}/>
                <div className='text-3xl font-bold mx-5 flex items-center justify-center sm:mx-32 my-10 text-gray-700'>Rate your experience</div>
                <UserRating courseid={courseid}/>
                <div className='text-3xl font-bold mx-5 flex items-center justify-center sm:mx-32 my-10 text-gray-700'>Other Reviews</div>
                {
                    review && review.map((data)=>(
                        data && <OtherReviewsCard data={data}/>
                    ))
                }
                
                <div className='text-3xl font-bold flex items-center justify-center sm:mx-32 my-10 text-gray-700'>Rate other courses</div>
                <div className="sm:w-[100%] sm:flex sm:items-center sm:justify-center">
                <div className="sm:w-[80%]">
                    <TopCourses />
                </div>
                </div>
            </div>
        </div>
    )
}
export default Rate;