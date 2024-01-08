import React from 'react'

import * as S from './home.style'

const Home = () => (
  <S.HomeContainer>
    <S.SocialLinks>
      <span>GITHUB</span>
      <span>Linkedin</span>
    </S.SocialLinks>

    <S.Content>
      <S.Text1>Olá, meu nome é</S.Text1>
      <S.Name>
        Artur Oliveira <br />
        Santiago
      </S.Name>
      <S.Text2>
        Desenvolvedor de <br />
        Sistemas
      </S.Text2>
    </S.Content>
  </S.HomeContainer>
)

export default Home
