import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const PublicationLeftColumn = () => {
    return (
        <Wrapper>
            <div className="main ">
                <div className='first-column'>
                    <div className="column-heading display-flex">
                        <h3>MAZEDAN PUBLICATION HOME</h3>
                    </div>
                    <div className="content-data">
                        <div>  &#10146; <NavLink>About Mazedan Publication House</NavLink></div>
                        <div> &#10146; <NavLink> Publication Procedure</NavLink></div>
                        <div> &#10146; <NavLink> List of Books & Journals</NavLink></div>
                    </div>
                </div>
                <div className="second-column">
                    <div className="column-heading display-flex">
                        <h3>Proceedings Publication</h3>
                    </div>
                    <div className="content-data">
                        <div className='content-paragraph'>
                            <p className='text-center'>Benefit from our experience and offered services to turn your conference publication into worldwide accessible science</p>
                        </div>
                        <div className="proceed-form-btn col-12 display-flex flex-column">
                            <p className='text-center'>Publish your Conference Proceedings with Mazedan Digital Library</p>
                            <NavLink to={""} className='t-decoration'>
                                <div className="btn text-center display-flex">PROCEEDINGS PUBLICATION FORM</div>
                            </NavLink>
                        </div>
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
        .content-paragraph{
        color: #385723;
        }
        .proceed-form-btn{
            margin-top: 1rem;
            p{
                color: #ce0ffd;
            }
        }
        .btn{
            font-size: 11px;
            padding: 0 2rem;
            background-color: ${({ theme }) => theme.colors.MinDarkWhite};
            border: 1px solid #ce0ffd;
            color: #ce0ffd;
            margin: 1rem 0;
            transition: all 0.3s ease;
            &:hover{
            background-color: ${({ theme }) => theme.colors.orange};
            color: ${({ theme }) => theme.colors.white};
            }
        }
    }
}
`;
export default PublicationLeftColumn;