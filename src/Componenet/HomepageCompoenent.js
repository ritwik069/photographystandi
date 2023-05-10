import { storage } from '@/Firebase';
import { ref, getDownloadURL } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import Aboutus from './Aboutus';
import Header from './Header';
import MiddleComp from './MiddleComp';
function HomepageCompoenent({ text, url, image }) {
    return (
        <div className='w-full max-w-[500px] flex flex-col justify-center'>
            <Header />
            <MiddleComp Imagesrc={image} text={text} url={url} />
            <Aboutus />
        </div>
    )
}

export default HomepageCompoenent