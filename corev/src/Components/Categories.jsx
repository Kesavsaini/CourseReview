import React from 'react'

export const Categories = ({title,col}) => {
  return (
    <div className={`bg-${col}-400  w-36 h-16 rounded-full flex justify-center cursor-pointer items-center text-xl font-semibold text-white sm:w-44 sm:h-12`}>{title}</div>
  )
}
