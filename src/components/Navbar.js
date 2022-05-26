import React from "react"
import logo from "../Images/company-logo.png"
import Navbar from "./Navbar.css"

const Header = () => {
  return (
    <header className='navbar'>
      <div className='logoContainer'>
        <img src={logo} alt='Logo' />
      </div>
      {/* prettier-ignore */}
      <ul className='navItems'>
        <li><a className='navItem' href="#">What is Aegle</a></li>
        <li><a className='navItem' href="#">How Aegle Works</a></li>
        <li><a className='navItem' href="#">Why Aegle Works</a></li>
        <li><a className='navItem' href="#">Simulate Aegle</a></li>
        <li><a className='navItem' href="#">About Aegle</a></li>
      </ul>

      <ul className='mobileNavItems'>
        <li className='navItem'>What is Aegle</li>
        <li className='navItem'>How Aegle Works</li>
        <li className='navItem'>Why Aegle Works</li>
        <li className='navItem'>Simulate Aegle</li>
        <li className='navItem'>About Aegle</li>
      </ul>

      <div className='navButtons'>
        <a href='#'>Contact Us</a>
        <a href='#'>Log in to Aegle</a>
      </div>
    </header>
  )
}

export default Header
