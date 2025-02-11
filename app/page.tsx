import { getJobs } from "@/app/_services/data-service";
import Image from "next/image";
// import desktop_bg from "@/public/images/bg-header-desktop.svg";
// import mobile_bg from "@/public/images/bg-header-mobile.svg";
// import Image from "next/image";

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
        {/* <ul>
          {jobs.map((job: Job) => (
            <li key={job.id}>{job.position}</li>
          ))}
        </ul> */}
        <div className="pt-[172px] px-6">
          {jobs.map((job: Job) => (
            <div key={job.id} className={`mt-10 max-w-sm rounded overflow-hidden bg-white shadow-lg p-6 ${job.new || job.featured ? 'border-l-[5px] border-l-primary' : null}`}>
              <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 aspect-auto">
                    <Image fill className="object-cover" src={job.logo} alt={`${job.id}`} />
                  </div>
                  <div className="ml-4">
                      <div className="flex gap-2">
                        <div className="text-gray-900 font-bold text-base">{job.company}</div>

                          <div className="flex items-center">
                            {job.new && <span className="flexinline-block bg-primary rounded-full px-2 py-[2px] text-sm  text-white mr-2 items-center align-middle">NEW!</span>}
                            {job.featured && <span className="inline-block bg-darkgray rounded-full px-2 py-[2px] text-sm  text-white">FEATURED</span>}
                          </div>
                      </div>
                      <div className="text-gray-600 font-semibold text-lg">{job.position}</div>
                  </div>
              </div>
              <div className="flex space-x-2 text-custom-grayish-cyan text-base">
                <span>{job.postedAt}</span>
                <span>-</span>
                <span>{job.contract}</span>
                <span>-</span>
                <span>{job.location}</span>
              </div>
              <div className="flex border-t border-gray-200 pt-4">
              </div>
              <div className="flex gap-2 flex-wrap">
                {job.languages.map(language => (
                  <span key={language} className="inline-block bg-light-grayish-cyan-tablets  rounded px-2 py-1 text-base font-semibold text-primary mr-2">{language}</span>
                ))}
                {job.tools.map(tool => (
                  <span key={tool} className="inline-block bg-light-grayish-cyan-tablets rounded px-2 py-1 text-base font-semibold text-primary mr-2">{tool}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
