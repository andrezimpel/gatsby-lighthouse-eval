import * as React from "react"
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer() {
  const linkGroup = [
    {
      label: "Link One",
    },
    {
      label: "Link Two",
    },
    {
      label: "Link Three",
    },
    {
      label: "Link Four",
    },
    {
      label: "Link Five",
    },
  ]
  return (
    <footer className="container text-white py-4">
      <div className="row text-center text-lg-left">
        <div className="col-6 col-lg-3">
          <span className="h6 text-uppercase d-block mb-3">Find us here</span>
          <div className="d-flex flex-column justify-content-between align-items-center">
            <FontAwesomeIcon icon={faTwitter} size="2x" className="my-3" />
            <FontAwesomeIcon icon={faFacebook} size="2x" className="my-3" />
            <FontAwesomeIcon icon={faInstagram} size="2x" className="my-3" />
          </div>
        </div>
        <LinkColumn title="Column One" links={linkGroup} />
        <LinkColumn title="Column Two" links={linkGroup} />
        <LinkColumn title="Column Three" links={linkGroup} />
      </div>
    </footer>
  )
}

function LinkColumn({ title, links }) {
  return (
    <div className="col-6 col-lg-3">
      <span className="h6 text-uppercase d-block mb-3">{title}</span>
      {links.map((link, index) => {
        const url = "/404"
        return (
          <a
            key={`${url}-${index}`}
            href={url}
            className="text-info d-block mb-3"
          >
            {link.label}
          </a>
        )
      })}
    </div>
  )
}

export default Footer
