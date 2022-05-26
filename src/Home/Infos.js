import React from "react"
import infoIcon from "../Icons/market-analysis.svg"
import whatIsAegle from "../Images/what-is-Aegle.svg"
import howAegleWorks from "../Images/how-aegle-works.svg"
import simulateAegle from "../Images/simulate-aegle.svg"
import "./Infos.css"

const Infos = () => {
  return (
    <section className='infos box'>
      <div className='info'>
        <div className='imgContainer'>
          <img src={whatIsAegle} alt='what is aegle' />
        </div>
        <div className='textContainer'>
          <img src={infoIcon} alt='info icon' />
          <h2>What is Aegle and Who Aegle Covers</h2>
          <p>
            Same product, less cost, no lasers; available for self-insured
            employers, health plans, and at-risk health systems
          </p>
          <a href='#'>Learn more</a>
        </div>
      </div>
      <hr />
      <div className='info'>
        <div className='imgContainer'>
          <img src={howAegleWorks} alt='how aegle works' />
        </div>
        <div className='textContainer'>
          <img src={infoIcon} alt='info icon' />
          <h2>How Aegle Works</h2>
          <p>See an illustrative example</p>
          <a href='#'>Learn more</a>
        </div>
      </div>
      <hr />
      <div className='info'>
        <div className='imgContainer'>
          <img src={simulateAegle} alt='simulate aegle' />
        </div>
        <div className='textContainer'>
          <img src={infoIcon} alt='info icon' />
          <h2>
            Simulate Aegle <div className='beta'>Beta</div>
          </h2>
          <p>
            We put our money where our mouth is: see how much Aegle would save
            for a typical company using our Simulator!
          </p>
          <a href='#'>Simulate Aegle</a>
        </div>
      </div>
    </section>
  )
}

export default Infos
