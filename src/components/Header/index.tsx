import React from 'react'

import Logo from '../../assets/svg/logo.svg'

import * as S from './header.style'
import useScroll from '../../hooks/useScroll'

const Header = () => {
  const { isScrollAtValue, hasScrolledUp } = useScroll({})

  const hidden = isScrollAtValue(280) && !hasScrolledUp()
  const showBackground = hasScrolledUp() && isScrollAtValue(280)

  return (
    <S.Header hidden={hidden} showBackground={showBackground}>
      <S.GoToHome href="#">
        <Logo width={60} height={60} color="#fff" />
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
}

export default Header
