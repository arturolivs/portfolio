import React from 'react'
import { useTheme } from 'styled-components'

import { Grid } from '../../components/Grid'
// import HomeBackgroundDetails from '../../components/HomeBackgroundDetails'
import LinkedinLogo from '../../assets/icons/linkedin-logo.svg'

import * as S from './home.style'
import HomeScrollIndicator from '../../components/HomeScrollIndicator'
import useBreakpoint from '../../hooks/useBreakpoint'

const HomeTemplate = () => {
  const theme = useTheme()

  const { minSM, minMD, minLG, minXL } = useBreakpoint()

  const logoSize = minSM ? 3 : minMD ? 3.5 : minLG ? 4 : minXL ? 4.75 : 1.75

  return (
    <S.HomeSection>
      {/* <HomeBackgroundDetails /> */}
      <Grid>
        <S.SocialLinksSection>
          <S.Link href="https://github.com/arturolivs" target="_blank">
            <S.GitHubLogo
              width={`${logoSize}rem`}
              height={`${logoSize}rem`}
              color={theme.colors.neutral_white}
            />
          </S.Link>

          <S.Link
            href="https://www.linkedin.com/in/artur-oliveira-69439170/"
            target="_blank"
          >
            <LinkedinLogo
              width={`${logoSize}rem`}
              height={`${logoSize}rem`}
              color={theme.colors.neutral_white}
            />
          </S.Link>
        </S.SocialLinksSection>

        <S.Content>
          <S.WelcomeText>Olá, meu nome é</S.WelcomeText>

          <S.Name as="h1">
            Artur Oliveira <br />
            Santiago
          </S.Name>

          <S.Profession>Desenvolvedor de sistemas</S.Profession>
        </S.Content>

        <HomeScrollIndicator />
      </Grid>
    </S.HomeSection>
  )
}

export default HomeTemplate
