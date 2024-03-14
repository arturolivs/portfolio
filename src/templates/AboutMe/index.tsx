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
    <S.AboutMe ref={aboutMeRef} as="section" rows={12} columns={12}>
      <S.AboutMeTitle as="h1" row={3} column={minXL ? 10 : 11}>
        Sobre mim
      </S.AboutMeTitle>

      {true && (
        <S.ImageSection
          row={minMD ? 3 : 4}
          rowSize={minMD ? 8 : 6}
          column={minXL ? 3 : 2}
          columnSize={minMD ? 4 : minXL ? 3 : 10}
        >
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
      )}

      <S.TextSection
        row={minMD ? 4 : 10}
        rowSize={minMD ? 5 : 1}
        column={minXL ? 8 : minMD ? 9 : 2}
        columnSize={minMD ? 3 : 10}
      >
        <S.Quote>
          Criando soluções digitais, transformo suas ideias em realidade
        </S.Quote>

        <S.AboutMeText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam
          eget felis eget nunc. Eu mi bibendum neque egestas congue quisque.
          Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam
          ultrices. Duis ultricies lacus sed turpis tincidunt. Risus nullam eget
          felis eget nunc lobortis mattis. Eu volutpat odio facilisis mauris sit
          amet massa vitae.
        </S.AboutMeText>
      </S.TextSection>

      <S.TechSection
        row={11}
        column={minXL ? 8 : minMD ? 9 : 2}
        columnSize={minMD ? 3 : 10}
      >
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
