import { storage } from '@/Firebase';
import { ref, getDownloadURL } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import Aboutus from './Aboutus';
import Header from './Header';
import MiddleComp from './MiddleComp';
function HomepageCompoenent() {
    const [Imagesrc, setImage] = useState()
    useEffect(() => {
        getDownloadURL(ref(storage, 'Image/userDisplay')).then(u => { console.log(u); setImage(u) })
    }, [])
    return (
        <div className='w-screen flex flex-col justify-center'>
            <Header />
            <MiddleComp Imagesrc={Imagesrc} />
            <Aboutus />
        </div>
    )
}

export default HomepageCompoenent