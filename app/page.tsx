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
    <>
      <div className="bg-mobile-image bg-contain lg:bg-desktop-image bg-no-repeat w-full h-auto ">
        test
        <ul>
          {jobs.map((job: Job) => (
            <li key={job.id}>{job.position}</li>
          ))}
        </ul>
        test
        test
        test
      </div>
    </>
  );
}
