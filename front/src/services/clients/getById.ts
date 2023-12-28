import axios from "axios"
import { QueryFunctionContext } from "react-query"

const getById = async (ctx: QueryFunctionContext) => {
    const [_, id] = ctx.queryKey
    try {
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL + '/client/' + id)
        if (response.statusText !== 'OK') throw new Error("Algo paso")
        return response.data
    } catch (error: any) {
        return 'something wrong'
    }
    // return await axios.get('http://localhost:3000' + import.meta.env.VITE_BACKEND_URL + '/clients')
}

export default getById