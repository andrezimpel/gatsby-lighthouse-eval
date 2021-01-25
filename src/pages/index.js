import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import "../styles/custom-bootstrap.scss"
import Header from "../components/header"
import Footer from "../components/footer"
import Video from "../components/video"
import ImageBlock from "../components/image-block"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {
  const imageData = getImage(data.mountain)
  const littlePic = getImage(data.box)
  const neon = getImage(data.window)
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Gatsby Speed Test | Test Page</title>
        <meta
          name="description"
          content="Evaluation of Gatsby Lighthouse Scores"
        />
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
                  Gatsby + Bootstrap + Preact Speed Test{" "}
                  <span role="img" aria-label="Fire Emoji">
                    🔥
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
              <section className="row mb-4">
                <div className="col">
                  <p className="lead">
                    This site demonstrates the Gatsby setup required for optimal
                    Lighthouse scores.
                  </p>
                  <div>
                    <ul>
                      <li>
                        It uses Preact instead of React. This shaves 20% off the
                        app-specific bundle size and improves FCP.
                      </li>
                      <li>
                        Bootstrap classes are used for styling but without any
                        additional React libraries which prevent PurgeCSS from
                        making sure only classes which are used end up in the
                        client bundle. Reduces 97% of the CSS bundle, from
                        142.95 KB to 3.76 KB!
                      </li>
                      <li>
                        Bootstrap Dropdowns are avoided. The same can be
                        achieved with simple React JS and CSS. This reduces the
                        bundle size by ditching the Popper JS lib (around 80KB)
                      </li>
                      <li>Gatsby Next Gen Image - "gatsby-plugin-image"</li>
                      <li>
                        Inline SVG components instead of the FontAwesome
                        library.
                      </li>
                      <li>
                        Google Tag Manager and KaTex are not critical to the
                        pages first render. Interaction listeners are added on
                        final page load and then fire 1 second after
                        interaction, so GTM and KaTex are loaded in without
                        harming Performance scores.
                      </li>
                      <li>
                        Heavy components that load a lot of external data like
                        YouTube videos use the Interaction Observer API to wait
                        until the element is 50% visible before loading.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className="row mb-4">
                <div className="col">
                  <p>
                    This site demonstrates the Gatsby setup required for optimal
                    Lighthouse scores.
                  </p>
                  <div>
                    <h2>Todo List</h2>
                    <ul>
                      <li>
                        <del>
                          Finish creating a representative Header component,
                          with more links and a mobile version.
                        </del>
                      </li>
                      <li>
                        <del>Video Component</del>
                      </li>
                      <li>
                        <del>Use an actual GTM ID</del>
                      </li>
                      <li>
                        <del>
                          Get the KaTex parsing the page after it has loaded.
                        </del>
                      </li>
                      <li>
                        <del>Demonstrate a Next Gen Image as advert</del>
                      </li>
                      <li>
                        <del>
                          Demonstrate a Next Gen Image as part of a content
                        </del>
                        section
                      </li>
                      <li>
                        <del>Pop site up on Netlify</del>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className="row mb-4">
                <div className="col">
                  <Video
                    videoSrc="https://www.youtube.com/embed/8Ey30-sYvuU"
                    containerClassName="col"
                  />
                </div>
              </section>
              <section className="row mb-4">
                <div className="col">
                  <ImageBlock imageData={imageData} alt="Mountains" />
                </div>
              </section>
              <section className="row mb-4">
                <div className="col">
                  <Video
                    videoSrc="https://www.youtube.com/embed/8Ey30-sYvuU"
                    containerClassName="col"
                  />
                </div>
              </section>
              <section className="row mb-4">
                <div className="col-12 col-md-6">
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source.{" "}
                  </p>
                  <p>
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                    Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
                    by Cicero, written in 45 BC. This book is a treatise on the
                    theory of ethics, very popular during the Renaissance. The
                    first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                    comes from a line in section 1.10.32.
                  </p>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                  <GatsbyImage image={littlePic} alt="Bird" />
                </div>
              </section>
              <section className="row mb-4">
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                  <GatsbyImage image={neon} alt="Window" />
                </div>
                <div className="col-12 col-md-6">
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source.{" "}
                  </p>
                  <p>
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                    Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
                    by Cicero, written in 45 BC. This book is a treatise on the
                    theory of ethics, very popular during the Renaissance. The
                    first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                    comes from a line in section 1.10.32.
                  </p>
                  <p className="katex">f(a,b,c) = (a^2+b^2+c^2)^3</p>
                  <p>Dogs</p>
                </div>
              </section>
              <section className="row mb-4">
                <div className="col-12 card shadow highlight-info">
                  <div className="card-body row">
                    <span className="h1 col-8">Gatsby Information</span>
                    <button className="col-4 btn btn-large btn-info">
                      Don't Click Me
                    </button>
                  </div>
                </div>
              </section>
              <section className="row mb-4">
                <div className="col-12 card shadow highlight-info">
                  <div className="card-body row">
                    <span className="h1 col-8">Bootstrap Information</span>
                    <button className="col-4 btn btn-large btn-info">
                      Don't Click Me
                    </button>
                  </div>
                </div>
              </section>
              <section className="row mb-4">
                <div className="col-12 card shadow highlight-info">
                  <div className="card-body row">
                    <span className="h1 col-8">Preact Information</span>
                    <button className="col-4 btn btn-large btn-info">
                      Don't Click Me
                    </button>
                  </div>
                </div>
              </section>
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

export default IndexPage

export const query = graphql`
  query {
    cuties: file(relativePath: { eq: "cute-dogs.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
      }
    }

    mountain: file(
      relativePath: { eq: "kai-oberhauser-BKAaLmT0tIs-unsplash.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
      }
    }

    box: file(relativePath: { eq: "tony-reid-9lOZJxYbuog-unsplash.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          width: 300
          height: 300
          placeholder: NONE
        )
      }
    }

    window: file(
      relativePath: { eq: "krzysztof-hepner-9VQLjXX0BZg-unsplash.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          width: 300
          height: 400
          placeholder: NONE
        )
      }
    }
  }
`
