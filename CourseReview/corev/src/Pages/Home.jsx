import React from 'react'
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

const Home = () => {
  return (
    <div>
       <Navbar/>
        <div>
          <TopHomecard/>
          <TopCourses title='Top Courses'/>
          <CategorySlider title='Top Categories'/>
          <TopCourses title='Top Courses by Coursera'/>
          <TopCourses title='Top Courses by Edx'/>
          <HomeSlider title='Top Course sites'/>
          <EducatorSlider title='Top Educators'/>
          <div className='text-2xl font-bold mx-5 sm:mx-32 my-10'>Testimonials</div>
          <div className='sm:flex'>
          <Testimonials/>
          <Testimonials/>
          <Testimonials/>
          </div>
        </div>
    </div>
  )
}

export default Home