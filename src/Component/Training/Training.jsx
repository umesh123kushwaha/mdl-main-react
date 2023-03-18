import React from 'react'
import HeroSection from '../HeroSection';
import TrainingData from './TrainingData';

const Training = () => {

    const data ={
        title: 'AWARDS & HONOURS',
        button: 'CALL FOR NOMINATIONS',
        titleParagraph: 'Young Scientist Award is a step towards our vision of solving toughest problems in life sciences by collaborating with scientific community.'
    }
  return (
    <>
    <HeroSection {...data} />
    <TrainingData />
    </>
  )
}

export default Training;