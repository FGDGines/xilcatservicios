import axios from 'axios'

const post = async (data: any) => {
    try {
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/client', data)
        if (response.statusText !== 'Created') throw new Error("Algo paso")
        return response.data
    } catch (error: any) {
        throw error
    }
}

export default post