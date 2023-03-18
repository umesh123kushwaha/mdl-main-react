import React from 'react'
import styled from 'styled-components';
import HeroSection from '../HeroSection';
import ConferenceData from './ConferenceData';

const Conference = () => {
  const data = {
    
    title: 'CONFERENCES AND WORKSHOPS',
    button: 'BECOME SPONSOR',
    buttonSecond: 'COLLABORATE',
    titleParagraph: 'Our conferences, workshops and symposia unite innovators like you to push computing technology forward and to continue the legacy that unites us as like-minded thinkers and makers.',
    notification: 'Our conferences, workshops and symposia unite innovators like you to push computing technology forward and to continue the legacy that unites us as like-minded thinkers and makers.'
  }
  return (
   
     <>
      <HeroSection {...data} />
      <ConferenceData />
      </>
    
  )
}

export default Conference;