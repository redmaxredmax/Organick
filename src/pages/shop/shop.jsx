import React from 'react'
import { Hero } from '../../components/hero'
import { heroShopData, data } from '../../data/data'
import { Product } from '../../components/product'
import { Subscribe } from '../../components/subscribe'
import { Link } from 'react-router-dom'
export const Shop = () => {
  return (
    <>
      {/* Hero */}
      <section>
        {heroShopData.map((item) =>
          <div key={item.id}>
            <Hero {...item} />
          </div>
        )}
      </section>
      {/* Hero */}

      {/* Shop */}
      <section>
        <div className='container pt-[120px]'>
          <ul className='mb-[148px] grid grid-cols-4 gap-5 justify-between'>
            {data.shopData.map((item) =>
              <Link to={`/product/${item.id}/shopData`} key={item.id}>
                <Product {...item} />
              </Link>
            )}
          </ul>
        </div>
      </section>
      {/* Shop */}

      {/* Subscribe */}
      <section>
        <Subscribe />
      </section>
      {/* Subscribe */}
    </>
  )
}
