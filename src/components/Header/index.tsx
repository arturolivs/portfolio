import React from 'react'

import * as S from './header.style'

const Header = () => (
  <S.Header>
    <S.Logo>A O S</S.Logo>

    <nav>
      <S.Links>
        <S.Item>
          <S.Link href="#">Sobre</S.Link>
        </S.Item>
        <S.Item>
          <S.Link href="#">Lab</S.Link>
        </S.Item>
        <S.Item>
          <S.Link href="#">Contato</S.Link>
        </S.Item>
      </S.Links>
    </nav>
  </S.Header>
)

export default Header
