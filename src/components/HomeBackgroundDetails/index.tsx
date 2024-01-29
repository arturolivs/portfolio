import React, { useState, useEffect } from 'react'

import * as S from './homoBackgroundDetails.styles'

const DEGREE_LIMIT = 3

const HomeBackgroundDetails = () => {
  const [_, setClientX] = useState(0) //eslint-disable-line

  const [deg, setDeg] = useState(0)

  useEffect(() => {
    const handleMouseMove = ({ clientX }: MouseEvent) => {
      setClientX((clientXPrev) => {
        if (clientX < 1) return 0

        const leftDirection = clientXPrev > clientX

        if (leftDirection) {
          setDeg((prevDeg) =>
            prevDeg > DEGREE_LIMIT ? DEGREE_LIMIT : ++prevDeg,
          )
        } else {
          setDeg((prevDeg) =>
            prevDeg < -DEGREE_LIMIT ? -DEGREE_LIMIT : --prevDeg,
          )
        }

        return clientX
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <S.HomeBackgroundDetails>
      <S.HelloWord rotate={deg}>
        console.log(&apos;Olá mundo!!&apos;)
      </S.HelloWord>

      <S.HelloWord rotate={deg}>print(&apos;Olá mundo!!&apos;)</S.HelloWord>

      <S.HelloWord rotate={deg}>
        System.out.println(&apos;Olá mundo!!&apos;)
      </S.HelloWord>

      <S.HelloWord rotate={deg}>alert(&apos;Olá mundo!!&apos;)</S.HelloWord>

      <S.GeometricShapes
        width="5rem"
        height="5rem"
        top={85}
        left={90}
        rotate={deg}
      />

      <S.GeometricShapes
        width="3rem"
        height="5rem"
        top={15}
        left={2}
        rotate={deg}
      />

      <S.GeometricShapes
        width="13rem"
        height="1px"
        top={75}
        left={35}
        rotate={deg}
      />

      <S.GeometricShapes
        width="13rem"
        height="1px"
        top={30}
        left={90}
        rotate={deg}
      />

      <S.GeometricShapes
        width="10rem"
        height="7rem"
        top={14}
        left={23}
        rotate={deg}
      />
    </S.HomeBackgroundDetails>
  )
}

export default HomeBackgroundDetails
