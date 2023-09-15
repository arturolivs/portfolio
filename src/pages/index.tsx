import Image from 'next/image'
import React from 'react'

import * as S from './styles'

export default function Home() {
  return (
    <S.Main>
      <S.Content>
        <h1>Em construção</h1>
        <S.LoadingDots>
          <span></span>
          <span></span>
          <span></span>
        </S.LoadingDots>
      </S.Content>
      <Image
        src="/assets/icons/in-construction.png"
        alt="Em construção"
        width={100}
        height={100}
      />
    </S.Main>
  )
}
