import Image from 'next/image'
import React from 'react'
const link = 'https://photos.app.goo.gl/DdYuqgnoWhUAA8gp7'
function MiddleComp({ Imagesrc, text, url }) {
  return (
    <div className='h-full flex flex-col items-center'>
      <h1 className='text-[20px] mt-1 fontibm'>Hi!</h1>
      <h2 className='text-[20px] my-2 fontibm'>Welcome to the wedding of </h2>
      <h1 className='text-[24px] text-center mb-2 font-thin fontsonara tracking-[-1px]'>{text}</h1>
      <div className='relative h-[180px] w-[90%] rounded-lg mb-3 '>
        <Image src={Imagesrc} fill className='object-contain rounded-lg' />
        <div className='absolute w-full h-full flex justify-center items-center'>
          <h1 className='text-white fontbebeas cursor-pointer text-[20px]' onClick={() => { window.open(url) }}>CLICK HERE</h1>
        </div>
      </div>
    </div>
  )
}

export default MiddleComp