import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NewsAndEvent from './NewsAndEvent';
import AOS from "aos";
import "aos/dist/aos.css";


const HomeContent = () => {
    useEffect(() => {
        AOS.init({
        //   disable: "phone",
        //   duration: 700,
        //   easing: "ease-out-cubic",
        });
      }, []);
    return (
        <Wrapper>
            <div className="container">
                <div className=" noticeAndGlance col-12 d-flex" style={{ gap: '1rem' }}>
                    <div className="glanceText col-7">
                        <div className='d-flex border-tool item-center col-12'>
                            <h2>MAZEDAN </h2>&nbsp;<h2>AT A GLANCE</h2>
                        </div>
                        <div className="content col-12  d-flex flex-column"  data-aos="fade-up" data-aos-duration="3000">
                            <p>
                                Mazedan International Research Academy is an association of international scholars aimed at promoting research and development through different mediums. It brings together researchers, scientists, engineers, scholars, and students to provides a platform for the dissemination of results, new ideas, and practical experiments, which concentrate on both theory and practices, for the benefit of the common man. Mazedan aims to undertake initiatives that are global in nature, Member associations are resolved to work together to address such issues as building capacity and interest in education, research, advancing education policies and practices, and promoting the application of research outcomes around the world. Mazedan is ranked to be in the forefront in the promotion of education with cutting edge interest, active action research, and service with a smile to human concerns performing the way it believes in for a better world. Mazedan popularly acclaimed to be an all-active academic cluster of prominent scientists, professionally matured teachers, and performing researchers across India and overseas committed to promoting value and ethical research among the young research scholars and modern society. Having
                                been backed up by the committed academic assemblage, the Mazedan could climb the
                                academic heights in no time with the support of the authors from India and abroad who
                                have contributed a lot in the terms of their research/ scientific/ technical papers worth
                                presenting to the realm of its kind. Research is an essential tool for entering into the arena
                                of the latest knowledge……
                            </p>
                            <div className="read-more-btn col-12 d-flex item-center ">
                                <NavLink to={"/about-mazedan"} className='read-more-button'><i>read more</i></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <NewsAndEvent />
                    </div>
                   
                </div>
                 <hr />
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    .container{
        padding:  2rem 0;
        .noticeAndGlance{
            .glanceText{
                p{
                    margin-top: 1rem;
                    text-align: justify;
                }
                .content{
                    gap: 1rem;
                } 
            }
        }
        hr{
            border: 2px solid ${({ theme }) => theme.colors.lightBlue};
        }
}
.read-more-btn{
    justify-content: end;
    .read-more-button{
        cursor: pointer;
        color: black;
        text-decoration: none;
        display: flex;
        align-items: end;
        justify-content: end;
        overflow: hidden;
        padding: 0 10px;
        background-color: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.orange};
        i{
        transition: all 0.3s ease;
        &:hover{
            transform: scale(1.1);
        }
        }
    }
}
`;
export default HomeContent