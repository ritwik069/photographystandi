import Image from 'next/image'
import React from 'react'
const link = 'https://photos.app.goo.gl/DdYuqgnoWhUAA8gp7'
function MiddleComp({ Imagesrc }) {
  return (
    <div className='h-full flex flex-col items-center'>
      <h1 className='text-[20px] mt-1 fontibm'>Hi!</h1>
      <h2 className='text-[20px] my-2 fontibm'>Welcome to the wedding of </h2>
      <h1 className='text-[24px] mb-2 font-semibold fontsonara tracking-[3px]'>Sakshi and Naman</h1>
      <div className='relative h-[180px] w-[90%] rounded-lg mb-3 '>
        <Image src={Imagesrc} fill className='objec-contain rounded-lg' />
        <div className='absolute w-full h-full flex justify-center items-center'>
          <h1 className='text-white fontbebeas text-[20px]' onClick={() => { window.open(link) }}>CLICK HERE</h1>
        </div>
      </div>
    </div>
  )
}

export default MiddleComp