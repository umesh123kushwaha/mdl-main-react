import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';
import AwardsLeftColumn from './AwardsLeftColumn';



const AwardsData = () => {
    return (
        <Wrapper>
            <div className="mainAbout">
                <div className="container">
                    <div className='all-about-section col-12 d-flex'>

                        <div className="left-side-bar col-3">
                            <AwardsLeftColumn />

                        </div>
                        <div className="middle-column col-8">
                            <div className="right-corner-menu d-flex item-center ">
                                <NavLink to={'/'}>Home</NavLink>
                                <HiChevronRight className='rightArrow' /> Awards

                            </div>
                            <div className="container">
                                <div className="upSection">
                                    <div className="heading border-tool d-flex item-center">
                                        <h2>MAZEDAN </h2> &nbsp;<h2 className='color-orange'>AWARDS</h2>
                                    </div>
                                    <div className="about-content">
                                        <p>Mazedan International Research Academy gives the awards in different fields every year. The academy find the young brains and motivate them to do research. The awards are given at national level. Whether you are an Inspiring teacher, scientist, creative aspirants, curious students or researcher; we are cordially inviting you to join the academy and learn about ongoing researches in the field. Since its inception in 2010, the Mazedan Awards has sought to encourage innovation in the use and mobilization of biodiversity data shared through the Mazedan network. Calls for nominations go out each spring, and interested students must submit applications to the Head of Delegation through online process. The national delegations are responsible for forwarding the nominations to the Mazedan Secretariat. Graduate students wishing to be considered for the nominations should consult the websites. The Mazedan Secretariat and national Participants whose nominees are selected to receive the award are announced just before annual Governing Board meeting.</p>

                                    </div>
                                </div>
                                <hr/>
                                <div className="research-award">
                                    <div className='heading-young-section d-flex item-center'>
                                        <h3 className='color-orange'>MAZEDAN YOUNG RESEARCHER AWARD</h3>
                                    </div>
                                    <div className="membership-details">
                                        <p>This Scheme is instituted by the academy to recognize and reward young Indian scientists, below the age of 40 years, with outstanding track record in different fields, a deep commitment to find innovative solutions to major problems related to human diseases and potential for high quality research. Applicants must have a regular position in a University / Organization / Institute in their country and should be engaged in research and development and have publications arising from research done as an independent investigator in the country.</p>
                                        <div>
                                            <h3>Eligibility</h3>
                                            <p>Applicant below the age of 40 years</p>
                                            <ul className='container'>
                                                <li>Scientist from Academic and Research Institutes across India</li>
                                                <li>Researchers residing in India</li>
                                                <li>An individual who is a doctoral candidate, or who received the degree not more than five (5) years prior to submission due date. Co-authorship is acceptable provided that the Young Researcher applicant is the primary author.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3>Selection</h3>
                                            <p>All applications will be subjected to a review process</p>
                                            <ul className='container'>
                                                <li>An awards subcommittee selected by the Executive Committee will determine the winners based on the submitted nominations.</li>
                                                <li>Awards will be presented at the annual function on national science day. All finalists will be subject to a background check.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3>Nature of Award:</h3>
                                            <ul className='container'>
                                                <li>Recipients of the award receive a certificate of recognition.</li>
                                                <li>Recipients will get the life membership of Mazedan.</li>
                                                <li>No cash prize will be given.</li>
                                            </ul>
                                        </div>
                                        <h3>Processing Fee</h3>
                                        <p>An amount of Rs. 500/- has to be deposited by the applicant through online transfer</p>
                                        <div>
                                        <h3>Nominations:</h3>
                                        <p>Requirements and content recommendations include the following</p>
                                        <ul className='container'>
                                                <li>At least two supporting letters from colleagues which state why the nominator feels the nominee is deserving of the award (with specific supporting examples given)</li>
                                                <li>Resume (or equivalent)</li>
                                            </ul>
                                        </div>
                                       

                                    </div>


                                </div>
                                <hr/>
                                <div className="teachers-award">
                                    <div className='heading-young-section d-flex item-center'>
                                        <h3 className='color-orange'>MAZEDAN BEST TEACHER AWARD</h3>
                                    </div>
                                    <div className="membership-details">
                                        <p>This award recognizes outstanding achievement in science education through the motivation, stimulation, and encouragement of an awareness and understanding of the sciences. The Mazedan Awards for Excellence in Mathematics and Science Teaching are the honors bestowed by the Mazedan International Research Academy specifically for K-12 science, technology, engineering, mathematics, and/or computer science teaching. The exemplary teachers recognize for the award each year. Awards are given to science, technology, engineering, mathematics, and/or computer science teachers from India and Turkey. The award recognizes those teachers have both deep content knowledge of the subjects they teach and the ability to motivate and enable students to be successful in those areas. Awardees reflect the expertise and dedication of the Nation's teaching corps, and they demonstrate the positive impact of excellent teachers on student achievement</p>
                                        <div>
                                            <h3>Eligibility</h3>
                                            <p>Applicants must:</p>
                                            <ul className='container'>
                                                <li>Teach science, technology, engineering, mathematics, and/or computer science as part of their contracted teaching responsibilities at the K-6 grade level in a public (including charter) or private school.</li>
                                                <li>Hold at least a bachelor's degree from an accredited institution.</li>
                                                <li>Be full-time employees of the school or school district as determined by state and district policies, with responsibilities for teaching students no less than 50% of the school's allotted instructional time.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3>Selection</h3>
                                            <p>All applications will be subjected to a review process</p>
                                            <ul className='container'>
                                                <li>An awards subcommittee selected by the Executive Committee will determine the winners based on the submitted nominations.</li>
                                                <li>Awards will be presented at the annual function on national science day. All finalists will be subject to a background check.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3>Nature of Award:</h3>
                                            <ul className='container'>
                                                <li>Recipients of the award receive a certificate of recognition.</li>
                                                <li>Recipients will get the life membership of Mazedan.</li>
                                                <li>No cash prize will be given.</li>
                                            </ul>
                                        </div>
                                        <h3>Processing Fee</h3>
                                        <p>An amount of Rs. 500/- has to be deposited by the applicant through online transfer</p>
                                        <h3>Nominations:</h3>
                                        <p>Anyone—principals, teachers, parents, students, or members of the general public—may nominate exceptional individuals who teach science, technology, engineering, mathematics, and/or computer science in grades K-6 for this award year. To submit a nomination, the following information is required: Teacher's name, Email address, School contact information Nominations may be submitted for more than one teacher. Teachers may also initiate the application process themselves</p>
                                        <div>
                                            <h3>Once a teacher is nominated or initiates the application process, the teacher will receive an email invitation to continue the application process. The invitation will include login nformation for accessing the online application system.</h3>
                                            <p>Requirements and content recommendations include the following:</p>
                                            <ul className='container'>
                                                <li>At least two supporting letters from colleagues which state why the nominator feels the nominee is deserving of the award (with specific supporting examples given)</li>
                                                <li>Resume (or equivalent)</li>
                                            </ul>
                                        </div>

                                    </div>


                                </div>
                                <div className="awardees-row">
                                    <div className=" heading border-tool d-flex item-center">
                                        <h2>MAZEDAN </h2> &nbsp; <h2 className='color-orange'>AWARDEES</h2>
                                    </div>
                                    <div className="award-table">
                                        <hr/>
                                        <div className="row1 d-flex  ">
                                            <div className="col-3">
                                                <p><b>YEAR</b></p>
                                            </div>
                                            <div className="col-3">
                                                <p><b>YEAR</b></p>
                                            </div>
                                            <div className="col-3">
                                                <p><b>AWARDEE</b></p>
                                            </div>
                                            <div className="col-3">
                                                <p><b>ORGANIZATION</b></p>
                                            </div>

                                        </div>
                                        <hr/>
                                        <div className="row2 d-flex ">
                                            <div className="col-3">
                                                <p>2000</p>
                                            </div>
                                            <div className="col-3">
                                                <p>Best Teacher Award</p>
                                            </div>
                                            <div className="col-3">
                                                <p>Dr. Sanjay Singh</p>
                                            </div>
                                            <div className="col-3">
                                                <p>IIT Delhi</p>
                                            </div>

                                        </div>
                                        <hr/>
                                        <div className="row3 d-flex ">
                                            <div className="col-3">
                                                <p>2000</p>
                                            </div>
                                            <div className="col-3">
                                                <p>Young Researcher Award</p>
                                            </div>
                                            <div className="col-3">
                                                <p>Dr. Sunil Kuma</p>
                                            </div>
                                            <div className="col-3">
                                                <p>IIT Roorkee</p>
                                            </div>

                                        </div>
                                        <hr/>
                                        <div className="row4 d-flex ">
                                            <div className="col-3">
                                                <p>1999</p>
                                            </div>
                                            <div className="col-3">
                                                <p>Young Researcher Award</p>
                                            </div>
                                            <div className="col-3">
                                                <p>RC Singh</p>
                                            </div>
                                            <div className="col-3">
                                                <p>MMU Mullaana</p>
                                            </div>

                                        </div>
                                        <hr/>
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
               /* transform: translateY(-3%); */
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
                }
                .right-corner-menu{
                    justify-content: end;
                    transform: translate(-2%, -100%);
                        .rightArrow{
                            font-size: 20px;
                        }
                }
                .upSection{
                    .about-content{
                            text-align: justify;
                        }
                    
                }

                   

               
                

                           
                    } 
                    .research-award{
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
                    .awardees-row{
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
                                align-items: center;
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
export default AwardsData;