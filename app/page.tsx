import { getJobs } from "@/app/_services/data-service";
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
        <div className="pt-[213px] px-6">
          <div className="max-w-sm rounded overflow-hidden bg-white shadow-lg  p-6">
            <div className="flex items-center mb-4">
                <div className="bg-gray-200 p-3 rounded-full">
                    {/* Placeholder for company logo */}
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"></path>
                    </svg>
                </div>
                <div className="ml-4">
                    <div className="text-gray-900 font-bold text-xl">Photosnap</div>
                    <div className="text-gray-600">Senior Frontend Developer</div>
                </div>
            </div>
            <div className="text-gray-700 mb-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Full Time</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">USA only</span>
            </div>
            <div className="border-t border-gray-200 pt-4">
                <div className="text-gray-600 text-sm mb-2">Frontend</div>
                <div className="text-gray-600 text-sm mb-2">Senior</div>
                <div className="text-gray-600 text-sm">HTML</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
