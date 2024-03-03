import React from 'react'


export const Hero = ({img,name}) => {
  return (
    <>
        <div>
            <img className='absolute z-[-1] object-contain' src={img} alt="img" />
        </div>
        <div className='py-[169px]'>
            <h1 className='mx-[25%] text-primary font-extrabold text-5xl text-center'>{name}</h1>
        </div>
    </>
  )
}
