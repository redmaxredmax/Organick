import React from 'react'

export const Products = ({img,name}) => {
  return (
    <div className='flex flex-col text-center'>
        <img className='w-[320px] rounded-3xl mb-[20px] bg-white' src={img} alt="img" />
        <h3 className='text-2xl font-medium text-white'>{name}</h3>
    </div>
  )
}
