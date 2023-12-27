import React from 'react'
import { useQueryClient, useQuery, useMutation } from 'react-query'
import clients from '../services/clients'
import { TClient } from '../types/client'

const useClients = () => {
    const queryClient = useQueryClient()
    
    const list = useQuery<TClient[], any>('clients', clients.get)

    const getClient = (id:number) => useQuery<TClient, any>(['clients', id], clients.getById)

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