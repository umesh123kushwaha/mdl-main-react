import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Register = () => {
    return (
        <Wrapper>
            <div className="mainRegister">
                <div className="">
                    <div className="section col-12 d-flex item-center">
                        <div className="register-section col-8">
                            <div className="container d-flex flex-column">
                                <h4>Become them professional member of Mazedan</h4>
                                <h2>Register Now!</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi inventore voluptatem ipsum accusantium vel possimus aliquam magni dolore veritatis nam obcaecati deserunt facilis quae officia veniam, temporibus praesentium doloremque tenetur.</p>
                                <div className='col-12 display-flex'>
                                    <NavLink to={''} className='btn col-6 display-flex t-decoration'>REGISTER HERE</NavLink></div>
                            </div>
                        </div>
                        <div className="track-section col-4">
                            <div className="container">
                                <div className="track-heading display-flex">
                                    <h3> Track </h3>&nbsp;<h3>Membership Status</h3>
                                </div>
                                <form action="" className='display-flex flex-column'>
                                    <input type="text" className='col-12' placeholder='Enter Full Name' />
                                    <input type="text" className='col-12' placeholder='Email Or Phone' />
                                    <div className='d-flex col-12'>
                                        <input type="text" className='col-6' placeholder='Membership ID' />
                                        <input type="text" className='col-6' placeholder='Date of Birth' />
                                    </div>
                                    <button className='col-12 btn' type='submit'>TRACK MEMBERSHIP</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    .mainRegister{
        background-color: #292a35;
        color: ${({ theme }) => theme.colors.white};
       
            .register-section{
                padding: 2rem 0;
                h2{
                    font-size: 2.5rem;
                    color: ${({ theme }) => theme.colors.orange};
                }
                h4{
                    margin: 0;
                }
                .container{
                    gap: 0.5rem;
                    div{
                        margin-top: 1.3rem;
                    }
                }
            }
            .track-section{
                background-color: #23212b;
                padding: 2rem 0;
                .track-heading{
                    margin-bottom: 1rem;
                    h3{
                        margin: 0;
                    }
                    h3:last-child{
                        color: ${({ theme }) => theme.colors.orange};
                    }
                }
                form{
                    gap: 1rem;
                    input{
                        height: 2rem;
                        border-radius: 5px;
                        padding-left: 0.5rem;
                        border: none;
                        outline: none;
                    }
                    div{
                        gap: 1rem;
                    }
                }
            }

    }
`;
export default Register;