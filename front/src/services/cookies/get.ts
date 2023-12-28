import axios from "axios"

export const get = async () => {
    try {
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL + '/cookies')
        if (response.statusText !== 'OK') throw new Error("Algo paso")
        return response.data
    } catch (error: any) {
        return 'something wrong'
    }
}