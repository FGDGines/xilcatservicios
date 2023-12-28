import axios from 'axios'
import React from 'react'
import { TClient } from '../../types/client'

type TProps = {
    data: Partial<TClient>
    id: number
}

const update = async ({ data, id }: TProps) => {
    try {
        console.log('here in update', data)
        console.log('here in update id', id)
        const response = await axios.put(import.meta.env.VITE_BACKEND_URL + '/client/' + id, data)
        if (response.statusText !== 'OK') throw new Error("Algo paso")
        return response.data
    } catch (error: any) {
        return 'something wrong'
    }
}

export default update