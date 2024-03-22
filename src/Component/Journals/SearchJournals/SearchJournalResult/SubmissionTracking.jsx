import React, { useEffect } from 'react'
import { HiChevronRight } from 'react-icons/hi';
import { GiNotebook } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';
import AOS from "aos";

const SubmissionTracking = () => {

  useEffect(() => {
    AOS.init({
      
      duration: 1000,
    
    });
  }, []);
  return (
    <Wrapper>
      <div className="middle-column col-9">
        <div className="right-corner-menu d-flex item-center ">
          <NavLink className="color-lightBlue" to={"/"}>
            Home
          </NavLink>
          <HiChevronRight className="rightArrow color-lightBlue" />
          <NavLink to='/journals' className='color-lightBlue'> Journal</NavLink><HiChevronRight className="rightArrow color-lightBlue" />MTESD
        </div>
        <div className="container">
          <div className="upSection">
            <div className="heading border-tool d-flex item-center">
              <h2 data-aos="fade-right">MANUSRCRIPT </h2> &nbsp;
              <h2 className="color-lightBlue" data-aos="fade-left">
                SUBMISSION & TRACKING
              </h2>
            </div>
            <div className="text-justify fs-1-2">
              <h3 data-aos="fade-up"><GiNotebook /> &nbsp; Manuscript Preparation</h3>
              <div>
                <h4 data-aos="fade-up">Critical Compliance Guidelines: Non-adherence may lead to manuscript rejection at the editorial desk.</h4>
                <ul>
                  <li data-aos="fade-up"> Plagiarism and Direct Copying: Strictly prohibited. Manuscript must be written in your own words, with a maximum 20% allowable plagiarism rate</li>
                  <li data-aos="fade-up"> Use Word's built-in table tool for tables, not images. Ensure proper captions and citations for tables, equations, and figures within the body text.</li>
                  <li data-aos="fade-up"> Ensure high-quality and original figures.</li>
                  <li data-aos="fade-up"> Type equations directly into the document, avoiding images or other tools</li>
                  <li data-aos="fade-up"> Avoid unnecessary page breaks, line breaks, and spaces. Maintain uniform formatting for headings, subheadings, and body text</li>
                  <li data-aos="fade-up"> Capitalize only the first letter of the first word, proper nouns, or abbreviations necessitating capitalization in, caption or body text</li>
                  <li data-aos="fade-up"> Proofread for grammar, spelling, and formatting errors before finalizing.</li>
                  <li data-aos="fade-up"> Follow a consistent referencing style of your choice (however, Harvard is recommended). Utilize Google Scholar or tools like Mendeley,EndNote for guidance.</li>
                  <li data-aos="fade-up"> Manuscript must be within the page range of 6-25.</li>
                </ul></div>
              <article>
                <h4 data-aos="fade-left">Structuring:</h4>
                <p data-aos="fade-up">
                  The manuscript should be compiled into a single MS Word file, comprising two sections: the Title Page and the Manuscript File. It should adhere to a uniform format, employing Times New Roman with a 12-point font size and single spacing within the default A4-sized Word document. Number all pages consecutively, commencing with the title page. Capitalize only the first letter of the first word, proper nouns, or abbreviations necessitating capitalization. For a more comprehensive structuring guide, please refer to specific guidelines outlined <NavLink to='#' className='color-lightBlue'> here in the template.</NavLink><br />
                  <b data-aos="fade-up">Part 1 (the Title Page)-</b> It should include the paper title, full author names, institute/organization addresses, and the corresponding author's contact details. Optionally, authors can provide short biographies and photographs. Avoid using abbreviations for authors' names and omit other professional titles. <br />
                  <b data-aos="fade-up">Part 2 (the Manuscript File)-</b> follow standard journal article formatting with sections like Title, Abstract, Keywords, Introduction, Material & Methods, Results, Discussion, Conclusion, Acknowledgment, References, Tables, Figures, and figure legends. Exclude author information from this page.
                </p>
              </article>

              <div className="scope">
                <h3 data-aos="fade-left"><GiNotebook /> &nbsp; Manuscript Submission</h3>
                <ul>  
                <li data-aos="fade-up">Papers for regular issues of the journal can be submitted year-round via the Mazedan Article Manager (MAM). Find the      Button at the header of this page.</li>
                <li data-aos="fade-up">Authors may opt the fast publication during submission for quick publication within one week, incurring a charge of 30,   payable after acceptance. Regular publication remains free of charge</li>
</ul>
              </div>
              <div className="article-process fs-1-2">
                <h3 data-aos="fade-left"><ImSearch /> &nbsp; Tracking</h3>
                <ul>
                  <li data-aos="fade-up">Authors can monitor the submitted paper's status online through Mazedan Article Manager (MAM) using the submission reference number.</li>
                  <li data-aos="fade-up">Login is not necessary for quick tracking, but accessing detailed status and the article workflow requires logging in to MAM.</li>
                </ul>
              </div>
              <div className="plg-policy fs-1-2">
                <h3 data-aos="fade-left"><GiNotebook /> &nbsp; Review and Publication</h3>
                <ul>
                  <li data-aos="fade-up">Submitted papers undergo initial screening and, if successful, proceed to peer review by experts. The editor may suggest transferring unsuitable submissions to a more fitting journal</li>
                  <li data-aos="fade-up">Manuscripts are reviewed by subject experts and the Editorial Board. Peer and author identities are confidential. Acceptance depends on recommendations, and the corresponding author is responsible for scientific accuracy.</li>
                  <li data-aos="fade-up">Authors complete a declaration and copyright form before publication. After acceptance and online copyright submission, the paper goes online. Volume, Issue, and DOI are allocated later, with authors notified accordingly.</li>
                </ul>
              </div>
            </div>
          </div>


        </div>
      </div>
      <div className="right-side-bar col-1"></div>

    </Wrapper>
  );
};
const Wrapper = styled.section`
  .middle-column {
      background-color: ${({ theme }) => theme.colors.white};
      padding-bottom: 2%;
      padding-top: 2%;
      margin-top: -5%;
      .heading {
        margin: 1.2rem 0;
      }
        .border-tool::after{
        background-color: ${({ theme }) => theme.colors.lightBlue};
        }
        .border-tool::before{
        background-color: ${({ theme }) => theme.colors.lightBlue};

        }
      
      h3 {
        margin-top: 0.5rem;
        margin-bottom: 0.4rem;
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.colors.lightBlue};
      }
      
      
      .right-corner-menu {
        justify-content: end;
        transform: translate(-2%, -100%);

        .rightArrow {
          font-size: 20px;
        }
      }
      
      
  }
  ul{
        list-style-type: square;
        margin-left: 2rem;
      }
  
  
`;

export default SubmissionTracking