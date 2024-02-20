import axios from "axios"

export const get = async ({ queryKey}: {queryKey: any}) => {
    const [_, category] = queryKey
    try {
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL + '/client?category=' + category)
        if (response.statusText !== 'OK') throw new Error("Algo paso")
        return response.data
    } catch (error: any) {
        return 'something wrong'
    }
}