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

const AboutMeTemplate = () => {
  const { colors } = useTheme()

  const ref = useRef<HTMLInputElement>(null)
  const { elementOffsetX, elementOffsetY } = useMouse(ref)
  let shadowOffsetX = elementOffsetX
  let shadowOffsetY = elementOffsetY

  const shadowLimit = 10

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

  return (
    <S.AboutMe as="section" rows={12} columns={12}>
      <S.BackgroundText>Sobre mim</S.BackgroundText>
      <S.ImageSection row={3} column={3} columnSize={4} rowSize={8}>
        <S.ImageCover
          ref={ref}
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

      <S.TextSection row={3} column={7} columnSize={4} rowSize={6}>
        <S.AboutMeTitle>Sobre mim</S.AboutMeTitle>

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

      <S.TechSection row={10} column={7} columnSize={4}>
        <S.TechTitle>Principais tecnologias</S.TechTitle>
        <S.Techs>
          <S.Tech>
            <NodeLogo
              width={`${3.75}rem`}
              height={`${3.75}rem`}
              color={colors.neutral_100}
            />
            <S.TechLabel>NodeJS</S.TechLabel>
          </S.Tech>

          <S.Tech>
            <TSLogo
              width={`${3.75}rem`}
              height={`${3.75}rem`}
              color={colors.neutral_100}
            />
            <S.TechLabel>Typescript</S.TechLabel>
          </S.Tech>

          <S.Tech>
            <JavaLogo
              width={`${3.75}rem`}
              height={`${3.75}rem`}
              color={colors.neutral_100}
            />
            <S.TechLabel>Java</S.TechLabel>
          </S.Tech>

          <S.Tech>
            <HtmlLogo
              width={`${3.75}rem`}
              height={`${3.75}rem`}
              color={colors.neutral_100}
            />
            <S.TechLabel>HTML5</S.TechLabel>
          </S.Tech>

          <S.Tech>
            <CssLogo
              width={`${3.75}rem`}
              height={`${3.75}rem`}
              color={colors.neutral_100}
            />
            <S.TechLabel>CSS3</S.TechLabel>
          </S.Tech>

          <S.Tech>
            <ReactLogo
              width={`${3.75}rem`}
              height={`${3.75}rem`}
              color={colors.neutral_100}
            />
            <S.TechLabel>React</S.TechLabel>
          </S.Tech>

          <S.Tech>
            <NextLogo
              width={`${3.75}rem`}
              height={`${3.75}rem`}
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
