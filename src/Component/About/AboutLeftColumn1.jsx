import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const AboutLeftColumn1 = () => {
  return (
   <Wrapper>
    <div className="main ">
        <div className='first-column'>
            <div className="column-heading display-flex">
                <h3>KNOW ABOUT MAZEDAN</h3>
            </div>
            <div className="content-data">
                    <div>  &#10146; <NavLink to={""}> Mazedan at a Glance</NavLink></div>
                    <div > &#10146; <NavLink> Executive Board</NavLink></div>
                    <div> &#10146; <NavLink> Constitution</NavLink></div>
                    <div> &#10146; <NavLink> Contacts</NavLink></div>
            </div>
        </div>
        <div className="second-column">
        <div className="column-heading display-flex">
                    <h3>ACHIEVEMENTS</h3>
                </div>
                <div className="content-data">
                    <div className="container">
                        <div className='d-flex'><span>&#10065;</span><NavLink><p>Mazedan is promoting research with more than 2000+ scholars.</p></NavLink></div>
                        <div className='d-flex'><span>&#10065;</span><NavLink><p>Research Show Growing Awareness and Uptake of Open Access Publishing By Authors</p></NavLink></div>
                    </div>
                </div>
        </div>
    </div>
    
   </Wrapper>
  )
}
const Wrapper = styled.section`
    .main{
        .content-data{
            font-size: 1.3rem;
        }
    }
 .second-column{
           margin-top: 5rem;
           .content-data{
            line-height: normal;
            font-size: 1.2rem;
            color: ${({ theme }) => theme.colors.orange};
            span{
            margin-right: 1rem;
            }
            a{
                text-decoration: none;
                color: ${({ theme }) => theme.colors.orange};
            }
        }
        }
`;
export default AboutLeftColumn1