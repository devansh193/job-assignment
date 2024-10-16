import { updateJob } from "@/actions/job";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import {toast} from "@/components/ui/use-toast";
import { UpdateJob } from "@/zod/job";
import { SAPayload } from "@/types";

export const useEditJob = (id:string) =>{
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (value: UpdateJob): Promise<SAPayload> =>{
            const response = await updateJob({...value});
            return response;
        },
        onSuccess: ()=>{
            toast({description:" Edited successfully"});
            queryClient.invalidateQueries({queryKey:["jobs"]});
            queryClient.invalidateQueries({queryKey:["job"]});
            queryClient.invalidateQueries({queryKey:["active"]});
            queryClient.invalidateQueries({queryKey:["inactive"]});
        },
        onError: ()=>{
            toast({description:"Failed to edit."});
        },
     });
     return mutation;
};


