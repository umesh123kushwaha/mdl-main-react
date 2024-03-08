import React from 'react'
import HeroSection from '../../HeroSection'
import SearchJournalData from './SearchJournalData.jsx';
import { useGlobalContext } from '../../../Context.jsx';

const JournalResult = () => {

  const { hits, nbPages, isLoading, removeItem } = useGlobalContext();
  console.log("hourhdjfk", hits);

  const data ={

    title: "TRANSACTIONS ON ENGINEERING SYSTEMS DESIGN",
    button: 'QUICK TRACKING',
    buttonSecond: 'MANAGE | SUBMIT',
    titleParagraph: 'Sunil Kumar Sharma (Editor-in-Chief) | 2582-8061 (e-ISSN) Hybrid | Closed Peer Reviewed | English Language Biannually published at Mazedan Digital Library',
    notification: 'A unique platform for publishing online refereed journals, books and reports  of the highest quality and significance in all areas of Academic Research and Technology.'
  
  }
  return (
    <>
    <HeroSection {...data} />
    <SearchJournalData />
    </>
  )
}

export default JournalResult