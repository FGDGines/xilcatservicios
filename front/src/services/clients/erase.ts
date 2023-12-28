import axios from 'axios'
import { QueryFunctionContext } from 'react-query'

const erase = async (id: number) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_BACKEND_URL + '/client/' + id)
        if (response.statusText !== 'OK') throw new Error("Algo paso")
        return response.data
    } catch (error: any) {
        return 'something wrong'
    }
}

export default erase