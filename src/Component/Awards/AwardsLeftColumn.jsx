import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const AwardsLeftColumn = () => {
    return (
        <Wrapper>
            <div className="main ">
                <div className='first-column'>
                    <div className="column-heading display-flex">
                        <h3>MAZEDAN AWARDS HOME</h3>
                    </div>
                    <div className="content-data">
                        <div>  &#10146; <NavLink> Mazedan Awards</NavLink></div>
                        <div> &#10146; <NavLink> List of Awardees</NavLink></div>
                        <div> &#10146; <NavLink>FAQ</NavLink></div>
                    </div>
                </div>
                <div className="second-column">
                    <div className="column-heading display-flex">
                        <h3>Journal Finder</h3>
                    </div>
                    <div className="content-data d-flex item-cent">
                        <input type="text" placeholder='Select Journals' className='col-10' />
                        <input type="text" placeholder='Select Journals' className='col-10' />
                        <button className='col-2'>Go</button>
                    </div>
                </div>
                <div className="third-column">
                    <div className="column-heading display-flex">
                        <h3>Past Awardee Highlights</h3>
                    </div>
                    <div className="content-data">
                        <h4>Melissa Collins Tennessee | 2008</h4>
                        <p>John P. Freeman Optional School in the Memphis City Schools since 1999. While holding a variety of roles both within her school and within the teaching profession, her overall goal has been to educate and mentor urban students as they become future scientists and mathematicians. Most recently Melissa fulfilled a vision she had a year ago, holding a white coat ceremony for students entering the STEM club. These 3rd-8th grade students will embark on a year of STEM activities and competitions.</p>
                        <img src="./images/books-pic/awardperson.png" alt="" />
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