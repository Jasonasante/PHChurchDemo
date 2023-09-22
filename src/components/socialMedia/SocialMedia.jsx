import React from 'react'
import "./SocialMedia.css"
import { AiOutlineInstagram, AiFillFacebook, AiFillYoutube } from 'react-icons/ai'
const SocialMedia = () => {
    return (
        <>
            <h2>Where Can You Find Us??</h2>
            <div className="social-media">
                <div className='instagram'>
                    <AiOutlineInstagram />
                    <p>Insagram</p>
                </div>
                <div className='instagram'>
                    <AiFillYoutube />
                    <p>Youtube</p>
                </div>
                <div className='instagram'>
                    <AiFillFacebook />
                    <p>Facebook</p>
                </div>
            </div>
        </>
    )
}

export default SocialMedia
