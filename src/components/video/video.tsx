import * as React from "react"
import { useInView } from "react-intersection-observer"

const Video = ({ videoSrc, containerClassName = "" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  return (
    <div ref={ref} className={containerClassName}>
      {inView && (
        <iframe
          title="YouTube Video"
          className="w-100 h-100"
          src={videoSrc}
          frameBorder="0"
          allowFullScreen={true}
          width="100%"
          height="450"
        />
      )}
    </div>
  )
}
export default Video
