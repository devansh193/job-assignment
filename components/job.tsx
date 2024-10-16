import { fetchJobDetails } from "@/actions/job";
import { useEffect, useState } from "react";
import { toast } from "sonner"; // Assuming you use sonner for notifications

// Define your prop types
interface JobProps {
  job: {
    id: string;
  };
}

interface UpdateJob {
  id: string;
  userId: string;
  title: string;
  description: string;
  companyName: string;
  salary: string;
  currency: string;
  location: string;
  country: string | null;
  status: string | null;
}

export const Jobs = async ({ job }: JobProps) => {
  const [jobDetails, setJobDetails] = useState<UpdateJob | null>(null);

  useEffect(() => {
    const getJobDetails = async () => {
      try {
        const id = job.id;
        const response = await fetchJobDetails(id);
        if (response.status === "success") {
          setJobDetails(response.data || null);
        } else {
          console.log(response.message);
          toast.error("Failed to fetch jobs");
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
        toast.error("Unexpected error");
      }
    };

    getJobDetails();
  }, [job.id]);

  return <div>{jobDetails?.companyName}</div>;
};
