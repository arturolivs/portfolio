import React from 'react'

import HomeTemplate from '../templates/Home'
import AboutMeTemplate from '../templates/AboutMe'
import Header from '../components/Header'
import MyProjectsTemplate from '../templates/MyProjects'

export default function Index() {
  return (
    <>
      <Header />
      <HomeTemplate />
      <AboutMeTemplate />
      <MyProjectsTemplate />
    </>
  )
}
