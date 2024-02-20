import axios from "axios"

const getCount = async () => {
    try {
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL + `/blog/total`)
        if (response.statusText !== 'OK') throw new Error("Algo paso")
        return response.data
    } catch (error: any) {
        throw error.response.data
    }
}

export default getCount