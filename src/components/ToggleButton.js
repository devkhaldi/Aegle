import React from "react"
import "./ToggleButton.css"

const ToggleButton = () => {
  return (
    <React.Fragment>
      <div class='switch'>
        <input type='checkbox' checked='true' />
        <span class='slider round'></span>
      </div>
    </React.Fragment>
  )
}

export default ToggleButton
