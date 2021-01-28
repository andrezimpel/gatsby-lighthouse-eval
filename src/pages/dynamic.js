import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"
//import "../styles/custom-bootstrap.scss"
import loadable from "@loadable/component"

const DynamicPage = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Gatsby Speed Test | Dynamic Page</title>
        <meta name="description" content="Evaluation of @loadable/components" />
      </Helmet>
      <div className="w-100 bg-dark">
        <Header />
      </div>
      <main className="tk-proxima-nova">
        <div className="w-100 bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-12 my-5">
                <h1 className="text-highlight font-weight-bold text-uppercase text-spacing-1">
                  @loadable/components test{" "}
                  <span role="img" aria-label="Boat Emoji">
                    ⛵
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col col-3 d-none d-md-block">
              <ul className="list-group">
                <li className="list-group-item">Nav Option One</li>
                <li className="list-group-item">Nav Option Two</li>
                <li className="list-group-item">Nav Option Three</li>
                <li className="list-group-item">Nav Option Four</li>
                <li className="list-group-item">Nav Option Five</li>
              </ul>
            </div>
            <div className="col col-9-md container">
              {renderComponent("dynamic")}
            </div>
          </div>
        </div>
      </main>
      <div className="w-100 bg-dark">
        <Footer />
      </div>
    </>
  )
}

function isServer() {
  return typeof window === "undefined"
}

function renderComponent(component) {
  if (isServer()) {
    return dynamicRenderComponent(component)
  }

  const wasUserPreviouslyOnSite = window.history.state
  console.log(wasUserPreviouslyOnSite)
  const htmlElement = document.querySelector(`[data-component=${component}]`)
  console.log(htmlElement)
  if (htmlElement && !wasUserPreviouslyOnSite) {
    return staticRenderComponent(htmlElement)
  }

  const fallback = htmlElement ? staticRenderComponent(htmlElement) : null
  return dynamicRenderComponent(component, fallback)
}

function staticRenderComponent(htmlElement) {
  return (
    <section
      className="row mb-4 text-red"
      dangerouslySetInnerHTML={{ __html: htmlElement.innerHTML }}
    />
  )
}

function dynamicRenderComponent(component, fallback = null) {
  const LoadedComponent = loadable(() => import(`../components/${component}`))
  return <LoadedComponent fallback={fallback} />
}

export default DynamicPage
