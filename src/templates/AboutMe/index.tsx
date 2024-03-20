// aboutMe.tsx
import React, { useRef } from 'react'
import * as S from './aboutMe.style'

import Image from 'next/image'
import { useTheme } from 'styled-components'

import NodeLogo from '../../assets/icons/node-icon.svg'
import TSLogo from '../../assets/icons/typescript.svg'
import JavaLogo from '../../assets/icons/java-icon.svg'
import HtmlLogo from '../../assets/icons/html-logo.svg'
import CssLogo from '../../assets/icons/css-logo.svg'
import ReactLogo from '../../assets/icons/react-logo.svg'
import NextLogo from '../../assets/icons/nextjs-logo.svg'
import useBreakpoint from '../../hooks/useBreakpoint'

const AboutMeTemplate = () => {
  const imageCoverRef = useRef<HTMLInputElement>(null)
  const aboutMeRef = useRef<HTMLInputElement>(null)
  const { colors } = useTheme()
  const { minSM, minMD, minLG, minXL } = useBreakpoint()

  const techIconsSize = minSM
    ? 2.875
    : minMD
    ? 2.5
    : minLG
    ? 3.125
    : minXL
    ? 3.75
    : 1.875

  // const { elementOffsetX, elementOffsetY } = useMouse(imageCoverRef)
  // const { scrollToElement, hasScrolledUp } = useScroll({
  //   ref: aboutMeRef,
  // })

  let shadowOffsetX = 1
  let shadowOffsetY = 1

  const shadowLimit = 5

  if (shadowOffsetX > shadowLimit) {
    shadowOffsetX = shadowLimit
  }

  if (shadowOffsetX < -shadowLimit) {
    shadowOffsetX = -shadowLimit
  }

  if (shadowOffsetY > shadowLimit) {
    shadowOffsetY = shadowLimit
  }

  if (shadowOffsetY < -shadowLimit) {
    shadowOffsetY = -shadowLimit
  }

  // <S.BackgroundText>Sobre mim</S.BackgroundText>
  return (
    <S.AboutMe ref={aboutMeRef} as="section" rows={3} columns={2}>
      <S.AboutMeTitle as="h1" row={1} column={2}>
        Sobre mim
      </S.AboutMeTitle>

      <S.ImageSection row={1} rowSize={3} column={1}>
        <S.ImageCover
          ref={imageCoverRef}
          shadowOffsetX={shadowOffsetX}
          shadowOffsetY={-shadowOffsetY}
        >
          <Image
            src="/img/hero.png"
            alt="Descrição da Imagem"
            width={854}
            height={605}
            layout="responsive"
          />
        </S.ImageCover>
      </S.ImageSection>

      <S.TextSection row={2} column={2}>
        <S.Quote>
          Criando soluções digitais, transformo suas ideias em realidade
        </S.Quote>

        <S.AboutMeText>
          Origem de Jaboatão dos Guararapes, PE, minha jornada no
          desenvolvimento de sistemas começou lá atrás, a mais de 7 anos, após
          me formar em Análise e Desenvolvimento de Sistemas. Nessa trajetória
          obtive experiências ricas e diversificadas. Me especializei em
          aplicações web, mas também tive oportunidade de trabalhar com projetos
          significativos em aplicações desktop. Atualmente, estou aprofundando
          minha formação com uma Especialização em Engenharia de Software,
          buscando aprimorar ainda mais minhas habilidades e contribuir de forma
          ainda mais efetiva para o desenvolvimento de soluções tecnológicas
          inovadoras.
        </S.AboutMeText>
      </S.TextSection>

      <S.TechSection row={3} column={2}>
        <S.TechTitle>Principais tecnologias</S.TechTitle>
        <S.Techs>
          <S.Tech maxWidth={techIconsSize}>
            <NodeLogo
              width={`${techIconsSize}rem`}
              height={`${techIconsSize}rem`}
              color={colors.neutral_100}
            />
            <S.TechLabel>NodeJS</S.TechLabel>
          </S.Tech>

          <S.Tech maxWidth={techIconsSize}>
            <TSLogo
              width={`${techIconsSize}rem`}
              height={`${techIconsSize}rem`}
              color={colors.neutral_100}
            />
            <S.TechLabel>Typescript</S.TechLabel>
          </S.Tech>

          <S.Tech maxWidth={techIconsSize}>
            <JavaLogo
              width={`${techIconsSize}rem`}
              height={`${techIconsSize}rem`}
              color={colors.neutral_100}
            />
            <S.TechLabel>Java</S.TechLabel>
          </S.Tech>

          <S.Tech maxWidth={techIconsSize}>
            <HtmlLogo
              width={`${techIconsSize}rem`}
              height={`${techIconsSize}rem`}
              color={colors.neutral_100}
            />
            <S.TechLabel>HTML5</S.TechLabel>
          </S.Tech>

          <S.Tech maxWidth={techIconsSize}>
            <CssLogo
              width={`${techIconsSize}rem`}
              height={`${techIconsSize}rem`}
              color={colors.neutral_100}
            />
            <S.TechLabel>CSS3</S.TechLabel>
          </S.Tech>

          <S.Tech maxWidth={techIconsSize}>
            <ReactLogo
              width={`${techIconsSize}rem`}
              height={`${techIconsSize}rem`}
              color={colors.neutral_100}
            />
            <S.TechLabel>React</S.TechLabel>
          </S.Tech>

          <S.Tech maxWidth={techIconsSize}>
            <NextLogo
              width={`${techIconsSize}rem`}
              height={`${techIconsSize}rem`}
              color={colors.neutral_100}
            />
            <S.TechLabel>NextJS</S.TechLabel>
          </S.Tech>
        </S.Techs>
      </S.TechSection>
    </S.AboutMe>
  )
}

export default AboutMeTemplate
