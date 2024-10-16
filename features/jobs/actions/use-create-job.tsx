import { createJob } from "@/actions/job";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NewJob } from "@/zod/job";
import { SAPayload } from "@/types";

export const useCreateJob = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: NewJob): Promise<SAPayload> => {
      return await createJob(data);
    },
    onSuccess: (data: SAPayload) => {
      if (data.status === "success") {
        queryClient.invalidateQueries({queryKey: ["jobs"]});
        queryClient.invalidateQueries({queryKey: ["active"]});
        queryClient.invalidateQueries({queryKey: ["inactive"]});
      }
    },
    onError: (error: unknown) => {
      console.error("Error creating job:", error);
    },
  });
  console.log("i am here");

  return mutation;
};
