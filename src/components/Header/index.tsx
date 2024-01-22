import React from 'react'

import Logo from '../../assets/icons/logo.svg'

import * as S from './header.style'

const Header = () => (
  <S.Header>
    <S.GoToHome href="#">
      <Logo width={100} height={40} color="#fff" />
    </S.GoToHome>

    <S.MenuNavigation>
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
    </S.MenuNavigation>
  </S.Header>
)

export default Header
