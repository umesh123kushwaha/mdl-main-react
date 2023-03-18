import React from 'react'
import HeroSection from '../HeroSection'
import PublicationData from './PublicationData'

const Publication = () => {

    const data={
        title: 'PUBLICATIONS',
        button: 'PUBLISH JOURNAL ARTICLE',
        buttonSecond: 'PUBLISH PROCEEDINGS',
        
        titleParagraph: 'Mazedan provides an opportunity of publishing online refereed journals, books, thesis and repots of the highest quality and significance in all areas of Academic Research and Technology.'
    }
  return (
    <>
    <HeroSection {...data}/>
    <PublicationData />
    </>
  )
}

export default Publication;