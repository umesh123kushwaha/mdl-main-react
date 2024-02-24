import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { FaArrowUp } from 'react-icons/fa';

const GoTo = () => {

  const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  const listenToScroll = () => {

    

    let heightToHidden = 250;
    const winScroll = 
    document.body.scrollTop || document.documentElement.scrollTop;
    
    if(winScroll > heightToHidden) {
        setIsVisible(true);
    } else {
        setIsVisible(false);
    }
  };

  useEffect (() => {
    window.addEventListener("scroll", listenToScroll);
    return()=> window.removeEventListener("scroll", listenToScroll);

  },[]);
  return (
    <Wrapper>
      { isVisible && (
      <div className='top-btn' onClick={goToBtn}>
        
        <FaArrowUp className="icon" />
        </div>
)}
    </Wrapper>

  )
};

const Wrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;

  .top-btn{
    font-size:  2.4rem;
    width: 4rem;
    height: 4rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.lightBlue};
    border-radius: 50%;
    position: fixed;
    bottom: 2rem;
    right: 1rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .icon {
      animation: animation 1.2s linear infinite alternate-reverse;
    }

    @keyframes animation {
      0% {
        transform: translateY(-0.3rem);
      }
      100% {
        transform:  translateY(0.5rem);
      }
      
    }
  }
  

`;

export default GoTo;