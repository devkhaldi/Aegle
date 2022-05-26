import React from "react"
import cardImage1_p1 from "../Icons/cardImage1_p1.svg"
import cardImage1_p2 from "../Icons/cardImage1_p2.svg"
import cardImage2 from "../Icons/cardImage2.svg"
import "./Cards.css"
const Cards = () => {
  return (
    <section className='cards box'>
      <div className='cardsText'>
        <h2>Aegle in a Nutshell</h2>
        <p>
          Aegle in a next-generation replacement of traditional stop-loss
          reinsurance for self-insured employers and other risk-bearing
          entities.
        </p>
      </div>
      <div className='cardsContainer'>
        <div className='card'>
          <div className='img1Container'>
            <img src={cardImage1_p1} alt='card image 1 p1' />
            <img src={cardImage1_p2} alt='card image 1 p2' />
          </div>
          <h2>Lower Spend</h2>
          <p>20%+ cumulative savings over 5 years </p>
          <p>Typical first-year savings: 60-80%</p>
          <a href='#'>Learn more</a>
        </div>
        <div className='card'>
          <img src={cardImage2} alt='card image 2' />
          <h2>Better Coverage</h2>
          <p>No lasers or exclusions </p>
          <p>Eliminates deductibles</p>
          <a href='#'>Learn more</a>
        </div>
      </div>
    </section>
  )
}

export default Cards
