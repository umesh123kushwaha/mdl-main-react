import React from "react";
import styled from "styled-components";
import { MdOutlineDownload, MdFormatQuote, MdLockOpen } from "react-icons/md";
import { FaQuoteRight, FaUnlockAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <Wrapper>
            <div className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-row d-flex space-between flex-wrap">
                            <div className="footer-about text-align-center">
                                <div className="border-tool">ABOUT WEBSITE</div>
                                <NavLink>Search on website</NavLink>
                                <NavLink>Sitemap</NavLink>
                                <NavLink>Copyright</NavLink>
                            </div>
                            <div className="">
                                <div className="border-tool">CONFERENCE PUBLICATION</div>
                                <NavLink>Terms and Conditions</NavLink>
                                <NavLink>Conference Publication Fee</NavLink>
                                <NavLink>Conference Publication Proposal</NavLink>
                            </div>
                            <div className="">
                                <div className="border-tool">SERVICES</div>
                                <NavLink>Plagiarism Check</NavLink>
                                <NavLink>Research Guide</NavLink>
                                <NavLink>Publication Guide</NavLink>
                            </div>
                            <div className="">
                                <div className="border-tool">CAREER OPPORTUNITIES</div>
                                <NavLink>Current Jobs</NavLink>
                                <NavLink>Old Jobs</NavLink>
                                <NavLink>Track Application</NavLink>
                            </div>
                            <div className="support-corner">
                                <div className="border-tool">SUPPORT CENTER</div>
                                <NavLink>Chat</NavLink>
                                <NavLink to={''}>Call</NavLink>
                                <NavLink to={''}>Write query</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container d-flex item-center space-between">
                        <h3>
                            Copyright @{new Date().getFullYear()}, MAZEDAN, All Rights Reserved.
                        </h3>
                        <div className="visitorCount">
                            <div className="visitorCount2">
                                <h4>Visitors Count </h4>
                            </div>
                            <div>0</div>
                            <div>0</div>
                            <div>1</div>
                            <div>0</div>
                            <div>2</div>
                            <div>0</div>
                            <div>2</div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.section`
  .footer-top {
    background-color: ${({ theme }) => theme.colors.orange};
    padding: 1rem 0;
    
            .footer-row{
                .border-tool::before{
                    background-color: ${({ theme }) => theme.colors.white};
                }
                .border-tool::after{
                    background-color: ${({ theme }) => theme.colors.white};
                }
                div{
                    display: flex;
                    flex-direction: column;
                    line-height: 2rem;

                        div{
                            /* border-bottom: 2px solid ${({ theme }) => theme.colors.white}; */
                            margin-bottom: 1rem;
                        }
                        
                }
            }
    a {
      color: ${({ theme }) => theme.colors.white};
      text-decoration: none;
      transition: all 0.3s ;
       &:hover{
        transform: scale(1.1);
       }

    
    }
  }
   
  .footer-bottom {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.5rem 0;
    /* padding: 0.3rem 2rem; */

    .visitorCount {
      display: flex;

      .visitorCount2 {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.black};
        text-transform: uppercase;
        border: 0px solid;
        padding: 1px 5px;
      }

      div {
        border: 1.5px solid;
        padding: 0 0.3rem;
      }
    }
  }
`;

export default Footer;
