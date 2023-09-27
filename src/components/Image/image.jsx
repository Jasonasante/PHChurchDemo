import React from 'react'
import { useState } from 'react';
import './image.css'


export function ImageWithLoader({ nme, src, identifier }) {
    const [loading, setLoading] = useState(true);
    return (
        <div className={`img-container ${nme}`} key={identifier} style={
            {
                "aspectRatio": loading ? "1/1" : "",
            }
        } >
            <img src={src} alt="" style={
                {
                    display: loading ? "none" : "block",
                }
            } onLoad={(e) => { setLoading(false) }} ></img>
            {loading &&
                <div className="spinner" style={{
                    display: loading ? "block" : "none",
                }} >
                    <div className="simple-spinner">
                        <span></span>
                    </div>
                </div>}

        </div>)
}

export default ImageWithLoader
