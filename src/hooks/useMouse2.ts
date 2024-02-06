import { useState, useEffect } from 'react'

const useMouseRotation2 = (ref) => {
  const [angleDeg, setAngleDeg] = useState(0)

  function angle(cx, cy, ex, ey) {
    const dy = ey - cy
    const dx = ex - cx
    let rad = Math.atan2(dy, dx)
    // Normalize the angle to be between  0 and  2*PI
    if (rad < 0) {
      rad += 2 * Math.PI
    }
    // Convert to degrees and normalize to  0-360 range
    const deg = (rad * 180) / Math.PI
    return deg
  }

  useEffect(() => {
    const updateRotation = (event) => {
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const angleDeg = angle(event.clientX, event.clientY, centerX, centerY)
      setAngleDeg(angleDeg)
    }

    window.addEventListener('mousemove', updateRotation)
    return () => window.removeEventListener('mousemove', updateRotation)
  }, [ref])

  return { angleDeg }
}

export default useMouseRotation2
