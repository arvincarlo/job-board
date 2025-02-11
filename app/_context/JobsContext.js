"use client";

import { createContext, useContext, useReducer, useEffect } from "react";

const API_URL = "http://localhost:9000";

const initialState = {
    filters: [],
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
        case "filters/set": 
            return {
                ...state, 
                filters: [...new Set([...state.filters, action.payload])]
            };
        case "filters/clear": 
            return {
                ...state, 
                filters: []
            };
        case "filters/unset": 
            return {
                ...state, 
                filters: state.filters.filter((item) => item !== action.payload)
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


    const [{jobs, filters}, dispatch] = useReducer(reducer, initialState);

    // Filter all jobs based on set filters
    const filteredJobs = jobs.filter(job => {
        // Combile languages and tools into 1 array
        const jobSkills = [...job.languages, ...job.tools];

        // Check if every filter item exists in the jobs skills array
        return filters.every(item => jobSkills.includes(item));
    });

    return (
        <JobsContext.Provider value={{
            jobs: filteredJobs,
            filters,
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