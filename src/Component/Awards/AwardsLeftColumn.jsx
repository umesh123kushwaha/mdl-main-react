import React from 'react'
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components'
import AOS from "aos";
import { useEffect } from 'react';

const AwardsLeftColumn = () => {
    useEffect(() => {
        AOS.init({
          
          duration: 1000,
        
        });
      }, []);
    return (
        <Wrapper>
            <div className="main ">
                <div className='first-column' data-aos="fade-up">
                    <div className="column-heading display-flex">
                        <h2 data-aos="fade-right">MAZEDAN AWARDS HOME</h2>
                    </div>
                    <div className="content-data">
                        <div data-aos="fade-left">  &#10146; <HashLink to={''}> Mazedan Awards</HashLink></div>
                        <div data-aos="fade-right"> &#10146; <HashLink to={'#awardees-row'}> List of Awardees</HashLink></div>
                        <div data-aos="fade-left"> &#10146; <HashLink to={''}>FAQ</HashLink></div>
                    </div>
                </div>
                <div className="second-column" data-aos="fade-up">
                    <div className="column-heading display-flex">
                        <h2 data-aos="fade-left">Journal Finder</h2>
                    </div>
                    <div className="content-data d-flex item-cent">
                        <input data-aos="fade-right" type="text" placeholder='Select Journals' className='col-10' />
                        <input data-aos="fade-left" type="text" placeholder='Select Journals' className='col-10' />
                        <button data-aos="zoom-in" className='col-2'>Go</button>
                    </div>
                </div>
                <div className="third-column" data-aos="fade-up">
                    <div className="column-heading display-flex">
                        <h2 data-aos="fade-up">Past Awardee Highlights</h2>
                    </div>
                    <div className="content-data">
                        <h4 data-aos="fade-up">Melissa Collins Tennessee | 2008</h4>
                        <p data-aos="fade-up">John P. Freeman Optional School in the Memphis City Schools since 1999. While holding a variety of roles both within her school and within the teaching profession, her overall goal has been to educate and mentor urban students as they become future scientists and mathematicians. Most recently Melissa fulfilled a vision she had a year ago, holding a white coat ceremony for students entering the STEM club. These 3rd-8th grade students will embark on a year of STEM activities and competitions.</p>
                        <img data-aos="zoom-in" src="./images/books-pic/awardperson.png" alt="" />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`

    .main{
        .first-column{
             background-color: ${({ theme }) => theme.colors.white};
            .content-data{
                font-size: 1.3rem;
            }
        }
        .second-column{
            margin-top: 5rem;
            .column-heading{
                background-color: ${({ theme }) => theme.colors.orange};
            }
            .content-data{
                border-top: 5px solid ${({ theme }) => theme.colors.lightBlue};
                border-bottom: 2px solid ${({ theme }) => theme.colors.lightBlue};
                gap: 1rem;
                input{
                    border: none;
                    outline: none;
                    background-color: #7d7979;
                }
            }
        }
        .third-column{
            margin-top: 5rem;
            .content-data{
                line-height: normal;
                color: #385723;
                p{
                    margin: 0.5rem 0;
                    text-align: justify;
                }
                img{
                    width: 100%;
                }
            }
        }
    }
           
`;
export default AwardsLeftColumn;