import React from 'react'
import TopCourseCard from './TopCourseCard'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SlidearrowB,SlidearrowF } from './Slidearrow';
import CategoryCard from './CategoryCard';
import TopCourseSites from './TopCourseSites';
const HomeSlider = ({title}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SlidearrowF/>,
    prevArrow: <SlidearrowB />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className='text-4xl font-bold font- m-9 font-sans flex justify-center'>{title}</div>
    {/* <div className='w-[100%] flex items-center justify-center gap-5 sm:flex-row sm:flex-wrap'> */}
          
           <Slider {...settings}>
            <TopCourseSites/>
            <TopCourseSites/>
            <TopCourseSites/>
            <TopCourseSites/>
            <TopCourseSites/>
            <TopCourseSites/>
            <TopCourseSites/>
            <TopCourseSites/>
            </Slider>
        {/* </div> */}
    </>
  )
}

export default HomeSlider