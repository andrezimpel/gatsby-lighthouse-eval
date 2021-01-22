import * as React from "react"

type WindowDimensions = {
  width: number | undefined
  height: number | undefined
}

type SetWindowSizeState = React.Dispatch<React.SetStateAction<WindowDimensions>>

function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState<WindowDimensions>({
    width: undefined,
    height: undefined,
  })

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      window.addEventListener("resize", handleResize)
      handleResize()

      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])
  return windowSize
}

export default useWindowSize
