import { deleteJob } from "@/actions/job";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import {toast} from "@/components/ui/use-toast"

export const useDeleteJob = (id: string) =>{
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: async ()=>{
            const response = await deleteJob(id);
            return response;
        },
        onSuccess: () =>{
            toast({description:"Item deleted successfully."})
            queryClient.invalidateQueries({queryKey:["jobs"]});
            queryClient.invalidateQueries({queryKey:["active"]});
            queryClient.invalidateQueries({queryKey:["inactive"]});
        },
        onError:() =>{
            toast({description:"Failed to delete item."})
        },
    });
    return mutation;
}