import React, { useEffect } from 'react'
import styled from 'styled-components'
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { HiChevronRight } from 'react-icons/hi'
import JournalsLeftColumn from './JournalsLeftColumn'
import LIstBookAndJournals from '../Home/LIstBookAndJournals'
import SelectJournals from './SelectJournals'
import AOS from "aos";
import "aos/dist/aos.css";

const JournalData = () => {
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
                        <div className="left-side-bar col-4">
                            <JournalsLeftColumn />
                        </div>
                        <div className="aboutData col-8">
                            <div className="right-corner-menu d-flex item-center ">
                                <NavLink className='color-lightBlue' to={'/'}>Home</NavLink>
                                <HiChevronRight className='rightArrow' /> Journals
                            </div>
                            <div className="container">
                                <div className="about-heading border-tool d-flex item-center">
                                    <h2>MAZEDAN </h2> &nbsp;<h2 className='color-orange'>BOOKS & JOURNALS</h2>
                                </div>
                                <div className="about-content">
                                    <p>Mazedan International Research Academy is a unique platform for publishing online open-access refereed journals of the highest quality and significance in all areas of Academic Research and Technology. Open access allows everyone to have unrestricted use and reuse of scientific content as per creative commons license provided on each journal's homepage. As an Open Access Publisher, we are providing an opportunity for global scholars to get involved in updating themselves with the ongoing research. We host international, open access, peer-reviewed academic journals. Whether you are an Inspiring teacher, scientist, creative aspirants, curious students or researcher; we are cordially inviting you to browse our website and learn about ongoingresearches in the field. In order to maintain manuscript quality, each manuscript submitted shall undergo the peer review process. All the Journal with Mazedan follows a rigorous peer-review process to retain high standards of published articles.</p>
                                </div>
                                <br />
                                <div className="select-journal-column">
                                    <SelectJournals />
                                </div>
                                <br />
                                <div className="books-row" id='journalList'>
                                    <LIstBookAndJournals />
                                </div>
                                <div className="forth-row">
                                    <div className="border-tool d-flex item-center" data-aos="fade-up">
                                        <h2>PUBLISHING</h2> &nbsp; <h2 className='color-orange'>POLICIES</h2>
                                    </div>
                                    <ol className='container' id='policy'>
                                        <li data-aos="fade-up">ReviewPolicy- Data can be taken from Mazedan.com website</li>
                                        <li data-aos="fade-up">PlagiarismPolicy- Data can be taken from Mazedan.com website</li>
                                    </ol>
                                </div>
                                <div className="contact" id='faq'>
                                    <div className='border-tool d-flex item-center' data-aos="fade-up">
                                        <h2>FREQUENTLY </h2> &nbsp; <h2 className='color-orange'>ASKED QUESTIONS</h2>
                                    </div>
                                    <ol className='container'>
                                        <li data-aos="fade-up">Data can be taken from Mazedan.com website</li>
                                    </ol>
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
            }

            ol{
                margin-top: 1.1rem;
                font-size: 1.2rem;
            }
            .forth-row{
                margin: 1.5rem 0;
            }
        }
    }
`;
export default JournalData