import React from 'react'
import "./SocialMedia.css"
import { AiFillInstagram, AiFillFacebook, AiFillYoutube, AiFillTwitterCircle } from 'react-icons/ai'
const SocialMedia = () => {
    return (
        <>
            <h2>Where Can You Find Us??</h2>
            <div className="social-media">
                <a href='https://www.instagram.com/phc_wandsworth/?hl=en' className='instagram'>
                    <AiFillInstagram className='social-media-icon' />
                    Insagram</a>
                <a href='https://www.facebook.com/people/Phc-Wandsworth/100011238222645' className='youtube'>
                    <AiFillYoutube className='social-media-icon' />
                    Youtube</a>
                <a href='https://www.youtube.com/channel/UCj8TStH40-LzKKu4xq5SsCg' className='facebook'>
                    <AiFillFacebook className='social-media-icon' />
                    Facebook</a>
                <a href='https://twitter.com/PHCwandsworth' className='twitter'>
                    <AiFillTwitterCircle className='social-media-icon' />
                    Twitter</a>
            </div>
        </>
    )
}

export default SocialMedia
