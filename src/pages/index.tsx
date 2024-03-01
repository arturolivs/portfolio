import React from 'react'

import Header from '../components/Header'
import Home from '../templates/Home'
import AboutMe from '../templates/AboutMe'
import MyProjects from '../templates/MyProjects'

export default function Index() {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <MyProjects />
    </>
  )
}
