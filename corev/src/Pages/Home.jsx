import React from 'react'
import { Categories } from '../Components/Categories'
import Navbar from '../Components/Navbar'
import Testimonials from '../Components/Testimonials'
import TopCourseCard from '../Components/TopCourseCard'
import TopCourses from '../Components/TopCourses'
import TopEducaterCard from '../Components/TopEducaterCard'
import TopEducaters from '../Components/TopEducaters'

const Home = () => {
  return (
    <div>
       <Navbar/>
        <div className='p-3'>
        <div className=''>
           <div className='text-2xl font-bold m-5'>Catogries</div>
           <div className='flex flex-row gap-5 justify-center items-center flex-wrap sm:justify-start'>
            <Categories title='Technology' col='red'/>
            <Categories title='Politics' col='red'/>
            <Categories title='Science' col='red'/>
            <Categories title='History' col='red'/>
           </div>
           </div>
          <TopCourses title='Top Courses'/>
          <TopEducaters title='Top Educaters'/>
          <div>
          <div className='text-2xl font-bold m-5'>Testimonials</div>
          <div className='flex flex-col justify-center items-center sm:flex-row sm:flex-wrap sm:justify-between sm:items-start'>
            <Testimonials/>
            <Testimonials/>
            <Testimonials/>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Home