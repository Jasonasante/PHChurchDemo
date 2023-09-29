import React, { useState } from 'react'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'
import PHCLogo from '../../../public/assets/logos/phcLogo.png'
import { IoMegaphoneOutline } from 'react-icons/io5'
import { MdEvent } from 'react-icons/md'
import { AiOutlineRead, AiOutlineHome } from 'react-icons/ai'
import { BiVideoRecording } from 'react-icons/bi'
import { BsInfoCircle } from 'react-icons/bs'
import { FaPeopleGroup } from 'react-icons/fa6'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  function menuVisible() {
    setMenuOpen((prev) => !prev)
  }
  // if no session login show sign/login buttons
  // else show profile pic button
  return (
    <nav className='top-navbar'>
      <Link to="/" className='title'><div><img src={PHCLogo} alt="church logo" />Potter's House Church</div></Link>
      <div className="menu" onClick={menuVisible}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li><NavLink to="/"><AiOutlineHome className="nav-icon" /> {menuOpen ? "Home" : null}</NavLink></li>
        <li><NavLink to="/read"><AiOutlineRead className="nav-icon" />{menuOpen ? "Read" : null}</NavLink></li>
        <li><NavLink to="/sermons"><BiVideoRecording className="nav-icon" />{menuOpen ? "Sermons" : null}</NavLink></li>
        <li><NavLink to="/events"><MdEvent className="nav-icon" />{menuOpen ? "Events" : null}</NavLink></li>
        <li><NavLink to="/community"><FaPeopleGroup className="nav-icon" />{menuOpen ? "Community" : null}</NavLink></li>
        <li><NavLink to="/testimonies"><IoMegaphoneOutline className="nav-icon" /> {menuOpen ? "Testimonies" : null}</NavLink></li>
        <li><NavLink to="/about"><BsInfoCircle className="nav-icon" /> {menuOpen ? "About" : null}</NavLink></li>
        <li><NavLink to="/register">Sign Up</NavLink></li>
        <li><NavLink to="/login">Login </NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
