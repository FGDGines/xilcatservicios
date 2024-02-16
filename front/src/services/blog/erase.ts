import axios from 'axios'

const erase = async (id: number) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_BACKEND_URL + '/blog/' + id)
        if (response.statusText !== 'OK') throw new Error("Algo paso")
        return response.data
    } catch (error: any) {
        throw error
    }
}

export default erase