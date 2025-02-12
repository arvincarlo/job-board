"use client"

import { useJobs } from "./_context/JobsContext";
import Error from "./_components/Error";
import Filters from "./_components/Filters";
import Jobs from "./_components/Jobs";

export default function Page() {
  const { jobs, error, filters } = useJobs();
  
  return (
    <div className="">
      <div className="bg-mobile-image bg-contain lg:bg-desktop-image bg-no-repeat w-full h-auto">
        <div className="pt-[120px] lg:pt-48 px-6 lg:mx-36">
          {/* Errors */}
          { error && <Error>{error}</Error>}

          {/* filters */}
          {filters.length > 0 && <Filters filters={filters}/>}
          
          {/* Jobs */}
          {jobs?.length > 0 && <Jobs jobs={jobs}/>}
        </div>
      </div>
    </div>
  );
}
