import React from 'react'
import styled from 'styled-components'
import {  FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { HiChevronRight } from 'react-icons/hi'
import AboutLeftColumn1 from './About/AboutLeftColumn1'

const ContactUs = () => {
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
                                    <HiChevronRight className='rightArrow' /> contact
                                   
                                </div>
                            <div className="">
                                <div className="about-heading display-flex">
                                    <h2>CONTACT </h2> &nbsp;<h2 className='color-orange'> US</h2>
                                </div>
                                <div className="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7794729358307!2d77.29649821744384!3d28.546347500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce504c95a7a15%3A0xe2813a94f31d994f!2sMazedan%20International%20Research%20Academy!5e0!3m2!1sen!2sin!4v1678185925500!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                
                               
                                
                              
                                <div className="contact container display-flex" id='contact'>

                                    {/* <div className='border-tool d-flex item-center'><h2>MAZEDAN </h2> &nbsp; <h2> CONTACTS</h2></div> */}
                                    <div className="address display-flex col-12">
                                        <div className="add1 col-6 display-flex flex-column">
                                            <h3>REGISTERED OFFICE</h3>
                                            <p className='text-center'>J3, Abul Fazal Enclave, Part-1, Okhla, Delhi-110025 India | Tel: +91 9532485166</p>
                                        </div>
                                        <div className="add2 col-6 display-flex flex-column">
                                            <h3>HEAD OFFICE</h3>
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
            .right-corner-menu{
                justify-content: end;
                transform: translate(-2%, -100%);
                    .rightArrow{
                        font-size: 20px;
                    }
            }
            .about-heading{
                margin-bottom: 1.1rem;
            }
            .contact{
                height: 30rem;
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
export default ContactUs;