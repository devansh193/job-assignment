import { getJobs } from "@/actions/job";
import { GetJobSchemaType } from "@/zod/job";
import { useQuery } from "@tanstack/react-query";
export const useFilterJobs = (data: GetJobSchemaType) => {
  const query = useQuery({
    queryKey: ["filter", data],
    queryFn: async () => {
      const response = await getJobs(data);
      if (response.status === "error") {
        throw new Error(response.message);
      }
      return response;
    },
  });
  return query;
};
