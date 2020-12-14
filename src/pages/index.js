import * as React from "react";
import { Helmet } from "react-helmet";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
  listStyleType: "none",
};
const listItemStyles = {
  marginBottom: 12,
  fontWeight: "300",
  letterSpacing: 1,
};
const linkStyles = {
  color: "#8954A8",
};

// data
const links = [
  {
    text: "Documentation",
    url: "https://www.gatsbyjs.com/docs/",
  },
  {
    text: "Tutorials",
    url: "https://www.gatsbyjs.com/tutorial/",
  },
  {
    text: "Guides",
    url: "https://www.gatsbyjs.com/tutorial/",
  },
  {
    text: "API Reference",
    url: "https://www.gatsbyjs.com/docs/api-reference/",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
  },
  {
    text: "Cheat Sheet",
    url: "https://www.gatsbyjs.com/docs/cheat-sheet/",
  },
];

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Helmet>
        <html lang="en" />
        <title>Home Page</title>
      </Helmet>

      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site!</span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
        update in real-time.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <ul style={listStyles}>
        {links.map((link) => (
          <li style={listItemStyles}>
            <a
              style={linkStyles}
              href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;
