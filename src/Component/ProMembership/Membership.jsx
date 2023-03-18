import React from 'react'
import HeroSection from '../HeroSection';
import MembershipData from './MembershipData';

const Membership = () => {

    const data ={

        title: 'PROFESSIONAL MEMBERSHIP',
        button: "BECOME MEMBER",
        titleParagraph: 'Welcomes all professional doctors, engineers, professors, to exchange information and ideas with us.',
        notification: 'Welcomes all professional doctors, engineers, professors, to exchange information and ideas with us.'
    }
  return (
    <>
   <HeroSection {...data} />
   <MembershipData />
   </>
  )
}

export default Membership;