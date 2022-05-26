import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./Home/Hero"
import Infos from "./Home/Infos"
import Cards from "./Home/Cards"

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <div className='homeCards'>
        <Cards />
        <Infos />
      </div>

      <Footer />
    </React.Fragment>
  )
}

export default Home
