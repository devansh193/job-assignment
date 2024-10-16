"use client";
import { useEffect, useState } from "react";
import { CardWrapper } from "./card-wrapper";
import { JobDisplay, JobLoading } from "./job-display";
import { Job } from "@prisma/client";
import { fetchInActiveJobs } from "@/actions/job";
import { useRouter } from "next/navigation";
import { useGetInActiveJobs } from "@/features/jobs/actions/use-get-inactive-jobs";

export const InActiveJobs = () => {
  const {isLoading, data: inActiveJobs} = useGetInActiveJobs();


  if (isLoading) {
    <div>
      <CardWrapper  title={"Unpublished jobs"}>
        <JobLoading />
      </CardWrapper>
    </div>;
  }

  return (
    <div>
      <CardWrapper title={"Unpublished jobs"}>
        {inActiveJobs &&
        inActiveJobs.map((job: Job) => (
          <JobDisplay key={job.id} job={job} />
        ))}
      </CardWrapper>
    </div>
  );
};
