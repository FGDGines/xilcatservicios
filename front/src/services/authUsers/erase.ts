import axios from 'axios'

const erase = async (id: number) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_BACKEND_URL + '/auth/' + id)
        if (response.statusText !== 'OK') throw new Error("Algo paso")
        return response.data
    } catch (error: any) {
        const messages = error.response.data.message
        console.log('errror', error)
        throw new Error(messages)
    }
}

export default erase