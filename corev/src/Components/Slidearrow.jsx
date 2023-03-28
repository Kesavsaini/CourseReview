import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export const SlidearrowF = (props) => {
    const { clN, style, onClick } = props;
  return (
    <div className='glass2 absolute right-0 w-10 h-10 rounded-full top-48 flex justify-center items-center cursor-pointer z-20'  onClick={onClick}>
     <ArrowForwardIosIcon style={{color:'white'}}/>
    </div>
  )
}
export const SlidearrowB = (props) => {
    const { clN, style, onClick } = props;
    return (
      <div className='glass2 absolute left-0 w-10 h-10 rounded-full top-48 flex justify-center items-center cursor-pointer z-20' onClick={onClick}>
        <ArrowBackIosIcon style={{color:'white'}}/>
      </div>
    )
  }
