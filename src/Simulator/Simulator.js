import React from "react"
import "./Simulator.css"
import Navbar from "../components/Navbar"
import SimulatorHero from "./SimulatorHero"
import SimulatorForm from "./SimulatorForm"
import Footer from "../components/Footer"

const Simulator = () => {
  return (
    <React.Fragment>
      <Navbar />
      <SimulatorHero />
      <div className='simulatorCards'>
        <SimulatorForm />
      </div>
      <Footer className='lightFooter' />
    </React.Fragment>
  )
}

export default Simulator
