import React from 'react'

export const Team = ({img,name,job,icon}) => {
  return (
    <div className='bg-about_bg rounded-3xl text-left pb-[34px] hover:bg-white'>
        <img className='rounded-t-3xl mb-[20px] ' src={img} alt="img" />
        <h3 className='px-[28px] text-2xl text-primary font-extrabold'>{name}</h3>
        <div className='px-[28px] flex justify-between'>
            <p className=' font-font1 text-yellowTail_green text-2xl'>{job}</p>
            <img src={icon} alt="icon" />
        </div>
    </div>
  )
}
