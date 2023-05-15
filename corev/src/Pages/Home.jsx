import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Testimonials from '../Components/Testimonials'
import TopCourseCard from '../Components/TopCourseCard'
import TopCourses from '../Components/TopCourses'
import TopEducaterCard from '../Components/TopEducaterCard'
import TopHomecard from '../Components/TopHomecard'
import CategoryCard from '../Components/CategoryCard'
import CategorySlider from '../Components/CategorySlider'
import TopCourseSites from '../Components/TopCourseSites'
import HomeSlider from '../Components/HomeSlider'
import EducatorSlider from '../Components/EducatorSlider'
import axios from 'axios';
const Home = () => {
const [tcourses,settCourses]=useState([]);
const [courses1,setCourses1]=useState([]);
const [teachers,setTeachers]=useState([]);

  useEffect(() => {
    const getCourse=async()=>{
      try {
        const res = await axios.get('http://localhost:3001/api/get/courses');
        settCourses(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    const getCourse1=async()=>{
      try{
       const res = await axios.get('http://localhost:3001/api/get/courses?platform=Udemy');
       setCourses1(res.data);
      }catch(err){
        console.log(err);
      }
    }
    const getTeacchers=async()=>{
      try {
        const res = await axios.get('http://localhost:3001/api/get/teachers');
        setTeachers(res.data);
      } catch (error) {
        console.error(error);
      }
    }

     getCourse();
     getCourse1();
     getTeacchers();
  },[])
  
  return (
    <div>
        <div>
          <TopHomecard/>
          <TopCourses title='Top Courses' courses={tcourses}/>
          <CategorySlider title='Top Categories'/>
          <TopCourses title='Top Courses by Udemy' courses={courses1}/>
          <HomeSlider title='Top Course sites'/>
          <EducatorSlider title='Top Educators' teachers={teachers}/>
          <div className='text-4xl font-bold font- m-9 font-sans flex justify-center'>Testimonials</div>
          <div className='flex flex-col justify-center sm:flex-row sm:justify-between items-center p-2'>
          <Testimonials/>
          <Testimonials/>
          <Testimonials/>
          </div>
        </div>
    </div>
  )
}

export default Home