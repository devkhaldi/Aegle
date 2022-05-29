import React from "react"
import "./Simulator.css"
import Navbar from "../components/Navbar"
import SimulatorHero from "./SimulatorHero"
import SimulatorForm from "./SimulatorForm"

const Simulator = () => {
  return (
    <React.Fragment>
      <Navbar />
      <SimulatorHero />
      <SimulatorForm />
    </React.Fragment>
  )
}

export default Simulator
