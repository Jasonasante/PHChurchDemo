import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div id='footer'>
      <ul>
        <li >
          <button type="button">Connect With Us</button>
        </li>
        <li>
          <a href="https://www.google.com/maps/place/Potter's+House+Church,+Wandsworth/@51.4619148,-0.175976,17z/data=!3m1!4b1!4m6!3m5!1s0x4876059073e78c03:0x8993073ad2f1b74c!8m2!3d51.4619148!4d-0.1734011!16s%2Fg%2F11bzsyht4q?entry=ttu"> 66 St John's Hill, London SW11 1AD </a></li>
        <li >
          <p> Wednesday: 7pm</p><p>Sunday: 3pm</p>
        </li>
      </ul>

    </div>
  )
}

export default Footer