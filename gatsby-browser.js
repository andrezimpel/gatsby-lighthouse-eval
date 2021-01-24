function initGTMOnEvent(event) {
  initGTM()
  event.currentTarget.removeEventListener(event.type, initGTMOnEvent)
}

function initGTM() {
  if (window.gtmDidInit) {
    return false
  }

  window.gtmDidInit = true

  const gtmScript = document.createElement("script")

  gtmScript.type = "text/javascript"
  gtmScript.async = true
  gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${process.env.GATSBY_GTM_TRACKING_ID}`

  gtmScript.onload = function () {
    const dataLayer = window.dataLayer
    dataLayer.push({
      // ensure PageViews are always tracked
      event: "gtm.js",
      "gtm.start": new Date().getTime(),
      "gtm.uniqueEventId": 0,
    })
  }

  document.head.appendChild(gtmScript)

  const katexScript = document.createElement("script")
  // Add Katex CSS here too if desired

  katexScript.type = "text/javascript"
  katexScript.async = true
  //katexScript.src = `https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js`
  katexScript.src = `https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.js`

  /**katexScript.onload = function () {
    const renderMathInElement = window.renderMathInElement
    const katexNodes = document.querySelectorAll(".katex")
    katexNodes.forEach(function (element) {
      console.log(element.innerText)
      renderMathInElement(element)
    })
  }**/

  katexScript.onload = function () {
    const katex = window.katex
    const katexNodes = document.querySelectorAll(".katex")
    katexNodes.forEach(function (element) {
      const encoded = element.innerText
      katex.render(encoded, element)
    })
  }

  document.head.appendChild(katexScript)
}

exports.onClientEntry = function () {
  document.onreadystatechange = function () {
    if (document.readyState !== "loading") setTimeout(initGTM, 1000)
  }

  document.addEventListener("scroll", initGTMOnEvent)
  document.addEventListener("mousemove", initGTMOnEvent)
  document.addEventListener("touchstart", initGTMOnEvent)
}
