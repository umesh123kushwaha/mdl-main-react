import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';
import TrainingLeftColumn from './TrainingLeftColumn';
import AOS from "aos";
import { useEffect } from 'react';


const TrainingData = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: "ease",
        });
      }, []);
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
                                <NavLink className='color-lightBlue' to={'/'}>Home</NavLink>
                                <HiChevronRight className='rightArrow' /> Training

                            </div>
                            <div className="container" id='training-courses'>
                                <div className="upSection">
                                    <div className="heading border-tool d-flex item-center" data-aos="fade-left">
                                        <h2>MAZEDAN </h2> &nbsp;<h2 className='color-orange'>TRAINING & COURSES</h2>
                                    </div>
                                    <div className="text-justify fs-1-2">
                                        <p data-aos="fade-up">Mazedan International Research Academy offers a wide range of certificate courses ranging from banking, computer, fashion, agriculture, medical, arts, commerce and many more. With the support of long list of certificate courses the students can easily make out their best choice as per their interest and career goals. There are various kinds of certificates available: from undergraduate to graduate and advanced certificates. You'll be introduced to a proven model for delivering outcome-based development and training. This will cover Purpose & Assessment, Planning & Preparation, Presentation & Facilitation, and Performance & Evaluation. New trainers seeking tips and techniques and experienced trainers who want to increase learner engagement and refresh their toolkit will benefit by earning this trainer certificate. Acquire a strong foundation in proven training and facilitation techniques that is balanced in theory and practical application.</p>

                                    </div>
                                </div>
                                <hr/>
                                <div className="research-award">
                                    <div className='heading border-tool d-flex item-center' data-aos="fade-left">
                                    <h2>MAZEDAN </h2> &nbsp;<h2 className='color-orange'>CERTIFICATION COURSES</h2>
                                    </div>
                                    <div className="text-justify fs-1-2">
                                        <p data-aos="fade-up">There are various kinds of certificates available: from undergraduate to graduate and advanced certificates. Certificates serve a multitude of purposes for different students: they are sometimes used to bridge the gap between different phases of academic study, or to provide additional professional training and qualifications. There are certificates in a wide variety of subjects in Arts, Humanities, Business, Biological and Life Sciences, Engineering, Technology,Natural Sciences and even more. The variety of different certificates can be overwhelming - don't let it stop you! Start your search by looking at the most popular certificates listed below. Today, Mazedan International Research Academy offers a wide range of certificate courses ranging from banking, computer, fashion, agriculture, medical, arts, commerce and many more. With the support of long list of certificate courses the students can easily make out their best choice as per their interest and career goals. Characteristics of certificate courses offered by MIRA are
                                        </p>
                                        <ul className='container'>
                                            <li data-aos="fade-up">Regular intervention of conferences, group discussion and seminars within the courses.
                                            </li>
                                            <li data-aos="fade-up">Detail course learning with deep modules strategy.</li>
                                            <li data-aos="fade-up">Practical knowledge along with theoretical classes.</li>
                                            <li data-aos="fade-up">Availability of latest research and development tools along with fitted laboratories, humanity class rooms, arts club and many more.</li>
                                            <li data-aos="fade-up">Strict discipline and world class study infrastructure of international standard where student can easily go through their course modules.</li>
                                            <li data-aos="fade-up">Analyzes and regular examination of students performance through internal exams.</li>
                                            <li data-aos="fade-up">Short term certificate courses are also available with duration of six months.</li>
                                        </ul>
                                    </div>
                                    <div className="course-table fs-1-2">
                                        <table data-aos="fade-up">
                                            <tr className='table-heading-row color-orange'data-aos="fade-up">
                                                <th data-aos="fade-up">Course</th>
                                                <th data-aos="fade-up">Minimum Eligibility</th>
                                                <th data-aos="fade-up">Fee (₹)</th>
                                                <th data-aos="fade-up">Duration</th>
                                                <th data-aos="fade-up">Course Starting Date</th>
                                                <th data-aos="fade-up">Training Institute Location</th>
                                            </tr>
                                             <tr data-aos="fade-up">
                                                <th data-aos="fade-up">Industrial Automation</th>
                                                <td data-aos="fade-up">B.Tech / BE / B.Sc.</td>
                                                <td data-aos="fade-up">30,000</td>
                                                <td data-aos="fade-up">3 Months</td>
                                                <td data-aos="fade-up">1st January 2020</td>
                                                <td data-aos="fade-up">Pune, India</td>
                                            </tr>
                                            <tr data-aos="fade-up">
                                                <th data-aos="fade-up">Mechatronics System Design</th>
                                                <td data-aos="fade-up">Diploma / Degree in Engineering or equivalent</td>
                                                <td data-aos="fade-up">25,000</td>
                                                <td data-aos="fade-up">3 Months</td>
                                                <td data-aos="fade-up">1st January 2020</td>
                                                <td data-aos="fade-up">Pune, India</td>
                                            </tr>
                                            <tr data-aos="fade-up">
                                                <th data-aos="fade-up">Computer Hardware & Network Management</th>
                                                <td data-aos="fade-up">Intermediate</td>
                                                <td data-aos="fade-up">25,000</td>
                                                <td data-aos="fade-up">3 Months</td>
                                                <td data-aos="fade-up">1st January 2020</td>
                                                <td data-aos="fade-up">Meerut, India</td>
                                            </tr>
                                            <tr data-aos="fade-up">
                                                <th data-aos="fade-up">Refrigeration and Air-conditioning</th>
                                                <td data-aos="fade-up">Diploma/ Degree in Engineering or equivalent</td>
                                                <td data-aos="fade-up">25,000</td>
                                                <td data-aos="fade-up">3 Months</td>
                                                <td data-aos="fade-up">1st January 2020</td>
                                                <td data-aos="fade-up">Meerut, India</td>
                                            </tr>
                                            <tr data-aos="fade-up">
                                                <th data-aos="fade-up">Store Keeping and Production Inventory Management</th>
                                                <td data-aos="fade-up">Intermediate</td>
                                                <td data-aos="fade-up">25,000</td>
                                                <td data-aos="fade-up">3 Months</td>
                                                <td data-aos="fade-up">1st January 2020</td>
                                                <td data-aos="fade-up">Meerut, India</td>
                                            </tr>
                                            <tr data-aos="fade-up">
                                                <th data-aos="fade-up">Shop floor control and management</th>
                                                <td data-aos="fade-up">Any Degree</td>
                                                <td data-aos="fade-up">25,000</td>
                                                <td data-aos="fade-up">3 Months</td>
                                                <td data-aos="fade-up">1st January 2020</td>
                                                <td data-aos="fade-up">Meerut, India</td>
                                            </tr>
                                            <tr data-aos="fade-up">
                                                <th data-aos="fade-up">CNC Machines Operation and Maintenance</th>
                                                <td data-aos="fade-up">Intermediate </td>
                                                <td data-aos="fade-up">25,000</td>
                                                <td data-aos="fade-up">3 Months</td>
                                                <td data-aos="fade-up">1st January 2020</td>
                                                <td data-aos="fade-up">Meerut, India</td>
                                            </tr>
                                            <tr data-aos="fade-up">
                                                <th data-aos="fade-up">Industrial Maintenance Management and Practice</th>
                                                <td data-aos="fade-up">Intermediate </td>
                                                <td data-aos="fade-up">25,000</td>
                                                <td data-aos="fade-up">3 Months</td>
                                                <td data-aos="fade-up">1st January 2020</td>
                                                <td data-aos="fade-up">Meerut, India</td>
                                            </tr>
                                            <tr data-aos="fade-up">
                                                <th data-aos="fade-up">Industrial Fire safety and management</th>
                                                <td data-aos="fade-up">Intermediate </td>
                                                <td data-aos="fade-up">25,000</td>
                                                <td data-aos="fade-up">3 Months</td>
                                                <td data-aos="fade-up">1st January 2020</td>
                                                <td data-aos="fade-up">Riyadh Saudi Arabia</td>
                                            </tr>
                                           
                                        </table>
                                        <div className="register-btn col-12 display-flex">
                                            <NavLink to={""} className='t-decoration'>
                                            <div className="btn display-flex fs-1-2" data-aos="zoom-in">Register Online</div>
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