import { useState, useEffect } from 'react'

type ScrollProps = { ref?: React.MutableRefObject<HTMLInputElement> }

const useScroll = ({ ref = null }: ScrollProps) => {
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

  const scrollToElement = (duration = 500) => {
    if (!ref) return

    const start = scrollPosition
    const end = ref.current.getBoundingClientRect().top + window.scrollY
    const distance = end - start
    const startTime =
      'now' in window.performance ? performance.now() : new Date().getTime()

    function animateScroll(currentTime) {
      if (!currentTime)
        currentTime =
          'now' in window.performance ? performance.now() : new Date().getTime()
      const timeElapsed = currentTime - startTime
      const progress = timeElapsed / duration
      const run = start + distance * progress
      window.scrollTo(0, run)
      if (timeElapsed < duration && end < scrollPosition)
        requestAnimationFrame(animateScroll)
    }

    requestAnimationFrame(animateScroll)
  }

  return {
    scrollPosition,
    isScrollAtValue,
    hasScrolledUp,
    scrollToElement,
  }
}

export default useScroll
