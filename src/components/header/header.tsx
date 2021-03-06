import * as React from "react"
import { useState } from "react"
import Dropdown from "../dropdown"
import BootstrapLogo from "./bootstrap-logo"
import GatsbyLogo from "./gatsby-logo"
import * as styles from "./header.module.scss"
import PreactLogo from "./preact-logo"

const optionsDropdown = (
  <Dropdown label="Options">
    <ul className="list-group">
      <li className="list-group-item">
        <span className="text-dark">Option One</span>
      </li>
      <li className="list-group-item">
        <span className="text-dark">Option Two</span>
      </li>
      <li className="list-group-item">
        <span className="text-dark">Option Three</span>
      </li>
      <li className="list-group-item">
        <span className="text-dark">Option Four</span>
      </li>
    </ul>
  </Dropdown>
)

const moreOptionsDropdown = (
  <Dropdown label="More Options">
    <ul className="list-group">
      <li className="list-group-item">
        <span className="text-dark">Option One</span>
      </li>
      <li className="list-group-item">
        <span className="text-dark">Option Two</span>
      </li>
      <li className="list-group-item">
        <span className="text-dark">Option Three</span>
      </li>
      <li className="list-group-item">
        <span className="text-dark">Option Four</span>
      </li>
    </ul>
  </Dropdown>
)

function Header() {
  const [hover, setHover] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <header className={`container bg-dark text-white`}>
        <div className="row d-none d-lg-block">
          <div className="col">
            <span className="py-2">
              <span className="badge badge-highlight badge-pill mr-2">
                Hey!
              </span>
              Google released{" "}
              <span className="badge badge-info">Lighthouse 6.0</span> in May
              2020 and it immediately introduced breaking changes. Semver, huh.
            </span>
            {optionsDropdown}
            {moreOptionsDropdown}
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col col-xl">
            <div className="py-3">
              <GatsbyLogo />
              <BootstrapLogo className="m-2" />
              <PreactLogo />
            </div>
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
            <a className="text-white d-none d-lg-inline-block" href="/404">
              Topic One
            </a>
            <a className="text-white d-none d-lg-inline-block" href="/404">
              Topic Two
            </a>
            <a className="text-white d-none d-lg-inline-block" href="/404">
              Topic Three
            </a>
            <a className="btn btn-info d-none d-lg-inline-block" href="/404">
              Call to Action
            </a>
          </div>
          <button
            className="btn btn-outline-info text-white d-lg-none"
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
      <div
        style={{ display: isMenuOpen ? "block" : "none" }}
        className="d-lg-none"
      >
        <div className="row">
          <div className="col-12">
            {optionsDropdown}
            {moreOptionsDropdown}
            <a className="btn btn-dark btn-block" href="/topic-four">
              Call to Action
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
    </>
  )
}

export default Header
