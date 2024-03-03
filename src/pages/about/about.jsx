import React from 'react'
import { Hero } from '../../components/hero'
import { heroAboutData } from '../../data/data'
import about from "/public/about/about.png"
import { Tractor } from "/public/icons/tractor.jsx"
import { Factory } from "/public/icons/factory.jsx"
import { Button } from '../../components/ui/button'
import { RightArrow } from "/public/icons/right.jsx"
import choose from "/public/about/choose.png"
import { Circle } from "/public/icons/circle.jsx"
import { chooseCardData, productsData, teamCardData } from './data/data'
import { Choose } from './components/choose'
import { Team } from './components/team'
import { Products } from './components/products'
import { Subscribe } from '../../components/subscribe'

export const About = () => {
    return (
        <>
            {/* Hero */}
            <section>
                {heroAboutData.map((item) =>
                    <div key={item.id}>
                        <Hero {...item} />
                    </div>
                )}
            </section>
            {/* Hero */}

            {/* About */}
            <section>
                <div className='container pt-[200px] flex justify-between items-center pb-[140px]'>
                    <div>
                        <img data-aos="zoom-in" src={about} alt="" />
                    </div>
                    <div className='w-[674px]  '>
                        <p className='font-font1 text-yellowTail_green text-4xl mb-4'>About Us</p>
                        <h2 className='text-primary text-5xl font-extrabold mb-[14px] pr-[150px]'>
                            We do Creative
                            Things for Success
                        </h2>
                        <p className='text-base text-text_green mb-[50px]'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.

                            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        <div className='flex mb-[58px]'>
                            <div className='flex items-center w-[292px] gap-5'>
                                <div>
                                    <Tractor />
                                </div>
                                <h3 className='text-primary text-2xl font-medium'>Modern Agriculture
                                    Equipment
                                </h3>
                            </div>
                            <div className='flex items-center w-[292px] gap-5'>
                                <Factory />
                                <h3 className='text-primary text-2xl font-medium'>No growth hormones are used</h3>
                            </div>
                        </div>
                        <Button icon2={<RightArrow />} variant={"about"}>Explore More</Button>
                    </div>
                </div>
            </section>
            {/* About */}

            {/* Choose */}
            <section>
                <div className='bg-about_bg py-[190px]'>
                    <div className='flex container '>
                        <div className='w-[671px] pr-[51px]'>
                            <p className='font-font1 text-yellowTail_green text-2xl mb-3'>Why Choose us?</p>
                            <h2 className='text-primary text-5xl font-extrabold pr-[100px] mb-[25px]'>
                                We do not buy from the
                                open market & traders.
                            </h2>
                            <p className='text-base text-text_green mb-[36px]'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>
                            <ul>
                                <li className='mb-[24px]'>
                                    <div className='flex gap-3 items-center w-[339px] py-[29px] pl-[27px] rounded-full mb-[12px] bg-gray_bg'>
                                        <Circle />
                                        <h3 className='text-primary font-medium text-2xl'>100% Natural Product</h3>
                                    </div>
                                    <p className='ml-[60px] w-[404px] text-base text-text_green'>
                                        Simply dummy text of the printing and typesetting industry Lorem Ipsum
                                    </p>
                                </li>
                                <li className='mb-[24px]'>
                                    <div className='flex gap-3 items-center w-[339px] py-[29px] pl-[27px] rounded-full mb-[12px] bg-gray_bg'>
                                        <Circle />
                                        <h3 className='text-primary font-medium text-2xl'> Increases resistance</h3>
                                    </div>
                                    <p className='ml-[60px] w-[404px] text-base text-text_green'>
                                        Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img data-aos="zoom-in" className='w-[600px] rounded-2xl' src={choose} alt="" />
                        </div>
                    </div>
                    <ul className='container flex justify-center gap-[30px] text-center'>
                        {chooseCardData.map((item) =>
                            <li key={item.id}>
                                <Choose {...item} />
                            </li>
                        )}
                    </ul>
                </div>
            </section>
            {/* Choose */}

            {/* Team */}
            <section>
                <div className='container text-center py-[177px]'>
                    <p className='font-font1 text-4xl text-yellowTail_green'>Team</p>
                    <h2 className='text-5xl text-primary font-extrabold mb-[16px]'>
                        Our Organic Experts
                    </h2>
                    <p className='w-[852px] text-base text-text_green mx-auto 
                    mb-[30px]'>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>
                    <ul className='flex gap-10'>
                        {teamCardData.map((item) =>
                            <li data-aos="flip-right" key={item.id}>
                                <Team {...item} />
                            </li>
                        )}
                    </ul>

                </div>
            </section>
            {/* Team */}

            {/* Products */}
            <section>
                <div className='bg-primary py-[188px]'>
                    <div className='container text-center'>
                        <p className='font-font1 text-3xl text-yellowTail_green mb-3'> About Us</p>
                        <h2 className='text-5xl text-white font-extrabold mb-[33px]'>
                            What We Offer for You
                        </h2>
                        <ul className='flex justify-between items-center'>
                            {productsData.map((item) =>
                                <li key={item.id}>
                                    <Products {...item} />
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </section>
            {/* Products */}

            {/* Subscribe */}
            <section>
                <div className='py-[100px]'>
                    <Subscribe />
                </div>
            </section>
            {/* Subscribe */}
        </>
    )
}
