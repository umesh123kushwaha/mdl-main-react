import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

const SearchJournalLeft = () => {
  return (
    <Wrapper>
      <div className="main">
        <div className='column1'>
          <div className="column-heading display-flex">
            <h3>KNOW ABOUT MTESD
            </h3>
          </div>
          <div className="content-data">
            <div>  &#10146; <HashLink to={''}>About the Journal</HashLink></div>
            <div> &#10146; <HashLink to={'#policy'}> Editorial Board</HashLink></div>
            <div> &#10146; <HashLink to={'#faq'}> Latest & Archives</HashLink></div>
            <div> &#10146; <HashLink to={'#faq'}> FAQ</HashLink></div>

          </div>
        </div>
        <div className="second-column">
          <div className="column-heading display-flex">
            <h3>Journal Matrices</h3>
          </div>
          <div className="content-data">
            <div><span className="square-icon">&#10065;</span>  <NavLink>Starting Year-2020</NavLink></div>
            <div><span className="square-icon">&#10065;</span>  <NavLink>M- Impact factor-1.1</NavLink></div>
            <div><span className="square-icon">&#10065;</span>  <NavLink>Citation Rate- 10</NavLink></div>
            <div><span className="square-icon">&#10065;</span>  <NavLink>Rejection rate- 20%</NavLink></div>
            <div><span className="square-icon">&#10065;</span>  <NavLink>Decision Time- 90 days (median)</NavLink></div>
          </div>
        </div>
        <div className="third-column">
          <div className="column-heading display-flex">
            <h3>Journal News and Updates</h3>
          </div>
          <div className="content-data">
            <marquee width="100%" height="200px" direction="up" scrolldelay="150">
              <div className='scroll-data d-flex flex-column'>
                <NavLink to=''>
                  <div className='d-flex item-center'>
                    <FaExternalLinkAlt className='external-icon' />
                    <h5>July 2023</h5>
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  veniam, pariatur accusamus ipsa necessitatibus?</p>
                  </div>
                </NavLink>
              </div>
              <div className='scroll-data d-flex flex-column'>
                <NavLink to=''>
                  <div className='d-flex item-center'>
                    <FaExternalLinkAlt className='external-icon' />
                    <h5>July 2023</h5>
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  veniam, pariatur accusamus ipsa necessitatibus?</p>
                  </div>
                </NavLink>
              </div>
              <div className='scroll-data d-flex flex-column'>
                <NavLink to=''>
                  <div className='d-flex item-center'>
                    <FaExternalLinkAlt className='external-icon' />
                    <h5>July 2023</h5>
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  veniam, pariatur accusamus ipsa necessitatibus?</p>
                  </div>
                </NavLink>
              </div>
              <div className='scroll-data d-flex flex-column'>
                <NavLink to=''>
                  <div className='d-flex item-center'>
                    <FaExternalLinkAlt className='external-icon' />
                    <h5>July 2023</h5>
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  veniam, pariatur accusamus ipsa necessitatibus?</p>
                  </div>
                </NavLink>
              </div>
              <div className='scroll-data d-flex flex-column'>

                <NavLink to=''>
                  <div className='d-flex item-center'>
                    <FaExternalLinkAlt className='external-icon' />
                    <h5>July 2023</h5>
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  veniam, pariatur accusamus ipsa necessitatibus?</p>
                  </div>
                </NavLink>
              </div>
            </marquee>
          </div>
        </div>




      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`

.main{
   
  margin: 2rem;
  font-size: 1.3rem;
  
    .second-column{
        margin-top: 5rem;
        width: 22rem;
        .content-data{
            div{
                display: flex;
                align-items: center;
                .square-icon{
                    margin-right: 1rem;
                }
            }
        }
    }
    .third-column{
        margin-top: 5rem;
        .content-data{
            background-color: #bdd7ee;
            .scroll-data {
                margin-top: 0.5rem;
                a{
                color: ${({ theme }) => theme.colors.orange};
                }
                div:first-child{
                    gap: 1rem;
                }
            }
        }
    }
   
}
    
`;


export default SearchJournalLeft