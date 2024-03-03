import React from 'react'
import hero_bg from "/public/imgs/hero_bg.png"
import { Button } from '../../components/ui/button'
import { RightArrow } from "/public/icons/right.jsx"
import { categoryData, customerData,  foodsData, newsData, data } from '../../data/data'
import { Category } from '../../components/category'
import about_img from "/public/imgs/about.png"
import { About1 } from "/public/icons/about1.jsx"
import { About2 } from "/public/icons/about2.jsx"
import { Product } from '../../components/product'
import customer_pic from "/public/imgs/customer_img.png"
import rating from "/public/icons/rating.svg"
import customer_bg from "/public/imgs/customer_bg.png"
import eco_bg from "/public/imgs/eco_bg.png"
import { Customer } from '../../components/customer'
import { Foods } from '../../components/foods'
import { News } from '../../components/news/news'
import { Link } from 'react-router-dom'
import { Subscribe } from '../../components/subscribe/subscribe'

export const Home = () => {
  return (
    <>
      <section className='pb-[391px] '>
        <div>
          <img className='absolute z-[-1] object-cover ' src={hero_bg} alt="" />
        </div>
        <div data-aos="fade-right" data-aos-duration="1000" className='container pt-[247px] '>
          <div className='w-[530px]'>
            <p className='font-font1 text-4xl mb-4 text-yellowTail_green'>100% Natural Food</p>
            <h2 className='text-7xl font-extrabold text-primary mb-[23px]'>Choose the best
              healthier way
              of life</h2>
            <Button icon2={<RightArrow />} variant={"hero"}>
              Explore Now
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className='container pb-[200px]' >
          <div className='flex  gap-10'>
            {categoryData.map((item) =>
              <div data-aos="flip-right" key={item.id}>
                <Category img={item.img} name={item.name} text={item.text} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About */}
      <section>
        <div className='bg-about_bg pb-[113px]'>
          <div className='container flex items-center justify-between'>
            <div>
              <img data-aos="zoom-in" src={about_img} alt="img" />
            </div>
            <div className='w-[702px] '>
              <p className='font-font1 text-4xl text-yellowTail_green mb-4'> About Us</p>
              <h2 className='text-5xl font-extrabold text-primary mb-5'>
                We Believe in Working
                Accredited Farmers
              </h2>
              <p className='text-base text-text_green mb-[48px]'>
                Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
              </p>
              <ul>
                <li className='flex items-center gap-2'>
                  <div>
                    <About1 />
                  </div>
                  <div className='w-[404px] mb-[48px]'>
                    <h3 className='font-extrabold text-2xl text-primary mb-2'>
                      Organic Foods Only
                    </h3>
                    <p className='text-base  text-text_green '>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                  </div>
                </li>
                <li className='flex items-center gap-2'>
                  <div>
                    <About2 />
                  </div>
                  <div className='w-[404px] mb-[48px]'>
                    <h3 className='font-extrabold text-2xl text-primary mb-2'>
                      Quality Standards
                    </h3>
                    <p className='text-base  text-text_green'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                  </div>
                </li>
              </ul>
              <Button variant={"about"} icon2={<RightArrow />}>Shop Now</Button>
            </div>
          </div>
        </div>
      </section>
      {/* About */}

      {/* Product */}
      <section>
        <div className='container pt-[100px] pb-[200px]'>
          <div className='w-[300px] mx-auto text-center'>
            <p className='font-font1 mb-[8px] text-4xl '>
              Categories
            </p>
            <h2 className='mb-[40px] text-primary text-5xl font-extrabold'>
              Our Products
            </h2>
          </div>
          <ul className='mb-[148px] grid grid-cols-4 gap-5 justify-between'>
            {data.productData.map((item) =>
              <Link data-aos="flip-right" to={`/product/${item.id}/productData`} key={item.id}>
                <Product {...item} />
              </Link>
            )}
          </ul>
          <div className='flex justify-center'>
            <Button icon2={<RightArrow />} variant={"about"}>Load More</Button>
          </div>
        </div>

      </section>
      {/* Product */}

      {/* Customer */}
      <section>
        <div>
          <img className='absolute z-[-1]' src={customer_bg} alt="img" />
        </div>
        <div className='container text-center pt-[164px] pb-[190px]'>
          <p className='font-font1 text-4xl text-yellowTail_green mb-3'>Testimonial</p>
          <h2 className='text-5xl font-extrabold text-primary mb-[51px]'>
            What Our Customer Saying?
          </h2>
          <div className='w-[780px] mx-auto mb-[128px]'>
            <div className='flex justify-center flex-col mx-auto w-[125px] mb-[25px]'>
              <img className='block' src={customer_pic} alt="img" />
              <img className='block' src={rating} alt="icon" />
            </div>
            <p className='text-lg text-text_green mb-[20px]'>
              Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
            </p>
            <h3 className='text-primary font-semibold text-2xl'>Sara Taylor</h3>
            <p className='text-sm text-text_green opacity-90'>Consumer</p>
          </div><hr className='w-[1000px] mx-auto mb-[102px]' />
          <ul className='w-[1030px] mx-auto flex justify-between'>
            {customerData.map((item) =>
              <li key={item.id}>
                <Customer {...item} />
              </li>
            )}
          </ul>
        </div>
      </section>
      {/* Customer */}

      {/* Offer */}
      <section>
        <div className='bg-primary '>
          <div className='container py-[200px]  '>
            <p className='text-4xl font-font1 text-green mb-4'>Offer</p>
            <div className='flex justify-between items-center pb-[50px]'>
              <h2 className='text-5xl font-extrabold text-white'>
                We Offer Organic For You
              </h2>
              <Button icon2={<RightArrow />} variant={"hero"}>View All Product</Button>
            </div>

            <ul className='mb-[148px] grid grid-cols-4 gap-5 justify-between'>
              {data.offerData.map((item) =>
                <Link data-aos="flip-right" to={`/product/${item.id}/offerData`} key={item.id}>
                  <Product {...item} />
                </Link>
              )}
            </ul>
          </div>
        </div>
      </section>
      {/* Offer */}

      {/* Eco */}
      <section>
        <div className='relative flex'>
          <div>
            <img className='w-[993px] h-[951px]' src={eco_bg} alt="img" />
          </div>
          <div className='container w-[700px] absolute left-[891px] mt-[140px] py-[78px] px-[89px] rounded-3xl bg-white'>
            <p className='font-font1 text-4xl text-green mb-4'>Eco Friendly</p>
            <h2 className='text-primary font-extrabold text-5xl mb-[35px]'>Econis is a Friendly
              Organic Store</h2>
            <ul>
              <li className='mb-[35px]'>
                <h3 className='text-2xl text-primary font-medium'>
                  Start with Our Company First
                </h3>
                <p className='text-base text-text_green'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
              </li>
              <li className='mb-[35px]'>
                <h3 className='text-2xl text-primary font-medium'>
                  Learn How to Grow Yourself
                </h3>
                <p className='text-base text-text_green'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
              </li>
              <li className='mb-[35px]'>
                <h3 className='text-2xl text-primary font-medium'>
                  Farming Strategies of Today
                </h3>
                <p className='text-base text-text_green'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Eco */}

      {/* foods */}
      <section>
        <div className='py-[187px] bg-about_bg'>
          <ul className='flex mx-auto gap-6 w-[1800px]'>
            {foodsData.map((item) =>
              <li data-aos="zoom-in-up" data-aos-duration="5000" key={item.id}>
                <Foods {...item} />
              </li>
            )}
          </ul>
        </div>
      </section>
      {/* foods */}

      {/* News */}
      <section>
        <div>
          <div className='container py-[177px]'>
            <p className='text-4xl font-font1 text-green mb-4'>News</p>
            <div className='flex justify-between items-center pb-[45px]'>
              <h2 className='text-5xl font-extrabold text-primary w-[700px]'>
                Discover weekly content about organic food, & more
              </h2>
              <Button icon2={<RightArrow />} variant={"news"}>More News</Button>
            </div>
            <ul className='flex justify-between '>
              {newsData.map((item) =>
                <li key={item.id}>
                  <News {...item} />
                </li>
              )}
            </ul>

          </div>
        </div>
      </section>
      {/* News */}

      {/* Subscribe */}
      <section>
        <Subscribe />
      </section>
      {/* Subscribe */}
    </>
  )
}
