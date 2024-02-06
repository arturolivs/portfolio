import { useState, useEffect } from 'react'

const useMouseRotation3 = (ref) => {
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const updateRotation = (event) => {
      const mouseX = event.clientX
      const mouseY = event.clientY
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      let offsetX = ((mouseX - centerX) / centerX) * 45

      if (offsetX > 40) {
        offsetX = 40
      }

      if (offsetX < -40) {
        offsetX = -40
      }

      setOffsetX(offsetX)
      setOffsetY(((mouseY - centerY) / centerY) * 45)
      // Update the state with the new rotation values
    }

    window.addEventListener('mousemove', updateRotation)
    return () => window.removeEventListener('mousemove', updateRotation)
  }, [ref])

  return { offsetX, offsetY }
}

export default useMouseRotation3
