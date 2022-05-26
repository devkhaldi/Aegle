import React from "react"
import companyLogo from "../Icons/footerCompanyLogo.png"
import gotopIcon from "../Icons/arrow-up_icon.svg"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className='footerContent'>
        <div className='footerIntro'>
          <img src={companyLogo} alt='company logo' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
            facilisi tincidunt nibh.
          </p>
          <a href='mailto:info@aeglehealthpartners.com'>
            info@aeglehealthpartners.com
          </a>
        </div>
        {/* prettier-ignore */}
        <div className="links">
          <h3>Product</h3>
          <a href="#" className="link yellowLink">Log in</a>
          <a href="#" className="link">Simulate Aegle</a>
          <a href="#" className="link">What is Aegle</a>
          <a href="#" className="link">How Aegle Works</a>
        </div>
        {/* prettier-ignore */}
        <div className="links">
          <h3>Company</h3>
          <a href="#" className="link">Our Story</a>
          <a href="#" className="link">Aegle Team</a>
          <a href="#" className="link">Careers</a>
          <a href="#" className="link">Support</a>
          <a href="#" className="link yellowLink">Contact Us</a>
        </div>
        {/* prettier-ignore */}
        <div className="links">
          <h3>General Conditions</h3>
          <a href="#" className="link">Privacy Policy</a>
          <a href="#" className="link">Terms &amp; Conditions</a>
          <a href="#" className="link">Cookies Management</a>
        </div>
      </div>
      <hr />
      <div className='footerCopyright'>
        <span>© 2021 Aegle Health Partners</span>
        <span>4250 N Fairfax Dr, Ste 600, Arlington, VA 22203</span>
      </div>

      <img className='gotop' src={gotopIcon} alt='gotop icon' />
    </footer>
  )
}

export default Footer
