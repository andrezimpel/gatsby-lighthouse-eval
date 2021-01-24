import * as React from "react"
import { Helmet } from "react-helmet"
import "../styles/404.scss"

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>404 - Not Found</title>
      </Helmet>
      <main className="bg-dark w-100 h-100">
        <div className="container">
          <div className="row">
            <div
              className="col-12 d-flex justify-content-center align-items-center"
              style={{ height: "100vh" }}
            >
              <h1 className="text-highlight display-4 font-weight-bold text-center pb-5">
                Whoops! 404:&nbsp;Not&nbsp;Found!
              </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default IndexPage
