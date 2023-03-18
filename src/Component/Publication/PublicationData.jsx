import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';
import PublicationLeftColumn from './PublicationLeftColumn';
import LIstBookAndJournals from '../Home/LIstBookAndJournals';



const PublicationData = () => {
    return (
        <Wrapper>
            <div className="mainAbout">
                <div className="container">
                    <div className='all-about-section col-12 d-flex'>
                        <div className="left-side-bar col-3">
                            <PublicationLeftColumn />
                        </div>
                        <div className="middle-column col-8">
                            <div className="right-corner-menu d-flex item-center ">
                                <NavLink to={'/'}>Home</NavLink>
                                <HiChevronRight className='rightArrow' /> Publications
                            </div>
                            <div className="container">
                                <div className="upSection">
                                    <div className="heading border-tool d-flex item-center">
                                        <h2>MAZEDAN </h2> &nbsp;<h2 className='color-orange'>PUBLICATIONS</h2>
                                    </div>
                                    <div className="text-justify">
                                        <p>Mazedan publishes the research results, review articles and survey report and events proceedings in form of Journal, Book, Thesis, Report, Proceedings.</p>
                                        <div className="mdl">
                                            <h3>Mazedan Digital Library</h3>
                                            <p>A digital platform name Mazedan Digital Library is used to publish and access the published data. It is a research, discovery and networking platform containing:</p>
                                            <ul className='container'>
                                                <li>The Full-Text Collection of all MIRA publications, including journals, conference proceedings, technical magazines, newsletters and books </li>
                                                <li>A collection of curated and hosted full-text publications from select publishers.</li>
                                                <li>The MIRA Guide to Research Literature, a comprehensive bibliographic database focused exclusively on the Engineering and Medical research</li>
                                                <li>A richly interlinked set of connections among authors, works, institutions, and specialized communities. It accomplish and is carrying out an important stake in research communication process, while in its debut publications it could achieve highly constructive research articles</li>
                                                <li>To say, in emphasis that all the Journals emanated from the MIRA are proud declared to be Free Journals. Mazedan Journals are strictly committed to publish blind peer reviewed original research articles treating modern research sciences and its manifold applications, in relation with to any field of study on par with international standards in respective journals..</li>
                                                <li>The aim of the Mazedan publication is to disseminate original, scientific, theoretical or applied research in the field of Engineering and allied fields, to dispense a platform for publishing results and research with a strong empirical component, to aqueduct the significant gap between research and practice by promoting the publication of original, novel, industry-relevant research, to seek original and unpublished research papers based on theoretical or experimental works for the publication globally, to publish original, theoretical and practical advances in Engineering, Technology, Science, Management, and Humanities, all its related stream, to impart a platform for publishing results and research with a strong empirical component, to create a bridge for significant gap between research and practice by promoting the publication of original, novel, industry-relevant research, to solicit original and unpublished research papers, based on theoretical or experimental works.</li>
                                                <li>Papers for the regular issues of the journal can be submitted, round the year, electronically. For it, respective journal inform to authors time to time for it. After the final acceptance of the paper, based upon the detailed review process, the paper will immediately be published online. However, assignment of the paper to a specific Volume / Issue of the journals will be taken up by the Editorial Board later; and the author will be intimated accordingly. For Theme Based Special Issues, time bound Special Call for Papers will be announced and the same will be applicable for that specific issue only.
                                                </li>
                                                <li>All submitted papers will be reviewed by double blind peer review process which may take minimum 01 to 03 weeks from the date of submission. We are advising to all the author(s), do not submit same paper to the multiple journals. You should wait for review status of paper
                                                </li>
                                                <li>Despite criticisms, peer review is still the only widely accepted method for research validation.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="publish-table">
                                    <h3>Howyou can publish?</h3>
                                    <p>Mazedan publishes the following articles with proper ISBN/ISSN. The publication fee is different for different category.</p>
                                    <table>
                                        <tr className='table-heading-row'>
                                            <th>Publication Category </th>
                                            <th>Procedure</th>
                                            <th>Submission Link</th>
                                        </tr>
                                        <tr>
                                            <th>Journal Article</th>
                                            <td>Upload manuscript in related journal Submission Link</td>
                                            <td><NavLink>Submit Journal Article Here</NavLink></td>
                                        </tr>
                                        <tr>
                                            <th>Book</th>
                                            <td>Send the Manuscript to the given Email ID</td>
                                            <td><NavLink to={""} className='mdl-mail'>publication@mazedan.com</NavLink></td>
                                        </tr>
                                        <tr>
                                            <th>Book Chapter</th>
                                            <td>Send Book Chapter in Available Book Series to the given Email ID</td>
                                            <td><NavLink to={""} className='mdl-mail'>publication@mazedan.com</NavLink></td>
                                        </tr>
                                        <tr>
                                            <th>Conference Proceedings</th>
                                            <td>Fill up the Proceedings Publication form</td>
                                            <td><NavLink>Proceedings-Publication form</NavLink></td>
                                        </tr>
                                        <tr>
                                            <th>Master/Doctorial Thesis</th>
                                            <td>Send Thesis report to the given Email ID</td>
                                            <td><NavLink to={""} className='mdl-mail'>publication@mazedan.com</NavLink></td>
                                        </tr>
                                        <tr>
                                            <th>Survey Report </th>
                                            <td>Send the report to the given Email ID</td>
                                            <td><NavLink to={""} className='mdl-mail'>publication@mazedan.com</NavLink></td>
                                        </tr>
                                    </table>
                                </div>
                                <hr />
                                <LIstBookAndJournals />
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
        hr{
        border: 1px solid ${({ theme }) => theme.colors.orange};
        margin: 0.5rem 0;
        }
        .left-side-bar{
        margin: 2rem 0;
        }
        .middle-column{
            background-color: ${({ theme }) => theme.colors.white};
            padding-bottom: 2%;
            padding-top: 2%;
            margin-top: -5%;
            .heading{
                margin: 1.2rem 0;
            }
                h3{
                margin-top: 0.5rem;
                margin-bottom: 0.4rem;
            }
            ul{
                list-style: square;
                margin-top: 0.5rem;
            }
            hr{
                border: 2px solid ${({ theme }) => theme.colors.lightBlue};
                margin-top: 5rem;
            }
            .right-corner-menu{
                justify-content: end;
                transform: translate(-2%, -100%);
                    a{
                    color: ${({ theme }) => theme.colors.lightBlue};
                    }
                    .rightArrow{
                        font-size: 20px;
                    }
            }
            .publish-table{
                table, tr, th, td{
                    border: 1px solid ${({ theme }) => theme.colors.lightBlue};
                    border-collapse: collapse;
                    padding: 5px 5px 5px 1rem;
                    text-align: justify;
                    margin-top: 1rem;
                }
                .table-heading-row{
                    th{
                        text-align: center;
                    }
                }
                .mdl-mail{
                    text-decoration: none;
                    color: ${({ theme }) => theme.colors.black};
                }
            }
        } 
    }
`;
export default PublicationData;