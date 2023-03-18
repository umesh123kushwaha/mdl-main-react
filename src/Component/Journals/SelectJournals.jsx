import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../Context';
import SelectJournalList from './SelectJournalList';

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
                <input type="text" placeholder='Select Journal'
                value={query}
                onChange={(e)=> searchJournal(e.target.value)}
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
  )
}
const Wrapper = styled.section`
    
`;
export default SelectJournals