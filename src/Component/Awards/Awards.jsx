import React from 'react'
import HeroSection from '../HeroSection';
import AwardsData from './AwardsData';

const Awards = () => {

    const data={
        title: 'AWARDS & HONOURS',
        button: 'CALL FOR NOMINATIONS',
        titleParagraph: 'Young Scientist Award is a step towards our vision of solving toughest problems in life sciences by collaborating with scientific community.'
    }
  return (
    <>
   <HeroSection {...data} />
   <AwardsData />
   </>
  )
}

export default Awards;