import React from 'react'
import Image from 'next/image'

import { Grid } from '../../components/Grid'

import * as S from './home.style'

const HomeTemplate = () => (
  <S.HomeSection>
    <Grid>
      <S.SocialLinks>
        <S.Link href="https://github.com/arturolivs" target="_blank">
          <Image
            src="/assets/icons/github.png"
            alt="Ir para o github"
            width={80}
            height={80}
          />
        </S.Link>

        <S.Link
          href="https://www.linkedin.com/in/artur-oliveira-69439170/"
          target="_blank"
        >
          <Image
            src="/assets/icons/linkedin.png"
            alt="Ir para o linkedin"
            color="white"
            width={80}
            height={80}
          />
        </S.Link>
      </S.SocialLinks>

      <S.Content>
        <S.WelcomeText>Olá, meu nome é</S.WelcomeText>

        <S.Name as="h1">
          Artur Oliveira <br />
          Santiago
        </S.Name>

        <S.Profession>Desenvolvedor de sistemas</S.Profession>
      </S.Content>

      <S.ScrollToContinue>
        <S.ScrollText>Scroll para continuar</S.ScrollText>
        <S.Line />
      </S.ScrollToContinue>
    </Grid>
  </S.HomeSection>
)

export default HomeTemplate
