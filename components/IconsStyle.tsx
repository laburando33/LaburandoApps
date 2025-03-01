"use client"

import { useEffect } from "react"

const IconsStyle = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      const link = document.createElement("link")
      link.href = "https://unpkg.com/ionicons@5.5.2/dist/css/ionicons.min.css"
      link.rel = "stylesheet"
      document.head.appendChild(link)
    }
  }, [])

  return null
}

export default IconsStyle

