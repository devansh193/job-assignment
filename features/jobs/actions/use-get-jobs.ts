import { useQuery } from "@tanstack/react-query";
import { fetchAllJobs } from "@/actions/job";


export const useGetJobs = () => {
  const query = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const response = await fetchAllJobs(); 
      if (response.status === "error") {
        throw new Error(response.message);
      }
      return response.data;
    },
  });
  return query;
};


