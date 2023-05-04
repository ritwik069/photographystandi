import Image from 'next/image'
import React from 'react'

function MiddleComp({ Imagesrc }) {
  return (
    <div className='h-full flex flex-col items-center'>
      <h1 className='font-[20px] mt-1'>Hi!</h1>
      <h2 className='font-[20px] my-2'>Welcome to the wedding of </h2>
      <h1 className='font-[24px] mb-2'>Sakshi and Naman</h1>
      <div className='relative h-[150px] w-[80%] rounded-lg mb-3 '>
        <Image src={Imagesrc} fill className='objec-contain rounded-lg' />
        <div className='absolute w-full h-full flex justify-center items-center'>
          <h1 className='text-white'>CLICK HERE</h1>
        </div>
      </div>
    </div>
  )
}

export default MiddleComp