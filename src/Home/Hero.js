import React from "react"
import heroImage from "../Images/graph_homepage.svg"
import "./Hero.css"

const Hero = () => {
  return (
    <section className='hero'>
      <div className='textContainer'>
        <h1>Stop-loss reinsurance hasn't changed in decades.</h1>
        <h1>We are fixing that.</h1>
        <div className='buttonsContainer'>
          <a href='#'>Contact us</a>
          <a href='#'>Learn More</a>
        </div>
      </div>
      <div className='imageContainer'>
        <img src={heroImage} alt='Hero Image' />
      </div>
    </section>
  )
}

export default Hero
