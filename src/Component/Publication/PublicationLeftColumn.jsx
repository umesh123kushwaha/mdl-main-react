import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components'
import AOS from "aos";

const PublicationLeftColumn = () => {
    useEffect(() => {
        AOS.init({
        //   disable: "phone",
          duration: 1000,
          easing: "ease-out-cubic",
        });
      }, []);
    return (
        <Wrapper>
            <div className="main ">
                <div className='first-column' data-aos="fade-up">
                    <div className="column-heading display-flex">
                        <h2 data-aos="fade-left">MAZEDAN PUBLICATION HOME</h2>
                    </div>
                    <div className="content-data">
                        <div data-aos="fade-right">  &#10146; <HashLink to={''}>About Mazedan Publication House</HashLink></div>
                        <div data-aos="fade-left"> &#10146; <HashLink to={'#publish-table'}> Publication Procedure</HashLink></div>
                        <div data-aos="fade-right"> &#10146; <HashLink to={'#publish-table'}> List of Books & Journals</HashLink></div>
                    </div>
                </div>
                <div className="second-column"data-aos="fade-up">
                    <div className="column-heading display-flex">
                        <h2 data-aos="fade-right">Proceedings Publication</h2>
                    </div>
                    <div className="content-data">
                        <div className='content-paragraph'>
                            <p className='text-center' data-aos="fade-left">Benefit from our experience and offered services to turn your conference publication into worldwide accessible science</p>
                        </div>
                        <div className="proceed-form-btn col-12 display-flex flex-column">
                            <p className='text-center' data-aos="fade-right">Publish your Conference Proceedings with Mazedan Digital Library</p>
                            <NavLink to={""} className='t-decoration'>
                                <div className="btn text-center display-flex" data-aos="zoom-in">PROCEEDINGS PUBLICATION FORM</div>
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
            font-size: 1rem;
            /* font-size: 11px; */
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