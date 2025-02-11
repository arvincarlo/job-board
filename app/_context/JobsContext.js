"use client";

import { createContext, useContext, useReducer, useEffect } from "react";

const API_URL = "http://localhost:9000";

const initialState = {
    filter: [],
    jobs: [],
    error: null,
}

function reducer(state, action) {
    switch (action.type) {
        case "jobs/loaded":
            return {
                ...state, 
                jobs: action.payload
            };
        case "jobs/error":
            return {
                ...state,
                error: action.payload
            };
        case "filter/set": 
            return {
                ...state, 
                filter: [...new Set([...state.filter, action.payload])]
            };
        default:
            return state;
    }
}

const JobsContext = createContext();

function JobsProvider({children}) {
    useEffect(() => {
        async function fetchJobs() {
            try {
                const response = await fetch(`${API_URL}/jobs`);
                const data = await response.json();

                if (data) dispatch({type: "jobs/loaded", payload: data})
            }
            catch (error) {
                console.error(error);
                // dispatch({type: "jobs/error", payload: "There was an error fetching jobs"})
            }
        }
        fetchJobs();
    }, []);


    const [{jobs, filter}, dispatch] = useReducer(reducer, initialState);

    return (
        <JobsContext.Provider value={{
            jobs,
            filter,
            dispatch
        }}>
            {children}
        </JobsContext.Provider>
    )
}

function useJobs() {
    const context = useContext(JobsContext);

    if (!context) throw new Error("Jobs Context is used outside the provider");

    return context;
}

export {JobsProvider, useJobs};