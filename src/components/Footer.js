import React from "react"
import companyLogo from "../Images/company-logo.svg"
import gotopIcon from "../Icons/arrow-up_icon.svg"

const Footer = () => {
  return (
    <footer>
      <div className='footerContent'>
        <div className='footerInfo'>
          <img src={companyLogo} alt='company logo' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
            facilisi tincidunt nibh.
          </p>
          <p>info@aeglehealthpartners.com</p>
        </div>
        {/* prettier-ignore */}
        <div className="productLinks">
          <h3>Product</h3>
          <a href="#" className="footerLink">Log in</a>
          <a href="#" className="footerLink">Simulate Aegle</a>
          <a href="#" className="footerLink">What is Aegle</a>
          <a href="#" className="footerLink">How Aegle Works</a>
        </div>
        {/* prettier-ignore */}
        <div className="companyLinks">
          <h3>Company</h3>
          <a href="#" className="footerLink">Our Story</a>
          <a href="#" className="footerLink">Aegle Team</a>
          <a href="#" className="footerLink">Careers</a>
          <a href="#" className="footerLink">Support</a>
          <a href="#" className="footerLink">Contact Us</a>
        </div>
        {/* prettier-ignore */}
        <div className="generalConditionsLinks">
          <h3>General Conditions</h3>
          <a href="#" className="footerLink">Privacy Policy</a>
          <a href="#" className="footerLink">Terms &amp; Conditions</a>
          <a href="#" className="footerLink">Cookies Management</a>
        </div>
      </div>
      <div className='footerCopyright'>
        <span>© 2021 Aegle Health Partners</span>
        <span>4250 N Fairfax Dr, Ste 600, Arlington, VA 22203</span>
      </div>

      <img src={gotopIcon} alt='gotop icon' />
    </footer>
  )
}

export default Footer
