import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls to the hash anchor when navigating to a page with a #fragment.
 * Place once inside Layout so it applies to all pages.
 */
export function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      // No hash — scroll to top on page change
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
      return
    }
    const id = hash.replace('#', '')
    // Small delay to let the page render before scrolling
    const timer = setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 80)
    return () => clearTimeout(timer)
  }, [hash, pathname])

  return null
}
