import React from 'react'
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

const Course = () => {
  return (
    <div>
       <Navbar/>
       <div>
      <CoursePageCard/>
        <CoursesSlider/>
        <Coursecard/>
        <Coursecard/>
        <Coursecard/>   
       </div>
    </div>
  )
}

export default Course