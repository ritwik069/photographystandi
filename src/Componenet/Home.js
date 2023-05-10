import { db, storage } from '@/Firebase';
import { doc, getDoc } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import HomepageCompoenent from './HomepageCompoenent'

export default function Home2() {
    const [userdata, setuserData] = useState({ text: '', url: '' })
    const [Imagesrc, setImage] = useState()
    useEffect(() => {
        getDownloadURL(ref(storage, 'Image/userDisplay')).then(u => { console.log(u); setImage(u) })
        fetchDocument()
    }, [])
    const docRef = doc(db, "data", "userdata");
    const fetchDocument = async () => {
        try {
            const docSnap = await getDoc(docRef);
            // Use the document snapshot here
            console.log(docSnap.data());
            let c = docSnap.data()
            console.log(c);
            setuserData(c)
        } catch (error) {
            console.log('Error fetching document:', error);
        }
    };

    return (
        <div className='w-full flex items-center justify-center '>

            <HomepageCompoenent text={userdata.text} url={userdata.url} image={Imagesrc} />
        </div>
    )
}
