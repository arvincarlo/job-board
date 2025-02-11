"use client";

import { createContext, useContext } from "react";
import { getJobs } from "../_services/data-service";

const JobsContext = createContext();

async function JobsProvider({children}) {
    const cabins = await getJobs();
    // console.log(cabins);

    return (
        <JobsContext.Provider value={{
            cabins
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