import React from 'react'
import { HiChevronRight } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components'

const EditorialBoard = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <main className="editor-page col-12">
        <div className="container">
          <div className="right-corner-menu d-flex item-center ">
            <NavLink className="color-lightBlue" to={"/"}>
              Home
            </NavLink>
            <HiChevronRight className="rightArrow color-lightBlue" />
            <NavLink to='/journals' className='color-lightBlue'> Journal</NavLink><HiChevronRight className="rightArrow color-lightBlue" />MCRJ
          </div>
          <section>
            <div className="heading border-tool d-flex item-center">
              <h2>MAZEDAN </h2> &nbsp;
              <h2 className="color-orange">
                EDITORIAL BOARD
              </h2>

            </div>
            <p>Welcome to MTESD's distinguished Editorial Board, comprising esteemed members from diverse universities,
              research laboratories, and industrial R&D centers worldwide. Our board members are carefully selected based on
              their extensive work experience and research expertise in areas covered by the journal. <br />
              <br />
              We invite passionate individuals to join our voluntary editorial team. If you wish to become a part of our esteemed
              board, kindly submit your application through the provided form below. Decisions on new appointments will be
              announced every December. We look forward to welcoming dedicated professionals to contribute to the success of
              MTESD.</p>
          </section>
          <br />
          <section className='editors color-white'>
            <div className="chief-editor ">
              <div className='bg-lb text-center heading-row display-flex'>
                <b>Editor in Chief</b>
              </div>
              <div className="about-editor bg-org col-4 text-center color-white">
                <img src="/public/images/writer.png" alt="" />
                <h2>Dr. Muhammad Avesh</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam suscipit praesentium consequuntur. Fuga dolores reprehenderit sapiente, quam rerum et perspiciatis numquam cumque aut id sint alias omnis, aliquid tempore debitis.</p>
              </div>
            </div>
            <div className="sub-editor">
              <div className='bg-lb text-center color-white heading-row display-flex'>
                <b>Associate Editors</b>
              </div>
              <div style={{ margin: "0 2rem" }}>
                <Slider {...settings}>
                  <div className="about-editor bg-org col-4 text-center color-white">
                    <img src="/public/images/writer.png" alt="" />
                    <h2>Dr. Muhammad Avesh</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam suscipit praesentium consequuntur. Fuga dolores reprehenderit sapiente, quam rerum et perspiciatis numquam cumque aut id sint alias omnis, aliquid tempore debitis.</p>
                  </div>
                  <div className="about-editor bg-org col-4 text-center color-white">
                    <img src="/public/images/writer.png" alt="" />
                    <h2>Dr. Muhammad Avesh</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam suscipit praesentium consequuntur. Fuga dolores reprehenderit sapiente, quam rerum et perspiciatis numquam cumque aut id sint alias omnis, aliquid tempore debitis.</p>
                  </div>
                  <div className="about-editor bg-org col-4 text-center color-white">
                    <img src="/public/images/writer.png" alt="" />
                    <h2>Dr. Muhammad Avesh</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam suscipit praesentium consequuntur. Fuga dolores reprehenderit sapiente, quam rerum et perspiciatis numquam cumque aut id sint alias omnis, aliquid tempore debitis.</p>
                  </div>
                  <div className="about-editor bg-org col-4 text-center color-white">
                    <img src="/public/images/writer.png" alt="" />
                    <h2>Dr. Muhammad Avesh</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam suscipit praesentium consequuntur. Fuga dolores reprehenderit sapiente, quam rerum et perspiciatis numquam cumque aut id sint alias omnis, aliquid tempore debitis.</p>
                  </div>
                  <div className="about-editor bg-org col-4 text-center color-white">
                    <img src="/public/images/writer.png" alt="" />
                    <h2>Dr. Muhammad Avesh</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam suscipit praesentium consequuntur. Fuga dolores reprehenderit sapiente, quam rerum et perspiciatis numquam cumque aut id sint alias omnis, aliquid tempore debitis.</p>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="members">
              <div className='bg-lb text-center heading-row display-flex'>
                <b>Members Editorial Board</b>
              </div>
              <div className="members-section">
                <div className="about-members">
                  <img src="/public/images/writer.png" alt="" />
                </div>
              </div>
            </div>

          </section>
        </div>
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .editor-page {
      /* background-color: ${({ theme }) => theme.colors.white}; */
      background-color: #c5c3c3;
      padding: 10%;
      .heading {
        margin: 1.2rem 0;
      }
      h3 {
        margin-top: 0.5rem;
        margin-bottom: 0.4rem;
        display: flex;
        align-items: center;
      }
      
      
      .right-corner-menu {
        justify-content: end;
        transform: translate(-2%, -100%);

        .rightArrow {
          font-size: 20px;
        }
      }
    .editors{
            background-color: ${({ theme }) => theme.colors.white};
        .heading-row{
          height: 45px;
        }
        
    }
    .slick-slider{
      .slick-prev:before, .slick-next:before{
        color: ${({ theme }) => theme.colors.orange};
      }
      
      .slick-slide{
      div{
         margin: 1rem 0.5rem;
         display: flex;
         align-items: center;
         justify-content: center;
      }
     
    }
    }
    
    .about-editor{
      margin: 2rem auto;
      border-radius: 1rem;
      padding: 2rem;
      img{
        border-radius: 50%;
        margin: auto;
      }
      h2{
        margin: 1rem 0;
      }
      p{
        text-align: justify;
      }
    }
      
  }
`;

export default EditorialBoard