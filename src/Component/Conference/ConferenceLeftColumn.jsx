import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const ConferenceLeftColumn = () => {
    return (
        <Wrapper>
            <div className="main ">
                <div className='first-column'>
                    <div className="column-heading display-flex">
                        <h2>MAZEDAN EVENTS HOME</h2>
                    </div>
                    <div className="content-data fs-1-5">
                        <div>  &#10146; <NavLink>Conferences & Workshops</NavLink></div>
                        <div> &#10146; <NavLink> Past Conferences</NavLink></div>
                        <div> &#10146; <NavLink> Conference Collaboration</NavLink></div>
                        <div> &#10146; <NavLink> Proceedings Publication</NavLink></div>
                        <div> &#10146; <NavLink> Program Sponsorship</NavLink></div>
                    </div>
                </div>
                <div className="second-column">
                    <img src="./images/conference-left-img.png" alt="" />
                </div>
                <div className="third-column">
                    <div className="column-heading display-flex">
                        <h2>Journal News and Updates</h2>
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
                <div className="fourth-column">
                    <div className="column-heading display-flex">
                        <h2>Proceedings Publication</h2>
                    </div>
                    <div className="content-data">
                            <p className='text-center'>Benefit from our experience and offered services to turn your conference publication into worldwide accessible science</p>
                            <p className='text-center second-paragraph'>Publish your Conference Proceedings with Mazedan Digital Library
                            </p>
                            <NavLink to={""} className='t-decoration col-12 display-flex'>
                                <div className="btn text-center display-flex">PROCEEDINGS PUBLICATION FORM</div>
                            </NavLink>
                    </div>
                </div>
                <div className="fifth-column">
                    <div className="column-heading display-flex">
                        <h3>Become the Conference Sponsor</h3>
                    </div>
                    <div className="content-data">
                            <p className='text-center'>Enhance your visibility and outreach to the academic and business community by becoming a Sponsor of our Events.</p>
                            <p className='text-center second-paragraph'>A place to find technology investment and licensing partners</p>
                            <NavLink to={""} className='t-decoration col-12 display-flex'>
                                <div className="btn text-center display-flex">SPONSORHIP FORM</div>
                            </NavLink>
                    </div>
                </div>
                <div className="last-column">
                    <div className="column-heading display-flex">
                        <h2>Become the Conference Partner</h2>
                    </div>
                    <div className="content-data">
                            <p className='text-center'>Mazedan welcomes you to become our conference partner.</p>
                            <p className='text-center second-paragraph'>In a role of lead organizer</p>
                            <NavLink to={""} className='t-decoration col-12 display-flex'>
                                <div className="btn text-center display-flex">CONFERENCE PARTNER FORM</div>
                            </NavLink>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    .main{
        .second-column{
            margin: 1rem 0;
            img{
                width: 100%;
                height: auto;
            }
        }
        .third-column{
            margin-top: 5rem;
            .content-data{
            line-height: normal;
            a{
            color: ${({ theme }) => theme.colors.orange};
            }
                .scroll-data {
                    margin-top: 1rem;
                    div:first-child{
                        gap: 1rem;
                        margin-bottom: 0.3rem;
                    }
                }
            }
        }
        .btn{
            font-size: 12px;
            padding: 0 2rem;
            background-color: ${({ theme }) => theme.colors.MinDarkWhite};
            border: 1px solid #ce0ffd;
            color: #ce0ffd;
            margin: 1rem 0;
            transition: all 0.3s ease;
            &:hover{
            background-color: ${({ theme }) => theme.colors.orange};
            color: ${({ theme }) => theme.colors.white};
            }
        }
    .fourth-column{
        margin-top: 5rem;
        .content-data{
        background-color: #bdd7ee;
         color: #385723;
         line-height: normal;
        }
        .second-paragraph{
            margin-top: 1rem;
            color: #ce0ffd;
        }
        /* .proceed-form-btn{
            margin-top: 1rem;
            p{
                color: #ce0ffd;
            }
        } */
        
    }
    .fifth-column{
        margin-top: 5rem;
        .column-heading{
            background-color: ${({ theme }) => theme.colors.orange};
        }
        .content-data{
            line-height: normal;
            color: ${({ theme }) => theme.colors.lightBlue};
            border-top: 5px solid ${({ theme }) => theme.colors.lightBlue};
            border-bottom: 2px solid ${({ theme }) => theme.colors.lightBlue};
            .second-paragraph{
                margin-top: 1rem;
                color:${({ theme }) => theme.colors.orange};
            }
        
           
        }
    }
    .last-column{
        margin-top: 5rem;
        .content-data{
            line-height: normal;
            color: ${({ theme }) => theme.colors.lightBlue};
            .second-paragraph{
                margin-top: 1rem;
                color:${({ theme }) => theme.colors.orange};
            }
        
           
        }
    }
}
`;
export default ConferenceLeftColumn;