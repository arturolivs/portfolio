import { useState, useEffect } from 'react'

type MouseState = {
  elementOffsetX?: number
  elementOffsetY?: number
}

function getElementCenterAxis(element: HTMLInputElement) {
  const rect = element.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2

  return { centerX, centerY }
}

const useMouse = (ref: React.MutableRefObject<HTMLInputElement>) => {
  const [state, setState] = useState<MouseState>({})

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      const { centerX: elementCenterX, centerY: elementCenterY } =
        getElementCenterAxis(ref.current)

      const mouseX = event.clientX
      const mouseY = event.clientY

      const elementOffsetX = ((mouseX - elementCenterX) / elementCenterX) * 45
      const elementOffsetY =
        -1 * (((mouseY - elementCenterY) / elementCenterY) * 45)

      setState((prev) => ({ ...prev, elementOffsetX, elementOffsetY }))
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [ref])

  return state
}

export default useMouse
