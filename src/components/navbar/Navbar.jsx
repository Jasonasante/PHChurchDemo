import React from 'react'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'
import PHCLogo from '../assets/logos/phcLogo.png'

export const Navbar = () => {
  // if no session login show sign/login buttons
  // else show profile pic button
  return (
    <nav className='top-navbar'>
      <Link to="/" className='title'><div><img src={PHCLogo} alt="church logo" />Potter's House Church</div></Link>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/read">Read</NavLink></li>
        <li><NavLink to="/sermons">Sermons</NavLink></li>
        <li><NavLink to="/events">Events</NavLink></li>
        <li><NavLink to="/testimonies">Testimonies</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/sign-up">Sign Up</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
