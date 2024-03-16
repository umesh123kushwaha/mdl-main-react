import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components'

const MemberLeftColumn1 = () => {
    return (
        <Wrapper>
            <div className="main ">
                <div className='first-column'>
                    <div className="column-heading display-flex">
                        <h2>MAZEDAN MEMBER’S HOME</h2>
                    </div>
                    <div className="content-data">
                        <div>  &#10146; <HashLink to={''}> Mazedan Membership</HashLink></div>
                        <div> &#10146; <HashLink to={'#types-fee'}> Membership Types and Fee</HashLink></div>
                        <div> &#10146; <HashLink to={'#benefits-row'}> Benefits</HashLink></div>
                        <div> &#10146; <HashLink to={'#term-condition'}> Terms & Conditions</HashLink></div>
                    </div>
                </div>
                <div className="second-column">
                    <div className="column-heading display-flex">
                        <h2>BENEFITS</h2>
                    </div>
                    <div className="content-data">
                        <p>As a member of Mazedan, you'll receive access to select content, research guide, article writing guide, plagiarism check facility, product discounts, and more.</p>
                    </div>
                </div>
                <div className="third-column">
                    <div className="column-heading display-flex">
                        <h2>Member's News and Updates</h2>
                    </div>
                    <div className="content-data">
                        <marquee width="100%" height="200px" direction="up" scrolldelay="150">
                            <div className='scroll-data d-flex flex-column'>
                                <NavLink to=''>
                                    <div className='d-flex item-center'>
                                        <FaExternalLinkAlt className='external-icon' />
                                        <h5>July 2023</h5>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  veniam, pariatur accusamus ipsa necessitatibus?</p>
                                    </div>
                                </NavLink>
                            </div>
                            <div className='scroll-data d-flex flex-column'>
                                <NavLink to=''>
                                    <div className='d-flex item-center'>
                                        <FaExternalLinkAlt className='external-icon' />
                                        <h5>July 2023</h5>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  veniam, pariatur accusamus ipsa necessitatibus?</p>
                                    </div>
                                </NavLink>
                            </div>
                            <div className='scroll-data d-flex flex-column'>
                                <NavLink to=''>
                                    <div className='d-flex item-center'>
                                        <FaExternalLinkAlt className='external-icon' />
                                        <h5>July 2023</h5>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  veniam, pariatur accusamus ipsa necessitatibus?</p>
                                    </div>
                                </NavLink>
                            </div>
                            <div className='scroll-data d-flex flex-column'>
                                <NavLink to=''>
                                    <div className='d-flex item-center'>
                                        <FaExternalLinkAlt className='external-icon' />
                                        <h5>July 2023</h5>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  veniam, pariatur accusamus ipsa necessitatibus?</p>
                                    </div>
                                </NavLink>
                            </div>
                            <div className='scroll-data d-flex flex-column'>
                                <NavLink to=''>
                                    <div className='d-flex item-center'>
                                        <FaExternalLinkAlt className='external-icon' />
                                        <h5>July 2023</h5>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  veniam, pariatur accusamus ipsa necessitatibus?</p>
                                    </div>
                                </NavLink>
                            </div>
                        </marquee>
                    </div>
                </div>
                <div className="fifth-column">
                    <div className="features container content-data">
                        <h4>Features Required:</h4>
                        <ul>

                            <li>A form with Payment Gateway integration</li>
                            <li>Certificate generate as PDF</li>
                            <li>Mail Acknowledgement</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`

    .main{
          .content-data{
                line-height: normal;
                font-size: 1.5rem;
            }
        .second-column{
            background-color: #bdd7ee;
            margin-top: 5rem;
            color: ${({ theme }) => theme.colors.orange};
          
        }
        .third-column{
            /* background-color: #bdd7ee; */
            margin-top: 5rem;
            /* color: ${({ theme }) => theme.colors.orange}; */
            .content-data{
            /* line-height: normal; */
                .scroll-data {
                    margin-top: 1rem;
                    div:first-child{
                        gap: 1rem;
                        margin-bottom: 0.3rem;
                    }
                    .external-icon{
                        color: ${({ theme }) => theme.colors.orange};
                    }
                }
            }
        }
        .fifth-column{
            background-color:${({ theme }) => theme.colors.orange};
            font-size: 1.3rem;
            margin-top: 30rem ;
            .content-data{
                background: none;
            }
            ul{
                margin-left: 1rem;
                padding: 1rem 0;
                
            }
        }
    }


           
`;
export default MemberLeftColumn1;