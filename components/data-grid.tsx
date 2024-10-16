"use client";

import {
  Card,
  CardFooter,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { useGetActiveJobs } from "@/features/jobs/actions/use-get-active-jobs";
import { useGetInActiveJobs } from "@/features/jobs/actions/use-get-inactive-jobs";
import { useGetJobs } from "@/features/jobs/actions/use-get-jobs";
import { get } from "http";
export const DataGrid = () => {
  const getJob = useGetJobs();
  const activeJobs = useGetActiveJobs();
  const inActiveJobs = useGetInActiveJobs();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pb-2 mb-8 mt-4">
      <Card className="bg-zinc-200/20 hover:bg-zinc-200/40 border shadow-md">
        <CardHeader>
          <CardTitle>
            <p className="text-3xl">Active jobs</p>
          </CardTitle>
          <CardDescription>
            <span>Total number of active jobs.</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h1 className="text-2xl font-semibold">{activeJobs.data?.length}</h1>
        </CardContent>
      </Card>
      <Card className="bg-zinc-200/20 hover:bg-zinc-200/40 border shadow-md">
        <CardHeader>
          <CardTitle>
            <p className="text-3xl"> Inactive jobs</p>
          </CardTitle>
          <CardDescription>
            <span>Total number of active jobs.</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h1 className="text-2xl font-semibold">{inActiveJobs.data?.length}</h1>
        </CardContent>
      </Card>
      <Card className="bg-zinc-200/20 hover:bg-zinc-200/40 border shadow-md">
        <CardHeader>
          <CardTitle>
            <p className="text-3xl">Total jobs</p>
          </CardTitle>
          <CardDescription>
            <span>Total number of active jobs.</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h1 className="text-2xl font-semibold">{getJob.data?.length}</h1>
        </CardContent>
      </Card>
    </div>
  );
};
