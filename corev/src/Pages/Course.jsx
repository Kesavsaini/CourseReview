import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Testimonials from '../Components/Testimonials'
import TopCourseCard from '../Components/TopCourseCard'
import TopCourses from '../Components/TopCourses'
import TopEducaterCard from '../Components/TopEducaterCard'
import Coursecard from '../Components/Coursecard'
import CourseTopCard from '../Components/CourseTopCard'
import CoursesSlider from '../Components/CoursesSlider'
import TopHomecard from '../Components/TopHomecard'
import CoursePageCard from '../Components/CoursePageCard'
import axios from 'axios'
import Topcourses from '../Components/TopCourses'
import { useLocation, useNavigate } from 'react-router-dom'
const Course = ({platform}) => {
  const location=useLocation();
  let category="";
  category=location.pathname.split("/")[2];
  const [tcourses,settCourses]=useState([]);
  const [sresult,setSresult]=useState([]);
  useEffect(() => {
    const getCourse=async()=>{
      try {
        const res = await axios.get('http://localhost:3001/api/get/courses');
        console.log(res.data);
        settCourses(res.data);
      } catch (error) {
        console.error(error);
      }
    }
     getCourse();
  },[])
  useEffect(() => {
    const getSCourse=async()=>{
      try {
        console.log(category);
        const res = await axios.get(`http://localhost:3001/api/get/courses?catogery=${category}`);
        console.log("search result");
        console.log(res.data);
        setSresult(res.data);
      } catch (error) {
        console.error(error);
      }
    }
   getSCourse();
  },[category])
  return (
    <div>
       <div className=''>
      <CoursePageCard/>
      <Topcourses title='Browse Courses' courses={tcourses}/>
      <div>
      {sresult.length>0 &&  <div className='text-2xl font-bold'>Search Results</div>}
        <div className='sm:flex sm:flex-wrap sm:w-[100%] sm:justify-between sm:items-center'>
          {
            sresult && sresult.map((data)=>{
               return <Coursecard data={data}/>  
            })
          }
        </div> 
      </div>
       </div>
    </div>
  )
}

export default Course