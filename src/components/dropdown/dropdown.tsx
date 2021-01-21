import * as React from "react"
import { useState } from "react"
import * as styles from "./dropdown.module.scss"

function Dropdown({ children }) {
  const [isExpanded, setExpanded] = useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button
          className="btn btn-dark"
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
        <div
          className={`${styles.dropdown} ${
            isExpanded ? `${styles.expanded}` : ""
          }`}
          onMouseEnter={() => {
            setExpanded(true)
          }}
          onMouseLeave={() => {
            setExpanded(false)
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Dropdown
