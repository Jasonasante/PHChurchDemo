import React from 'react'
import './connectGroup.css'
import { AiFillLock } from 'react-icons/ai'

const ConnectGroups = () => {
    return (
        <section className='connect-group'>
            <div className="connect-group-background">
            </div>
            <div className="unavailable">
                <button type="button">Join Here</button>
                <AiFillLock className='lock' />
                <div className='title'>Connect Group</div>
            </div>
        </section>
    )
}

export default ConnectGroups
