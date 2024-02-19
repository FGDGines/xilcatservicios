import axios from "axios"

const get = async ({ queryKey }: { queryKey: any[]}) => {
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