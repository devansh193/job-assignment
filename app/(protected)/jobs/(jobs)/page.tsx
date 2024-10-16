"use client";
import { useState, useEffect } from "react";
import { Job } from "@prisma/client";
import { JobDisplay, JobLoading } from "@/components/job-display";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetActiveJobs } from "@/features/jobs/actions/use-get-active-jobs";
import Sidebar from "@/components/Sidebar";

const JobsPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const { isLoading, error, data } = useGetActiveJobs();

  useEffect(() => {
    if (data) {
      setJobs(data);
    }
  }, [data]);

  if (isLoading) {
    return (
      <main className="max-w-full mx-2">
        <div className="flex">
          <div className="w-64 pr-4 shrink-0 hidden md:block mt-4"></div>
          <div className="w-full">
            <JobLoading />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-full mx-2">
      <div className="flex">
        <div className="w-64 pr-4 shrink-0 hidden md:block mt-4">
          <Sidebar setJobs={setJobs}/>
        </div>
        <div className="w-full">
          {jobs &&
            jobs.map((job: Job) => (
              <JobDisplay key={job.id} job={job} />
            ))}
          {data?.length === 0 ? (
            <Card className="w-full h-screen mt-4">
              <CardHeader>
                <CardTitle>
                  <span>No published job</span>
                </CardTitle>
              </CardHeader>
            </Card>
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default JobsPage;
