import React from "react"
import { Helmet } from "react-helmet"
import "bootstrap/dist/css/bootstrap.min.css"
//import "katex/dist/katex.min.css"
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
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
      <Header />
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
