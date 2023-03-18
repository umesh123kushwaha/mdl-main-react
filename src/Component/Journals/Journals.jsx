import React from 'react'
import HeroSection from '../HeroSection';
import JournalsData from './JorurnalsData';

const Journals = () => {

const data ={

  title: "BOOKS AND JOURNALS",
  button: 'PUBLISH BOOK',
  buttonSecond: 'CALL FOR PAPER',
  titleParagraph: 'A unique platform for publishing online refereed journals, books and reports  of the highest quality and significance in all areas of Academic Research and Technology.',
  notification: 'A unique platform for publishing online refereed journals, books and reports  of the highest quality and significance in all areas of Academic Research and Technology.'

}
  return (
    <>
    <HeroSection {...data}/>
    <JournalsData />
    </>
  )
}

export default Journals;