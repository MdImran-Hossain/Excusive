import React from 'react'
import Heading from '../commonComponent/Heading'
import Time from '../commonComponent/Time'

const FlashSales = () => {
  return (
    <>
    <section className='pt-35 pb-12'>
      <div className=' container m-auto'>
        <div>
          <div>
            <div className='flex justify-start items-end gap-[87px]'>
              <Heading  title={'Flash Sales'} subtitle={"Today’s"}/>
              <div>
                <Time />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default FlashSales