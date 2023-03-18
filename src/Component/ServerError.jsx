import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { MdOutlineClose, MdWarning } from 'react-icons/md';
import styled from 'styled-components'

const ServerError = () => {
    return (
        <Wrapper>
            <div className="main display-flex col-12">

                <div className="main-error">
                    <div className='close-button'>
                        <MdOutlineClose className='close-button' />
                    </div>
                    <div className="alert-icon col-12 display-flex">
                    <MdWarning />
                    </div>
                    <div className='error-text display-flex flex-column'>
                        <div className=" display-flex col-12">

                            <h1>Oops !</h1> &nbsp;
                            <h1 className='color-orange'> Something Went Wrong</h1>

                        </div>
                        <h4>Error occurred on fetching data from server</h4>
                        <p>Please try after sometime or refresh the page</p>
                    </div>
                    <div className='close display-flex'>
                    <div className="close-btn col-12 display-flex"><p> Close</p></div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    .main{
         width: 100%;
        height: 100%;
        position: fixed;
        background-color: #00000073;
        z-index: 999999999999;
       

        .main-error{
            width: 500px;
            height: 400px;
            border: 1px solid #ddd;
            background-color: ${({ theme }) => theme.colors.white};
           
           
            .alert-icon{
                font-size: 10rem;
                color: red;
            }
            .close-button{
                text-align: right;
                font-size: 2rem;
            }
            .error-text{
                p{
                    margin: 1rem 0;
                    color: ${({ theme }) => theme.colors.lightBlue};
                }
            
            h1{
                font-size: 30px;
                /* height: 50%; */
            }}
            .close-btn{
                /* margin-top: 40px; */
                background-color: ${({ theme }) => theme.colors.orange};
                padding: 0.5rem 0;
                color: ${({ theme }) => theme.colors.white};
                width: 30%;
                border-radius: 5px;
                cursor: pointer;
                p{
                transition: all 0.3s linear;
            }
                &:hover p{
                    transform: scale(1.3);
                }
            }
        }
        
    }
`;
export default ServerError