import { storage } from '@/Firebase';
import { ref, getDownloadURL } from 'firebase/storage'
import React, { useEffect } from 'react'
function HomepageCompoenent() {

        getDownloadURL(ref(storage, 'Image/userDisplay')).then(u => { console.log(u);})

    return (
        <div>HomepageCompoenent</div>
    )
}

export default HomepageCompoenent