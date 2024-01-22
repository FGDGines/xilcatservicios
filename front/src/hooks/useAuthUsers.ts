import { useMutation, useQuery, useQueryClient } from "react-query";
import authUsers from "../services/authUsers";

const useAuthUsers = () => {
    const list = useQuery('authUsers', authUsers.get)
    const queryClient = useQueryClient()

    const update = useMutation<any, any,{ data:any, id: number }>({
        mutationFn: authUsers.update,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['authUsers']})
        }
    })

    return {
        list,
        update
    }
}

export default useAuthUsers;