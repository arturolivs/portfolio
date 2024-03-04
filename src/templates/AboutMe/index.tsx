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
import useMouse from '../../hooks/useMouse'
import useScroll from '../../hooks/useScroll'
import useBreakpoint from '../../hooks/useBreakpoint'

const AboutMeTemplate = () => {
  const imageCoverRef = useRef<HTMLInputElement>(null)
  const aboutMeRef = useRef<HTMLInputElement>(null)
  const { colors } = useTheme()
  const { minSM, minMD, minLG, minXL } = useBreakpoint()

  const iconsSize = minSM
    ? 2.875
    : minMD
    ? 2.5
    : minLG
    ? 3.125
    : minXL
    ? 3.75
    : 1.875

  const { elementOffsetX, elementOffsetY } = useMouse(imageCoverRef)
  const { scrollToElement, hasScrolledUp } = useScroll({
    ref: aboutMeRef,
  })

  React.useEffect(() => {
    const aboutMeTopPosition = aboutMeRef.current.getBoundingClientRect().top

    if (
      aboutMeTopPosition > 0 &&
      aboutMeTopPosition < 150 &&
      !hasScrolledUp()
    ) {
      scrollToElement(50)
    }
  }, [scrollToElement, hasScrolledUp])

  let shadowOffsetX = elementOffsetX
  let shadowOffsetY = elementOffsetY

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

      <S.ImageSection
        row={minMD ? 4 : 3}
        column={minXL ? 3 : 2}
        rowSize={8}
        columnSize={minXL ? 3 : 4}
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

      <S.TextSection
        row={4}
        column={minMD ? 9 : minXL ? 7 : 8}
        columnSize={minMD ? 3 : 4}
        rowSize={5}
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

      <S.TechSection row={10} column={7} columnSize={minXL ? 4 : 5}>
        <S.TechTitle>Principais tecnologias</S.TechTitle>
        <S.Techs>
          <S.Tech maxWidth={iconsSize}>
            <NodeLogo
              width={`${iconsSize}rem`}
              height={`${iconsSize}rem`}
              color={colors.neutral_100}
            />
            <S.TechLabel>NodeJS</S.TechLabel>
          </S.Tech>

          <S.Tech maxWidth={iconsSize}>
            <TSLogo
              width={`${iconsSize}rem`}
              height={`${iconsSize}rem`}
              color={colors.neutral_100}
            />
            <S.TechLabel>Typescript</S.TechLabel>
          </S.Tech>

          <S.Tech maxWidth={iconsSize}>
            <JavaLogo
              width={`${iconsSize}rem`}
              height={`${iconsSize}rem`}
              color={colors.neutral_100}
            />
            <S.TechLabel>Java</S.TechLabel>
          </S.Tech>

          <S.Tech maxWidth={iconsSize}>
            <HtmlLogo
              width={`${iconsSize}rem`}
              height={`${iconsSize}rem`}
              color={colors.neutral_100}
            />
            <S.TechLabel>HTML5</S.TechLabel>
          </S.Tech>

          <S.Tech maxWidth={iconsSize}>
            <CssLogo
              width={`${iconsSize}rem`}
              height={`${iconsSize}rem`}
              color={colors.neutral_100}
            />
            <S.TechLabel>CSS3</S.TechLabel>
          </S.Tech>

          <S.Tech maxWidth={iconsSize}>
            <ReactLogo
              width={`${iconsSize}rem`}
              height={`${iconsSize}rem`}
              color={colors.neutral_100}
            />
            <S.TechLabel>React</S.TechLabel>
          </S.Tech>

          <S.Tech maxWidth={iconsSize}>
            <NextLogo
              width={`${iconsSize}rem`}
              height={`${iconsSize}rem`}
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
