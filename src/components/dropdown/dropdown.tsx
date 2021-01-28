import * as React from "react"
import { useState } from "react"
import * as styles from "./dropdown.module.scss"
import useWindowSize from "../../hooks/useWindowSize"

function Arrow() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      style={{
        marginBottom: "4px",
        marginLeft: "4px",
        transform: "rotate(90deg)",
      }}
    >
      <g fill="none" fillRule="evenodd">
        <path
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 15l5-5h0L8 5"
        ></path>
      </g>
    </svg>
  )
}

function Dropdown({ label, children }) {
  const [isExpanded, setExpanded] = useState(false)
  const windowSize = useWindowSize()
  return (
    <div className={styles.container}>
      <button
        className="btn btn-dark"
        onClick={() => {
          console.log(windowSize)
          if (windowSize.width < 992) {
            setExpanded((v) => !v)
          }
        }}
      >
        {label}
        <Arrow />
      </button>

      <div
        className={`${styles.content}${
          isExpanded ? ` ${styles.expanded}` : ""
        }`}
      >
        <div className={`${styles.triangle}`}></div>
        {children}
      </div>
    </div>
  )
}

export default Dropdown
