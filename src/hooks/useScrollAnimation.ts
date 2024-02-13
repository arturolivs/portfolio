import { useEffect, useState } from 'react'

type ScrollAnimationProps = {
  ref: React.MutableRefObject<HTMLInputElement>
  animation: 'translate' | 'rotate'
  start?: number
  stop?: number
}

const SPEED_FACTOR = 0.05

const useScrollAnimation = ({ ref, animation }: ScrollAnimationProps) => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const element = ref.current

    const newTransformValue = `${animation}(calc(100% - ${
      scrollPosition * SPEED_FACTOR
    }%),calc(100% - ${scrollPosition * SPEED_FACTOR}%)) rotate(-20deg)`

    element.style.transform = newTransformValue
  }, [ref, animation, scrollPosition])
}

export default useScrollAnimation

// export const slideText = keyframes`
//   from {
//     transform: translate(100%, -100%) rotate(-20deg);
//   }

//    to {
//     transform:  translate(-150%,300%)  rotate(-20deg);
//     }
// `
