// aboutMe.tsx
import React from 'react'
import * as S from './aboutMe.style'

const AboutMeTemplate = () => (
  <S.AboutMe as="section" rows={12} columns={12}>
    <S.ImageSection row={3} column={2}>
      IMAGEM
    </S.ImageSection>

    <S.TextSection row={3} column={8} columnSize={4} rowSize={6}>
      <S.AboutMeTitle>Sobre mim</S.AboutMeTitle>

      <S.Quote>
        Criando soluções digitais, transformo suas ideias em realidade
      </S.Quote>

      <S.AboutMeText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis
        eget nunc. Eu mi bibendum neque egestas congue quisque. Metus aliquam
        eleifend mi in nulla posuere sollicitudin aliquam ultrices. Duis
        ultricies lacus sed turpis tincidunt. Risus nullam eget felis eget nunc
        lobortis mattis. Eu volutpat odio facilisis mauris sit amet massa vitae.
      </S.AboutMeText>
    </S.TextSection>

    <S.TechSection row={9} column={8}>
      TechSection
    </S.TechSection>
  </S.AboutMe>
)

export default AboutMeTemplate
