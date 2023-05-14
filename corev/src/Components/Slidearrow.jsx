import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export const SlidearrowF = (props) => {
    const { clN, style, onClick,r,t } = props;
  return (
    <div className={`glass2 absolute right-${r} w-10 h-10 rounded-full top-${t} flex justify-center items-center cursor-pointer`}  onClick={onClick}>
     <ArrowForwardIosIcon style={{color:'white'}}/>
    </div>
  )
}
export const SlidearrowB = (props) => {
    const { clN, style, onClick } = props;
    return (
      <div className={`glass2 absolute left w-10 h-10 rounded-full top flex justify-center items-center cursor-pointer`} onClick={onClick}>
        <ArrowBackIosIcon style={{color:'white'}}/>
      </div>
    )
  }
