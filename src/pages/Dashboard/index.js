import React, { useState } from 'react'
import { storage } from '@/Firebase';
import { uploadBytes, ref } from 'firebase/storage';
import { handleFileChange } from '@/Utils/webpfunction';

function index() {
    const [image, setImage] = useState(null)
    function onChangeHandler(e) {
        console.log(e);        
        handleFileChange(e, image, setImage)
    }
    function uploadButton() {
        console.log(image);
        if (image == null) return
        const imageref = ref(storage, 'Image/userDisplay')
        uploadBytes(imageref, image).then(() => {
            alert("Image Uploaded")
        })
    }
    return (
        <div>
            <input id='uploadImage' type='file' onChange={onChangeHandler} />
            <button onClick={uploadButton}>Upload</button>
        </div>
    )
}

export default index