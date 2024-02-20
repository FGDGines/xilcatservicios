import { useQueryClient, useQuery, useMutation } from 'react-query'
import clients from '../services/clients'
import { TClient } from '../types/client'
import { TClientsCategory } from '../components/Intranet/types'

const useClients = (category: TClientsCategory) => {
    const queryClient = useQueryClient()
    
    const list = useQuery<TClient[], any>(['clients', category], clients.get)

    const getClient = (id:number) => useQuery<TClient, any>(['clients', id], clients.getById)

    const add = useMutation<any, any, any>({
        mutationFn: clients.post,
        onSuccess: () => {
            queryClient.invalidateQueries('clients')
            // queryClient.invalidateQueries({ queryKey: ['clients']})
        }
    })

    const erase = useMutation<any, any, any>({
        mutationFn: clients.erase,
        onSuccess: () => {
            queryClient.invalidateQueries('clients')
        }
    })

    const update = useMutation<any, any,{ data:Partial<TClient>, id: number }>({
        mutationFn: clients.update,
        onSuccess: () => {
            queryClient.invalidateQueries('clients')
        }
    })

    const addPdf = useMutation<any, any, { clientId: number, pdfType: string, pdf: any }>({
        mutationFn: clients.addPdf,
        onSuccess: () => {
            queryClient.invalidateQueries('clients')
        }
    })

    return {
        list,
        add,
        erase,
        update,
        getClient,
        addPdf
    }
}

export default useClients