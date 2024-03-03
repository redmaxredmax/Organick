import React from 'react'

export const Choose = ({name,icon,text}) => {
  return (
    <div className='py-[50px] px-[35px] bg-white rounded-3xl mt-[91px]'>
        <div className='w-[95px] mx-auto mb-[15px]'>
            <img src={icon} alt="icon" />
        </div>
        <h3 className='font-extrabold text-primary text-2xl mb-[12px]'>{name}</h3>
        <p className='text-base w-[184px]'>{text}</p>
    </div>
  )
}
