import Image from "next/image";
import { useJobs } from "../_context/JobsContext";

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


export default function Jobs({jobs}: {jobs: Job[]}) {
    const {dispatch} = useJobs();

    return (
        <>
            {jobs?.length > 0 && jobs?.map((job: Job) => (
                <div
                    key={job.id}
                    className={`relative lg:flex lg:items-center lg:justify-between mt-10 max-w-sm lg:max-w-full rounded bg-white shadow-primary/20 shadow-lg p-6 ${job.new || job.featured ? 'border-l-[5px] border-l-primary' : null}`}
                >

                    {/* Circular Image */}
                    <div className="absolute -top-6 left-6 lg:relative lg:top-0 lg:left-0 aspect-square h-12 w-12 lg:h-24 lg:w-24">
                    <Image fill className="object-cover rounded-full" src={job.logo} alt={`${job.id}`} />
                    </div>
              
                    {/* Card Content */}
                    <div className="flex grow items-center mb-4 lg:gap-2">
                        <div className="ml-1 lg:ml-4">
                            <div className="flex gap-2 lg:gap-4">
                                <div className="text-primary font-medium text-base lg:text-lg">{job.company}</div>
                                <div className="flex items-center">
                                    {job.new && (
                                        <span className="inline-block bg-primary rounded-full px-2 py-[2px] text-sm text-white mr-2 items-center align-middle">
                                            NEW!
                                        </span>
                                    )}
                                    {job.featured && (
                                        <span className="inline-block bg-darkgray rounded-full px-2 py-[2px] text-sm text-white">
                                            FEATURED
                                        </span>
                                    )}
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
              
                    {/* Divider */}
                    <div className="flex border-t border-gray-200 mt-2 pt-4"></div>
              
                {/* Tags - Langauge & Tools */}
                    <div className="flex gap-2 flex-wrap">
                        {[...job.languages, ...job.tools].map((item) => (
                            <button
                                onClick={() => dispatch({ type: "filters/set", payload: item })}
                                key={item}
                                className="inline-block bg-light-grayish-cyan-tablets rounded px-2 py-1 text-base font-semibold text-primary mr-2 focus:bg-primary focus:text-white"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
              </div>
            ))}
        </>
    )
}
