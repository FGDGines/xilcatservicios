import { useMutation, useQuery, useQueryClient } from "react-query";
import journals from "../services/journal";
import { TJournal } from "../types/journal";

const useJournal = () => {
    const queryClient = useQueryClient()
    const list = useQuery('journal', journals.get)

    const post = useMutation<any, any, {data: TJournal}>({
        mutationFn: journals.post,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['journal']})
        }
    })
    const erase = useMutation<any, any, {id: number}>({
        mutationFn: journals.erase,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['journal']})
        }
    })

    const update = useMutation<any, any, {data: Partial<TJournal>, id: number}>({
        mutationFn: journals.update,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['journal']})
        }
    })


    return {
        list,
        post,
        erase,
        update
    }
}

export default useJournal;