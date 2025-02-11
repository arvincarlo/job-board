import { getJobs } from "@/app/_services/data-service";
import Image from "next/image";

interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export default async function Page() {
  const jobs = await getJobs();

  console.log(jobs);

  return (
    <div className="bg-custom-light-cyan">
      <div className="bg-mobile-image bg-contain lg:bg-desktop-image bg-no-repeat w-full h-auto ">
        
        <div className="pt-[120px] lg:pt-48 px-6 lg:mx-36">
          {/* filter */}
          <div className="flex bg-white shadow-lg p-5 rounded items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <div>
                <span className="inline-block bg-light-grayish-cyan-tablets rounded px-2 py-1 text-base font-semibold text-primary focus:bg-primary focus:text-white">Javascript</span>
                <button className="text-white bg-primary px-2 py-1">X</button>
              </div>
              <div>
                <span className="inline-block bg-light-grayish-cyan-tablets rounded px-2 py-1 text-base font-semibold text-primary focus:bg-primary focus:text-white">Javascript</span>
                <button className="text-white bg-primary px-2 py-1">X</button>
              </div>
              <div>
                <span className="inline-block bg-light-grayish-cyan-tablets rounded px-2 py-1 text-base font-semibold text-primary focus:bg-primary focus:text-white">Javascript</span>
                <button className="text-white bg-primary px-2 py-1">X</button>
              </div>
            </div>
            <div>
              <button className="text-custom-grayish-cyan">Clear</button>
            </div>
          </div>
          {/* Jobs */}
          {jobs.map((job: Job) => (
            <div key={job.id} className={`lg:flex lg:items-center lg:justify-between mt-10 max-w-sm lg:max-w-full rounded overflow-hidden bg-white shadow-lg p-6 ${job.new || job.featured ? 'border-l-[5px] border-l-primary' : null}`}>
              <div className="flex grow items-center mb-4 lg:gap-2">
                <div className="relative aspect-square h-12 w-12 lg:h-24 lg:w-24">
                  <Image fill className="object-cover" src={job.logo} alt={`${job.id}`} />
                </div>
                <div className="ml-4">
                  <div className="flex gap-2 lg:gap-4">
                    <div className="text-primary font-medium text-base lg:text-lg">{job.company}</div>

                      <div className="flex items-center">
                        {job.new && <span className="flexinline-block bg-primary rounded-full px-2 py-[2px] text-sm  text-white mr-2 items-center align-middle">NEW!</span>}
                        {job.featured && <span className="inline-block bg-darkgray rounded-full px-2 py-[2px] text-sm  text-white">FEATURED</span>}
                      </div>
                  </div>
                  <div className="text-gray-600 font-semibold text-lg lg:text-2xl hover:text-primary hover:cursor-pointer">{job.position}</div>
                  <div className="flex space-x-2 text-custom-grayish-cyan text-base lg:text-lg">
                    <span>{job.postedAt}</span>
                    <span>-</span>
                    <span>{job.contract}</span>
                    <span>-</span>
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex border-t border-gray-200 mt-2 pt-4">
              </div>
              <div className="flex gap-2 flex-wrap">
                {
                  [...job.languages, ...job.tools].map(item => (
                    <button key={item} className="inline-block bg-light-grayish-cyan-tablets rounded px-2 py-1 text-base font-semibold text-primary mr-2 focus:bg-primary focus:text-white">{item}</button>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
