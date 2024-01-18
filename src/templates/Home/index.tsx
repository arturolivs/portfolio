import React from 'react'

import { Grid } from '../../components/Grid'

import GitHubLogo from '../../assets/icons/github-logo.svg'
import LinkedinLogo from '../../assets/icons/linkedin-logo.svg'

import * as S from './home.style'

const HomeTemplate = () => (
  <S.HomeSection>
    <Grid>
      <S.SocialLinks>
        <S.Link href="https://github.com/arturolivs" target="_blank">
          <GitHubLogo width={75} height={75} fill="#fff" />
        </S.Link>

        <S.Link
          href="https://www.linkedin.com/in/artur-oliveira-69439170/"
          target="_blank"
        >
          <LinkedinLogo width={75} height={75} fill="#fFF" />
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
