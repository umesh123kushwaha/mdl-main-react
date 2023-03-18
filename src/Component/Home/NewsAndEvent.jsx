import React from 'react';
import { FaBullhorn, FaExternalLinkAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NewsAndEvent = () => {
    return (
        <Wrapper>
            <div className="main">
                <div className='main-heading display-flex col-12 '>
                    <div className="news display-flex col-6">
                        <div className="news-heading display-flex col-12">
                            <FaBullhorn className='event-icons' />
                            <h3>News & Announcement</h3>
                        </div>
                    </div>
                    <div className="events display-flex col-6">
                        <div className="event-heading display-flex col-12">
                            <FaRegCalendarAlt className='event-icons' />
                            <h3>Upcoming Events</h3>
                        </div>
                    </div>
                </div>
                <div className="data d-flex item-center col-12">
                    <div className="news-data col-6 ">
                        <marquee width="100%" direction="up" height="" scrolldelay="130">
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
                    <div className="event-data col-6">
                        <marquee width="100%" direction="up" height="" scrolldelay="150">
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
                <div className="read-more-btn col-12 d-flex item-center">
                <NavLink to=''className="read-more-button"><i>Read More</i> </NavLink>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    .main{
        background-color: ${({ theme }) => theme.colors.MinDarkWhite};
            .main-heading{
               .news{
                    .news-heading{
                        padding: 0.5rem 0;
                        background-color: ${({ theme }) => theme.colors.orange};
                    }
                }
                .event-icons{
                    font-size: 2rem;
                    margin-right: 0.5rem;
                    color: ${({ theme }) => theme.colors.MinDarkWhite};
                }
                .events{
                    .event-heading{
                        padding: 0.5rem 0;
                        background-color: ${({ theme }) => theme.colors.lightBlue};
                    }
               }
            }
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
            .data{
               a{
                text-decoration: none;
                color: #151414;
                    &:hover{
                        color: black;
                    }
               }
              
            }
    }
`;
export default NewsAndEvent;