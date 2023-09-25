import React from 'react'
import './churchValues.css'

const ChurchValues = ({ value, src }) => {

    return (
        <section className='church-value-container'>
            <div className="church-value" style={{ "backgroundImage": "url(" + src + ")" }}>
                <div className='title'>{value}</div>
            </div>
        </section>
    )
}

export default ChurchValues
