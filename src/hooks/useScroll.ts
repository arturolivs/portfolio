import { useState, useEffect } from 'react'

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [lastScrollPosition, setLastScrollPosition] = useState(0)

  useEffect(() => {
    const updateScrollPosition = () => {
      const currentScrollPosition = window.scrollY
      setLastScrollPosition(scrollPosition) // Atualiza a última posição de rolagem antes de mudar a posição atual
      setScrollPosition(currentScrollPosition)
    }

    window.addEventListener('scroll', updateScrollPosition)

    return () => window.removeEventListener('scroll', updateScrollPosition)
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
