import React from 'react'
import Heading from '../commonComponent/Heading'
import Time from '../commonComponent/Time'
import ProductCard from '../commonComponent/ProductCard'

const FlashSales = () => {
  return (
    <>
    <section className='pt-35 pb-12'>
      <div className=' container m-auto'>
        <div>
          <div className='flex flex-col gap-10'>
            <div className='flex justify-start items-end gap-[87px]'>
              <Heading  title={'Flash Sales'} subtitle={"Today’s"}/>
              <div>
                <Time />
              </div>
            </div>
            <div>
              <ProductCard />

            </div>
            
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default FlashSales