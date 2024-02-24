import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../../Context';
import Pagination from './Pagination';

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
                    <Pagination />
                    {
                        hits.map((curPost) => {
                            const { title, author, num_comments, url, objectID } = curPost;
                            return (
                               
                                    <div key={objectID}>
                                        <h2>{title}</h2>
                                        <p>{author}</p>
                                        <h4> {num_comments} </h4>
                                        <span onClick={() => removeItem(objectID)}>remove</span>
                                        <a href={url} target="blank">read more </a>
                                    </div>
                                
                            )
                        })
                    }
                   
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    
`;
export default SelectJournalList