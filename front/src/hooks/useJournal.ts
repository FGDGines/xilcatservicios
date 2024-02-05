import { useMutation, useQuery, useQueryClient } from "react-query";
import journals from "../services/journal";
import { TJournal } from "../types/journal";

const useBlog = () => {
    const queryClient = useQueryClient()
    const list = useQuery('journal', journals.get)

    const post = useMutation<any, any, {data: TJournal}>({
        mutationFn: journals.post,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['journal']})
        }
    })


    return {
        list,
        post,
    }
}

export default useBlog;