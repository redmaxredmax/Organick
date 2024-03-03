import React from 'react'
import { Button } from '../ui/button'

export const Subscribe = () => {
    return (
        <div>
            <div className='container bg-[url("/public/imgs/subscribe.png")] bg-no-repeat py-[105px] px-[70px] rounded-3xl flex justify-between'>
                <div>
                    <h2 className='text-5xl text-white font-extrabold w-[357px]'>Subscribe to
                        our Newsletter
                    </h2>
                </div>
                <form className='flex items-center gap-3'>
                    <input className='pl-[23px] py-[28px] w-[349px] outline-none rounded-2xl' placeholder='Your Email Address' type="email" />
                    <Button variant={"input"}>Subscribe</Button>
                </form>
            </div>
        </div>
    )
}
