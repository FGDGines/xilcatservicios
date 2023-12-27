import React from 'react'
import { useQueryClient, useQuery, useMutation } from 'react-query'
import clients from '../services/clients'

const useClients = () => {
    const queryClient = useQueryClient()
    
    {/* I need to change the any type in useQUey */}
    const list = useQuery<any, any>('clients', clients.get)

    const getClient = (id:number) => useQuery<any, any>(['clients', id], clients.getById)


    const add = useMutation<any, any, any>({
        mutationFn: clients.post,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['clients']})
        }
    })

    return {
        list,
        add,
        getClient
    }
}

export default useClients