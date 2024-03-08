import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../../Context';
import Pagination from './Pagination';
import { NavLink } from 'react-router-dom';

const SelectJournalList = () => {

    const { hits, nbPages, isLoading, removeItem } = useGlobalContext();

        console.log("hits", hits);
    if (isLoading) {
        return (
            <h2>Loading...</h2>
        )
    }
    return (
        <Wrapper>
            <div className="main">
                <div className="container" >
                    <h3>All Subject Area</h3>
                   
                    {
                        hits.map((curPost) => {
                            const { journal_title, author, num_comments, url, objectID } = curPost;
                            return (
                               
                                    <div key={objectID}>
                                        <h2 ><NavLink className='color-lightBlue' to={"/journal-page"}>{journal_title}</NavLink></h2>
                                        
                                        {/* <span onClick={() => removeItem(objectID)}>remove</span>
                                        <a href={url} target="blank">read more </a> */}
                                    </div>
                                
                            )
                        })
                    }
                    <Pagination />
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
   a{ text-decoration: none;}
`;
export default SelectJournalList