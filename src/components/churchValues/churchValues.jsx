import React from 'react'
import './churchValues.css'
import { AiFillLock } from 'react-icons/ai'

const ChurchValues = ({ value, src }) => {
    const url = "url('" + src + "')"
    return (
        <section className='church-value-container'>
            <div className="church-value" style={{ "backgroundImage": "url(" + src + ")" }}>
                <div className='title'>{value}</div>
            </div>
        </section>
    )
}

export default ChurchValues
