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
    <footer className="container">
      <div className="row">
        <div className="col col-3">Social Links</div>
        <LinkColumn links={linkGroup} />
        <LinkColumn links={linkGroup} />
        <LinkColumn links={linkGroup} />
      </div>
    </footer>
  )
}

function LinkColumn({ links }) {
  return (
    <div className="col-auto">
      {links.map((link) => {
        const url = link.label.replace(" ", "-").toLowerCase()
        return (
          <a key={url} href={url} className="d-block mb-3">
            {link.label}
          </a>
        )
      })}
    </div>
  )
}

export default Footer
