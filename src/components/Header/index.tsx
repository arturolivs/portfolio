import React from 'react'

import Image from 'next/image'

import * as S from './header.style'

const Header = () => (
  <S.Header>
    <a href="#">
      <Image
        src="/assets/icons/logo.svg"
        alt="Logo que representa as iniciais A O S, link para ir para a página inicial"
        width={100}
        height={40}
      />
    </a>

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
