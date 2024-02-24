import React from 'react'
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components'

const TrainingLeftColumn = () => {
    return (
        <Wrapper>
            <div className="main ">
                <div className='first-column'>
                    <div className="column-heading display-flex">
                        <h3>MAZEDAN TRAINING HOME</h3>
                    </div>
                    <div className="content-data">
                        <div>  &#10146; <HashLink to={''}> About the Courses</HashLink></div>
                        <div> &#10146; <HashLink to={''}> Certification Courses</HashLink></div>
                        <div> &#10146; <HashLink to={''}> Trainings</HashLink></div>
                        <div> &#10146; <HashLink to={''}> Sponsored Courses</HashLink></div>
                        <div> &#10146; <HashLink to={''}> FAQ</HashLink></div>
                    </div>
                </div>
                <div className="second-column">
                    <div className="column-heading display-flex">
                        <h3> Get the Training & certification</h3>
                    </div>
                    <div className="content-data">
                        <div className="register-btn col-12 display-flex">
                            <NavLink to={""} className='t-decoration'>
                                <div className="btn display-flex">Register Online</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="gallery">
                    <div className="column-heading display-flex">
                        <h3>GALLERY</h3>
                    </div>
                    <div className='content-data'>
                        <img src="./images/Certificate-sample.png" alt="" />
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
                background-color: #bdd7ee;
            }
            .btn{
                padding: 0 2rem;
                background-color: ${({ theme }) => theme.colors.MinDarkWhite};
                border: 1px solid ${({ theme }) => theme.colors.lightBlue};
                color: ${({ theme }) => theme.colors.lightBlue};
                margin: 2rem 0;
                transition: all 0.3s ease;
                &:hover{
                background-color: ${({ theme }) => theme.colors.orange};
                color: ${({ theme }) => theme.colors.white};
                }
            }
        }
        .gallery{
            margin-top: 5rem;
            .content-data{
                img{
                    width: 100%;
                    height: 200px;
                }
            }
        }
}       
`;
export default TrainingLeftColumn;