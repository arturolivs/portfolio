import { useState, useEffect } from 'react'

const SM = 768
const MD = 1024
const LG = 1440
const XL = 2200

const useBreakpoint = () => {
  const [minSM, setMinSM] = useState(false)
  const [minMD, setMinMD] = useState(false)
  const [minLG, setMinLG] = useState(false)
  const [minXL, setMinXL] = useState(false)

  useEffect(() => {
    const checkSize = () => {
      setMinSM(window.innerWidth >= SM && window.innerWidth < MD)
      setMinMD(window.innerWidth >= MD && window.innerWidth < LG)
      setMinLG(window.innerWidth >= LG && window.innerWidth < XL)
      setMinXL(window.innerWidth >= XL)
    }

    window.addEventListener('resize', checkSize)
    checkSize()

    return () => {
      window.removeEventListener('resize', checkSize)
    }
  }, [])

  return { minSM, minMD, minLG, minXL }
}

export default useBreakpoint
