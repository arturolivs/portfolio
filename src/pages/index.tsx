import React from 'react'

import HomeTemplate from '../templates/Home'
import AboutMeTemplate from '../templates/AboutMe'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <HomeTemplate />
      <AboutMeTemplate />
    </>
  )
}
