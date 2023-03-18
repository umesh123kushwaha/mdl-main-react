import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';
import Register from './Register';
import MemberLeftColumn1 from './MemberLeftColumn1';


const MembershipData = () => {
    return (
        <Wrapper>
            <div className="mainAbout">
                <div className="container">
                    <div className='all-about-section col-12 d-flex'>

                        <div className="left-side-bar col-3">
                            <MemberLeftColumn1 />
                        </div>
                        <div className="aboutData col-8">
                            <div className="right-corner-menu d-flex item-center ">
                                <NavLink to={'/'}>Home</NavLink>
                                <HiChevronRight className='rightArrow' /> Membership

                            </div>
                            <div className="container">
                                <div className="heading border-tool d-flex item-center">
                                    <h2>MAZEDAN </h2> &nbsp;<h2> MEMBERSHIP</h2>
                                </div>
                                <div className="about-content">
                                    <p>This is a very useful step to work towards the exchange of information and ideas and to create research and development activities in the fields of medicine, dentistry, engineering and technology to serve humanity and promote general welfare. Mazedan welcomes all professional doctors, engineers, professors, to exchange information and ideas with us. And also takes the initiative to connect science, engineering and medical institutions and universities in this network; According to our objective of facilitating this, we call on the network with us. Membership categories include two types of membership, individual and institutional. The category of Individual Member consists of four  grades, such as Fellow Member, Executive Member, Life Member and Associate Member whereas Institutional Membership includes Corporate Institutions and Educational Institutions.</p>
                                    <div className="registerMember">
                                        <Register />
                                    </div>
                                </div>
                                <div className="types-fee">
                                    <div className='heading border-tool d-flex item-center'>
                                        <h2>MEMBERSHIP </h2> &nbsp;<h2>TYPES AND FEE</h2>
                                    </div>
                                    <div className="membership-details">
                                        <p>Membership Types Mazedan welcome all the research scholars, professors, R&D professionals and industry persons to join us as the professional member of Mazedan. Our objective is to facilitate the exchange of information and ideas freely and promote research activities. Membership categories include two types of membership, individual and institutional. The category of Individual Member consists of four grades, such as Fellow Member, Executive Member, Life Member and Associate Member whereas Institutional Membership includes Corporate Institutions and Educational Institutions</p>

                                        <h3>Fellow Member:</h3>
                                        <p>The grade of Fellow is conferred on Professor, Doctors, Engineers and Scientists and shall be conferred only on the invitation of the Mazedan upon a person of distinction and outstanding qualifications, and who has made extraordinary contributions in research.</p>

                                        <h3>Executive Member:</h3>
                                        <p>In this grade, the executive committee considers membership of the person based on significant contribution in Mazedan. The executive members vote in the constitution of the executive body.</p>

                                        <h3>Life Member:</h3>
                                        <p>fter successful completion of the three years of the associate membership, the executive committee can recommend converting the associate grade into the life membership.</p>

                                        <h3>Associate Member:</h3>
                                        <p>The grade of Associate Member is conferred to those who have made a significant professional contribution and demonstrated professional competence in the relevant fields. The candidate shall be a PhD scholar from an accredited educational Institution can directly be entered in the grade of Associate Member. Graduate and/or Postgraduate Doctors and Engineers can also join to Mazedan as Associate Member.</p>

                                        <div className="membership-table">
                                            <div className="heading-row col-12 d-flex">
                                                <div className="column1 col-3">
                                                    <h4>Membership Grades</h4>
                                                </div>
                                                <div className="column2 col-3">
                                                    <h4>Qualification/eligibility </h4>
                                                </div>
                                                <div className="column3 col-3">
                                                    <h4>Application Procedure </h4>
                                                </div>
                                                <div className="column4 col-2">
                                                    <h4>One time Fee</h4>
                                                </div>
                                                <div className="column5 col-1">
                                                    <h4>Validity</h4>
                                                </div>
                                            </div>
                                            <div className="first-row d-flex">
                                                <div className="column1 col-3 d-flex item-center">
                                                    <h4>Fellow Member</h4>
                                                </div>
                                                <div className="column2 col-3 d-flex item-center">
                                                    <p>Significant contribution in research, Retired or Senior Professor, Scientist, Industry Person at least 20 years experience.</p>
                                                </div>
                                                <div className="column5 col-3 d-flex item-center">
                                                    <p>Apply online or directly invited by the Mazedan executive board. </p>
                                                </div>
                                                <div className="column4 col-2 d-flex item-center">
                                                    <p>No fee</p>
                                                </div>
                                                <div className="column5 col-1 d-flex item-center">
                                                    <p>3 years</p>
                                                </div>
                                            </div>
                                            <div className="second-row d-flex">
                                                <div className="column1 col-3 d-flex item-center">
                                                    <h4>Executive Member</h4>
                                                </div>
                                                <div className="column2 col-3 d-flex item-center">
                                                    <p>Significant contribution to Mazedan</p>
                                                </div>
                                                <div className="column3 col-3 d-flex item-center">
                                                    <p>Directly invited by the executive board.  </p>
                                                </div>
                                                <div className="column4 col-2 d-flex item-center">
                                                    <p>No fee</p>
                                                </div>
                                                <div className="column5 col-1 d-flex item-center">
                                                    <p>15 years</p>
                                                </div>
                                            </div>
                                            <div className="third-row d-flex">
                                                <div className="column1 col-3 d-flex item-center">
                                                    <h4>Life Member </h4>
                                                </div>
                                                <div className="column2 col-3 d-flex item-center">
                                                    <p>Three years successful completion of Mazedan associate membership.</p>
                                                </div>
                                                <div className="column3 col-3 d-flex item-center">
                                                    <p>Apply online  </p>
                                                </div>
                                                <div className="column4 col-2 d-flex item-center">
                                                    <p>50 $</p>
                                                </div>
                                                <div className="column5 col-1 d-flex item-center">
                                                    <p>15 years</p>
                                                </div>
                                            </div>
                                            <div className="fourth-row d-flex">
                                                <div className="column1 col-3 d-flex item-center">
                                                    <h4>Associate Member</h4>
                                                </div>
                                                <div className="column2 col-3 d-flex item-center">
                                                    <p>Graduate</p>
                                                </div>
                                                <div className="column3 col-3 d-flex item-center">
                                                    <p>Apply online  </p>
                                                </div>
                                                <div className="column4 col-2 d-flex item-center">
                                                    <p>50 $</p>
                                                </div>
                                                <div className="column5 col-1 d-flex item-center">
                                                    <p>3 years</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className="benefits-row">
                                    <div className=" heading border-tool d-flex item-center">
                                        <h2>MAZEDAN </h2> &nbsp; <h2>P BENEFITS AND PRIVILEGES</h2>
                                    </div>
                                    <div className="data-row">
                                        <p>Mazedan endeavour to accumulate researchers, academics, doctors, scientists, engineering professionals and also universities, institutes, on a global platform to promote new ideas, ideas and latest trends to create a promising and bright future for mankind. Therefore, we have provided a lot of free research tools on Mazedan's platform. We have created Digital Library with easy and free access of research database by any scholar from anywhere. By becoming a member of Mazedan one can also gain access to research tools that are limited to the public. Members of Mazedan get the benefit of fee waiver and discounts in the entry of Mazedan conferences, and other activities. There are many benefits to joining with Mazedan, some of which are outlined in the points below.</p>
                                        <ul>
                                            <li> <span className="square-icon">&#10065;</span>  <p> Free online access to all conference publications and journal publications by Mazedan Associated Network.</p> </li>
                                            <li> <span className="square-icon">&#10065;</span>  <p>Mazedan Associate Network provides financial support for research work in all engineering areas and more.</p> </li>
                                            <li> <span className="square-icon">&#10065;</span>  <p>Get a chance to be a part of the conference, seminar organizing member</p> </li>
                                            <li> <span className="square-icon">&#10065;</span>  <p>Possibility to become a member of the editorial board of research journals</p> </li>
                                            <li> <span className="square-icon">&#10065;</span>  <p>Members can avail free plagiarism scan facility of their research material through Mazedan. Mazedan uses the Turnitin for plagiarism check</p> </li>
                                            <li> <span className="square-icon">&#10065;</span>  <p>Members can get research assistants in article writing, publishing and experimentation</p> </li>
                                            <li> <span className="square-icon">&#10065;</span>  <p>Discount on registration fee (10% - 15%) for technical and academic conferences organized by Mazedan Associate Network.</p> </li>
                                            <li> <span className="square-icon">&#10065;</span>  <p>Empower your knowledge by attending scientific seminars with discounted fees on the latest trends and research topics.</p> </li>
                                            <li> <span className="square-icon">&#10065;</span>  <p>All members can avail ID cards and membership certificates, which will be dispatched 1-2 months after membership approval. </p> </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="term-condition">
                                    <div className='heading border-tool d-flex item-center'>
                                        <h2>MAZEDAN </h2> &nbsp; <h2> TERMS & CONDITIONS</h2>

                                    </div>
                                    <div className="data-row">
                                        <p>Membership is granted on the basis of the following conditions.</p>
                                        <ul>
                                            <li> <span className="square-icon">&#10065;</span>
                                                <p> To renew the membership, a new application has to be filled based on the (new) terms and conditions prevailing then and there</p>
                                            </li>
                                            <li> <span className="square-icon">&#10065;</span>
                                                <p>All members will, by default, be in committees of any research and development activities, the conference, seminar, or workshop.</p>
                                            </li>
                                            <li> <span className="square-icon">&#10065;</span>
                                                <p>Any changes to your affiliation, address, and email ID should be updated on the member's portal</p>
                                            </li>
                                            <li> <span className="square-icon">&#10065;</span>
                                                <p>If a Mazedan officer contacts you for any specific purpose/research activity then you will have to reply immediately. For any particular reason, if Mazedan Official is not able to reach you at the given address (or is not receiving the appropriate response), the subscription is cancelled without notice</p>
                                            </li>
                                            <li> <span className="square-icon">&#10065;</span>
                                                <p> It is to comply with all the rules and regulations of Mazedan and its associated network from time to time.</p>
                                            </li>
                                        </ul>
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
            .heading{
            margin: 1.2rem 0;
            }
            h3{
            margin-top: 0.5rem;
            margin-bottom: 0.4rem;
            }
            .right-corner-menu{
            justify-content: end;
            transform: translate(-2%, -100%);
                .rightArrow{
                    font-size: 20px;
                }
                a{
                    color: ${({ theme }) => theme.colors.lightBlue};
                }
            }
            .about-content{
                text-align: justify;
            }
            .about-heading{
                h2:last-child{
                    color: ${({ theme }) => theme.colors.orange};
                }
            }
        } 
        .types-fee{
            h2:last-child{
                color: ${({ theme }) => theme.colors.orange};
            }
            .membership-details{
                text-align: justify;
                .membership-table{
                    padding-top: 0.5rem;
                    .first-row, .second-row, .third-row, .fourth-row{
                        gap: 1rem;
                        padding: 1rem;
                    }
                    .second-row{
                        border-top: 1px solid #d7d5d5;
                        border-bottom: 1px solid #d7d5d5;
                    }
                    .third-row{
                        border-bottom: 1px solid #d7d5d5;
                    }
                    .heading-row{
                        background-color: ${({ theme }) => theme.colors.orange};
                        padding: 0.5rem 0;
                        .column1{
                        padding-left: 1rem;
                    }
                    }
                }
            }
        }
        .benefits-row{
            div{
                h2:last-child{
                    color: ${({ theme }) => theme.colors.orange};
                }
            }
        }
        .data-row{
            ul{
                list-style: none;
                margin-top: 0.5rem;
                li{
                    display: flex;
                    margin-bottom: 0.3rem;
                    span{
                        margin-right: 1rem;
                    }
                }
            }
        }
        .term-condition{
            .border-tool{
                h2:last-child{
                    color: ${({ theme }) => theme.colors.orange}
                }
            }
        }
    }
`;
export default MembershipData;