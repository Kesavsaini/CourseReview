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
const TopEducaterCard = ({data}) => {
  return (
    <div className=' w-[90%] h-[30rem] shadow rounded-xl sm:w-80 sm:h-96 m-3'>
      <div className='flex h-[60%] rounded-xl justify-center items-center bg-blue-700'>
    <img src={`${data.img}`} alt="" className='rounded-xl shadow-black shadow-xl' />
    </div>
    <div>
    <div className='flex justify-between items-center'>
        <div className='text-2xl m-4 font-bold text-blue-900 sm:m-3 sm:text-xl'>{data.name}</div>
        <div className='bg-blue-500 px-10 py-2 rounded-full text-white font-semibold m-4 sm:m-3 hover:bg-white hover:text-blue-600 cursor-pointer'>{data.platform}</div>
    </div> 
    <div className='flex flex-wrap gap-3 m-3'>
      {   
        data.catogries && data.catogries.map((cat)=>(
           <Catogory text={cat}/>
        ))
      }
    </div>
    <a className='text-blue-600 text-xl font-bold m-3 cursor-pointer sm:text-lg'>
        Know more →
    </a>
    </div>
    </div>
  )
}

export default TopEducaterCard