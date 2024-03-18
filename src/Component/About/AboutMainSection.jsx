import React, { useEffect } from 'react'
import styled from 'styled-components'
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import AboutLeftColumn1 from './AboutLeftColumn1'
import { HiChevronRight } from 'react-icons/hi'
import AOS from "aos";

const AboutMainSection = () => {
    useEffect(() => {
        AOS.init({

            duration: 1000,

        });
    }, []);
    return (
        <Wrapper>
            <div className="mainAbout">
                <div className="container">
                    <div className='all-about-section col-12 d-flex'>
                        <div className="left-side-bar col-3">
                            <AboutLeftColumn1 />
                        </div>
                        <div className="aboutData col-8">
                            <div className="right-corner-menu d-flex item-center ">
                                <NavLink className='color-lightBlue' to={'/'}>Home</NavLink>
                                <HiChevronRight className='rightArrow' /> About
                            </div>
                            <div className="container">
                                <div className="about-heading border-tool d-flex item-center">
                                    <h2>MAZEDAN </h2> &nbsp;<h2> AT A GLANCE</h2>
                                </div>
                                <div className="about-content">
                                    <p>Mazedan International Research Academy is an association of international scholars aimed at promoting research and development through different mediums. It brings together researchers, scientists, engineers, scholars, and students to provides a platform for the dissemination of results, new ideas, and practical experiments, which concentrate on both theory and practices, for the benefit of the common man. Mazedan aims to undertake initiatives that are global in nature, Member associations are resolved to work together to address such issues as building capacity and interest in education, research, advancing education policies and practices, and promoting the application of research outcomes around the world. Mazedan is ranked to be in the forefront in the promotion of education with cutting edge interest, active action research, and service with a smile to human concerns performing the way it believes in for a better world. Mazedan popularly acclaimed to be an all-active academic cluster of prominent scientists, professionally matured teachers, and performing researchers across India and overseas committed to promoting value and ethical research among the young research scholars and modern society. Having been backed up by the committed academic assemblage, the Mazedan could climb the academic heights in no time with the support of the authors from India and abroad who have contributed a lot in the terms of their research/ scientific/ technical papers worth presenting to the realm of its kind. Research is an essential tool for entering into the arena of the latest knowledge. It also provides a unique insight into the teaching of higher education in a scientific way. Research in science and technology must be relevant to local, social, and industrial needs, leverage the regional and local competitive advantage, and be goal-oriented. The research must be aimed to cultivate a research culture among the researchers and scientists of the world. The latest research in general and the research in science and technology, in particular, can lead to provide fuel to education towards development. The promotion of research happens to be the core and strategic aim of Mazedan. The focus of academic research in the future will be on developing economic and social factors benefitting the masses at large. This will be achieved through innovation which is the creation of better products, processes, technologies, and ideas that are commercialized in a way to benefit society. Mazedan was established in Ankara on July 29, 2009, and now New Delhi is the headquarter. It has many chapters in different universities all over the world. </p>
                                </div>
                                <div id="aims">
                                    <h3 data-aos="fade-left">Aims & Objective</h3>
                                    <ul>
                                        <li data-aos="fade-up" data-aos-easing="ease-in-sine"> <span className="square-icon">&#10065;</span>  <p> publishes scholarly research through peer-reviewed journals, proceedings, magazines, and books</p> </li>
                                        <li data-aos="fade-up" data-aos-easing="ease-in-sine"> <span className="square-icon">&#10065;</span>  <p>undertakes and carries on research and development work through the establishment of laboratories, experiment centers</p> </li>
                                        <li data-aos="fade-up" data-aos-easing="ease-in-sine"> <span className="square-icon">&#10065;</span>  <p>provide training and conduct advance certification course for the professionals as well as for learners.</p> </li>
                                        <li data-aos="fade-up" data-aos-easing="ease-in-sine"> <span className="square-icon">&#10065;</span>  <p>takes government-funded projects to carry some development work for nation-building.</p> </li>
                                        <li data-aos="fade-up" data-aos-easing="ease-in-sine"> <span className="square-icon">&#10065;</span>  <p>assist any Government/Semi-Government/Private Universities for scientific and technological development by providing or contributing to the remuneration of research, providing or contributing to the awards, prizes, scholarships, grants, sponsorships to the students or others to encourage them</p> </li>
                                        <li data-aos="fade-up" data-aos-easing="ease-in-sine"> <span className="square-icon">&#10065;</span>  <p>establish the local chapters in institutions and universities to impart the research culture and support in various technical activities.</p> </li>
                                        <li data-aos="fade-up" data-aos-easing="ease-in-sine"> <span className="square-icon">&#10065;</span>  <p>establishes, maintains, and operates educational institutions, schools, and hostels for the benefit of the children.</p> </li>
                                        <li data-aos="fade-up" data-aos-easing="ease-in-sine"> <span className="square-icon">&#10065;</span>  <p>engaged in sharing knowledge through the organization of various conferences, seminars, and workshops on various subjects from time to time throughout the year</p> </li>
                                        <li data-aos="fade-up" data-aos-easing="ease-in-sine"> <span className="square-icon">&#10065;</span>  <p>assist the young scholars and researchers by guiding in technical writing, experimentation and in software learnings. </p> </li>
                                    </ul>
                                    <h3 data-aos="fade-left">Vision & Mission</h3>
                                    <ul>
                                        <li data-aos="fade-up" data-aos-easing="ease-in-sine"> <span className="square-icon">&#10065;</span>  <p> Mazedan International Research Academy is committed to establishing all possible strong ethical academic platform to perform its social and academic responsibility by way of conducting worth participating international academic conferences engraved with a rich saga of a system aticprocedure to bring in a life-like experience much to treasure. It to be constantly inspired on and on to be able to produce tireless striving to stretch its arm towards universally acclaimed perfection-designed art that has an opportunity to leave a footprint which encrypted a path to the Research Planet.</p> </li>
                                        <li data-aos="fade-up" data-aos-easing="ease-in-sine"> <span className="square-icon">&#10065;</span>  <p>  World-renowned scientists and scholars are in the editorial teams of different journals. Mazedan publishes research through Mazedan Digital Library as an e-platform.</p> </li>
                                    </ul>
                                </div>
                                <div id="board-persons">
                                    <div className='border-tool d-flex item-center' data-aos="fade-left" data-aos-easing="ease-in-sine">
                                        <h2>MAZEDAN </h2> &nbsp;<h2> EXECUTIVE BOARD</h2>
                                    </div>
                                    <div className="about-persons" id='ExecutiveBoard'>
                                        <p data-aos="zoom-in">The Executive Board is the main Governing Body, consisting of 6 dignitaries and 4 elected Members. The executive board sessions are chaired by the President of Mazedan International Research Academy.
                                            The executive board has full authority to decide on the programme of work; approve projects, programmes, and grants; and adopt or recommend (pending the final approval of the Governing Council) action on matters related to policy, the annual administrative budget, applications for membership and staffing within the fund.
                                            The Board meets three times a year, normally in the months of April, September and December; the exact dates of which are decided upon by the board.As with the governing council, the distribution of the total number of votes in the executive board is now being calculated both on membership and contribution. The dignitaries and governing body members are elected for a five-year term of office within their respective lists and sub-lists and are approved by the governing council.</p>
                                    </div>
                                    <div className="picture col-12 d-flex item-center">
                                        <div className='col-3' data-aos="fade-up">
                                            <div className='image'>
                                                <img src="./images/mazedanStaffPic/1.png" alt="" />
                                                <div className="overlay col-12 d-flex">
                                                    <div className="inner d-flex">
                                                        <div><NavLink to=""><FaTwitter className='social-icons' /></NavLink></div>
                                                        <div><NavLink to=""><FaYoutube className='social-icons' /> </NavLink></div>
                                                        <div><NavLink to=""><FaLinkedinIn className='social-icons' /></NavLink> </div>
                                                        <div><NavLink to=""><FaFacebook className='social-icons' /></NavLink></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='details sweep-to-bottom'>
                                                <h5>TIM COOk</h5>
                                                <p>Social Influencer</p>
                                            </div>
                                        </div>
                                        <div className='col-3' data-aos="fade-up">
                                            <div className='image'>

                                                <img src="./images/mazedanStaffPic/1.png" alt="" />
                                                <div className="overlay col-12 d-flex">
                                                    <div className="inner d-flex">

                                                        <div><NavLink to=""><FaTwitter className='social-icons' /></NavLink></div>
                                                        <div><NavLink to=""><FaYoutube className='social-icons' /> </NavLink></div>
                                                        <div><NavLink to=""><FaLinkedinIn className='social-icons' /></NavLink> </div>
                                                        <div><NavLink to=""><FaFacebook className='social-icons' /></NavLink></div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='details'>
                                                <h5>TIM COOk</h5>
                                                <p>Social Influencer</p>
                                            </div>
                                        </div>
                                        <div className='col-3' data-aos="fade-up">
                                            <div className='image'>
                                                <img src="./images/mazedanStaffPic/1.png" alt="" />
                                                <div className="overlay col-12 d-flex">
                                                    <div className="inner d-flex">
                                                        <div><NavLink to=""><FaTwitter className='social-icons' /></NavLink></div>
                                                        <div><NavLink to=""><FaYoutube className='social-icons' /> </NavLink></div>
                                                        <div><NavLink to=""><FaLinkedinIn className='social-icons' /></NavLink> </div>
                                                        <div><NavLink to=""><FaFacebook className='social-icons' /></NavLink></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='details'>
                                                <h5>TIM COOk</h5>
                                                <p>Social Influencer</p>
                                            </div>
                                        </div>
                                        <div className='col-3' data-aos="fade-up">
                                            <div className='image'>
                                                <img src="./images/mazedanStaffPic/1.png" alt="" />
                                                <div className="overlay col-12 d-flex">
                                                    <div className="inner d-flex">
                                                        <div><NavLink to=""><FaTwitter className='social-icons' /></NavLink></div>
                                                        <div><NavLink to=""><FaYoutube className='social-icons' /> </NavLink></div>
                                                        <div><NavLink to=""><FaLinkedinIn className='social-icons' /></NavLink> </div>
                                                        <div><NavLink to=""><FaFacebook className='social-icons' /></NavLink></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='details'>
                                                <h5>TIM COOk</h5>
                                                <p>Social Influencer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="forth-row" id='BCONSTITUTION'>
                                    <div className="border-tool d-flex item-center" data-aos="fade-up">
                                        <h2>MAZEDAN </h2> &nbsp; <h2>BCONSTITUTION</h2>
                                    </div>
                                    <p className='fs-1-2' data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum deserunt fugiat eos ratione nesciunt laboriosam, voluptates architecto corrupti unde repellendus distinctio et maiores, qui ad doloremque ullam recusandae tempora non.</p>
                                </div>
                                <div id='contact'>
                                    <div className='border-tool d-flex item-center' data-aos="fade-up"><h2>MAZEDAN </h2> &nbsp; <h2> CONTACTS</h2></div>
                                    <div className="address display-flex col-12">
                                        <div className="add1 col-6 display-flex flex-column fs-1-2" data-aos="fade-up">
                                            <h4>REGISTERED OFFICE</h4>
                                            <p className='text-center'>J3, Abul Fazal Enclave, Part-1, Okhla, Delhi-110025 India | Tel: +91 9532485166</p>
                                        </div>
                                        <div className="add2 col-6 display-flex flex-column fs-1-2" data-aos="fade-right">
                                            <h4>HEAD OFFICE</h4>
                                            <p className='text-center'>Oğuzlar Street 184/2, Yenimahalle, Ankara- 06170 Turkey </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-side-bar col-1">
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`

    .mainAbout{
        background-color: ${({ theme }) => theme.colors.MinDarkWhite};
            .all-about-section{
            gap: 1rem
            }
        .left-side-bar{
            margin: 2rem 0;
        }
        .aboutData{
            background-color: ${({ theme }) => theme.colors.white};
            padding-bottom: 2%;
            padding-top: 2%;
            margin-top: -5%;
            .right-corner-menu{
                justify-content: end;
                transform: translate(-2%, -100%);
                .rightArrow{
                    font-size: 20px;
                }
                
            }
            .about-content{
                text-align: justify;
                font-size: 1.2rem;
            }
            .about-heading{
                margin-bottom: 1.1rem;
                h2:last-child{
                    color: ${({ theme }) => theme.colors.orange};
                }
            }
            #aims{
                margin: 1rem 0 1rem 1rem;
                font-size: 1.2rem;
                h3{
                    margin-left: -4%;
                    margin-top: 1rem;
                    margin-bottom: 0.5rem;
                }
                ul{
                    list-style: none;
                    li{
                        line-height: 1.3rem;
                        display: flex;
                        .square-icon{
                            margin-right: 1rem;
                            margin-top: 2px;
                        }
                    }
                }
            }
            #board-persons{
                h2:last-child{
                    color: ${({ theme }) => theme.colors.orange};
                }
                .about-persons{
                    text-align: justify;
                    margin: 1.5rem 0;
                    font-size: 1.2rem;
                }
                .picture{
                    gap: 1rem;
                    .col-3{
                        .image{
                            width: auto;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            position: relative;
                            overflow: hidden;
                            transition: all 0.5s linear;
                            &:hover::after {
                                width: 100%;
                            }
                            img{
                                width: 100%;
                                transition: all 0.2s linear;
                            }

                        }
                        &:hover .image img {
                                transform: scale(1.2);
                            }
                        .overlay{
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;	
                            background: rgba(40,47,57, .67);
                            text-align: center;
                            opacity: 0;
                            transition: all .3s ease;
                            align-items: flex-end;
                            justify-content: center;
                        
                            .inner{
                                border: 1px solid white;
                                height: 95%;
                                width: 95%;
                                align-items: center;
                                justify-content: center;
                                margin-bottom: 4px;
                                gap: 0.6rem;
                                .social-icons{
                                    border: 1px solid ${({ theme }) => theme.colors.white};
                                    color: ${({ theme }) => theme.colors.white};
                                    border-radius: 50%;
                                    font-size: 1.5rem;
                                    padding: 4px;
                                    margin-bottom: -3rem;
                                }
                            }
                        }
                        &:hover .overlay{
                            opacity: 1;
                            
                        }
                        .details{
                            background-color: #282F39 ;
                            border-top: 2px solid ${({ theme }) => theme.colors.orange};
                            color: ${({ theme }) => theme.colors.white};
                            text-align: center;
                            padding: 0.5rem 0;
                            h5{
                                color: ${({ theme }) => theme.colors.lightBlue};
                            }
                        }
                        &:hover .details{
                            background-color: ${({ theme }) => theme.colors.orange};
                            h5,p{
                            color: ${({ theme }) => theme.colors.black};
                            }
                        }
                    }
                }
            }
            .forth-row{
                margin: 1.5rem 0;
                div{
                    h2:last-child{
                        color: ${({ theme }) => theme.colors.orange};
                    }
                }
                p{

                    margin-top: 1.1rem;
                }
            }
            #contact{
                .border-tool{
                    h2:last-child{
                        color: ${({ theme }) => theme.colors.orange}
                    }
                }
                .address{
                    margin-top: 2.5rem;
                    gap: 2rem;
                    line-height: 1.5rem;
                    h4{
                        border-bottom: 1px solid;
                    }
                }
            }
        }
    }
`;
export default AboutMainSection