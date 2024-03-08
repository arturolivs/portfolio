import { useState, useEffect } from 'react'
import { SM, MD, LG, XL } from '../theme/breakpoints'

const useBreakpoint = () => {
  const [minSM, setMinSM] = useState(false)
  const [minMD, setMinMD] = useState(false)
  const [minLG, setMinLG] = useState(false)
  const [minXL, setMinXL] = useState(false)

  useEffect(() => {
    const checkSize = () => {
      // Verifica se a largura da janela é maior ou igual a cada breakpoint
      setMinSM(window.innerWidth >= SM)
      setMinMD(window.innerWidth >= MD)
      setMinLG(window.innerWidth >= LG)
      setMinXL(window.innerWidth >= XL)
    }

    window.addEventListener('resize', checkSize)
    checkSize() // Chama a função inicialmente para definir os estados corretos

    return () => {
      window.removeEventListener('resize', checkSize)
    }
  }, [])

  return { minSM, minMD, minLG, minXL }
}

export default useBreakpoint
