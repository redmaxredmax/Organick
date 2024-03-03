import React from 'react'
import { Hero } from '../../components/hero'
import { heroDetailData } from '../../data/data'
import { useParams } from 'react-router-dom'
import { data } from '../../data/data'
import { Button } from '../../components/ui/button'
import { RightArrow } from '../../../public/icons/right'
import { Product } from '../../components/product'
import { Link } from 'react-router-dom'
import { Subscribe } from '../../components/subscribe'
import { useScrollTop } from '../../hooks/useScrollTop'

export const Detail = () => {

    const params = useParams();
    const result = data[params.slug].find((item) => item.id == params.productId)
    useScrollTop()
    return (
        <>
            {/* hero */}
            <section>
                {heroDetailData.map((item) =>
                    <div key={item.id}>
                        <Hero {...item} />
                    </div>
                )}
            </section>
            {/* hero */}

            {/* Main */}
            <section>
                <div className='container pt-[150px]'>
                    <div className='flex  gap-[83px] mb-[72px]'>
                        <div>
                            <img data-aos="flip-left" src={result.img} alt="" />
                        </div>
                        <div className=''>
                            <h3 className='text-5xl font-semibold text-primary mb-3'>{result.name}</h3>
                            <img className='mb-3' src={result.rating} alt="rating" />
                            <div className='flex items-end gap-3 mb-[30px]'>
                                <p className='text-base font-semibold text-cost_gray  line-through'>{result.oldCost}</p>
                                <p className='text-base font-semibold text-primary'>{result.newCost}</p>
                            </div>
                            <p className='text-base text-text_green w-[658px] mb-[35px]'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                            <div className='flex items-center gap-[22px]'>
                                <p className='text-primary font-bold text-xl'>Quantity:</p>
                                <span className='py-[28px] px-[61px] border-2 rounded-2xl border-primary  text-xl font-bold'>1</span>
                                <Button icon2={<RightArrow />} variant={"about"}>Add To Card</Button>
                            </div>
                        </div>
                    </div>
                    <div className='text-center w-[1137px] mx-auto mb-[140px]'>
                        <div className='flex justify-center gap-5 mb-[27px]'>
                            <Button variant={"detail"}>Product Description</Button>
                            <Button variant={"detail"}>Additional Info</Button>
                        </div >
                        <p className='text-base text-text_green'>Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
                    </div>
                    <div>
                        <h2 className='text-primary text-4xl font-extrabold text-center mb-[40px]'>Related Products</h2>
                        <ul className='mb-[148px] grid grid-cols-4 gap-5 justify-between'>
                            {data[params.slug].map((item) =>
                                <Link data-aos="flip-right"  key={item.id} to={`/product/${item.id}/${params.slug}`}>
                                    <Product {...item} />
                                </Link>
                            )}
                        </ul>
                    </div>
                </div>
            </section>
            {/* Main */}

            {/* Subscribe */}
            <section>
                <Subscribe />
            </section>
            {/* Subscribe */}
        </>
    )
}
