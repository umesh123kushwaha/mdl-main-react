import React from 'react'
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components'
import AOS from "aos";
import { useEffect } from 'react';

const TrainingLeftColumn = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: "ease",
        });
      }, []);
    return (
        <Wrapper>
            <div className="main ">
                <div className='first-column'>
                    <div className="column-heading display-flex">
                        <h2>MAZEDAN TRAINING HOME</h2>
                    </div>
                    <div className="content-data">
                        <div>  &#10146; <HashLink to={''}> About the Courses</HashLink></div>
                        <div> &#10146; <HashLink to={''}> Certification Courses</HashLink></div>
                        <div> &#10146; <HashLink to={''}> Trainings</HashLink></div>
                        <div> &#10146; <HashLink to={''}> Sponsored Courses</HashLink></div>
                        <div> &#10146; <HashLink to={''}> FAQ</HashLink></div>
                    </div>
                </div>
                <div className="second-column" data-aos="fade-up">
                    <div className="column-heading display-flex">
                        <h2 data-aos="fade-left"> Get the Training & certification</h2>
                    </div>
                    <div className="content-data">
                        <div className="register-btn col-12 display-flex">
                            <NavLink to={""} className='t-decoration'>
                                <div className="btn display-flex" data-aos="zoom-in">Register Online</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="gallery" data-aos="fade-up">
                    <div className="column-heading display-flex">
                        <h2 data-aos="fade-right">GALLERY</h2>
                    </div>
                    <div className='content-data'>
                        <img src="./images/Certificate-sample.png" alt="" data-aos="flip-up" />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    .main{
        .second-column{
            margin-top: 5rem;
            .content-data{
                background-color: #bdd7ee;
            }
            .btn{
                padding: 0 2rem;
                background-color: ${({ theme }) => theme.colors.MinDarkWhite};
                border: 1px solid ${({ theme }) => theme.colors.lightBlue};
                color: ${({ theme }) => theme.colors.lightBlue};
                margin: 2rem 0;
                transition: all 0.3s ease;
                &:hover{
                background-color: ${({ theme }) => theme.colors.orange};
                color: ${({ theme }) => theme.colors.white};
                }
            }
        }
        .gallery{
            margin-top: 5rem;
            .content-data{
                img{
                    width: 100%;
                    height: 200px;
                }
            }
        }
}       
`;
export default TrainingLeftColumn;