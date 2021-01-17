import * as React from "react"
import { GatsbyImage } from "@wardpeet/gatsby-image-nextgen"

function ImageBlock({ fixed, alt }) {
  return (
    <GatsbyImage
      placeholder={{ fallback: fixed.fallback }}
      images={{
        fallback: {
          src: fixed.src,
          srcSet: fixed.srcSet,
        },
        sources: [
          {
            src: fixed.srcWebp,
            srcSet: fixed.srcSetWebp,
            type: "image/webp",
          },
        ],
      }}
      width={fixed.width}
      height={fixed.height}
      layout="fixed"
      alt={alt}
    />
  )
}

export default ImageBlock
