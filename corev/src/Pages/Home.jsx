import React from 'react'
import Navbar from '../Components/Navbar'
import Testimonials from '../Components/Testimonials'
import TopCourseCard from '../Components/TopCourseCard'
import TopCourses from '../Components/TopCourses'
import TopEducaterCard from '../Components/TopEducaterCard'

const Home = () => {
  return (
    <div>
       <Navbar/>
        <div>
          <TopCourses title='Top Courses'/>
        </div>
    </div>
  )
}

export default Home