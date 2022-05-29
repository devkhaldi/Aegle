import "./App.css"
import Home from "./Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Simulator from "./Simulator/Simulator"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/simulate' element={<Simulator />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
