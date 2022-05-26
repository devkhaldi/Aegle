import React from "react"
import infoIcon from "../Icons/market-analysis.svg"
import whatIsAegle from "../Images/what-is-Aegle.svg"
import howAegleWorks from "../Images/how-aegle-works.svg"
import simulateAegle from "../Images/simulate-aegle.svg"

const Infos = () => {
  return (
    <section className='infos'>
      <div className='info'>
        <div className='imgContainer'>
          <img src={whatIsAegle} alt='what is aegle' />
        </div>
        <div className='infoTextContainer'>
          <img src={infoIcon} alt='info icon' />
          <h1>What is Aegle and Who Aegle Covers</h1>
          <p>
            Same product, less cost, no lasers; available for self-insured
            employers, health plans, and at-risk health systems
          </p>
          <button>Learn more</button>
        </div>
      </div>
      <div className='info'>
        <div className='imgContainer'>
          <img src={howAegleWorks} alt='how aegle works' />
        </div>
        <div className='infoTextContainer'>
          <img src={infoIcon} alt='info icon' />
          <h1>How Aegle Works</h1>
          <p>See an illustrative example</p>
          <button>Learn more</button>
        </div>
      </div>
      <div className='info'>
        <div className='imgContainer'>
          <img src={simulateAegle} alt='simulate aegle' />
        </div>
        <div className='infoTextContainer'>
          <img src={infoIcon} alt='info icon' />
          <h1>
            Simulate Aegle <div className='beta'>Beta</div>
          </h1>
          <p>
            We put our money where our mouth is: see how much Aegle would save
            for a typical company using our Simulator!
          </p>
          <button>Learn more</button>
        </div>
      </div>
    </section>
  )
}

export default Infos
