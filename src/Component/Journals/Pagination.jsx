import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../Context'

const Pagination = () => {
    const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext();
  return (
   <Wrapper>
    <div className="pagination">
            <button onClick={()=> getPrevPage()}>PREV</button>
            <p>{page + 1} to {nbPages} </p>
            <button onClick={() => getNextPage()}>NEXT</button>
    </div>
   </Wrapper>
  )
}
const Wrapper = styled.section`
    
`;
export default Pagination