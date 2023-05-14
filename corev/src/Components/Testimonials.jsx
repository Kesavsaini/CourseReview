import React from 'react'

const Testimonials = () => {
  return (
    <div className='shadow p-4 w-[95%] rounded-md sm:w-96 sm:p-2 mt-4 sm:ml-24'>
     <div className='flex items-center gap-3 m-3'>
        <div className='w-16 h-16 rounded-full'>
        <img src="https://wallpapers.com/images/featured/81fi31lzmqbcg80q.jpg" alt="" className='w-16 h-16 rounded-full bg-cover'/>
        </div>
        <div className='text-3xl font-bold sm:text-2xl text-blue-900'>
            Elon musk
        </div>
     </div>
     <div className='text-sm m-3 text-gray-700 sm:text-xs'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum consectetur provident eaque ratione! Accusamus, quidem omnis blanditiis similique fugit consequuntur aut, deserunt, necessitatibus quod eum beatae ut impedit non nihil.
     </div>
     <div className='text-xs font-extrabold m-3'>23 Jan 2023 . 815 am</div>
    </div>
  )
}

export default Testimonials