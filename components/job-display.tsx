import { Job } from "@prisma/client";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { icons, Loader, Loader2, MapPin } from "lucide-react";
import { CardButton } from "./card-button";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";
import { publishJob } from "@/actions/job";
import { toast } from "sonner";

type JobDisplayProps = {
  job: Job;
};

const handleClick = async (id: string) => {
  try {
    const toastId = toast.message("Publishing job", {
      icon: <Loader className="animate-spin" />,
    });
    const result = await publishJob(id);
    {
      result.status === "success"
        ? toast.success("Job published successfully ", {
            id: toastId,
            icon: "",
          })
        : toast.error(result.status, {
            id: toastId,
            icon: "",
          });
    }
  } catch (error) {}
};

export const JobDisplay = ({ job }: JobDisplayProps) => {
  const { title, companyName, status } = job;
  return (
    <Card className="border-none drop-shadow-lg my-4 border-b rounded-md hover:shadow-lg hover:bg-gray-50 relative">
      {status === "INACTIVE" && (
        <Button
          onClick={(e) => handleClick(job.id)}
          className="absolute top-2 right-4 z-10"
          size="sm"
        >
          Publish
        </Button>
      )}
      <CardHeader className="flex flex-row items-center justify-between gap-x-4">
        <div className="space-y-2">
          <CardTitle className="text-2xl line-clamp-1">{companyName}</CardTitle>
          <CardDescription className="line-clamp-1">
            <span className="text-lg">{title}</span>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <div>
          <h1 className="mb-2 line-clamp-1 font-semibold">
            {job.currency} {job.salary}
          </h1>
          <h1 className="line-clamp-3">{job.description}</h1>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex">
          <MapPin className="text-gray-700 mr-1 font-semibold" />
          <h1 className="text-sm font-semibold mt-1">{job.location}</h1>
        </div>
        <CardButton job={job} />
      </CardFooter>
    </Card>
  );
};

export const JobLoading = () => {
  return (
    <>
      <Card className="border-none drop-shadow-lg my-4 border-b rounded-md hover:shadow-lg hover:bg-gray-50">
        <CardHeader className="flex flex-row items-center justify-between gap-x-4">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-8 lg:w-[120px] w-full" />
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="h-[50px] w-full flex items-center justify-center">
            <Loader2 className="h-6 w-6 text-slate-300 animate-spin" />
          </div>
        </CardContent>
      </Card>
      <Card className="border-none drop-shadow-lg my-4 border-b rounded-md hover:shadow-lg hover:bg-gray-50">
        <CardHeader className="flex flex-row items-center justify-between gap-x-4">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-8 lg:w-[120px] w-full" />
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="h-[50px] w-full flex items-center justify-center">
            <Loader2 className="h-6 w-6 text-slate-300 animate-spin" />
          </div>
        </CardContent>
      </Card>
      <Card className="border-none drop-shadow-lg my-4 border-b rounded-md hover:shadow-lg hover:bg-gray-50">
        <CardHeader className="flex flex-row items-center justify-between gap-x-4">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-8 lg:w-[120px] w-full" />
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="h-[50px] w-full flex items-center justify-center">
            <Loader2 className="h-6 w-6 text-slate-300 animate-spin" />
          </div>
        </CardContent>
      </Card>
      <Card className="border-none drop-shadow-lg my-4 border-b rounded-md hover:shadow-lg hover:bg-gray-50">
        <CardHeader className="flex flex-row items-center justify-between gap-x-4">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-8 lg:w-[120px] w-full" />
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="h-[50px] w-full flex items-center justify-center">
            <Loader2 className="h-6 w-6 text-slate-300 animate-spin" />
          </div>
        </CardContent>
      </Card>
    </>
  );
};
