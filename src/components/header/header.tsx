import * as React from "react"
import { useState } from "react"
import * as styles from "./header.module.scss"

function Header() {
  const [hover, setHover] = useState(false)
  return (
    <>
      <header className={`container ${styles.header}`}>
        <div className="row align-items-center">
          <div className="col col-xl">
            <div>Header Graphic</div>
          </div>
          <div className={styles.headerLinks} role="menu">
            <div
              className="hoverWrapper"
              role="menuitem"
              onMouseEnter={() => {
                setHover(true)
              }}
              onMouseLeave={() => {
                setHover(false)
              }}
            >
              <span>Hover Me</span>
            </div>
            <a className="d-none d-lg-inline-block" href="/topic-one">
              Topic One
            </a>
            <a className="d-none d-lg-inline-block" href="/topic-two">
              Topic Two
            </a>
            <a className="d-none d-lg-inline-block" href="/topic-three">
              Topic Three
            </a>
            <a className="d-none d-lg-inline-block" href="/topic-four">
              Topic Four
            </a>
          </div>
        </div>
      </header>
      <div
        className={`${hover ? `${styles.dropdownMenuHovered} ` : ""}${
          styles.dropdownMenu
        }`}
      >
        <div className="row">
          <div className="col-4">Column One</div>
          <div className="col-4">Column Two</div>
          <div className="col-4">Column Three</div>
        </div>
      </div>
    </>
  )
}

export default Header
