import * as React from "react"
import * as styles from "./accordion.module.scss"

type AccordionProps = {
  title: string
  children: React.ReactNode
}

function Accordion({ title, children }: AccordionProps) {
  const [isExpanded, setExpanded] = React.useState(false)
  const [contentHeight, setContentHeight] = React.useState("0px")
  const content = React.useRef(null)
  React.useEffect(() => {
    setContentHeight(isExpanded ? `${content.current.scrollHeight}px` : "0px")
  }, [isExpanded, setContentHeight])
  return (
    <div className={`${styles.accordion}${isExpanded ? " active" : ""}`}>
      <button
        className={styles.button}
        onClick={() => {
          setExpanded((v) => !v)
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
