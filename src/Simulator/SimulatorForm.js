import React from "react"
import ToggleButton from "../components/ToggleButton"
import "./SimulatorForm.css"
import labelicon from "../Icons/labelicon.png"
import leftArrow from "../Icons/leftArrow.png"

const SimulatorForm = () => {
  return (
    <section className='simulatorForm'>
      <h2>Stop-loss Assumptions</h2>
      <form>
        <div className='leftArrow'>
          <img src={leftArrow} alt='leftArrow' />
        </div>
        <div className='box'>
          <div className='dataContainer'>
            <div className='formGroup'>
              <label htmlFor='type'>
                Type <img src={labelicon} alt='Label Icon' />
              </label>
              <div className='formContent'>
                <ToggleButton id='type' />
                <span>Specific</span>
              </div>
            </div>
            <div className='formGroup'>
              <label htmlFor='type'>
                Type <img src={labelicon} alt='Label Icon' />
              </label>
              <div className='formContent'>
                <select name='type' id='type'>
                  <option value='$50k'>$50k</option>
                  <option value='$60k'>$60k</option>
                  <option value='$70k'>$70k</option>
                  <option value='$80k'>$80k</option>
                  <option value='$90k'>$90k</option>
                  <option value='$100k'>$100k</option>
                </select>
              </div>
            </div>
            <div className='formGroup'>
              <label>
                <p> # of Spec Claims Paid in Past Year</p>
                <img src={labelicon} alt='Label Icon' />
              </label>
              <div className='formContent'>
                <select name='type' id='type'>
                  <option value='1-2'>1-2</option>
                  <option value='2-3'>2-3</option>
                  <option value='3-4'>3-4</option>
                  <option value='4-5'>4-5</option>
                </select>
              </div>
            </div>
            <div className='formGroup'>
              <label htmlFor='type'>
                Lasers
                <img src={labelicon} alt='Label Icon' />
              </label>
              <div className='formContent'>
                <button className='blueBtn'>Typical lasers</button>
                <button>No lasers</button>
              </div>
            </div>
            <div className='formGroup'>
              <label htmlFor='type'>
                Exclusions
                <img src={labelicon} alt='Label Icon' />
              </label>
              <div className='formContent'>
                <button className='blueBtn'>Typical exclusions</button>
                <button>No exclusions</button>
              </div>
            </div>
          </div>
          <hr />
          <div className='aggregateContainer'>
            <div className='formGroup'>
              <ToggleButton />
              <span>Aggregate</span>
            </div>
            <div className='formGroup'>
              <select name='type' id='type'>
                <option value='110%'>110%</option>
                <option value='120%'>120%</option>
                <option value='130%'>130%</option>
                <option value='140%'>140%</option>
              </select>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='permContainer'>
            <div className='formGroup'>
              <label htmlFor='type'>
                <p>Current Annual Stop-loss Premium (PEPM)</p>
                <img src={labelicon} alt='Label Icon' />
              </label>
              <div className='formContent'>
                <button className='blueBtn'>Standard Market Pricing</button>
                <div className='formContentBtns'>
                  <button>Good Deal</button>
                  <button>Custom</button>
                </div>
              </div>
            </div>
            <div className='formGroup'>
              <label htmlFor='type'>
                Yearly Premium (PEPM)
                <img src={labelicon} alt='Label Icon' />
              </label>
              <div className='formContent'>
                <input type='text' />
                <p>Spec Premium: $240,000</p>
              </div>
            </div>
          </div>
          <hr />
          <div className='pricingContainer'>
            <div className='formContent'>
              <button className='blueBtn'>Standard Market Pricing</button>
              <div className='formContentBtns'>
                <button>Good Deal</button>
                <button>Custom</button>
              </div>
            </div>
            <div className='formContent'>
              <input type='text' />
              <p>Spec Premium: $240,000</p>
            </div>
          </div>
        </div>
        <p className='perm'>*PEPM = Per Employee Per Month</p>
        <div className='simulateBtnContainer'>
          <a href='#' className='simulateBtn'>
            Simulate Aegle
          </a>
        </div>
      </form>
    </section>
  )
}

export default SimulatorForm
