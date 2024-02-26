import { useState, useEffect } from 'react'

type UseScrollProps = {
  ref?: React.MutableRefObject<HTMLElement>
}

const useScroll = ({ ref = null }: UseScrollProps) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [lastScrollPosition, setLastScrollPosition] = useState(0)

  useEffect(() => {
    const updateScrollPosition = () => {
      let currentScrollPosition = 0

      if (ref?.current) {
        currentScrollPosition = ref.current.scrollTop
      } else {
        currentScrollPosition = window.scrollY
      }

      setScrollPosition((prev) => {
        setLastScrollPosition(prev)
        return currentScrollPosition
      })
    }

    if (ref?.current) {
      ref.current.addEventListener('scroll', updateScrollPosition)
    } else {
      window.addEventListener('scroll', updateScrollPosition)
    }

    return () => {
      if (ref?.current) {
        ref.current.removeEventListener('scroll', updateScrollPosition)
      } else {
        window.removeEventListener('scroll', updateScrollPosition)
      }
    }
  }, [ref, scrollPosition])

  const isScrollAtValue = (targetValue) => {
    return scrollPosition >= targetValue
  }

  const hasScrolledUp = () => {
    return lastScrollPosition > scrollPosition
  }

  return { scrollPosition, isScrollAtValue, hasScrolledUp }
}

export default useScroll
