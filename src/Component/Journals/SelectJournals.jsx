import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../Context";
import SelectJournalList from "./SelectJournalList";

const SelectJournals = () => {
  const { query, searchJournal } = useGlobalContext();

  return (
    <Wrapper>
      <div className="main">
        <div className="container">
          <div className="input-search">
            <div className="input-select">
              {/* <h4>Select Journals</h4>
                <FaCaretDown /> */}
              <input
                type="text"
                placeholder="Select Journal"
                value={query}
                onChange={(e) => searchJournal(e.target.value)}
              />
            </div>
            
            <button>Go</button>
          </div>
          <div className="search-list">
            <SelectJournalList />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .input-search {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;

    .input-select {
      width: 50%;

      input {
        height: 2rem;
        width: 100%;
        padding: 1rem;
    font-size: 1.2rem;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.colors.orange};
    outline-color: ${({ theme }) => theme.colors.lightBlue};
      }
    }
    button{
          border: 2px solid ${({ theme }) => theme.colors.orange};
          font-size: 1.2rem;
          padding: 0 1rem;
          transition: ease 0.6s;
          height: 2rem;
          border-radius: 5px;
            &:hover{
              background-color: ${({ theme }) => theme.colors.orange};
              border: 2px solid ${({ theme }) => theme.colors.lightBlue};
              /* border: none; */
            }
        }
  }
`;
export default SelectJournals;
