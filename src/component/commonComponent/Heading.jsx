import React from 'react'

const Heading = ({title, subtitle}) => {
  return (
    <>
    <div>
      <div className='flex justify-start items-center gap-[30px]'>
        <span className='w-5 h-10 bg-red rounded block'></span>
        <span className='font-poppins font-semibold text-[16px] text-red'>{subtitle?subtitle:"Today’s"}</span>
      </div>
      <div>
        <h2 className='font-Inter font-semibold text-4xl text-black mt-[34px] tracking-wide'>{title?title:"Flash Sales"}</h2>
      </div>
    </div>
    </>
  )
}

export default Heading