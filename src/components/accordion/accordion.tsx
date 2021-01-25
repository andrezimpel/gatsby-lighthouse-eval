import * as React from "react"
import * as styles from "./accordion.module.scss"

function Accordion({ title, children }) {
  const [isExpanded, setExpanded] = React.useState(false)
  const [contentHeight, setContentHeight] = React.useState("0px")
  const content = React.useRef(null)
  return (
    <div className={`${styles.accordion}${isExpanded ? " active" : ""}`}>
      <button
        className={styles.button}
        onClick={() => {
          setExpanded((v) => !v)
          setContentHeight(
            isExpanded ? `${content.current.scrollHeight}px` : "0px"
          )
        }}
      >
        {title}
      </button>
      <div
        ref={content}
        className={styles.content}
        style={{ maxHeight: contentHeight }}
      >
        {children}
      </div>
    </div>
  )
}

export default Accordion
