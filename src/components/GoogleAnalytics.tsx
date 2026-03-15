"use client"

import { useEffect } from "react"
import ReactGA from "react-ga"

export function GoogleAnalytics() {
  useEffect(() => {
    ReactGA.initialize("UA-35325391-1")
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return null
}
