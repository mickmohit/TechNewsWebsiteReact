import React, { useEffect, useReducer, useState } from 'react'
import reducer from './reducer';


// context creation tick
//provider
// use context hook

const intitialState = {
    isLoading: true,
    query: "HTML",
    nbPages: 0,
    page: 0,
    hits: [],
}

const AppContext =  React.createContext();

//create provider
const AppProvider = ({children}) => {

    //use state way
    //const[state, setstate] =  useState(intitialState);

    //use reducer
    const[state, dispatch] = useReducer(reducer, intitialState);

    let API= "https://hn.algolia.com/api/v1/search?";

    const fetchApiData = async (url) =>{

        dispatch({type: "SET_LOADING"});

        try {
           const res = await fetch(url); 
           const data = await res.json();
           console.log(data);
           //isLoading=false;
           dispatch({
               type: "GET_STORIES",
               payload: {
                   hits: data.hits,  //here hits is not as intialstate hits variable, it is payload loacl variable
                   nbPages: data.nbPages,
               },
           });
        } catch (error) {
            console.log(error);
        }
    }

    //remove post
    const removePost = (postId) =>{
        dispatch({type: "REMOVE_POST", payload: postId});
    };

    //search

    const searchPost = (searchQuery) =>{
        dispatch({type: "SEARCH_QUERY", payload: searchQuery});
    };

    //pagination
    const getPrevPage = () =>{
        dispatch({type: "PREV_PAGE"});
    };


    const getNextPage = () =>{
        dispatch({type: "NEXT_PAGE"});
    };

    useEffect(()=>{
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    },[state.query, state.page]) //[] - 2nd param means only load once
    //[] with value means to update query and page values whenever their values and refresh the webpage


    return <AppContext.Provider value={{...state, removePost, searchPost,getPrevPage,getNextPage}}> {/* copying all variable from inititalstate state variable */}
        {children}
        </AppContext.Provider>
}

export {AppContext, AppProvider};