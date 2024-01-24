import React from 'react'

import * as S from './homoBackgroundDetails.styles'

const HomeBackgroundDetails = () => (
  <>
    <S.HelloWord>console.log(&apos;Olá mundo!!&apos;)</S.HelloWord>
    <S.HelloWord>print(&apos;Olá mundo!!&apos;)</S.HelloWord>
    <S.HelloWord>System.out.println(&apos;Olá mundo!!&apos;)</S.HelloWord>
    <S.HelloWord>alert(&apos;Olá mundo!!&apos;)</S.HelloWord>

    <S.GeometricShapes
      width="5rem"
      height="5rem"
      top={85}
      left={90}
      rotate={25}
    />

    <S.GeometricShapes
      width="3rem"
      height="5rem"
      top={15}
      left={2}
      rotate={40}
    />

    <S.GeometricShapes
      width="13rem"
      height="1px"
      top={75}
      left={35}
      rotate={35}
    />

    <S.GeometricShapes
      width="13rem"
      height="1px"
      top={30}
      left={90}
      rotate={45}
    />

    <S.GeometricShapes
      width="10rem"
      height="7rem"
      top={14}
      left={23}
      rotate={-10}
    />
  </>
)

export default HomeBackgroundDetails
