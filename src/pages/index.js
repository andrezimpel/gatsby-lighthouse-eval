import * as React from "react"
import { useState } from "react"
import { Helmet } from "react-helmet"
import "bootstrap/dist/css/bootstrap.min.css"
import "katex/dist/katex.min.css"
import styles from "../styles/index-page.module.scss"
import Footer from "../components/footer"

const IndexPage = () => {
  const [hover, setHover] = useState(false)
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Gatsby | Test Page</title>
        <meta
          name="description"
          content="Evaluation of Gatsby Lighthouse Scores"
        />
      </Helmet>
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
            <a class="d-none d-lg-inline-block" href="/topic-one">
              Topic One
            </a>
            <a class="d-none d-lg-inline-block" href="/topic-two">
              Topic Two
            </a>
            <a class="d-none d-lg-inline-block" href="/topic-three">
              Topic Three
            </a>
            <a class="d-none d-lg-inline-block" href="/topic-four">
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
      <main>
        <div className="container">
          <div className="row">
            <div className="col col-12 my-5">
              <h1>Gatsby/Preact &amp; Bootstrap Speed Test</h1>
            </div>
          </div>
          <div className="row">
            <div className="col col-3 d-none d-md-block">
              <span>Side Nav</span>
            </div>
            <div className="col col-9-md">
              <section>Content Section</section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default IndexPage
