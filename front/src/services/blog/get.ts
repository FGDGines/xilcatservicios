import axios from "axios"

const get = async () => {
    try {
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL + '/blog')
        if (response.statusText !== 'OK') throw new Error("Algo paso")
        return response.data
    } catch (error: any) {
        throw error.response.data
    }
}

export default get