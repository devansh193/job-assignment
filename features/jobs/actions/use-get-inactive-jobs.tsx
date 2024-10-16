import { useQuery } from "@tanstack/react-query";
import { fetchInActiveJobs } from "@/actions/job";


export const useGetInActiveJobs = () => {
  const query = useQuery({
    queryKey: ["inactive"],
    queryFn: async () => {
      const response = await fetchInActiveJobs(); 
      if (response.status === "error") {
        throw new Error(response.message);
      }
      return response.data;
    },
  });
  return query;
};


