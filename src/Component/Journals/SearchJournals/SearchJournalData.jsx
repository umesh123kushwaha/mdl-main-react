import React from "react";
import styled from "styled-components";
import SearchJournalLeft from "./SearchJournalLeft";
import AboutJournal from "./SearchJournalResult/AboutJournal";
import SubmissionTracking from "./SearchJournalResult/SubmissionTracking";

const SearchJournalData = () => {
  return (
    <Wrapper className="d-flex ">
     <SearchJournalLeft />
     <AboutJournal />
     
     {/* <SubmissionTracking /> */}
    </Wrapper> 
  )
};
const Wrapper = styled.section`
 background-color: ${({ theme }) => theme.colors.MinDarkWhite};
`;

export default SearchJournalData;
