import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import "bootstrap/dist/css/bootstrap.min.css"
import "katex/dist/katex.min.css"
import Header from "../components/header"
import Footer from "../components/footer"
import Video from "../components/video"
import ImageBlock from "../components/image-block"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {
  const imageData = getImage(data.cuties)
  const littlePic = getImage(data.box)
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
              <h1>
                Gatsby/Preact &amp; Bootstrap Speed Test{" "}
                <span role="img" aria-label="Fire Emoji">
                  🔥
                </span>
              </h1>
            </div>
          </div>
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
                        Finish creating a representative Header component, with
                        more links and a mobile version.
                      </li>
                      <li>
                        <del>Video Component</del>
                      </li>
                      <li>
                        <del>Use an actual GTM ID</del>
                      </li>
                      <li>
                        Get the KaTex parsing the page after it has loaded.
                      </li>
                      <li>
                        <del>Demonstrate a Next Gen Image as advert</del>
                      </li>
                      <li>
                        Demonstrate a Next Gen Image as part of a content
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
                <Video
                  videoSrc="https://www.youtube.com/embed/8Ey30-sYvuU"
                  containerClassName="col"
                />
              </section>
              <section className="row mb-4">
                <ImageBlock imageData={imageData} alt="Cute Dogs" />
              </section>
              <section className="row mb-4">
                <Video
                  videoSrc="https://www.youtube.com/embed/8Ey30-sYvuU"
                  containerClassName="col"
                />
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
                <div className="col-12 col-md-6">
                  <GatsbyImage image={littlePic} alt="Little Pic" />
                </div>
              </section>
              <section className="row mb-4">
                <div className="col-12 col-md-6">
                  <GatsbyImage image={littlePic} alt="Little Pic" />
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
                </div>
              </section>
              <section className="row mb-4">
                <div className="col-12 card shadow highlight-info">
                  <div className="card-body row">
                    <span className="h1 col-8">Important Link Information</span>
                    <button className="col-4 btn btn-large btn-danger">
                      Don't Click Me
                    </button>
                  </div>
                </div>
              </section>
              <section className="row mb-4">
                <div className="col-12 card shadow highlight-info">
                  <div className="card-body row">
                    <span className="h1 col-8">Important Link Information</span>
                    <button className="col-4 btn btn-large btn-danger">
                      Don't Click Me
                    </button>
                  </div>
                </div>
              </section>
              <section className="row mb-4">
                <div className="col-12 card shadow highlight-info">
                  <div className="card-body row">
                    <span className="h1 col-8">Important Link Information</span>
                    <button className="col-4 btn btn-large btn-danger">
                      Don't Click Me
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
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

    box: file(relativePath: { eq: "cute-dogs.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          width: 300
          height: 300
          placeholder: NONE
        )
      }
    }
  }
`
