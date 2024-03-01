import React from 'react'

import HomeTemplate from '../templates/Home'
import AboutMeTemplate from '../templates/AboutMe'
import Header from '../components/Header'
import MyProjectsTemplate from '../templates/MyProjects'

import * as S from '../styles/index.styles'

export default function Index() {
  return (
    <>
      <Header />
      <S.Main>
        <HomeTemplate />
        <AboutMeTemplate />
        <MyProjectsTemplate />
      </S.Main>
    </>
  )
}
