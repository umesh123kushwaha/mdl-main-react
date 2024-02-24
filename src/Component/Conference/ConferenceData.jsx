import React from 'react'
import styled from 'styled-components'
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { HiChevronRight } from 'react-icons/hi'
import ConferenceLeftColumn from './ConferenceLeftColumn'

const ConferenceData = () => {
    return (
        <Wrapper>
            <div className="mainAbout">
                <div className="container">
                    <div className='all-about-section col-12 d-flex'>
                        <div className="left-side-bar col-3">
                            <ConferenceLeftColumn />
                        </div>
                        <div className="aboutData col-8">
                            <div className="right-corner-menu d-flex item-center ">
                                <NavLink className='color-lightBlue' to={'/'}>Home</NavLink>
                                <HiChevronRight className='rightArrow' /> Conference
                            </div>
                            <div className="container">
                                <div className="about-heading border-tool d-flex item-center">
                                    <h2>MAZEDAN </h2> &nbsp;<h2 className='color-orange'>BOOKS & JOURNALS</h2>
                                </div>
                                <div className="about-content">
                                    <p>Mazedan International Research Academy is a unique platform for publishing online open-access refereed journals of the highest quality and significance in all areas of Academic Research and Technology. Open access allows everyone to have unrestricted use and reuse of scientific content as per creative commons license provided on each journal's homepage. As an Open Access Publisher, we are providing an opportunity for global scholars to get involved in updating themselves with the ongoing research. We host international, open access, peer-reviewed academic journals. Whether you are an Inspiring teacher, scientist, creative aspirants, curious students or researcher; we are cordially inviting you to browse our website and learn about ongoingresearches in the field. In order to maintain manuscript quality, each manuscript submitted shall undergo the peer review process. All the Journal with Mazedan follows a rigorous peer-review process to retain high standards of published articles.</p>
                                </div>
                                <div className="conference-table">
                                    <h3>Upcoming Conferences</h3>
                                    <table>
                                        <tr>
                                            <th className='col-2'>CONFERENCE DATE</th>
                                            <th className='col-5'>CONFERENCE TITLE </th>
                                            <th className='col-2'> VENUE </th>
                                            <th className='col-3'>SUBMISSION DEADLINE</th>
                                        </tr>
                                        <tr>
                                            <td>14-15 November,2020</td>
                                            <td><NavLink>International Conference on Engineering System Design-2020</NavLink></td>
                                            <td>
                                                <img src="./images/india-flag.png" alt="" />
                                                <p>New Delhi India</p>
                                            </td>
                                            <td>25 August, 2020 <NavLink className='sub-open'>(Paper Submission Open)</NavLink></td>
                                        </tr>
                                        <tr>
                                            <td>2-3 January,2021</td>
                                            <td><NavLink>International Conference on Vehicle Vibration Problems-2021</NavLink></td>
                                            <td>
                                                <img src="./images/turkey-flag.png" alt="" />
                                                <p>Ankara Turkey</p>
                                            </td>
                                            <td><span>10 October, 2020</span><NavLink className='sub-open'>(Paper Submission Open)</NavLink></td>
                                        </tr>
                                    </table>
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
            }
            .about-heading{
                margin-bottom: 1.1rem;
            }
        }
        .conference-table{
            margin-top: 5rem;
            h3{
                margin: 1rem 0;
            }
            img{
                width: 100%;
            }
            table, td, tr, th{
                border: 2px solid ${({ theme }) => theme.colors.lightBlue};
                border-collapse: collapse;
                padding: 10px;
                text-align: center;
            }
            th{
                background-color: #c5e0b4;
            }
            .sub-open{
                font-size: 16px;
                text-decoration: none;
                color: ${({ theme }) => theme.colors.orange};
            }
            a{
                color: ${({ theme }) => theme.colors.lightBlue};
            }
        }
    }
`;
export default ConferenceData;