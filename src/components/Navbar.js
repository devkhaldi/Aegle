import React from "react"
import logo from "../Images/company-logo.png"
import Navbar from "./Navbar.css"
import arrowDown from "../Icons/arrow-down.png"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className='navbar'>
      <div className='logoContainer'>
        <Link to='/'>
          <img src={logo} alt='Logo' />
        </Link>
      </div>
      {/* prettier-ignore */}
      <ul className='navItems'>
        <li className='navItem'><a href="#">What is Aegle</a></li>
        <li className='navItem'><a href="#">How Aegle Works</a></li>
        <li className='navItem'><a href="#">Why Aegle Works</a></li>
        <li className='navItem'><Link to='/simulate'>Simulate Aegle 
                <div className="beta">Beta</div>
            </Link></li>
        <li className='navItem'><a href="#">
          About Aegle  
          <img src={arrowDown} alt="Arrow down" /></a>
          <ul className="dropdown">
            <li className="dropdownItem"><a href="#">Aegle Team</a></li>
            <li className="dropdownItem"><a href="#">Our Values</a></li>
            <li className="dropdownItem"><a href="#">Advisors and Investors</a></li>
            <li className="dropdownItem"><a href="#">Careers</a></li>
            <li className="dropdownItem"><a href="#">Contact us</a></li>
            <li className="dropdownItem"><a href="#">Support</a></li>
          </ul>
        
        </li>
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
