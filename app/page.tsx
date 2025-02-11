import { getJobs } from "@/app/_services/data-service";

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
    <div>
      <h1 className="underline text-emerald-400">List of Jobs</h1>
      <p>
        This is a list of available software engineering roles at various companies.
      </p>
      <ul>
        {jobs.map((job: Job) => (
          <li key={job.id}>{job.position}</li>
        ))}
      </ul>
    </div>
  );
}
