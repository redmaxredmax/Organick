import React from 'react'
import { Logo } from "/public/icons/logo.jsx"
import { Bin } from "/public/icons/bin.jsx"
import { Search } from "/public/icons/search.jsx"
import { headerData } from "../../../data/data"
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <div className='w-[1400px] mx-auto flex justify-between items-center pt-[20px] pb-[29px]'>
        <a href="/">
          <Logo />
        </a>
        <div className='flex w-[464px] gap-8'>
          <Link to={`/`} className='text-primary text-lg font-bold'>Home</Link>
          <Link to={`/about/:aboutId/:slug`} className='text-primary text-lg font-bold'>About</Link>
          <a href='/' className='text-primary text-lg font-bold'>Pages</a>
          <Link to={`/shop/:shopId/:slug`} className='text-primary text-lg font-bold'>Shop</Link> 
          <a href='/' className='text-primary text-lg font-bold'>Projects</a>
          <a href='/' className='text-primary text-lg font-bold'>News</a>
        </div>
        <div className='flex items-center gap-[18px]'>
          <form className='w-[276px] rounded-full flex  px-[15px] py-[5px] bg-white_input items-center gap-7'>
            <input className='py-[5px] bg-transparent' type="text" />
            <button className=' rounded-full bg-green flex items-center'>
              <div className='w-[30px] h-[30px] ml-[10px] mt-[10px]'>
                <Search />
              </div>
            </button>
          </form>
          <div className='flex'>
            <button className='flex gap-[12px] items-center'>
              <div className='bg-primary rounded-full  flex items-center'>
                <div className='w-[30px] h-[30px] mx-[5px] mt-[10px] '>
                  <Bin />
                </div>
              </div>
              <p className='text-lg font-semibold'>Cart(<span>0</span>)</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
