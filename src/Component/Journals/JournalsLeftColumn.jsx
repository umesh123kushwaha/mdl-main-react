import React from 'react'
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link';

const JournalLeftColumn = () => {
    return (
        <Wrapper>
            <div className="main ">
                <div className='column1'>
                    <div className="column-heading display-flex">
                        <h3>MAZEDAN PUBLICATION HOME</h3>
                    </div>
                    <div className="content-data">
                        <div>  &#10146; <HashLink to={''}>Mazedan Books & Journals</HashLink></div>
                        <div> &#10146; <HashLink to={'#policy'}> Publishing Policies</HashLink></div>
                        <div> &#10146; <HashLink to={'#faq'}> FAQ</HashLink></div>
                        
                    </div>
                </div>
                <div className="second-column">
                    <div className="column-heading display-flex">
                        <h3>Publication Matrices</h3>
                    </div>
                    <div className="content-data">
                        <div><span className="square-icon">&#10065;</span>  <NavLink>Total Active Journals- 12</NavLink></div>
                        <div><span className="square-icon">&#10065;</span>  <NavLink>Total Published Books- 15</NavLink></div>
                        <div><span className="square-icon">&#10065;</span>  <NavLink>Theses Online- 14</NavLink></div>
                        <div><span className="square-icon">&#10065;</span>  <NavLink>Technical Reports- 8</NavLink></div>
                        <div><span className="square-icon">&#10065;</span>  <NavLink>Magazines- 5</NavLink></div>
                    </div>
                </div>
                <div className="third-column">
                    <div className="column-heading display-flex">
                        <h3>Journal News and Updates</h3>
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
                <div className="forth-column">
                    <div className="column-heading display-flex">
                        <h3>Journal Management System</h3>
                    </div>
                    <div className="content-data display-flex">
                        <NavLink className="col-6">
                            Journal News and Updates
                        </NavLink>
                        <NavLink className="col-6">
                            Submit/Track Manuscript
                        </NavLink>
                    </div>

                </div>
                <div className="plagscan-column">
                    <img src="./images/Plagscan-logo.png" alt="" />
                </div>
                <div className="journal-finder-column">
                    <div className="column-heading display-flex">
                        <h3>Journal Finder</h3>
                    </div>
                    <div className="content-data d-flex item-cent">
                        <input type="text" placeholder='Select Journals' className='col-10' />
                        <button className='col-2'>Go</button>
                    </div>
                </div>
                <div className="last-column">
                    <div className="column-heading display-flex">
                        <h3>Featured Journals</h3>
                    </div>
                    <div className="content-data display-flex">
                        
                        <FaChevronLeft className='slide-icon' />
                        <img src="./images/books-pic/1.png" alt="" />
                        <FaChevronRight className='slide-icon'/>
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
                div{
                    display: flex;
                    align-items: center;
                    .square-icon{
                        margin-right: 1rem;
                    }
                }
            }
        }
        .third-column{
            margin-top: 5rem;
            .content-data{
                background-color: #bdd7ee;
                .scroll-data {
                    margin-top: 0.5rem;
                    a{
                    color: ${({ theme }) => theme.colors.orange};
                    }
                    div:first-child{
                        gap: 1rem;
                    }
                }
            }
        }
        .forth-column{
            margin-top: 5rem;
            .content-data{
                color: #385723;
                background-color: #bdd7ee;
                padding: 0;
                a{
                    padding: 1rem;
                    text-align: center;
                }
                a:last-child{
                    background-color: ${({ theme }) => theme.colors.orange};
                }
            }
        }
        .journal-finder-column{
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
                }
            }
        }
        .last-column{
            margin-top: 5rem;
            .content-data{
                gap: 3rem;
                .slide-icon{
                    font-size: 3rem;
                }
            }
        }
}
        
`;
export default JournalLeftColumn;