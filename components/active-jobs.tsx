"use client";
import { useEffect, useState } from "react";
import { CardWrapper } from "./card-wrapper";
import { JobDisplay, JobLoading } from "./job-display";
import { Job } from "@prisma/client";
import { useGetActiveJobs } from "@/features/jobs/actions/use-get-active-jobs";

export const ActiveJobs = () => {
  const {isLoading, data: ActiveJobs} = useGetActiveJobs();


  if (isLoading) {
    <div>
      <CardWrapper  title={"Published jobs"}>
        <JobLoading />
      </CardWrapper>
    </div>;
  }

  return (
    <div>
      <CardWrapper title={"Published jobs"}>
        {ActiveJobs &&
        ActiveJobs.map((job: Job) => (
          <JobDisplay key={job.id} job={job} />
        ))}
      </CardWrapper>
    </div>
  );
};
