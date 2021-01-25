import * as React from "react"
import { useInView } from "react-intersection-observer"
import * as styles from "./video.module.scss"

const Video = ({ videoSrc, title = "YouTube Video" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  return (
    <div ref={ref} className={styles.container}>
      {inView && (
        <iframe
          title={title}
          src={videoSrc}
          frameBorder="0"
          allowFullScreen={true}
          width="100%"
          height="100%"
          style={{ maxHeight: "500px" }}
        />
      )}
    </div>
  )
}
export default Video
