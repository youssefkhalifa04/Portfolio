import React from 'react'
import logo from '../../assets/logo.svg'
import './NavbarStyle.css'
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">Youssef</div>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className="contact-btn">Contact With Me</div>
        
    </div>
  )
}
