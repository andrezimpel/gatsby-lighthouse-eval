import * as React from "react"
import { useState } from "react"
import Dropdown from "../dropdown"
import * as styles from "./header.module.scss"

function Header() {
  const [hover, setHover] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <header className={`container bg-dark text-white`}>
        <div className="row">
          <div className="col">
            <Dropdown>
              <ul>
                <li>
                  <span className="text-dark">Hi there fam!</span>
                </li>
                <li>
                  <span className="text-dark">Hi there fam!</span>
                </li>
                <li>
                  <span className="text-dark">Hi there fam!</span>
                </li>
                <li>
                  <span className="text-dark">Hi there fam!</span>
                </li>
              </ul>
            </Dropdown>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col col-xl">
            <div>Header Graphic</div>
          </div>
          <div className={`${styles.headerLinks} mb-3`}>
            <div
              className="d-none d-lg-inline-block hoverWrapper mr-4"
              onMouseEnter={() => {
                setHover(true)
              }}
              onMouseLeave={() => {
                setHover(false)
              }}
            >
              <span>Hover Me</span>
            </div>
            <a
              className="text-white d-none d-lg-inline-block"
              href="/topic-one"
            >
              Topic One
            </a>
            <a
              className="text-white d-none d-lg-inline-block"
              href="/topic-two"
            >
              Topic Two
            </a>
            <a
              className="text-white d-none d-lg-inline-block"
              href="/topic-three"
            >
              Topic Three
            </a>
            <a
              className="btn btn-info d-none d-lg-inline-block"
              href="/topic-four"
            >
              Call to Action
            </a>
          </div>
          <button
            className="btn btn-outline-dark d-lg-none"
            onClick={() => {
              setMenuOpen((v) => !v)
            }}
          >
            Menu
          </button>
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
            <a href="/404" className="d-block mb-3 text-dark">
              Link One
            </a>
            <a href="/404" className="d-block mb-3 text-dark">
              Link Two
            </a>
            <a href="/404" className="d-block mb-3 text-dark">
              Link Three
            </a>
            <a href="/404" className="d-block mb-3 text-dark">
              Link Four
            </a>
            <a href="/404" className="d-block mb-3 text-dark">
              Link Five
            </a>
          </div>
          <div className="col-auto">
            <a href="/404" className="d-block mb-3 text-dark">
              Link One
            </a>
            <a href="/404" className="d-block mb-3 text-dark">
              Link Two
            </a>
            <a href="/404" className="d-block mb-3 text-dark">
              Link Three
            </a>
            <a href="/404" className="d-block mb-3 text-dark">
              Link Four
            </a>
            <a href="/404" className="d-block mb-3 text-dark">
              Link Five
            </a>
          </div>
          <div className="col-auto">
            <a href="/404" className="d-block mb-3 text-dark">
              Link One
            </a>
            <a href="/404" className="d-block mb-3 text-dark">
              Link Two
            </a>
            <a href="/404" className="d-block mb-3 text-dark">
              Link Three
            </a>
            <a href="/404" className="d-block mb-3 text-dark">
              Link Four
            </a>
            <a href="/404" className="d-block mb-3 text-dark">
              Link Five
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <a href="/call-to-action" className="btn btn-info btn-block">
              Menu Call To Action
            </a>
          </div>
        </div>
      </div>
      <div style={{ display: isMenuOpen ? "block" : "none" }}>
        <div className="row">
          <div>
            <span>Click Me</span>
          </div>
          <a className="text-dark" href="/topic-one">
            Topic One
          </a>
          <a className="text-dark" href="/topic-two">
            Topic Two
          </a>
          <a className="text-dark" href="/topic-three">
            Topic Three
          </a>
          <a className="btn btn-dark btn-block" href="/topic-four">
            Call to Action
          </a>
        </div>
        <div className="row">
          <div className="col-12">
            <a href="/call-to-action" className="btn btn-info btn-block">
              Menu Call To Action
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
