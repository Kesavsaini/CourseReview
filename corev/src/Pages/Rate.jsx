import React from "react";
import Navbar from '../Components/Navbar'
import OtherReviewsCard from "../Components/OtherReviewsCard";
import RateCard from "../Components/RateCard";
import UserRating from "../Components/UserRating";
import TopCourses from '../Components/TopCourses'

const Rate = () => {
    return (
        <div>
            <div>
                <RateCard />
                <div className='text-3xl font-bold mx-5 flex items-center justify-center sm:mx-32 my-10 text-gray-700'>Rate your experience</div>
                <UserRating />
                <div className='text-3xl font-bold mx-5 flex items-center justify-center sm:mx-32 my-10 text-gray-700'>Other Reviews</div>
                <OtherReviewsCard />
                <OtherReviewsCard />
                <OtherReviewsCard />
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