import React, { useEffect } from 'react'
import { FaDollarSign } from 'react-icons/fa';
import { HiChevronRight } from 'react-icons/hi';
import { ImAddressBook, ImBlocked, ImSearch } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import AOS from "aos";


const AboutJournal = () => {

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
              <h2 data-aos="fade-right">MAZEDAN </h2> &nbsp;
              <h2 data-aos="fade-left" className="color-lightBlue">
                TRANSACTIONS ON ENGINEERING SYSTEMS DESIGN
              </h2>
            </div>
            <div className="text-justify fs-1-2">
              <p data-aos="fade-up">
                Welcome to Mazedan Transactions on Engineering Systems
                Design (MTESD), a quarterly publication established in
                2020 by Mazedan International Research Academy. Journal
                serves as a premier, fully refereed international forum in
                the dynamic field of design engineering. Published on the
                Digital Library (MDL) platform and utilizing the Mazedan
                Article Manager (MAM) as the submission platform, MTESD
                offers a comprehensive platform for sharing high-quality
                research outcomes, showcasing new developments, and
                exploring innovative approaches in optimizations, control,
                smart materials, structure design, and the utilization of
                computer and IT tools for engineering system development.
                The journal is indexed by Google Scholar and providing a
                unique DOI to each article, MTESD publishes research and
                review articles, as well as extended versions of
                conference presentations. Employing a hybrid mode for
                publication, we offer open access upon request of authors,
                with the default mode being encrypted. The average
                publication time is 10 weeks, and for those seeking
                expedited publication, fast-track options are available
                with a rapid publication time of just 1 week, ensuring
                timely dissemination of valuable contributions to the
                community.
              </p>
              <div className="scope fs-1-2">

                <h3 data-aos="fade-left" className="color-lightBlue"> <ImSearch /> &nbsp; Scope</h3>
                <p data-aos="fade-up">
                  MTESD encompasses a broad spectrum of engineering
                  disciplines, including Computer Science & Engineering,
                  Information Technology, Electrical and Electronics
                  Engineering, Electronics & Telecommunication, Mechanical
                  Engineering, Civil Engineering, and all
                  interdisciplinary streams of Engineering Sciences. We
                  aim to bridge the gap between research and practice by
                  promoting the publication of original, novel, and
                  industry-relevant research. Our platform is dedicated to
                  creating a space for publishing results and research
                  with a strong empirical component.
                </p>

              </div>
              <div className="article-process fs-1-2">
                <h3 data-aos="fade-left" className="color-lightBlue">
                  <FaDollarSign /> &nbsp; Article Processing Fee and Journal Subscription</h3>
                <p data-aos="fade-up">For authors; There is no APC (Article Processing Charge) for any Mazedan journal in regular publication mode; it is entirely free of charge. However, authors can opt for a paid request for open access or fast publication. For librarians, institutions, and individual readers, we offer existing plans that provide subscriptions to the complete database of the Mazedan Digital Library at exciting prices. There's no need to purchase a single article or subscribe to a single journal. Instead, at a similar cost, you can acquire a subscription to the entire Mazedan Digital Library, which includes archives of all 16 Mazedan journals, conference proceedings, books, theses, and technical reports, otaling more than 20,000 articles. To subscribe, visit the Mazedan Digital Library and click on the "Subscription" tab to access tariff plans and the simple 2-minute subscription process</p>
              </div>
              <div className="plg-policy fs-1-2">
                <h3 data-aos="fade-left" className="color-lightBlue"><ImBlocked />&nbsp; Plagiarism Policy</h3>
                <p data-aos="fade-up">Mazedan Journals strictly prohibit plagiarism, defined as the unethical use of someone else's ideas, processes, or words without proper acknowledgment. We employ Turnitin/iThenticate software to meticulously check submitted anuscripts for plagiarism. Detected instances during the initial review lead to prompt rejection. Post-publication plagiarism discoveries prompt comprehensive investigations, and retractions are implemented if necessary. Our policy allows a maximum of 20% plagiarism and 40% in the case of self-plagiarism. However, parametric data and approaches must not be plagiarized in either case. It is essential to cite references for all content to avoid policy violations</p>
              </div>
              <div className="rew-policy fs-1-2">
                <h3 data-aos="fade-left" className="color-lightBlue"><ImSearch />&nbsp; Review Policy</h3>
                <p data-aos="fade-up">MTESD follows a Closed Review model, wherein reviewers are aware of authors' identities, but authors do not know the reviewers. The editorial process involves initial manuscript evaluation by the Editor, with further review by at least two experts if the manuscript meets the minimum criteria. The time for the review process is contingent on referee response.</p>
              </div>
              <div className="policy-time fs-1-2">
                <h3 data-aos="fade-left" className="color-lightBlue">⌚&nbsp; Decision and Publication Time</h3>
                <p data-aos="fade-up">For regular publication (free of charge), MTESD maintains an average first decision time of 2 weeks and a publication time of approximately 10 weeks. Authors also have the option of fast-track publication on a paid basis, ensuring publication within 7 days. We strive to provide a timely and efficient platform for disseminating valuable research to the global community</p>
              </div>
              <div className="abstract fs-1-2" >
                <h3 data-aos="fade-left" className="color-lightBlue"><ImAddressBook />&nbsp; Abstracting & Indexing:</h3>
                <div className="g-1 d-flex item-center">
                  <img data-aos="zoom-in" src="/public/images/JournalSponser/google-scholer.png" alt="" />
                  <img data-aos="zoom-in" src="/public/images/JournalSponser/j-gate.png" alt="" />
                  <img data-aos="zoom-in" src="/public/images/JournalSponser/project-muse.png" alt="" />
                  <img data-aos="zoom-in" src="/images/JournalSponser/doag.png" alt="" />
                  <img data-aos="zoom-in" src="/public/images/JournalSponser/jstor.png" alt="" />
                  <img data-aos="zoom-in" src="/public/images/JournalSponser/nki.jpeg" alt="" />
                </div>

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
      
  }
  .abstract {
    div{
      img{
        width: 15%;
      }
    }
  }
  
`;

export default AboutJournal