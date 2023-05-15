import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export const SlidearrowF = (props) => {
  return(
    <div className={`cursor-pointer absolute top-0 right-0`} onClick={props.onClick}>
     <ArrowForwardIosIcon/>
    </div>
   )
}
export const SlidearrowB = (props) => {
 return(
  <div className='cursor-pointer' onClick={props.onClick}>
     <ArrowBackIosIcon/>
  </div>
 )
}
