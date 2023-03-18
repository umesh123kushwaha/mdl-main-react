import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const HeroSection = ({ title, titleParagraph, button, buttonSecond, notification }) => {
    return (
        <Wrapper>
            <div className="main">
                <div className="container">
                    <div className="about-data">
                        <div className="AboutData col-12 d-flex item-center">

                            <div className="heading col-8">
                                <h3>MAZEDAN</h3>
                                <h2>{title}</h2>


                                <p>{titleParagraph} </p>
                            </div>
                            <div className='right-menu col-4 d-flex flex-column'>
                                <div className='col-12 d-flex item-center '>
                                    <NavLink className='top-btn t-decoration display-flex'>{button}</NavLink>
                                </div>
                                <div className='col-12 d-flex item-center'>
                                  {buttonSecond &&(
                                       <NavLink className='bottom-btn t-decoration display-flex'>{buttonSecond}</NavLink>
                                  )}
                                   
                                </div>
                            </div>
                        </div>
                              {notification &&(
                                <div className="slide-text display-flex">
                                <div className='slide-row col-10 display-flex'>
                                  
                                    <NavLink><button className='button'>UPDATES</button></NavLink>
                                    <marquee>{notification} </marquee>
    
                                </div>
                            </div>
                              )
                                
                              }
                        
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
  .main{
      background-color: ${({ theme }) => theme.colors.darkBlue};
      .container{
          padding-top: 4rem;
          padding-bottom: 4rem;
          .about-data{
              margin-bottom: 3rem;
              .AboutData{
                  color: ${({ theme }) => theme.colors.white};
                  .heading{
                    h3{
                      color: ${({ theme }) => theme.colors.orange};
                      font-size: 1.4rem;
                    }
                    h2{
                      font-size: 2.5rem;
                    }
                    p{
                      border-top: 2px solid ${({ theme }) => theme.colors.white};
                      margin-top: 3rem;
                      letter-spacing: 3px;
                      line-height: 2rem;
                      font-size: 1.1rem;
                    }
                  }
              }
            .right-menu{
              align-items: end;
              div{
                    justify-content: end;
              }
                a{
                    padding: 0.8rem;
                    min-width: 60%;
                    color: ${({ theme }) => theme.colors.white};
                }
              .top-btn{
                background-color: #92d050;
                border-radius: 20px;
                font-size: 1.1rem;
                margin-bottom: 3rem;
                }
                .bottom-btn{
                background-color: ${({ theme }) => theme.colors.orange};
                border-radius: 20px;
                font-size: 1.1rem;
                }
            }
          }
        .slide-text{
          .slide-row{
            background-color: #2e75b6;
            color: ${({ theme }) => theme.colors.white};
            font-weight: 900;
            margin: 2rem 0;
            button{
              background-color: ${({ theme }) => theme.colors.orange};
              border-radius: 0;
              font-weight: 900;
            }
          }
        }
      }
  }
  
`;
export default HeroSection;