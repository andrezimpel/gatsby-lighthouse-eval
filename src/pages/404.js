import * as React from "react"
import { Helmet } from "react-helmet"
import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>404 - Not Found</title>
      </Helmet>
      <header></header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12 mt-5">
              <h1>404: Not Found!</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default IndexPage
