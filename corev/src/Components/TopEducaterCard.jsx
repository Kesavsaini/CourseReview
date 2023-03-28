import React from 'react'
const Catogory=({text})=>{
    return(
      <>
      <div className='border border-black px-3 py-1 rounded-full text-xs'>
        {text}
      </div>
      </>
    )
}
const TopEducaterCard = () => {
  return (
    <div className=' w-[96%] shadow rounded-xl sm:w-80 m-2'>
    <img src="https://img.freepik.com/free-photo/portrait-businesswoman-with-notebook-talking-phone_114579-64314.jpg?w=826&t=st=1679140513~exp=1679141113~hmac=3e40f6ab4756a420fcae7cb2db695ad2e65951fd35b1bd8f53050d9c14d3cf98" alt="" className='h-[60%]' />
    <div className='flex justify-between items-center'>
        <div className='text-2xl m-4 font-bold text-blue-900 sm:m-3 sm:text-xl'>Jassica Singh</div>
        <div className='bg-blue-500 px-10 py-2 rounded-full text-white font-semibold m-4 sm:m-3'>Cousera</div>
    </div> 
    <div className='flex flex-wrap gap-3 m-3'>
      <Catogory text="Data Science"/>
      <Catogory text="Python"/>
      <Catogory text="R Programming"/>
    </div>
    <a className='text-blue-500 text-xl font-bold m-3 cursor-pointer sm:text-lg'>
        Know more →
    </a>
    </div>
  )
}

export default TopEducaterCard