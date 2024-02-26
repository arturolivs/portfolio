import React, { useRef } from 'react'

import HomeTemplate from '../templates/Home'
import AboutMeTemplate from '../templates/AboutMe'
import Header from '../components/Header'
import MyProjectsTemplate from '../templates/MyProjects'
import * as S from '../styles/index.styles'
import useScroll from '../hooks/useScroll'

export default function Index() {
  const mainRef = useRef(null)

  const { isScrollAtValue, hasScrolledUp } = useScroll({ ref: mainRef })

  const hidden = isScrollAtValue(280) && !hasScrolledUp()
  const showBackground = hasScrolledUp() && isScrollAtValue(280)

  return (
    <>
      <Header hidden={hidden} showBackground={showBackground} />

      <S.Main ref={mainRef}>
        <HomeTemplate />
        <AboutMeTemplate />
        <MyProjectsTemplate />
      </S.Main>
    </>
  )
}
