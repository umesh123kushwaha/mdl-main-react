import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdlSearchIcon } from "../../SvgComponent/MdlSvgIcon";
import { ImAddressBook, ImBlocked, ImSearch } from "react-icons/im";
import { FaDollarSign } from "react-icons/fa";
import SearchJournalLeft from "./SearchJournalLeft";
import AboutJournal from "./SearchJournalResult/AboutJournal";
import EditioralBord from "./SearchJournalResult/EditioralBord";
import SubmissionTracking from "./SearchJournalResult/SubmissionTracking";

const SearchJournalData = () => {
  return (
    <Wrapper className="d-flex ">
     <SearchJournalLeft />
     {/* <AboutJournal /> */}
     {/* <EditioralBord /> */}
     <SubmissionTracking />
    </Wrapper> 
  )
};
const Wrapper = styled.section`
 background-color: ${({ theme }) => theme.colors.MinDarkWhite};
`;

export default SearchJournalData;
