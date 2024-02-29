import { useState, useEffect } from 'react'

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [lastScrollPosition, setLastScrollPosition] = useState(0)

  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollPosition((prev) => {
        setLastScrollPosition(prev)
        return window.scrollY
      })
    }

    window.addEventListener('scroll', updateScrollPosition)

    return () => {
      window.removeEventListener('scroll', updateScrollPosition)
    }
  }, [scrollPosition])

  const isScrollAtValue = (targetValue) => {
    return scrollPosition >= targetValue
  }

  const hasScrolledUp = () => {
    return lastScrollPosition > scrollPosition
  }

  return { scrollPosition, isScrollAtValue, hasScrolledUp }
}

export default useScroll
