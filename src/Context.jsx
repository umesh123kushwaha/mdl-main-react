import React, { useContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const AppContext = React.createContext();
let API = "https://hn.algolia.com/api/v1/search?";
    // let API = "https://mazedan.tech/api/journal-list";

const initialState = {
    isloading: true,
    query: "CSS",
    nbPages: 0,
    page: 0,
    hits: [],  
}

const AppProvider = ({children}) => {

const [state, dispatch] = useReducer(Reducer, initialState);




    const fetchAPIData = async(url)=>{

        dispatch({type: "IS_LOADING"})
        try {
            const res = await fetch(url);
            const data = await res.json();
            // const isLoading = false;
            console.log(data);
            dispatch({
                type: "GET_SERVICES",
                payload:{
                    hits: data.hits,
                    nbPages: data.nbPages,
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
    // remove button
    const removeItem = (item_ID) => {
        dispatch({ type : "REMOVE_ITEM", payload: item_ID })
    }
    // search journals
    const searchJournal = (searchJournal) => {
        dispatch({ type: "SEARCH_JOURNAL", payload: searchJournal} )
    }
    // Pagination
    const getNextPage = () => {
        dispatch({
            type: "NEXT_PAGE"
        })
    }
    const getPrevPage = () => {
        dispatch({
            type: "PREV_PAGE"
        })
    };

    useEffect(() => {
      fetchAPIData(`${API}query=${state.query}&page=${state.page}`);
    
      
    }, [state.query, state.page]);

return <AppContext.Provider value={{...state, removeItem, searchJournal, getPrevPage, getNextPage}}>
        {children}
</AppContext.Provider>
};

//custom hook

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};