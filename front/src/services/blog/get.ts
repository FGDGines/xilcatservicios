import axios from "axios"
import { TArticle } from "../../pages/Blog/types"

const get = async ({ queryKey }: { queryKey: any[] }): Promise<TArticle[]> => {
    const [_, page, category, limit, showApproved] = queryKey
    try {
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL + `/blog?showApproved=${showApproved}&page=${page}&category=${category}&limit=${limit}`)
        if (response.statusText !== 'OK') throw new Error("Algo paso")
        return response.data
    } catch (error: any) {
        throw error.response.data
    }
}

export default get