import React from 'react'
import HeroSection from '../HeroSection'
import AboutMainSection from './AboutMainSection'

const AboutPage = () => {

  const data = {

    title: 'ABOUT THE ACADEMY',
    titleParagraph: "Mazedan International Research Academy an association international scholars aimed research and development.",
    button: 'BECOME MEMBER',
    notification: 'Mazedan International Research Academy an association international scholars aimed research and development'
  }

  return (
    <>
    <HeroSection {...data} />
    <AboutMainSection />
    </>
  )
}

export default AboutPage