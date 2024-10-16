import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import {fetchJobDetails} from "@/actions/job";
import {toast} from "@/components/ui/use-toast";

export const useGetJob = (id: string) =>{
    const query = useQuery({
        queryKey:["job"],
        queryFn: async () =>{
            const response = await fetchJobDetails(id);
            if(response.status == "error"){
                throw new Error(response.message);
            }
            return response;
        },
    });
    return query;
}