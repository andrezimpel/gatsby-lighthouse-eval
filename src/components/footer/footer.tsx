import * as React from "react"

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
        <div className="col-6 col-lg-3">Social Links</div>
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
      {links.map((link) => {
        const url = "/404"
        return (
          <a key={url} href={url} className="text-info d-block mb-3">
            {link.label}
          </a>
        )
      })}
    </div>
  )
}

export default Footer
