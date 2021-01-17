import * as React from "react"
import { useState } from "react"
import * as styles from "./header.module.scss"

function Header() {
  const [hover, setHover] = useState(false)
  return (
    <>
      <header className={`container mt-3`}>
        <div className="row align-items-center">
          <div className="col col-xl">
            <div>Header Graphic</div>
          </div>
          <div className={styles.headerLinks} role="menu">
            <div
              className="hoverWrapper mr-4"
              role="button"
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
            <a
              className="btn btn-dark d-none d-lg-inline-block"
              href="/topic-four"
            >
              Call to Action
            </a>
          </div>
        </div>
      </header>
      <div
        className={`${hover ? `${styles.dropdownMenuHovered} ` : ""}${
          styles.dropdownMenu
        }`}
        onMouseEnter={() => {
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
        }}
      >
        <div className="row">
          <div className="col-auto">
            <a className="d-block mb-3">Link One</a>
            <a className="d-block mb-3">Link Two</a>
            <a className="d-block mb-3">Link Three</a>
            <a className="d-block mb-3">Link Four</a>
            <a className="d-block mb-3">Link Five</a>
          </div>
          <div className="col-auto">
            <a className="d-block mb-3">Link One</a>
            <a className="d-block mb-3">Link Two</a>
            <a className="d-block mb-3">Link Three</a>
            <a className="d-block mb-3">Link Four</a>
            <a className="d-block mb-3">Link Five</a>
          </div>
          <div className="col-auto">
            <a className="d-block mb-3">Link One</a>
            <a className="d-block mb-3">Link Two</a>
            <a className="d-block mb-3">Link Three</a>
            <a className="d-block mb-3">Link Four</a>
            <a className="d-block mb-3">Link Five</a>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <a className="btn btn-info btn-block">Menu Call To Action</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
