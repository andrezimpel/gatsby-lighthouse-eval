import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

function ImageBlock({ imageData, alt }) {
  return <GatsbyImage image={imageData} alt={alt} />
}

export default ImageBlock
