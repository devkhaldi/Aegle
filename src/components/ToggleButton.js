import React from "react"
import "./ToggleButton.css"

const ToggleButton = () => {
  return (
    <React.Fragment>
      <label class='switch'>
        <input type='checkbox' />
        <span class='slider round'></span>
      </label>
    </React.Fragment>
  )
}

export default ToggleButton
