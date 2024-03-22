import React, { useEffect } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaBoxArchive } from "react-icons/fa6";
import { MdErrorOutline } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { BsQuestionCircle } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { HiOutlineUpload } from 'react-icons/hi';
import AOS from "aos";


const SearchJournalLeft = () => {
  useEffect(() => {
    AOS.init({
      
      duration: 1000,
      easing: 'ease',
    
    });
  }, []);
  return (
    <Wrapper>
      <div className="main">
        <div className='column1'>
          <div className="column-heading display-flex">
            <h3 data-aos="fade-down">KNOW ABOUT MTESD
            </h3>
          </div>
          <div className="content-data">
            <div data-aos="fade-right" data-aos-duration="1000">  <MdErrorOutline /> <HashLink to={''}>About the Journal</HashLink></div>
            <div data-aos="fade-left" data-aos-duration="1000"> <IoIosPeople /> <HashLink to={'/editors'}> Editorial Board</HashLink></div>
            <div data-aos="fade-right" data-aos-duration="1000"> <HiOutlineUpload /> <HashLink to={''}> Submission & Tracking</HashLink></div>
            <div data-aos="fade-left" data-aos-duration="1000"> <FaBoxArchive /> <HashLink to={'#faq'}> Latest & Archives</HashLink></div>
            <div data-aos="fade-right" data-aos-duration="1000"> <BsQuestionCircle /> <HashLink to={'#faq'}> FAQ</HashLink></div>

          </div>
        </div>
        <div className="second-column">
          <div className="column-heading display-flex">
            <h3 data-aos="fade-right">Journal Matrices</h3>
          </div>
          <div className="content-data">
            <div data-aos="fade-left"><span className="square-icon">&#10065;</span>  <NavLink>Starting Year-2020</NavLink></div>
            <div data-aos="fade-right"><span className="square-icon">&#10065;</span>  <NavLink>M- Impact factor-1.1</NavLink></div>
            <div data-aos="fade-left"><span className="square-icon">&#10065;</span>  <NavLink>Citation Rate- 10</NavLink></div>
            <div data-aos="fade-right"><span className="square-icon">&#10065;</span>  <NavLink>Rejection rate- 20%</NavLink></div>
            <div data-aos="fade-left"><span className="square-icon">&#10065;</span>  <NavLink>Decision Time- 90 days (median)</NavLink></div>
          </div>
        </div>
        <div className="third-column" data-aos="fade-up">
          <div className="column-heading display-flex">
            <h3 data-aos="fade-right">Journal News and Updates</h3>
          </div>
          <div className="content-data" data-aos="zoom-in">
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
    .column1{
      .content-data{
        padding: 1rem 0;
        div{
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0 1rem;
          font-size: 1.5rem;
          transition: all 0.2s;

          &:hover{
            background-color: ${({ theme }) => theme.colors.orange};
            color: ${({ theme }) => theme.colors.white};

          }
          &:hover a{
            color: ${({ theme }) => theme.colors.white};
          }
        }
      }
    }
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