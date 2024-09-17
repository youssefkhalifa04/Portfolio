import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import './NavbarStyle.css'
export const Navbar = () => {
  const [menu , setMenu] = useState("home");
  return (
    <div className='navbar'>
        <div className="logo">Youssef</div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("home")}}>Home {menu=="home"?<hr />:<></> }</li>
            <li onClick={()=>{setMenu("about")}}>About Me{menu=="about"?<hr />:<></> }</li>
            <li onClick={()=>{setMenu("services")}}>Services{menu=="services"?<hr />:<></> }</li>
            <li onClick={()=>{setMenu("portfolio")}}>Portfolio{menu=="portfolio"?<hr />:<></> }</li>
            <li onClick={()=>{setMenu("contact")}}>Contact{menu=="contact"?<hr />:<></> }</li>
        </ul>
        <div className="contact-btn">Contact With Me</div>
        
    </div>
  )
}
