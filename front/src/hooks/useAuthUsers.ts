import { useMutation, useQuery, useQueryClient } from "react-query";
import authUsers from "../services/authUsers";
import { toast } from "react-toastify";

export type TRegisterUser = {
    username: string;
    password: string
}

const useAuthUsers = () => {
    const list = useQuery('authUsers', authUsers.get)
    const queryClient = useQueryClient()

    const update = useMutation<any, any,{ data:any, id: number }>({
        mutationFn: authUsers.update,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['authUsers']})
        }
    })
    const erase = useMutation<any, any, number>({
        mutationFn: authUsers.erase,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['authUsers']})
        },
        onError: (error) => {
            const messages = String(error).split('$')
            messages.forEach((message: string) => toast.error(message))
        }
    })
    
    const register = useMutation<any, any,{ data:TRegisterUser }>({
        mutationFn: authUsers.post,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['authUsers']})
            toast.success("Usuario de Xilcat Agregado exitosamente")

        },
        onError: (error) => {
            const messages = String(error).split('$')
            messages.forEach((message: string) => toast.error(message))
        }
    })

    return {
        list,
        update,
        register,
        erase
    }
}

export default useAuthUsers;