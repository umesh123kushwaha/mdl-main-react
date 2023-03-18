import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';
import TrainingLeftColumn from './TrainingLeftColumn';



const TrainingData = () => {
    return (
        <Wrapper>
            <div className="mainAbout">
                <div className="container">
                    <div className='all-about-section col-12 d-flex'>

                        <div className="left-side-bar col-3">
                            <TrainingLeftColumn />

                        </div>
                        <div className="middle-column col-8">
                            <div className="right-corner-menu d-flex item-center ">
                                <NavLink to={'/'}>Home</NavLink>
                                <HiChevronRight className='rightArrow' /> Training

                            </div>
                            <div className="container">
                                <div className="upSection">
                                    <div className="heading border-tool d-flex item-center">
                                        <h2>MAZEDAN </h2> &nbsp;<h2 className='color-orange'>TRAINING & COURSES</h2>
                                    </div>
                                    <div className="text-justify">
                                        <p>Mazedan International Research Academy offers a wide range of certificate courses ranging from banking, computer, fashion, agriculture, medical, arts, commerce and many more. With the support of long list of certificate courses the students can easily make out their best choice as per their interest and career goals. There are various kinds of certificates available: from undergraduate to graduate and advanced certificates. You'll be introduced to a proven model for delivering outcome-based development and training. This will cover Purpose & Assessment, Planning & Preparation, Presentation & Facilitation, and Performance & Evaluation. New trainers seeking tips and techniques and experienced trainers who want to increase learner engagement and refresh their toolkit will benefit by earning this trainer certificate. Acquire a strong foundation in proven training and facilitation techniques that is balanced in theory and practical application.</p>

                                    </div>
                                </div>
                                <hr/>
                                <div className="research-award">
                                    <div className='heading border-tool d-flex item-center'>
                                    <h2>MAZEDAN </h2> &nbsp;<h2 className='color-orange'>CERTIFICATION COURSES</h2>
                                    </div>
                                    <div className="text-justify">
                                        <p>There are various kinds of certificates available: from undergraduate to graduate and advanced certificates. Certificates serve a multitude of purposes for different students: they are sometimes used to bridge the gap between different phases of academic study, or to provide additional professional training and qualifications. There are certificates in a wide variety of subjects in Arts, Humanities, Business, Biological and Life Sciences, Engineering, Technology,Natural Sciences and even more. The variety of different certificates can be overwhelming - don't let it stop you! Start your search by looking at the most popular certificates listed below. Today, Mazedan International Research Academy offers a wide range of certificate courses ranging from banking, computer, fashion, agriculture, medical, arts, commerce and many more. With the support of long list of certificate courses the students can easily make out their best choice as per their interest and career goals. Characteristics of certificate courses offered by MIRA are
                                        </p>
                                        <ul className='container'>
                                            <li>Regular intervention of conferences, group discussion and seminars within the courses.
                                            </li>
                                            <li>Detail course learning with deep modules strategy.</li>
                                            <li>Practical knowledge along with theoretical classes.</li>
                                            <li>Availability of latest research and development tools along with fitted laboratories, humanity class rooms, arts club and many more.</li>
                                            <li>Strict discipline and world class study infrastructure of international standard where student can easily go through their course modules.</li>
                                            <li>Analyzes and regular examination of students performance through internal exams.</li>
                                            <li>Short term certificate courses are also available with duration of six months.</li>
                                        </ul>
                                    </div>
                                    <div className="course-table">
                                        <table>
                                            <tr className='table-heading-row color-orange'>
                                                <th>Course</th>
                                                <th>Minimum Eligibility</th>
                                                <th>Fee (₹)</th>
                                                <th>Duration</th>
                                                <th>Course Starting Date</th>
                                                <th>Training Institute Location</th>
                                            </tr>
                                             <tr>
                                                <th>Industrial Automation</th>
                                                <td>B.Tech / BE / B.Sc.</td>
                                                <td>30,000</td>
                                                <td>3 Months</td>
                                                <td>1st January 2020</td>
                                                <td>Pune, India</td>
                                            </tr>
                                            <tr>
                                                <th>Mechatronics System Design</th>
                                                <td>Diploma / Degree in Engineering or equivalent</td>
                                                <td>25,000</td>
                                                <td>3 Months</td>
                                                <td>1st January 2020</td>
                                                <td>Pune, India</td>
                                            </tr>
                                            <tr>
                                                <th>Computer Hardware & Network Management</th>
                                                <td>Intermediate</td>
                                                <td>25,000</td>
                                                <td>3 Months</td>
                                                <td>1st January 2020</td>
                                                <td>Meerut, India</td>
                                            </tr>
                                            <tr>
                                                <th>Refrigeration and Air-conditioning</th>
                                                <td>Diploma/ Degree in Engineering or equivalent</td>
                                                <td>25,000</td>
                                                <td>3 Months</td>
                                                <td>1st January 2020</td>
                                                <td>Meerut, India</td>
                                            </tr>
                                            <tr>
                                                <th>Store Keeping and Production Inventory Management</th>
                                                <td>Intermediate</td>
                                                <td>25,000</td>
                                                <td>3 Months</td>
                                                <td>1st January 2020</td>
                                                <td>Meerut, India</td>
                                            </tr>
                                            <tr>
                                                <th>Shop floor control and management</th>
                                                <td>Any Degree</td>
                                                <td>25,000</td>
                                                <td>3 Months</td>
                                                <td>1st January 2020</td>
                                                <td>Meerut, India</td>
                                            </tr>
                                            <tr>
                                                <th>CNC Machines Operation and Maintenance</th>
                                                <td>Intermediate </td>
                                                <td>25,000</td>
                                                <td>3 Months</td>
                                                <td>1st January 2020</td>
                                                <td>Meerut, India</td>
                                            </tr>
                                            <tr>
                                                <th>Industrial Maintenance Management and Practice</th>
                                                <td>Intermediate </td>
                                                <td>25,000</td>
                                                <td>3 Months</td>
                                                <td>1st January 2020</td>
                                                <td>Meerut, India</td>
                                            </tr>
                                            <tr>
                                                <th>Industrial Fire safety and management</th>
                                                <td>Intermediate </td>
                                                <td>25,000</td>
                                                <td>3 Months</td>
                                                <td>1st January 2020</td>
                                                <td>Riyadh Saudi Arabia</td>
                                            </tr>
                                           
                                        </table>
                                        <div className="register-btn col-12 display-flex">
                                            <NavLink to={""} className='t-decoration'>
                                            <div className="btn display-flex">Register Online</div>
                                            </NavLink>
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
                    margin-top: 0.5rem;
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
                .course-table{
                    margin: 1rem 0;
                    table, th, td {
                        border: 1px solid ${({ theme }) => theme.colors.orange};
                        border-collapse: collapse;
                        text-align: center;
                        padding: 5px;
                    }
                    .table-heading-row{
                        background-color: ${({ theme }) => theme.colors.MinDarkWhite};
                        /* color: ${({ theme }) => theme.colors.orange}; */
                    }
                    .btn{
                        padding: 0 2rem;
                        background-color: ${({ theme }) => theme.colors.MinDarkWhite};
                        border: 1px solid ${({ theme }) => theme.colors.lightBlue};
                        color: ${({ theme }) => theme.colors.lightBlue};
                        margin-top: 2rem;
                        transition: all 0.3s;
                        &:hover{
                        background-color: ${({ theme }) => theme.colors.orange};
                        color: ${({ theme }) => theme.colors.white};
                        }
                        &:active{
                            transform: scale(0.98);
                        }
                    }
                }

            } 
                   
            


    }
`;
export default TrainingData;