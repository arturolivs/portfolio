import { useState, useEffect } from 'react'

const DEG_LIMIT = 35

function applyDegLimit(deg: number) {
  if (deg > DEG_LIMIT) {
    deg = DEG_LIMIT
  }

  if (deg < -DEG_LIMIT) {
    deg = -DEG_LIMIT
  }

  return deg
}

function getElementCenterAxis(element: HTMLInputElement) {
  const rect = element.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2

  return { centerX, centerY }
}

const useMouseRotation = (ref: React.MutableRefObject<HTMLInputElement>) => {
  const [xDeg, setXDeg] = useState(0)
  const [yDeg, setYDeg] = useState(0)

  useEffect(() => {
    const updateRotation = (event) => {
      const { centerX, centerY } = getElementCenterAxis(ref.current)

      const mouseX = event.clientX
      const mouseY = event.clientY

      const xDeg = ((mouseX - centerX) / centerX) * 45
      const yDeg = -1 * (((mouseY - centerY) / centerY) * 45)

      setXDeg(applyDegLimit(xDeg))
      setYDeg(applyDegLimit(yDeg))
    }

    window.addEventListener('mousemove', updateRotation)
    return () => window.removeEventListener('mousemove', updateRotation)
  }, [ref])

  return { xDeg, yDeg }
}

export default useMouseRotation
