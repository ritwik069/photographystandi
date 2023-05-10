import React, { useState } from 'react'
import { storage, db } from '@/Firebase';
import { uploadBytes, ref } from 'firebase/storage';
import { handleFileChange } from '@/Utils/webpfunction';
import HomepageCompoenent from '@/Componenet/HomepageCompoenent';
import { doc, setDoc } from 'firebase/firestore'

function index() {
    const [image, setImage] = useState(null)
    const [textfield, settextfield] = useState('')
    const [url, seturl] = useState('')
    function onChangeHandler(e) {
        console.log(e);
        handleFileChange(e, image, setImage)
    }
    function uploadButton() {
        console.log(image);
        if (image == null) return
        const imageref = ref(storage, 'Image/userDisplay')
            setDoc(doc(db, "data", "userdata"), {
                text: textfield,
                url: url,
            });
        uploadBytes(imageref, image).then(() => {
            alert("Image Uploaded")
        })
    }
    return (
        <div className='w-full flex items-center justify-between'>

            <div className='flex flex-col justify-center  p-[20px]'>
                <input id='uploadImage' type='file' onChange={onChangeHandler} style={{ display: 'none' }} />
                <input className='border placeholder:text-[#959595] border-black rounded-xl w-[250px] h-[40px] text-[24px] font-semibold fontsonara px-[10px] ' value={textfield} onChange={(e) => { settextfield(e.target.value) }}
                    placeholder={'Enter the Text'} />
                <input className='border placeholder:text-[#959595] mt-[10px] border-black rounded-xl w-[250px] h-[40px] text-[24px] font-semibold fontsonara px-[10px] ' value={url} onChange={(e) => { seturl(e.target.value) }}
                    placeholder={'Enter the url'} />
                <label htmlFor={'uploadImage'}>
                    <div className='bg-black cursor-pointer mt-[10px] text-white p-2 rounded-full text-center w-[200px]'>
                        Select an image
                    </div>
                </label>
                <button className='h-[30px] w-[100px] bg-black text-white m-[20px] rounded-full text-center' onClick={uploadButton}>Update</button>

            </div>
            <div className='w-[375px] h-screen example border-black border'>
                <HomepageCompoenent text={textfield} url={url} image={image ? URL.createObjectURL(image) : ''} />
            </div>
        </div>
    )
}

export default index