import * as React from "react"
import { useState } from "react"

function Dropdown({ children }) {
  const [isExpanded, setExpanded] = useState(false)
  return (
    <div className="wrapper">
      <button
        className="btn toggle"
        onMouseEnter={() => {
          setExpanded(true)
        }}
        onMouseLeave={() => {
          setExpanded(false)
        }}
        onClick={() => {
          setExpanded((expanded) => !expanded)
        }}
      >
        Hover/Click
      </button>
      {isExpanded && <div>{children}</div>}
    </div>
  )
}

export default Dropdown
