import axios from 'axios'

const postGuest = async (data: any) => {
    try {
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/blog/guest', data)
        if (response.statusText !== 'Created') throw new Error("Algo paso")
        return response.data
    } catch (error: any) {
        throw error.response.data
    }
}

export default postGuest