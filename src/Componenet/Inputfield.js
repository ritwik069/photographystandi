import React, { useState } from 'react'
import { set, ref, onValue } from 'firebase/database'
import { db } from '@/Firebase'
import { doc, setDoc } from 'firebase/firestore'

function Inputfield() {
    const [textfield, settextfield] = useState('')
    const [Url, setUrl] = useState('')
    function dbbtton() {

        setDoc(doc(db, "data", "userdata"), {
            text: textfield,
            url: Url,
        });

    }
    return (
        <div>
            <input value={textfield} onChange={(e) => { settextfield(e.target.value) }} />
            <input value={Url} onChange={(e) => { setUrl(e.target.value) }} />
            <button onClick={dbbtton}>db</button>
        </div>
    )
}

export default Inputfield