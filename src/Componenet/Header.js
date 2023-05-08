import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='py-3  bg-black flex justify-center items-center'>
      <div className='flex flex-col items-center justify-center'>
        <div className='relative h-[50px] w-[50px]'>
          <Image src={'/cameraicon.png'} fill className='bg-transparent object-contain' />

        </div>
        <h1 className='text-white text-[28px] fontfunky'>
          Kartik Bhatia
        </h1>
        <h3 className='text-white text-[10px] tracking-[4px] font-semibold'>
          PHOTOGRAPHY
        </h3>
      </div>
    </div>
  )
}

export default Header