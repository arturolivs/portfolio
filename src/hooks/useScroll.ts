import { useState, useEffect } from 'react'

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', updateScrollPosition)

    return () => window.removeEventListener('scroll', updateScrollPosition)
  }, [])

  const isScrollAtValue = (targetValue) => {
    return scrollPosition >= targetValue
  }

  return { scrollPosition, isScrollAtValue }
}

export default useScroll
